---
name: seo-research
description: Weekly search research for mrclog.com.au. Reads Search Console, finds what Sydney customers search for that the site does not answer well, refills the blog topic queue, and writes the weekly report. Use when the Monday routine runs, or when asked what to write next or how the site is doing in search.
---

# Weekly SEO research

This run changes no pages. It decides what the blog writer and website
enhancement runs work on this week, and it tells the owner how search is
going in plain words.

## 1. Get the data

```bash
node scripts/gsc.mjs 28 > /tmp/gsc.json      # searches
node scripts/ga4.mjs 28 > /tmp/ga4.json      # visits and leads
node scripts/clarity.mjs 3 > /tmp/clarity.json  # one call only: 10 a day allowed
```

Exit code 2 from any script means that account is not connected yet. Say
which ones are missing at the top of the report and work with the rest.
Exit code 2 from `gsc.mjs` means Search Console is not connected yet. Carry on without
it: build the queue from the site itself (services and suburbs with no
supporting post) and seasonal Sydney timing, and say at the top of the
report that no search data was available.

## 2. Read it

From `/tmp/gsc.json`:

- **Striking distance.** Queries at an average position of 8–20 with
  at least 20 impressions. The page ranks but sits just off page one. A
  better title, a section that answers the query, or a supporting post can
  lift it. Note which page ranks for each query.
- **Unanswered queries.** Queries with impressions whose ranking page is
  a poor match, like a hot water question ranking on the homepage. These
  are blog topics.
- **Decaying pages.** Pages whose clicks fell by 30% or more against the
  previous window, from at least 20 previous clicks. These go to the
  monthly refresh.
- **Wins.** Pages and queries that grew. Say what changed on them if
  `marketing/changelog.md` records it.

From `/tmp/ga4.json`:

- **Leads.** `phone_call_click` plus `generate_lead` by page, this window
  against the previous one. Leads are the number that matters most, so
  lead with them in the report.
- **Pages that get visits but no leads.** These are strong website-fix
  candidates.

From `/tmp/clarity.json`:

- Pages with rage clicks, dead clicks, a high quick-back rate, or
  script errors. A dead click on something that looks like a button is a
  good website fix.

Ignore branded queries ("mr clog", "mrclog") when picking topics.
Report their trend, though, because they track word of mouth.

## 3. Refill the topic queue

Rewrite `marketing/topic-queue.md` so it holds 4–6 unticked topics,
best first. Keep any ticked history at the bottom, trimmed to the last
20 entries. Each topic is one line:

```
- [ ] <working title> | query: "<search query>" | supports: /services/<slug> | why: <one line of evidence>
```

Good topics follow the rules in the blog-post skill, Step 1. Every topic
must link to a live service page. Never queue one that duplicates a post
in `src/lib/blog.ts`. Seasonal topics go in 3–6 weeks before the season:
storms and gutters in spring, hot water in autumn.

## 4. Pick this week's website improvement

Choose the single best candidate for the Wednesday website-enhancement
run. Usually that is the striking-distance page with the most
impressions, or a page with plenty of visits and few leads, or a Clarity
friction point on an important page. Write it into the report under "Website: this week" with the
page, the query, and what you would change.

## 5. Write the report

Write `marketing/reports/<YYYY>-W<ww>.md` (ISO week). Keep it short
enough to read on a phone, in plain words for a business owner, not an
SEO specialist:

```
# Week <ww>: search summary

**In one line:** <the headline, e.g. "Clicks up 18%, blocked drain suburb pages doing most of the work">

## Numbers (last 28 days vs the 28 before)
Leads (phone taps + form enquiries), then search clicks, impressions and
average position: this window, previous window, change.

## What is working
## What slipped
## Blog: queued this week
## Website: this week
## Needs Anthony
<only things an agent cannot do, like "a photo of a hot water install would help the hot water pages". Write "Nothing" if there is nothing.>
```

## 6. Publish

Commit only files under `marketing/`, then
`git pull --rebase origin main && git push origin main`. The commit message
is `Weekly search report W<ww>`.

End the run by pasting the report's one-line summary and its "Needs
Anthony" section. The owner reads that in the notification.

## Monthly

On the first Monday of the month (day of month 1–7), run the
`seo-monthly` skill after this one, in the same session.
