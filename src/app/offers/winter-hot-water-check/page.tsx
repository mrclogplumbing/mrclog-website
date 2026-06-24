import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircleIcon, PhoneCallIcon, HotWaterIcon, StarIcon } from "@/components/ui/ServiceIcons";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

export const metadata: Metadata = {
  alternates: { canonical: "/offers/winter-hot-water-check" },
  title: "$49 Winter Hot Water Health Check | Mr. Clog Plumbing Sydney",
  description:
    "Don't get caught with no hot water this winter. Book Mr. Clog's $49 Winter Hot Water Health Check — fully credited toward any repair or replacement. Sydney-wide, licensed plumbers. Call (02) 9139 8945.",
};

const included = [
  "Full inspection of your hot water system (gas, electric or heat pump)",
  "Temperature & pressure relief valve check",
  "Thermostat and element / burner performance check",
  "Leak, corrosion and rust inspection on tank and fittings",
  "Tempering valve check for safe, consistent water temperature",
  "Honest report on condition, expected lifespan, and any risks",
];

const steps = [
  { step: "01", title: "Book your check", desc: "Call us or submit the form. We'll lock in a time that suits — usually same week, often same day." },
  { step: "02", title: "We inspect on-site", desc: "A licensed Mr. Clog plumber runs the full health check and explains exactly what they find — no jargon, no pressure." },
  { step: "03", title: "Credited if you proceed", desc: "If any repair or replacement is needed, the $49 is credited in full toward that work. The choice is always yours." },
];

const faqs = [
  {
    q: "What does the $49 actually cover?",
    a: "A complete on-site inspection of your hot water system by a licensed plumber, plus a clear report on its condition and any risks. If you go ahead with a recommended repair or replacement, the $49 comes straight off that bill.",
  },
  {
    q: "Why bother in winter?",
    a: "Hot water systems work hardest in winter and that's exactly when they tend to fail — usually on the coldest morning. A quick check now catches worn elements, failing thermostats and corrosion before they leave you with an icy shower.",
  },
  {
    q: "Which systems do you check?",
    a: "All of them — gas, electric, and heat pump, storage and continuous-flow, any major brand. If yours is near end of life, we'll tell you honestly and talk through the best replacement options.",
  },
  {
    q: "Is there any catch?",
    a: "No. The $49 is the full price for the check, and it's credited back if you proceed with any work. No call-out fee, no hidden charges, and you're never obligated to book repairs.",
  },
];

export default function WinterHotWaterOfferPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Winter Hot Water Health Check",
    description:
      "A complete on-site inspection of your hot water system by a licensed Sydney plumber, fully credited toward any repair or replacement.",
    price: "49.00",
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    url: "https://www.mrclog.com.au/offers/winter-hot-water-check",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
                style={{ background: "rgba(245,158,11,0.18)", border: "1px solid rgba(245,158,11,0.4)", color: "#FFD79A" }}
              >
                ❄️ Winter Special — Limited Time
              </div>
              <h1
                className="font-logo font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)", lineHeight: "1.08", letterSpacing: "-0.02em" }}
              >
                $49 Winter Hot Water Health Check
              </h1>
              <p className="font-display text-lg md:text-xl font-medium mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                Fully credited toward any repair or replacement. Don&rsquo;t get caught with no hot water on the coldest morning of the year.
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--color-brand-blue-light)" }}>
                    <HotWaterIcon size={24} />
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={16} />)}
                    <span className="ml-1 text-xs text-gray-500">5.0 · 18 reviews</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-logo font-extrabold text-5xl" style={{ color: "var(--color-dark)" }}>$49</span>
                  <span className="text-sm text-gray-500">incl. GST</span>
                </div>
                <p className="text-sm font-semibold mb-5" style={{ color: "var(--color-success)" }}>
                  Credited in full if you proceed with any work
                </p>
                <ul className="space-y-2.5 mb-6">
                  {included.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircleIcon size={16} className="flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#book" className="btn-primary w-full py-3.5 text-base font-bold">
                  Claim This Offer →
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
            What&rsquo;s Included
          </p>
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-3" style={{ color: "var(--color-dark)" }}>
            A complete once-over before winter bites
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
            One of our licensed plumbers gives your hot water system a thorough health check and an honest report — so a small issue today doesn&rsquo;t become a cold-shower emergency next week.
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
              Claim Your $49 Check
            </p>
            <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-4" style={{ color: "var(--color-dark)" }}>
              Book before the cold snap
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
                  "$49 credited in full toward any work",
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
              <input type="hidden" name="_subject" value="Winter Hot Water Health Check booking" />
              <input type="hidden" name="offer" value="Winter Hot Water Health Check ($49)" />

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
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="system">Hot Water System Type</label>
                <select id="system" name="system"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white">
                  <option value="">Select if known...</option>
                  <option>Gas storage</option>
                  <option>Gas continuous flow / instant</option>
                  <option>Electric</option>
                  <option>Heat pump</option>
                  <option>Solar</option>
                  <option>Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">Anything we should know?</label>
                <textarea id="message" name="message" rows={3} placeholder="e.g. water taking longer to heat, or system age..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none" />
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-base font-bold">
                Book My $49 Health Check →
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
            Questions about the offer
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
            Offer available for a limited time across Sydney metro. $49 includes GST and is credited toward any repair or replacement carried out by Mr. Clog. One check per household.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: "var(--color-dark)" }}>
        <div className="section-container text-center">
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl text-white mb-4">
            Beat the winter rush
          </h2>
          <p className="font-display text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Hot water systems fail when you least expect it. Lock in your $49 health check today.
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
            <Link href="/services/hot-water-systems" className="underline underline-offset-2" style={{ color: "rgba(255,255,255,0.6)" }}>
              Learn more about our hot water services →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
