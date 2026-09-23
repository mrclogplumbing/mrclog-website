# Marketing autopilot

Three scheduled Claude routines keep the site growing without anyone
reviewing each change. They write blog posts, improve pages from Search
Console data, and check each month that the changes worked. Every change
is checked before it goes live and verified after. Website changes roll
back automatically if the live check fails.

## The routines

| Routine | When (Sydney) | Runs | What goes live |
|---|---|---|---|
| Research | Mon 7am | `seo-research`, plus `seo-monthly` on the first Monday | A report and topic queue in this folder. On first Mondays, up to 2 refreshed posts and any rollbacks |
| Blog | Tue 7am | `blog-post` (with `blog-images`) | 2 new posts with images |
| Website | Wed 7am | `website-enhancement` | 1 page improvement |

Each routine ends with a short summary, which arrives as the routine's
notification. That summary is the record of what went live, and so is
`changelog.md`.

## Files

- `topic-queue.md`: next blog topics, ranked by the research run
- `changelog.md`: every published change, newest first
- `reports/`: one short search report per week
- `../.claude/skills/`: the instructions each routine follows
- `../scripts/`: `gsc.mjs` (Search Console), `smoke.mjs` (page checks),
  `generate-image.mjs` (blog images)

## Accounts (all Mr. Clog's own)

1. **Claude.** Create the routines from Mr. Clog's Claude account,
   because routines run on the account that creates them. Give its GitHub
   connection access to `mrclogplumbing/mrclog-website`, with permission to
   push to `main`.
2. **Google Search Console.** Verify `mrclog.com.au` as a Domain property.
3. **Google Analytics 4.** Done: property `G-J1TRXMCXCQ` is set in
   `src/components/Analytics.tsx`. It reports phone taps
   (`phone_call_click`) and form enquiries (`generate_lead`).
4. **Google Cloud service account**, so the agents can read Search
   Console:
   - create a project, enable the *Google Search Console API*, create a
     service account and download a JSON key
   - in Search Console, go to Settings, then Users and permissions, and add
     the service account's email as a *Restricted* user
5. **OpenAI API key** for blog images. Add a monthly spend limit; expect a
   few dollars a month.

## Cloud environment variables

Set these on the environment the routines use:

| Name | Value |
|---|---|
| `GSC_SA_KEY_B64` | the service account JSON key, base64 encoded (`base64 -i key.json`) |
| `GSC_SITE` | `sc-domain:mrclog.com.au` |
| `OPENAI_API_KEY` | from step 5 |

Every routine keeps working without these. Research falls back to site
and seasonal topics, and posts publish without generated images. Each run
says what was missing.

## Routine prompts

Paste each prompt as the routine's instructions, with this repository
selected.

**Research (Mon 7am Sydney)**
> Follow .claude/skills/seo-research/SKILL.md for mrclog.com.au. If today
> is the first Monday of the month in Sydney (check with
> `TZ=Australia/Sydney date`, not plain `date`, which is UTC), then follow
> .claude/skills/seo-monthly/SKILL.md. Finish with the summary for
> Anthony.

**Blog (Tue 7am Sydney)**
> Follow .claude/skills/blog-post/SKILL.md and write and publish two new
> posts, taking topics from marketing/topic-queue.md. Finish with the
> summary of what went live.

**Website (Wed 7am Sydney)**
> Follow .claude/skills/website-enhancement/SKILL.md and make one
> improvement to mrclog.com.au. Finish with the three-line summary.

If the scheduler takes a time zone, choose Australia/Sydney and skip the
conversion. If it asks for cron in UTC, 7am Sydney is the evening before
in UTC:

| | Mon | Tue | Wed |
|---|---|---|---|
| Daylight saving (first Sunday in Oct to first Sunday in Apr, UTC+11) | `0 20 * * 0` | `0 20 * * 1` | `0 20 * * 2` |
| Rest of the year (UTC+10) | `0 21 * * 0` | `0 21 * * 1` | `0 21 * * 2` |

UTC cron has to be changed by hand at each daylight saving switch.

If a blog routine already exists, point it at the blog prompt above
rather than creating a second one.
