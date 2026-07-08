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
  weekEnding: 'July 8, 2026',
  title: 'Weekly Economic Research Note: Energy-Driven Inflation Meets Slower Hiring',
  deck:
    'A concise macro update for Canada, the United States, and global spillovers, prepared as my current weekly research note.',
  executiveSummary:
    'This week, the macro story is a renewed inflation impulse from energy and food prices colliding with more cautious labour-market signals. In Canada, May CPI rose to 3.2% year over year from 2.8% in April, with gasoline, fresh produce, and transportation doing most of the work. The Bank of Canada held the overnight target at 2.25% on June 10 and has another decision scheduled for July 15, so I am watching whether policymakers treat the inflation increase as a supply shock or a broader persistence problem. Canadian activity looked firmer in April, with real GDP by industry up 0.5%, but building permits fell 7.6%, keeping housing supply and construction intentions in focus. In the United States, May CPI accelerated to 4.2% while June payroll growth slowed to 57,000 and labour force participation slipped. That mix keeps the Federal Reserve cautious: inflation remains above target, but employment momentum is less convincing. Globally, OECD inflation rose to 4.6% in May, reinforcing the same message: energy-sensitive inflation has re-emerged, and central banks have less room to ease quickly.',
  whatChanged: [
    'Canada CPI accelerated to 3.2% year over year in May from 2.8% in April; this matters because gasoline and food pressure can slow the return to 2% inflation.',
    'Canada excluding-gasoline CPI rose to 2.2% from 2.0%; this matters because the price pressure was not limited entirely to pump prices.',
    'Canada employment rose by 88,000 in May and unemployment fell to 6.6%; this matters because labour slack eased before the June labour report due July 10.',
    'Canada real GDP by industry increased 0.5% in April after a 0.1% March contraction; this matters because goods and services both contributed to growth.',
    'Canadian building permits fell 7.6% in April to $12.5 billion; this matters because weaker construction intentions work against needed housing supply.',
    'U.S. CPI rose to 4.2% year over year in May while core CPI edged up to 2.9%; this matters because inflation is still above the Federal Reserve target.',
    'U.S. nonfarm payrolls increased by 57,000 in June after May was revised to 129,000; this matters because hiring momentum weakened even as unemployment stayed low.',
  ],
  canadaFocus: {
    facts: [
      'Inflation: Statistics Canada reported May CPI at 3.2% year over year, up from 2.8% in April. Food purchased from stores rose 4.3%, shelter rose 1.7%, transportation rose 9.0%, and gasoline rose 33.2%.',
      'Bank of Canada: the overnight target remained 2.25% at the June 10 decision, with the next decision and Monetary Policy Report scheduled for July 15.',
      'Labour market: May employment increased by 88,000, the employment rate rose to 60.7%, and unemployment fell to 6.6%. Saskatchewan employment fell by 6,100 in May and the provincial unemployment rate rose to 6.2%.',
      'Housing and construction: April building permits fell 7.6% to $12.5 billion, with both residential and non-residential intentions lower. Residential permits declined 5.5%.',
      'Consumer spending and business investment: first-quarter real GDP by expenditure was unchanged, while household spending rose 0.4%. April GDP by industry then rose 0.5%, led by mining, oil and gas, manufacturing, transportation, warehousing, and public-sector activity.',
      'Policy and fiscal context: the Bank of Canada Monetary Policy Report frames U.S. trade policy and Middle East energy risk as key sources of uncertainty.',
    ],
    interpretation:
      'My read is that Canada is not in a simple demand-overheating story. The latest inflation increase is heavily energy-linked, but food and ex-gasoline inflation mean policymakers cannot dismiss it. Housing remains the structural constraint: softer permits may reduce near-term construction activity while affordability still depends on supply, rates, and income growth.',
  },
  globalFocus: {
    facts: [
      'Federal Reserve: the FOMC held the federal funds target range at 3.50% to 3.75% on June 17 and said inflation remains elevated relative to its 2% goal.',
      'U.S. inflation: May CPI rose 0.5% month over month and 4.2% year over year; core CPI rose 0.2% month over month and 2.9% year over year.',
      'U.S. employment: June payrolls increased by 57,000, unemployment was 4.2%, participation fell to 61.5%, and April-May payrolls were revised down by 74,000 combined.',
      'Treasury yields: FRED showed the 10-year Treasury yield at 4.48% and the 2-year yield at 4.13% on July 6.',
      'U.S. dollar: FRED showed the nominal broad U.S. dollar index at 120.6902 on July 2, below 121.1455 on July 1 but still a major global financial-condition channel.',
      'Commodities and risk sentiment: the Federal Reserve, Bank of Canada, and OECD all identified Middle East conflict, energy prices, uncertainty, confidence, and financial conditions as key channels into inflation and growth.',
      'Global spillovers: OECD reported headline inflation rose to 4.6% in May 2026, fuelled by higher energy prices, while its June outlook emphasized energy-price, supply, confidence, and financial-condition risks.',
    ],
    interpretation:
      'The United States is sending mixed signals: inflation argues for policy restraint, while payrolls and participation argue for caution about labour demand. Higher U.S. yields and a firm dollar can tighten financial conditions abroad, especially for commodity importers and dollar borrowers. For Canada, that matters through exchange rates, energy prices, export demand, and expectations for the Bank of Canada-Federal Reserve policy gap.',
  },
  dataRows: [
    {
      indicator: 'Canada CPI, all-items',
      latest: '3.2% y/y, May 2026',
      previous: '2.8% y/y, April 2026',
      direction: 'Up',
      source: 'Statistics Canada CPI / Table 18-10-0004-01',
      interpretation: 'Headline inflation re-accelerated, mainly from gasoline and transportation.',
    },
    {
      indicator: 'Canada CPI excluding gasoline',
      latest: '2.2% y/y, May 2026',
      previous: '2.0% y/y, April 2026',
      direction: 'Up',
      source: 'Statistics Canada CPI',
      interpretation: 'Underlying price pressure also firmed, though less sharply than headline CPI.',
    },
    {
      indicator: 'Bank of Canada overnight target',
      latest: '2.25%, June 10, 2026',
      previous: '2.25%, April 29, 2026',
      direction: 'Unchanged',
      source: 'Bank of Canada policy interest rate',
      interpretation: 'Policy remains on hold before the July 15 decision.',
    },
    {
      indicator: 'Canada unemployment rate',
      latest: '6.6%, May 2026',
      previous: '6.9%, April 2026',
      direction: 'Down',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'Labour slack eased, though the June release is still pending.',
    },
    {
      indicator: 'Canada real GDP by industry',
      latest: '+0.5% m/m, April 2026',
      previous: '-0.1% m/m, March 2026',
      direction: 'Up',
      source: 'Statistics Canada Table 36-10-0434-01',
      interpretation: 'Activity rebounded across both goods and services sectors.',
    },
    {
      indicator: 'Canada building permits',
      latest: '$12.5B, April 2026',
      previous: '$13.5B, March 2026',
      direction: 'Down',
      source: 'Statistics Canada Building Permits',
      interpretation: 'Construction intentions weakened, including residential permits.',
    },
    {
      indicator: 'U.S. CPI, all-items',
      latest: '4.2% y/y, May 2026',
      previous: '3.8% y/y, April 2026',
      direction: 'Up',
      source: 'U.S. Bureau of Labor Statistics',
      interpretation: 'Energy pushed inflation farther above the Federal Reserve target.',
    },
    {
      indicator: 'U.S. nonfarm payrolls',
      latest: '+57,000, June 2026',
      previous: '+129,000, May 2026 revised',
      direction: 'Down',
      source: 'U.S. Bureau of Labor Statistics',
      interpretation: 'Hiring momentum slowed, with downward revisions to April and May.',
    },
    {
      indicator: 'U.S. 10-year Treasury yield',
      latest: '4.48%, July 6, 2026',
      previous: '4.49%, July 2, 2026',
      direction: 'Down',
      source: 'FRED DGS10',
      interpretation: 'Long yields were little changed but remain a global discount-rate anchor.',
    },
    {
      indicator: 'Nominal broad U.S. dollar index',
      latest: '120.6902, July 2, 2026',
      previous: '121.1455, July 1, 2026',
      direction: 'Down',
      source: 'FRED DTWEXBGS',
      interpretation: 'The dollar eased on the latest reading but remains central to spillovers.',
    },
    {
      indicator: 'OECD headline inflation',
      latest: '4.6% y/y, May 2026',
      previous: '4.4% y/y, April 2026',
      direction: 'Up',
      source: 'OECD inflation release',
      interpretation: 'Global inflation pressure broadened through energy-sensitive channels.',
    },
  ] satisfies DataRow[],
  chartSuggestions: [
    {
      title: 'Canada Headline CPI vs CPI Excluding Gasoline',
      source: 'Statistics Canada Table 18-10-0004-01',
      series: 'All-items CPI y/y; CPI excluding gasoline y/y',
      why: 'Separates the gasoline shock from broader consumer price pressure.',
    },
    {
      title: 'Bank of Canada Overnight Target and Canada CPI',
      source: 'Bank of Canada policy rate; Statistics Canada CPI',
      series: 'Target overnight rate; all-items CPI y/y; CPI excluding gasoline y/y',
      why: 'Shows how policy is responding to headline and underlying inflation.',
    },
    {
      title: 'Canada Labour Market Slack',
      source: 'Statistics Canada Labour Force Survey',
      series: 'Unemployment rate; employment rate; monthly employment change',
      why: 'Tracks whether the May improvement carries into the June release.',
    },
    {
      title: 'U.S. Yield Curve and Policy Range',
      source: 'FRED DGS2, DGS10, DFEDTARU',
      series: '2-year Treasury yield; 10-year Treasury yield; federal funds target upper limit',
      why: 'Connects Fed expectations to broader financial conditions.',
    },
    {
      title: 'Global Inflation Pressure',
      source: 'OECD inflation release and Data Explorer',
      series: 'OECD headline CPI; Canada CPI; U.S. CPI',
      why: 'Places Canadian and U.S. inflation in the global energy-price context.',
    },
  ] satisfies ChartSuggestion[],
  bottomLine: {
    happened:
      'Energy and food prices pushed inflation higher in Canada, the United States, and the OECD aggregate, while U.S. hiring slowed and Canadian activity rebounded in April.',
    matters:
      'Central banks face a harder trade-off: inflation is not back at target, but labour and business conditions are uneven enough that overtightening remains a risk.',
    watching:
      'I am watching the July 10 Canadian Labour Force Survey, May building permits, July 14 U.S. CPI, and the July 15 Bank of Canada decision and Monetary Policy Report.',
  },
  sourceNotes:
    'Facts are drawn from official statistical agencies, central banks, FRED, and OECD materials. Interpretation is my own and is not investment advice.',
  sources: [
    {
      name: 'Statistics Canada homepage and key indicators',
      url: 'https://www.statcan.gc.ca/en/start',
    },
    {
      name: 'Statistics Canada release calendar',
      url: 'https://www150.statcan.gc.ca/n1/dai-quo/cal2-eng.htm',
    },
    {
      name: 'Statistics Canada CPI, May 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260622/dq260622a-eng.htm',
    },
    {
      name: 'Statistics Canada CPI table 18-10-0004-01',
      url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000401',
    },
    {
      name: 'Statistics Canada Labour Force Survey, May 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260605/dq260605a-eng.htm',
    },
    {
      name: 'Statistics Canada GDP by industry, April 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260630/dq260630a-eng.htm',
    },
    {
      name: 'Statistics Canada building permits, April 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260611/dq260611b-eng.htm',
    },
    {
      name: 'Bank of Canada policy interest rate',
      url: 'https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/',
    },
    {
      name: 'Bank of Canada Monetary Policy Report, April 2026',
      url: 'https://www.bankofcanada.ca/publications/mpr/mpr-2026-04-29/',
    },
    {
      name: 'Bank of Canada capacity and inflation indicators',
      url: 'https://www.bankofcanada.ca/rates/indicators/capacity-and-inflation-pressures/',
    },
    {
      name: 'Bank of Canada June 10 policy announcement',
      url: 'https://www.bankofcanada.ca/2026/06/fad-press-release-2026-06-10/',
    },
    {
      name: 'Federal Reserve June 17 FOMC statement',
      url: 'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm',
    },
    {
      name: 'U.S. Bureau of Labor Statistics CPI, May 2026',
      url: 'https://www.bls.gov/news.release/cpi.nr0.htm',
    },
    {
      name: 'U.S. Bureau of Labor Statistics Employment Situation, June 2026',
      url: 'https://www.bls.gov/news.release/empsit.nr0.htm',
    },
    {
      name: 'FRED economic data',
      url: 'https://fred.stlouisfed.org/',
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
      name: 'OECD Data Explorer',
      url: 'https://data-explorer.oecd.org/',
    },
    {
      name: 'OECD inflation indicator',
      url: 'https://www.oecd.org/en/data/indicators/inflation-cpi.html',
    },
    {
      name: 'OECD Economic Outlook, Volume 2026 Issue 1',
      url: 'https://www.oecd.org/en/publications/2026/06/oecd-economic-outlook-volume-2026-issue-1_8be0dba6.html',
    },
  ] satisfies ReportSource[],
}
