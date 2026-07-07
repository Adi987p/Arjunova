import React from 'react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import { faculty } from '../data/content.js'
import { Star, PlayCircle, GraduationCap } from 'lucide-react'

export default function Faculty() {
  return (
    <div>
      <PageHero
        eyebrow="Faculty"
        title="Taught by people who've actually done it."
        description="Every Arjunova faculty member is chosen for subject depth and teaching clarity — not just credentials. Here's the full team."
      />
      <section className="py-16 md:py-20">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((f, i) => (
            <Reveal key={f.role} delay={i * 0.05}>
              <div className="rounded-3xl border border-border/10 p-7 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-arjuna/10 grid place-items-center text-arjuna">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1 text-xs text-mist">
                    <Star className="w-3.5 h-3.5 fill-nova text-nova" /> {f.rating}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-bold text-lg">{f.role}</h3>
                <p className="text-sm text-nova mt-1">{f.subject}</p>
                <div className="mt-4 space-y-1.5 text-xs text-mist flex-1">
                  <p><span className="text-ink/70 font-medium">Qualification: </span>{f.qualification}</p>
                  <p><span className="text-ink/70 font-medium">Experience: </span>{f.experience}</p>
                </div>
                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-nova">
                  <PlayCircle className="w-4 h-4" /> Watch introduction
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
