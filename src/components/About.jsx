import React from 'react'
import { Target, Lightbulb, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'Empower students to master modern software engineering through real-world projects, open-source contributions, and peer-driven learning.',
  },
  {
    icon: Lightbulb,
    title: 'Learn by Building',
    text: "We don't just teach frameworks — we ship products. Every member contributes to live projects that solve real campus and community problems.",
  },
  {
    icon: Rocket,
    title: 'Launch-Ready Skills',
    text: 'From Git workflows to CI/CD pipelines, our members graduate with production-grade engineering habits that set them apart in the industry.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-semibold text-primary tracking-widest uppercase">
            Who We Are
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-ink">
            More Than a Club —{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">A Dev Studio</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted text-lg leading-relaxed">
            Android Club is a student-run engineering collective. We operate
            like a startup — four specialized wings, one shared mission: build
            software that matters.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl bg-surface border border-white/10 p-8 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{title}</h3>
              <p className="text-muted leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
