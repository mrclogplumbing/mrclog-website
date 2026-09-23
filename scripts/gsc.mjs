#!/usr/bin/env node
/**
 * Pull Google Search Console data for mrclog.com.au.
 *
 * Used by the marketing skills (seo-research, website-enhancement,
 * seo-monthly) so topic and page decisions come from what people actually
 * search for, not guesses.
 *
 * Auth is a Google service account owned by Mr. Clog, added as a user on
 * the Search Console property. No dependencies: the JWT is signed with
 * node:crypto.
 *
 * Env:
 *   GSC_SA_KEY_B64  base64 of the service account JSON key
 *   GSC_SITE        property, e.g. "https://www.mrclog.com.au/"
 *
 * Usage:
 *   node scripts/gsc.mjs [days=28] > gsc.json
 *
 * Output: { range, previousRange, queries, pages, queryPages } where each
 * row carries clicks, impressions, ctr, position for the current window and
 * the same figures for the window before it (prefixed prev*), so decaying
 * and rising rows can be read straight off.
 *
 * Exits 2 with a plain message if the env vars are missing, so a skill can
 * fall back to working without Search Console instead of crashing.
 */
import { createSign } from "node:crypto";

const days = Number(process.argv[2] ?? 28);
const keyB64 = process.env.GSC_SA_KEY_B64;
const site = process.env.GSC_SITE;

if (!keyB64 || !site) {
  console.error("GSC_SA_KEY_B64 or GSC_SITE not set; Search Console unavailable.");
  process.exit(2);
}

const key = JSON.parse(Buffer.from(keyB64, "base64").toString("utf8"));

function b64url(input) {
  return Buffer.from(input).toString("base64url");
}

async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const jwt = `${header}.${claims}.${signer.sign(key.private_key, "base64url")}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error(`Token request failed: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

// Search Console data lags about three days; ending there avoids reading
// a half-filled day as a drop.
function range(offsetDays) {
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 3 - offsetDays);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - (days - 1));
  const iso = (d) => d.toISOString().slice(0, 10);
  return { startDate: iso(start), endDate: iso(end) };
}

async function query(token, dimensions, window) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ ...window, dimensions, rowLimit: 1000 }),
  });
  if (!res.ok) throw new Error(`Search Analytics query failed: ${res.status} ${await res.text()}`);
  return (await res.json()).rows ?? [];
}

function merge(current, previous) {
  const prev = new Map(previous.map((r) => [r.keys.join(" | "), r]));
  return current
    .map((r) => {
      const p = prev.get(r.keys.join(" | "));
      return {
        keys: r.keys,
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: Number(r.ctr.toFixed(4)),
        position: Number(r.position.toFixed(1)),
        prevClicks: p?.clicks ?? 0,
        prevImpressions: p?.impressions ?? 0,
        prevPosition: p ? Number(p.position.toFixed(1)) : null,
      };
    })
    .sort((a, b) => b.impressions - a.impressions);
}

const token = await accessToken();
const current = range(0);
const previous = range(days);

const out = { site, range: current, previousRange: previous };
for (const [name, dims] of [
  ["queries", ["query"]],
  ["pages", ["page"]],
  ["queryPages", ["query", "page"]],
]) {
  out[name] = merge(await query(token, dims, current), await query(token, dims, previous));
}

console.log(JSON.stringify(out, null, 2));
