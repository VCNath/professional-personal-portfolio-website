import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variants = {
  primary: 'border-blue-700 bg-blue-700 text-white hover:bg-blue-800',
  secondary: 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
  ghost: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200',
}

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const isExternal = href.startsWith('http')
  const className = `inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition ${variants[variant]}`

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
