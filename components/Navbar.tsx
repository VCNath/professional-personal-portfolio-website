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
    <header className="sticky top-0 z-30 px-3 pt-3">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[28px] border border-white/40 bg-[#232323]/82 px-5 py-4 text-[#F7F5F0] shadow-sm backdrop-blur-[16px] sm:px-6 xl:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="text-base font-semibold">
          Nathaniel Varga-Chauvin
          </Link>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-[#D9D2C7]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#F7F5F0]">
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
                className="w-44 rounded-[20px] border border-white/20 bg-[#F7F5F0]/12 px-3 py-2 text-[#F7F5F0] placeholder:text-[#D9D2C7]/70"
              />
            )}
            <button
              type="button"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
              className="rounded-[20px] border border-white/20 px-3 py-2 font-medium text-[#D9D2C7] transition hover:border-white/50 hover:text-[#F7F5F0]"
            >
              Search
            </button>
            <button
              type="button"
              aria-pressed={darkMode}
              onClick={toggleDarkMode}
              className="rounded-[20px] border border-white/20 px-3 py-2 font-medium text-[#D9D2C7] transition hover:border-white/50 hover:text-[#F7F5F0]"
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
            <Link
              href="/weekly-brief#newsletter"
              className="rounded-[20px] bg-[#F7F5F0] px-4 py-2 font-semibold text-[#232323] transition hover:-translate-y-0.5 hover:bg-[#D9D2C7]"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
