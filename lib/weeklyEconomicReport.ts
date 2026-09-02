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
  weekEnding: 'September 2, 2026',
  title: 'Weekly Economic Research Note: Canada GDP Rebounds, Policy Holds, Business Cost Pressure Eases',
  deck:
    'A concise macro update for Canada, the United States, and global spillovers, prepared as my current weekly research note.',
  executiveSummary:
    'This week added a stronger Canadian growth signal without removing the inflation and trade risks around the outlook. Statistics Canada reported that real GDP increased 0.8% in Q2, after Q1 was revised to 0.1%, with exports, household spending, and business capital investment leading the gain. Monthly GDP by industry also grew 0.3% in June, its third consecutive increase, while the advance estimate for July was essentially unchanged. The Bank of Canada held the overnight target at 2.25% on September 2, pointing to a broadening recovery but also to higher upside inflation risk from energy prices, new U.S. tariffs, and Canadian countermeasures. July CPI remains the latest inflation print, at 3.0% year over year, while CPI excluding gasoline stayed at 2.2%. Business survey data were mixed but somewhat better: 59.8% of businesses expected cost-related obstacles in Q3, down from 64.3% in Q2, but 32.2% expected U.S. tariffs on Canadian imports to hurt them over the next year. My read is that Canada has more cyclical momentum than earlier weak-growth data suggested, but the recovery still depends on energy, trade policy, and whether business cost pressure passes through to consumer prices.',
  whatChanged: [
    'Canada real GDP increased 0.8% in Q2 after Q1 was revised to 0.1%; this matters because the recovery broadened through exports, household spending, and business capital investment.',
    'Canada GDP by industry grew 0.3% in June and rose 0.9% in Q2 after a 0.1% Q1 gain; this matters because output momentum improved across both goods-producing and services-producing industries.',
    'The Bank of Canada held the overnight target at 2.25% on September 2; this matters because stronger growth was balanced against energy inflation, tariff risk, and still-excess labour supply.',
    'The Q3 Canadian Survey on Business Conditions showed 59.8% of businesses expecting cost-related obstacles, down from 64.3% in Q2; this matters because cost pressure eased but remained the dominant business constraint.',
    'Canada job vacancies edged up to 509,100 in June from May, while the unemployed-persons-per-vacancy ratio fell to 2.9 from 3.0; this matters because labour demand improved slightly without eliminating slack.',
    'U.S. 10-year Treasury yields rose to 4.75% on August 31 from 4.66% on August 26, while the 2-year yield rose to 4.34% from 4.19%; this matters because rate-sensitive spillovers tightened into the run date.',
    'USD/CAD moved to 1.3896 on September 1 from 1.3876 on August 26; this matters because the Canadian dollar softened slightly despite broader U.S.-dollar readings that had been mixed.',
  ],
  canadaFocus: {
    facts: [
      'Inflation: Statistics Canada reported July CPI inflation at 3.0% year over year, up from 2.8% in June. CPI excluding gasoline was 2.2% for a third consecutive month. Gasoline inflation accelerated to 25.7% year over year from 20.5%, while food purchased from stores slowed to 3.1% from 3.9%.',
      'Bank of Canada: on September 2, the Bank held the target for the overnight rate at 2.25%, with the Bank Rate at 2.5% and the deposit rate at 2.20%. The next scheduled decision and Monetary Policy Report are October 28.',
      'Monetary policy context: the Bank said recent data reaffirmed a broadening Canadian recovery, but it also flagged high uncertainty, new U.S. tariffs and Canadian countermeasures, high oil prices, and upside risks to inflation.',
      'Capacity and slack: the Bank of Canada capacity dashboard was last updated July 15 and showed the current MPR output-gap estimate at -1.3% for Q1, with its next update scheduled for September 3.',
      'Growth: real GDP by expenditure increased 0.8% in Q2 after Q1 was revised to 0.1%. GDP by industry rose 0.9% in Q2 after a 0.1% Q1 gain, and June GDP by industry grew 0.3% for a third consecutive monthly increase.',
      'Labour market: the latest Labour Force Survey remains July, when employment increased by 75,000, the employment rate rose to 60.9%, unemployment fell to 6.4%, and average hourly wages rose 2.8% year over year. The August LFS is scheduled for September 4.',
      'Payroll and vacancies: June job vacancies edged up by 10,500 to 509,100, payroll employment rose 18,800, and there were 2.9 unemployed persons for every job vacancy, down from 3.0 in May. Average weekly earnings were $1,343.86, up 3.4% year over year.',
      'Housing: residential investment rose 2.5% in Q2 after two quarterly declines, with all components up. June building permits rose 18.5% to $14.9 billion, led by non-residential permits, while real estate and rental and leasing output rose 0.2% in June.',
      'Consumer spending: June retail sales increased 0.6% to $74.3 billion, core retail sales rose 1.2%, and retail volumes increased 1.5%. Household disposable income rose 2.1% in Q2 and the household saving rate was 3.7%.',
      'Business investment and conditions: business capital investment rose in Q2, including a 2.3% gain in engineering structures and higher machinery and equipment spending. In Q3, 59.8% of businesses expected cost-related obstacles, down from 64.3% in Q2, while 41.6% expected inflation to be an obstacle.',
      'Trade and tariffs: 32.2% of businesses expected U.S. tariffs on Canadian imports to have a negative impact over the next 12 months, and 27.4% reported passing tariff-related cost increases to customers over the prior 12 months.',
      'Commodities and producer prices: July IPPI increased 0.6% month over month and 12.4% year over year, while RMPI fell 2.2% month over month and rose 18.1% year over year. Energy and petroleum products drove the monthly IPPI increase.',
    ],
    interpretation:
      'My read is that the Canadian cycle looks stronger but not clean. Q2 GDP, June industry output, residential investment, and capital spending all point to a broader recovery than the early-2026 data implied. The policy problem is that inflation is still around 3%, energy remains the main swing factor, and tariffs create a direct cost channel for businesses. For this portfolio, the important distinction is between cyclical momentum, which improved, and inflation durability, which is still uncertain.',
  },
  globalFocus: {
    facts: [
      'Federal Reserve: the FOMC held the federal funds target range at 3.50% to 3.75% on July 29 by a 9-3 vote. The next scheduled FOMC meeting is September 15-16.',
      'U.S. inflation: FRED CPI data show July CPI at 332.813, up from 332.568 in June and 3.3% above July 2025 on a seasonally adjusted basis. Core CPI was 336.789 in July, up from 336.065 in June and 2.5% above July 2025.',
      'U.S. employment: FRED payroll data show nonfarm payroll employment fell by 23,000 in July to 158.858 million, while the unemployment rate declined to 4.1% from 4.2% in June.',
      'Treasury yields: FRED showed the 10-year Treasury yield at 4.75% on August 31, up from 4.66% on August 26. The 2-year yield was 4.34% on August 31, up from 4.19% on August 26.',
      'U.S. dollar and currencies: FRED showed the nominal broad U.S. dollar index at 118.7479 on August 28, up from 118.4461 on August 26. Bank of Canada daily exchange rates showed USD/CAD at 1.3896 on September 1, up from 1.3876 on August 26.',
      'Equity market and risk sentiment: FRED showed the S&P 500 at 7,631.47 on September 1, down from 7,675.70 on August 26. The latest move points to softer risk sentiment over the run-date window.',
      'Commodities: FRED WTI crude was $83.90 on August 25, down from $86.34 on August 24 and $86.04 on August 17, but Canadian policy commentary still highlighted high oil prices and refinery margins as inflation risks.',
      'Global context: the Bank of Canada described U.S. growth as solid, the euro area as stronger than expected in Q2, and China as slower. OECD data showed headline inflation easing to 4.2% in June from 4.6% in May, while G20 merchandise import growth accelerated to 6.7% in Q2 from 5.2%.',
    ],
    interpretation:
      'The global backdrop is still pushing in different directions. U.S. employment softened in the latest verified monthly data, but U.S. policy remains constrained by inflation above target and stronger long yields. Canada benefits from evidence of global demand resilience, especially through trade and energy, but it is also exposed to tariff pass-through and imported financial tightening. I would treat market data as supporting context only; the official data still point to a recovery that is real but vulnerable to energy and trade-policy shocks.',
  },
  dataRows: [
    {
      indicator: 'Canada real GDP by expenditure',
      latest: '+0.8% q/q, Q2 2026',
      previous: '+0.1% q/q, Q1 2026 revised',
      direction: 'Up',
      source: 'Statistics Canada GDP income and expenditure',
      interpretation: 'Growth rebounded on exports, household spending, and business capital investment.',
    },
    {
      indicator: 'Canada GDP by industry',
      latest: '+0.3% m/m, June 2026; +0.9% q/q, Q2',
      previous: 'Third monthly gain; +0.1% q/q, Q1',
      direction: 'Up',
      source: 'Statistics Canada GDP by industry',
      interpretation: 'Output momentum improved across a broad set of industries, though July advance GDP was essentially unchanged.',
    },
    {
      indicator: 'Canada CPI, all-items',
      latest: '3.0% y/y, July 2026',
      previous: '2.8% y/y, June 2026',
      direction: 'Up',
      source: 'Statistics Canada CPI / Table 18-10-0004-01',
      interpretation: 'Headline inflation accelerated, mainly on gasoline and travel-related components.',
    },
    {
      indicator: 'Canada CPI excluding gasoline',
      latest: '2.2% y/y, July 2026',
      previous: '2.2% y/y, June 2026',
      direction: 'Unchanged',
      source: 'Statistics Canada CPI / Table 18-10-0004-01',
      interpretation: 'The non-gasoline inflation signal stayed stable despite the headline increase.',
    },
    {
      indicator: 'Bank of Canada overnight target',
      latest: '2.25%, September 2, 2026 decision',
      previous: '2.25%, July 15, 2026 decision',
      direction: 'Unchanged',
      source: 'Bank of Canada policy interest rate',
      interpretation: 'Policy stayed on hold while growth improved and inflation risks remained two-sided.',
    },
    {
      indicator: 'Canada unemployment rate',
      latest: '6.4%, July 2026',
      previous: '6.5%, June 2026',
      direction: 'Down',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'Labour slack eased on the latest verified monthly labour-market release.',
    },
    {
      indicator: 'Canada job vacancies',
      latest: '509,100, June 2026',
      previous: '+10,500 from May; 2.9 unemployed persons per vacancy vs 3.0',
      direction: 'Up',
      source: 'Statistics Canada payroll employment and job vacancies',
      interpretation: 'Vacancies and payroll employment edged higher, pointing to modestly better labour demand.',
    },
    {
      indicator: 'Canada residential investment',
      latest: '+2.5% q/q, Q2 2026',
      previous: 'Two consecutive quarterly declines',
      direction: 'Up',
      source: 'Statistics Canada GDP income and expenditure',
      interpretation: 'Housing activity rebounded, including resale activity and new construction.',
    },
    {
      indicator: 'Canada building permits',
      latest: '+18.5% m/m to $14.9B, June 2026',
      previous: 'Monthly declines in April and May',
      direction: 'Up',
      source: 'Statistics Canada Building Permits',
      interpretation: 'Construction intentions rebounded, led by non-residential institutional projects.',
    },
    {
      indicator: 'Canada retail sales',
      latest: '+0.6% m/m to $74.3B, June 2026',
      previous: '+1.0% m/m to $73.7B, May 2026',
      direction: 'Up',
      source: 'Statistics Canada Retail Trade',
      interpretation: 'Nominal, core, and volume retail sales rose, supporting the Q2 household-spending rebound.',
    },
    {
      indicator: 'Canada business cost obstacles',
      latest: '59.8% of businesses, Q3 2026',
      previous: '64.3%, Q2 2026',
      direction: 'Down',
      source: 'Statistics Canada Canadian Survey on Business Conditions',
      interpretation: 'Cost pressure eased but remained the most common business obstacle category.',
    },
    {
      indicator: 'Canada IPPI / RMPI',
      latest: 'IPPI +0.6% m/m; RMPI -2.2% m/m, July 2026',
      previous: 'IPPI -1.4% m/m; RMPI -6.9% m/m, June 2026',
      direction: 'Mixed',
      source: 'Statistics Canada IPPI/RMPI',
      interpretation: 'Producer prices rose on petroleum while raw-material prices fell for the month.',
    },
    {
      indicator: 'U.S. CPI, all-items',
      latest: '332.813 index, July 2026; +3.3% y/y',
      previous: '332.568 index, June 2026',
      direction: 'Up',
      source: 'FRED CPIAUCSL',
      interpretation: 'U.S. consumer prices edged higher and stayed above the Fed target on a year-over-year basis.',
    },
    {
      indicator: 'U.S. nonfarm payrolls',
      latest: '158.858M, July 2026',
      previous: '158.881M, June 2026',
      direction: 'Down',
      source: 'FRED PAYEMS',
      interpretation: 'Payroll employment declined by 23,000, keeping attention on labour-market risk.',
    },
    {
      indicator: 'Federal funds target upper limit',
      latest: '3.75%, September 2, 2026',
      previous: '3.75%, July 29, 2026',
      direction: 'Unchanged',
      source: 'FRED DFEDTARU',
      interpretation: 'The upper bound remained unchanged after the July FOMC hold.',
    },
    {
      indicator: 'U.S. 10-year Treasury yield',
      latest: '4.75%, August 31, 2026',
      previous: '4.66%, August 26, 2026',
      direction: 'Up',
      source: 'FRED DGS10',
      interpretation: 'Long yields rose into the run date, tightening rate-sensitive financial conditions.',
    },
    {
      indicator: 'Nominal broad U.S. dollar index',
      latest: '118.7479, August 28, 2026',
      previous: '118.4461, August 26, 2026',
      direction: 'Up',
      source: 'FRED DTWEXBGS',
      interpretation: 'The broad dollar strengthened over the latest available observations.',
    },
    {
      indicator: 'USD/CAD exchange rate',
      latest: '1.3896, September 1, 2026',
      previous: '1.3876, August 26, 2026',
      direction: 'Up',
      source: 'Bank of Canada daily exchange rates',
      interpretation: 'USD/CAD moved slightly higher, implying modest Canadian dollar softening.',
    },
    {
      indicator: 'S&P 500',
      latest: '7,631.47, September 1, 2026',
      previous: '7,675.70, August 26, 2026',
      direction: 'Down',
      source: 'FRED SP500',
      interpretation: 'Equities softened over the latest run-date window, suggesting more cautious risk sentiment.',
    },
    {
      indicator: 'OECD headline inflation',
      latest: '4.2% y/y, June 2026',
      previous: '4.6% y/y, May 2026',
      direction: 'Down',
      source: 'OECD consumer prices release',
      interpretation: 'Global headline inflation eased as energy inflation temporarily declined.',
    },
  ] satisfies DataRow[],
  chartSuggestions: [
    {
      title: 'Canada GDP Rebound by Driver',
      source: 'Statistics Canada Tables 36-10-0104-01 and 36-10-0434-01',
      series: 'Real GDP by expenditure; final domestic demand; exports; household spending; business capital investment; GDP by industry',
      why: 'Shows whether Q2 strength came from durable domestic demand or more volatile trade and inventory channels.',
    },
    {
      title: 'Canada Inflation: Headline, Ex-Gasoline, and Energy Pass-Through',
      source: 'Statistics Canada Table 18-10-0004-01; Statistics Canada IPPI/RMPI; FRED WTI crude',
      series: 'All-items CPI year-over-year; CPI excluding gasoline; gasoline CPI; IPPI energy products; WTI crude',
      why: 'Tests whether high energy prices are staying concentrated or spreading into broader inflation.',
    },
    {
      title: 'Business Cost and Tariff Pressure',
      source: 'Statistics Canada Canadian Survey on Business Conditions',
      series: 'Cost-related obstacles; inflation obstacle; recruiting skilled employees; expected negative tariff impact; tariff cost pass-through',
      why: 'Connects policy uncertainty to business operating conditions and potential consumer-price pass-through.',
    },
    {
      title: 'Canada Housing Activity Pulse',
      source: 'Statistics Canada GDP income and expenditure; building permits; GDP by industry',
      series: 'Residential investment; ownership transfer costs; new construction; building permits; real estate output; construction output',
      why: 'Shows whether the housing rebound is broad or concentrated in resale and permit timing.',
    },
    {
      title: 'U.S. Rates, Dollar, and Canadian Spillovers',
      source: 'FRED DGS2, DGS10, DTWEXBGS; Bank of Canada daily exchange rates',
      series: '2-year Treasury yield; 10-year Treasury yield; nominal broad U.S. dollar index; USD/CAD',
      why: 'Shows how U.S. policy expectations and currency moves transmit into Canadian financial conditions.',
    },
  ] satisfies ChartSuggestion[],
  bottomLine: {
    happened:
      'Canada posted a stronger Q2 GDP rebound, the Bank of Canada held rates at 2.25%, and business survey data showed easing but still-high cost pressure.',
    matters:
      'The week supports a cautious recovery view: growth momentum improved, but inflation, energy, tariffs, and labour slack still constrain policy confidence.',
    watching:
      'I am watching the August Labour Force Survey on September 4, real-time GDP table updates on September 8, August CPI on September 14, and the next FOMC meeting on September 15-16.',
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
      name: 'Statistics Canada CPI, July 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260817/dq260817a-eng.htm',
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
      name: 'Statistics Canada payroll employment and job vacancies, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260827/dq260827b-eng.htm',
    },
    {
      name: 'Statistics Canada GDP income and expenditure, Q2 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260828/dq260828a-eng.htm',
    },
    {
      name: 'Statistics Canada GDP by industry, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260828/dq260828b-eng.htm',
    },
    {
      name: 'Statistics Canada Canadian Survey on Business Conditions, Q3 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260831/dq260831a-eng.htm',
    },
    {
      name: 'Statistics Canada building permits, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260812/dq260812a-eng.htm',
    },
    {
      name: 'Statistics Canada retail trade, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260821/dq260821a-eng.htm',
    },
    {
      name: 'Statistics Canada IPPI/RMPI, July 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260820/dq260820a-eng.htm',
    },
    {
      name: 'Bank of Canada policy interest rate',
      url: 'https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/',
    },
    {
      name: 'Bank of Canada rate announcement, September 2, 2026',
      url: 'https://www.bankofcanada.ca/2026/09/fad-press-release-2026-09-02/',
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
      name: 'Bank of Canada daily exchange rates',
      url: 'https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/',
    },
    {
      name: 'Federal Reserve FOMC statement, July 29, 2026',
      url: 'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm',
    },
    {
      name: 'Federal Reserve FOMC calendar',
      url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm',
    },
    {
      name: 'FRED',
      url: 'https://fred.stlouisfed.org/',
    },
    {
      name: 'FRED U.S. CPI',
      url: 'https://fred.stlouisfed.org/series/CPIAUCSL',
    },
    {
      name: 'FRED U.S. core CPI',
      url: 'https://fred.stlouisfed.org/series/CPILFESL',
    },
    {
      name: 'FRED U.S. nonfarm payrolls',
      url: 'https://fred.stlouisfed.org/series/PAYEMS',
    },
    {
      name: 'FRED U.S. unemployment rate',
      url: 'https://fred.stlouisfed.org/series/UNRATE',
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
      name: 'OECD Consumer Prices, updated August 4, 2026',
      url: 'https://www.oecd.org/en/data/insights/statistical-releases/2026/08/consumer-prices-oecd-updated-4-august-2026.html',
    },
    {
      name: 'OECD international trade statistics, Q2 2026',
      url: 'https://www.oecd.org/en/data/insights/statistical-releases/2026/08/international-trade-statistics-trends-in-second-quarter-2026.html',
    },
  ] satisfies ReportSource[],
}
