import type { Metadata } from 'next'
import Image from 'next/image'
import { weeklyEconomicReport } from '@/lib/weeklyEconomicReport'

export const metadata: Metadata = {
  title: 'Weekly Economic Research Note | Nathaniel Varga-Chauvin',
  description:
    'A weekly macroeconomic research note covering Canada, the United States, inflation, rates, housing, labour markets, currencies, commodities, and business conditions.',
  alternates: {
    canonical: '/weekly-brief',
  },
}

const directionStyles = {
  Up: 'border-amber-200 bg-amber-50 text-amber-800',
  Down: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  Unchanged: 'border-slate-200 bg-slate-50 text-slate-700',
  Mixed: 'border-blue-200 bg-blue-50 text-blue-800',
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-sm font-semibold uppercase text-[#8C7657]">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold text-[#232323] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-8 text-[#4F5966]">{description}</p>}
    </div>
  )
}

function FactPanel({
  title,
  facts,
  interpretation,
}: {
  title: string
  facts: string[]
  interpretation: string
}) {
  return (
    <article className="rounded-[26px] border border-white/45 bg-[#F7F5F0]/72 p-6 shadow-sm backdrop-blur-[14px]">
      <h3 className="text-xl font-semibold text-[#232323]">{title}</h3>
      <div className="mt-5 grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8C7657]">
            Facts
          </p>
          <ul className="mt-3 space-y-3 text-sm leading-7 text-[#4F5966]">
            {facts.map((fact) => (
              <li key={fact} className="border-l-2 border-[#D9D2C7] pl-4">
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[20px] border border-white/45 bg-white/35 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8C7657]">
            My Interpretation
          </p>
          <p className="mt-3 text-sm leading-7 text-[#4F5966]">{interpretation}</p>
        </div>
      </div>
    </article>
  )
}

export default function WeeklyBriefPage() {
  const report = weeklyEconomicReport

  return (
    <div className="px-3 py-4">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.64fr_0.36fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase text-[#8C7657]">
            Week ending {report.weekEnding}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#232323] sm:text-5xl">
            {report.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4F5966]">{report.deck}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[#4F5966]">
            <a className="rounded-[22px] border border-white/45 bg-[#F7F5F0]/72 px-4 py-2 shadow-sm" href="#summary">
              Executive Summary
            </a>
            <a className="rounded-[22px] border border-white/45 bg-[#F7F5F0]/72 px-4 py-2 shadow-sm" href="#global-dashboard">
              Data Table
            </a>
            <a className="rounded-[22px] border border-white/45 bg-[#F7F5F0]/72 px-4 py-2 shadow-sm" href="#sources">
              Sources
            </a>
          </div>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-[28px] border border-white/45 bg-[#F7F5F0]/30 shadow-sm backdrop-blur-[14px]">
          <Image
            src="/images/policy-research-desk.png"
            alt="Research desk with economic charts and policy notes"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 400px, 100vw"
          />
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 lg:px-8">
        <section id="summary" className="scroll-mt-28 rounded-[26px] border border-white/45 bg-[#F7F5F0]/72 p-6 shadow-sm backdrop-blur-[14px] sm:p-8">
          <SectionTitle eyebrow="Executive Summary" title="The week in one read." />
          <p className="mt-6 max-w-4xl text-base leading-8 text-[#4F5966]">
            {report.executiveSummary}
          </p>
        </section>

        <section className="mt-12 scroll-mt-28">
          <SectionTitle
            eyebrow="What Changed This Week"
            title="Concrete movements and why they matter."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {report.whatChanged.map((item) => (
              <article key={item} className="rounded-[22px] border border-white/45 bg-[#F7F5F0]/72 p-5 text-sm leading-7 text-[#4F5966] shadow-sm backdrop-blur-[14px]">
                {item}
              </article>
            ))}
          </div>
        </section>

        <section id="big-story" className="mt-12 scroll-mt-28 space-y-6">
          <SectionTitle
            eyebrow="Research"
            title="Canada, United States, and global context."
            description="I separate current facts from my interpretation so the evidence and judgement are easy to audit."
          />
          <FactPanel
            title="Canada Focus"
            facts={report.canadaFocus.facts}
            interpretation={report.canadaFocus.interpretation}
          />
          <FactPanel
            title="United States / Global Context"
            facts={report.globalFocus.facts}
            interpretation={report.globalFocus.interpretation}
          />
        </section>

        <section id="global-dashboard" className="mt-12 scroll-mt-28">
          <SectionTitle
            eyebrow="Data Table"
            title="Latest indicator snapshot."
            description="Values are the latest available readings I could verify for this Wednesday run date."
          />
          <div className="mt-6 overflow-hidden rounded-[26px] border border-white/45 bg-[#F7F5F0]/72 shadow-sm backdrop-blur-[14px]">
            <div className="overflow-x-auto">
              <table className="min-w-[980px] divide-y divide-white/60 text-left text-sm">
                <thead className="bg-[#232323]/90 text-[#F7F5F0]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Indicator</th>
                    <th className="px-4 py-3 font-semibold">Latest value</th>
                    <th className="px-4 py-3 font-semibold">Previous value</th>
                    <th className="px-4 py-3 font-semibold">Direction</th>
                    <th className="px-4 py-3 font-semibold">Source</th>
                    <th className="px-4 py-3 font-semibold">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/60">
                  {report.dataRows.map((row) => (
                    <tr key={row.indicator} className="align-top">
                      <td className="px-4 py-4 font-semibold text-[#232323]">{row.indicator}</td>
                      <td className="px-4 py-4 text-[#4F5966]">{row.latest}</td>
                      <td className="px-4 py-4 text-[#4F5966]">{row.previous}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${directionStyles[row.direction]}`}>
                          {row.direction}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[#4F5966]">{row.source}</td>
                      <td className="px-4 py-4 text-[#4F5966]">{row.interpretation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-12 scroll-mt-28">
          <SectionTitle
            eyebrow="Charts To Add"
            title="Suggested visuals for the next dashboard iteration."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {report.chartSuggestions.map((chart) => (
              <article key={chart.title} className="rounded-[22px] border border-white/45 bg-[#F7F5F0]/72 p-5 shadow-sm backdrop-blur-[14px]">
                <h3 className="text-lg font-semibold text-[#232323]">{chart.title}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-7 text-[#4F5966]">
                  <div>
                    <dt className="font-semibold text-[#232323]">Data source</dt>
                    <dd>{chart.source}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#232323]">Series needed</dt>
                    <dd>{chart.series}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#232323]">Why it matters</dt>
                    <dd>{chart.why}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 scroll-mt-28 rounded-[26px] border border-white/45 bg-[#232323]/90 p-6 text-[#F7F5F0] shadow-sm backdrop-blur-[14px] sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#D9D2C7]">Bottom Line</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">What happened</h3>
              <p className="mt-2 text-sm leading-7 text-[#D9D2C7]">{report.bottomLine.happened}</p>
            </div>
            <div>
              <h3 className="font-semibold">Why it matters</h3>
              <p className="mt-2 text-sm leading-7 text-[#D9D2C7]">{report.bottomLine.matters}</p>
            </div>
            <div>
              <h3 className="font-semibold">What I am watching next week</h3>
              <p className="mt-2 text-sm leading-7 text-[#D9D2C7]">{report.bottomLine.watching}</p>
            </div>
          </div>
        </section>

        <section id="sources" className="mt-12 scroll-mt-28">
          <SectionTitle eyebrow="Source List" title="Official sources used." description={report.sourceNotes} />
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {report.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[18px] border border-white/45 bg-[#F7F5F0]/72 p-4 text-sm font-medium text-[#4F5966] shadow-sm backdrop-blur-[14px] hover:text-[#8C7657]"
              >
                {source.name}
              </a>
            ))}
          </div>
        </section>

        <section id="newsletter" className="mt-12 scroll-mt-28 rounded-[26px] border border-white/45 bg-[#F7F5F0]/72 p-6 shadow-sm backdrop-blur-[14px] sm:p-8">
          <h2 className="text-2xl font-semibold text-[#232323]">Weekly research cadence</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4F5966]">
            I update this page as a concise macro research sample for this portfolio. The note is informational and does not provide investment advice.
          </p>
        </section>
      </main>
    </div>
  )
}
