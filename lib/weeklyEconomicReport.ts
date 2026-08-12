export type ReportSource = {
  name: string
  url: string
}

export type DataRow = {
  indicator: string
  latest: string
  previous: string
  direction: 'Up' | 'Down' | 'Unchanged' | 'Mixed'
  source: string
  interpretation: string
}

export type ChartSuggestion = {
  title: string
  source: string
  series: string
  why: string
}

export const weeklyEconomicReport = {
  weekEnding: 'August 12, 2026',
  title: 'Weekly Economic Research Note: Labour Improves, Permits Rebound, U.S. Inflation Eases',
  deck:
    'A concise macro update for Canada, the United States, and global spillovers, prepared as my current weekly research note.',
  executiveSummary:
    'This week, the main Canadian signal improved at the margin: July employment rose by 75,000, the unemployment rate fell to 6.4%, and June building permits rebounded 18.5% to $14.9 billion. That combination points to firmer labour demand and a stronger construction pipeline than the prior month suggested. The inflation backdrop is less settled. Canada July CPI is not yet released, so June remains the official latest reading: headline CPI slowed to 2.8% year over year, while CPI excluding gasoline held at 2.2%. The Bank of Canada remains on hold at 2.25% and its July MPR still frames the economy as improving but exposed to energy, tariff, and slack risks. In the United States, July CPI eased to 3.4% year over year and core CPI eased to 2.5%, but July payrolls fell by 23,000 and prior months were revised lower. Treasury yields and the U.S. dollar moved unevenly, with the broad dollar index lower through August 7. My read is that near-term inflation pressure has cooled, but policy makers still face a difficult mix of energy-sensitive prices, softening U.S. labour data, and uneven Canadian business capacity.',
  whatChanged: [
    'Canada employment increased by 75,000 in July and the unemployment rate fell to 6.4%; this matters because labour slack eased to its lowest unemployment rate since July 2024.',
    'Canada building permits rebounded 18.5% in June to $14.9 billion; this matters because non-residential and multi-unit residential permits improved the construction pipeline after two monthly declines.',
    'Canada real GDP grew 0.3% in May and Statistics Canada estimated a further 0.2% advance for June; this matters because activity broadened across goods and services after a weak start to 2026.',
    'Canada CPI remains at the June official reading of 2.8% year over year, down from 3.2% in May; this matters because the latest verified inflation improvement is still mostly gasoline-related.',
    'U.S. CPI slowed to 3.4% year over year in July from 3.5% in June; this matters because inflation eased but stayed above the Federal Reserve target.',
    'U.S. nonfarm payroll employment declined by 23,000 in July after downward revisions to May and June; this matters because labour-market risk is now a larger part of the Fed tradeoff.',
    'OECD headline inflation eased to 4.2% in June from 4.6% in May; this matters because global energy inflation cooled, reducing one external pressure on Canadian and U.S. prices.',
  ],
  canadaFocus: {
    facts: [
      'Inflation: Statistics Canada reported June CPI inflation at 2.8% year over year, down from 3.2% in May. CPI excluding gasoline was unchanged at 2.2%. Gasoline rose 20.5% year over year, slower than 33.2% in May, and fell 10.2% month over month. July CPI was not yet available on this run date.',
      'Bank of Canada: the Bank held the target for the overnight rate at 2.25% on July 15, with the Bank Rate at 2.5% and the deposit rate at 2.20%. The next scheduled rate announcement is September 2, 2026.',
      'Capacity and inflation pressure: the Bank of Canada dashboard showed a Q1 current MPR output gap estimate of -1.3%, a June labour market indicator of 6.1, Q2 labour shortages at 16% of firms, and Q2 difficulty meeting unexpected demand at 35% of firms.',
      'Labour market: Statistics Canada reported that July employment increased by 75,000, the employment rate rose to 60.9%, unemployment declined to 6.4%, and average hourly wages rose 2.8% year over year. Employment gains were split between full-time and part-time work.',
      'Housing and construction: June building permits increased 18.5% to $14.9 billion. Non-residential permits rose by $1.8 billion to $6.8 billion, while residential permits rose 6.3% to $8.1 billion, led by multi-unit intentions.',
      'Consumer spending: May retail sales increased 1.0% to $73.7 billion, core retail sales rose 0.9%, and retail sales in volume terms rose 0.3%. Statistics Canada published an advance estimate that June retail sales increased 0.4%, subject to revision.',
      'Business investment and conditions: the Bank of Canada July MPR said consumer spending indicators were solid, housing activity was weak but stabilizing, export growth had resumed, and business investment was projected to pick up modestly with support from oil and gas.',
      'Commodities and producer prices: Statistics Canada reported June IPPI down 1.4% month over month and up 12.4% year over year, while RMPI fell 6.9% month over month and rose 20.7% year over year.',
    ],
    interpretation:
      'My read is that Canada looks better than it did in the prior note, but not strong enough to remove slack from the policy story. July hiring and June permits are constructive, and May GDP points to broader activity. The caution is that inflation relief is still based on the June data and still tied heavily to gasoline. The Bank of Canada can acknowledge better growth and labour data, but the output-gap estimate, weak-but-stabilizing housing activity, and volatile energy pass-through keep the case for patience intact.',
  },
  globalFocus: {
    facts: [
      'Federal Reserve: the FOMC held the federal funds target range at 3.50% to 3.75% on July 29 by a 9-3 vote. The statement said inflation remains elevated relative to the 2% goal and three voters preferred a 25 basis point increase.',
      'U.S. inflation: BLS reported July CPI rose 0.1% seasonally adjusted after falling 0.4% in June. Twelve-month CPI slowed to 3.4% from 3.5%, and core CPI slowed to 2.5% from 2.6%.',
      'U.S. employment: BLS reported July nonfarm payroll employment changed little at -23,000 and unemployment was 4.1%. May and June payrolls were revised down by a combined 103,000, and average hourly earnings rose 3.2% year over year.',
      'Treasury yields: FRED showed the 10-year Treasury yield at 4.72% on August 10, up from 4.63% on August 5. The 2-year yield was 4.25% on August 10, up from 4.18% on August 5.',
      'U.S. dollar and currencies: FRED showed the nominal broad U.S. dollar index at 119.0649 on August 7, down from 119.3881 on August 5. USD/CAD was 1.3933 on August 7, down from 1.4018 on August 5.',
      'Equity market and risk sentiment: FRED showed the S&P 500 at 7,728.20 on August 11, down from 7,757.64 on August 7 but above 7,723.55 on August 5, a small net gain over the week with day-to-day caution around inflation and policy.',
      'Global inflation and commodities: OECD headline inflation eased to 4.2% in June from 4.6% in May. FRED WTI crude was $81.96 on August 3, below $86.16 on July 31 and well below the July 23 reading of $93.08.',
    ],
    interpretation:
      'The global signal is disinflationary at the headline level but not simple for policy. U.S. July CPI supports a slower inflation narrative, while the weak payroll print shifts attention toward labour risk. The Fed statement still showed an inflation-focused minority willing to hike. For Canada, the key spillovers are U.S. rates, the Canadian dollar, oil-linked income and input costs, and whether global energy relief lasts long enough to lower firm pricing expectations.',
  },
  dataRows: [
    {
      indicator: 'Canada CPI, all-items',
      latest: '2.8% y/y, June 2026',
      previous: '3.2% y/y, May 2026',
      direction: 'Down',
      source: 'Statistics Canada CPI / Table 18-10-0004-01',
      interpretation: 'Headline inflation cooled as gasoline prices fell month over month.',
    },
    {
      indicator: 'Canada CPI excluding gasoline',
      latest: '2.2% y/y, June 2026',
      previous: '2.2% y/y, May 2026',
      direction: 'Unchanged',
      source: 'Statistics Canada CPI',
      interpretation: 'The non-gasoline inflation signal did not improve despite the headline decline.',
    },
    {
      indicator: 'Bank of Canada overnight target',
      latest: '2.25%, July 15, 2026',
      previous: '2.25%, June 10, 2026',
      direction: 'Unchanged',
      source: 'Bank of Canada policy interest rate',
      interpretation: 'Policy stayed on hold while the Bank assessed recovery, slack, and energy risk.',
    },
    {
      indicator: 'Canada unemployment rate',
      latest: '6.4%, July 2026',
      previous: '6.5%, June 2026',
      direction: 'Down',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'Labour slack eased as employment increased and unemployment fell for a third month.',
    },
    {
      indicator: 'Canada building permits',
      latest: '$14.9B, June 2026',
      previous: 'About $12.6B, May 2026',
      direction: 'Up',
      source: 'Statistics Canada Building Permits',
      interpretation: 'Construction intentions rebounded, led by institutional non-residential projects and multi-unit housing.',
    },
    {
      indicator: 'Canada retail sales',
      latest: '+1.0% m/m to $73.7B, May 2026',
      previous: 'April 2026 level implied near $73.0B',
      direction: 'Up',
      source: 'Statistics Canada Retail Trade',
      interpretation: 'Nominal and real retail sales rose, helped by gasoline and broad subsector gains.',
    },
    {
      indicator: 'Canada real GDP by industry',
      latest: '+0.3% m/m, May 2026',
      previous: '+0.5% m/m, April 2026',
      direction: 'Up',
      source: 'Statistics Canada GDP by industry',
      interpretation: 'Activity expanded for a second month, with both goods and services contributing.',
    },
    {
      indicator: 'Canada IPPI / RMPI',
      latest: 'IPPI -1.4% m/m; RMPI -6.9% m/m, June 2026',
      previous: 'Five straight IPPI monthly increases through May; RMPI +33.4% y/y in May',
      direction: 'Down',
      source: 'Statistics Canada IPPI/RMPI',
      interpretation: 'Input and factory-gate prices eased in June but remained elevated year over year.',
    },
    {
      indicator: 'U.S. CPI, all-items',
      latest: '3.4% y/y and +0.1% m/m, July 2026',
      previous: '3.5% y/y and -0.4% m/m, June 2026',
      direction: 'Down',
      source: 'U.S. Bureau of Labor Statistics CPI',
      interpretation: 'Headline inflation eased again, helped by lower energy prices.',
    },
    {
      indicator: 'U.S. nonfarm payrolls',
      latest: '-23,000, July 2026',
      previous: '+20,000, June 2026 revised',
      direction: 'Down',
      source: 'U.S. Bureau of Labor Statistics Employment Situation',
      interpretation: 'Hiring weakened and revisions made the prior two months materially softer.',
    },
    {
      indicator: 'Federal funds target upper limit',
      latest: '3.75%, August 12, 2026',
      previous: '3.75%, July 29, 2026',
      direction: 'Unchanged',
      source: 'FRED DFEDTARU',
      interpretation: 'The upper bound remained unchanged after the July FOMC hold.',
    },
    {
      indicator: 'U.S. 10-year Treasury yield',
      latest: '4.72%, August 10, 2026',
      previous: '4.63%, August 5, 2026',
      direction: 'Up',
      source: 'FRED DGS10',
      interpretation: 'Long yields rose over the week, tightening rate-sensitive financial conditions.',
    },
    {
      indicator: 'Nominal broad U.S. dollar index',
      latest: '119.0649, August 7, 2026',
      previous: '119.3881, August 5, 2026',
      direction: 'Down',
      source: 'FRED DTWEXBGS',
      interpretation: 'The dollar eased on the latest available readings, reducing one imported-pressure channel.',
    },
    {
      indicator: 'USD/CAD exchange rate',
      latest: '1.3933, August 7, 2026',
      previous: '1.4018, August 5, 2026',
      direction: 'Down',
      source: 'FRED DEXCAUS',
      interpretation: 'USD/CAD moved lower, implying a firmer Canadian dollar on the latest observations.',
    },
    {
      indicator: 'S&P 500',
      latest: '7,728.20, August 11, 2026',
      previous: '7,723.55, August 5, 2026',
      direction: 'Up',
      source: 'FRED SP500',
      interpretation: 'Equities were slightly higher over the week, though the latest daily move was softer.',
    },
    {
      indicator: 'OECD headline inflation',
      latest: '4.2% y/y, June 2026',
      previous: '4.6% y/y, May 2026',
      direction: 'Down',
      source: 'OECD CPI inflation release',
      interpretation: 'Global headline inflation eased as energy inflation cooled.',
    },
  ] satisfies DataRow[],
  chartSuggestions: [
    {
      title: 'Canada Headline CPI vs CPI Excluding Gasoline',
      source: 'Statistics Canada Table 18-10-0004-01',
      series: 'All-items CPI y/y; CPI excluding gasoline y/y',
      why: 'Shows whether the next CPI release confirms broader disinflation or another gasoline-driven move.',
    },
    {
      title: 'Canada Labour Slack and Wage Growth',
      source: 'Statistics Canada Labour Force Survey; Bank of Canada capacity indicators',
      series: 'Unemployment rate; employment rate; average hourly wages y/y; labour market indicator',
      why: 'Tracks whether July labour strength is enough to change the slack and wage-pressure story.',
    },
    {
      title: 'Canada Housing Supply Pipeline',
      source: 'Statistics Canada building permits and Bank of Canada real estate indicators',
      series: 'Total building permits; residential permits; multi-unit permits; new housing price index',
      why: 'Tests whether the June permits rebound is a one-month institutional boost or a broader supply improvement.',
    },
    {
      title: 'U.S. Yield Curve and Dollar Spillovers',
      source: 'FRED DGS2, DGS10, DTWEXBGS, DEXCAUS',
      series: '2-year Treasury yield; 10-year Treasury yield; nominal broad U.S. dollar index; USD/CAD',
      why: 'Shows how U.S. policy expectations transmit to Canadian financial conditions through rates and currencies.',
    },
    {
      title: 'Commodity Cost Pass-Through',
      source: 'Statistics Canada IPPI/RMPI; FRED DCOILWTICO; OECD CPI',
      series: 'IPPI m/m and y/y; RMPI m/m and y/y; WTI spot price; OECD energy inflation',
      why: 'Separates monthly commodity relief from still-elevated year-over-year input costs and global inflation risk.',
    },
  ] satisfies ChartSuggestion[],
  bottomLine: {
    happened:
      'Canada posted stronger July employment and a sharp June building-permits rebound, while U.S. July CPI cooled and U.S. payrolls weakened.',
    matters:
      'The data improve the Canadian growth narrative but leave policy cautious because inflation is still energy-sensitive and U.S. labour momentum has softened.',
    watching:
      'I am watching Canada July CPI on August 17, July IPPI/RMPI and new housing prices on August 20, June retail trade on August 21, and whether oil and USD/CAD stabilize.',
  },
  sourceNotes:
    'Facts are drawn from official statistical agencies, central banks, FRED, and OECD materials. Interpretation is my own and is not investment advice.',
  sources: [
    {
      name: 'Statistics Canada homepage and The Daily releases',
      url: 'https://www.statcan.gc.ca/en/start',
    },
    {
      name: 'Statistics Canada release calendar',
      url: 'https://www150.statcan.gc.ca/n1/dai-quo/cal2-eng.htm',
    },
    {
      name: 'Statistics Canada CPI, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260720/dq260720a-eng.htm',
    },
    {
      name: 'Statistics Canada CPI table 18-10-0004-01',
      url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000401',
    },
    {
      name: 'Statistics Canada Labour Force Survey, July 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260807/dq260807a-eng.htm',
    },
    {
      name: 'Statistics Canada building permits, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260812/dq260812a-eng.htm',
    },
    {
      name: 'Statistics Canada retail trade, May 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260723/dq260723a-eng.htm',
    },
    {
      name: 'Statistics Canada GDP by industry, May 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260731/dq260731a-eng.htm',
    },
    {
      name: 'Statistics Canada IPPI/RMPI, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260724/dq260724a-eng.htm',
    },
    {
      name: 'Bank of Canada policy interest rate',
      url: 'https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/',
    },
    {
      name: 'Bank of Canada July 15 policy announcement',
      url: 'https://www.bankofcanada.ca/2026/07/fad-press-release-2026-07-15/',
    },
    {
      name: 'Bank of Canada Monetary Policy Report, July 2026',
      url: 'https://www.bankofcanada.ca/2026/07/mpr-2026-07-15/',
    },
    {
      name: 'Bank of Canada capacity and inflation indicators',
      url: 'https://www.bankofcanada.ca/rates/indicators/capacity-and-inflation-pressures/',
    },
    {
      name: 'Federal Reserve FOMC statement, July 29, 2026',
      url: 'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm',
    },
    {
      name: 'U.S. Bureau of Labor Statistics CPI, July 2026',
      url: 'https://www.bls.gov/news.release/cpi.nr0.htm',
    },
    {
      name: 'U.S. Bureau of Labor Statistics Employment Situation, July 2026',
      url: 'https://www.bls.gov/news.release/empsit.nr0.htm',
    },
    {
      name: 'FRED federal funds target upper limit',
      url: 'https://fred.stlouisfed.org/series/DFEDTARU',
    },
    {
      name: 'FRED 10-year Treasury yield',
      url: 'https://fred.stlouisfed.org/series/DGS10',
    },
    {
      name: 'FRED 2-year Treasury yield',
      url: 'https://fred.stlouisfed.org/series/DGS2',
    },
    {
      name: 'FRED nominal broad U.S. dollar index',
      url: 'https://fred.stlouisfed.org/series/DTWEXBGS',
    },
    {
      name: 'FRED USD/CAD exchange rate',
      url: 'https://fred.stlouisfed.org/series/DEXCAUS',
    },
    {
      name: 'FRED WTI crude oil spot price',
      url: 'https://fred.stlouisfed.org/series/DCOILWTICO',
    },
    {
      name: 'FRED S&P 500',
      url: 'https://fred.stlouisfed.org/series/SP500',
    },
    {
      name: 'OECD Data Explorer',
      url: 'https://data-explorer.oecd.org/',
    },
    {
      name: 'OECD CPI inflation release, June 2026',
      url: 'https://www.oecd.org/en/data/insights/statistical-releases/2026/08/consumer-prices-oecd-updated-4-august-2026.html',
    },
  ] satisfies ReportSource[],
}
