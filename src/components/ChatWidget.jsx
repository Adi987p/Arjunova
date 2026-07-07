import React, { useEffect, useRef, useState } from 'react'
import { MessageSquareText, X, Send, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

// Lightweight keyword-matched assistant. It answers common questions
// instantly without needing a backend — good enough for FAQ-style queries.
// For genuinely open-ended AI conversation, this would need to call a real
// model from a server (never expose an API key in frontend code) — see
// README "AI chatbot" section for the upgrade path.
const knowledgeBase = [
  {
    keywords: ['class', 'lower', 'young', 'primary', 'lkg', 'ukg', 'lower class', 'grade 1', 'grade 2', 'class 1', 'class 2', 'class 3', 'class 4', 'class 5'],
    answer: 'Yes — we teach lower classes too. Our Foundation Programme covers all subjects for Class 1–5 in one online classroom, built for younger learners.',
  },
  {
    keywords: ['international', 'abroad', 'foreign', 'outside india', 'country', 'usa', 'uae', 'dubai', 'singapore', 'uk', 'overseas'],
    answer: 'Arjunova teaches Indian and international students alike — everything runs fully online, so you can join from anywhere in the world. We also cover Cambridge and IB curricula used internationally.',
  },
  {
    keywords: ['online', 'offline', 'location', 'centre', 'center', 'address', 'where are you'],
    answer: 'Arjunova is 100% online — there is no physical centre to visit. All classes, tests and doubt sessions happen through our online classroom.',
  },
  {
    keywords: ['jee', 'iit'],
    answer: 'Our IIT JEE Main & Advanced track covers Class 11–12 with concept-first teaching, weekly problem-solving labs, and full-length mock tests. Check the Courses page for the full curriculum.',
  },
  {
    keywords: ['neet', 'medical'],
    answer: 'Our NEET Medical Entrance track focuses on NCERT-anchored Biology, Chemistry and Physics with weekly NEET-pattern assessments. See the Courses page for details.',
  },
  {
    keywords: ['ib', 'cambridge', 'igcse', 'a-level', 'a level'],
    answer: 'We offer IB DP (AA & AI, HL/SL) and Cambridge IGCSE/A-Level Mathematics tutoring, including Internal Assessment and Extended Essay mentoring — taught online for students anywhere.',
  },
  {
    keywords: ['coding', 'ai', 'data science', 'robotics', 'programming'],
    answer: 'Our Coding, Data Science & AI course is project-based, covering Python, web development and applied AI/ML for Class 8 and above.',
  },
  {
    keywords: ['fee', 'fees', 'price', 'pricing', 'cost', 'how much'],
    answer: 'Fees vary by course — you can see indicative pricing on each course page, and every course starts with a free diagnostic session. For an exact quote, message us on WhatsApp or the contact form.',
  },
  {
    keywords: ['demo', 'trial', 'free class', 'free session'],
    answer: 'Every course includes a free diagnostic/demo session before you commit. Head to the Contact page and select your class level to book one.',
  },
  {
    keywords: ['portal', 'dashboard', 'login', 'attendance', 'assignment'],
    answer: 'The Student & Parent Portal (attendance, assignments, tests, progress reports) is in active development. You can preview what it will include on the Student Portal page.',
  },
  {
    keywords: ['whatsapp', 'contact', 'call', 'phone', 'reach', 'talk to someone'],
    answer: 'The fastest way to reach us is WhatsApp — there\u2019s a link right in the footer and Contact page. You can also email hello@arjunova.in.',
  },
  {
    keywords: ['faculty', 'teacher', 'tutor', 'who teaches'],
    answer: 'Our faculty are subject specialists chosen for teaching clarity, not just credentials — you can see qualifications and experience (without personal names, for now) on the Faculty page.',
  },
]

const fallback =
  "I don't have a specific answer for that yet, but our team will! Try the Contact page or WhatsApp us directly, linked in the footer."

function getAnswer(text) {
  const lower = text.toLowerCase()
  let best = null
  let bestScore = 0
  for (const entry of knowledgeBase) {
    const score = entry.keywords.reduce((acc, kw) => (lower.includes(kw) ? acc + 1 : acc), 0)
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }
  return best ? best.answer : fallback
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi! I'm the Arjunova Assistant. Ask me about courses, class levels, online classes, or how to book a free demo.",
    },
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const send = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    const answer = getAnswer(text)
    setMessages((m) => [...m, { from: 'user', text }, { from: 'bot', text: answer }])
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm glass rounded-3xl shadow-2xl border border-border/10 flex flex-col overflow-hidden" style={{ height: 440 }}>
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/10">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-nova/15 grid place-items-center">
                <Sparkles className="w-4 h-4 text-nova" />
              </span>
              <div>
                <p className="text-sm font-semibold">Arjunova Assistant</p>
                <p className="text-[11px] text-mist">Quick answers, instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="w-7 h-7 grid place-items-center rounded-full hover:bg-border/10">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm leading-relaxed rounded-2xl px-4 py-2.5 ${
                  m.from === 'bot'
                    ? 'bg-nova/10 text-ink rounded-tl-sm'
                    : 'bg-nova text-[#1B2130] ml-auto rounded-tr-sm'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border/10">
            <p className="px-2 pb-2 text-[10px] text-mist">
              Need a real person? <Link to="/contact" onClick={() => setOpen(false)} className="text-nova font-medium">Contact us</Link> or use WhatsApp.
            </p>
            <form onSubmit={send} className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                className="flex-1 rounded-full border border-border/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-nova/50"
              />
              <button
                type="submit"
                aria-label="Send"
                className="w-9 h-9 shrink-0 grid place-items-center rounded-full bg-nova text-[#1B2130]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle chat assistant"
        className="w-14 h-14 rounded-full bg-nova text-[#1B2130] shadow-xl grid place-items-center hover:brightness-105 transition-all ml-auto"
      >
        {open ? <X className="w-5 h-5" /> : <MessageSquareText className="w-5 h-5" />}
      </button>
    </div>
  )
}
