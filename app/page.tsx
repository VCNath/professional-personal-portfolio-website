import Image from 'next/image'
import { Button } from '@/components/Button'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SkillCard } from '@/components/SkillCard'
import { focusAreas, projects } from '@/lib/data'

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Saskatoon, Saskatchewan
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Business Operations & Analytics Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              I&apos;m an economics graduate with experience in sales operations,
              quoting, customer-facing support, and project-related workflows. I
              build practical tools that help teams organize work, track
              performance, and make better decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects">View Projects</Button>
              <Button href="/resume" variant="secondary">
                View Resume
              </Button>
              <Button
                href="https://www.linkedin.com/in/nathaniel-varga-chauvin-16240a139"
                variant="ghost"
              >
                LinkedIn
              </Button>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/operations-dashboard-hero.png"
              alt="A professional workspace with analytics dashboards on a laptop"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Practical business analysis grounded in day-to-day operations."
          description="Nathaniel is an economics graduate from the University of Saskatchewan with experience at Wesco in industrial distribution operations. His work has exposed him to RFQs, quoting workflows, customer communication, outside sales follow-ups, and project support. His current portfolio focuses on dashboard development, workflow improvement, and business analysis."
        />
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Focus Areas" title="Where the portfolio is headed." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((skill) => (
              <SkillCard key={skill} title={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Dashboard, workflow, and analysis projects."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} compact />
          ))}
        </div>
      </section>
    </>
  )
}
