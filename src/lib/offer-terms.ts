/**
 * The call-out fee promise, in one place.
 *
 * Most Sydney plumbers advertise "$0 call-out fee" and qualify it in the
 * footnotes — business hours only, weekdays only, or waived only for paying
 * members. The largest operator in the city restricts it to Monday to Friday,
 * 7am to 4pm, with after-hours fees "at our discretion".
 *
 * Mr. Clog's is not qualified, and that is a real point of difference that was
 * being thrown away by stating it in exactly the same three words everybody
 * else uses. The wording here is deliberately specific — nights, weekends and
 * public holidays named explicitly — so that somebody comparing two sites sees
 * the difference themselves.
 *
 * Deliberately no comparison to a named competitor anywhere on the site. A
 * comparative claim has to stay accurate, and another company's terms can
 * change without notice. Stating our own precisely does the same job and
 * cannot go stale.
 *
 * If a call-out fee is ever introduced for any circumstance, this file is the
 * first thing that has to change.
 */
export const calloutFee = {
  /** Short form for chips and stat tiles. */
  short: "$0 Call-Out Fee",
  /** The qualifier that makes it mean something. */
  qualifier: "any hour, any day",
  /** One line, for trust bars and CTAs. */
  line: "$0 call-out fee — any hour, any day",
  /** Spelled out, for the places with room to say it properly. */
  full:
    "No call-out fee, ever. Not business hours only, and not members only — nights, weekends and public holidays included. You pay for the work, not for us turning up.",
};
