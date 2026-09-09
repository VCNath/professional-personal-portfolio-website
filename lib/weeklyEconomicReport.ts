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
  weekEnding: 'September 9, 2026',
  title: 'Weekly Economic Research Note: Canadian Jobs Soften, Trade Surplus Narrows, Global Inflation Holds Firm',
  deck:
    'A concise macro update for Canada, the United States, and global spillovers, prepared as my current weekly research note.',
  executiveSummary:
    'This week shifted the Canadian macro signal from broad recovery toward a more uneven expansion. Statistics Canada reported that employment declined by 42,000 in August, the employment rate slipped to 60.8%, and the unemployment rate held at 6.4%. Wage growth also slowed to 2.0% year over year from 2.8% in July, which reduces one domestic cost pressure but points to softer household income momentum. Trade data added another caution: July goods exports fell 2.3%, imports rose 2.2%, and the merchandise surplus narrowed to $769 million from $4.2 billion, mainly because exports to the United States dropped 6.6%. Inflation remains the key constraint. July CPI is still the latest Canadian print at 3.0% year over year, and the Bank of Canada held the overnight target at 2.25% on September 2 while noting energy and tariff risks. In the United States, FRED shows August payrolls rose to 159.075 million and unemployment stayed at 4.1%, but Treasury yields moved higher and OECD inflation was broadly stable at 4.1% in July. My read is that Canada still has growth momentum from Q2, but the latest labour and trade data make that momentum less clean.',
  whatChanged: [
    'Canada employment fell by 42,000 in August and the employment rate declined to 60.8%; this matters because labour-market momentum weakened after gains from April to July.',
    'Canada wage growth slowed to 2.0% year over year in August from 2.8% in July; this matters because wage pressure eased, but so did support for household income growth.',
    'Canada merchandise exports fell 2.3% in July while imports rose 2.2%; this matters because the goods trade surplus narrowed sharply to $769 million from $4.2 billion.',
    'Exports to the United States fell 6.6% in July, while exports to countries other than the United States rose 7.4% to a record $25.6 billion; this matters because trade strength is becoming more geographically uneven.',
    'The Bank of Canada capacity dashboard was updated September 3 and kept the current MPR output-gap estimate at -1.3% for Q1; this matters because policy is still balancing slack against above-target inflation.',
    'FRED showed U.S. 10-year Treasury yields rising to 4.78% on September 4 from 4.66% on August 26, while the 2-year yield rose to 4.37% from 4.19%; this matters because rate-sensitive spillovers tightened into the run date.',
    'OECD reported headline inflation broadly stable at 4.1% in July, with energy inflation at 11.6%; this matters because global disinflation remains vulnerable to energy-price pressure.',
  ],
  canadaFocus: {
    facts: [
      'Inflation: Statistics Canada reported July CPI inflation at 3.0% year over year, up from 2.8% in June. CPI excluding gasoline was 2.2% for a third consecutive month. The August CPI release is scheduled for September 14.',
      'Bank of Canada: on September 2, the Bank held the target for the overnight rate at 2.25%, with the Bank Rate at 2.5% and the deposit rate at 2.20%. The next scheduled decision and Monetary Policy Report are October 28.',
      'Capacity and slack: the Bank of Canada capacity dashboard was updated September 3. It showed the current MPR output-gap estimate at -1.3% for Q1, CPI inflation at 3.0% in July, CPI-trim at 1.9%, CPI-median at 2.0%, and CPI-common at 2.7%.',
      'Labour market: employment declined by 42,000 in August, the employment rate fell 0.1 percentage points to 60.8%, and the unemployment rate was unchanged at 6.4%. Employment fell in business, building and other support services, public administration, natural resources, and utilities, while manufacturing rose by 22,000.',
      'Wages: average hourly wages among employees rose 2.0% year over year to $37.02 in August, slowing from 2.8% in July. This is a softer wage signal than the previous monthly release.',
      'Growth: real GDP by expenditure increased 0.8% in Q2 after Q1 was revised to 0.1%. GDP by industry rose 0.9% in Q2 after a 0.1% Q1 gain, while June GDP by industry grew 0.3% and the advance estimate for July was essentially unchanged.',
      'Trade: July merchandise exports decreased 2.3% to $76.1 billion and imports rose 2.2% to $75.4 billion. The goods surplus narrowed to $769 million from a revised $4.2 billion in June, but it remained the fifth consecutive monthly surplus.',
      'Trade composition: exports to the United States fell 6.6% in July, while exports to countries other than the United States rose 7.4% to a record $25.6 billion. The non-U.S. share of Canadian exports reached 33.7%.',
      'Housing: residential investment rose 2.5% in Q2 after two quarterly declines. June building permits rose 18.5% to $14.9 billion, and the next July building-permits release is scheduled for September 16. The Bank of Canada capacity dashboard showed the new housing price index down 2.3% year over year in July.',
      'Consumer spending: June retail sales increased 0.6% to $74.3 billion, core retail sales rose 1.2%, and retail volumes increased 1.5%. New motor vehicle registrations reached 547,673 in Q2, up 37.7% from Q1 and 1.1% from Q2 2025.',
      'Business investment and conditions: business capital investment rose in Q2, including a 2.3% gain in engineering structures and higher machinery and equipment spending. In Q3, 59.8% of businesses expected cost-related obstacles, down from 64.3% in Q2, while 41.6% expected inflation to be an obstacle.',
      'Commodities and producer prices: July IPPI increased 0.6% month over month and 12.4% year over year, while RMPI fell 2.2% month over month and rose 18.1% year over year. The Bank of Canada commodity price index was up 17.9% year over year in August, with energy up 24.9%.',
    ],
    interpretation:
      'My read is that Canada has not lost the Q2 recovery story, but the composition now looks more fragile. Labour demand softened in August, exports to the United States weakened sharply in July, and the trade surplus narrowed despite strength in non-U.S. markets. At the same time, inflation is still above target and energy remains an important global and domestic risk channel. For this portfolio, the main analytical distinction is between backward-looking Q2 growth strength and the more cautious high-frequency labour and trade signals now arriving for Q3.',
  },
  globalFocus: {
    facts: [
      'Federal Reserve: the FOMC held the federal funds target range at 3.50% to 3.75% on July 29 by a 9-3 vote. The next scheduled FOMC meeting is September 15-16.',
      'U.S. inflation: FRED CPI data show July CPI at 332.813, up from 332.568 in June and 3.3% above July 2025 on a seasonally adjusted basis. Core CPI was 336.789 in July, up from 336.065 in June and 2.5% above July 2025.',
      'U.S. employment: FRED payroll data show nonfarm payroll employment at 159.075 million in August, up from 158.913 million in July. The unemployment rate was unchanged at 4.1%.',
      'Treasury yields: FRED showed the 10-year Treasury yield at 4.78% on September 4, up from 4.66% on August 26. The 2-year yield was 4.37% on September 4, up from 4.19% on August 26.',
      'U.S. dollar and currencies: FRED showed the nominal broad U.S. dollar index at 118.0732 on September 4, down from 118.4461 on August 26. Bank of Canada daily exchange rates showed USD/CAD at 1.3784 on September 8, down from 1.3863 on September 2.',
      'Equity market and risk sentiment: FRED showed the S&P 500 at 7,673.52 on September 8, nearly unchanged from 7,675.70 on August 26 after volatility around the turn of the month.',
      'Commodities: FRED WTI crude was $91.48 on September 1, up from $83.46 on August 26 in the latest available run-date window. Bank of Canada commentary continued to flag energy prices as an inflation risk.',
      'Global context: OECD reported headline inflation broadly stable at 4.1% in July, with energy inflation at 11.6% and core inflation at 3.6%. OECD also reported G20 headline inflation falling to 3.9% in July from 4.1% in June.',
      'Global trade: OECD reported G20 merchandise import growth rising to 6.7% in Q2 from 5.2% in Q1, with export growth broadly flat at 5.9%. It also reported Canada exports up 13.5% in Q2 before the July pullback in domestic trade data.',
    ],
    interpretation:
      'The global backdrop is still split between resilient activity and sticky inflation pressure. U.S. employment was firmer in August, but Treasury yields rose and the next FOMC meeting is close enough to keep rate expectations central. OECD data show energy inflation is still a global risk, while trade flows remain strong but uneven. Canada is benefiting from non-U.S. export strength and earlier Q2 momentum, but the country is also exposed to U.S. demand, tariff costs, energy-price volatility, and imported financial conditions.',
  },
  dataRows: [
    {
      indicator: 'Canada employment',
      latest: '21.173M, August 2026; -42,000 m/m',
      previous: 'Employment rose cumulatively by 181,000 from April to July',
      direction: 'Down',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'Labour-market momentum weakened after several months of gains.',
    },
    {
      indicator: 'Canada unemployment rate',
      latest: '6.4%, August 2026',
      previous: '6.4%, July 2026',
      direction: 'Unchanged',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'The jobless rate stopped falling, but did not rise despite lower employment.',
    },
    {
      indicator: 'Canada average hourly wages',
      latest: '+2.0% y/y to $37.02, August 2026',
      previous: '+2.8% y/y, July 2026',
      direction: 'Down',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'Wage pressure eased, reducing one inflation channel but softening income growth.',
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
      interpretation: 'Policy stayed on hold while inflation and tariff risks constrained confidence.',
    },
    {
      indicator: 'Bank of Canada current MPR output gap',
      latest: '-1.3%, Q1 2026 estimate in September 3 dashboard',
      previous: '-1.3%, prior dashboard reading',
      direction: 'Unchanged',
      source: 'Bank of Canada capacity and inflation indicators',
      interpretation: 'The Bank still sees slack, which complicates above-target inflation readings.',
    },
    {
      indicator: 'Canada real GDP by expenditure',
      latest: '+0.8% q/q, Q2 2026',
      previous: '+0.1% q/q, Q1 2026 revised',
      direction: 'Up',
      source: 'Statistics Canada GDP income and expenditure',
      interpretation: 'Growth rebounded on exports, household spending, and business capital investment.',
    },
    {
      indicator: 'Canada merchandise exports',
      latest: '$76.1B, July 2026; -2.3% m/m',
      previous: '$78.0B, June 2026 revised',
      direction: 'Down',
      source: 'Statistics Canada international merchandise trade',
      interpretation: 'Exports pulled back after five consecutive monthly increases.',
    },
    {
      indicator: 'Canada merchandise imports',
      latest: '$75.4B, July 2026; +2.2% m/m',
      previous: '$73.8B, June 2026 revised',
      direction: 'Up',
      source: 'Statistics Canada international merchandise trade',
      interpretation: 'Imports rose for a sixth consecutive month, helped by motor vehicles and parts.',
    },
    {
      indicator: 'Canada merchandise trade balance',
      latest: '+$769M, July 2026',
      previous: '+$4.2B, June 2026',
      direction: 'Down',
      source: 'Statistics Canada international merchandise trade',
      interpretation: 'The surplus narrowed sharply as exports fell and imports rose.',
    },
    {
      indicator: 'Canada new motor vehicle registrations',
      latest: '547,673, Q2 2026',
      previous: '+37.7% from Q1; +1.1% from Q2 2025',
      direction: 'Up',
      source: 'Statistics Canada new motor vehicle registrations',
      interpretation: 'Vehicle registrations support a still-resilient goods-consumption signal.',
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
      indicator: 'Bank of Canada commodity price index',
      latest: '+17.9% y/y, August 2026',
      previous: '+23.3% y/y, Q2 2026 dashboard reading',
      direction: 'Down',
      source: 'Bank of Canada capacity and inflation indicators',
      interpretation: 'Commodity inflation eased from Q2 but remained elevated, especially in energy.',
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
      latest: '159.075M, August 2026',
      previous: '158.913M, July 2026',
      direction: 'Up',
      source: 'FRED PAYEMS',
      interpretation: 'Payroll employment increased in the latest verified monthly reading.',
    },
    {
      indicator: 'Federal funds target upper limit',
      latest: '3.75%, September 9, 2026',
      previous: '3.75%, July 29, 2026 decision',
      direction: 'Unchanged',
      source: 'FRED DFEDTARU / Federal Reserve',
      interpretation: 'The upper bound remained unchanged ahead of the September 15-16 FOMC meeting.',
    },
    {
      indicator: 'U.S. 10-year Treasury yield',
      latest: '4.78%, September 4, 2026',
      previous: '4.66%, August 26, 2026',
      direction: 'Up',
      source: 'FRED DGS10',
      interpretation: 'Long yields rose into the run date, tightening rate-sensitive financial conditions.',
    },
    {
      indicator: 'Nominal broad U.S. dollar index',
      latest: '118.0732, September 4, 2026',
      previous: '118.4461, August 26, 2026',
      direction: 'Down',
      source: 'FRED DTWEXBGS',
      interpretation: 'The broad dollar softened over the latest available run-date window.',
    },
    {
      indicator: 'USD/CAD exchange rate',
      latest: '1.3784, September 8, 2026',
      previous: '1.3863, September 2, 2026',
      direction: 'Down',
      source: 'Bank of Canada daily exchange rates',
      interpretation: 'USD/CAD moved lower, implying Canadian dollar strengthening over the week.',
    },
    {
      indicator: 'S&P 500',
      latest: '7,673.52, September 8, 2026',
      previous: '7,675.70, August 26, 2026',
      direction: 'Down',
      source: 'FRED SP500',
      interpretation: 'Equities were nearly unchanged after interim volatility, suggesting no clear risk-sentiment break.',
    },
    {
      indicator: 'G20 headline inflation',
      latest: '3.9% y/y, July 2026',
      previous: '4.1% y/y, June 2026',
      direction: 'Down',
      source: 'OECD Consumer Prices',
      interpretation: 'Global headline inflation eased for the G20, even as OECD energy inflation stayed elevated.',
    },
  ] satisfies DataRow[],
  chartSuggestions: [
    {
      title: 'Canada Labour Market Cooling by Segment',
      source: 'Statistics Canada Labour Force Survey, Table 14-10-0287-01',
      series: 'Employment; employment rate; unemployment rate; average hourly wages; industry employment changes',
      why: 'Shows whether August weakness is broad enough to alter the labour-slack narrative.',
    },
    {
      title: 'Canada Trade Rotation: U.S. vs Non-U.S. Exports',
      source: 'Statistics Canada Table 12-10-0011-01',
      series: 'Total exports; imports; trade balance; exports to the United States; exports to countries other than the United States',
      why: 'Separates the July export decline from the simultaneous record level of non-U.S. exports.',
    },
    {
      title: 'Canada Inflation, Slack, and Commodity Pressure',
      source: 'Statistics Canada CPI; Bank of Canada capacity indicators; FRED WTI crude',
      series: 'All-items CPI; CPI excluding gasoline; CPI-trim; CPI-median; current MPR output gap; BoC commodity price index; WTI crude',
      why: 'Connects above-target inflation with slack and energy-sensitive cost pressure.',
    },
    {
      title: 'Canada Housing Activity Pulse',
      source: 'Statistics Canada GDP income and expenditure; building permits; Bank of Canada capacity indicators',
      series: 'Residential investment; building permits; real estate output; new housing price index; housing affordability index',
      why: 'Tracks whether housing is supporting growth through real activity, prices, or permit timing.',
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
      'Canada employment fell in August, the July goods trade surplus narrowed sharply, and global inflation indicators stayed energy-sensitive.',
    matters:
      'The week makes the Canadian recovery look less clean: Q2 growth was strong, but Q3 labour and trade signals are softer.',
    watching:
      'I am watching August CPI on September 14, July manufacturing on September 14, Q2 job vacancies on September 15, July building permits on September 16, and the September 15-16 FOMC meeting.',
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
      name: 'Statistics Canada Labour Force Survey, August 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260904/dq260904a-eng.htm',
    },
    {
      name: 'Statistics Canada Canadian international merchandise trade, July 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260903/dq260903a-eng.htm',
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
      name: 'Statistics Canada new motor vehicle registrations, Q2 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260908/dq260908b-eng.htm',
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
      name: 'OECD Consumer Prices, updated September 8, 2026',
      url: 'https://www.oecd.org/en/data/insights/statistical-releases/2026/09/consumer-prices-oecd-updated-8-september-2026.html',
    },
    {
      name: 'OECD international trade statistics, Q2 2026',
      url: 'https://www.oecd.org/en/data/insights/statistical-releases/2026/08/international-trade-statistics-trends-in-second-quarter-2026.html',
    },
  ] satisfies ReportSource[],
}
