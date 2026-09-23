#!/usr/bin/env node
/**
 * Smoke test the site the way a customer would use it.
 *
 * The agents publish without a human reviewing, so this is the check that
 * stands in for one. A green build proves the code compiles; this proves the
 * pages load and the two things that bring in work — the phone number and
 * the enquiry form — are still there and still correct.
 *
 * Usage:
 *   node scripts/smoke.mjs [baseUrl] [--all] [/extra/path ...]
 *
 *   baseUrl  defaults to http://localhost:3000 (run `npm run start` first).
 *            Pass https://www.mrclog.com.au to check production.
 *   --all    also request every URL listed in the sitemap.
 *   paths    extra pages to check, e.g. the page a change just touched.
 *
 * Only ever requests URLs from the sitemap or the fixed list below. Never
 * guess URLs against production: every miss is a logged 404.
 *
 * Exits 1 on any failure, listing each one.
 */

const PHONE_HREF = "tel:+61291398945";
const FORMSPREE = "formspree.io/f/xwvwawnp";
const UA = "MrClogSiteAgent/1.0 (+https://www.mrclog.com.au)";

const args = process.argv.slice(2);
const base = (args.find((a) => /^https?:\/\//.test(a)) ?? "http://localhost:3000").replace(/\/$/, "");
const all = args.includes("--all");
const extra = args.filter((a) => a.startsWith("/"));

// Pages that must always work, and what each must contain.
const core = [
  { path: "/", must: [PHONE_HREF] },
  { path: "/contact", must: [PHONE_HREF, FORMSPREE] },
  { path: "/services", must: [PHONE_HREF] },
  { path: "/locations", must: [PHONE_HREF] },
  { path: "/blog", must: [PHONE_HREF] },
  { path: "/reviews", must: [PHONE_HREF] },
];

const failures = [];

async function check(path, must = [PHONE_HREF]) {
  const url = `${base}${path}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
    if (res.status !== 200) {
      failures.push(`${path}: HTTP ${res.status}`);
      return;
    }
    const html = await res.text();
    for (const needle of must) {
      if (!html.includes(needle)) failures.push(`${path}: missing ${needle}`);
    }
    if (/\[needs data\]|TODO|lorem ipsum|undefined<\/|>undefined</i.test(html)) {
      failures.push(`${path}: placeholder text in page`);
    }
  } catch (err) {
    failures.push(`${path}: ${err.message}`);
  }
}

for (const page of core) await check(page.path, page.must);
for (const path of extra) await check(path);

if (all) {
  const res = await fetch(`${base}/sitemap.xml`, { headers: { "User-Agent": UA } });
  if (!res.ok) {
    failures.push(`/sitemap.xml: HTTP ${res.status}`);
  } else {
    const xml = await res.text();
    const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
    const coreSet = new Set(core.map((c) => c.path));
    const rest = paths.filter((p) => !coreSet.has(p) && !extra.includes(p));
    // Small batches: fast locally, polite to production.
    for (let i = 0; i < rest.length; i += 5) {
      await Promise.all(rest.slice(i, i + 5).map((p) => check(p)));
    }
    console.log(`Checked ${paths.length} sitemap URLs.`);
  }
}

if (failures.length) {
  console.error(`SMOKE FAILED (${failures.length}) against ${base}:`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`SMOKE OK against ${base}`);
