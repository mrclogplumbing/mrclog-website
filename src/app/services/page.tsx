import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Plumbing Services Sydney | Mr. Clog | Full Service List",
  description:
    "Every plumbing service Mr. Clog offers across Sydney — emergency plumbing, blocked drains, hot water, gas fitting, pipe relining and more. 24/7, $0 call-out fee.",
};

export default function ServicesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[35vh]"
        style={{ background: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative section-container py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue)" }}>
              What We Do
            </p>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              Plumbing Services Sydney
            </h1>
            <p className="font-display text-lg text-white/80">
              Every service we offer — from emergency call-outs to full bathroom renovations.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-container py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="card p-6 flex flex-col group no-underline"
            >
              <h2
                className="font-logo font-bold text-lg mb-2 group-hover:text-brand-blue transition-colors"
                style={{ color: "var(--color-black)" }}
              >
                {service.label}
              </h2>
              <p className="text-sm flex-1 leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                {service.subheadline}
              </p>
              <span
                className="mt-4 text-sm font-semibold"
                style={{ color: "var(--color-brand-blue)" }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
