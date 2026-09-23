---
name: website-enhancement
description: Make one safe, evidence-led improvement to mrclog.com.au and publish it on autopilot. Covers the allowed and protected parts of the site, the checks every change must pass, and automatic rollback. Use when the Wednesday routine runs, or when asked to improve the site's SEO, content or conversion without a human reviewing.
---

# Weekly website enhancement

One improvement per run. It gets checked, published, verified live, and
rolled back if anything is wrong. There is no human review, so the rules
below stand in for one. When a rule and a good idea conflict, the rule
wins; put the idea in the run summary instead.

## 1. Choose the change

In order:

1. The "Website: this week" item in the newest
   `marketing/reports/*.md`, if it is still valid.
2. Otherwise, the best candidate from fresh Search Console data
   (`node scripts/gsc.mjs 28`). That is a striking-distance query, positions
   8–20, on a page you are allowed to change.
3. Otherwise, a fix from the site itself: a broken internal link, a
   missing alt text, a page title over 60 characters, a meta description
   over 160 characters, a service or location page with no FAQ.

Check `marketing/changelog.md` first. Do not touch a page that changed
in the last 28 days; its results are not in yet. Do not repeat a change
the monthly review rolled back.

## 2. What you may change

- Page titles and meta descriptions, written from the queries the page
  actually gets
- Headings and body copy on service, location, suburb and blog pages:
  a section that answers a query, an FAQ, clearer wording
- Internal links between related pages
- Structured data: missing or incorrect schema
- Alt text, and image sizing or loading
- Accessibility and mobile layout fixes on a single component
- **New suburb pages**, at most two a month (count them in the
  changelog), in the existing `*-areas.ts` files. Follow the pattern and
  the warning at the top of `src/lib/blocked-drain-areas.ts`. Every page
  must say something true and specific about that suburb. If you cannot,
  do not add the page.
- Wording on a call-to-action button, or moving an existing
  call-to-action higher on one page

## 3. What you must never change

- The phone number, any `tel:` link, `PHONE`/`PHONE_HREF` constants
- The Formspree endpoint, form fields, `QuoteForm.tsx`, the contact form
- Licence number 347993C, the ABN, anything in `privacy/` or `terms/`
- Reviews, ratings, review counts: `src/lib/reviews*.ts`,
  `review-tags.ts`. Only the owner updates these.
- Prices, offers, guarantee and response-time claims: `offers.ts`,
  `offer-terms.ts`, `guarantee.ts`, `response-times.ts`, `/offers`
- Brand colours, fonts and logo: `globals.css`, `tailwind.config.ts`,
  `Logo.tsx`
- `Header.tsx`, `Footer.tsx`, `layout.tsx`, `Analytics.tsx`,
  `next.config.mjs`, `package.json`, the lockfile, `sitemap.ts`, `robots.ts`
- Page URLs. Never rename or delete a page, because that breaks links
  and rankings.
- `src/lib/service-photos.ts` and `public/photos/`

Anything in this list that looks worth changing goes in the summary as a
suggestion for Anthony.

## 4. Honesty rules

Everything written on the site must be true. Never invent a statistic,
price, testimonial, customer, job story, award or response time. Never
change a claim to make it stronger. Use Australian English. Gas and
electrical content always ends at "call a licensed professional".

## 5. Make and check the change

```bash
git checkout -b web/<yyyy-mm-dd>-<short-name>
# make the change: keep it to one page or one component, ideally under 6 files
npm ci
npm run lint
npm run build
npm run start -- -p 3000 &   # wait until it answers
node scripts/smoke.mjs http://localhost:3000 --all <changed paths>
```

All of these must pass. If they fail and you cannot fix the change
within scope, stop: push the branch, report why, and publish nothing.

## 6. Publish

```bash
git checkout main && git pull --rebase origin main
git merge --squash web/<branch> && git commit -m "<what changed, for a person>"
git push origin main
```

Add one line to the top of `marketing/changelog.md` in the same commit:

```
- 2026-09-30 web: /services/hot-water - rewrote title for "hot water repairs sydney" (was pos 11)
```

## 7. Verify live, roll back if wrong

Vercel deploys `main` in a few minutes. Poll the changed page on
https://www.mrclog.com.au until your change appears, for up to 10 minutes.
Then run:

```bash
node scripts/smoke.mjs https://www.mrclog.com.au <changed paths>
```

If the change never appears, or the live smoke test fails, roll back:

```bash
git revert --no-edit HEAD && git push origin main
```

Wait for that deploy, run the live smoke test again, and report the
rollback plainly at the top of the summary.

## 8. Summary

End with three lines for the owner:
- **Changed:** what, on which page, and the live URL
- **Why:** the evidence, such as the query and its position
- **Suggestions:** anything worth doing that was off-limits, or "none"
