---
name: blog-post
description: Write and publish new blog posts for the Mr. Clog Plumbing website (mrclog.com.au). Use whenever asked to write, add, draft, or publish a blog post/article for the site, or when a scheduled routine asks for new blog content. Covers topic selection, the exact page.tsx structure, SEO metadata, schema, and the three registration points a post must be wired into.
---

# Writing a Mr. Clog blog post

This is a Next.js 14 App Router site. Every blog post is a hand-built
`page.tsx` — there is no CMS and no markdown pipeline. A post is not
"done" until it is registered in **three** places (see Step 5).

## Business facts (never invent alternatives)

- Business: **Mr. Clog Plumbing**, Sydney, Australia
- Phone: `(02) 9139 8945` → `tel:+61291398945`
- Base URL: `https://www.mrclog.com.au`
- Locale: `en_AU` — **Australian English and Australian context throughout**
  ("litres", "metres", "colour", "tap" not "faucet", "cistern" not "tank",
  Sydney Water, NSW Fair Trading, licensed plumber)
- Standing offers to reference in CTAs: **zero call-out fee**, **upfront
  fixed pricing before work starts**, 24/7 emergency service. Existing
  posts render the first one as a dollar-sign-zero call-out — copy their
  exact wording from the reference post rather than rephrasing it.
- Never state a specific dollar price for a job, never promise an arrival
  time, never claim an award, certification, or statistic you cannot
  support. Ranges and "typically" are fine; invented precision is not.

## Step 1 — Pick two topics that do not already exist

Read the `posts` array at the top of `src/app/blog/page.tsx` first. It is
the authoritative list of what already exists. Do not duplicate a topic,
and do not write a near-identical angle on one (e.g. a second "how to
prevent blocked drains" piece).

Good topics are things a Sydney homeowner actually types into Google, and
map onto a service page in `src/lib/services.ts` or a suburb group in
`src/lib/locations.ts`. Favour:

- Symptom-led questions — "why does my drain smell", "why is my shower
  cold in the morning"
- Cost and decision guides — "should I repair or replace X"
- Do-it-before-you-call diagnostics
- Seasonal/local angles — Sydney storm season, summer water restrictions,
  older Inner West terraces, high-rise apartment plumbing
- Compliance and safety — what a licensed plumber is required to do

Avoid: anything requiring a price list, anything a homeowner should not
attempt themselves (gas work, live electrical), and topics with no
connection to a Mr. Clog service.

## Step 2 — Copy the structure of an existing post

Use `src/app/blog/why-your-toilet-keeps-running/page.tsx` as the reference
implementation. Read it before writing. Every post has, in order:

1. `metadata` export — title suffixed `| Mr. Clog Blog`, description,
   `openGraph` (type `article`, url, siteName, publishedTime,
   modifiedTime, authors, locale `en_AU`), and `alternates.canonical`.
   The `openGraph` block **must** include its own `images` entry:
   ```ts
   images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
   ```
   Next.js merges metadata shallowly, so a page that declares `openGraph`
   without `images` silently drops the site-wide share image and renders
   no `og:image` tag at all. Copy the line from any existing post.
2. `const PHONE` / `const PHONE_HREF` constants.
3. `tocItems` array — one entry per `<h2>`, ending with `{ id: "faq", title: "FAQs" }`.
4. Default export named `Blog<PascalCaseSlug>Page`.
5. `<BlogPostSchema />` with slug, title, description, `datePublished`
   (ISO `YYYY-MM-DD`), and a `faqs` array of 2–3 `{q, a}` objects.
6. Dark hero section — category pill, `date · read time`, `<h1>` (a short
   version of the title, not the full SEO title), and a one-line subtitle.
7. `<div className="section-container py-14 md:py-20">` wrapper with the
   `lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto` layout.
8. **Quick Answer box** — the blue left-bordered panel. 40–70 words that
   fully answer the headline question on its own. This is the featured
   snippet play; write it last, once the article exists.
9. Body — `<h2 id="...">` sections matching `tocItems`, `<p>` paragraphs.
10. FAQ section — `<h2 id="faq">` then `<h3>`/`<p>` pairs matching the
    `faqs` passed to `BlogPostSchema`.
11. Dark CTA panel — headline, one line of copy, phone button, and an
    outline button to the most relevant `/services/<slug>` page.
12. `<aside>` with `<TableOfContents items={tocItems} />`.

Copy the exact `className` and inline `style` values from the reference
post. The design uses CSS variables (`--color-dark`, `--color-brand-blue`,
`--color-brand-blue-light`) — do not introduce new colours or Tailwind
colour classes.

## Step 3 — Write the article

- **900–1,400 words.** Read time in the hero should be honest
  (~200 words/min, rounded): 5–7 min for most posts.
- Lead with the reader's problem in the first two sentences. No "In
  today's world" throat-clearing, no "As a homeowner, you know that…".
- Short paragraphs, 1–3 sentences. Plain language, tradesperson's voice —
  direct, confident, helpful, never salesy or breathless.
- Be genuinely useful: give the reader real diagnostics they can do
  themselves before calling. The trust earned is the marketing.
- Be clear about where DIY stops and a licensed plumber starts. For gas,
  always: leave the property, do not touch switches, call the gas
  emergency line and a licensed gas fitter.
- **Link to 2–3 other pages** using `<Link href="...">` with
  `style={{ color: "var(--color-brand-blue)" }}` — a related blog post and
  a relevant `/services/<slug>` page. Verify each target exists.
- Escape apostrophes and quotes in JSX text as `&rsquo;` `&ldquo;`
  `&rdquo;` and `&amp;` — bare `'` and `"` will fail the build.

## Step 4 — Create the file

`src/app/blog/<slug>/page.tsx` — slug is lowercase, hyphenated, keyword-led,
and matches the URL you put in `metadata`, `canonical`, and `BlogPostSchema`.

## Step 5 — Register the post in all three places

A post that is not registered is invisible. All three are required:

1. **`src/app/blog/page.tsx`** — add an entry to the **top** of the `posts`
   array (newest first) with `slug`, `title`, `excerpt` (1–2 sentences,
   ~30 words), `date` (`"25 August 2026"` format), `category`, `readTime`,
   `published: true`. Reuse an existing `category` string unless the topic
   genuinely needs a new one.
2. **`src/app/sitemap.ts`** — add the slug to the top of the `blogSlugs`
   array.
3. The post file itself must exist at `src/app/blog/<slug>/page.tsx`.

The `date` in the blog index, the hero date, `publishedTime` in metadata,
and `datePublished` in `BlogPostSchema` must all be **the same day** —
use today's actual date.

## Step 6 — Verify before committing

A fresh session starts with no `node_modules`, so install first. All
three commands must succeed. Do not commit or open a PR on a red build:

```bash
npm ci
npm run lint
npm run build
```

Fix anything that fails. The most common breakages are unescaped
apostrophes in JSX, a `<Link>` to a route that does not exist, and a
`tocItems` id with no matching `<h2 id="...">`.

A green build does **not** prove the post is correct — Next.js will
happily build a dead internal link or a broken TOC. Run this self-check on
each new post as well, and fix anything it reports:

```bash
f="src/app/blog/<slug>/page.tsx"

# TOC ids must match the h2 ids exactly
diff <(grep -o 'id: "[^"]*"' "$f" | sed 's/id: //' | tr -d '"' | sort) \
     <(grep -o '<h2 id="[^"]*"' "$f" | sed 's/<h2 id=//' | tr -d '"' | sort) \
     && echo "TOC OK"

# every internal link must resolve to a real route
for href in $(grep -o 'href="/[^"]*"' "$f" | sed 's/href=//' | tr -d '"' | sort -u); do
  if [ -f "src/app$href/page.tsx" ] || grep -q "\"${href##*/}\"" src/lib/services.ts; then
    echo "  OK   $href"; else echo "  DEAD $href"; fi
done

# read time must be honest, not guessed
w=$(grep -oE '<(p|h2|h3)[^>]*>.*</(p|h2|h3)>' "$f" | sed 's/<[^>]*>//g' | wc -w)
echo "$w words -> $(( (w + 100) / 200 )) min read"
```

Set the `readTime` in **both** the hero and the blog index entry to the
number this prints. Do not round up to make a post look meatier — a
1,000-word post is a 5 min read. If the word count comes in under 900,
the post is too thin: add substance rather than relabelling it.

## Step 7 — Commit and publish

Posts publish automatically: `main` is the production branch and Vercel
deploys every push to it. That makes Step 6 the only gate between a draft
and the live site, so it is not optional.

**Only commit to `main` if `npm run lint` and `npm run build` both
passed.** If either failed, or the self-check found a dead link, a TOC
mismatch, or a post under 900 words, do not push to `main`. Push the work
to a branch instead and report the problem:

```bash
git checkout -b blog/needs-review-<YYYY-MM-DD>
git add -A
git commit -m "Draft blog posts needing review: <reason>"
git push -u origin blog/needs-review-<YYYY-MM-DD>
```

When everything is green, publish:

```bash
git add -A
git commit -m "Add 2 blog posts: <topic one>, <topic two>"
git pull --rebase origin main
git push origin main
```

Pull with `--rebase` before pushing — the owner may have changed the site
since this session started, and a stale push will be rejected. If the
rebase produces conflicts you cannot resolve cleanly, stop and fall back
to the branch-and-report path above rather than forcing anything.

After pushing, state plainly what went live: each post's title, slug, and
live URL (`https://www.mrclog.com.au/blog/<slug>`). The owner reads that
summary in a notification instead of reviewing a pull request, so it is
the only record of what was published — make it accurate. Never overstate
it: if only one post made it, say one.
