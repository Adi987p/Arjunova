# Arjunova — Website

A premium, multi-page React site for Arjunova: coaching today (CBSE, ICSE,
Cambridge, IB, JEE, NEET, and more), built as the frontend foundation for the
wider education-and-technology ecosystem described in the brief (Products,
Services, Student/Parent Portal, LMS, admin panel).

## What's included (working now)

- **Home** — hero, why-us, courses overview, stats, testimonials, faculty,
  upcoming batches, blog preview, FAQ
- **About** — vision, mission, founder story, timeline, core values, team
- **Courses** — filterable catalog + individual course pages
  (`/courses/iit-jee`, `/courses/neet`, etc.) with overview, curriculum,
  faculty, demo-video placeholder, pricing and an enroll CTA
- **Faculty** — full directory with profiles
- **Success Stories** — stats, achievements, video testimonial placeholders,
  written testimonials
- **Blog** — searchable/filterable article index
- **Events** — workshops, webinars, competitions
- **Careers** — job listings + internship programs
- **Contact** — form (Formspree-ready), WhatsApp link, map, socials
- Dark/light mode (persists via localStorage), fully responsive, animated
  with Framer Motion, accessible focus states, reduced-motion support

## What's intentionally a placeholder

**Products**, **Services**, and the **Student/Parent Portal** pages are built
as polished "coming soon" previews that show the planned feature set. They
are *not* wired to a database, authentication, or payments — that requires
backend infrastructure (see "Next steps" below) which wasn't in scope for
this frontend build.

## Logo

The real Arjunova logo (from your Gemini-generated artwork, with "Coaching"
cropped out) lives in `public/brand/`:
- `arjunova-icon.png` — icon mark only (used in the hero visual)
- `arjunova-logo-navbar.png` — icon + "ARJUNOVA" wordmark (used in nav/footer)
- `arjunova-logo-full.png` — icon + wordmark + tagline (spare, for print/social)

The navbar and footer place the logo on a small white chip so it stays
legible in both dark and light mode (the artwork's navy tones are low-contrast
directly on the dark theme's background). If you get a proper vector/SVG
version of the logo with light and dark variants down the line, swap the
`<img>` tags in `Navbar.jsx` / `Footer.jsx` directly.

## Chatbot

There's a floating chat assistant (bottom-right, every page) in
`src/components/ChatWidget.jsx`. It's **keyword-matched, not a live AI model**
— it answers common questions (courses, class levels, online/international,
demo booking, portal, contact) from a small knowledge base in that same file.

A genuinely open-ended AI chatbot needs a real backend: your frontend can't
safely hold an API key. The upgrade path once you have a backend (see "Next
steps"): add a small server route that calls the Claude API, and have this
widget call that route instead of the local keyword-matcher.

## Faculty & testimonials

Faculty are shown by role/subject (e.g. "Senior Physics Faculty") rather than
by name, and student testimonials are anonymized to a general tag (e.g. "IB DP
Student") with no name or specific score/rank attached. Edit
`src/data/content.js` to adjust either — add real names back in whenever
you're ready by adding a `name` field and updating the components that render
`faculty`/`testimonials`.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy for free

- **Vercel**: import this folder as a project, framework preset "Vite" —
  it will auto-detect `npm run build` and `dist/`.
- **Netlify**: same idea — build command `npm run build`, publish directory
  `dist`.

## Before you launch

1. **Contact form**: already wired to your Formspree endpoint
   (`xrewdero`) in `src/pages/Contact.jsx`.
2. **WhatsApp number**: already set to +91 98755 44837 in `Contact.jsx` and
   `Footer.jsx`.
3. **Content**: all course, faculty, blog, and event data lives in
   `src/data/courses.js` and `src/data/content.js` — edit those two files to
   update copy without touching any component.
4. **Fonts**: Cabinet Grotesk and Satoshi load from Fontshare's free CDN;
   JetBrains Mono from Google Fonts. No license purchase needed for web use
   at this tier, but double-check Fontshare's current terms before scaling.
5. **Logo file size**: the PNGs in `public/brand/` are a few hundred KB each
   (they're gradient-heavy). Running them through a free tool like TinyPNG
   before your final deploy will shave meaningful load time.

## Next steps for the full brief (backend-dependent)

The original brief asks for a lot that genuinely needs a backend: live
Student/Parent dashboards, LMS video streaming, payments (Stripe/Razorpay),
role-based auth, an admin panel, and a CMS. None of that can run from static
frontend code. The recommended path:

1. Migrate this app's pages into a **Next.js App Router** project (the
   component structure here maps over directly — each `src/pages/X.jsx`
   becomes `app/x/page.jsx`).
2. Add **PostgreSQL + Prisma** for courses, students, enrollments, and
   payments.
3. Add **Auth.js (NextAuth)** for role-based login (student / parent /
   faculty / admin).
4. Wire the Contact form and enroll buttons to real endpoints once the
   backend exists.

Happy to help with any of these next steps when you're ready to build them.

## Tech stack

React 18 · React Router · Tailwind CSS · Framer Motion · Lucide icons · Vite
