/**
 * Access token for a Google service account, signed with node:crypto so
 * the scripts need no dependencies.
 *
 * Env: GOOGLE_SA_KEY_B64, the service account JSON key, base64 encoded.
 * One Mr. Clog service account serves Search Console and GA4; it is added
 * as a user on each.
 */
import { createSign } from "node:crypto";

export function serviceAccountKey() {
  const b64 = process.env.GOOGLE_SA_KEY_B64;
  if (!b64) return null;
  return JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
}

export async function googleAccessToken(key, scope) {
  const b64url = (s) => Buffer.from(s).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: key.client_email,
      scope,
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
