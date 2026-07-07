import React from 'react'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import { Link } from 'react-router-dom'
import { events } from '../data/content.js'

const extra = [
  { title: 'Arjunova Olympiad Prep Circle', type: 'Competition', date: '15 August 2026', mode: 'Online' },
  { title: 'CBSE Board Revision Seminar', type: 'Seminar', date: '5 September 2026', mode: 'Online' },
]

export default function Events() {
  const all = [...events, ...extra]
  return (
    <div>
      <PageHero
        eyebrow="Events"
        title="Workshops, webinars and competitions."
        description="Free sessions for prospective and current students — diagnostic tests, parent info sessions and subject-specific sprints."
      />
      <section className="py-16 md:py-20">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {all.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <div className="rounded-3xl border border-border/10 p-7 flex flex-col h-full">
                <span className="eyebrow text-arjuna">{e.type}</span>
                <h3 className="mt-3 font-display font-bold text-xl leading-snug flex-1">{e.title}</h3>
                <div className="mt-5 flex items-center gap-5 text-sm text-mist">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-nova" /> {e.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-nova" /> {e.mode}</span>
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-nova">
                  Reserve a spot <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
