export type MarketInstrument = {
  datasetSlug: string
  dataset: string
  symbol: string
  displaySymbol: string
  name: string
  assetClass: string
}

export const marketInstruments: MarketInstrument[] = [
  { datasetSlug: 'faang', dataset: 'FAANG', symbol: 'META', displaySymbol: 'META', name: 'Meta Platforms', assetClass: 'stocks' },
  { datasetSlug: 'faang', dataset: 'FAANG', symbol: 'AAPL', displaySymbol: 'AAPL', name: 'Apple', assetClass: 'stocks' },
  { datasetSlug: 'faang', dataset: 'FAANG', symbol: 'AMZN', displaySymbol: 'AMZN', name: 'Amazon', assetClass: 'stocks' },
  { datasetSlug: 'faang', dataset: 'FAANG', symbol: 'NFLX', displaySymbol: 'NFLX', name: 'Netflix', assetClass: 'stocks' },
  { datasetSlug: 'faang', dataset: 'FAANG', symbol: 'GOOGL', displaySymbol: 'GOOGL · FAANG', name: 'Alphabet Class A', assetClass: 'stocks' },
  { datasetSlug: 'dow', dataset: 'Dow', symbol: 'DIA', displaySymbol: 'DIA', name: 'SPDR Dow Jones Industrial Average ETF Trust', assetClass: 'etf' },
  { datasetSlug: 'tsx_proxy', dataset: 'TSX Proxy', symbol: 'EWC', displaySymbol: 'EWC', name: 'iShares MSCI Canada ETF', assetClass: 'etf' },
  { datasetSlug: 'euro_equivalent', dataset: 'Euro Equivalent', symbol: 'FEZ', displaySymbol: 'FEZ', name: 'SPDR EURO STOXX 50 ETF', assetClass: 'etf' },
  { datasetSlug: 'china', dataset: 'China', symbol: 'MCHI', displaySymbol: 'MCHI', name: 'iShares MSCI China ETF', assetClass: 'etf' },
  { datasetSlug: 'japan', dataset: 'Japan', symbol: 'EWJ', displaySymbol: 'EWJ', name: 'iShares MSCI Japan ETF', assetClass: 'etf' },
  { datasetSlug: 'south_korea', dataset: 'South Korea', symbol: 'EWY', displaySymbol: 'EWY', name: 'iShares MSCI South Korea ETF', assetClass: 'etf' },
  { datasetSlug: 'berkshire_hathaway', dataset: 'Berkshire Hathaway', symbol: 'BRK.B', displaySymbol: 'BRK.B', name: 'Berkshire Hathaway Class B', assetClass: 'stocks' },
  { datasetSlug: 'spacex_proxy', dataset: 'SpaceX Proxy', symbol: 'UFO', displaySymbol: 'UFO', name: 'Procure Space ETF', assetClass: 'etf' },
  { datasetSlug: 'spacex_proxy', dataset: 'SpaceX Proxy', symbol: 'ARKX', displaySymbol: 'ARKX', name: 'ARK Space Exploration & Innovation ETF', assetClass: 'etf' },
  { datasetSlug: 'tesla', dataset: 'Tesla', symbol: 'TSLA', displaySymbol: 'TSLA', name: 'Tesla', assetClass: 'stocks' },
  { datasetSlug: 'openai_ai_industry', dataset: 'OpenAI / AI Industry Proxies', symbol: 'MSFT', displaySymbol: 'MSFT', name: 'Microsoft', assetClass: 'stocks' },
  { datasetSlug: 'openai_ai_industry', dataset: 'OpenAI / AI Industry Proxies', symbol: 'NVDA', displaySymbol: 'NVDA', name: 'NVIDIA', assetClass: 'stocks' },
  { datasetSlug: 'openai_ai_industry', dataset: 'OpenAI / AI Industry Proxies', symbol: 'GOOGL', displaySymbol: 'GOOGL · AI', name: 'Alphabet Class A', assetClass: 'stocks' },
  { datasetSlug: 'openai_ai_industry', dataset: 'OpenAI / AI Industry Proxies', symbol: 'AIQ', displaySymbol: 'AIQ', name: 'Global X Artificial Intelligence & Technology ETF', assetClass: 'etf' },
  { datasetSlug: 'openai_ai_industry', dataset: 'OpenAI / AI Industry Proxies', symbol: 'BOTZ', displaySymbol: 'BOTZ', name: 'Global X Robotics & Artificial Intelligence ETF', assetClass: 'etf' },
  { datasetSlug: 'us_defense_industrial', dataset: 'US Defense Industrial Base', symbol: 'ITA', displaySymbol: 'ITA', name: 'iShares U.S. Aerospace & Defense ETF', assetClass: 'etf' },
  { datasetSlug: 'us_defense_industrial', dataset: 'US Defense Industrial Base', symbol: 'XAR', displaySymbol: 'XAR', name: 'SPDR S&P Aerospace & Defense ETF', assetClass: 'etf' },
  { datasetSlug: 'us_defense_industrial', dataset: 'US Defense Industrial Base', symbol: 'LMT', displaySymbol: 'LMT', name: 'Lockheed Martin', assetClass: 'stocks' },
  { datasetSlug: 'us_defense_industrial', dataset: 'US Defense Industrial Base', symbol: 'RTX', displaySymbol: 'RTX', name: 'RTX', assetClass: 'stocks' },
  { datasetSlug: 'us_defense_industrial', dataset: 'US Defense Industrial Base', symbol: 'NOC', displaySymbol: 'NOC', name: 'Northrop Grumman', assetClass: 'stocks' },
  { datasetSlug: 'us_defense_industrial', dataset: 'US Defense Industrial Base', symbol: 'GD', displaySymbol: 'GD', name: 'General Dynamics', assetClass: 'stocks' },
  { datasetSlug: 'us_defense_industrial', dataset: 'US Defense Industrial Base', symbol: 'BA', displaySymbol: 'BA', name: 'Boeing', assetClass: 'stocks' },
  { datasetSlug: 'byd', dataset: 'BYD', symbol: '1211.HK', displaySymbol: '1211.HK', name: 'BYD Hong Kong Ordinary Shares', assetClass: 'stocks' },
  { datasetSlug: 'byd', dataset: 'BYD', symbol: 'BYDDY', displaySymbol: 'BYDDY', name: 'BYD US ADR', assetClass: 'stocks' },
  { datasetSlug: 'samsung', dataset: 'Samsung', symbol: '005930.KS', displaySymbol: '005930.KS', name: 'Samsung Electronics', assetClass: 'stocks' },
  { datasetSlug: 'tsmc', dataset: 'TSMC', symbol: 'TSM', displaySymbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Company ADR', assetClass: 'stocks' },
  { datasetSlug: 'international_oil_futures', dataset: 'International Oil Futures', symbol: 'CL=F', displaySymbol: 'CL=F', name: 'WTI Crude Oil Futures', assetClass: 'futures' },
  { datasetSlug: 'international_oil_futures', dataset: 'International Oil Futures', symbol: 'BZ=F', displaySymbol: 'BZ=F', name: 'Brent Crude Oil Futures', assetClass: 'futures' },
  { datasetSlug: 'canola_cost_proxy', dataset: 'Canola Cost Proxy', symbol: 'ZL=F', displaySymbol: 'ZL=F', name: 'Soybean Oil Futures', assetClass: 'futures' },
  { datasetSlug: 'canola_cost_proxy', dataset: 'Canola Cost Proxy', symbol: 'ZS=F', displaySymbol: 'ZS=F', name: 'Soybean Futures', assetClass: 'futures' },
  { datasetSlug: 'canola_cost_proxy', dataset: 'Canola Cost Proxy', symbol: 'ZO=F', displaySymbol: 'ZO=F', name: 'Oat Futures', assetClass: 'futures' },
]

export function yahooSymbol(symbol: string) {
  return symbol === 'BRK.B' ? 'BRK-B' : symbol
}

export function yahooChartUrl(symbol: string, daily = false) {
  const range = daily ? '5d' : '1d'
  const interval = daily ? '1d' : '1m'
  return `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
    yahooSymbol(symbol),
  )}?range=${range}&interval=${interval}`
}
