/**
 * Single source of truth for how fast we say we are.
 *
 * These were typed by hand in a dozen places and had drifted into three
 * different promises: 30 minutes on the homepage, contact page, reviews page
 * and both offer pages; 60 minutes on the About page and the emergency
 * plumbing service; and 30-60 minutes in the emergency FAQ. A visitor
 * comparing two pages of this site could catch it out.
 *
 * They are two different claims and the site was conflating them:
 *
 *   `arrival`  — how long until a plumber is at the door. This one is a
 *                measurable performance representation. Claiming a 30 minute
 *                average across sixteen regions from the Inner West to
 *                Macarthur is not achievable by two plumbers and not
 *                defensible under the Australian Consumer Law. Sixty minutes
 *                is what the emergency page already promised.
 *
 *   `enquiry`  — how long until someone replies to a web form or email.
 *                The owner confirmed two hours (24 Sep 2026); the contact
 *                page had been saying both 2 hours and 30 minutes.
 *
 * Keep them honest. If the real numbers change, change them here.
 */
export const responseTimes = {
  /** Time to attend an emergency callout. */
  arrival: "under 60 minutes",
  /** Short form for stat tiles and chips. */
  arrivalShort: "<60min",
  /** Time to reply to a website enquiry during the day. */
  enquiry: "within 2 hours",
  /** Short form for chips. */
  enquiryShort: "2 hr reply",
};
