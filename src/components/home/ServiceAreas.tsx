import Link from "next/link";
import { MapPinIcon, ArrowRightIcon } from "@/components/ui/ServiceIcons";

const suburbs = [
  "Inner West", "Eastern Suburbs", "North Shore", "Hills District",
  "South Sydney", "Western Sydney", "CBD", "Parramatta",
  "Sutherland Shire", "Manly", "Cronulla", "Bondi",
];

const locationPages = [
  { label: "Inner West",      href: "/locations/inner-west" },
  { label: "Eastern Suburbs", href: "/locations/eastern-suburbs" },
  { label: "North Shore",     href: "/locations/north-shore" },
  { label: "Hills District",  href: "/locations/hills-district" },
  { label: "South Sydney",    href: "/locations/south-sydney" },
  { label: "Western Sydney",  href: "/locations/western-sydney" },
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
              Service Areas
            </p>
            <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-4" style={{ color: "var(--color-black)" }}>
              Serving All of Sydney
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-grey-800)" }}>
              Based in Sydney, we cover the whole metro area. Whether you&rsquo;re in the Inner West,
              Eastern Suburbs, North Shore, Hills District, or anywhere in between — we&rsquo;re on our way.
            </p>

            {/* Suburb chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {suburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--color-brand-blue-light)",
                    color: "var(--color-brand-blue)",
                    border: "1px solid rgba(26,159,255,0.2)",
                  }}
                >
                  {suburb}
                </span>
              ))}
            </div>

            <Link href="/locations" className="btn-primary">
              Check Your Suburb →
            </Link>
          </div>

          {/* Location page links */}
          <div className="grid grid-cols-2 gap-3">
            {locationPages.map(({ label, href }) => (
              <Link key={href} href={href} className="card p-4 flex items-center justify-between group no-underline">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--color-brand-blue-light)" }}
                  >
                    <MapPinIcon size={15} />
                  </div>
                  <div>
                    <p className="font-logo font-bold text-sm group-hover:text-brand-blue transition-colors" style={{ color: "var(--color-black)" }}>
                      {label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-grey-600)" }}>Sydney</p>
                  </div>
                </div>
                <ArrowRightIcon size={14} className="text-brand-blue transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
