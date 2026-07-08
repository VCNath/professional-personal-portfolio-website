import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Weekly Economic Roundup | Nathaniel Varga-Chauvin',
  description:
    'A premium weekly macroeconomic briefing prototype covering regions, commodities, currencies, markets, risks, and policy calendars.',
  alternates: {
    canonical: '/weekly-brief',
  },
}

const dashboardMetrics = [
  {
    label: 'Global Growth Outlook',
    rating: 'Neutral',
    change: '+0.2 pts',
    confidence: '78%',
    trend: 'up',
    points: [22, 28, 25, 33, 35, 41, 44],
  },
  {
    label: 'Inflation Pressure',
    rating: 'Elevated',
    change: '-0.1 pts',
    confidence: '72%',
    trend: 'down',
    points: [72, 68, 70, 64, 61, 58, 57],
  },
  {
    label: 'Trade Activity',
    rating: 'Mixed',
    change: '+0.4 pts',
    confidence: '66%',
    trend: 'up',
    points: [36, 35, 39, 43, 42, 48, 51],
  },
  {
    label: 'Commodity Momentum',
    rating: 'Firm',
    change: '+1.1 pts',
    confidence: '69%',
    trend: 'up',
    points: [44, 46, 50, 49, 55, 57, 63],
  },
  {
    label: 'Financial Conditions',
    rating: 'Tight',
    change: '0.0 pts',
    confidence: '74%',
    trend: 'flat',
    points: [61, 60, 62, 61, 60, 61, 61],
  },
  {
    label: 'Market Risk',
    rating: 'Watch',
    change: '+0.5 pts',
    confidence: '70%',
    trend: 'up',
    points: [38, 42, 41, 45, 47, 50, 54],
  },
]

const regions = [
  {
    flag: '🇨🇦',
    region: 'Canada',
    headline: 'Inflation pressure remains concentrated despite sticky food prices',
    summary:
      'Canada enters the final week of June with household pressure still centered on shelter, grocery costs, and debt-service sensitivity. The Bank of Canada remains cautious because disinflation is uneven and housing supply continues to shape local affordability.',
    developments: ['Inflation', 'Bank of Canada', 'Housing', 'Employment', 'Consumer spending', 'Business investment', 'Fiscal developments'],
    implications:
      'Real income gains are improving slowly, but high mortgage renewals and uneven hiring keep the consumer outlook fragile.',
    risk: 'Yellow: shelter inflation and household leverage remain the main pressure points.',
    policy: 'The Bank of Canada is likely to stay data dependent while watching wage growth, core inflation, and housing activity.',
    confidence: 76,
    chart: [42, 46, 45, 48, 51, 49, 53],
    image: 'Urban housing, grocery aisles, and downtown office activity.',
    takeaway: 'Sticky essentials keep the policy debate alive even as headline inflation cools.',
  },
  {
    flag: '🇺🇸',
    region: 'United States',
    headline: 'Dollar strength continues to dominate financial markets',
    summary:
      'The United States remains the anchor for global financial conditions. Treasury yields, Federal Reserve messaging, technology leadership, and corporate earnings continue to pull capital toward dollar assets.',
    developments: ['Federal Reserve', 'Inflation', 'Employment', 'Treasury yields', 'Consumer confidence', 'Technology sector', 'Corporate earnings'],
    implications:
      'A firm dollar eases import prices at home but tightens liquidity for dollar borrowers abroad and weighs on commodity-linked currencies.',
    risk: 'Yellow: valuation concentration and rate sensitivity remain the main market risks.',
    policy: 'The Federal Reserve is expected to prioritize inflation credibility while looking for clearer labor-market cooling.',
    confidence: 81,
    chart: [58, 61, 63, 62, 68, 71, 75],
    image: 'Treasury market screens, technology earnings dashboards, and currency terminals.',
    takeaway: 'Dollar strength is both a signal of resilience and a source of global strain.',
  },
  {
    flag: '🇪🇺',
    region: 'Europe',
    headline: 'Growth slows while inflation remains uncomfortable',
    summary:
      'Europe faces a familiar squeeze: manufacturing softness, uneven demand, and still-uncomfortable services inflation. Germany remains the focal point for industrial weakness, while France and Italy face fiscal scrutiny.',
    developments: ['ECB', 'Germany', 'France', 'Italy', 'Manufacturing', 'PMIs', 'Energy', 'Fiscal policy'],
    implications:
      'Policy room is constrained because weak growth argues for relief while sticky services inflation argues for patience.',
    risk: 'Yellow: fiscal pressure and energy sensitivity could reprice quickly.',
    policy: 'The ECB is likely to move gradually, with communication centered on wage settlements and services inflation.',
    confidence: 73,
    chart: [45, 43, 41, 39, 38, 40, 37],
    image: 'Factory floors, energy infrastructure, and ECB press conference visuals.',
    takeaway: 'Europe needs demand stabilization without reigniting price pressure.',
  },
  {
    flag: '🇨🇳',
    region: 'China',
    headline: 'Industrial production remains resilient while domestic demand weakens',
    summary:
      'China continues to show a split cycle. Export-oriented production and high-tech manufacturing remain comparatively resilient, but retail activity, housing confidence, and domestic demand remain uneven.',
    developments: ['Exports', 'Retail sales', 'Housing', 'Manufacturing', 'Technology', 'Trade', 'Government policy'],
    implications:
      'Global goods supply remains supported, but weaker domestic demand limits spillovers to commodity exporters and regional consumer names.',
    risk: 'Red-yellow: property stress and trade tensions remain material downside risks.',
    policy: 'Authorities are expected to rely on targeted support rather than broad stimulus unless demand weakens further.',
    confidence: 68,
    chart: [50, 52, 55, 57, 54, 56, 58],
    image: 'Container shipping imagery, ports, industrial parks, and logistics networks.',
    takeaway: 'Production resilience is not the same as broad household confidence.',
  },
  {
    flag: '🇯🇵',
    region: 'Japan',
    headline: 'Weak yen keeps policymakers under pressure',
    summary:
      'Japan remains caught between imported inflation pressure and the benefits of export competitiveness. Currency weakness is keeping the Bank of Japan and Ministry of Finance in the market spotlight.',
    developments: ['Bank of Japan', 'Inflation', 'Exports', 'Currency', 'Trade', 'Bond market'],
    implications:
      'A weak yen improves exporter revenue but raises household import costs and complicates the path toward policy normalization.',
    risk: 'Yellow: currency volatility could force sharper official communication.',
    policy: 'The BoJ is likely to continue cautious normalization while limiting disorderly bond-market moves.',
    confidence: 71,
    chart: [36, 40, 44, 43, 48, 51, 50],
    image: 'Foreign exchange screens, exporters, and Japanese government bond curves.',
    takeaway: 'Currency pressure is becoming a policy variable, not just a market outcome.',
  },
  {
    flag: '🇰🇷',
    region: 'South Korea',
    headline: 'Semiconductor exports continue driving growth',
    summary:
      'South Korea remains one of the clearest beneficiaries of the AI hardware cycle. Semiconductor exports, memory pricing, and manufacturing activity are supporting growth despite currency and trade volatility.',
    developments: ['AI chips', 'Exports', 'Manufacturing', 'Technology', 'Currency', 'Trade'],
    implications:
      'Technology demand is supporting external balances, but the cycle is exposed to global capex swings and U.S.-China technology policy.',
    risk: 'Green-yellow: export concentration is a strength until chip demand cools.',
    policy: 'Policy is likely to remain focused on currency stability, strategic industry support, and inflation control.',
    confidence: 77,
    chart: [48, 53, 59, 63, 68, 72, 76],
    image: 'Semiconductor facilities, export terminals, and technology supply-chain visuals.',
    takeaway: 'The AI investment cycle is doing real macroeconomic work for Korea.',
  },
]

const commodities = [
  ['Brent Oil', '$86.20', '+1.4%', '+4.8%', '+9.2%', 'Up', 'Medium', 'Supply discipline and geopolitics keep a risk premium in the curve.'],
  ['WTI', '$82.10', '+1.1%', '+3.9%', '+7.4%', 'Up', 'Medium', 'U.S. inventories remain the key near-term signal.'],
  ['Natural Gas', '$3.05', '-2.8%', '+6.1%', '+12.0%', 'Mixed', 'High', 'Weather expectations are dominating short-term positioning.'],
  ['Gold', '$2,355', '+0.7%', '+2.2%', '+14.5%', 'Up', 'Low', 'Real-rate uncertainty and reserve demand remain supportive.'],
  ['Silver', '$30.40', '+1.8%', '+5.4%', '+18.1%', 'Up', 'High', 'Industrial demand gives silver a higher beta to growth.'],
  ['Copper', '$4.62', '+2.3%', '+7.5%', '+16.8%', 'Up', 'High', 'China stimulus expectations and energy transition demand support prices.'],
  ['Steel', '$720', '-0.4%', '+1.2%', '+3.1%', 'Flat', 'Medium', 'Construction softness offsets infrastructure demand.'],
  ['Canola', '$658', '+0.6%', '-1.5%', '+2.9%', 'Mixed', 'Medium', 'Weather and export demand remain the watch points.'],
  ['Wheat', '$6.25', '-1.1%', '+2.7%', '-3.8%', 'Mixed', 'High', 'Black Sea risk is balanced by harvest supply.'],
  ['Corn', '$4.55', '+0.2%', '-0.8%', '-5.0%', 'Flat', 'Medium', 'Planting progress is keeping volatility contained.'],
  ['Lithium', '$13,800', '-3.6%', '-9.4%', '-21.0%', 'Down', 'High', 'Battery supply chain inventories remain elevated.'],
  ['Nickel', '$18,900', '+0.9%', '+3.6%', '+1.7%', 'Up', 'High', 'Supply discipline is trying to stabilize a volatile market.'],
]

const currencies = [
  ['USD', '1.00', '+0.8%', '+2.1%', '$85k', '342M', '$29.2T', 'High', 'Primary reserve', 88],
  ['CAD', '1.37', '-0.4%', '-1.2%', '$54k', '41M', '$2.2T', 'High', 'Commodity-linked', 55],
  ['EUR', '1.07', '-0.6%', '-1.4%', '$43k', '449M', '$18.4T', 'High', 'Major reserve', 61],
  ['GBP', '1.26', '-0.2%', '+0.1%', '$49k', '68M', '$3.4T', 'Medium', 'Reserve', 58],
  ['JPY', '158.2', '-1.1%', '-3.8%', '$34k', '124M', '$4.2T', 'High', 'Safe haven', 37],
  ['CNY', '7.28', '-0.5%', '-1.5%', '$13k', '1.4B', '$18.6T', 'High', 'Managed', 49],
  ['KRW', '1,388', '-0.7%', '-2.1%', '$36k', '52M', '$1.8T', 'High', 'Tech exporter', 46],
  ['AUD', '0.66', '+0.3%', '+0.7%', '$65k', '27M', '$1.8T', 'High', 'Commodity-linked', 57],
  ['NZD', '0.61', '+0.1%', '-0.4%', '$49k', '5M', '$0.3T', 'Medium', 'Commodity-linked', 51],
  ['CHF', '0.89', '+0.4%', '+1.3%', '$100k', '9M', '$0.9T', 'Medium', 'Safe haven', 73],
]

const markets = [
  ['S&P 500', '+1.2%', '+3.9%', 'Medium', 'Technology', 'Utilities'],
  ['NASDAQ', '+1.8%', '+5.6%', 'Medium', 'AI infrastructure', 'Defensive staples'],
  ['TSX', '+0.6%', '+1.7%', 'Low', 'Energy', 'Telecom'],
  ['FTSE', '-0.2%', '+0.8%', 'Low', 'Banks', 'Real estate'],
  ['Nikkei', '+0.9%', '+2.5%', 'High', 'Exporters', 'Domestic retail'],
  ['Hang Seng', '-1.4%', '-3.1%', 'High', 'Internet platforms', 'Property'],
  ['DAX', '+0.3%', '+1.1%', 'Medium', 'Industrials', 'Chemicals'],
  ['CAC', '-0.5%', '-1.6%', 'Medium', 'Aerospace', 'Luxury'],
  ['KOSPI', '+2.0%', '+6.2%', 'High', 'Semiconductors', 'Utilities'],
]

const calendar = [
  ['Federal Reserve', 'Speeches from voting members on inflation persistence'],
  ['Bank of Canada', 'Business outlook indicators and senior loan officer context'],
  ['ECB', 'Flash inflation and wage-tracker commentary'],
  ['BoJ', 'Currency and bond-market communication'],
  ['Statistics Canada', 'GDP and household spending detail'],
  ['U.S. CPI', 'Core services and shelter decomposition'],
  ['Employment reports', 'Payrolls, unemployment, participation, and wage growth'],
  ['PMIs', 'Manufacturing and services momentum across major economies'],
]

const risks = [
  ['Inflation', 'Yellow', 'Services prices and shelter costs still limit central-bank comfort.'],
  ['Recession', 'Yellow', 'Growth is slower but not yet broadly contracting.'],
  ['Oil', 'Yellow', 'Supply risk is elevated, but demand signals remain mixed.'],
  ['Housing', 'Red', 'Affordability and refinancing risk remain acute in rate-sensitive markets.'],
  ['Trade', 'Yellow', 'Tariffs, shipping disruption, and export controls remain active risks.'],
  ['Banking', 'Green', 'Systemic stress is contained, but commercial real estate remains watched.'],
  ['Geopolitics', 'Red', 'Conflict and sanctions risk can quickly spill into energy and shipping.'],
  ['Supply chains', 'Yellow', 'Resilience improved, but concentration risk is still meaningful.'],
  ['Debt markets', 'Yellow', 'High refinancing needs keep duration and credit spreads important.'],
]

const charts = [
  ['World inflation heat map', 'Inflation is cooling unevenly, with shelter and food still driving household stress in advanced economies.', 'Central banks can ease only where core pressure is convincingly softer.'],
  ['Interest rate comparison', 'Policy rates remain restrictive across most developed markets, keeping financial conditions tight.', 'Rate cuts are likely to be gradual and communication-heavy.'],
  ['Commodity performance chart', 'Energy and metals are sending different messages about supply risk and industrial demand.', 'Resource exporters benefit when demand improves, but volatility remains high.'],
  ['Currency strength radar', 'The U.S. dollar remains the key global constraint for emerging markets and commodity currencies.', 'Dollar strength can import tighter financial conditions abroad.'],
  ['GDP growth comparison', 'The U.S. and parts of Asia remain firmer than Europe, where manufacturing weakness persists.', 'Portfolio and policy decisions should distinguish nominal resilience from real demand.'],
]

function MiniSparkline({ points }: { points: number[] }) {
  const width = 120
  const height = 42
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const d = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width
      const y = height - ((point - min) / range) * height
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-12 w-full" role="img" aria-label="Trend sparkline">
      <path d={d} fill="none" stroke="#8C7657" strokeWidth="3" strokeLinecap="round" />
      <path d={`${d} L ${width} ${height} L 0 ${height} Z`} fill="rgba(140,118,87,0.14)" />
    </svg>
  )
}

function Meter({ value }: { value: number }) {
  return (
    <div className="h-2 rounded-full bg-slate-200">
      <div className="h-2 rounded-full bg-blue-600" style={{ width: `${value}%` }} />
    </div>
  )
}

function WorldMap() {
  const zones = [
    ['North America', 'left-[14%] top-[35%] h-20 w-32 bg-blue-500/70'],
    ['Europe', 'left-[48%] top-[31%] h-14 w-20 bg-amber-400/70'],
    ['China', 'left-[66%] top-[40%] h-16 w-24 bg-emerald-400/70'],
    ['Japan and Korea', 'left-[78%] top-[38%] h-12 w-16 bg-blue-400/70'],
    ['Commodity exporters', 'left-[30%] top-[63%] h-16 w-28 bg-sky-300/60'],
  ]

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-700 bg-slate-950 p-6 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,210,199,0.28),transparent_32%),radial-gradient(circle_at_70%_60%,rgba(200,211,195,0.18),transparent_28%)]" />
      <div className="absolute inset-6 rounded-lg border border-slate-800 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:34px_34px]" />
      {zones.map(([label, className]) => (
        <div key={label} className={`absolute rounded-[45%] blur-[1px] ${className}`} title={label} />
      ))}
      <div className="relative z-10 flex h-full min-h-[312px] flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase text-slate-400">Overall Global Economic Sentiment</p>
          <div className="mt-3 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
            Neutral with upside dispersion
          </div>
        </div>
        <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
          <span className="rounded bg-blue-500/15 p-2">Bullish: U.S. technology, Korea exports</span>
          <span className="rounded bg-amber-400/15 p-2">Neutral: Canada, Europe policy path</span>
          <span className="rounded bg-red-400/15 p-2">Bearish: housing stress, geopolitics</span>
        </div>
      </div>
    </div>
  )
}

function DarkChart({ title, points }: { title: string; points: number[] }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-5 text-white">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs uppercase text-sky-300">Interactive model</span>
      </div>
      <div className="mt-5">
        <MiniSparkline points={points} />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-slate-400">
        <span>Inflation</span>
        <span>Rates</span>
        <span>Trade</span>
        <span>Risk</span>
      </div>
    </div>
  )
}

export default function WeeklyBriefPage() {
  return (
    <div className="bg-slate-100 text-slate-950">
      <section className="border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] xl:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-300">Premium Macro Briefing</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
              Weekly Economic Roundup
            </h1>
            <p className="mt-4 text-lg text-slate-300">Week Ending: June 26, 2026</p>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-200">
              Global markets spent the week balancing resilient U.S. demand, uneven disinflation, pressure on rate-sensitive households, and a stronger dollar. The result is a macro landscape that looks stable at the surface but increasingly divergent across regions, sectors, and currencies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {['Macro', 'Policy', 'Markets', 'Commodities', 'Currencies'].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <WorldMap />
        </div>
      </section>

      <section id="global-dashboard" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-12 sm:px-6 xl:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700">Global Dashboard</p>
            <h2 className="mt-2 text-3xl font-semibold">Six indicators shaping the week</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            Ratings are illustrative portfolio metrics designed to show how a weekly briefing dashboard could summarize macro momentum.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {dashboardMetrics.map((metric) => (
            <article key={metric.label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-slate-500">{metric.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{metric.rating}</h3>
                </div>
                <span className="rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                  {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'} {metric.change}
                </span>
              </div>
              <div className="mt-5">
                <MiniSparkline points={metric.points} />
              </div>
              <div className="mt-4">
                <div className="mb-2 flex justify-between text-xs font-semibold uppercase text-slate-500">
                  <span>Confidence</span>
                  <span>{metric.confidence}</span>
                </div>
                <Meter value={Number.parseInt(metric.confidence)} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <article className="mx-auto max-w-4xl px-5 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase text-blue-700">Executive Summary</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight">What changed, why it mattered, and what to watch next</h2>
          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700">
            <p>
              The week&apos;s macro story was not one of collapse or acceleration, but of dispersion. The United States continued to exert gravitational force through higher yields, resilient earnings, and dollar strength. Europe remained stuck between weak industrial momentum and services inflation. China&apos;s production engine stayed active, yet domestic demand and property confidence remained soft.
            </p>
            <p>
              For investors and policy watchers, the practical question is whether resilience is broad enough to absorb restrictive rates. The answer varies by region. Technology-linked exporters look stronger, commodity markets are firmer but volatile, and consumers in housing-sensitive economies are still managing the delayed effects of past rate increases.
            </p>
            <p>
              Next week, attention turns to inflation decomposition, central-bank speeches, employment reports, and forward-looking PMIs. The key signal will be whether services prices and wage growth continue to cool without creating a sharper employment slowdown.
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 xl:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase text-blue-700">Regional Breakdown</p>
          <h2 className="mt-2 text-4xl font-semibold">Major economies in focus</h2>
        </div>
        <div className="space-y-8">
          {regions.map((region) => (
            <article key={region.region} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.72fr_0.28fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-4xl">{region.flag}</span>
                    <div>
                      <p className="font-semibold uppercase text-blue-700">{region.region}</p>
                      <h3 className="mt-1 text-2xl font-semibold">{region.headline}</h3>
                    </div>
                  </div>
                  <p className="mt-6 max-w-4xl leading-8 text-slate-700">{region.summary}</p>
                  <div className="mt-6 grid gap-5 lg:grid-cols-2">
                    <div>
                      <h4 className="font-semibold">Key developments</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {region.developments.map((item) => (
                          <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Suggested imagery</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{region.image}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-5 md:grid-cols-3">
                    <div>
                      <h4 className="font-semibold">Economic implications</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{region.implications}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Risk assessment</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{region.risk}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Policy outlook</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{region.policy}</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm font-semibold text-blue-950">
                    Key takeaway: {region.takeaway}
                  </div>
                </div>
                <div className="border-t border-slate-200 bg-slate-950 p-6 text-white lg:border-l lg:border-t-0">
                  <DarkChart title={`${region.region} momentum`} points={region.chart} />
                  <div className="mt-6">
                    <div className="mb-2 flex justify-between text-xs font-semibold uppercase text-slate-400">
                      <span>Confidence meter</span>
                      <span>{region.confidence}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-sky-400" style={{ width: `${region.confidence}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 xl:px-8">
          <p className="text-sm font-semibold uppercase text-blue-700">Commodity Centre</p>
          <h2 className="mt-2 text-4xl font-semibold">Cross-asset pressure points</h2>
          <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  {['Commodity', 'Current Price', 'Weekly Change', 'Monthly Change', 'Year-to-Date', 'Trend', 'Volatility', 'Commentary'].map((heading) => (
                    <th key={heading} className="px-4 py-4 font-semibold">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {commodities.map((row) => (
                  <tr key={row[0]} className="border-t border-slate-200 hover:bg-blue-50">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className="px-4 py-4 align-top text-slate-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 xl:grid-cols-[0.95fr_1.05fr] xl:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-700">Currency Dashboard</p>
          <h2 className="mt-2 text-4xl font-semibold">Currency strength and macro exposure</h2>
          <p className="mt-5 leading-8 text-slate-700">
            The dollar remains the benchmark for global financial conditions, while commodity and export-linked currencies continue to react to trade, technology demand, and rate expectations.
          </p>
        </div>
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="min-w-[900px] w-full text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                {['Currency', 'Rate', 'Weekly', 'Monthly', 'GDP/capita', 'Population', 'Economy', 'Trade', 'Reserve status', 'Strength'].map((heading) => (
                  <th key={heading} className="px-4 py-4">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currencies.map((row) => (
                <tr key={row[0]} className="border-t border-slate-200">
                  {row.slice(0, 9).map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className="px-4 py-4 text-slate-700">{cell}</td>
                  ))}
                  <td className="px-4 py-4">
                    <div className="h-2 w-28 rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-blue-600" style={{ width: `${row[9]}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 xl:px-8">
          <p className="text-sm font-semibold uppercase text-sky-300">Markets Snapshot</p>
          <h2 className="mt-2 text-4xl font-semibold">Equity indices and sector leadership</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {markets.map(([name, weekly, monthly, volatility, leader, laggard]) => (
              <article key={name} className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <span className="rounded bg-blue-500/20 px-3 py-1 text-sm text-sky-200">{weekly}</span>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div><dt className="text-slate-400">Monthly</dt><dd className="font-semibold">{monthly}</dd></div>
                  <div><dt className="text-slate-400">Volatility</dt><dd className="font-semibold">{volatility}</dd></div>
                  <div><dt className="text-slate-400">Sector leader</dt><dd className="font-semibold">{leader}</dd></div>
                  <div><dt className="text-slate-400">Sector laggard</dt><dd className="font-semibold">{laggard}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="big-story" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 sm:px-6 xl:px-8">
        <article className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="rounded-lg bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase text-sky-300">This Week&apos;s Big Story</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">The strong dollar is quietly tightening the world</h2>
            <div className="relative mt-8 h-64 overflow-hidden rounded-lg border border-slate-800">
              <Image
                src="/images/smoked-glass-dashboard.png"
                alt="Smoked glass macroeconomic dashboard detail"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          </div>
          <div className="space-y-6 text-lg leading-9 text-slate-700">
            <p>
              The single most important macroeconomic story this week was the continued strength of the U.S. dollar. It is tempting to treat currency moves as a market detail, but the dollar is also a transmission channel for global liquidity, inflation, commodities, capital flows, and policy choices.
            </p>
            <p>
              When the dollar strengthens, the effect reaches far beyond foreign exchange desks. Importers outside the United States face higher local-currency costs for dollar-priced commodities. Emerging-market borrowers with dollar liabilities face more expensive debt service. Commodity exporters can receive a nominal revenue cushion, but their domestic financial conditions may still tighten if capital flows back toward U.S. assets.
            </p>
            <p>
              The cause is not one single data release. It is the combination of resilient U.S. earnings, still-restrictive rates, a technology cycle attracting capital, and uncertainty elsewhere. Europe is growing slowly. China is still working through a domestic demand and property confidence problem. Japan is managing currency pressure. Canada is seeing the lagged weight of household debt.
            </p>
            <p>
              The implication is that global policy coordination becomes harder. If the Federal Reserve waits for more inflation evidence, other central banks must decide whether to ease into a stronger dollar or hold policy tighter than domestic conditions require. That trade-off is especially difficult for smaller open economies, where imported inflation can reappear through currency weakness.
            </p>
            <p>
              Next week&apos;s most important signal will be whether U.S. inflation and labor-market data validate the dollar&apos;s strength or challenge it. If the data soften, the dollar could release pressure across commodities, emerging markets, and non-U.S. equities. If the data remain firm, the global economy may continue to look stable but feel tighter underneath.
            </p>
          </div>
        </article>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 xl:px-8">
          <p className="text-sm font-semibold uppercase text-blue-700">Five Charts That Explain the Week</p>
          <h2 className="mt-2 text-4xl font-semibold">Visual signals for policy and markets</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {charts.map(([headline, commentary, implication], index) => (
              <article key={headline} className="rounded-lg border border-slate-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-700">Chart {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold">{headline}</h3>
                <div className="mt-5">
                  <DarkChart title={headline} points={[30 + index * 4, 38, 35 + index * 3, 49, 46 + index * 2, 58, 62 + index]} />
                </div>
                <p className="mt-5 leading-7 text-slate-700">{commentary}</p>
                <p className="mt-3 rounded bg-blue-50 p-3 text-sm font-semibold text-blue-950">Policy implication: {implication}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-2 xl:px-8">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase text-blue-700">Economic Calendar</p>
          <h2 className="mt-2 text-3xl font-semibold">Events to watch next week</h2>
          <div className="mt-6 space-y-4">
            {calendar.map(([event, detail]) => (
              <div key={event} className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold">{event}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase text-blue-700">Investment Risks</p>
          <h2 className="mt-2 text-3xl font-semibold">Traffic-light risk system</h2>
          <div className="mt-6 space-y-4">
            {risks.map(([risk, status, detail]) => {
              const color = status === 'Green' ? 'bg-emerald-500' : status === 'Red' ? 'bg-red-500' : 'bg-amber-400'
              return (
                <div key={risk} className="flex gap-4 rounded-lg border border-slate-200 p-4">
                  <span className={`mt-1 h-4 w-4 shrink-0 rounded-full ${color}`} />
                  <div>
                    <h3 className="font-semibold">{risk}: {status}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 xl:px-8">
          <div className="rounded-lg bg-blue-950 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase text-sky-300">Bottom Line</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div>
                <h3 className="text-2xl font-semibold">What happened</h3>
                <p className="mt-3 leading-7 text-slate-200">Resilient U.S. data, a firm dollar, uneven global demand, and firmer commodities shaped the week.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Why it matters</h3>
                <p className="mt-3 leading-7 text-slate-200">Financial conditions can tighten globally even when local economies are slowing.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">What to watch next week</h3>
                <p className="mt-3 leading-7 text-slate-200">Inflation details, central-bank language, employment reports, and PMIs will drive the next repricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 sm:px-6 xl:px-8">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700">Footer Briefing Desk</p>
            <h2 className="mt-2 text-3xl font-semibold">Newsletter, sources, methodology, and disclaimer</h2>
            <p className="mt-4 leading-8 text-slate-700">
              This portfolio page demonstrates how I can package macroeconomic research, dashboard thinking, and policy analysis for institutional readers. Data shown is illustrative and should not be interpreted as investment advice.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <p><strong>Sources:</strong> central banks, statistics agencies, market data providers, and public economic releases.</p>
              <p><strong>Methodology:</strong> qualitative macro scoring, visual trend summaries, and confidence-weighted dashboard design.</p>
              <p><strong>Last updated:</strong> June 25, 2026, 5:00 PM CST.</p>
              <p>
                <strong>Author:</strong> Nathaniel Varga-Chauvin ·{' '}
                <a className="font-semibold text-blue-700" href="https://www.linkedin.com/in/nathaniel-varga-chauvin-16240a139" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{' '}
                ·{' '}
                <a className="font-semibold text-blue-700" href="https://github.com/VCNath" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>{' '}
                ·{' '}
                <a className="font-semibold text-blue-700" href="https://nathanielvc.com/" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </p>
            </div>
          </div>
          <form className="rounded-lg bg-slate-950 p-5 text-white">
            <label htmlFor="newsletter-email" className="text-sm font-semibold uppercase text-sky-300">Subscribe</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@company.com"
              className="mt-4 w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500"
            />
            <button type="button" className="mt-4 w-full rounded-md bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500">
              Join Weekly Brief
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
