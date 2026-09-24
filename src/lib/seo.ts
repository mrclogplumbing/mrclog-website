import type { Metadata } from "next";

/**
 * Page titles that fit in Google's results.
 *
 * Google shows roughly the first 60 characters of a title. The root layout
 * appends " | Mr. Clog Plumbing" (20 characters) to every page title, which
 * pushed most suburb and service titles to 65-85 characters and got the end
 * cut off. This keeps the page's own words first, then adds as much of the
 * brand as still fits:
 *
 *   up to 40 characters  -> "Title | Mr. Clog Plumbing" (via the template)
 *   up to 49 characters  -> "Title | Mr. Clog"
 *   longer               -> "Title" on its own
 *
 * Keep the title itself at 60 characters or fewer; `npm run build` does not
 * check this, the site review does.
 */
const FULL_BRAND = " | Mr. Clog Plumbing";
const SHORT_BRAND = " | Mr. Clog";
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

export function pageTitle(title: string): Metadata["title"] {
  if (title.length + FULL_BRAND.length <= TITLE_MAX) return title;
  if (title.length + SHORT_BRAND.length <= TITLE_MAX) return { absolute: title + SHORT_BRAND };
  return { absolute: title };
}
