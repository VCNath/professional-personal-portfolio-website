import { NextRequest, NextResponse } from 'next/server'
import { marketInstruments, yahooChartUrl } from '@/lib/marketInstruments'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type SupabasePayload = Record<string, unknown>

function isAuthorized(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
    return true
  }

  const manualSecret = process.env.MARKET_REFRESH_SECRET
  if (!manualSecret) {
    return false
  }

  const querySecret = request.nextUrl.searchParams.get('secret')
  return authHeader === `Bearer ${manualSecret}` || querySecret === manualSecret
}

function supabaseConfig() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required')
  }
  return { url: url.replace(/\/$/, ''), key }
}

function hasSupabaseConfig() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)
}

async function supabaseRequest(
  method: string,
  path: string,
  payload?: SupabasePayload | SupabasePayload[],
  prefer?: string,
) {
  const { url, key } = supabaseConfig()
  const response = await fetch(`${url}${path}`, {
    method,
    headers: {
      apikey: key,
      authorization: `Bearer ${key}`,
      'content-type': 'application/json',
      ...(prefer ? { prefer } : {}),
    },
    body: payload ? JSON.stringify(payload) : undefined,
    cache: 'no-store',
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Supabase ${method} ${path} failed: ${response.status} ${body}`)
  }

  const text = await response.text()
  return text ? JSON.parse(text) : null
}

async function supabaseUpsert(table: string, rows: SupabasePayload[], conflict: string) {
  if (!rows.length) return
  await supabaseRequest(
    'POST',
    `/rest/v1/${table}?on_conflict=${encodeURIComponent(conflict).replaceAll('%2C', ',')}`,
    rows,
    'resolution=merge-duplicates,return=minimal',
  )
}

async function createRefreshRun() {
  const rows = await supabaseRequest(
    'POST',
    '/rest/v1/refresh_runs',
    [
      {
        refresh_type: 'poll',
        status: 'running',
        instruments_requested: marketInstruments.length,
      },
    ],
    'return=representation',
  )
  return rows?.[0]?.id as string | undefined
}

async function finishRefreshRun(
  runId: string | undefined,
  status: string,
  updated: number,
  errors: SupabasePayload[],
) {
  if (!runId) return
  await supabaseRequest(
    'PATCH',
    `/rest/v1/refresh_runs?id=eq.${runId}`,
    {
      status,
      finished_at: new Date().toISOString(),
      instruments_updated: updated,
      errors,
    },
    'return=minimal',
  )
}

function valueAt(values: unknown[] | undefined, index: number) {
  return Array.isArray(values) && index < values.length ? values[index] : null
}

async function fetchQuote(symbol: string, daily = false): Promise<SupabasePayload> {
  const sourceUrl = yahooChartUrl(symbol, daily)
  const response = await fetch(sourceUrl, {
    headers: {
      accept: 'application/json',
      'user-agent': 'Mozilla/5.0',
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Yahoo chart fetch failed for ${symbol}: ${response.status}`)
  }

  const payload = await response.json()
  const result = payload?.chart?.result?.[0]
  const timestamps = result?.timestamp ?? []
  const quote = result?.indicators?.quote?.[0] ?? {}
  const closes = quote.close ?? []
  let latestIndex = -1

  for (let index = closes.length - 1; index >= 0; index -= 1) {
    if (closes[index] !== null && closes[index] !== undefined) {
      latestIndex = index
      break
    }
  }

  if (latestIndex < 0) {
    throw new Error(`No parseable close for ${symbol}`)
  }

  const price = closes[latestIndex]
  const previousClose = result?.meta?.chartPreviousClose ?? result?.meta?.previousClose ?? null
  const change = previousClose ? price - previousClose : null
  const changePercent = change !== null && previousClose ? (change / previousClose) * 100 : null

  return {
    quote_time: new Date(timestamps[latestIndex] * 1000).toISOString(),
    price,
    change,
    change_percent: changePercent,
    open: valueAt(quote.open, latestIndex),
    high: valueAt(quote.high, latestIndex),
    low: valueAt(quote.low, latestIndex),
    previous_close: previousClose,
    volume: valueAt(quote.volume, latestIndex),
    source: 'yahoo_chart',
    source_url: sourceUrl,
    source_status: daily ? 'daily_fallback' : 'best_effort_intraday',
  }
}

async function fetchBestEffortQuote(symbol: string) {
  try {
    return await fetchQuote(symbol, false)
  } catch {
    return fetchQuote(symbol, true)
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ status: 'unauthorized' }, { status: 401 })
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json({
      status: 'skipped',
      reason: 'Supabase environment variables are not configured.',
      requested: marketInstruments.length,
      updated: 0,
      errors: [],
    })
  }

  let runId: string | undefined
  const errors: SupabasePayload[] = []
  const latestRows: SupabasePayload[] = []
  const snapshotRows: SupabasePayload[] = []

  try {
    runId = await createRefreshRun()
    const instrumentRows = marketInstruments.map((instrument) => ({
      dataset_slug: instrument.datasetSlug,
      dataset: instrument.dataset,
      symbol: instrument.symbol,
      display_symbol: instrument.displaySymbol,
      name: instrument.name,
      asset_class: instrument.assetClass,
      source: 'yahoo_chart',
      source_symbol: instrument.symbol,
      source_url: yahooChartUrl(instrument.symbol),
      active: true,
      updated_at: new Date().toISOString(),
    }))

    for (const instrument of marketInstruments) {
      try {
        const quote = await fetchBestEffortQuote(instrument.symbol)
        const latestRow = {
          dataset_slug: instrument.datasetSlug,
          dataset: instrument.dataset,
          symbol: instrument.symbol,
          ...quote,
          updated_at: new Date().toISOString(),
        }
        latestRows.push(latestRow)
        snapshotRows.push(
          Object.fromEntries(Object.entries(latestRow).filter(([key]) => key !== 'updated_at')),
        )
      } catch (error) {
        errors.push({
          symbol: instrument.symbol,
          dataset: instrument.dataset,
          error: error instanceof Error ? error.message : 'Unknown quote error',
        })
      }
    }

    await supabaseUpsert('instruments', instrumentRows, 'dataset_slug,symbol')
    await supabaseUpsert('latest_quotes', latestRows, 'dataset_slug,symbol')
    if (snapshotRows.length) {
      await supabaseRequest('POST', '/rest/v1/quote_snapshots', snapshotRows, 'return=minimal')
    }

    const status = errors.length ? 'partial' : 'success'
    await finishRefreshRun(runId, status, latestRows.length, errors)

    return NextResponse.json({
      status,
      requested: marketInstruments.length,
      updated: latestRows.length,
      errors,
    })
  } catch (error) {
    errors.push({ scope: 'refresh', error: error instanceof Error ? error.message : 'Unknown refresh error' })
    await finishRefreshRun(runId, 'failed', latestRows.length, errors).catch(() => undefined)
    return NextResponse.json(
      {
        status: 'failed',
        requested: marketInstruments.length,
        updated: latestRows.length,
        errors,
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  return GET(request)
}
