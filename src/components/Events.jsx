import React from 'react'
import { Calendar, MapPin, Users, Trophy, Cpu, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'

const events = [
  {
    icon: Trophy,
    title: 'HackDroid 2026',
    date: 'March 15-16, 2026',
    location: 'Main Auditorium',
    attendees: '200+',
    description:
      'Our flagship 36-hour hackathon bringing together 50+ teams to build innovative Android and web solutions for real-world problems.',
    tags: ['Hackathon', 'Android', 'Web', 'IoT'],
    status: 'Completed',
  },
  {
    icon: Code2,
    title: 'Full-Stack Bootcamp',
    date: 'June 1-30, 2026',
    location: 'Online + Lab Sessions',
    attendees: '80+',
    description:
      'An intensive 4-week bootcamp covering React, Node.js, databases, Docker, and deployment — from zero to shipping your first full-stack app.',
    tags: ['Bootcamp', 'React', 'Node.js', 'DevOps'],
    status: 'Completed',
  },
  {
    icon: Cpu,
    title: 'IoT Innovation Sprint',
    date: 'August 10-11, 2026',
    location: 'R&D Lab',
    attendees: '60+',
    description:
      'A weekend sprint focused on building smart campus IoT prototypes using ESP32 microcontrollers, sensors, and cloud dashboards.',
    tags: ['IoT', 'ESP32', 'Hardware', 'Cloud'],
    status: 'Completed',
  },
  {
    icon: Trophy,
    title: 'HackDroid 2027',
    date: 'March 2027',
    location: 'TBA',
    attendees: 'Registration Open',
    description:
      'The next edition of our flagship hackathon — bigger, bolder, and with industry mentors. Theme reveal coming soon!',
    tags: ['Hackathon', 'Flagship', 'Coming Soon'],
    status: 'Upcoming',
  },
]

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 relative scroll-mt-20">
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
            Experiences
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-ink">
            Events &{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hackathons</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted text-lg">
            Sample events for the showcase. Dates, attendance, and registration
            statuses are illustrative.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {events.map((event, idx) => {
              const Icon = event.icon
              const isLeft = idx % 2 === 0

              return (
                <div
                  key={event.title}
                  className={`relative flex flex-col items-start gap-8 pl-10 md:pl-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-canvas z-10" />

                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="w-full min-w-0 md:w-1/2 rounded-2xl bg-surface border border-white/10 p-4 sm:p-6 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-ink [overflow-wrap:anywhere]">{event.title}</h3>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.status === 'Upcoming'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-surface-high text-muted'
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-primary" />
                        {event.attendees}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-surface-high border border-white/10 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
