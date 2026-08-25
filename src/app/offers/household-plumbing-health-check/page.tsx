import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircleIcon, PhoneCallIcon, StarIcon } from "@/components/ui/ServiceIcons";
import { reviewSummary, reviewCountLabel } from "@/lib/reviews-summary";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

export const metadata: Metadata = {
  alternates: { canonical: "/offers/household-plumbing-health-check" },
  title: "Household Plumbing Health Check $149.99 | Mr. Clog Plumbing Sydney",
  description:
    "Mr. Clog's 10-point Household Plumbing Health Check — a whole-home inspection by a licensed Sydney plumber for $149.99 incl GST. Catch small problems before they become big bills. Call (02) 9139 8945.",
};

// The 10-point inspection — displayed as a tick-off checklist.
const checklist = [
  "Visible & hidden leak inspection — under sinks, vanities & exposed pipework",
  "All taps & mixers checked for drips and worn washers",
  "Toilets & cisterns checked for leaks and constant running",
  "Hot water system condition, safety valve & expected lifespan",
  "Laundry & washing-machine connections checked",
  "Outdoor taps, hose connections & garden lines",
  "Drains & gullies checked for free flow and early blockage signs",
  "Visible gas appliance & gas line safety check",
  "Main shut-off & isolation valves checked",
  "Main water meter checked",
];

const steps = [
  { step: "01", title: "Book your check", desc: "Call us or submit the form. We'll lock in a time that suits — often same week, frequently same day." },
  { step: "02", title: "We work the checklist", desc: "A licensed Mr. Clog plumber works through all 10 points on-site and explains what they find — no jargon, no pressure." },
  { step: "03", title: "Your written report", desc: "You get a clear health report: what's fine, what to keep an eye on, and what needs attention — with priorities." },
];

const faqs = [
  {
    q: "What does the $149.99 cover?",
    a: "A complete 10-point inspection of your home's plumbing by a licensed plumber, plus a written health report on its condition and any risks. It's $149.99 incl GST, with no call-out fee on top.",
  },
  {
    q: "How long does it take?",
    a: "Most homes take around 45–60 minutes depending on size and access. We'll give you a clear ETA when you book.",
  },
  {
    q: "Why get a health check if nothing's obviously wrong?",
    a: "Most plumbing problems start small and silent — a slow leak, a worn valve, a drain beginning to block. Catching them early is far cheaper than an emergency call-out and water damage later. A health check gives you peace of mind and a plan.",
  },
  {
    q: "Is there any catch?",
    a: "No. $149.99 incl GST is the full price and there's no call-out fee on top. You'll get an honest report and you're never obligated to proceed with any repairs we suggest.",
  },
];

export default function HouseholdHealthCheckOfferPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Household Plumbing Health Check",
    description:
      "A 10-point whole-home plumbing inspection by a licensed Sydney plumber, with a written report.",
    price: "149.99",
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    url: "https://www.mrclog.com.au/offers/household-plumbing-health-check",
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
                🏠 10-Point Whole-Home Inspection
              </div>
              <h1
                className="font-logo font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)", lineHeight: "1.08", letterSpacing: "-0.02em" }}
              >
                Household Plumbing Health Check
              </h1>
              <p className="font-display text-lg md:text-xl font-medium mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                A licensed plumber inspects your whole home and hands you an honest report — so small problems get caught before they become big bills.
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span className="flex items-center gap-1.5"><CheckCircleIcon size={16} />$0 call-out fee</span>
                <span className="flex items-center gap-1.5"><CheckCircleIcon size={16} />Licensed plumbers</span>
                <span className="flex items-center gap-1.5"><CheckCircleIcon size={16} />Sydney-wide, 7 days</span>
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
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">10-Point Health Check</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-logo font-extrabold text-5xl" style={{ color: "var(--color-dark)" }}>$149.99</span>
                </div>
                <p className="text-sm text-gray-500 mb-5">incl. GST · no call-out fee</p>
                <ul className="space-y-2.5 mb-6">
                  {checklist.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircleIcon size={16} className="flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                  <li className="text-sm font-semibold pl-6" style={{ color: "var(--color-brand-blue)" }}>
                    + 6 more checks ↓
                  </li>
                </ul>
                <a href="#book" className="btn-primary w-full py-3.5 text-base font-bold">
                  Book My Health Check →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The checklist */}
      <section className="section-container py-16 md:py-20">
        <div className="max-w-2xl mb-10">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
            What We Check
          </p>
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-3" style={{ color: "var(--color-dark)" }}>
            Your 10-point plumbing checklist
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
            Every check below is worked through on-site and ticked off in your written report — a complete picture of your home&rsquo;s plumbing health.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4" style={{ background: "var(--color-dark)" }}>
            <span className="font-logo font-bold text-white">Household Plumbing Health Check</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: "var(--color-brand-blue)" }}>
              10 checks
            </span>
          </div>
          <ul className="divide-y divide-gray-100">
            {checklist.map((item, i) => (
              <li key={item} className="flex items-center gap-4 px-6 py-4">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center"
                  style={{ background: "var(--color-brand-blue)" }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7.5l2.5 2.5L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-800 leading-snug">
                  <span className="font-semibold text-gray-400 mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 bg-gray-50 flex items-center gap-3 text-sm" style={{ color: "var(--color-grey-600)" }}>
            <CheckCircleIcon size={18} className="flex-shrink-0" />
            Plus a written health report with clear priorities and honest recommendations.
          </div>
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
              Simple, honest, no pressure
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
              Book Your Health Check
            </p>
            <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-4" style={{ color: "var(--color-dark)" }}>
              Peace of mind for $149.99
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
                  "$149.99 incl GST, all 10 checks included",
                  "$0 call-out fee, any time",
                  "NSW Fair Trading licensed & fully insured",
                  "5-star rated across Sydney",
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
              Book Your Health Check
            </h3>
            <p className="text-sm text-gray-500 mb-6">We typically respond within 30 minutes.</p>

            <form action="https://formspree.io/f/xwvwawnp" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="Household Plumbing Health Check booking" />
              <input type="hidden" name="offer" value="Household Plumbing Health Check ($149.99)" />

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
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="property">Property Type</label>
                <select id="property" name="property"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white">
                  <option value="">Select...</option>
                  <option>House</option>
                  <option>Townhouse / Villa</option>
                  <option>Apartment / Unit</option>
                  <option>Investment property</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">Anything we should know?</label>
                <textarea id="message" name="message" rows={3} placeholder="e.g. an issue you've noticed, or preferred days/times..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none" />
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-base font-bold">
                Book My Health Check →
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
            Questions about the health check
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
            $149.99 includes GST. No call-out fee. Available across Sydney metro. One health check per property.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: "var(--color-dark)" }}>
        <div className="section-container text-center">
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl text-white mb-4">
            Know your home is in good hands
          </h2>
          <p className="font-display text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Catch the small stuff before it becomes a big bill. Book your 10-point Household Plumbing Health Check today.
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
            <Link href="/services" className="underline underline-offset-2" style={{ color: "rgba(255,255,255,0.6)" }}>
              See all our plumbing services →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
