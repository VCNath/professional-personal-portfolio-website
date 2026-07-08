import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'NVC Capital Lab | Nathaniel Varga-Chauvin',
  description:
    'A paper-trading SaaS case study covering portfolio analytics, Docker-backed market data, Supabase persistence, and simulated order execution.',
}

const metrics = [
  ['9', 'Seeded assets'],
  ['32k+', 'NVC history rows'],
  ['7', 'Timeline ranges'],
  ['18', 'Unit tests'],
]

const capabilities = [
  'Portfolio overview with value, return, buying power, allocation, holdings, and watchlist views.',
  'Paper order ticket with buy/sell support, order validation, investment thesis capture, and trade-impact preview.',
  'Analytics surface for return, risk, allocation, drawdown, portfolio score, coach notes, and benchmark comparison.',
  'Learning and challenge views that make the product feel like a practice environment, not just a trading screen.',
]

const architecture = [
  {
    title: 'Application',
    body: 'Next.js App Router, TypeScript, accessible routes, responsive dashboard layout, and reusable finance UI components.',
  },
  {
    title: 'Persistence',
    body: 'Supabase migrations define profiles, portfolios, holdings, orders, transactions, theses, watchlists, snapshots, lessons, challenges, settings, and row-level security policies.',
  },
  {
    title: 'Market Data',
    body: 'Docker builds a local SQLite database and export files from reputable delayed or best-effort data sources. The app reads the NVC dataset through an API route and falls back to seeded snapshots if the database is unavailable.',
  },
  {
    title: 'Quality',
    body: 'The build includes linting, TypeScript checks, unit tests for portfolio and trade calculations, and an end-to-end paper buy-order flow.',
  },
]

const validation = [
  'Blocks zero or negative share orders.',
  'Blocks paper buys beyond available buying power.',
  'Blocks paper sells above owned quantity.',
  'Protects against accidental duplicate order submission with client request IDs in the database design.',
  'Labels the product as paper trading only: no brokerage connection, no real securities, and no movement of funds.',
]

export default function NVCCapitalLabPage() {
  return (
    <>
      <section className="border-b border-white/40 bg-[#F7F5F0]/58 backdrop-blur-[14px]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase text-[#8C7657]">
              Paper-trading SaaS case study
            </p>
            <h1 className="text-4xl font-semibold text-[#232323] sm:text-5xl">
              NVC Capital Lab
            </h1>
            <p className="mt-4 text-xl font-medium text-slate-700">
              Invest without the scars.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              A portfolio-grade practice investing application for paper orders,
              portfolio analytics, risk review, watchlists, lessons, and challenge-based
              learning. It is intentionally scoped as paper trading only, with no
              brokerage routing or real-money movement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="https://nvc-capital-lab-live.vercel.app">
                Open Live App
              </Button>
              <Button
                href="https://github.com/VCNath/Finance-Data/tree/codex/nvc-capital-lab-paper-trading"
                variant="secondary"
              >
                View Source
              </Button>
            </div>
          </div>

          <div className="rounded-[26px] border border-white/50 bg-white/72 p-5 shadow-sm backdrop-blur-[14px]">
            <div className="rounded-[20px] border border-slate-200 bg-[#F4F1E9] p-5">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#8C7657]">
                    Practice portfolio
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#232323]">
                    Portfolio overview
                  </h2>
                </div>
                <span className="rounded-full bg-[#E8EDFF] px-3 py-1 text-xs font-semibold text-[#3158E8]">
                  Paper trading only
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-white bg-white p-4 shadow-sm">
                    <strong className="block text-2xl font-semibold text-[#232323]">{value}</strong>
                    <span className="mt-1 block text-sm font-medium text-slate-600">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800">Timeline data</span>
                  <span className="text-xs font-semibold text-emerald-700">Market history linked</span>
                </div>
                <div className="flex h-28 items-end gap-2">
                  {[42, 48, 45, 56, 62, 58, 70, 74, 68, 81, 88, 84].map((height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t bg-[#3158E8]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product"
          title="A working practice environment, not a static dashboard mockup."
          description="The app turns the original concept into a usable paper-trading product with real state transitions, database design, and a market-history timeline."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="leading-7 text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architecture"
            title="Built around paper orders, delayed data, and explicit compliance boundaries."
            description="The implementation separates demonstration data from authenticated state and treats order execution as a controlled paper-trading workflow."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {architecture.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Risk controls"
              title="Designed to prevent confusing paper trading with real trading."
              description="The product language and execution model stay inside a paper-trading boundary while still giving users realistic practice."
            />
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <h2 className="text-xl font-semibold">Validation and guardrails</h2>
            <div className="mt-5 grid gap-3">
              {validation.map((item) => (
                <p key={item} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
