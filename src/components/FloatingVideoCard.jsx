import React from 'react'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

export default function FloatingVideoCard({ label, sublabel, className = '', duration = 6, delay = 0 }) {
  return (
    <motion.div
      className={`glass rounded-2xl p-3 pr-4 flex items-center gap-3 shadow-xl shadow-black/5 ${className}`}
      animate={{ y: [0, -14, 0], rotate: [0, 1.2, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <span className="w-10 h-10 rounded-xl bg-nova/15 grid place-items-center shrink-0">
        <PlayCircle className="w-5 h-5 text-nova" />
      </span>
      <div className="leading-tight">
        <p className="text-xs font-semibold whitespace-nowrap">{label}</p>
        {sublabel && <p className="text-[11px] text-mist whitespace-nowrap">{sublabel}</p>}
      </div>
    </motion.div>
  )
}
