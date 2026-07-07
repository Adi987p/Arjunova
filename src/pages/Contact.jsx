import React, { useState } from 'react'
import { PageHero } from '../components/ui.jsx'
import Reveal from '../components/Reveal.jsx'
import { MessageCircle, Mail, Globe2, Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    try {
      const res = await fetch('https://formspree.io/f/xrewdero', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need help with."
        description="Book a free demo, ask about a course, or just say hello — we teach fully online, so wherever you're joining from, we reply within a day."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-[1fr_0.9fr] gap-14">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-mist">Name</label>
                  <input name="name" required className="mt-1.5 w-full rounded-xl border border-border/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-nova/50" />
                </div>
                <div>
                  <label className="text-xs font-medium text-mist">Phone / WhatsApp</label>
                  <input name="phone" required className="mt-1.5 w-full rounded-xl border border-border/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-nova/50" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-mist">Email</label>
                <input type="email" name="email" required className="mt-1.5 w-full rounded-xl border border-border/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-nova/50" />
              </div>
              <div>
                <label className="text-xs font-medium text-mist">Country</label>
                <input name="country" placeholder="India, UAE, Singapore, etc." className="mt-1.5 w-full rounded-xl border border-border/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-nova/50" />
              </div>
              <div>
                <label className="text-xs font-medium text-mist">Class / Level</label>
                <select name="class_level" className="mt-1.5 w-full rounded-xl border border-border/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-nova/50">
                  <option>Class 1–5 (Foundation, All Subjects)</option>
                  <option>Class 6–8</option>
                  <option>Class 9–10 (CBSE/ICSE/Cambridge IGCSE)</option>
                  <option>Class 11–12 / IB DP (CBSE, ICSE, Cambridge A-Level, IB)</option>
                  <option>IIT JEE</option>
                  <option>NEET</option>
                  <option>Coding, Data Science & AI</option>
                  <option>Spoken English & Personality Development</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-mist">Message</label>
                <textarea name="message" rows={4} className="mt-1.5 w-full rounded-xl border border-border/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-nova/50 resize-none" />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-nova text-[#1B2130] font-semibold px-6 py-3.5 hover:brightness-105 transition-all disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'} <Send className="w-4 h-4" />
              </button>
              {status === 'sent' && <p className="text-sm text-arjuna">Thanks — we'll be in touch within a day.</p>}
              {status === 'error' && <p className="text-sm text-red-500">Something went wrong. Try WhatsApp instead?</p>}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-3xl border border-border/10 p-7">
              <a
                href="https://wa.me/919875544837"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <span className="w-11 h-11 rounded-2xl bg-arjuna/10 grid place-items-center">
                  <MessageCircle className="w-5 h-5 text-arjuna" />
                </span>
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-xs text-mist">+91 98755 44837 — fastest way to reach us</p>
                </div>
              </a>
            </div>
            <div className="rounded-3xl border border-border/10 p-7 space-y-5">
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-2xl bg-nova/10 grid place-items-center">
                  <Mail className="w-5 h-5 text-nova" />
                </span>
                <div>
                  <p className="font-semibold text-sm">arjunovaclasses@gmail.com</p>
                  <p className="text-xs text-mist">Email us</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-2xl bg-nova/10 grid place-items-center">
                  <Globe2 className="w-5 h-5 text-nova" />
                </span>
                <div>
                  <p className="font-semibold text-sm">100% Online</p>
                  <p className="text-xs text-mist">Teaching students across India and abroad — join from anywhere</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
