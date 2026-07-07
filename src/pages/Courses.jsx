import React, { useState } from 'react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import CourseCard from '../components/CourseCard.jsx'
import { courses, categories } from '../data/courses.js'

export default function Courses() {
  const [active, setActive] = useState('All')
  const filterLabels = ['All', ...categories.map((c) => c.label)]
  const filtered = active === 'All' ? courses : courses.filter((c) => c.category === active)

  return (
    <div>
      <PageHero
        eyebrow="Courses"
        title="Every track we teach, in one place."
        description="From board-aligned school tuition to entrance-exam intensives and future-skills programmes — pick a track and see the full curriculum, faculty and pricing."
      />
      <section className="py-16 md:py-20">
        <div className="container-page">
          <Reveal className="flex flex-wrap gap-2">
            {filterLabels.map((label) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  active === label
                    ? 'bg-nova text-[#1B2130] border-nova'
                    : 'border-border/15 text-ink/75 hover:border-nova/40'
                }`}
              >
                {label}
              </button>
            ))}
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.04}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
