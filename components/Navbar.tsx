import Link from 'next/link'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="text-base font-semibold text-slate-950">
          Nathaniel Varga-Chauvin
        </Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-700">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
