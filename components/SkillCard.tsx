type SkillCardProps = {
  title: string
}

export function SkillCard({ title }: SkillCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="mb-4 h-1.5 w-12 rounded-full bg-blue-700" />
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
    </article>
  )
}
