import type { Project } from '@/lib/data'

type ProjectCardProps = {
  project: Project
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            {project.category}
          </p>
          <h2 className="mt-3 text-xl font-semibold text-slate-950">
            {project.name}
          </h2>
        </div>
        <span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          {project.status}
        </span>
      </div>

      {!compact && (
        <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-950">Problem</h3>
            <p className="mt-1">{project.problem}</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">Solution</h3>
            <p className="mt-1">{project.solution}</p>
          </div>
        </div>
      )}

      {compact && <p className="mt-5 leading-7 text-slate-700">{project.solution}</p>}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  )
}
