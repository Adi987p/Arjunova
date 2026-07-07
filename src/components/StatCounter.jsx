import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label, duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(value)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-mono text-4xl md:text-5xl font-semibold text-ink tabular-nums">
        {display.toLocaleString()}
        <span className="text-nova">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-mist">{label}</div>
    </div>
  )
}
