#!/usr/bin/env node
/**
 * Generate one blog image with OpenAI's image model and save it as WebP.
 *
 * Only used when no real job photo in public/photos fits the post. Real
 * photos always come first; see .claude/skills/blog-images/SKILL.md.
 *
 * Env:
 *   OPENAI_API_KEY  Mr. Clog's own key
 *   IMAGE_MODEL     optional, defaults to gpt-image-1
 *
 * Usage:
 *   node scripts/generate-image.mjs <out.webp> "<prompt>"
 *
 * Exits 2 if the key is missing, so a skill can publish without an image
 * rather than fail the run.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const [out, prompt] = process.argv.slice(2);
if (!out || !prompt) {
  console.error('Usage: node scripts/generate-image.mjs <out.webp> "<prompt>"');
  process.exit(1);
}
if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY not set; skipping image generation.");
  process.exit(2);
}

// House style, appended to every prompt so images read as one set.
const STYLE =
  "Photorealistic, natural daylight, documentary style, shot on a phone by a tradesperson. " +
  "Australian (Sydney) residential setting. No text, no logos, no watermarks, no brand names. " +
  "No identifiable faces; if a person is needed, show hands or a figure from behind. " +
  "Nothing that suggests a specific company's uniform or van.";

const res = await fetch("https://api.openai.com/v1/images/generations", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: process.env.IMAGE_MODEL ?? "gpt-image-1",
    prompt: `${prompt}\n\n${STYLE}`,
    size: "1536x1024",
    quality: "medium",
    output_format: "webp",
    output_compression: 80,
    n: 1,
  }),
});

if (!res.ok) {
  console.error(`Image generation failed: ${res.status} ${await res.text()}`);
  process.exit(1);
}

const { data } = await res.json();
await mkdir(dirname(out), { recursive: true });
await writeFile(out, Buffer.from(data[0].b64_json, "base64"));
console.log(`Saved ${out}`);
