"use client";
import Link from "next/link";

// Service area zones plotted on a simplified Sydney map SVG
// Coordinates are approximate positions on a 500x480 viewBox
const zones = [
  { slug: "sydney-cbd",           label: "Sydney CBD",              x: 250, y: 190, r: 22 },
  { slug: "inner-west",           label: "Inner West",              x: 205, y: 215, r: 28 },
  { slug: "eastern-suburbs",      label: "Eastern Suburbs",         x: 295, y: 220, r: 28 },
  { slug: "lower-north-shore",    label: "Lower North Shore",       x: 250, y: 140, r: 25 },
  { slug: "north-shore",          label: "North Shore",             x: 245, y: 90,  r: 30 },
  { slug: "northern-beaches",     label: "Northern Beaches",        x: 300, y: 70,  r: 26 },
  { slug: "hills-district",       label: "Hills District",          x: 160, y: 80,  r: 28 },
  { slug: "western-sydney",       label: "Western Sydney",          x: 120, y: 200, r: 35 },
  { slug: "south-sydney",         label: "South Sydney",            x: 230, y: 310, r: 32 },
  { slug: "ryde-macquarie-park",  label: "Ryde & Macquarie Park",   x: 220, y: 148, r: 22 },
  { slug: "canterbury-bankstown", label: "Canterbury-Bankstown",    x: 185, y: 268, r: 28 },
];

export default function ServiceAreaMap() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-grey-100)" }}>
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue)" }}>
            Where We Work
          </p>
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-4" style={{ color: "var(--color-dark)" }}>
            Sydney-Wide Coverage
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From the CBD to the Hills District, we cover all of Greater Sydney. Click your area to learn more.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* SVG Map */}
          <div className="w-full max-w-sm lg:max-w-md flex-shrink-0">
            <svg
              viewBox="0 0 500 420"
              className="w-full h-auto drop-shadow-lg rounded-2xl"
              style={{ background: "linear-gradient(160deg, #e8f4f8 0%, #d0e8f0 100%)" }}
              aria-label="Map of Mr. Clog service areas in Sydney"
            >
              {/* Ocean */}
              <rect x="330" y="0" width="170" height="420" fill="#b8ddf0" opacity="0.6" />
              {/* Simple coastline suggestion */}
              <path d="M330 0 Q340 80 335 160 Q325 220 320 280 Q315 340 310 420 L500 420 L500 0 Z"
                fill="#b8ddf0" opacity="0.4" />
              {/* Zones */}
              {zones.map((z) => (
                <Link key={z.slug} href={`/locations/${z.slug}`}>
                  <circle
                    cx={z.x}
                    cy={z.y}
                    r={z.r}
                    fill="rgba(26,159,255,0.25)"
                    stroke="rgba(26,159,255,0.8)"
                    strokeWidth="1.5"
                    className="hover:fill-[rgba(26,159,255,0.5)] transition-all duration-200 cursor-pointer"
                  />
                  <text
                    x={z.x}
                    y={z.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="7"
                    fontWeight="600"
                    fill="#0d3d6e"
                    className="pointer-events-none select-none"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {z.label.split(" ").map((word, i, arr) => (
                      <tspan key={i} x={z.x} dy={i === 0 ? -(arr.length - 1) * 4 : 8}>
                        {word}
                      </tspan>
                    ))}
                  </text>
                </Link>
              ))}
              {/* Legend marker */}
              <circle cx="20" cy="400" r="6" fill="rgba(26,159,255,0.25)" stroke="rgba(26,159,255,0.8)" strokeWidth="1.5" />
              <text x="30" y="404" fontSize="8" fill="#444" fontFamily="system-ui, sans-serif">Service area — click to explore</text>
            </svg>
          </div>

          {/* Area list */}
          <div className="w-full max-w-sm">
            <h3 className="font-logo font-bold text-xl mb-5" style={{ color: "var(--color-dark)" }}>
              Our Service Areas
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {zones.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/locations/${z.slug}`}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "var(--color-brand-blue)" }}
                    />
                    {z.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{ background: "var(--color-brand-blue-light)" }}>
              <p className="text-sm text-gray-700">
                <strong>Not sure if we cover your area?</strong> Call us on{" "}
                <a href="tel:+61291398945" className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                  (02) 9139 8945
                </a>{" "}
                — we service all Greater Sydney suburbs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
