import { Smartphone, Globe, Cpu, Palette } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const composeSnippet = `@Composable
fun ClubApp() {
  MaterialTheme {
    Scaffold { Home() }
  }
}`

const wings = [
  {
    id: 'android', name: 'Android Team', icon: Smartphone,
    scope: 'Native and cross-platform apps, Compose architecture workshops, Play Store deployment.',
    tech: ['Kotlin', 'Jetpack Compose', 'Flutter', 'Material 3', 'Firebase'],
    span: 'md:col-span-2 lg:row-span-2',
  },
  {
    id: 'sdc', name: 'Software Development Cell', icon: Globe,
    scope: 'Campus enterprise software, student portals, high-throughput microservices.',
    tech: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
    span: 'md:col-span-2',
  },
  {
    id: 'rnd', name: 'R&D: Security, IoT & ML', icon: Cpu,
    scope: 'CTF security audits, embedded IoT sensors, AI/ML models.',
    tech: ['Python', 'PyTorch', 'ESP32', 'Wireshark', 'TensorFlow'],
    span: 'md:col-span-2 lg:col-span-1',
  },
  {
    id: 'design', name: 'UI/UX Design Wing', icon: Palette,
    scope: 'Design tokens, usability research, component libraries, developer handoff.',
    tech: ['Figma', 'Design Systems', 'Prototyping', 'Motion'],
    span: 'md:col-span-2 lg:col-span-1',
  },
]

export default function WingsBento() {
  return (
    <section id="wings" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Four wings, one club</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Android is the core. The wings keep it shipping.
        </h2>
        <p className="mt-4 max-w-prose text-muted">Web, research and design teams work alongside the Android team on every project.</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-4 lg:grid-rows-2">
        {wings.map(({ id, name, icon: Icon, scope, tech, span }) => (
          <SpotlightCard key={id} as="article" className={span} innerClassName="flex flex-col p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.15] text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{scope}</p>
            {id === 'android' && (
              <pre aria-hidden="true" className="mt-6 hidden overflow-hidden rounded-xl border border-white/5 bg-canvas/70 p-4 font-mono text-xs leading-relaxed text-ink/80 sm:block">
                {composeSnippet}
              </pre>
            )}
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {tech.map((item) => <li key={item} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted">{item}</li>)}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
