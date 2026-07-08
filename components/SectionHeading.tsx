type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase text-[#8C7657]">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 text-3xl font-semibold text-[#232323] sm:text-4xl">
        {title}
      </h1>
      {description && <p className="mt-4 text-lg leading-8 text-[#4F5966]">{description}</p>}
    </div>
  )
}
