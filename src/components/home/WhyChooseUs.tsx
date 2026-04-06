function ZeroFeeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.4 2.4L17 3.5l.9 2.7 2.7.9-1 2.7 1.9 2.2-1.9 2.2 1 2.7-2.7.9-.9 2.7-2.7-.9L12 22l-2.4-2.4L7 20.5l-.9-2.7-2.7-.9 1-2.7L2.5 12l1.9-2.2-1-2.7 2.7-.9.9-2.7 2.7.9z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function StarBadgeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const reasons = [
  { Icon: ZeroFeeIcon, title: "$0 Call-Out Fee",   description: "No charge just for showing up. You only pay when we fix your problem." },
  { Icon: ClockIcon,   title: "24/7 Availability", description: "Including weekends and public holidays. Plumbing emergencies don't keep office hours." },
  { Icon: TagIcon,     title: "Upfront Pricing",   description: "You'll know the full cost before we start. No surprise charges, no add-ons mid-job." },
  { Icon: BadgeCheckIcon, title: "Fully Licensed", description: "NSW Fair Trading licensed and fully insured — public liability and workers compensation." },
  { Icon: StarBadgeIcon,  title: "5-Star Service", description: "Perfect Google rating from real Sydney customers. We're proud of it and intend to keep it." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: "var(--color-dark)" }}>
      <div className="section-container">

        <div className="text-center mb-12">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
            Why Mr. Clog
          </p>
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl text-white">
            Why Sydneysiders Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(26,159,255,0.15)" }}
              >
                <Icon />
              </div>
              <h3 className="font-logo font-bold text-base text-white mb-2">{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
