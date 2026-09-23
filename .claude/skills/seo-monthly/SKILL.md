---
name: seo-monthly
description: Monthly SEO pass for mrclog.com.au. Checks whether last month's blog posts and website changes worked, rolls back changes that hurt, refreshes up to two decaying or near-page-one blog posts, and runs a technical check. Runs after seo-research on the first Monday of the month, or when asked for a monthly SEO review.
---

# Monthly SEO pass

## 1. Did last month's changes work?

Pull 28-day data (`node scripts/gsc.mjs 28`). For every
`marketing/changelog.md` entry from 28–60 days ago, compare the page
against the previous window:

- **Worked:** clicks or average position clearly improved. Keep it.
- **No change yet, or too little data:** leave it, and check again next
  month.
- **Hurt:** clicks fell by 30% or more from at least 30 previous clicks,
  and nothing else explains it, such as a sitewide drop or a season. Revert
  that `web:` change with `git revert <sha>`. Never revert a blog post; if a
  post is underperforming, it becomes a refresh candidate instead. Log the
  revert in the changelog so the weekly run does not try the change again.

If Search Console is not connected, skip this section and say so.

## 2. Refresh up to two blog posts

Candidates, best first:

1. Posts in striking distance (positions 8–20) for a query with real
   impressions
2. Posts whose clicks decayed by 30% or more
3. Posts with no image. Add one using the blog-images skill.

For each post: improve the title and description for the query it
actually gets, answer that query in the Quick Answer box or a new
section, fix anything outdated, and add a link from a newer related
post. Update `modifiedTime` in metadata to today. Never change the slug,
`datePublished`, or the date shown in the blog index. Follow the writing
and verification rules in the blog-post skill, Steps 3 and 6.

## 3. Technical check

```bash
npm ci && npm run build && npm run start -- -p 3000 &
node scripts/smoke.mjs http://localhost:3000 --all
node scripts/smoke.mjs https://www.mrclog.com.au --all
```

Also check, from the built pages:
- Every page has exactly one `<h1>`, a title of 60 characters or fewer,
  and a description of 160 characters or fewer
- No two pages share a title
- Every blog post and service page has FAQ structured data where it has
  visible FAQs

Fix what you are allowed to fix under the website-enhancement rules. List
the rest.

## 4. Publish and report

Publish refreshes the way blog-post Step 7 does: lint, build and smoke
must all be green, then push to `main`, then run the live smoke test.
Add `refresh:` and `revert:` lines to `marketing/changelog.md`.

Append a "## Monthly" section to this week's report in
`marketing/reports/`: what worked, what was rolled back, what was
refreshed, technical issues found. End the run with a three-line summary
for Anthony.
