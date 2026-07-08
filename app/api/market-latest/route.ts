import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

type RefreshRun = {
  id: string
  status: string
  refresh_type: string
  started_at: string
  finished_at: string | null
  instruments_requested: number
  instruments_updated: number
  errors: unknown[]
}

async function supabaseGet(path: string) {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    return { configured: false, data: null }
  }

  const response = await fetch(`${url.replace(/\/$/, '')}${path}`, {
    headers: {
      apikey: key,
      authorization: `Bearer ${key}`,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Supabase read failed: ${response.status}`)
  }

  return { configured: true, data: await response.json() }
}

export async function GET() {
  try {
    const latest = await supabaseGet(
      '/rest/v1/latest_quotes?select=dataset_slug,dataset,symbol,quote_time,price,change,change_percent,source_status,updated_at&order=updated_at.desc',
    )
    if (!latest.configured) {
      return NextResponse.json({
        status: 'unconfigured',
        quotes: [],
        latestRun: null,
        message: 'Supabase environment variables are not configured.',
      })
    }

    const runs = await supabaseGet(
      '/rest/v1/refresh_runs?select=id,status,refresh_type,started_at,finished_at,instruments_requested,instruments_updated,errors&order=started_at.desc&limit=1',
    )

    return NextResponse.json({
      status: 'ok',
      quotes: latest.data,
      latestRun: (runs.data as RefreshRun[] | null)?.[0] ?? null,
      message: 'Best-effort intraday quote data. Free source delays may apply.',
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        quotes: [],
        latestRun: null,
        message: error instanceof Error ? error.message : 'Unknown latest quote read error',
      },
      { status: 500 },
    )
  }
}
