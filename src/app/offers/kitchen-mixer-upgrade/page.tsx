import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircleIcon, PhoneCallIcon, StarIcon } from "@/components/ui/ServiceIcons";
import { reviewSummary, reviewCountLabel } from "@/lib/reviews-summary";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

export const metadata: Metadata = {
  alternates: { canonical: "/offers/kitchen-mixer-upgrade" },
  title: "Kitchen Mixer Upgrade $399 Supplied & Installed | Mr. Clog Plumbing Sydney",
  description:
    "Tired tap? Upgrade to a premium chrome gooseneck kitchen mixer — supplied and installed by a licensed Sydney plumber for a fixed $399 incl GST, usually in under an hour. Call (02) 9139 8945.",
};

// What's covered by the fixed $399 price.
const included = [
  "Premium chrome gooseneck mixer tap",
  "Quality fixtures supplied via Reece",
  "Full supply & professional installation",
  "Removal & disposal of your old tap",
  "Leak-tested and pressure-checked",
  "Tidy finish — we clean up after ourselves",
];

const steps = [
  { step: "01", title: "Book your time", desc: "Call us or submit the form and pick a time that suits. Same-week slots are usually available." },
  { step: "02", title: "We supply & fit", desc: "A licensed Mr. Clog plumber brings your new mixer and installs it on the spot — usually done in under an hour." },
  { step: "03", title: "Done & dusted", desc: "We leak-test, clean up, and you're enjoying your new tap the same day. Fixed price, no surprises." },
];

const faqs = [
  {
    q: "What's included in the $399?",
    a: "Supply of a premium chrome gooseneck mixer tap (quality fixtures via Reece), professional installation by a licensed plumber, removal of your old tap, and full leak testing — all for a fixed $399 incl GST.",
  },
  {
    q: "How long does it take?",
    a: "Most standard kitchen mixer swaps are done in under an hour. We'll confirm an ETA when you book.",
  },
  {
    q: "Can I choose a different tap or finish?",
    a: "The $399 covers our premium chrome gooseneck mixer. Prefer a different style or finish — matte black, brushed nickel, or a pull-out spray? Let us know and we'll quote it, with the same quality install.",
  },
  {
    q: "Are there any extra costs?",
    a: "$399 incl GST is the fixed price for a standard replacement. If your existing plumbing needs extra work — say corroded isolation valves — we'll always quote it and get your okay before doing anything.",
  },
];

export default function KitchenMixerUpgradeOfferPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Kitchen Mixer Upgrade — Supplied & Installed",
    description:
      "A premium chrome gooseneck kitchen mixer tap supplied and installed by a licensed Sydney plumber for a fixed price.",
    price: "399.00",
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    url: "https://www.mrclog.com.au/offers/kitchen-mixer-upgrade",
    seller: {
      "@type": "Plumber",
      name: "Mr. Clog Plumbing",
      telephone: "+61291398945",
      areaServed: { "@type": "City", name: "Sydney" },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[60vh]" style={{ background: "var(--color-dark)" }}>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.18) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative section-container py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "rgba(26,159,255,0.18)", border: "1px solid rgba(26,159,255,0.4)", color: "#BFE4FF" }}
              >
                🚰 Kitchen Mixer Upgrade · Limited Spots
              </div>
              <h1
                className="font-logo font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)", lineHeight: "1.08", letterSpacing: "-0.02em" }}
              >
                Tired tap? Upgrade in under an hour.
              </h1>
              <p className="font-display text-lg md:text-xl font-medium mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                Swap your worn-out kitchen tap for a premium chrome gooseneck mixer — supplied and installed by a licensed Sydney plumber for a fixed $399.
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span className="flex items-center gap-1.5"><CheckCircleIcon size={16} />$399 fixed price</span>
                <span className="flex items-center gap-1.5"><CheckCircleIcon size={16} />Installed in under 1 hour</span>
                <span className="flex items-center gap-1.5"><CheckCircleIcon size={16} />Fixtures from Reece</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={PHONE_HREF} className="btn-primary text-base px-8 py-4 inline-flex items-center justify-center gap-2">
                  <PhoneCallIcon size={18} />
                  Call {PHONE}
                </a>
                <a href="#book" className="btn-ghost-white text-base px-8 py-4 text-center">
                  Book Online →
                </a>
              </div>
            </div>

            {/* Price card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm ml-auto">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={16} />)}
                  <span className="ml-1 text-xs text-gray-500">{reviewSummary.ratingValue} · {reviewCountLabel}</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Supplied &amp; Installed</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-logo font-extrabold text-5xl" style={{ color: "var(--color-dark)" }}>$399</span>
                </div>
                <p className="text-sm text-gray-500 mb-5">incl. GST · fixed price, no surprises</p>
                <ul className="space-y-2.5 mb-6">
                  {included.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircleIcon size={16} className="flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                  <li className="text-sm font-semibold pl-6" style={{ color: "var(--color-brand-blue)" }}>
                    + more below ↓
                  </li>
                </ul>
                <a href="#book" className="btn-primary w-full py-3.5 text-base font-bold">
                  Book My Upgrade →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-container py-16 md:py-20">
        <div className="max-w-2xl mb-10">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
            What You Get
          </p>
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-3" style={{ color: "var(--color-dark)" }}>
            Fixed price. No surprises.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
            One flat $399 covers everything — the tap, the install, and tidying up after. Quality fixtures, a licensed plumber, and a finish that&rsquo;s built to last.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {included.map((item) => (
            <div key={item} className="flex items-start gap-3 p-5 card">
              <CheckCircleIcon size={20} className="flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding" style={{ background: "var(--color-grey-100)" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
              How It Works
            </p>
            <h2 className="font-logo font-extrabold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
              From tired to brand new — same day
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="card p-7">
                <span className="font-logo font-extrabold text-3xl" style={{ color: "var(--color-brand-blue)" }}>{s.step}</span>
                <h3 className="font-logo font-bold text-lg mt-3 mb-2" style={{ color: "var(--color-dark)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="section-container py-16 md:py-20 scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
              Book Your Upgrade
            </p>
            <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-4" style={{ color: "var(--color-dark)" }}>
              A brand new tap for $399
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-grey-600)" }}>
              Fill in the form and we&rsquo;ll confirm your booking — usually within 30 minutes during the day. Prefer to talk? Call us any time.
            </p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--color-brand-blue-light)" }}>
                <PhoneCallIcon size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Call us 24/7</p>
                <p className="font-logo font-bold text-lg group-hover:text-blue-500 transition-colors" style={{ color: "var(--color-dark)" }}>{PHONE}</p>
              </div>
            </a>
            <div className="p-6 rounded-2xl" style={{ background: "var(--color-brand-blue-light)" }}>
              <ul className="space-y-2">
                {[
                  "$399 incl GST — supplied & installed",
                  "Premium chrome gooseneck, fixtures from Reece",
                  "Installed in under an hour by a licensed plumber",
                  "Fixed price — no surprises",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircleIcon size={16} className="flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="font-logo font-bold text-2xl mb-2" style={{ color: "var(--color-dark)" }}>
              Book My Upgrade
            </h3>
            <p className="text-sm text-gray-500 mb-6">We typically respond within 30 minutes.</p>

            <form action="https://formspree.io/f/xwvwawnp" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="Kitchen Mixer Upgrade booking" />
              <input type="hidden" name="offer" value="Kitchen Mixer Upgrade ($399)" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="04XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="suburb">Suburb</label>
                <input id="suburb" name="suburb" type="text" placeholder="e.g. Newtown"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="finish">Preferred Finish</label>
                <select id="finish" name="finish"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white">
                  <option value="">Select if you have a preference...</option>
                  <option>Chrome gooseneck (the $399 offer)</option>
                  <option>Matte black (quote)</option>
                  <option>Brushed nickel (quote)</option>
                  <option>Pull-out spray (quote)</option>
                  <option>Not sure — recommend one</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">Anything we should know?</label>
                <textarea id="message" name="message" rows={3} placeholder="e.g. your current tap setup, or preferred days/times..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none" />
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-base font-bold">
                Book My Upgrade →
              </button>

              <p className="text-xs text-center text-gray-400">
                Or call us directly: <a href={PHONE_HREF} className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>{PHONE}</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "var(--color-grey-100)" }}>
        <div className="section-container max-w-3xl">
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-8 text-center" style={{ color: "var(--color-dark)" }}>
            Questions about the upgrade
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-logo font-bold text-base mb-2" style={{ color: "var(--color-dark)" }}>{f.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-grey-600)" }}>{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-8" style={{ color: "var(--color-grey-600)" }}>
            $399 includes GST and covers supply &amp; installation of a standard chrome gooseneck kitchen mixer. Available across Sydney metro. Limited spots. *T&amp;Cs apply.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: "var(--color-dark)" }}>
        <div className="section-container text-center">
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl text-white mb-4">
            Ready to upgrade?
          </h2>
          <p className="font-display text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Premium chrome gooseneck finish, supplied &amp; installed for a fixed $399. Limited spots — book yours today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="btn-primary text-base px-8 py-4 inline-flex items-center justify-center gap-2">
              <PhoneCallIcon size={18} />
              Call {PHONE}
            </a>
            <a href="#book" className="btn-ghost-white text-base px-8 py-4 text-center">
              Book Online →
            </a>
          </div>
          <p className="mt-6 text-sm">
            <Link href="/services/taps-and-toilets" className="underline underline-offset-2" style={{ color: "rgba(255,255,255,0.6)" }}>
              Learn more about our tap &amp; mixer services →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
