const data = window.DASHBOARD_DATA;
const palette = ["#2f6fbb", "#147c7c", "#b7791f", "#7a5bb8", "#3f7d3d", "#b3404a", "#62748a", "#c25a31", "#5b8c85", "#805ad5", "#4a7c59", "#8a6f2a", "#2c7a9b", "#9a4d65", "#526d3f", "#6b7280"];
const coreDatasets = new Set(["faang", "dow", "tsx_proxy", "euro_equivalent", "china", "japan", "south_korea"]);
let liveQuotes = new Map();
let latestRun = null;
let state = {
  rangeMonths: 60,
  datasets: new Set(data.datasets.map((item) => item.slug)),
  compareA: null,
  compareB: null
};

const fmtPct = (value) => value === null || value === undefined ? "n/a" : `${value.toFixed(2)}%`;
const fmtMoney = (value) => value === null || value === undefined ? "n/a" : `$${Number(value).toFixed(2)}`;
const cls = (value) => value === null || value === undefined ? "" : value >= 0 ? "positive" : "negative";
const bgCls = (value) => value === null || value === undefined ? "" : value >= 0 ? "positive-bg" : "negative-bg";
const fmtSignedPct = (value) => value === null || value === undefined ? "n/a" : `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
const seriesColor = (index) => palette[index % palette.length];
const groupBy = (rows, keyFn) => rows.reduce((map, row) => {
  const key = keyFn(row);
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(row);
  return map;
}, new Map());

function liveKey(row) {
  return `${row.datasetSlug}:${row.symbol}`;
}

async function loadLiveQuotes() {
  try {
    const response = await fetch("/api/market-latest", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (payload.status !== "ok") {
      document.querySelector("#liveStatusLabel").textContent = payload.status === "unconfigured" ? "Not configured" : "Unavailable";
      document.querySelector("#liveRefreshLabel").textContent = payload.message || "Static dashboard fallback";
      document.querySelector("#liveSourceLabel").textContent = "Historical static data shown";
      return;
    }
    liveQuotes = new Map((payload.quotes || []).map((quote) => [`${quote.dataset_slug}:${quote.symbol}`, quote]));
    latestRun = payload.latestRun;
    document.querySelector("#liveStatusLabel").textContent = `${liveQuotes.size} latest quotes`;
    document.querySelector("#liveRefreshLabel").textContent = latestRun?.finished_at
      ? new Date(latestRun.finished_at).toLocaleString()
      : "Refresh pending";
    document.querySelector("#liveSourceLabel").textContent = payload.message || "Best-effort intraday polling";
    render();
  } catch {
    document.querySelector("#liveStatusLabel").textContent = "Static mode";
    document.querySelector("#liveRefreshLabel").textContent = "No live API detected";
    document.querySelector("#liveSourceLabel").textContent = "Historical static data shown";
  }
}

function bySelectedDataset(row) {
  return state.datasets.has(row.datasetSlug);
}

function selectedSeries() {
  const rows = data.series.filter(bySelectedDataset);
  const months = [...new Set(rows.map((row) => row.month))].sort();
  const start = state.rangeMonths > 0 ? months.slice(-state.rangeMonths)[0] : months[0];
  const filtered = rows.filter((row) => row.month >= start);
  const firstBySeries = new Map();
  filtered.forEach((row) => {
    if (!firstBySeries.has(row.seriesId)) firstBySeries.set(row.seriesId, row.close);
  });
  return filtered.map((row) => ({
    ...row,
    selectedIndex: row.close / firstBySeries.get(row.seriesId) * 100
  }));
}

function metricForRange(rows) {
  const grouped = groupBy(rows, (row) => row.seriesId);
  return [...grouped.entries()].map(([seriesId, items]) => {
    const sorted = items.toSorted((a, b) => a.month.localeCompare(b.month));
    const first = sorted[0];
    const latest = sorted.at(-1);
    const returns = sorted.map((item) => item.monthlyReturnPct).filter((value) => value !== null).map((value) => value / 100);
    const totalReturn = latest.close / first.close - 1;
    const years = Math.max(sorted.length / 12, 0.01);
    const annReturn = Math.pow(latest.close / first.close, 1 / years) - 1;
    const mean = returns.reduce((sum, value) => sum + value, 0) / Math.max(returns.length, 1);
    const variance = returns.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / Math.max(returns.length - 1, 1);
    const volatility = Math.sqrt(variance) * Math.sqrt(12);
    const base = data.metrics.find((item) => item.seriesId === seriesId);
    return {
      ...base,
      totalReturnPct: totalReturn * 100,
      annualizedReturnPct: annReturn * 100,
      volatilityPct: volatility * 100,
      latestClose: liveQuotes.get(seriesId)?.price ?? latest.close,
      liveChangePercent: liveQuotes.get(seriesId)?.change_percent ?? null,
      liveQuoteTime: liveQuotes.get(seriesId)?.quote_time ?? null,
      liveSourceStatus: liveQuotes.get(seriesId)?.source_status ?? null
    };
  }).sort((a, b) => b.totalReturnPct - a.totalReturnPct);
}

function renderFilters() {
  const wrap = document.querySelector("#datasetFilters");
  wrap.innerHTML = "";
  data.datasets.forEach((dataset) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = dataset.name;
    button.setAttribute("aria-pressed", state.datasets.has(dataset.slug));
    button.addEventListener("click", () => {
      if (state.datasets.has(dataset.slug) && state.datasets.size > 1) {
        state.datasets.delete(dataset.slug);
      } else {
        state.datasets.add(dataset.slug);
      }
      render();
    });
    wrap.appendChild(button);
  });
}

function bindQuickActions() {
  document.querySelector("#selectAll").addEventListener("click", () => {
    state.datasets = new Set(data.datasets.map((item) => item.slug));
    render();
  });
  document.querySelector("#clearToCore").addEventListener("click", () => {
    state.datasets = new Set(data.datasets.map((item) => item.slug).filter((slug) => coreDatasets.has(slug)));
    render();
  });
}

function renderSummary(metrics) {
  const best = metrics[0];
  const worstDrawdown = metrics.toSorted((a, b) => a.maxDrawdownPct - b.maxDrawdownPct)[0];
  const avgReturn = metrics.reduce((sum, item) => sum + item.totalReturnPct, 0) / Math.max(metrics.length, 1);
  const cards = [
    ["Symbols", metrics.length, "Selected comparison set"],
    ["Average Return", fmtPct(avgReturn), "Selected time range"],
    ["Best Performer", best ? best.displaySymbol : "n/a", best ? fmtPct(best.totalReturnPct) : ""],
    ["Worst Drawdown", worstDrawdown ? worstDrawdown.displaySymbol : "n/a", worstDrawdown ? fmtPct(worstDrawdown.maxDrawdownPct) : ""]
  ];
  document.querySelector("#metricGrid").innerHTML = cards.map(([label, value, note]) => `
    <article class="metric">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");
}

function linePath(points, xScale, yScale) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"} ${xScale(point.month)} ${yScale(point.selectedIndex)}`).join(" ");
}

function niceTicks(min, max, count = 6) {
  if (!Number.isFinite(min) || !Number.isFinite(max) || min === max) return [min || 0];
  const rawStep = (max - min) / Math.max(count - 1, 1);
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const normalized = rawStep / magnitude;
  const step = (normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10) * magnitude;
  const start = Math.floor(min / step) * step;
  const end = Math.ceil(max / step) * step;
  const ticks = [];
  for (let value = start; value <= end + step / 2; value += step) ticks.push(value);
  return ticks.slice(0, 8);
}

function monthTicks(months, count = 7) {
  if (months.length <= count) return months;
  const ticks = [];
  for (let i = 0; i < count; i++) {
    const index = Math.round(i * (months.length - 1) / (count - 1));
    ticks.push(months[index]);
  }
  return [...new Set(ticks)];
}

function makeSvg(container, width = 900, height = 360) {
  container.innerHTML = "";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("role", "img");
  container.appendChild(svg);
  return svg;
}

function addTitle(el, text) {
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = text;
  el.appendChild(title);
}

function addText(svg, text, x, y, className, anchor = "start") {
  const el = document.createElementNS("http://www.w3.org/2000/svg", "text");
  el.setAttribute("x", x);
  el.setAttribute("y", y);
  el.setAttribute("class", className);
  el.setAttribute("text-anchor", anchor);
  el.textContent = text;
  svg.appendChild(el);
}

function renderLineChart(rows) {
  const svg = makeSvg(document.querySelector("#lineChart"), 980, 390);
  const margin = { top: 22, right: 28, bottom: 48, left: 60 };
  const width = 980 - margin.left - margin.right;
  const height = 390 - margin.top - margin.bottom;
  const months = [...new Set(rows.map((row) => row.month))].sort();
  const values = rows.map((row) => row.selectedIndex);
  const yTicks = niceTicks(Math.min(...values), Math.max(...values), 6);
  const min = Math.min(...yTicks);
  const max = Math.max(...yTicks);
  const xScale = (month) => margin.left + months.indexOf(month) / Math.max(months.length - 1, 1) * width;
  const yScale = (value) => margin.top + (max - value) / Math.max(max - min, 1) * height;
  const grouped = groupBy(rows, (row) => row.seriesId);

  yTicks.forEach((value) => {
    const y = yScale(value);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", margin.left);
    line.setAttribute("x2", margin.left + width);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("class", "grid");
    svg.appendChild(line);
    addText(svg, Math.round(value), margin.left - 10, y + 4, "tick", "end");
  });
  monthTicks(months).forEach((month) => {
    const x = xScale(month);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("x2", x);
    line.setAttribute("y1", margin.top);
    line.setAttribute("y2", margin.top + height);
    line.setAttribute("class", "grid");
    svg.appendChild(line);
    addText(svg, month, x, margin.top + height + 22, "tick", "middle");
  });
  const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yAxis.setAttribute("x1", margin.left);
  yAxis.setAttribute("x2", margin.left);
  yAxis.setAttribute("y1", margin.top);
  yAxis.setAttribute("y2", margin.top + height);
  yAxis.setAttribute("class", "axis");
  svg.appendChild(yAxis);
  const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xAxis.setAttribute("x1", margin.left);
  xAxis.setAttribute("x2", margin.left + width);
  xAxis.setAttribute("y1", margin.top + height);
  xAxis.setAttribute("y2", margin.top + height);
  xAxis.setAttribute("class", "axis");
  svg.appendChild(xAxis);

  [...grouped.entries()].forEach(([seriesId, points], index) => {
    const color = seriesColor(index);
    const sorted = points.toSorted((a, b) => a.month.localeCompare(b.month));
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", linePath(sorted, xScale, yScale));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "2.4");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("stroke-linecap", "round");
    addTitle(path, `${sorted[0].displaySymbol}: ${sorted[0].month} ${sorted[0].selectedIndex.toFixed(1)} to ${sorted.at(-1).month} ${sorted.at(-1).selectedIndex.toFixed(1)}`);
    svg.appendChild(path);
  });

  const legend = document.querySelector("#lineLegend");
  legend.innerHTML = [...grouped.values()].map((points, index) => {
    const first = points[0];
    return `<span class="legend-item"><span class="legend-dot" style="background:${seriesColor(index)}"></span>${first.displaySymbol}</span>`;
  }).join("");
  addText(svg, "Indexed close", 12, 16, "subtle-label");

  const guide = document.createElementNS("http://www.w3.org/2000/svg", "line");
  guide.setAttribute("y1", margin.top);
  guide.setAttribute("y2", margin.top + height);
  guide.setAttribute("class", "guide");
  guide.style.display = "none";
  svg.appendChild(guide);

  const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "g");
  tooltip.style.display = "none";
  const tooltipBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  tooltipBox.setAttribute("class", "tooltip-box");
  tooltip.appendChild(tooltipBox);
  svg.appendChild(tooltip);

  const overlay = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  overlay.setAttribute("x", margin.left);
  overlay.setAttribute("y", margin.top);
  overlay.setAttribute("width", width);
  overlay.setAttribute("height", height);
  overlay.setAttribute("fill", "transparent");
  overlay.style.cursor = "crosshair";
  svg.appendChild(overlay);

  const rowsByMonth = groupBy(rows, (row) => row.month);
  overlay.addEventListener("mousemove", (event) => {
    const rect = svg.getBoundingClientRect();
    const viewX = (event.clientX - rect.left) / rect.width * 980;
    const index = Math.max(0, Math.min(months.length - 1, Math.round((viewX - margin.left) / width * (months.length - 1))));
    const month = months[index];
    const x = xScale(month);
    guide.setAttribute("x1", x);
    guide.setAttribute("x2", x);
    guide.style.display = "";
    const monthRows = (rowsByMonth.get(month) || []).toSorted((a, b) => b.selectedIndex - a.selectedIndex);
    tooltip.innerHTML = "";
    tooltip.appendChild(tooltipBox);
    const lines = [month, ...monthRows.slice(0, 6).map((row) => `${row.displaySymbol}: ${row.selectedIndex.toFixed(1)}`)];
    if (monthRows.length > 6) lines.push(`+${monthRows.length - 6} more`);
    const boxWidth = 190;
    const boxHeight = 24 + lines.length * 16;
    const boxX = x > 760 ? x - boxWidth - 12 : x + 12;
    const boxY = margin.top + 10;
    tooltipBox.setAttribute("x", boxX);
    tooltipBox.setAttribute("y", boxY);
    tooltipBox.setAttribute("width", boxWidth);
    tooltipBox.setAttribute("height", boxHeight);
    lines.forEach((line, idx) => addText(tooltip, line, boxX + 10, boxY + 20 + idx * 16, "tooltip-text"));
    tooltip.style.display = "";
  });
  overlay.addEventListener("mouseleave", () => {
    guide.style.display = "none";
    tooltip.style.display = "none";
  });
}

function renderScatter(metrics) {
  const svg = makeSvg(document.querySelector("#scatterChart"), 600, 300);
  const margin = { top: 18, right: 24, bottom: 42, left: 52 };
  const width = 600 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;
  const maxVol = Math.max(...metrics.map((item) => item.volatilityPct), 1);
  const minReturn = Math.min(...metrics.map((item) => item.annualizedReturnPct), 0);
  const maxReturn = Math.max(...metrics.map((item) => item.annualizedReturnPct), 1);
  const x = (value) => margin.left + value / maxVol * width;
  const y = (value) => margin.top + (maxReturn - value) / Math.max(maxReturn - minReturn, 1) * height;
  const labeled = new Set(metrics.toSorted((a, b) => Math.abs(b.annualizedReturnPct) - Math.abs(a.annualizedReturnPct)).slice(0, 10).map((item) => item.seriesId));
  metrics.forEach((item, index) => {
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", x(item.volatilityPct));
    dot.setAttribute("cy", y(item.annualizedReturnPct));
    dot.setAttribute("r", 6);
    dot.setAttribute("fill", seriesColor(index));
    addTitle(dot, `${item.displaySymbol}: ${fmtPct(item.annualizedReturnPct)} annualized return, ${fmtPct(item.volatilityPct)} volatility`);
    svg.appendChild(dot);
    if (labeled.has(item.seriesId)) {
      addText(svg, item.displaySymbol, x(item.volatilityPct) + 8, y(item.annualizedReturnPct) + 4, "tick");
    }
  });
  addText(svg, "Volatility", margin.left + width / 2, 292, "tick", "middle");
  addText(svg, "Return", 10, margin.top + 8, "tick");
}

function renderBar(metrics) {
  const sortedAll = metrics.toSorted((a, b) => b.totalReturnPct - a.totalReturnPct);
  const sorted = sortedAll.length > 16 ? [...sortedAll.slice(0, 8), ...sortedAll.slice(-8)] : sortedAll;
  const svg = makeSvg(document.querySelector("#barChart"), 640, 360);
  const margin = { top: 16, right: 44, bottom: 30, left: 124 };
  const width = 640 - margin.left - margin.right;
  const barHeight = 16;
  const gap = 5;
  const min = Math.min(0, ...sorted.map((item) => item.totalReturnPct));
  const max = Math.max(1, ...sorted.map((item) => item.totalReturnPct));
  const zero = margin.left + (0 - min) / (max - min) * width;
  sorted.forEach((item, index) => {
    const y = margin.top + index * (barHeight + gap);
    const valueX = margin.left + (item.totalReturnPct - min) / (max - min) * width;
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", Math.min(zero, valueX));
    rect.setAttribute("y", y);
    rect.setAttribute("width", Math.abs(valueX - zero));
    rect.setAttribute("height", barHeight);
    rect.setAttribute("rx", 4);
    rect.setAttribute("fill", item.totalReturnPct >= 0 ? "#3f7d3d" : "#b3404a");
    addTitle(rect, `${item.displaySymbol}: ${fmtPct(item.totalReturnPct)} total return`);
    svg.appendChild(rect);
    addText(svg, item.displaySymbol, margin.left - 10, y + 13, "tick", "end");
    addText(svg, fmtPct(item.totalReturnPct), Math.max(zero, valueX) + 6, y + 13, "tick");
  });
}

function renderCompareOptions(metrics) {
  const a = document.querySelector("#compareA");
  const b = document.querySelector("#compareB");
  const currentIds = metrics.map((item) => item.seriesId).join("|");
  if (a.dataset.ids !== currentIds) {
    const options = metrics
      .toSorted((left, right) => left.displaySymbol.localeCompare(right.displaySymbol))
      .map((item) => `<option value="${item.seriesId}">${item.displaySymbol} - ${item.dataset}</option>`)
      .join("");
    a.innerHTML = options;
    b.innerHTML = options;
    a.dataset.ids = currentIds;
  }
  if (!state.compareA || !metrics.some((item) => item.seriesId === state.compareA)) {
    state.compareA = metrics[0]?.seriesId ?? null;
  }
  if (!state.compareB || state.compareB === state.compareA || !metrics.some((item) => item.seriesId === state.compareB)) {
    state.compareB = metrics.find((item) => item.seriesId !== state.compareA)?.seriesId ?? state.compareA;
  }
  a.value = state.compareA ?? "";
  b.value = state.compareB ?? "";
}

function renderCompareChart(rows, primary, secondary) {
  const chartRows = rows.filter((row) => row.seriesId === primary.seriesId || row.seriesId === secondary.seriesId);
  const svg = makeSvg(document.querySelector("#compareChart"), 980, 250);
  const margin = { top: 18, right: 26, bottom: 42, left: 58 };
  const width = 980 - margin.left - margin.right;
  const height = 250 - margin.top - margin.bottom;
  const months = [...new Set(chartRows.map((row) => row.month))].sort();
  const values = chartRows.map((row) => row.selectedIndex);
  const yTicks = niceTicks(Math.min(...values), Math.max(...values), 5);
  const min = Math.min(...yTicks);
  const max = Math.max(...yTicks);
  const xScale = (month) => margin.left + months.indexOf(month) / Math.max(months.length - 1, 1) * width;
  const yScale = (value) => margin.top + (max - value) / Math.max(max - min, 1) * height;
  yTicks.forEach((value) => {
    const y = yScale(value);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", margin.left);
    line.setAttribute("x2", margin.left + width);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("class", "grid");
    svg.appendChild(line);
    addText(svg, Math.round(value), margin.left - 10, y + 4, "tick", "end");
  });
  monthTicks(months, 6).forEach((month) => addText(svg, month, xScale(month), margin.top + height + 22, "tick", "middle"));
  const grouped = groupBy(chartRows, (row) => row.seriesId);
  [...grouped.entries()].forEach(([seriesId, points], index) => {
    const sorted = points.toSorted((a, b) => a.month.localeCompare(b.month));
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", linePath(sorted, xScale, yScale));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", index === 0 ? "#2f6fbb" : "#b7791f");
    path.setAttribute("stroke-width", "2.8");
    path.setAttribute("stroke-linecap", "round");
    addTitle(path, `${sorted[0].displaySymbol}: ${sorted[0].month} to ${sorted.at(-1).month}`);
    svg.appendChild(path);
    const last = sorted.at(-1);
    addText(svg, last.displaySymbol, xScale(last.month) - 6, yScale(last.selectedIndex) - 8, "label", "end");
  });
}

function renderComparison(metrics, rows) {
  renderCompareOptions(metrics);
  const primary = metrics.find((item) => item.seriesId === state.compareA);
  const secondary = metrics.find((item) => item.seriesId === state.compareB);
  if (!primary || !secondary) return;
  const cards = [
    ["Return Gap", primary.totalReturnPct - secondary.totalReturnPct, `${primary.displaySymbol} vs ${secondary.displaySymbol}`, 1],
    ["Ann. Return Gap", primary.annualizedReturnPct - secondary.annualizedReturnPct, "Annualized performance spread", 1],
    ["Volatility Gap", primary.volatilityPct - secondary.volatilityPct, "Lower is usually cleaner", -1],
    ["Drawdown Gap", primary.maxDrawdownPct - secondary.maxDrawdownPct, "Less negative is better", 1],
  ];
  document.querySelector("#compareCards").innerHTML = cards.map(([label, value, note, direction]) => `
    <article class="compare-card ${bgCls(value * direction)}">
      <span>${label}</span>
      <strong>${fmtSignedPct(value)}</strong>
      <small>${note}</small>
    </article>
  `).join("");
  renderCompareChart(rows, primary, secondary);
}

function renderCorrelation(metrics) {
  const seriesIds = metrics.map((item) => item.seriesId);
  const labels = metrics.map((item) => item.displaySymbol);
  const rows = data.correlations.filter((row) => seriesIds.includes(row.seriesId));
  const wrap = document.querySelector("#correlationGrid");
  wrap.style.setProperty("--corr-count", labels.length);
  wrap.innerHTML = `<div class="corr-row"><span></span>${labels.map((label) => `<span class="corr-label">${label}</span>`).join("")}</div>`;
  rows.forEach((row) => {
    const cells = row.values.filter((item) => seriesIds.includes(item.seriesId)).map((item) => {
      const value = item.value ?? 0;
      const color = value >= 0 ? `rgba(20, 124, 124, ${0.28 + Math.abs(value) * 0.72})` : `rgba(179, 64, 74, ${0.28 + Math.abs(value) * 0.72})`;
      return `<span class="corr-cell" style="background:${color}">${value.toFixed(2)}</span>`;
    }).join("");
    wrap.insertAdjacentHTML("beforeend", `<div class="corr-row"><span class="corr-label">${row.symbol}</span>${cells}</div>`);
  });
}

function renderTable(metrics) {
  document.querySelector("#comparisonTable").innerHTML = metrics.map((item) => `
    <tr>
      <td>${item.dataset}</td>
      <td><strong>${item.displaySymbol}</strong></td>
      <td>
        ${fmtMoney(item.latestClose)}
        ${item.liveChangePercent === null ? "" : `<span class="${cls(item.liveChangePercent)}"> ${fmtSignedPct(item.liveChangePercent)}</span>`}
      </td>
      <td class="${cls(item.totalReturnPct)}">${fmtSignedPct(item.totalReturnPct)}</td>
      <td class="${cls(item.annualizedReturnPct)}">${fmtSignedPct(item.annualizedReturnPct)}</td>
      <td>${fmtPct(item.volatilityPct)}</td>
      <td class="${cls(item.maxDrawdownPct)}">${fmtSignedPct(item.maxDrawdownPct)}</td>
    </tr>
  `).join("");
}

function render() {
  const rows = selectedSeries();
  const metrics = metricForRange(rows);
  document.querySelector("#coverageLabel").textContent = `${data.summary.firstDate} to ${data.summary.latestDate}`;
  document.querySelector("#generatedLabel").textContent = `Generated ${new Date(data.generatedAt).toLocaleString()}`;
  document.querySelector("#seriesCount").textContent = `${metrics.length} symbols`;
  renderFilters();
  renderSummary(metrics);
  renderComparison(metrics, rows);
  renderLineChart(rows);
  renderScatter(metrics);
  renderBar(metrics);
  renderCorrelation(metrics);
  renderTable(metrics);
}

document.querySelector("#rangeSelect").addEventListener("change", (event) => {
  state.rangeMonths = Number(event.target.value);
  render();
});
document.querySelector("#compareA").addEventListener("change", (event) => {
  state.compareA = event.target.value;
  render();
});
document.querySelector("#compareB").addEventListener("change", (event) => {
  state.compareB = event.target.value;
  render();
});

bindQuickActions();
render();
loadLiveQuotes();
