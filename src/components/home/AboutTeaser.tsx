import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="section-padding" style={{ background: "var(--color-grey-100)" }}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue)" }}>
              About Us
            </p>
            <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-6" style={{ color: "var(--color-black)" }}>
              We&rsquo;re Not Your Average Plumbers
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-grey-800)" }}>
              <p>
                Mr. Clog was built by two Sydney plumbers who were tired of the industry standard:
                overcharging, slow response times, and leaving a mess. Anthony and the team bring
                the opposite — fast, honest, and affordable plumbing for Sydney homes and businesses.
              </p>
              <p>
                From a blocked drain at 2am to a full bathroom renovation, we show up on time,
                tell you the price upfront, and don&rsquo;t leave until the job is done properly.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about" className="btn-outline">
                Meet the Team →
              </Link>
            </div>
          </div>

          {/* Stats panel */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "5.0★", label: "Google Rating", sub: "18 reviews" },
              { stat: "24/7", label: "Availability", sub: "365 days a year" },
              { stat: "$0", label: "Call-Out Fee", sub: "No surprise charges" },
              { stat: "30min", label: "Avg. Response", sub: "Sydney-wide" },
            ].map(({ stat, label, sub }) => (
              <div key={label} className="card p-5 text-center">
                <div className="font-logo text-3xl font-extrabold mb-1" style={{ color: "var(--color-brand-blue)" }}>
                  {stat}
                </div>
                <div className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-black)" }}>{label}</div>
                <div className="text-xs" style={{ color: "var(--color-grey-600)" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
