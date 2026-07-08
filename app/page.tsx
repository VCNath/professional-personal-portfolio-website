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
      <section className="px-3 py-4">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase text-[#8C7657]">
              Saskatoon, Saskatchewan
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold text-[#232323] sm:text-5xl lg:text-6xl">
              Business Operations & Analytics Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4F5966]">
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
          <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/45 bg-[#F7F5F0]/30 shadow-sm backdrop-blur-[14px]">
            <Image
              src="/images/editorial-workspace-hero.png"
              alt="A refined architectural workspace with abstract macro dashboard visuals"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-center">
          <SectionHeading
            eyebrow="About"
            title="Practical business analysis grounded in day-to-day operations."
            description="I am an economics graduate from the University of Saskatchewan with experience at Wesco in industrial distribution operations. My work has exposed me to RFQs, quoting workflows, customer communication, outside sales follow-ups, and project support. My current portfolio focuses on dashboard development, workflow improvement, and business analysis."
          />
          <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/45 bg-[#F7F5F0]/50 shadow-sm backdrop-blur-[14px]">
            <Image
              src="/images/policy-research-desk.png"
              alt="Policy research desk with charts and warm matte materials"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/45 bg-[#F7F5F0]/42 backdrop-blur-[14px]">
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
