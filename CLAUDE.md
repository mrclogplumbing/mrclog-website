# Mr. Clog Plumbing — Project Facts

## What this is
Marketing website for Mr. Clog Plumbing, a Sydney (NSW, Australia) plumbing business. Production domain: `https://www.mrclog.com.au`. Deployed on Vercel.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- React Server Components by default
- Form handling via Formspree on `/contact`
- No CMS — content is hard-coded in TSX pages and `src/lib/`

## Repo layout
- `src/app/` — routes (App Router). Key segments: `services/[slug]`, `locations/[slug]`, `blog/<slug>`, `about`, `contact`, `privacy`, `terms`
- `src/components/` — UI. Subfolders: `home/`, `blog/`, `ui/`
- `src/lib/` — content data (services list, locations, etc.)
- `public/` — static assets. Brand images: `logo-light.webp`, `logo-dark.webp`, `favicon.svg` (no dedicated og-image asset yet; logo-light.webp is reused)

## Business facts to keep accurate when editing copy
- Phone: `(02) 9139 8945` / `tel:+61291398945`
- Email: `info@mrclog.com.au`
- NSW plumbing licence: `347993C`
- 24/7 emergency, $0 call-out fee, upfront pricing
- Service area: Sydney metro (Inner West, Eastern Suburbs, North Shore, Northern Beaches, Sutherland Shire, St George, Parramatta, Liverpool & Fairfield, Macarthur, Inner South)
- 5.0 rating (review count is currently hardcoded as 18 in several places — flag this if asked to update reviews; live source not yet wired up)

## Conventions
- Each session works on a feature branch `claude/<topic>-<id>` and pushes there. Don't push to `main`.
- Don't open PRs unless explicitly asked.
- Commit messages: short imperative subject + a short body describing the why. Match recent git log style (no Conventional Commits prefix).
- No code comments unless the why is non-obvious.

## Next.js metadata gotcha (project-specific)
`openGraph` and `twitter` metadata are NOT deep-merged between `layout.tsx` and page `metadata`. Any page that defines its own `openGraph` block must include `images` itself or the layout default is dropped. Standard image entry used across the site:
```ts
images: [{ url: "/logo-light.webp", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }]
```

## Schema / SEO
- `Plumber` JSON-LD lives in `src/app/layout.tsx`
- `BlogPostSchema` component wraps each blog post with Article + FAQPage JSON-LD
- Service and location pages emit FAQPage JSON-LD
- `src/app/sitemap.ts` and `src/app/robots.ts` are the canonical sources — update them when adding routes

## Local dev
- `npm run dev` for the dev server (port 3000)
- `npx tsc --noEmit` for type-check (requires `npm install` first)
- No test suite configured
