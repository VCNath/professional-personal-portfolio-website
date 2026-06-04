import { SectionHeading } from '@/components/SectionHeading'

const wescoBullets = [
  'Supported RFQ and quoting processes involving a wide range of products, vendors, customers, and project requirements.',
  'Gained experience with customer communication, quote tracking, outside sales support, and project-related follow-ups.',
  'Worked with internal teams to organize quote information, track project needs, and support customer-facing workflows.',
  'Developed an understanding of how materials, pricing, customer requests, vendors, and project timelines connect in day-to-day operations.',
  'Built and planned dashboard tools to improve visibility into quote status, active bids, project value, and outside sales follow-up needs.',
]

const skillsLearned = [
  'Economic Analysis',
  'Data Interpretation',
  'Critical Thinking',
  'Research',
  'Policy Analysis',
]

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Operations experience with an analytics lens."
        description="Experience across sales operations, quoting workflows, project support, and economics coursework."
      />

      <div className="mt-10 space-y-6">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Wesco</h2>
              <p className="mt-1 text-slate-700">
                Sales Operations, Quoting & Project Support
              </p>
            </div>
            <p className="text-sm font-medium text-slate-600">
              Saskatoon, Saskatchewan
            </p>
          </div>
          <p className="mt-6 max-w-3xl leading-7 text-slate-700">
            Hands-on experience across sales operations, quoting, customer-facing
            support, and project-related workflows in an industrial distribution
            environment.
          </p>
          <ul className="mt-6 space-y-3">
            {wescoBullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">
            University of Saskatchewan
          </h2>
          <p className="mt-1 text-slate-700">Bachelor of Arts in Economics</p>
          <p className="mt-6 max-w-3xl leading-7 text-slate-700">
            Completed a Bachelor of Arts in Economics at the University of
            Saskatchewan, building a strong foundation in economic theory, market
            analysis, policy, and data-driven decision-making.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skillsLearned.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
