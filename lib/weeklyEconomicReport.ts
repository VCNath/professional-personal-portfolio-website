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
  weekEnding: 'October 7, 2026',
  title: 'Weekly Economic Research Note: Canada Trade Rebounds While Global Inflation and Rates Stay Firm',
  deck:
    'A concise macro update for Canada, the United States, and global spillovers, prepared as my current weekly research note.',
  executiveSummary:
    'This week added a firmer trade signal to a still cautious Canadian macro picture. Statistics Canada reported that August merchandise exports rose 2.5%, imports fell 2.0%, and the goods trade surplus widened to $4.2 billion from $787 million in July. The improvement was helped by energy, consumer goods, machinery, and a rebound in exports to the United States, but it also followed a weak July and came before September labour data, which Statistics Canada will release on October 9. Inflation remains the main constraint. Canada CPI held at 3.0% year over year in August, while CPI excluding gasoline rose to 2.4% from 2.2%. The Bank of Canada kept the overnight target at 2.25% on September 2 and will update policy and the Monetary Policy Report on October 28. In the United States, the Federal Reserve raised the funds target range to 3.75% to 4.00% on September 16, and FRED data show higher Treasury yields, a stronger broad U.S. dollar, and September unemployment up to 4.2%. My read is that Canada is getting trade support, but rate-sensitive housing, consumer spending, producer costs, and global energy inflation keep the expansion exposed.',
  whatChanged: [
    'Canada merchandise exports rose 2.5% in August while imports fell 2.0%; this matters because the goods surplus widened to $4.2 billion after narrowing sharply in July.',
    'Exports to the United States rose 8.1% in August and the U.S. trade surplus widened to $11.2 billion; this matters because tariff timing and U.S. demand are moving Canadian trade patterns.',
    'Canada CPI held at 3.0% year over year in August, while CPI excluding gasoline rose to 2.4% from 2.2%; this matters because headline inflation stabilized but underlying breadth did not fully ease.',
    'July real GDP by industry was essentially unchanged, with construction and utilities offset by manufacturing, mining, retail, and wholesale declines; this matters because Q3 started with a flat output signal.',
    'Canada retail sales fell 0.7% in July and retail volumes fell 1.1%, while the advance estimate points to a 1.3% August rebound; this matters because household spending looks choppier than the Q2 growth story.',
    'The Federal Reserve raised the federal funds target range by 25 basis points to 3.75% to 4.00% on September 16; this matters because U.S. rates and the dollar are tightening spillover channels for Canada.',
    'OECD headline inflation rose to 4.3% in August from 4.1% in July as energy inflation jumped to 13.6%; this matters because global disinflation remains vulnerable to commodity and geopolitical shocks.',
  ],
  canadaFocus: {
    facts: [
      'Inflation: Statistics Canada reported that CPI rose 3.0% year over year in August, matching July. CPI excluding gasoline rose 2.4% after increasing 2.2% in July, and the CPI fell 0.1% month over month on a not seasonally adjusted basis.',
      'Bank of Canada: the Bank held the target for the overnight rate at 2.25% on September 2, with the Bank Rate at 2.50% and the deposit rate at 2.20%. The next rate decision and Monetary Policy Report are scheduled for October 28.',
      'Capacity and slack: the Bank of Canada capacity dashboard was last updated September 3. It showed the current MPR output-gap estimate at -1.3% for Q1, CPI-trim at 1.9%, CPI-median at 2.0%, and CPI-common at 2.7% in the latest July readings.',
      'Labour market: August remains the latest Labour Force Survey before this run date. Employment fell by 42,000, the employment rate declined to 60.8%, the unemployment rate was unchanged at 6.4%, and the September LFS is scheduled for October 9.',
      'Wages: average hourly wages among employees rose 2.0% year over year to $37.02 in August, slower than the 2.8% increase recorded in July.',
      'Growth: real GDP by industry was essentially unchanged in July. Construction rose 1.3% and utilities rose 1.7%, while manufacturing fell 0.9%, mining and oil and gas fell 0.5%, retail trade fell 1.0%, and wholesale trade fell 0.4%. Statistics Canada advance information points to a 0.2% August increase.',
      'Trade: August merchandise exports increased 2.5% to $77.9 billion, imports fell 2.0% to $73.7 billion, and the goods surplus widened to $4.2 billion from a revised $787 million in July.',
      'Trade composition: exports to the United States rose 8.1% in August, while imports from the United States fell 2.5%. Exports to countries other than the United States fell 8.5% after reaching a record high in July.',
      'Housing: July building permits declined 17.3% to $12.2 billion, led by a $1.9 billion drop in non-residential permits and a $701.2 million drop in residential permits. The Bank of Canada dashboard showed the new housing price index down 2.3% year over year in July and the housing affordability index at 0.413 in Q2.',
      'Consumer spending: July retail sales decreased 0.7% to $73.7 billion, core retail sales fell 0.7%, and retail volumes fell 1.1%. Statistics Canada advance information suggests retail sales increased 1.3% in August.',
      'Business investment and conditions: the Q3 Canadian Survey on Business Conditions reported that 59.8% of businesses expected cost-related obstacles over the next three months, down from 64.3% in Q2, while 41.6% expected inflation to be an obstacle.',
      'Commodities and producer prices: August IPPI rose 1.3% month over month and 13.5% year over year, while RMPI rose 3.1% month over month and 22.8% year over year. The Bank of Canada commodity price index was up 17.9% year over year in August, with energy up 24.9%.',
    ],
    interpretation:
      'My read is that Canada has a better external-demand signal than it had in the prior note, but not a clean acceleration story. August trade improved sharply and July GDP had pockets of strength in construction, utilities, and services. Still, the latest labour reading was soft, July retail spending pulled back, permits fell, and producer-price pressure rose again. For this portfolio, the key distinction is between trade support that can lift measured activity and domestic demand that remains sensitive to inflation, interest rates, and household cash-flow pressure.',
  },
  globalFocus: {
    facts: [
      'Federal Reserve: the FOMC raised the target range for the federal funds rate by 25 basis points to 3.75% to 4.00% on September 16. Minutes released October 7 said most participants assessed that another increase would likely be appropriate by year end, while keeping future decisions data dependent.',
      'U.S. inflation: FRED CPI data show August CPI at 334.131, up from 332.813 in July and 3.4% above August 2025 on a seasonally adjusted basis. Core CPI was 337.765 in August, up from 336.789 in July and 2.4% above August 2025.',
      'U.S. employment: FRED payroll data show nonfarm payroll employment at 159.044 million in September, up 29,000 from August. The unemployment rate rose to 4.2% from 4.1%.',
      'Treasury yields: FRED showed the 10-year Treasury yield at 5.31% on October 5, up from 4.83% on September 9. The 2-year yield was 4.84% on October 5, up from 4.43% on September 9.',
      'U.S. dollar and currencies: FRED showed the nominal broad U.S. dollar index at 121.3848 on October 2, up from 117.8834 on September 9. Bank of Canada daily exchange rates showed USD/CAD at 1.4226 on October 6, up from 1.3798 on September 9.',
      'Equity market and risk sentiment: FRED showed the S&P 500 at 7,818.93 on October 6, up from 7,636.36 on September 9, even as Fed minutes described higher Treasury yields and inflation risks.',
      'Commodities: FRED WTI crude was $96.24 on October 6, slightly below $97.26 on September 9 but volatile within the period, including a September 15 reading of $107.02.',
      'Global inflation: OECD reported headline inflation rising to 4.3% in August from 4.1% in July, with energy inflation up to 13.6% and core inflation stable at 3.6%. G20 headline inflation rose to 4.1% from 3.9%.',
      'Global trade: OECD reported that G20 merchandise import growth rose to 6.7% in Q2 from 5.2% in Q1, while export growth was broadly flat at 5.9%. It also reported Canada exports up 13.5% in Q2 before the August domestic trade rebound.',
    ],
    interpretation:
      'The global backdrop is supportive for nominal trade values but less friendly for rate-sensitive activity. Higher U.S. yields, a stronger broad dollar, and firmer Fed guidance can tighten financial conditions for Canada even when Canadian policy is on hold. At the same time, OECD inflation data show the energy shock still matters internationally, and U.S. equity strength suggests risk appetite has not broken. Canada is therefore exposed to two forces at once: stronger external demand and commodity-linked revenues on one side, and imported inflation, currency pressure, and higher global discount rates on the other.',
  },
  dataRows: [
    {
      indicator: 'Canada merchandise exports',
      latest: '$77.9B, August 2026; +2.5% m/m',
      previous: '$76.0B, July 2026 revised',
      direction: 'Up',
      source: 'Statistics Canada international merchandise trade',
      interpretation: 'Exports rebounded after July weakness, helped by energy and several goods categories.',
    },
    {
      indicator: 'Canada merchandise imports',
      latest: '$73.7B, August 2026; -2.0% m/m',
      previous: '$75.2B, July 2026 revised',
      direction: 'Down',
      source: 'Statistics Canada international merchandise trade',
      interpretation: 'Imports posted their first decline since January, led by motor vehicles and parts.',
    },
    {
      indicator: 'Canada merchandise trade balance',
      latest: '+$4.2B, August 2026',
      previous: '+$787M, July 2026 revised',
      direction: 'Up',
      source: 'Statistics Canada international merchandise trade',
      interpretation: 'The surplus widened sharply as exports rose and imports fell.',
    },
    {
      indicator: 'Canada CPI, all-items',
      latest: '3.0% y/y, August 2026',
      previous: '3.0% y/y, July 2026',
      direction: 'Unchanged',
      source: 'Statistics Canada CPI / Table 18-10-0004-01',
      interpretation: 'Headline inflation held steady, with gasoline deceleration offset by travel tours and rent.',
    },
    {
      indicator: 'Canada CPI excluding gasoline',
      latest: '2.4% y/y, August 2026',
      previous: '2.2% y/y, July 2026',
      direction: 'Up',
      source: 'Statistics Canada CPI / Table 18-10-0004-01',
      interpretation: 'The non-gasoline inflation signal firmed despite stable headline inflation.',
    },
    {
      indicator: 'Bank of Canada overnight target',
      latest: '2.25%, October 6, 2026 observed',
      previous: '2.25%, September 2, 2026 decision',
      direction: 'Unchanged',
      source: 'Bank of Canada policy interest rate / Valet V39079',
      interpretation: 'Canadian policy stayed on hold ahead of the October 28 decision and MPR.',
    },
    {
      indicator: 'Bank of Canada current MPR output gap',
      latest: '-1.3%, Q1 2026 estimate in September 3 dashboard',
      previous: '-1.3%, prior dashboard reading',
      direction: 'Unchanged',
      source: 'Bank of Canada capacity and inflation indicators',
      interpretation: 'The Bank still sees slack, even with inflation above the midpoint of the target range.',
    },
    {
      indicator: 'Canada employment',
      latest: '21.173M, August 2026; -42,000 m/m',
      previous: '21.215M, July 2026',
      direction: 'Down',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'The latest available labour report still points to softer employment momentum.',
    },
    {
      indicator: 'Canada unemployment rate',
      latest: '6.4%, August 2026',
      previous: '6.4%, July 2026',
      direction: 'Unchanged',
      source: 'Statistics Canada Labour Force Survey',
      interpretation: 'The jobless rate held steady before the September release scheduled for October 9.',
    },
    {
      indicator: 'Canada real GDP by industry',
      latest: '0.0% m/m, July 2026',
      previous: '+0.3% m/m, June 2026',
      direction: 'Down',
      source: 'Statistics Canada GDP by industry',
      interpretation: 'Output momentum flattened at the start of Q3 despite construction and utility gains.',
    },
    {
      indicator: 'Canada building permits',
      latest: '$12.2B, July 2026; -17.3% m/m',
      previous: '+$2.3B m/m gain in June 2026',
      direction: 'Down',
      source: 'Statistics Canada building permits',
      interpretation: 'Construction intentions pulled back after a strong June, especially non-residential permits.',
    },
    {
      indicator: 'Canada retail sales',
      latest: '$73.7B, July 2026; -0.7% m/m',
      previous: '$74.3B, June 2026; +0.6% m/m',
      direction: 'Down',
      source: 'Statistics Canada retail trade',
      interpretation: 'Household goods spending softened in July, with an advance August rebound still preliminary.',
    },
    {
      indicator: 'Canada business cost obstacles',
      latest: '59.8% of businesses, Q3 2026',
      previous: '64.3%, Q2 2026',
      direction: 'Down',
      source: 'Statistics Canada Canadian Survey on Business Conditions',
      interpretation: 'Cost pressures eased but remained the most common business obstacle category.',
    },
    {
      indicator: 'Canada IPPI',
      latest: '+1.3% m/m; +13.5% y/y, August 2026',
      previous: '+0.3% m/m, July 2026',
      direction: 'Up',
      source: 'Statistics Canada IPPI/RMPI',
      interpretation: 'Producer-price pressure increased, especially from energy and petroleum products.',
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
      latest: '334.131 index, August 2026; +3.4% y/y',
      previous: '332.813 index, July 2026',
      direction: 'Up',
      source: 'FRED CPIAUCSL',
      interpretation: 'U.S. consumer prices moved higher before the September Fed hike.',
    },
    {
      indicator: 'U.S. nonfarm payrolls',
      latest: '159.044M, September 2026; +29,000 m/m',
      previous: '159.015M, August 2026',
      direction: 'Up',
      source: 'FRED PAYEMS',
      interpretation: 'Payrolls increased, but the monthly gain slowed from August.',
    },
    {
      indicator: 'U.S. unemployment rate',
      latest: '4.2%, September 2026',
      previous: '4.1%, August 2026',
      direction: 'Up',
      source: 'FRED UNRATE',
      interpretation: 'The labour market softened modestly even as the Fed described activity as solid.',
    },
    {
      indicator: 'Federal funds target upper limit',
      latest: '4.00%, October 7, 2026',
      previous: '3.75%, September 16, 2026 before hike',
      direction: 'Up',
      source: 'Federal Reserve / FRED DFEDTARU',
      interpretation: 'The Fed delivered a 25 basis point hike and left another possible increase in play.',
    },
    {
      indicator: 'U.S. 10-year Treasury yield',
      latest: '5.31%, October 5, 2026',
      previous: '4.83%, September 9, 2026',
      direction: 'Up',
      source: 'FRED DGS10',
      interpretation: 'Long yields rose, increasing pressure on rate-sensitive valuations and borrowing costs.',
    },
    {
      indicator: 'Nominal broad U.S. dollar index',
      latest: '121.3848, October 2, 2026',
      previous: '117.8834, September 9, 2026',
      direction: 'Up',
      source: 'FRED DTWEXBGS',
      interpretation: 'The broad dollar strengthened materially over the run-date window.',
    },
    {
      indicator: 'USD/CAD exchange rate',
      latest: '1.4226, October 6, 2026',
      previous: '1.3798, September 9, 2026',
      direction: 'Up',
      source: 'Bank of Canada daily exchange rates',
      interpretation: 'USD/CAD moved higher, implying Canadian dollar depreciation versus the U.S. dollar.',
    },
    {
      indicator: 'S&P 500',
      latest: '7,818.93, October 6, 2026',
      previous: '7,636.36, September 9, 2026',
      direction: 'Up',
      source: 'FRED SP500',
      interpretation: 'Equities rose despite higher policy rates and Treasury yields.',
    },
    {
      indicator: 'OECD headline inflation',
      latest: '4.3% y/y, August 2026',
      previous: '4.1% y/y, July 2026',
      direction: 'Up',
      source: 'OECD Consumer Prices',
      interpretation: 'Global disinflation became more vulnerable as energy inflation surged.',
    },
  ] satisfies DataRow[],
  chartSuggestions: [
    {
      title: 'Canada Trade Rebound and Partner Rotation',
      source: 'Statistics Canada Table 12-10-0011-01',
      series: 'Total exports; imports; trade balance; exports to the United States; exports to countries other than the United States',
      why: 'Shows whether the August rebound is a broad external-demand improvement or a tariff-timing shift concentrated in U.S. trade.',
    },
    {
      title: 'Canada Inflation Breadth and Energy Pressure',
      source: 'Statistics Canada CPI; Bank of Canada capacity indicators; FRED WTI crude',
      series: 'All-items CPI; CPI excluding gasoline; CPI-trim; CPI-median; CPI-common; WTI crude; BoC commodity price index',
      why: 'Connects stable headline inflation with firmer non-gasoline inflation and commodity-linked cost pressure.',
    },
    {
      title: 'Canada Domestic Demand Pulse',
      source: 'Statistics Canada GDP by industry; retail trade; building permits',
      series: 'Monthly GDP; retail sales; retail volumes; building permits; residential and non-residential permit values',
      why: 'Tracks whether domestic spending and construction are confirming or offsetting the trade improvement.',
    },
    {
      title: 'U.S. Rates, Dollar, and Canadian Spillovers',
      source: 'FRED DGS2, DGS10, DTWEXBGS; Bank of Canada daily exchange rates',
      series: '2-year Treasury yield; 10-year Treasury yield; nominal broad U.S. dollar index; USD/CAD',
      why: 'Shows how tighter U.S. policy expectations transmit into Canadian financial conditions and the exchange rate.',
    },
    {
      title: 'Global Inflation Risk Monitor',
      source: 'OECD Consumer Prices; FRED WTI crude; Bank of Canada commodity price index',
      series: 'OECD headline inflation; OECD energy inflation; OECD core inflation; G20 headline inflation; WTI crude; BoC commodity price index',
      why: 'Highlights whether global inflation risk is concentrated in energy or broadening into core measures.',
    },
  ] satisfies ChartSuggestion[],
  bottomLine: {
    happened:
      'Canada trade rebounded in August, Canadian inflation held at 3.0%, and U.S. policy plus global inflation pressure moved firmer.',
    matters:
      'The week improves Canada external-demand evidence, but higher U.S. yields, a stronger dollar, weaker July domestic data, and energy-sensitive inflation keep the risk balance cautious.',
    watching:
      'I am watching Canada September labour data on October 9, August building permits on October 14, August manufacturing and new motor vehicle sales on October 15, September CPI on October 19, and the October 28 Bank of Canada and FOMC decisions.',
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
      name: 'Statistics Canada CPI, August 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260914/dq260914a-eng.htm',
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
      name: 'Statistics Canada Canadian international merchandise trade, August 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/261006/dq261006a-eng.htm',
    },
    {
      name: 'Statistics Canada GDP by industry, July 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260929/dq260929a-eng.htm',
    },
    {
      name: 'Statistics Canada building permits, July 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260916/dq260916a-eng.htm',
    },
    {
      name: 'Statistics Canada retail trade, July 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260924/dq260924a-eng.htm',
    },
    {
      name: 'Statistics Canada Canadian Survey on Business Conditions, Q3 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260831/dq260831a-eng.htm',
    },
    {
      name: 'Statistics Canada IPPI/RMPI, August 2026',
      url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/260917/dq260917b-eng.htm',
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
      name: 'Bank of Canada Monetary Policy Report',
      url: 'https://www.bankofcanada.ca/publications/mpr/',
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
      name: 'Federal Reserve FOMC statement, September 16, 2026',
      url: 'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm',
    },
    {
      name: 'Federal Reserve FOMC minutes, September 15-16, 2026',
      url: 'https://www.federalreserve.gov/monetarypolicy/fomcminutes20260916.htm',
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
      name: 'OECD Consumer Prices, updated October 6, 2026',
      url: 'https://www.oecd.org/en/data/insights/statistical-releases/2026/10/consumer-prices-oecd-updated-6-october-2026.html',
    },
    {
      name: 'OECD international trade statistics, Q2 2026',
      url: 'https://www.oecd.org/en/data/insights/statistical-releases/2026/08/international-trade-statistics-trends-in-second-quarter-2026.html',
    },
  ] satisfies ReportSource[],
}
