import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'

export function Eyebrow({ children }) {
  return <span className="eyebrow text-arjuna">{children}</span>
}

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-20 border-b border-border/10">
      <div className="container-page">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display font-extrabold text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base md:text-lg text-mist max-w-2xl leading-relaxed">{description}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export function ComingSoon({ eyebrow, title, description, items }) {
  return (
    <div className="min-h-[70vh]">
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="container-page py-16 md:py-20">
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-nova/10 blur-3xl" />
            <div className="relative flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-nova" />
              <span className="eyebrow text-nova">Reserved for what's next</span>
            </div>
            <p className="relative text-mist max-w-2xl leading-relaxed mb-10">
              This part of the Arjunova ecosystem is being built. The architecture
              is already in place — here's what will launch into this space.
            </p>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-dashed border-border/20 px-5 py-4 text-sm text-ink/70 flex items-center justify-between"
                >
                  {item}
                  <span className="eyebrow text-mist/60 text-[10px]">Soon</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="relative mt-10 inline-flex items-center gap-2 text-sm font-semibold text-nova hover:gap-3 transition-all"
            >
              Get notified at launch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
