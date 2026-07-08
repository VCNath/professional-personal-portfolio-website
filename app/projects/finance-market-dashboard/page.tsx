import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Finance Market Intelligence Dashboard | Nathaniel Varga-Chauvin',
  description:
    'A finance dashboard case study covering market data automation, SQLite datasets, interactive comparison views, and a future mock trading strategy sandbox concept.',
}

const metrics = [
  ['17', 'Market groups'],
  ['36', 'Tracked instruments'],
  ['114k+', 'Price rows'],
  ['SQLite', 'Primary database'],
]

const buildNotes = [
  'Dockerized Python pipeline that refreshes market datasets into SQLite, CSV, and Excel workbooks.',
  'Interactive static dashboard with indexed performance, return versus risk, correlations, and two-symbol comparison.',
  'Power Automate-ready refresh scripts for weekday updates.',
  'Proxy treatment for private companies and hard-to-source instruments, documented directly in the dataset.',
]

const strategyInputs = [
  'Symbols and watchlist',
  'Allocation weights',
  'Entry and exit rules',
  'Rebalance frequency',
  'Drawdown and risk limits',
  'Benchmark selection',
]

const strategyOutputs = [
  'Mock performance curve',
  'Return and volatility summary',
  'Drawdown timeline',
  'Benchmark comparison',
  'Assumptions log',
  'Saved draft strategies',
]

export default function FinanceMarketDashboardPage() {
  return (
    <>
      <section className="border-b border-white/40 bg-[#F7F5F0]/58 backdrop-blur-[14px]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase text-[#8C7657]">
              Finance dashboard case study
            </p>
            <h1 className="text-4xl font-semibold text-[#232323] sm:text-5xl">
              Market intelligence dashboard for comparing sectors, companies, and futures.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              A practical data product that turns automated market pulls into a clean,
              browser-based comparison dashboard. It is designed for quick understanding:
              performance, risk, drawdown, correlation, and side-by-side symbol comparison.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/demos/finance-dashboard/index.html">Open Live Dashboard</Button>
              <Button href="/projects" variant="secondary">
                Back to Projects
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-950 p-3 shadow-sm">
            <div className="relative mb-3 min-h-[180px] overflow-hidden rounded-md border border-slate-800">
              <Image
                src="/images/smoked-glass-dashboard.png"
                alt="Premium smoked glass finance dashboard visual"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
            <div className="mb-3 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <iframe
              src="/demos/finance-dashboard/index.html"
              title="Finance market intelligence dashboard live demo"
              className="h-[520px] w-full rounded-md border border-slate-800 bg-white"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label]) => (
            <article key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <strong className="block text-3xl font-semibold text-slate-950">{value}</strong>
              <span className="mt-2 block text-sm font-medium text-slate-600">{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Build"
            title="A repeatable data workflow, not a one-off chart."
            description="The dashboard is backed by generated datasets and a refresh path built for repeatable updates."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {buildNotes.map((note) => (
              <article key={note} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="leading-7 text-slate-700">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Future tool concept"
          title="Mock trading strategy drafting sandbox."
          description="The next step is a simulated planning tool that lets users draft strategy ideas before anything touches real money. It would be educational, assumption-driven, and explicitly non-advisory."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Draft Inputs</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {strategyInputs.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Simulated Outputs</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {strategyOutputs.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white">
          <p className="text-sm font-semibold uppercase text-[#D9D2C7]">
            Future architecture
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold">Frontend</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Strategy drafting form, allocation controls, mock results, and saved drafts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Supabase</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Store draft strategies, assumptions, watchlists, and simulated run history.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Data Engine</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Reuse the market dataset pipeline for mock backtests and benchmark comparisons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
