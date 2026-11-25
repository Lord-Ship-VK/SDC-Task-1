import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import TerminalText from './TerminalText'

const clamp = (value) => Math.min(1, Math.max(-1, value))

function useCursorVars(ref) {
  useEffect(() => {
    const stage = ref.current
    const tracking = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    let visible = false
    let frame = 0
    let x = 0, y = 0, targetX = 0, targetY = 0

    function tick() {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      stage.style.setProperty('--mx', x.toFixed(3))
      stage.style.setProperty('--my', y.toFixed(3))
      frame = Math.abs(targetX - x) + Math.abs(targetY - y) < 0.001 ? 0 : requestAnimationFrame(tick)
    }
    function aim(nextX, nextY) {
      targetX = nextX
      targetY = nextY
      if (!frame) frame = requestAnimationFrame(tick)
    }
    function move(event) {
      if (!visible || event.pointerType === 'touch') return
      const rect = stage.getBoundingClientRect()
      aim(clamp((event.clientX - rect.left - rect.width / 2) / (window.innerWidth / 2)),
          clamp((event.clientY - rect.top - rect.height / 2) / (window.innerHeight / 2)))
    }
    function leave() { if (visible) aim(0, 0) }
    function disable() {
      cancelAnimationFrame(frame)
      frame = x = y = targetX = targetY = 0
      stage.style.removeProperty('--mx')
      stage.style.removeProperty('--my')
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
    function sync() {
      disable()
      if (tracking.matches && visible) {
        window.addEventListener('pointermove', move, { passive: true })
        document.documentElement.addEventListener('pointerleave', leave)
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    })
    observer.observe(stage)
    tracking.addEventListener('change', sync)
    return () => {
      disable()
      observer.disconnect()
      tracking.removeEventListener('change', sync)
    }
  }, [ref])
}

const headStyle = { transform: 'translate(calc(var(--mx) * 6px), calc(var(--my) * 4px))' }
const pupilStyle = { transform: 'translate(calc(var(--mx) * 3.5px), calc(var(--my) * 3px))' }
const antennaStyle = (origin) => ({
  transformBox: 'fill-box', transformOrigin: origin, transform: 'rotate(calc(var(--mx) * 7deg))',
})

function Droid() {
  return (
    <svg viewBox="0 0 200 130" className="h-auto w-full overflow-visible" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="droid-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8AB4F8" />
          <stop offset="1" stopColor="#B79CF5" />
        </linearGradient>
        <linearGradient id="droid-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="droid-idle">
        <g style={headStyle}>
          <g style={antennaStyle('100% 100%')}>
            <path d="M62 64 L46 28" stroke="url(#droid-body)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="46" cy="26" r="3" fill="#3DDC84" />
          </g>
          <g style={antennaStyle('0% 100%')}>
            <path d="M138 64 L154 28" stroke="url(#droid-body)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="154" cy="26" r="3" fill="#3DDC84" />
          </g>
          <path d="M20 130 A80 80 0 0 1 180 130 Z" fill="url(#droid-body)" />
          <path d="M20 130 A80 80 0 0 1 180 130 Z" fill="url(#droid-sheen)" />
          {[68, 132].map((cx) => (
            <g key={cx} className="droid-eye">
              <circle cx={cx} cy="96" r="11" fill="#0B0D12" fillOpacity="0.85" />
              <g className="droid-look" style={pupilStyle}><circle cx={cx} cy="96" r="5.5" fill="#E8EAF0" /></g>
            </g>
          ))}
        </g>
      </g>
    </svg>
  )
}

export default function Hero() {
  const stageRef = useRef(null)
  useCursorVars(stageRef)

  return (
    <section id="home" className="relative isolate overflow-hidden bg-mesh">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-32 lg:grid-cols-2 lg:gap-8 lg:pt-36">
        <div className="min-w-0 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-android" /> Android Club · VIT Bhopal
          </span>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-tight">
            We ship Android apps.{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Come build the next one.</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
            Kotlin, Jetpack Compose and Material 3, backed by web, ML and design wings that keep every project moving from idea to Play Store.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-canvas transition hover:bg-primary/90">
              Join the club <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
            </a>
            <a href="#projects" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-ink transition hover:bg-white/10">View projects</a>
          </div>
        </div>
        <div className="flex min-w-0 justify-center lg:justify-end">
          <div ref={stageRef} className="hero-stage relative mt-36 w-[280px] max-w-full sm:w-[300px] [perspective:1200px]">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-3/4 -z-10 h-[220px] w-[220px] rounded-full bg-secondary/20 blur-[90px]" />
            <div className="absolute -top-[132px] left-1/2 z-0 w-[220px] -translate-x-1/2"><Droid /></div>
            <div className="phone-idle glass relative z-10 h-[560px] rounded-[2.5rem] p-2.5"
              style={{ transform: 'rotateX(calc(var(--my) * -5deg)) rotateY(calc(var(--mx) * 7deg))' }}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-canvas/90 ring-1 ring-white/5">
                <span className="absolute left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
                <div className="flex items-center justify-between px-6 pb-2 pt-3 font-mono text-[10px] text-muted">
                  <span>9:41</span>
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 rounded-full bg-android opacity-60 motion-safe:animate-ping" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-android" />
                    </span>
                    adb connected
                  </span>
                </div>
                <div className="px-5 pb-3 pt-2">
                  <p className="font-mono text-xs text-ink/90">club@vit-bhopal ~</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Kotlin', 'Compose', 'Material 3'].map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/[0.15] px-2 py-0.5 font-mono text-[10px] text-primary">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="min-h-0 flex-1 overflow-hidden border-t border-white/5 px-5 py-4 font-mono text-[11px] leading-relaxed text-ink/90">
                  <TerminalText />
                </div>
                <span className="mx-auto mb-2.5 mt-1 h-1 w-24 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
