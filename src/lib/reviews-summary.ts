/**
 * Single source of truth for the Google review headline figures.
 *
 * These numbers appear on the homepage, the reviews page, both offer pages
 * and in two blocks of structured data. Before this file existed they were
 * typed by hand in six places and had drifted out of sync.
 *
 * There is no live connection to Google — update `reviewCount` and
 * `ratingValue` here whenever the real profile changes, and every surface
 * follows. Keep them honest: these figures are published as structured data,
 * and overstating them is a Google policy problem as well as a trust one.
 *
 * Last checked against the live Google profile: 25 August 2026
 */
export const reviewSummary = {
  /** Average star rating, as shown on the Google Business Profile. */
  ratingValue: "4.9",
  /** Total number of Google reviews. */
  reviewCount: 29,
  /**
   * Public Google Business Profile URL, so visitors can verify the rating
   * themselves. Set this to enable the "Read them on Google" links.
   */
  profileUrl: "",
} as const;

/** e.g. "29 Google reviews" — used in body copy. */
export const reviewCountLabel = `${reviewSummary.reviewCount} Google reviews`;
