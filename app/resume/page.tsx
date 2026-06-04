import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { resumeSkillGroups } from '@/lib/data'

const contactLinks = [
  {
    label: 'vcath@hotmail.com',
    href: 'mailto:vcath@hotmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nathaniel-varga-chauvin-16240a139',
  },
  {
    label: 'nathanielvc.com',
    href: 'https://nathanielvc.com/',
  },
]

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
            <Button href="/resume.pdf">Open Resume PDF</Button>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Public portfolio: https://nathanielvc.com/
          </p>
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

      <article className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-950">Contact</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <Button key={link.label} href={link.href} variant="secondary">
              {link.label}
            </Button>
          ))}
        </div>
      </article>
    </section>
  )
}
