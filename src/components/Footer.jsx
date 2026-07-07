import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'

const columns = [
  {
    title: 'Learn',
    links: [
      { to: '/courses', label: 'All Courses' },
      { to: '/faculty', label: 'Faculty' },
      { to: '/success-stories', label: 'Success Stories' },
      { to: '/student-portal', label: 'Student Portal' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { to: '/products', label: 'Products' },
      { to: '/services', label: 'Services' },
      { to: '/blog', label: 'Blog' },
      { to: '/events', label: 'Events' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About Arjunova' },
      { to: '/careers', label: 'Careers' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <footer className="mt-32 border-t border-border/10">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_repeat(3,1fr)] gap-12">
          <div>
            <Link to="/" className="inline-flex items-center">
              <span className="bg-white rounded-xl px-2.5 py-1.5 shadow-sm">
                <img src="/brand/arjunova-logo-navbar.png" alt="Arjunova" className="h-9 w-auto object-contain" />
              </span>
            </Link>
            <p className="mt-4 text-sm text-mist max-w-xs leading-relaxed">
              Learn. Innovate. Excel. A single foundation for coaching today,
              and the AI-powered learning products of tomorrow.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 max-w-xs">
              <label className="eyebrow text-mist block mb-2">Newsletter</label>
              {sent ? (
                <p className="text-sm text-arjuna">You're on the list — welcome aboard.</p>
              ) : (
                <div className="flex items-center rounded-full border border-border/15 pl-4 pr-1.5 py-1.5 focus-within:border-nova/60 transition-colors">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="bg-transparent text-sm flex-1 outline-none placeholder:text-mist/70"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="w-8 h-8 grid place-items-center rounded-full bg-nova text-[#1B2130] shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-mist mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-ink/80 hover:text-nova transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/10 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist">© {new Date().getFullYear()} Arjunova Education & Technology. All rights reserved.</p>
          <a
            href="https://wa.me/919875544837"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-8 h-8 grid place-items-center rounded-full border border-border/15 text-ink/70 hover:text-arjuna hover:border-arjuna/50 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
