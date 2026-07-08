import type { Project } from '@/lib/data'
import Link from 'next/link'

type ProjectCardProps = {
  project: Project
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const demoIsExternal = project.demoHref?.startsWith('http')
  const demoClassName =
    'inline-flex min-h-10 items-center justify-center rounded-[20px] border border-white/50 bg-[#F7F5F0]/70 px-4 py-2 text-sm font-semibold text-[#232323] transition hover:-translate-y-0.5 hover:bg-[#F7F5F0]/90'

  return (
    <article className="flex h-full flex-col rounded-[26px] border border-white/45 bg-[#F7F5F0]/72 p-6 shadow-sm backdrop-blur-[14px] transition hover:-translate-y-1">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-[#8C7657]">
            {project.category}
          </p>
          <h2 className="mt-3 text-xl font-semibold text-[#232323]">
            {project.name}
          </h2>
        </div>
        <span className="w-fit rounded-full border border-[#C8D3C3]/70 bg-[#C8D3C3]/35 px-3 py-1 text-xs font-semibold text-[#4F5966]">
          {project.status}
        </span>
      </div>

      {!compact && (
        <div className="mt-6 space-y-4 text-sm leading-6 text-[#4F5966]">
          <div>
            <h3 className="font-semibold text-[#232323]">Problem</h3>
            <p className="mt-1">{project.problem}</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#232323]">Solution</h3>
            <p className="mt-1">{project.solution}</p>
          </div>
        </div>
      )}

      {compact && <p className="mt-5 leading-7 text-[#4F5966]">{project.solution}</p>}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/50 bg-[#F7F5F0]/60 px-3 py-1 text-xs font-medium text-[#4F5966]"
          >
            {tool}
          </span>
        ))}
      </div>

      {(project.href || project.demoHref) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.href && (
            <Link
              href={project.href}
              className="inline-flex min-h-10 items-center justify-center rounded-[20px] border border-[#232323] bg-[#232323] px-4 py-2 text-sm font-semibold text-[#F7F5F0] transition hover:-translate-y-0.5 hover:bg-[#253247]"
            >
              View Case Study
            </Link>
          )}
          {project.demoHref && demoIsExternal && (
            <a
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className={demoClassName}
            >
              {project.demoLabel ?? 'Open Demo'}
            </a>
          )}
          {project.demoHref && !demoIsExternal && (
            <Link
              href={project.demoHref}
              className={demoClassName}
            >
              {project.demoLabel ?? 'Open Demo'}
            </Link>
          )}
        </div>
      )}
    </article>
  )
}
