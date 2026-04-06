import Link from "next/link";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0">
      <circle cx="7" cy="7" r="7" fill="#1A9FFF" opacity="0.2" />
      <path d="M4 7l2 2 4-4" stroke="#1A9FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#F59E0B" : "none"} stroke="#F59E0B" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center min-h-[90vh] pt-16"
      style={{ background: "var(--color-dark)" }}
      aria-label="Hero"
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.18) 100%)" }}
        aria-hidden="true"
      />
      {/* Decorative blue circle */}
      <div
        className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1A9FFF 0%, transparent 70%)", transform: "translate(30%, -20%)" }}
        aria-hidden="true"
      />

      <div className="relative section-container w-full py-20 md:py-28">
        <div className="max-w-3xl">

          {/* Trust badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "rgba(26,159,255,0.15)", border: "1px solid rgba(26,159,255,0.3)", color: "rgba(255,255,255,0.9)" }}
          >
            <span className="flex items-center gap-0.5">
              {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
            </span>
            <span>5.0 Google Rating · 18 Reviews</span>
          </div>

          {/* H1 */}
          <h1
            className="font-logo font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
          >
            Sydney&rsquo;s Most Trusted Plumbers
          </h1>

          {/* Subheadline */}
          <p className="font-display text-lg md:text-xl font-medium mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>
            5-Star Rated &nbsp;·&nbsp; Available 24/7 &nbsp;·&nbsp; $0 Call-Out Fee &nbsp;·&nbsp; Fully Licensed &amp; Insured
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            <span className="flex items-center gap-1.5"><CheckIcon />Licensed Plumber No. 347993C</span>
            <span className="flex items-center gap-1.5"><CheckIcon />Same-Day Available</span>
            <span className="flex items-center gap-1.5"><CheckIcon />Sydney-Wide Coverage</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a href={PHONE_HREF} className="btn-primary text-base px-8 py-4 text-center inline-flex items-center justify-center gap-2">
              <PhoneIcon />
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-ghost-white text-base px-8 py-4 text-center">
              Get a Free Quote →
            </Link>
          </div>

          {/* Micro-copy */}
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            <em>We typically respond within 30 minutes. No hidden fees. No surprises.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
