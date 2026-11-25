import React, { useState, useEffect } from 'react'
import { Menu, X, Smartphone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Wings', href: '#wings' },
  { label: 'Projects', href: '#projects' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-canvas/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Smartphone className="w-5 h-5 text-android" />
          </div>
          <span className="text-lg font-bold text-ink tracking-tight">
            Android<span className="text-android">Club</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-muted hover:text-primary transition-colors rounded-lg hover:bg-primary/5 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-canvas hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Join Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="md:hidden grid h-11 w-11 place-items-center rounded-lg text-muted hover:text-primary transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="md:hidden bg-surface border-t border-white/10 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain"
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-5 py-3 text-sm font-semibold rounded-lg bg-primary text-canvas text-center hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  )
}
