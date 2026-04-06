import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { PhoneCallIcon, StarIcon } from "@/components/ui/ServiceIcons";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";
const EMAIL = "info@mrclog.com.au";

const serviceLinks = [
  { label: "Emergency Plumbing",   href: "/services/emergency-plumbing" },
  { label: "Blocked Drains",       href: "/services/blocked-drains" },
  { label: "Hot Water Systems",    href: "/services/hot-water-systems" },
  { label: "Taps & Toilets",       href: "/services/taps-and-toilets" },
  { label: "Pipe Relining",        href: "/services/pipe-relining" },
  { label: "Leak Detection",       href: "/services/leak-detection" },
  { label: "Jett Blasting",        href: "/services/jett-blasting" },
  { label: "Gas Fitting",          href: "/services/gas-fitting" },
  { label: "Bathroom Renovations", href: "/services/bathroom-renovations" },
  { label: "Roof Plumbing",        href: "/services/roof-plumbing" },
];

const locationLinks = [
  { label: "Inner West",      href: "/locations/inner-west" },
  { label: "Eastern Suburbs", href: "/locations/eastern-suburbs" },
  { label: "North Shore",     href: "/locations/north-shore" },
  { label: "Hills District",  href: "/locations/hills-district" },
  { label: "South Sydney",    href: "/locations/south-sydney" },
  { label: "Western Sydney",  href: "/locations/western-sydney" },
];

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)" }} className="text-white">
      {/* Emergency CTA bar */}
      <div style={{ background: "var(--color-brand-blue)" }} className="py-4">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-semibold text-white">
            Plumbing emergency? We answer 24/7, 365 days a year.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white font-bold rounded-full px-6 py-2.5 text-sm transition-all duration-150 hover:bg-blue-50"
            style={{ color: "var(--color-brand-blue)" }}
          >
            <PhoneCallIcon size={15} />
            Call {PHONE}
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" height={52} />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Sydney&rsquo;s trusted plumbers. 5-star rated, available 24/7, $0 call-out fee.
            </p>
            <div className="mt-5 space-y-2.5">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors">
                <PhoneCallIcon size={15} />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                <MailIcon />
                {EMAIL}
              </a>
              <p className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                <MapPinIcon />
                Serving all Sydney metro areas
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5">
              {[1,2,3,4,5].map(i => <StarIcon key={i} size={14} />)}
              <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.65)" }}>5.0 Google Rating</span>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider mb-4 text-white opacity-60">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-150 hover:text-white" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations column */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider mb-4 text-white opacity-60">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors duration-150 hover:text-white" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider mb-4 text-white opacity-60">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us",        href: "/about" },
                { label: "Blog",            href: "/blog" },
                { label: "Contact",         href: "/contact" },
                { label: "Get a Free Quote",href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition-colors duration-150 hover:text-white" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
              <p className="font-display text-xs font-semibold mb-1 text-white">Credentials</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>NSW Fair Trading Licensed Plumber</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>Fully Insured — Public Liability &amp; Workers Compensation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          <p>© {new Date().getFullYear()} Mr. Clog Plumbing. All rights reserved. ABN [XXXXXXXX]</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
