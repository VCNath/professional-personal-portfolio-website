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
  weekEnding: 'July 29, 2026',
  title: 'Weekly Economic Research Note: Inflation Cools, Policy Stays Cautious',
  deck:
    'A concise macro update for Canada, the United States, and global spillovers, prepared as my current weekly research note.',
  executiveSummary:
    'This week, the main macro development is that June inflation cooled in Canada and the United States after the spring energy shock, but the policy signal remains cautious rather than clearly dovish. In Canada, CPI inflation slowed to 2.8% year over year in June from 3.2% in May as gasoline prices fell sharply month over month, while CPI excluding gasoline held at 2.2%. The Bank of Canada held the overnight target at 2.25% on July 15, judged the rate appropriate, and still framed Middle East energy risk and U.S. trade policy as material uncertainty. Labour data were steadier: employment was little changed in June and unemployment eased to 6.5%, but the Bank of Canada capacity dashboard still points to economic slack. Housing and construction remain uneven, with May building permits down 1.7% despite a residential increase led by multi-unit projects. In the United States, June CPI slowed to 3.5% and core CPI to 2.6%, while payroll growth stayed modest at 57,000. Globally, OECD inflation rose to 4.6% in May, so my read is a temporary inflation relief week inside a still energy-sensitive global backdrop.',
  whatChanged: [
    'Canada CPI slowed to 2.8% year over year in June from 3.2% in May; this matters because a gasoline-led deceleration reduces near-term headline pressure without proving underlying inflation is fully settled.',
    'Canada CPI excluding gasoline was unchanged at 2.2% year over year in June; this matters because non-gasoline price pressure did not improve alongside the headline rate.',
    'The Bank of Canada held the overnight target at 2.25% on July 15; this matters because policy remains calibrated to support recovery while keeping inflation expectations anchored.',
    'Canada employment was little changed in June at +18,000 and unemployment declined to 6.5%; this matters because labour slack eased only gradually after a stronger May gain.',
    'Canada building permits fell 1.7% in May to $12.4 billion while residential permits rose 1.2%; this matters because housing supply signals are mixed across multi-unit and non-residential construction.',
    'U.S. CPI fell 0.4% month over month in June and slowed to 3.5% year over year; this matters because lower gasoline prices eased inflation before the July 28-29 FOMC decision.',
    'Canadian producer and raw-material prices declined month over month in June; this matters because commodity input costs eased in the month but remained much higher than a year earlier.',
  ],
  canadaFocus: {
    facts: [
      'Inflation: Statistics Canada reported June CPI inflation at 2.8% year over year, down from 3.2% in May. CPI excluding gasoline was unchanged at 2.2%. Gasoline rose 20.5% year over year, slower than 33.2% in May, and fell 10.2% month over month.',
      'Bank of Canada: the Bank held the target for the overnight rate at 2.25% on July 15, with the Bank Rate at 2.5% and the deposit rate at 2.20%. The next scheduled rate announcement is September 2, 2026.',
      'Capacity and inflation pressure: the Bank of Canada dashboard was updated July 15 and showed a Q1 output gap estimate of -1.3%, June unemployment at 6.5%, the labour market indicator at 6.1, and Q2 Business Outlook Survey labour shortages at 16% of firms.',
      'Labour market: Statistics Canada reported that employment was little changed in June at +18,000, the employment rate rose to 60.8%, unemployment declined to 6.5%, and average hourly wages rose 3.3% year over year. Saskatchewan employment rose by 2,900 and its unemployment rate was little changed at 6.1%.',
      'Housing and construction: May building permits declined 1.7% to $12.4 billion. Non-residential permits fell 6.1%, while residential intentions rose 1.2% as multi-unit permits increased and single-family permits declined.',
      'Consumer spending: May retail sales increased 1.0% to $73.7 billion, core retail sales rose 0.9%, and retail sales in volume terms rose 0.3%. Statistics Canada published an advance estimate that June retail sales increased 0.4%, subject to revision.',
      'Business investment and conditions: the Bank of Canada Business Outlook Survey said overall sentiment deteriorated in Q2, sales outlooks softened, export outlooks improved, investment intentions remained strong, and employment intentions were weaker than their historical average.',
      'Commodities and producer prices: Statistics Canada reported June IPPI down 1.4% month over month and up 12.4% year over year, while RMPI fell 6.9% month over month and rose 20.7% year over year.',
    ],
    interpretation:
      'My read is that Canada is moving through a supply-driven inflation episode with only a partial disinflation signal in June. Headline CPI improved because gasoline reversed, but the unchanged excluding-gasoline rate, elevated producer-price comparisons, and softer business sentiment argue for caution. Housing supply remains a constraint: multi-unit permit strength helps, but the overall permits decline and weak housing activity in the Bank of Canada outlook keep construction capacity and affordability on my watch list.',
  },
  globalFocus: {
    facts: [
      'Federal Reserve: the July 28-29 FOMC meeting was listed on the official calendar, but no July 29 statement was published at the time of my source check. The July Federal Reserve Monetary Policy Report said the target range had been maintained at 3.50% to 3.75% since the beginning of 2026.',
      'U.S. inflation: BLS reported June CPI fell 0.4% seasonally adjusted after rising 0.5% in May. Twelve-month CPI slowed to 3.5% from 4.2%, and core CPI slowed to 2.6% from 2.9%.',
      'U.S. employment: BLS reported June nonfarm payroll employment changed little at +57,000 and unemployment was 4.2%. Average hourly earnings rose 0.3% in June and 3.5% year over year.',
      'Treasury yields: FRED showed the 10-year Treasury yield at 4.65% on July 27, down from 4.69% on July 24 but above 4.48% on July 6. The 2-year yield was 4.31% on July 27.',
      'U.S. dollar and currencies: FRED showed the nominal broad U.S. dollar index at 120.7105 on July 24, slightly below 120.9075 on July 23. USD/CAD was 1.4078 on July 24, leaving the Canadian dollar weaker than earlier in the month.',
      'Global inflation: OECD reported headline inflation rose to 4.6% in May from 4.4% in April, with OECD energy inflation rising to 15.8%.',
      'Global commodities: the World Bank reported its energy price index declined 17.7% in June, largely because Brent crude fell 20.6%, while its April Commodity Markets Outlook still projected energy prices to surge in 2026 because of the Middle East shock.',
    ],
    interpretation:
      'The United States and global data point to a narrow improvement in near-term inflation, not a clean break from inflation risk. Lower gasoline prices helped June CPI, but policy rates, Treasury yields, and global energy sensitivity remain central to financial conditions. For Canada, the spillovers I am watching are the U.S. rate path, the Canadian dollar, oil-linked terms of trade, and whether softer global energy readings last long enough to reduce business input-cost expectations.',
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
      latest: '6.5%, June 2026',
      previous: '6.6%, May 2026',
      direction: 'Down',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'Labour slack eased slightly, but employment growth was modest.',
    },
    {
      indicator: 'Canada building permits',
      latest: '$12.4B, May 2026',
      previous: 'About $12.6B, April 2026',
      direction: 'Down',
      source: 'Statistics Canada Building Permits',
      interpretation: 'Construction intentions weakened overall, led by non-residential permits.',
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
      latest: '+0.5% m/m, April 2026',
      previous: '-0.1% m/m, March 2026',
      direction: 'Up',
      source: 'Statistics Canada GDP by industry',
      interpretation: 'Activity rebounded across goods and services; the May official release is due July 31.',
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
      latest: '3.5% y/y and -0.4% m/m, June 2026',
      previous: '4.2% y/y and +0.5% m/m, May 2026',
      direction: 'Down',
      source: 'U.S. Bureau of Labor Statistics CPI',
      interpretation: 'Gasoline and energy declines lowered headline inflation.',
    },
    {
      indicator: 'U.S. nonfarm payrolls',
      latest: '+57,000, June 2026',
      previous: '+129,000, May 2026 revised',
      direction: 'Down',
      source: 'U.S. Bureau of Labor Statistics Employment Situation',
      interpretation: 'Hiring remained modest, keeping employment risk in the policy discussion.',
    },
    {
      indicator: 'Federal funds target upper limit',
      latest: '3.75%, July 29, 2026',
      previous: '3.75%, July 28, 2026',
      direction: 'Unchanged',
      source: 'FRED DFEDTARU',
      interpretation: 'The official FRED series still showed the upper bound unchanged at run time.',
    },
    {
      indicator: 'U.S. 10-year Treasury yield',
      latest: '4.65%, July 27, 2026',
      previous: '4.69%, July 24, 2026',
      direction: 'Down',
      source: 'FRED DGS10',
      interpretation: 'Long yields eased slightly but remained higher than earlier in July.',
    },
    {
      indicator: 'Nominal broad U.S. dollar index',
      latest: '120.7105, July 24, 2026',
      previous: '120.9075, July 23, 2026',
      direction: 'Down',
      source: 'FRED DTWEXBGS',
      interpretation: 'The dollar eased on the latest reading but remained an important spillover channel.',
    },
    {
      indicator: 'USD/CAD exchange rate',
      latest: '1.4078, July 24, 2026',
      previous: '1.4087, July 23, 2026',
      direction: 'Down',
      source: 'FRED DEXCAUS',
      interpretation: 'USD/CAD edged lower on the latest observation, with the Canadian dollar still sensitive to rate and oil differentials.',
    },
    {
      indicator: 'OECD headline inflation',
      latest: '4.6% y/y, May 2026',
      previous: '4.4% y/y, April 2026',
      direction: 'Up',
      source: 'OECD CPI inflation release',
      interpretation: 'Global inflation pressure was still rising in May, driven by energy.',
    },
  ] satisfies DataRow[],
  chartSuggestions: [
    {
      title: 'Canada Headline CPI vs CPI Excluding Gasoline',
      source: 'Statistics Canada Table 18-10-0004-01',
      series: 'All-items CPI y/y; CPI excluding gasoline y/y',
      why: 'Shows how much of the June improvement came from gasoline rather than broader prices.',
    },
    {
      title: 'Bank of Canada Policy Rate, Output Gap, and CPI',
      source: 'Bank of Canada policy rate and capacity indicators; Statistics Canada CPI',
      series: 'Target overnight rate; current MPR output gap; all-items CPI y/y',
      why: 'Connects the policy hold to inflation and economic slack.',
    },
    {
      title: 'Canada Housing Supply Pipeline',
      source: 'Statistics Canada building permits and Bank of Canada real estate indicators',
      series: 'Total building permits; residential permits; multi-unit permits; new housing price index',
      why: 'Tracks whether multi-unit intentions are enough to offset weak overall housing activity.',
    },
    {
      title: 'U.S. Yield Curve and Dollar Spillovers',
      source: 'FRED DGS2, DGS10, DTWEXBGS, DEXCAUS',
      series: '2-year Treasury yield; 10-year Treasury yield; nominal broad U.S. dollar index; USD/CAD',
      why: 'Shows how U.S. policy expectations transmit to Canada through rates and currencies.',
    },
    {
      title: 'Commodity Cost Pass-Through',
      source: 'Statistics Canada IPPI/RMPI; World Bank commodity prices; FRED DCOILWTICO',
      series: 'IPPI m/m and y/y; RMPI m/m and y/y; World Bank energy index; WTI spot price',
      why: 'Separates monthly commodity relief from still-elevated year-over-year input costs.',
    },
  ] satisfies ChartSuggestion[],
  bottomLine: {
    happened:
      'Canada and U.S. June CPI cooled as gasoline prices fell, while Canada’s policy rate stayed at 2.25% and business sentiment softened.',
    matters:
      'The data reduce near-term headline inflation pressure, but energy risk, economic slack, housing supply, and U.S. financial conditions still dominate the outlook.',
    watching:
      'I am watching the July 29 FOMC statement when it is released, Canada May GDP on July 31, OECD June CPI on August 4, and Canada June building permits on August 12.',
  },
  sourceNotes:
    'Facts are drawn from official statistical agencies, central banks, FRED, OECD, and World Bank materials. Interpretation is my own and is not investment advice.',
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
      name: 'Statistics Canada Labour Force Survey, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260710/dq260710a-eng.htm',
    },
    {
      name: 'Statistics Canada building permits, May 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260710/dq260710b-eng.htm',
    },
    {
      name: 'Statistics Canada retail trade, May 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260723/dq260723a-eng.htm',
    },
    {
      name: 'Statistics Canada GDP by industry, April 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260630/dq260630a-eng.htm',
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
      url: 'https://www.bankofcanada.ca/publications/mpr/mpr-2026-07-15/',
    },
    {
      name: 'Bank of Canada capacity and inflation indicators',
      url: 'https://www.bankofcanada.ca/rates/indicators/capacity-and-inflation-pressures/',
    },
    {
      name: 'Bank of Canada Business Outlook Survey, Q2 2026',
      url: 'https://www.bankofcanada.ca/2026/07/business-outlook-survey-second-quarter-of-2026/',
    },
    {
      name: 'Federal Reserve FOMC calendar',
      url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm',
    },
    {
      name: 'Federal Reserve Monetary Policy Report, July 2026',
      url: 'https://www.federalreserve.gov/monetarypolicy/2026-07-mpr-summary.htm',
    },
    {
      name: 'U.S. Bureau of Labor Statistics CPI, June 2026',
      url: 'https://www.bls.gov/news.release/archives/cpi_07142026.htm',
    },
    {
      name: 'U.S. Bureau of Labor Statistics Employment Situation, June 2026',
      url: 'https://www.bls.gov/news.release/archives/empsit_07022026.pdf',
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
      name: 'OECD Data Explorer',
      url: 'https://data-explorer.oecd.org/',
    },
    {
      name: 'OECD CPI inflation release, May 2026',
      url: 'https://www.oecd.org/en/data/insights/statistical-releases/2026/07/consumer-prices-oecd-updated-6-july-2026.html',
    },
    {
      name: 'World Bank Commodity Markets',
      url: 'https://www.worldbank.org/en/research/commodity-markets',
    },
  ] satisfies ReportSource[],
}
