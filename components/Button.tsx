import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variants = {
  primary:
    'border-[#232323] bg-[#232323] text-[#F7F5F0] shadow-sm hover:-translate-y-0.5 hover:bg-[#253247]',
  secondary:
    'border-white/50 bg-[#F7F5F0]/70 text-[#232323] shadow-sm backdrop-blur-[14px] hover:-translate-y-0.5 hover:bg-[#F7F5F0]/90',
  ghost:
    'border-white/40 bg-[#232323]/10 text-[#232323] backdrop-blur-[12px] hover:-translate-y-0.5 hover:bg-[#232323]/15',
}

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const isExternal = href.startsWith('http')
  const className = `inline-flex min-h-11 items-center justify-center rounded-[22px] border px-5 py-2.5 text-sm font-semibold transition ${variants[variant]}`

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
