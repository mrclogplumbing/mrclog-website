export interface Offer {
  /** URL slug — page lives at /offers/[slug] */
  slug: string;
  /** Full offer name */
  label: string;
  /** Short one-liner used on the hub card */
  tagline: string;
  /** Headline price, e.g. "$149.99" */
  price: string;
  /** Small note next to the price, e.g. "incl GST" */
  priceNote?: string;
  /** Small pill shown on the hub card, e.g. "10-Point Inspection" */
  badge?: string;
  /** Concise text shown in the site-wide promo banner */
  bannerText: string;
  /** The single offer promoted in the top banner (only one should be true) */
  featured?: boolean;
  /** Inactive offers drop off the hub, banner and sitemap automatically */
  active: boolean;
}

export const offers: Offer[] = [
  {
    slug: "household-plumbing-health-check",
    label: "Household Plumbing Health Check",
    tagline:
      "A licensed plumber inspects your whole home and hands you an honest 10-point report — so small problems get caught before they become big bills.",
    price: "$149.99",
    priceNote: "incl GST",
    badge: "10-Point Whole-Home Inspection",
    bannerText: "10-point inspection, $149.99 incl GST",
    featured: true,
    active: true,
  },
  {
    slug: "kitchen-mixer-upgrade",
    label: "Kitchen Mixer Upgrade",
    tagline:
      "Tired tap? Swap it for a premium chrome gooseneck mixer — supplied and installed by a licensed plumber, usually in under an hour.",
    price: "$399",
    priceNote: "incl GST · supplied & installed",
    badge: "Supplied & Installed",
    bannerText: "premium chrome mixer, supplied & installed $399",
    featured: false,
    active: true,
  },
];

/** Offers currently live — used by the hub, sitemap and banner. */
export const activeOffers = offers.filter((o) => o.active);

/** The offer promoted in the top banner (falls back to the first active offer). */
export const featuredOffer =
  activeOffers.find((o) => o.featured) ?? activeOffers[0] ?? null;
