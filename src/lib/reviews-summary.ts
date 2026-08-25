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
   * Public Google Business Profile, so visitors can verify the rating
   * themselves rather than taking the site's word for it.
   */
  profileUrl: "https://share.google/SiTBAAAuVbgFkgbHi",
  /**
   * Direct "write a review" link. Opens the star-rating box in one tap,
   * which converts far better than sending someone to the profile to find
   * the button. This is the link to put in post-job follow-up texts.
   */
  reviewUrl: "https://g.page/r/CVDiDNRCxg7ZEAE/review",
};

/** e.g. "29 Google reviews" — used in body copy. */
export const reviewCountLabel = `${reviewSummary.reviewCount} Google reviews`;
