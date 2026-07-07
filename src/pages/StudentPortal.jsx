import React, { useState } from 'react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import { LayoutDashboard, CalendarCheck, FileText, BookOpen, ClipboardList, Award, Bell, Lock } from 'lucide-react'

const studentFeatures = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: CalendarCheck, label: 'Attendance' },
  { icon: FileText, label: 'Assignments' },
  { icon: BookOpen, label: 'Notes' },
  { icon: ClipboardList, label: 'Tests' },
  { icon: Award, label: 'Certificates' },
]

const parentFeatures = [
  { icon: LayoutDashboard, label: "Child's Performance" },
  { icon: CalendarCheck, label: 'Attendance' },
  { icon: FileText, label: 'Fee Status' },
  { icon: Bell, label: 'Teacher Communication' },
  { icon: ClipboardList, label: 'Reports' },
]

export default function StudentPortal() {
  const [tab, setTab] = useState('student')
  const features = tab === 'student' ? studentFeatures : parentFeatures

  return (
    <div>
      <PageHero
        eyebrow="Student & Parent Portal"
        title="Your dashboard for everything Arjunova."
        description="Attendance, tests, assignments and progress reports, in one login. The portal is in active development — here's what it will include at launch."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-[1fr_0.85fr] gap-14 items-start">
          <div>
            <Reveal className="flex gap-2">
              <button
                onClick={() => setTab('student')}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${tab === 'student' ? 'bg-nova text-[#1B2130] border-nova' : 'border-border/15 text-ink/70'}`}
              >
                Student Portal
              </button>
              <button
                onClick={() => setTab('parent')}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${tab === 'parent' ? 'bg-nova text-[#1B2130] border-nova' : 'border-border/15 text-ink/70'}`}
              >
                Parent Portal
              </button>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.04}>
                  <div className="rounded-2xl border border-border/10 p-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-nova/10 grid place-items-center shrink-0">
                      <f.icon className="w-4 h-4 text-nova" />
                    </span>
                    <span className="text-sm font-medium">{f.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-8">
              <span className="w-11 h-11 rounded-2xl bg-arjuna/10 grid place-items-center">
                <Lock className="w-5 h-5 text-arjuna" />
              </span>
              <h3 className="mt-5 font-display font-bold text-xl">Login opens with your enrollment.</h3>
              <p className="mt-3 text-sm text-mist leading-relaxed">
                Portal credentials are issued automatically when you enroll in any Arjunova
                course. Already a student? Ask your batch coordinator for your login.
              </p>
              <div className="mt-6 space-y-3 opacity-60 pointer-events-none">
                <input placeholder="Student ID or phone" className="w-full rounded-xl border border-border/15 bg-transparent px-4 py-3 text-sm" />
                <input placeholder="Password" type="password" className="w-full rounded-xl border border-border/15 bg-transparent px-4 py-3 text-sm" />
                <button className="w-full rounded-full bg-nova text-[#1B2130] font-semibold px-6 py-3 text-sm">Log in</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
