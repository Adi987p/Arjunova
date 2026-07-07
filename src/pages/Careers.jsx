import React from 'react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import { MapPin, Briefcase, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const roles = [
  { title: 'Mathematics Faculty (IB/Cambridge)', type: 'Full-time', location: 'Remote' },
  { title: 'Physics Faculty (JEE/NEET)', type: 'Full-time', location: 'Remote' },
  { title: 'Frontend Developer (React)', type: 'Contract', location: 'Remote' },
  { title: 'Content Writer — Education Blog', type: 'Part-time', location: 'Remote' },
]

const internships = [
  { title: 'EdTech Product Internship', duration: '3 months' },
  { title: 'AI/ML Internship — Learning Tools', duration: '6 months' },
]

export default function Careers() {
  return (
    <div>
      <PageHero
        eyebrow="Careers"
        title="Help build the next decade of Arjunova."
        description="We're hiring faculty, and slowly building the technology team behind our future products. Apply below or write in directly."
      />
      <section className="py-16 md:py-20">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-arjuna">Open Roles</span>
          </Reveal>
          <div className="mt-8 divide-y divide-border/10">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.04}>
                <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg">{r.title}</h3>
                    <div className="mt-2 flex items-center gap-4 text-xs text-mist">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-nova" /> {r.type}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-nova" /> {r.location}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-nova shrink-0">
                    Apply online <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border/10">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-arjuna">Internship Programs</span>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {internships.map((it) => (
              <div key={it.title} className="rounded-3xl border border-border/10 p-7">
                <h3 className="font-display font-bold text-lg">{it.title}</h3>
                <p className="mt-2 text-sm text-mist">{it.duration}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-nova">
                  Apply online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
