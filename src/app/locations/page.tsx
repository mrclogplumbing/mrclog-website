import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  alternates: { canonical: "/locations" },
  title: "Service Areas Sydney | Mr. Clog Plumbing Locations",
  description:
    "Mr. Clog services every Sydney metro area — Inner West, Eastern Suburbs, North Shore, Hills, Western Sydney, Northern Beaches and more. 24/7, $0 call-out fee.",
};

export default function LocationsIndexPage() {
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
              Service Areas
            </p>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              Plumbers Across Sydney
            </h1>
            <p className="font-display text-lg text-white/80">
              Find your local Mr. Clog team — we cover every Sydney metro area.
            </p>
          </div>
        </div>
      </section>

      {/* Locations grid */}
      <section className="section-container py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="card p-6 flex flex-col group no-underline"
            >
              <h2
                className="font-logo font-bold text-lg mb-2 group-hover:text-brand-blue transition-colors"
                style={{ color: "var(--color-black)" }}
              >
                {location.label}
              </h2>
              <p className="text-sm flex-1 leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                {location.subheadline}
              </p>
              <span
                className="mt-4 text-sm font-semibold"
                style={{ color: "var(--color-brand-blue)" }}
              >
                View suburbs →
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
