#!/usr/bin/env node
/**
 * Pull Microsoft Clarity behaviour data per page: rage clicks, dead
 * clicks, quick-backs, scroll depth and script errors.
 *
 * Search Console shows how people find a page; Clarity shows where they
 * get stuck on it. The website-enhancement run uses it to spot things like
 * a button people tap that does nothing, or a page nobody scrolls past.
 *
 * The Clarity export API only covers the last 1–3 days and allows 10
 * calls a day per project, so this makes ONE call. Do not loop it.
 *
 * Env:
 *   CLARITY_API_TOKEN  from Clarity > Settings > Data Export > Generate new API token
 *
 * Usage:
 *   node scripts/clarity.mjs [days=3] > clarity.json
 *
 * Exits 2 if the token is missing.
 */
const days = Math.min(3, Math.max(1, Number(process.argv[2] ?? 3)));
const token = process.env.CLARITY_API_TOKEN;

if (!token) {
  console.error("CLARITY_API_TOKEN not set; Clarity unavailable.");
  process.exit(2);
}

const res = await fetch(
  `https://www.clarity.ms/export-data/api/v1/project-live-insights?numOfDays=${days}&dimension1=URL`,
  { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } },
);
if (!res.ok) {
  console.error(`Clarity export failed: ${res.status} ${await res.text()}`);
  process.exit(1);
}

// Reshape from one block per metric into one row per page.
const pages = {};
for (const block of await res.json()) {
  for (const item of block.information ?? []) {
    const url = item.Url ?? item.URL ?? "(all)";
    const { Url, URL, ...values } = item;
    pages[url] ??= {};
    for (const [k, v] of Object.entries(values)) pages[url][`${block.metricName}.${k}`] = v;
  }
}

console.log(JSON.stringify({ days, pages }, null, 2));
