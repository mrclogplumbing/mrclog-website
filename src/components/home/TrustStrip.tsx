function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ZeroFeeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  );
}

function StarSolidIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#1A9FFF" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const items = [
  { Icon: ClockIcon, text: "Same-Day Available" },
  { Icon: ZeroFeeIcon, text: "$0 Call-Out Fee" },
  { Icon: StarSolidIcon, text: "5.0 Google Rated" },
  { Icon: ShieldIcon, text: "Licensed & Insured" },
];

export default function TrustStrip() {
  return (
    <div style={{ background: "var(--color-dark)" }} className="border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {items.map(({ Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2.5 py-5 px-4">
              <Icon />
              <span className="text-sm font-semibold text-white">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
