import React from 'react'
import { ArrowRight, ChevronRight, Zap, Users, Trophy, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import TerminalText from './TerminalText'

const stats = [
  { icon: Users, value: '120+', label: 'Active Members' },
  { icon: Code2, value: '40+', label: 'Projects Shipped' },
  { icon: Trophy, value: '15+', label: 'Hackathon Wins' },
  { icon: Zap, value: '4', label: 'Club Wings' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden scroll-mt-20">
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-android-emerald/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-android-emerald/20 bg-android-emerald/5 mb-8 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-android-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-android-emerald" />
          </span>
          <span className="text-xs font-mono font-semibold text-android-emerald tracking-wider uppercase">
            SDC Task 1 · Recruitment Showcase
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 animate-slide-up">
          <span className="text-white">Build the Future</span>
          <br />
          <span className="text-gradient">with Android Club</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-android-muted leading-relaxed mb-8 animate-fade-in">
          The premier student developer community crafting production-grade
          Android apps, full-stack platforms, and cutting-edge R&amp;D — from
          campus to the real world.
        </p>

        {/* Interactive Terminal */}
        <div className="mb-10 animate-fade-in">
          <TerminalText />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
          <a
            href="#contact"
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) {
                const anim = el.querySelector('.section-animate') || (el.classList.contains('section-animate') ? el : null)
                if (anim) anim.classList.add('visible')
              }
            }}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-android-emerald text-android-bg font-bold text-base hover:bg-android-emerald-dark transition-all hover:shadow-lg hover:shadow-android-emerald/20 cursor-pointer"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-android-border text-android-text font-semibold text-base hover:border-android-emerald/40 hover:bg-android-emerald/5 transition-all"
          >
            View Projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="mb-3 text-xs font-mono uppercase tracking-wider text-android-muted">
          Sample club stats
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-border rounded-xl bg-android-card/60 border border-android-border p-5 hover:border-android-emerald/30 transition-all group"
            >
              <Icon className="w-5 h-5 text-android-emerald mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-android-muted mt-1">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
