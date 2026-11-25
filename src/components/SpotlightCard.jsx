import { useCallback, useRef } from 'react'

const borderGlow = {
  background: 'radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgb(138 180 248 / 0.9), rgb(208 163 255 / 0.4) 40%, transparent 70%)',
}
const innerGlow = {
  background: 'radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), rgb(138 180 248 / 0.08), transparent 70%)',
}

export default function SpotlightCard({ as: Tag = 'div', className = '', innerClassName = '', children, ...rest }) {
  const ref = useRef(null)
  const onPointerMove = useCallback((event) => {
    if (event.pointerType === 'touch') return
    const el = ref.current
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }, [])

  return (
    <Tag {...rest} ref={ref} onPointerMove={onPointerMove} className={`group relative min-w-0 rounded-2xl bg-white/[0.08] p-px ${className}`}>
      <span aria-hidden="true" style={borderGlow} className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-full rounded-[15px] bg-surface">
        <span aria-hidden="true" style={innerGlow} className="pointer-events-none absolute inset-0 rounded-[15px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className={`relative h-full ${innerClassName}`}>{children}</div>
      </div>
    </Tag>
  )
}
