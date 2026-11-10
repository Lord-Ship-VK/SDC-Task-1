import React, { useState } from 'react'
import { Smartphone, Globe, Shield, Palette, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const wings = [
  {
    id: 'android',
    icon: Smartphone,
    name: 'Android Team',
    tagline: 'Native & Cross-Platform Mobile',
    color: 'from-green-500/20 to-emerald-500/10',
    stack: ['Kotlin', 'Jetpack Compose', 'Flutter', 'Material 3', 'Firebase'],
    description:
      'Building polished, performant mobile apps with modern declarative UI frameworks. From concept to Play Store — we own the entire mobile lifecycle.',
    highlights: [
      'Published 5 apps on Google Play Store',
      'Compose-first architecture workshops',
      'Flutter cross-platform sprints',
    ],
  },
  {
    id: 'sdc',
    icon: Globe,
    name: 'Software Development Cell',
    tagline: 'Full-Stack Web & Cloud',
    color: 'from-blue-500/20 to-cyan-500/10',
    stack: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
    description:
      'The SDC ships production web platforms — dashboards, APIs, and cloud-native services. We treat every project like a real product with sprints, code reviews, and CI/CD.',
    highlights: [
      'Built the campus event portal serving 3,000+ users',
      'Microservices architecture with FastAPI',
      'End-to-end DevOps pipeline mastery',
    ],
  },
  {
    id: 'rnd',
    icon: Shield,
    name: 'R&D — Cyber Security, IoT & ML',
    tagline: 'Research & Frontier Tech',
    color: 'from-red-500/20 to-orange-500/10',
    stack: ['Python', 'PyTorch', 'ESP32', 'TensorFlow', 'Infosec', 'Wireshark'],
    description:
      'Our R&D wing pushes boundaries in machine learning, embedded IoT systems, and information security. We publish papers and win CTFs.',
    highlights: [
      'Top 10 in national CTF competitions',
      'IoT-based smart campus prototype',
      'ML models deployed in production apps',
    ],
  },
  {
    id: 'uiux',
    icon: Palette,
    name: 'UI/UX Design Wing',
    tagline: 'Human-Centered Design',
    color: 'from-purple-500/20 to-pink-500/10',
    stack: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Motion Design'],
    description:
      'Great products start with great design. Our UI/UX wing creates design systems, runs usability tests, and ensures every pixel serves a purpose.',
    highlights: [
      'Club-wide design system with 50+ components',
      'User research for every major project',
      'Figma-to-code handoff workshops',
    ],
  },
]

export default function Wings() {
  const [active, setActive] = useState('android')
  const current = wings.find((w) => w.id === active)

  return (
    <section id="wings" className="py-24 px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto section-animate">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-semibold text-android-emerald tracking-widest uppercase">
            Our Divisions
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Four Wings,{' '}
            <span className="text-gradient">One Ecosystem</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-android-muted text-lg">
            Each wing operates as an autonomous squad with its own tech stack,
            projects, and leadership — united under the Android Club banner.
          </p>
        </motion.div>

        {/* Wing tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {wings.map(({ id, icon: Icon, name }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                active === id
                  ? 'bg-android-emerald text-android-bg shadow-lg shadow-android-emerald/20'
                  : 'bg-android-card border border-android-border text-android-muted hover:border-android-emerald/30 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{name}</span>
            </button>
          ))}
        </motion.div>

        {/* Active wing detail */}
        <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="glow-border rounded-2xl bg-android-card border border-android-border overflow-hidden"
          >
            <div className={`h-1.5 bg-gradient-to-r ${current.color}`} />
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <current.icon className="w-7 h-7 text-android-emerald" />
                    <h3 className="text-2xl font-bold text-white">{current.name}</h3>
                  </div>
                  <p className="text-android-emerald text-sm font-mono mb-4">
                    {current.tagline}
                  </p>
                  <p className="text-android-muted leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {current.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-android-emerald/10 border border-android-emerald/20 text-android-emerald text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — highlights */}
                <div className="md:w-80 flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-android-muted uppercase tracking-wider mb-1">
                    Highlights
                  </h4>
                  {current.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-android-surface border border-android-border"
                    >
                      <ChevronRight className="w-4 h-4 text-android-emerald mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-android-text">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
}
