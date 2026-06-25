'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/weekly-brief', label: 'Weekly Brief' },
  { href: '/weekly-brief#global-dashboard', label: 'Economic Dashboard' },
  { href: '/weekly-brief#big-story', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    const nextMode = !darkMode
    setDarkMode(nextMode)
    document.documentElement.classList.toggle('reader-dark', nextMode)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 xl:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="text-base font-semibold">
          Nathaniel Varga-Chauvin
          </Link>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {searchOpen && (
              <label className="sr-only" htmlFor="site-search">
                Search
              </label>
            )}
            {searchOpen && (
              <input
                id="site-search"
                type="search"
                placeholder="Search briefings"
                className="w-44 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder:text-slate-500"
              />
            )}
            <button
              type="button"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
              className="rounded-md border border-slate-700 px-3 py-2 font-medium text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              Search
            </button>
            <button
              type="button"
              aria-pressed={darkMode}
              onClick={toggleDarkMode}
              className="rounded-md border border-slate-700 px-3 py-2 font-medium text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
            <Link
              href="/weekly-brief#newsletter"
              className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-500"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
