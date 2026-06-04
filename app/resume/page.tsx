import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { resumeSkillGroups } from '@/lib/data'

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Resume"
        title="A concise profile for operations and analytics roles."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Professional Summary
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Economics graduate with experience in sales operations, quoting,
            customer-facing support, and project-related workflows. Focused on
            building practical analytics tools, dashboards, and process
            improvements that support better business decisions.
          </p>
          <div className="mt-7">
            <Button href="/resume.pdf">Download Resume PDF</Button>
          </div>
        </article>

        <div className="grid gap-5">
          {resumeSkillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-950">
                {group.title}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
