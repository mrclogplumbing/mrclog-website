import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

export const metadata: Metadata = {
  alternates: { canonical: "/guarantee" },
  title: "12-Month Workmanship Guarantee | Mr. Clog Plumbing",
  description:
    "Every Mr. Clog plumbing job is backed by a 12-month workmanship guarantee. If our work fails because of our workmanship, we come back and fix it — free.",
  openGraph: {
    type: "website",
    title: "12-Month Workmanship Guarantee | Mr. Clog Plumbing",
    description:
      "Every Mr. Clog plumbing job is backed by a 12-month workmanship guarantee. If our work fails because of our workmanship, we come back and fix it — free.",
    url: "https://www.mrclog.com.au/guarantee",
    siteName: "Mr. Clog Plumbing",
    locale: "en_AU",
    images: [{ url: "/logo-light.webp", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
};

export default function GuaranteePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[34vh]"
        style={{ background: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative section-container py-12 md:py-16">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}
            >
              Our Promise
            </span>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              12-Month Workmanship Guarantee
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              Every job we do is backed in writing. If it&rsquo;s not right, we come back and fix it — free.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-container py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Callout */}
          <div
            className="rounded-2xl p-6 mb-12 border-l-4"
            style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}
          >
            <p
              className="font-logo font-bold text-sm uppercase tracking-wider mb-2"
              style={{ color: "var(--color-brand-blue)" }}
            >
              Our promise to you
            </p>
            <p className="text-gray-700 leading-relaxed">
              When a licensed Mr. Clog plumber does a job at your property, our work is guaranteed for{" "}
              <strong>12 months</strong> from the date of completion. If anything we&rsquo;ve installed or repaired fails due to our
              workmanship in that time, we&rsquo;ll return and rectify it at no cost to you — no labour fee, no call-out fee, no arguments.
            </p>
          </div>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-logo font-bold text-2xl mb-3" style={{ color: "var(--color-dark)" }}>
                What&rsquo;s covered
              </h2>
              <p>
                If any plumbing work we&rsquo;ve performed develops a fault due to our workmanship within 12 months of the job
                being completed, we&rsquo;ll come back and put it right — free of charge. That covers the time, labour, and any
                materials needed to remedy the workmanship issue.
              </p>
            </div>

            <div>
              <h2 className="font-logo font-bold text-2xl mb-3" style={{ color: "var(--color-dark)" }}>
                What&rsquo;s not covered
              </h2>
              <ul className="space-y-2">
                {[
                  "Damage caused by misuse, accidents, tampering, or work carried out by another tradesperson after we leave",
                  "Normal wear and tear of fixtures, tap washers, seals, and consumable parts",
                  "Issues caused by pre-existing problems beyond the scope of the original job",
                  "Manufacturer defects in parts and equipment — these are covered separately by the product manufacturer's own warranty (typically 1–10 years depending on the brand)",
                  "Blockages caused by foreign objects, tree-root regrowth in pipes we haven't relined, or new blockages in a different section of the drain",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--color-brand-blue)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-logo font-bold text-2xl mb-3" style={{ color: "var(--color-dark)" }}>
                How to make a claim
              </h2>
              <p className="mb-3">
                Just call us on{" "}
                <a href={PHONE_HREF} className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                  {PHONE}
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@mrclog.com.au"
                  className="font-semibold"
                  style={{ color: "var(--color-brand-blue)" }}
                >
                  info@mrclog.com.au
                </a>{" "}
                with your invoice number and a brief description of the issue. We&rsquo;ll arrange a return visit, usually
                within 24–48 hours.
              </p>
            </div>

            <div>
              <h2 className="font-logo font-bold text-2xl mb-3" style={{ color: "var(--color-dark)" }}>
                Your consumer rights
              </h2>
              <p>
                This guarantee is offered <strong>in addition</strong> to your rights under the Australian Consumer Law.
                Nothing in this guarantee limits, replaces, or excludes any consumer guarantees you have under the law.
              </p>
            </div>

            <div className="rounded-xl p-5 border border-gray-200 bg-gray-50">
              <p className="text-sm">
                <strong>Mr. Clog Plumbing</strong> — Licensed and insured Sydney plumbers.
                <br />
                NSW Plumbing Licence No. <strong>347993C</strong>. Full public liability and workers compensation insurance held.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-12 rounded-2xl p-8 text-center"
            style={{ background: "var(--color-brand-blue-light)" }}
          >
            <h3 className="font-logo font-bold text-xl mb-2" style={{ color: "var(--color-dark)" }}>
              Need a plumber you can trust?
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              24/7 emergency service. $0 call-out. Every job backed by our 12-month guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={PHONE_HREF}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm"
              >
                <PhoneCallIcon size={16} />
                Call {PHONE}
              </a>
              <Link href="/contact" className="btn-outline text-sm px-6 py-3 text-center">
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
