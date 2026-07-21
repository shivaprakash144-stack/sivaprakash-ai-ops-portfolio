# Sivaprakash Settu — AI Operations Portfolio

A premium, animated portfolio built with **Next.js 15 (App Router)**, **TypeScript**,
**Tailwind CSS**, **Framer Motion**, and shadcn-style UI primitives. Positions
Sivaprakash Settu as an **AI Operations Leader, Process Automation Specialist,
and AI Transformation Manager**.

## Tech stack

- Next.js 15 (App Router, TypeScript)
- React 19
- Tailwind CSS (custom design tokens: primary `#4F46E5`, accent `#00E5FF`,
  background `#0B0F19`)
- Framer Motion (scroll reveals, animated counters, floating cards, page
  transitions)
- lucide-react icons
- shadcn-style UI primitives (`Button`, `Badge`, `Card`) built with
  `class-variance-authority` — no CLI dependency, fully editable
- Canvas-based particle background with mouse interaction
- SEO: full metadata, OpenGraph/Twitter cards, `sitemap.ts`, `robots.ts`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

> Note: `next/font/google` fetches the Inter font at build time, so an
> internet connection is required during `npm run build` (this is normal for
> any Next.js project using Google Fonts).

## Deploying

The project is ready to deploy as-is on **Vercel**:

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (auto-detected). No environment variables
   required.
4. Deploy — you'll get a live `.vercel.app` URL immediately, with the option
   to attach a custom domain afterward.

Netlify and other Next.js-compatible hosts work as well.

## Project structure

```
app/
  layout.tsx          Root layout — Inter font, SEO metadata, JSON-LD, navbar/footer
  page.tsx            Homepage — composes all sections in order
  globals.css         Tailwind layers + restrained glassmorphism/scrollbar utilities
  sitemap.ts          SEO sitemap
  robots.ts           SEO robots.txt

components/
  layout/
    navbar.tsx         Glass sticky nav, active-section highlighting, mobile menu
    footer.tsx         Socials + "Built with Next.js and AI" tagline
  sections/
    hero.tsx           Rotating headline, CTAs, animated metrics, process flow, floating dashboard
    about.tsx          Summary + recruiter "why hire me" block + quick facts
    experience.tsx     Growth-path strip + accurate 2-role vertical timeline (resume-exact)
    dashboard.tsx       Executive KPI Dashboard — bar/radial charts on real metrics
    case-studies.tsx    Consulting-grade case studies: Problem/Solution/Architecture/
                         Impact/Lessons Learned/Future Enhancements
    automation-gallery.tsx  AI & Automation Ecosystem grid (resume-verified badges)
    achievements.tsx    Luxury award cards (resume-exact) + additional highlights
    skills.tsx          Skills grouped by category as animated chips
    certifications.tsx  Certs + education + languages
    contact.tsx         CTA + contact channels
  ui/                  shadcn-style primitives (button, badge, card, section-heading)
  effects/             particle-background, scroll-progress, animated-counter,
                        scroll-reveal, glow-card, radial-gauge, bar-compare,
                        architecture-flow

lib/
  data.ts              Single source of truth for all content — resume-verified facts
                        are explicitly commented as such; anything not resume-sourced
                        is flagged (e.g. `sourceNote` on the HOA case study)
  utils.ts             cn() className merge helper

public/
  resume.pdf           Wired to every "Download Resume" button
```

## Editing content

Everything text-based — metrics, project descriptions, experience entries,
skills, achievements, certifications — lives in **`lib/data.ts`**. Update
values there and every section that references them updates automatically.
The comments in that file mark which sections are resume-verified vs.
candidate-supplied, so future edits don't accidentally blur that line.

## Notes on design system

- Dark-luxury palette: background `#050816`, indigo `#4F46E5`, electric cyan
  `#00E5FF`, emerald `#10B981` — used sparingly, never as blanket neon.
- Colors, radii, shadows, and animation keyframes are defined once in
  `tailwind.config.ts` so the whole site stays visually consistent.
- `GlowCard` gives every card a mouse-tracked cyan spotlight with a premium
  ease-out hover lift — the site's signature interaction.
- `ScrollProgress` renders a slim gradient bar at the top of the viewport.
- All animations respect `prefers-reduced-motion` where practical (the
  particle background falls back to a static frame).

## Performance & accessibility notes

- Static-generated (`○ Static`) homepage — no server round-trips.
- First Load JS is ~171kB, which is light for a site with this much motion.
- Focus-visible outlines, semantic headings, and `aria-hidden` on decorative
  elements (particles, scroll progress, icons) are in place throughout.
- I was not able to run an actual Lighthouse audit in this sandboxed
  environment (no headless Chrome available), so the >95 target is a design
  goal I built toward, not a number I've verified. Run `npm run build &&
  npm run start` and audit locally in Chrome DevTools before relying on it.

