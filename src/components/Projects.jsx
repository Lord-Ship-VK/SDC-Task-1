import React, { useState } from 'react'
import { Github, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'sdc-web', label: 'SDC Web' },
  { id: 'android', label: 'Android' },
  { id: 'rd-ml', label: 'R&D / ML' },
]

const projects = [
  {
    title: 'CampusConnect',
    track: 'sdc-web',
    description: 'Full-stack campus event management platform with real-time notifications, QR check-in, and analytics dashboard.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    stars: 48,
  },
  {
    title: 'StudyMate',
    track: 'android',
    description: 'AI-powered study companion app with smart scheduling, flashcards, and collaborative note-taking built in Jetpack Compose.',
    stack: ['Kotlin', 'Compose', 'Room', 'ML Kit'],
    stars: 35,
  },
  {
    title: 'ThreatMap',
    track: 'rd-ml',
    description: 'Real-time network threat visualization using ML anomaly detection on ESP32 sensor data streams.',
    stack: ['Python', 'PyTorch', 'ESP32', 'FastAPI'],
    stars: 62,
  },
  {
    title: 'DevBoard',
    track: 'sdc-web',
    description: 'Internal developer dashboard for tracking club KPIs, sprint velocity, and member contributions across all wings.',
    stack: ['React', 'D3.js', 'Supabase', 'Tailwind'],
    stars: 28,
  },
  {
    title: 'GreenWalk',
    track: 'android',
    description: 'Eco-friendly commute tracker that gamifies sustainable transportation with leaderboards and campus rewards.',
    stack: ['Flutter', 'Firebase', 'Maps API', 'Dart'],
    stars: 41,
  },
  {
    title: 'SentinelBot',
    track: 'rd-ml',
    description: 'Automated vulnerability scanner and security audit tool for web applications with AI-generated remediation reports.',
    stack: ['Python', 'Transformers', 'Docker', 'FastAPI'],
    stars: 55,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState(() => {
    const track = new URLSearchParams(window.location.search).get('track')
    return categories.some(({ id }) => id === track) ? track : 'all'
  })

  function selectTrack(track) {
    const url = new URL(window.location.href)
    url.searchParams.set('track', track)
    window.history.replaceState(window.history.state, '', url)
    setFilter(track)
  }

  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.track === filter)

  return (
    <section id="projects" className="py-24 px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto section-animate">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono font-semibold text-android-emerald tracking-widest uppercase">
            What We Build
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Project{' '}
            <span className="text-gradient">Showcase</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-android-muted text-lg">
            Explore sample projects across SDC, Android, and R&amp;D.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => selectTrack(id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                filter === id
                  ? 'bg-android-emerald text-android-bg'
                  : 'bg-android-card border border-android-border text-android-muted hover:border-android-emerald/30 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-border rounded-2xl bg-android-card border border-android-border p-6 flex flex-col hover:border-android-emerald/30 transition-all group"
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-android-emerald/10 text-android-emerald text-xs font-mono">
                  {categories.find(({ id }) => id === project.track).label}
                </span>
                <div className="flex items-center gap-1 text-android-muted text-xs">
                  <Star className="w-3.5 h-3.5 fill-android-emerald text-android-emerald" />
                  {project.stars}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-android-emerald transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-android-muted leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-android-surface border border-android-border text-xs text-android-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="pt-4 border-t border-android-border text-sm text-android-muted">
                Demo coming soon
              </p>
            </motion.div>
          ))}
        </div>

        <a
          href="https://github.com/Lord-Ship-VK"
          className="mt-6 inline-flex items-center gap-2 text-sm text-android-muted hover:text-android-emerald transition-colors"
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          More projects from the author
        </a>
      </div>
    </section>
  )
}
