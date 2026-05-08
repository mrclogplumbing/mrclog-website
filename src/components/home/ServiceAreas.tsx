"use client";
import Link from "next/link";

// Service area zones plotted on a simplified Sydney map SVG
// Coordinates are approximate positions on a 500x420 viewBox
const zones = [
  { slug: "sydney-cbd",           label: "Sydney CBD",              x: 250, y: 200, r: 22 },
  { slug: "inner-west",           label: "Inner West",              x: 200, y: 225, r: 28 },
  { slug: "eastern-suburbs",      label: "Eastern Suburbs",         x: 300, y: 228, r: 28 },
  { slug: "lower-north-shore",    label: "Lower North Shore",       x: 252, y: 148, r: 24 },
  { slug: "north-shore",          label: "North Shore",             x: 240, y: 95,  r: 30 },
  { slug: "northern-beaches",     label: "Northern Beaches",        x: 305, y: 75,  r: 26 },
  { slug: "hills-district",       label: "Hills District",          x: 155, y: 82,  r: 28 },
  { slug: "western-sydney",       label: "Western Sydney",          x: 115, y: 205, r: 35 },
  { slug: "south-sydney",         label: "South Sydney",            x: 225, y: 318, r: 32 },
  { slug: "ryde-macquarie-park",  label: "Ryde & Macquarie Park",   x: 218, y: 152, r: 22 },
  { slug: "canterbury-bankstown", label: "Canterbury-Bankstown",    x: 182, y: 275, r: 28 },
];

export default function ServiceAreas() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-grey-100, #f5f7fa)" }}>
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
              className="w-full h-auto rounded-2xl"
              style={{ background: "linear-gradient(160deg, #ddeef8 0%, #c5dff0 100%)", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.10))" }}
              aria-label="Map of Mr. Clog service areas across Greater Sydney"
            >
              {/* Ocean suggestion on the right */}
              <path d="M330 0 Q340 80 332 160 Q322 230 318 290 Q312 350 308 420 L500 420 L500 0 Z" fill="#a8d4ec" opacity="0.5" />
              {/* Zone circles */}
              {zones.map((z) => (
                <Link key={z.slug} href={`/locations/${z.slug}`}>
                  <g className="cursor-pointer group">
                    <circle
                      cx={z.x}
                      cy={z.y}
                      r={z.r}
                      fill="rgba(26,159,255,0.22)"
                      stroke="rgba(26,159,255,0.75)"
                      strokeWidth="1.5"
                      className="transition-all duration-200 group-hover:fill-[rgba(26,159,255,0.45)]"
                    />
                    {z.label.split(" ").length <= 2 ? (
                      <text x={z.x} y={z.y + 1} textAnchor="middle" dominantBaseline="middle"
                        fontSize="7" fontWeight="600" fill="#0d3d6e" className="pointer-events-none select-none"
                        style={{ fontFamily: "system-ui, sans-serif" }}>
                        {z.label}
                      </text>
                    ) : (
                      <>
                        {z.label.split(" ").map((word, i, arr) => (
                          <text key={i} x={z.x} y={z.y + (i - (arr.length - 1) / 2) * 8 + 1}
                            textAnchor="middle" dominantBaseline="middle"
                            fontSize="6.5" fontWeight="600" fill="#0d3d6e" className="pointer-events-none select-none"
                            style={{ fontFamily: "system-ui, sans-serif" }}>
                            {word}
                          </text>
                        ))}
                      </>
                    )}
                  </g>
                </Link>
              ))}
              <circle cx="18" cy="408" r="5" fill="rgba(26,159,255,0.22)" stroke="rgba(26,159,255,0.75)" strokeWidth="1.5" />
              <text x="27" y="411" fontSize="7.5" fill="#555" style={{ fontFamily: "system-ui, sans-serif" }}>Tap an area to explore</text>
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
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {z.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(26,159,255,0.07)" }}>
              <p className="text-sm text-gray-700">
                <strong>Not in the list?</strong> Call us on{" "}
                <a href="tel:+61291398945" className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                  (02) 9139 8945
                </a>{" "}
                — we cover all Greater Sydney suburbs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
