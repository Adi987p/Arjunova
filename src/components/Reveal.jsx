import React from 'react'
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 18, className = '', as = 'div' }) {
  const Component = motion[as] || motion.div
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
      className={className}
    >
      {children}
    </Component>
  )
}
