import React from 'react'
import { Smartphone, Heart } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Wings', href: '#wings' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Events', href: '#events' },
      { label: 'Contact', href: '#contact' },
      { label: 'Author on GitHub', href: 'https://github.com/Lord-Ship-VK' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Android Docs', href: 'https://developer.android.com' },
      { label: 'Kotlin', href: 'https://kotlinlang.org' },
      { label: 'React Docs', href: 'https://react.dev' },
      { label: 'Figma', href: 'https://figma.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-android-border bg-android-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-android-emerald/10 border border-android-emerald/20 flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-android-emerald" />
              </div>
              <span className="text-base font-bold text-white">
                Android<span className="text-android-emerald">Club</span>
              </span>
            </a>
            <p className="text-sm text-android-muted leading-relaxed">
              Building the next generation of developers, one project at a time.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-android-muted hover:text-android-emerald transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-android-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-android-muted">
            Android Club · SDC Task 1 showcase
          </p>
          <p className="flex items-center gap-1 text-xs text-android-muted">
            Crafted with <Heart className="w-3 h-3 text-android-emerald fill-android-emerald" /> by Venkatesh Kalyane
          </p>
        </div>
      </div>
    </footer>
  )
}
