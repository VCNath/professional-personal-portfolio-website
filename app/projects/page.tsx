import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading } from '@/components/SectionHeading'
import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Applied tools for operations, analysis, and workflow improvement."
        description="A focused collection of static project summaries covering sales operations, dashboards, economic analysis, AI workflow support, and finance product concepts."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
