import React from 'react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import { testimonials } from '../data/content.js'
import { PlayCircle } from 'lucide-react'

export default function SuccessStories() {
  return (
    <div>
      <PageHero
        eyebrow="Success Stories"
        title="Results our students will tell you about themselves."
        description="Real feedback from real students and parents — from foundation classes to competitive exams, taught fully online."
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-arjuna">Video Testimonials</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl">Hear it from them.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.tag} delay={i * 0.06}>
                <div className="rounded-3xl border border-border/10 overflow-hidden">
                  <button className="w-full aspect-video bg-bg-elevated/60 grid place-items-center group hover:bg-nova/5 transition-colors">
                    <span className="w-14 h-14 rounded-full bg-nova/15 grid place-items-center group-hover:bg-nova/25 transition-colors">
                      <PlayCircle className="w-7 h-7 text-nova" />
                    </span>
                  </button>
                  <div className="p-5">
                    <p className="text-xs eyebrow text-arjuna">{t.tag}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border/10">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-arjuna">In Their Words</span>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.tag} delay={i * 0.05}>
                <div className="glass rounded-3xl p-7">
                  <p className="text-base leading-relaxed font-display">"{t.quote}"</p>
                  <p className="mt-5 text-xs eyebrow text-arjuna">{t.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
