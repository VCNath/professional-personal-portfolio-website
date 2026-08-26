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
  weekEnding: 'August 26, 2026',
  title: 'Weekly Economic Research Note: Canadian CPI Firms, Spending Holds, Energy Drives Business Conditions',
  deck:
    'A concise macro update for Canada, the United States, and global spillovers, prepared as my current weekly research note.',
  executiveSummary:
    'This week shifted the Canadian macro story back toward energy-sensitive inflation and resilient demand. Statistics Canada reported that July CPI rose 3.0% year over year, up from 2.8% in June, while CPI excluding gasoline held at 2.2% for a third straight month. That tells me the headline move was less about broad domestic inflation and more about gasoline, travel, and external cost pressure. Consumer activity still looked firm: June retail sales rose 0.6% to $74.3 billion, core retail sales rose 1.2%, and food services sales increased 0.5% to $8.8 billion. Business conditions also improved on paper, with Q2 corporate operating profit up 9.7%, but the gain was concentrated in energy-linked industries. The Bank of Canada remains on hold at 2.25%, with its July MPR still describing weak but improving growth, excess capacity, and elevated uncertainty. In the United States, FRED data show July payrolls slipped by 23,000, unemployment eased to 4.1%, Treasury yields were mixed, and the broad dollar index moved lower. My read is cautious: demand has not broken, but the week reinforces how much of the near-term inflation and profit story depends on energy and global supply conditions.',
  whatChanged: [
    'Canada CPI moved up to 3.0% year over year in July from 2.8% in June; this matters because headline inflation re-accelerated even though CPI excluding gasoline stayed at 2.2%.',
    'Canada retail sales rose 0.6% in June to $74.3 billion, after rising 1.0% in May; this matters because household goods spending remained positive before the advance estimate for July turned negative.',
    'Canada IPPI rose 0.6% month over month in July after falling 1.4% in June, while RMPI fell 2.2%; this matters because factory-gate prices rose on petroleum even as raw-material costs cooled.',
    'Canadian corporate operating profit rose 9.7% in Q2 to $228.2 billion; this matters because business earnings improved, but the driver was heavily tied to energy prices and supply disruptions.',
    'Bank of Canada policy stayed unchanged at a 2.25% overnight target; this matters because stronger spending and CPI do not yet remove the Bank\'s slack and uncertainty concerns.',
    'U.S. 10-year Treasury yields were 4.70% on August 24, down from 4.72% on August 17, while the 2-year yield rose to 4.24%; this matters because the curve signal remained mixed for rate-sensitive sectors.',
    'USD/CAD was 1.3876 on August 26, down from 1.3889 on August 18; this matters because a slightly firmer Canadian dollar modestly offsets imported-price pressure.',
  ],
  canadaFocus: {
    facts: [
      'Inflation: Statistics Canada reported July CPI inflation at 3.0% year over year, up from 2.8% in June. CPI excluding gasoline was 2.2% for a third consecutive month. Gasoline inflation accelerated to 25.7% year over year from 20.5%, while food purchased from stores slowed to 3.1% from 3.9%.',
      'Bank of Canada: the target for the overnight rate remained 2.25% after the July 15 decision, with the Bank Rate at 2.5% and deposit rate at 2.20%. The next policy decision is scheduled for September 3, 2026.',
      'Capacity and inflation pressure: the Bank of Canada capacity dashboard was last updated July 15 and showed the current MPR output-gap estimate at -1.3% for 2026 Q1, reinforcing that the Bank still sees excess capacity.',
      'Labour market: the latest Statistics Canada Labour Force Survey remains July, when employment increased by 75,000, the employment rate rose to 60.9%, unemployment fell to 6.4%, and average hourly wages rose 2.8% year over year. The August LFS is scheduled for September 4.',
      'Housing and construction: June building permits increased 18.5% to $14.9 billion, while the August 26 Canadian Housing Statistics Program release highlighted affordability gaps between first-time and repeat buyers in the provinces and territories covered.',
      'Consumer spending: June retail sales increased 0.6% to $74.3 billion, core retail sales rose 1.2%, and retail volumes increased 1.5%. The advance estimate suggests July retail sales fell 0.8%, but that estimate is preliminary.',
      'Services spending: food services and drinking places sales rose 0.5% in June to $8.8 billion, with gains in limited-service eating places, full-service restaurants, and drinking places.',
      'Business investment and conditions: Q2 corporate operating profit rose 9.7% to $228.2 billion. Non-financial profits rose 13.7%, led by oil and gas and petroleum and coal product manufacturing, which means the improvement was closely linked to energy prices.',
      'Commodities and producer prices: July IPPI increased 0.6% month over month and 12.4% year over year, while RMPI fell 2.2% month over month and rose 18.1% year over year. Energy and petroleum products drove the IPPI increase.',
    ],
    interpretation:
      'My read is that Canada is not giving the Bank of Canada a simple easing signal. Spending and corporate profit data show demand and income support, but July inflation was pushed higher by gasoline and travel rather than a broad reacceleration outside gasoline. The output-gap estimate and still-modest wage growth argue for patience, while energy-linked price pressure argues against declaring the inflation problem finished. For this portfolio, the useful takeaway is that the Canadian cycle looks better than weak GDP headlines implied, but the quality of the improvement is uneven.',
  },
  globalFocus: {
    facts: [
      'Federal Reserve: the FOMC held the federal funds target range at 3.50% to 3.75% on July 29 by a 9-3 vote. The statement said inflation remained elevated relative to the 2% goal and three voters preferred a 25 basis point increase.',
      'U.S. inflation: FRED CPI data show July CPI at 332.813, up from 332.568 in June and 3.3% above July 2025 on a seasonally adjusted basis. Core CPI was 336.789 in July, up from 336.065 in June and 2.5% above July 2025.',
      'U.S. employment: FRED payroll data show nonfarm payroll employment fell by 23,000 in July to 158.858 million, while the unemployment rate declined to 4.1% from 4.2% in June.',
      'Treasury yields: FRED showed the 10-year Treasury yield at 4.70% on August 24, down from 4.72% on August 17. The 2-year yield was 4.24% on August 24, up from 4.19% on August 17.',
      'U.S. dollar and currencies: FRED showed the nominal broad U.S. dollar index at 118.0628 on August 21, down from 118.8140 on August 17. Bank of Canada daily exchange rates showed USD/CAD at 1.3876 on August 26, down from 1.3889 on August 18.',
      'Equity market and risk sentiment: FRED showed the S&P 500 at 7,677.28 on August 25, down from 7,745.06 on August 17. That is a softer equity signal even as the level remains elevated relative to earlier summer readings.',
      'Global inflation and commodities: OECD headline inflation eased to 4.2% in June from 4.6% in May. FRED WTI crude was $83.90 on August 25, down from $86.04 on August 17 but above the August 14 reading of $83.99.',
    ],
    interpretation:
      'The global context remains a policy cross-current. U.S. labour data have softened at the margin, but the Fed is still formally focused on inflation risk. Lower broad-dollar readings reduce one external pressure on Canada, while oil volatility keeps the commodity channel important for CPI, producer prices, corporate profits, and the Canadian dollar. I would not read the latest yield and equity moves as a clean risk-on or risk-off message; the market backdrop is mixed, and official data still matter more than price action for this note.',
  },
  dataRows: [
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
      latest: '2.25%, July 15, 2026 decision',
      previous: '2.25%, June 10, 2026 decision',
      direction: 'Unchanged',
      source: 'Bank of Canada policy interest rate',
      interpretation: 'Policy remained on hold while the Bank assessed slack, energy prices, and uncertainty.',
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
      indicator: 'Canada retail sales',
      latest: '+0.6% m/m to $74.3B, June 2026',
      previous: '+1.0% m/m to $73.7B, May 2026',
      direction: 'Up',
      source: 'Statistics Canada Retail Trade',
      interpretation: 'Nominal, core, and volume retail sales rose, but the preliminary July estimate is negative.',
    },
    {
      indicator: 'Canada food services sales',
      latest: '+0.5% m/m to $8.8B, June 2026',
      previous: 'May 2026 level implied near $8.76B',
      direction: 'Up',
      source: 'Statistics Canada Food Services and Drinking Places',
      interpretation: 'Restaurant and drinking-place sales added evidence that services demand held up in June.',
    },
    {
      indicator: 'Canada building permits',
      latest: '+18.5% m/m to $14.9B, June 2026',
      previous: 'About $12.6B, May 2026',
      direction: 'Up',
      source: 'Statistics Canada Building Permits',
      interpretation: 'Construction intentions rebounded, led by non-residential and multi-unit residential permits.',
    },
    {
      indicator: 'Canadian corporate operating profit',
      latest: '$228.2B, Q2 2026',
      previous: 'About $208.1B, Q1 2026',
      direction: 'Up',
      source: 'Statistics Canada Quarterly Financial Statistics for Enterprises',
      interpretation: 'Profitability improved, but the gain was concentrated in energy-sensitive industries.',
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
      previous: '332.568 index, June 2026; +0.1% m/m',
      direction: 'Up',
      source: 'FRED CPIAUCSL',
      interpretation: 'U.S. consumer prices edged higher in July and stayed above the Fed target on a year-over-year basis.',
    },
    {
      indicator: 'U.S. nonfarm payrolls',
      latest: '158.858M, July 2026',
      previous: '158.881M, June 2026',
      direction: 'Down',
      source: 'FRED PAYEMS',
      interpretation: 'Payroll employment declined by 23,000, shifting attention toward labour-market risk.',
    },
    {
      indicator: 'Federal funds target upper limit',
      latest: '3.75%, August 26, 2026',
      previous: '3.75%, July 29, 2026',
      direction: 'Unchanged',
      source: 'FRED DFEDTARU',
      interpretation: 'The upper bound remained unchanged after the July FOMC hold.',
    },
    {
      indicator: 'U.S. 10-year Treasury yield',
      latest: '4.70%, August 24, 2026',
      previous: '4.72%, August 17, 2026',
      direction: 'Down',
      source: 'FRED DGS10',
      interpretation: 'Long yields were slightly lower over the week, easing one rate-sensitive pressure point.',
    },
    {
      indicator: 'Nominal broad U.S. dollar index',
      latest: '118.0628, August 21, 2026',
      previous: '118.8140, August 17, 2026',
      direction: 'Down',
      source: 'FRED DTWEXBGS',
      interpretation: 'The broad dollar weakened on the latest available observations.',
    },
    {
      indicator: 'USD/CAD exchange rate',
      latest: '1.3876, August 26, 2026',
      previous: '1.3889, August 18, 2026',
      direction: 'Down',
      source: 'Bank of Canada daily exchange rates',
      interpretation: 'USD/CAD moved slightly lower, implying modest Canadian dollar firming.',
    },
    {
      indicator: 'S&P 500',
      latest: '7,677.28, August 25, 2026',
      previous: '7,745.06, August 17, 2026',
      direction: 'Down',
      source: 'FRED SP500',
      interpretation: 'Equities softened over the latest available week, suggesting more cautious risk sentiment.',
    },
    {
      indicator: 'OECD headline inflation',
      latest: '4.2% y/y, June 2026',
      previous: '4.6% y/y, May 2026',
      direction: 'Down',
      source: 'OECD CPI inflation release',
      interpretation: 'Global headline inflation eased as energy inflation temporarily declined.',
    },
  ] satisfies DataRow[],
  chartSuggestions: [
    {
      title: 'Canada Headline CPI vs CPI Excluding Gasoline',
      source: 'Statistics Canada Table 18-10-0004-01',
      series: 'All-items CPI year-over-year; CPI excluding gasoline year-over-year; gasoline CPI year-over-year',
      why: 'Shows whether July re-acceleration was broad or concentrated in gasoline-sensitive components.',
    },
    {
      title: 'Canada Demand Pulse',
      source: 'Statistics Canada retail trade and food services tables',
      series: 'Retail sales current dollars; retail sales volumes; core retail sales; food services sales',
      why: 'Tracks whether consumer demand is holding up after June gains and the preliminary July retail decline.',
    },
    {
      title: 'Energy Pass-Through to Business Prices',
      source: 'Statistics Canada IPPI/RMPI; FRED WTI crude oil',
      series: 'IPPI energy and petroleum products; total IPPI; RMPI crude energy products; WTI spot price',
      why: 'Separates commodity price shocks from broader producer-price pressure.',
    },
    {
      title: 'Profit Growth by Industry',
      source: 'Statistics Canada Quarterly Financial Statistics for Enterprises',
      series: 'Total operating profit; non-financial operating profit; oil and gas profit; manufacturing profit; financial industries profit',
      why: 'Tests whether business-condition improvement is broad-based or concentrated in energy-sensitive sectors.',
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
      'Canada CPI firmed in July, June spending held up, producer prices gave a mixed energy-driven signal, and Canadian corporate profits rose in Q2.',
    matters:
      'The week supports a cautious policy read: demand and profits look better, but inflation and margins remain exposed to energy and external supply shocks.',
    watching:
      'I am watching Canada GDP on August 28, the Canadian Survey on Business Conditions on August 31, the Bank of Canada decision on September 3, and the August Labour Force Survey on September 4.',
  },
  sourceNotes:
    'Facts are drawn from official statistical agencies, central banks, FRED, and OECD materials. Interpretation is my own and is not investment advice.',
  sources: [
    {
      name: 'Statistics Canada homepage and The Daily releases',
      url: 'https://www.statcan.gc.ca/en/start',
    },
    {
      name: 'Statistics Canada release calendar, August 24 to September 4, 2026',
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
      name: 'Statistics Canada building permits, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260812/dq260812a-eng.htm',
    },
    {
      name: 'Statistics Canada retail trade, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260821/dq260821a-eng.htm',
    },
    {
      name: 'Statistics Canada food services and drinking places, June 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260826/dq260826c-eng.htm',
    },
    {
      name: 'Statistics Canada quarterly financial statistics for enterprises, Q2 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260824/dq260824a-eng.htm',
    },
    {
      name: 'Statistics Canada IPPI/RMPI, July 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260820/dq260820a-eng.htm',
    },
    {
      name: 'Statistics Canada Canadian Housing Statistics Program, 2024',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260826/dq260826b-eng.htm',
    },
    {
      name: 'Bank of Canada policy interest rate',
      url: 'https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/',
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
  ] satisfies ReportSource[],
}
