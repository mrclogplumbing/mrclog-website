import { locations, type Location } from "@/lib/locations";
import { suburbPages } from "@/lib/suburbs";

/**
 * Regions and suburbs, resolved together.
 *
 * Both are the same shape and share one route, so the difference is only
 * whether `parent` is set. This module exists so nothing else has to know
 * which array an area came from, and so the two never drift apart in the
 * sitemap — the bug that hid five suburb pages from search last time the
 * sitemap was maintained by hand.
 */
export const allAreas: Location[] = [...locations, ...suburbPages];

/** Regions only — the sixteen top-level service areas. */
export const regions: Location[] = locations;

export function getArea(slug: string): Location | undefined {
  return allAreas.find((a) => a.slug === slug);
}

/** The suburb pages that sit under a given region, in alphabetical order. */
export function suburbsInRegion(regionSlug: string): Location[] {
  return suburbPages
    .filter((s) => s.parent === regionSlug)
    .sort((a, b) => a.label.localeCompare(b.label));
}

/**
 * The page for a named suburb, if one exists.
 *
 * Region pages list every suburb they cover — 274 names in total — but only a
 * couple of dozen have a page worth linking to. This turns a name into a link
 * where there is somewhere to go and leaves it as text otherwise.
 */
export function suburbPageFor(name: string): Location | undefined {
  return suburbPages.find((s) => s.label.toLowerCase() === name.toLowerCase());
}
