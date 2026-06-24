import type { Metadata } from "next";
import Link from "next/link";
import { activeOffers } from "@/lib/offers";

export const metadata: Metadata = {
  alternates: { canonical: "/offers" },
  title: "Special Offers & Promotions | Mr. Clog Plumbing Sydney",
  description:
    "Current plumbing specials and promotions from Mr. Clog. Save on inspections, repairs and more — licensed Sydney plumbers, 24/7, $0 call-out fee. Call (02) 9139 8945.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

export default function OffersIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[35vh]" style={{ background: "var(--color-dark)" }}>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative section-container py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue)" }}>
              Specials & Promotions
            </p>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              Current Offers
            </h1>
            <p className="font-display text-lg text-white/80">
              Great value from Sydney&rsquo;s 5-star plumbers — every job still backed by our $0 call-out fee and upfront pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Offers grid */}
      <section className="section-container py-16 md:py-20">
        {activeOffers.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {activeOffers.map((offer) => (
              <Link
                key={offer.slug}
                href={`/offers/${offer.slug}`}
                className="card p-7 flex flex-col group no-underline"
              >
                {offer.badge && (
                  <span
                    className="inline-flex w-fit items-center mb-4 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{ background: "var(--color-brand-blue-light)", color: "var(--color-brand-blue-hover)" }}
                  >
                    {offer.badge}
                  </span>
                )}
                <h2
                  className="font-logo font-bold text-xl mb-2 group-hover:text-brand-blue transition-colors"
                  style={{ color: "var(--color-black)" }}
                >
                  {offer.label}
                </h2>
                <p className="text-sm flex-1 leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                  {offer.tagline}
                </p>
                <div className="flex items-end justify-between mt-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-logo font-extrabold text-3xl" style={{ color: "var(--color-dark)" }}>
                      {offer.price}
                    </span>
                    {offer.priceNote && (
                      <span className="text-xs" style={{ color: "var(--color-grey-600)" }}>{offer.priceNote}</span>
                    )}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                    View offer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-xl">
            <p className="text-lg mb-2 font-semibold" style={{ color: "var(--color-dark)" }}>
              No specials running right now.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
              We always offer a $0 call-out fee and upfront pricing — call us any time for a free quote.
            </p>
          </div>
        )}

        <div className="mt-12">
          <a href={PHONE_HREF} className="btn-primary">
            Call {PHONE} →
          </a>
        </div>
      </section>
    </>
  );
}
