type SkillCardProps = {
  title: string
}

export function SkillCard({ title }: SkillCardProps) {
  return (
    <article className="rounded-[26px] border border-white/45 bg-[#F7F5F0]/68 p-5 shadow-sm backdrop-blur-[14px] transition hover:-translate-y-1">
      <div className="mb-4 h-1.5 w-12 rounded-full bg-[#8C7657]" />
      <h2 className="text-lg font-semibold text-[#232323]">{title}</h2>
    </article>
  )
}
