import React from 'react'

// The Arjunova mark: concentric "focus rings" (precision, like an archer's aim)
// crossed by a four-point nova burst (ignition, expansion). Used as the logo
// and, at larger scale, as the hero's signature visual.
export default function NovaMark({ className = 'w-9 h-9', animate = false }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" stroke="rgb(var(--nova))" strokeWidth="1.3" opacity="0.35" />
      <circle
        cx="24"
        cy="24"
        r="14.5"
        stroke="rgb(var(--nova))"
        strokeWidth="1.3"
        opacity="0.55"
        className={animate ? 'origin-center animate-spinSlow' : ''}
        strokeDasharray="3 5"
      />
      <circle cx="24" cy="24" r="4.5" fill="rgb(var(--nova))" />
      <path
        d="M24 2 L25.6 12.5 L24 16 L22.4 12.5 Z"
        fill="rgb(var(--arjuna))"
        className={animate ? 'origin-center animate-spinSlowReverse' : ''}
      />
      <path
        d="M24 46 L22.4 35.5 L24 32 L25.6 35.5 Z"
        fill="rgb(var(--arjuna))"
        className={animate ? 'origin-center animate-spinSlowReverse' : ''}
      />
    </svg>
  )
}
