---
name: job-stories
description: Turn Anthony's job photo uploads in marketing/job-photos/inbox/ into short, honest "Recent jobs" case studies on suburb and service pages of mrclog.com.au, and publish them. Use when the daily job stories routine runs, or when asked to process job photos.
---

# Job stories

Anthony uploads 1-4 photos from one job to `marketing/job-photos/inbox/`
on GitHub from his phone, and writes what happened in the commit message
(see `marketing/job-photos/README.md`). Each run turns every new upload
into an entry in `src/lib/job-stories.ts`, which shows as "Recent Jobs in
<Suburb>" on `/locations/<suburb>` and "Recent <Service> Jobs" on
`/services/<service>`.

The rules in `.claude/skills/website-enhancement/SKILL.md` still apply:
protected files, honesty rules, checks, publish, verify, rollback. This
skill only adds `src/lib/job-stories.ts`, `public/jobs/` and the inbox.
Never touch `src/lib/service-photos.ts` or `public/photos/`.

Customer privacy and honesty come before publishing. When in doubt, leave
it out and ask Anthony.

## 1. Find new uploads

```bash
ls -R marketing/job-photos/inbox/     # anything except .gitkeep is new
# for each file: the upload commit that last touched it
git log -1 --format='%H %ad' --date=short -- "marketing/job-photos/inbox/<file>"
# that commit's notes
git log -1 --format='%s%n%b' <sha>
```

- **One upload commit = one job.** Group files by the commit that last
  touched them (a re-upload with a fuller note replaces the old one).
  Only files still in the inbox count.
- **The notes are the commit message**, subject and body together.
  GitHub fills in "Add files via upload" as the subject when he leaves it
  blank. That text alone means there are no notes.
- Nested folders or odd filenames are fine; go by the commit.

## 2. Decide whether there is enough to write

A story needs, from the notes:

- **the suburb**, and
- **what was wrong** and **what was done**, clearly enough to say each in
  a plain sentence.

The service and the date are nice to have. If there is no date, use the
month of the upload commit.

If anything required is missing or too vague to write honestly (for
example "Bondi job", or "fixed it"), do **not** guess. Leave that
upload's files in the inbox and, in the summary, ask Anthony for exactly
what is missing, naming the upload by its date and filenames. He
answers by uploading the same photos again with a full note; the newest
note wins.

## 3. Map suburb and service

- **Suburb:** match the name to a `slug` in `src/lib/suburbs.ts`
  (case-insensitive on `label`; "Parramatta" is `parramatta-cbd`,
  "the city" or "CBD" is `sydney-cbd-city`). Keep the name as written in
  `suburbLabel`.
- **No suburb page?** Still publish if the job maps to a service: use a
  lowercase hyphenated slug of the suburb name for `suburb` (it shows on
  the service page only) and say so in the summary. If it maps to neither
  a suburb page nor a service, it has nowhere to show: leave it and ask.
- **Service:** match to a `slug` in `src/lib/services.ts`, e.g. "blocked
  drain" -> `blocked-drains`, "relined" -> `pipe-relining`, "hot water" ->
  `hot-water-systems`, "CCTV" -> `cctv-drain-inspection`. Pick the one
  the job was mainly about. Leave `service` out if nothing fits.

## 4. Check every photo

Look at each photo yourself (the Read tool shows images). Reject or crop
anything showing:

- faces or people who could be recognised
- house numbers, letterboxes, street signs, number plates
- documents, invoices, mail, screens, names, phone numbers
- anything else that identifies the customer or where they live, like a
  distinctive house front with the street visible

Crop when the identifying part is at an edge and what is left still shows
the work. Otherwise reject the photo. Also reject a photo that is blurry,
unrelated to the job, or offensive. If every photo from a job is rejected,
publish the story without photos only if the notes stand on their own;
otherwise leave it and ask.

Rejected photos are not published and are removed from the inbox with the
rest. List each in the summary with the reason.

## 5. Clean and convert the photos

Every published photo must have **all metadata stripped** (EXIF, GPS,
XMP, ICC comments). Phone photos embed the customer's location.

The repository is public, so the originals in the inbox (and in git
history) are downloadable with their metadata. Check each original for
GPS (`sharp(file).metadata()` then look for `exif`, or `exiftool -gps:all`
if installed). If any upload carries GPS, say so at the top of the
summary and remind Anthony to turn off camera location (see the README)
or make the repository private. Never rewrite git history yourself.

```bash
npm install --no-save sharp   # never changes package.json or the lockfile
```

```js
// node, per photo; add .extract({ left, top, width, height }) to crop
import sharp from "sharp";
const info = await sharp(input)
  .rotate()                                   // apply EXIF orientation first
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 80 })                      // sharp drops metadata by default
  .toFile(output);
// info.width / info.height go into job-stories.ts
```

Do not call `.withMetadata()` or `.keepMetadata()`. ImageMagick
(`magick in.jpg -auto-orient -strip -resize '1600x>' -quality 80 out.webp`)
is fine too if it is installed.

**HEIC:** sharp's prebuilt binary usually can't read it. Try
`heif-convert in.heic tmp.jpg` or ImageMagick if installed, then run the
JPEG through sharp as above. If nothing can convert it, leave that upload
in the inbox and ask Anthony to switch his iPhone to Settings > Camera >
Formats > Most Compatible and upload again.

Save to `public/jobs/<yyyy-mm>-<suburb>-<short-slug>/1.webp`, `2.webp`, ...
Then confirm nothing survived:

```bash
node -e "const s=require('sharp');s(process.argv[1]).metadata().then(m=>console.log(!!m.exif,!!m.xmp,!!m.iptc))" public/jobs/<folder>/1.webp
# must print: false false false
```

## 6. Write the story

Plain Australian English, strictly from Anthony's notes:

- `title`: short and specific, e.g. "Relined a root-damaged clay sewer
  under a courtyard". No suburb in the title (the page already says it).
- `problem`: 1-3 sentences. What was wrong.
- `fix`: 1-3 sentences. What was done.
- `month`: "yyyy-mm" of the job.
- `slug`: the folder name.
- `alt`: what the photo actually shows, e.g. "Camera view of tree roots
  inside a clay sewer pipe". Never "photo 1".

Light tidying only: fix spelling, expand trade shorthand ("CCTV'd" ->
"ran a camera through it"), make it read as sentences. **Never add**
numbers, lengths, durations, prices, outcomes ("fixed for good"),
customer reactions, causes or anything else the notes don't say. Keep
every number the notes give exactly as given. No customer names, street
names or numbers, building names, or anything identifying, even if the
notes include them.

Add the entry to `jobStories` in `src/lib/job-stories.ts`. Order in the
file doesn't matter; the helpers sort newest first.

## 7. Clear the inbox

`git rm` every processed original (published and rejected) from
`marketing/job-photos/inbox/`. Keep `.gitkeep`. Uploads waiting for
details stay where they are. The originals remain in git history, so the
published WebP copies are the only ones anyone sees on the site.

## 8. Check, publish, verify

Follow sections 5-7 of the website-enhancement skill, with these paths:

```bash
git checkout -b web/<yyyy-mm-dd>-job-stories
npm ci && npm install --no-save sharp
npm run lint
npm run build
npm run start -- -p 3000 &
node scripts/smoke.mjs http://localhost:3000 --all /locations/<suburb> /services/<service>
curl -s localhost:3000/locations/<suburb> | grep -c "Recent Jobs in"   # must be 1
```

Also open each new image URL (`/jobs/<folder>/1.webp`) and check it
returns 200.

Publish as **one commit per run**, however many stories, with one line
per story at the top of `marketing/changelog.md`:

```
- 2026-10-02 web: job story "Relined a root-damaged clay sewer under a courtyard" on /locations/paddington and /services/pipe-relining
```

Other routines push to `main` too: `git pull --rebase origin main` before
pushing and retry if rejected. Verify live on https://www.mrclog.com.au
(poll for up to 10 minutes, then the live smoke test on the same paths).
Roll back with `git revert --no-edit HEAD && git push origin main` on any
failure, and say so at the top of the summary.

If a run has nothing publishable (everything waiting for details), commit
nothing and just send the summary.

## 9. Summary

Short, for Anthony, on his phone:

- **Live:** each story's title and live URL(s)
- **Not used:** each rejected photo and why ("house number visible")
- **Waiting for you:** each upload still in the inbox, its date and
  filenames, and exactly what detail is missing
- Anything that only went on a service page because the suburb has no
  page yet
