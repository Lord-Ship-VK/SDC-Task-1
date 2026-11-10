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

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        const anim = el.querySelector('.section-animate') || (el.classList.contains('section-animate') ? el : null)
        if (anim) anim.classList.add('visible')
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass !border-0 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-android-emerald/10 border border-android-emerald/20 flex items-center justify-center group-hover:bg-android-emerald/20 transition-colors">
            <Smartphone className="w-5 h-5 text-android-emerald" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Android<span className="text-android-emerald">Club</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm text-android-muted hover:text-android-emerald transition-colors rounded-lg hover:bg-android-emerald/5 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-android-emerald text-android-bg hover:bg-android-emerald-dark transition-colors cursor-pointer"
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
          className="md:hidden grid h-11 w-11 place-items-center rounded-lg text-android-muted hover:text-android-emerald transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="md:hidden glass border-t border-android-border max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain motion-safe:animate-slide-up"
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setMobileOpen(false)
                handleNavClick(link.href)
              }}
              className="px-4 py-3 text-sm text-android-muted hover:text-android-emerald hover:bg-android-emerald/5 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              setMobileOpen(false)
              handleNavClick('#contact')
            }}
            className="mt-2 px-5 py-3 text-sm font-semibold rounded-lg bg-android-emerald text-android-bg text-center hover:bg-android-emerald-dark transition-colors cursor-pointer"
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  )
}
