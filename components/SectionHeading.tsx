type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h1>
      {description && <p className="mt-4 text-lg leading-8 text-slate-700">{description}</p>}
    </div>
  )
}
