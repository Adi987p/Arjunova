import React from 'react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import { faculty } from '../data/content.js'
import { Compass, Rocket, HeartHandshake, BookOpen, Cpu, Infinity as InfinityIcon, GraduationCap } from 'lucide-react'

const values = [
  { icon: Rocket, title: 'Excellence', body: 'We teach to the standard of the toughest exam in the room, not the easiest one.' },
  { icon: Cpu, title: 'Innovation', body: 'Every process we build — attendance, tests, reports — is designed to become a product, not stay a workaround.' },
  { icon: HeartHandshake, title: 'Integrity', body: 'Progress reports say what\u2019s true, even when it\u2019s not flattering. Trust is the actual product.' },
  { icon: BookOpen, title: 'Knowledge', body: 'Depth over shortcuts. We\u2019d rather a student understand one method than memorise five.' },
  { icon: Compass, title: 'Technology', body: 'We build like a software company because the next decade of education will be built that way.' },
  { icon: InfinityIcon, title: 'Lifelong Learning', body: 'An exam result is a milestone, not a finish line — for our students and for us.' },
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Arjunova"
        title="A coaching institute, built with the architecture of a technology company."
        description="Arjunova is a fully online academic team teaching Indian and international students — from first-grade foundations through competitive exams. Every decision is made to hold up as we grow into a much larger education and technology brand, without ever tearing up the foundation."
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-3xl border border-border/10 p-8 h-full">
              <span className="eyebrow text-arjuna">Vision</span>
              <p className="mt-4 font-display font-bold text-2xl leading-snug">
                To become the education and technology brand a family trusts for every stage of learning — from a first algebra class to an AI-powered career.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border/10 p-8 h-full">
              <span className="eyebrow text-arjuna">Mission</span>
              <p className="mt-4 font-display font-bold text-2xl leading-snug">
                Teach every subject and exam with precision, measure progress honestly, and build the technology that lets both scale without losing either.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border/10">
        <div className="container-page grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <Reveal>
            <span className="eyebrow text-arjuna">Founder's Story</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl">Started with one whiteboard.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-mist leading-relaxed">
              <p>
                Arjunova began the way most real coaching does — one teacher, one subject, one small
                batch of students who needed mathematics explained properly. What made it different
                early on was a habit of treating every classroom problem, attendance tracking, test
                scoring, progress updates for parents, as something worth actually engineering a
                solution for, not working around forever.
              </p>
              <p>
                That habit is the whole reason Arjunova exists as a brand today. What started as
                spreadsheets and formula sheets built by hand became a genuine appetite for building
                proper systems: a student portal, automated reports, and eventually the ambition to
                build AI-powered tools for the same students already in our classrooms.
              </p>
              <p>
                Today that means a fully online academic team serving students well beyond one city —
                Indian and international families alike, from a child's very first classes through
                the most competitive exams in the world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border/10">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-arjuna">Core Values</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl">What doesn't change as we grow.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border/10 p-6 h-full">
                  <v.icon className="w-5 h-5 text-nova" />
                  <h3 className="mt-5 font-display font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border/10">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-arjuna">Team</span>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl">The people behind the results.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f, i) => (
              <Reveal key={f.role} delay={i * 0.04}>
                <div className="rounded-3xl border border-border/10 p-6">
                  <div className="w-12 h-12 rounded-xl bg-arjuna/10 grid place-items-center text-arjuna">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-sm">{f.role}</h3>
                  <p className="text-xs text-nova mt-1">{f.subject}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
