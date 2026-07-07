import React, { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import { blogPosts } from '../data/content.js'

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(blogPosts.map((p) => p.category))]

  const filtered = useMemo(
    () =>
      blogPosts.filter(
        (p) =>
          (category === 'All' || p.category === category) &&
          p.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, category]
  )

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Reading for students, parents and the curious."
        description="Exam strategy, curriculum comparisons and notes on where education technology is heading — from the people teaching your classes."
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <Reveal className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 rounded-full border border-border/15 px-4 py-2.5 flex-1 max-w-sm">
              <Search className="w-4 h-4 text-mist" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                className="bg-transparent text-sm outline-none flex-1 placeholder:text-mist/70"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    category === c ? 'bg-nova text-[#1B2130] border-nova' : 'border-border/15 text-ink/70 hover:border-nova/40'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {filtered.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.05}>
                <article className="rounded-3xl border border-border/10 p-6 h-full hover:border-nova/40 transition-colors">
                  <span className="eyebrow text-arjuna">{b.category}</span>
                  <h3 className="mt-4 font-display font-bold text-lg leading-snug">{b.title}</h3>
                  <p className="mt-3 text-sm text-mist leading-relaxed">{b.excerpt}</p>
                  <p className="mt-6 text-xs text-mist">{b.date}</p>
                </article>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <p className="text-sm text-mist col-span-full">No articles match that search yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
