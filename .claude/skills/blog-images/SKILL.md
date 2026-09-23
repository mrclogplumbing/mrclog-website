---
name: blog-images
description: Add images to a Mr. Clog blog post, using real job photos first and generating an image only when none fits. Use from the blog-post skill for every new post, from seo-monthly when refreshing a post that has no image, or whenever asked to add or generate a blog image.
---

# Blog images

Every post gets **one lead image**, placed directly under the Quick Answer
box, and at most **two more** in the body. Images go in with
`<BlogFigure />` from `@/components/blog/BlogFigure`.

## 1. Real job photos first

`public/photos/` holds photos from actual Mr. Clog jobs, described in
`src/lib/service-photos.ts`. A real photo beats a generated one every
time — it is proof, not decoration. Read `service-photos.ts` and use a
photo when it genuinely shows what the post is about (a tree-roots post
gets the roots photo; a hot water post gets the cylinder replacement).

- Reuse the `alt` text from `service-photos.ts`.
- Write a caption as evidence, in the same voice as the captions there.
  Only say what the photo shows. Do not invent a suburb, date, or story.
- Never use `team-matthew-anthony.webp` in a blog post.

## 2. Otherwise, generate one

If no real photo fits, generate one:

```bash
node scripts/generate-image.mjs public/blog/<slug>/hero.webp "<prompt>"
```

Exit code 2 means `OPENAI_API_KEY` is not set. Publish the post without
an image and say so in the run summary. A missing image never blocks a
post.

Write the prompt as a plain description of the scene: the problem or the
part, in a Sydney home. For example, "a kitchen sink with standing grey
water and a plunger resting on the benchtop", or "an outdoor gas hot water
unit mounted on a brick wall beside a side passage". The script adds the
house style: photorealistic, no text or logos, no faces.

Rules for generated images:

- **Never depict Mr. Clog.** That means no plumbers presented as the team,
  no branded vans or uniforms, and no before-and-after "jobs". A generated
  image passed off as the business's own work is the same problem as an
  invented review, and the owner has already removed those from this site.
- **No caption.** Alt text only, describing the scene.
- **No dangerous DIY.** Never show someone working on gas fittings or
  electrics.
- Look at the result before using it. Open the file and check it. If it
  has garbled text, warped hands, or impossible plumbing, regenerate once
  with a sharper prompt. If it fails again, publish without it.
- Body images, if any, go to `public/blog/<slug>/<short-name>.webp`.
  Keep the total to three images or fewer.

## 3. Wire it into the post

```tsx
import BlogFigure from "@/components/blog/BlogFigure";

<BlogFigure src="/blog/<slug>/hero.webp" alt="..." priority />
```

Put the lead image straight after the Quick Answer box, and give it
`priority`. Then point the post's share image at it: in `metadata.openGraph`,
replace the `/og-default.png` entry with the lead image
(`width: 1536, height: 1024`). Keep `/og-default.png` if the post has no
image.
