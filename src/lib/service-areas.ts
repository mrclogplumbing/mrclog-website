import type { Location } from "@/lib/locations";
import { suburbPages } from "@/lib/suburbs";

/**
 * A service, written for one suburb.
 *
 * Shared by the blocked drains and pipe relining suburb pages so the two
 * cannot drift apart. Adding a third service means a data file and a
 * three-line route, not another copy of a 250-line page.
 */
export interface ServiceArea {
  /** Matches a slug in src/lib/suburbs.ts. */
  suburb: string;
  /** One paragraph on what this service looks like in this suburb. */
  intro: string;
  /**
   * What is specific to this suburb. Two or three, never padded to three —
   * a third weak point is worse than two strong ones.
   */
  causes: { title: string; body: string }[];
  /** Questions this suburb actually raises. */
  faqs: { q: string; a: string }[];
}

/** The suburb page an area belongs to, for breadcrumbs and links. */
export function suburbForArea(area: ServiceArea): Location | undefined {
  return suburbPages.find((s) => s.slug === area.suburb);
}

/** Every suburb in a set, labelled and sorted, for listing on a service page. */
export function areaLinks(areas: ServiceArea[]): { slug: string; label: string }[] {
  return areas
    .map((a) => {
      const s = suburbPages.find((x) => x.slug === a.suburb);
      return s ? { slug: a.suburb, label: s.label } : null;
    })
    .filter((x): x is { slug: string; label: string } => x !== null)
    .sort((a, b) => a.label.localeCompare(b.label));
}
