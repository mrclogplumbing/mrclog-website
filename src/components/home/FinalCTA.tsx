import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(135deg, var(--color-brand-blue) 0%, #0068C0 100%)" }}
    >
      <div className="section-container text-center">
        <h2
          className="font-logo font-extrabold text-3xl md:text-5xl text-white mb-4"
          style={{ lineHeight: "1.1" }}
        >
          Got a Plumbing Problem Right Now?
        </h2>
        <p className="font-display text-lg md:text-xl mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
          Don&rsquo;t wait. Call us or get a free quote and we&rsquo;ll get back to you within 30 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:scale-[1.03]"
            style={{ background: "var(--color-white)", color: "var(--color-brand-blue)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
          >
            <PhoneCallIcon size={18} />
            {PHONE}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-200 hover:bg-white/20"
            style={{ border: "2px solid rgba(255,255,255,0.7)", background: "transparent" }}
          >
            Request a Free Quote →
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
          {["5.0 Google Rating", "$0 Call-Out Fee", "Respond in 30 mins", "Available 24/7"].map(item => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckIcon />{item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
