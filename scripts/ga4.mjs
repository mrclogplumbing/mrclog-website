#!/usr/bin/env node
/**
 * Pull GA4 figures that matter for a trade business: where visits come
 * from, which pages they land on, and which pages produce leads.
 *
 * Leads are the two events the site sends (see src/components/Analytics.tsx):
 * phone_call_click and generate_lead. Search Console says whether a change
 * brought more visitors; this says whether it brought more calls.
 *
 * Env:
 *   GOOGLE_SA_KEY_B64  base64 of the service account JSON key (Viewer on the property)
 *   GA4_PROPERTY_ID    numeric property ID, e.g. "498765432" (not the G- ID)
 *
 * Usage:
 *   node scripts/ga4.mjs [days=28] > ga4.json
 *
 * Output: { range, channels, landingPages, leadsByPage } for the window
 * and the window before it.
 *
 * Exits 2 if the env vars are missing.
 */
import { googleAccessToken, serviceAccountKey } from "./lib/google-auth.mjs";

const days = Number(process.argv[2] ?? 28);
const key = serviceAccountKey();
const property = process.env.GA4_PROPERTY_ID;

if (!key || !property) {
  console.error("GOOGLE_SA_KEY_B64 or GA4_PROPERTY_ID not set; GA4 unavailable.");
  process.exit(2);
}

const token = await googleAccessToken(key, "https://www.googleapis.com/auth/analytics.readonly");

const dateRanges = [
  { startDate: `${days}daysAgo`, endDate: "yesterday", name: "current" },
  { startDate: `${days * 2}daysAgo`, endDate: `${days + 1}daysAgo`, name: "previous" },
];

async function report(body) {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ dateRanges, limit: 250, ...body }),
    },
  );
  if (!res.ok) throw new Error(`GA4 report failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const dims = (data.dimensionHeaders ?? []).map((h) => h.name);
  const mets = (data.metricHeaders ?? []).map((h) => h.name);
  return (data.rows ?? []).map((r) => {
    const row = {};
    r.dimensionValues.forEach((v, i) => (row[dims[i]] = v.value));
    r.metricValues.forEach((v, i) => (row[mets[i]] = Number(v.value)));
    return row;
  });
}

const out = { property, days };

out.channels = await report({
  dimensions: [{ name: "sessionDefaultChannelGroup" }],
  metrics: [{ name: "sessions" }, { name: "engagedSessions" }],
});

out.landingPages = await report({
  dimensions: [{ name: "landingPage" }],
  metrics: [{ name: "sessions" }, { name: "engagementRate" }],
  orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
});

out.leadsByPage = await report({
  dimensions: [{ name: "pagePath" }, { name: "eventName" }],
  metrics: [{ name: "eventCount" }],
  dimensionFilter: {
    filter: {
      fieldName: "eventName",
      inListFilter: { values: ["phone_call_click", "generate_lead"] },
    },
  },
  orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
});

console.log(JSON.stringify(out, null, 2));
