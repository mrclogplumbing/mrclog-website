import type { Metadata } from "next";
import { PhoneCallIcon, MapPinIcon, CheckCircleIcon } from "@/components/ui/ServiceIcons";

export const metadata: Metadata = {
  title: "Contact Mr. Clog Plumbing | Get a Free Quote | Sydney",
  description:
    "Contact Mr. Clog Plumbing for a free quote or to book a plumber in Sydney. Call (02) 9139 8945 or fill in the form — we respond within 30 minutes.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";
const EMAIL = "info@mrclog.com.au";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[40vh]"
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
              Get in Touch
            </p>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              Contact Mr. Clog
            </h1>
            <p className="font-display text-lg text-white/80">
              Free quotes, fast responses. We&rsquo;re available 24/7 for emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-container py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact details */}
          <div>
            <h2 className="font-logo font-bold text-2xl mb-6" style={{ color: "var(--color-dark)" }}>
              Get in Touch
            </h2>

            <div className="space-y-4 mb-8">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--color-brand-blue-light)" }}>
                  <PhoneCallIcon size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Phone</p>
                  <p className="font-logo font-bold text-lg group-hover:text-blue-500 transition-colors" style={{ color: "var(--color-dark)" }}>{PHONE}</p>
                  <p className="text-xs text-gray-400">Available 24/7, 365 days a year</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--color-brand-blue-light)" }}>
                  <MailIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Email</p>
                  <p className="font-logo font-bold text-lg group-hover:text-blue-500 transition-colors" style={{ color: "var(--color-dark)" }}>{EMAIL}</p>
                  <p className="text-xs text-gray-400">We reply within 2 hours during business hours</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--color-brand-blue-light)" }}>
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Service Area</p>
                  <p className="font-logo font-bold text-lg" style={{ color: "var(--color-dark)" }}>All Sydney Metro Areas</p>
                  <p className="text-xs text-gray-400">Inner West, Eastern Suburbs, North Shore, Hills, South & West</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--color-brand-blue-light)" }}>
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Hours</p>
                  <p className="font-logo font-bold text-lg" style={{ color: "var(--color-dark)" }}>24 Hours, 7 Days</p>
                  <p className="text-xs text-gray-400">Emergency line always open — $0 call-out fee</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: "var(--color-brand-blue-light)" }}>
              <h3 className="font-logo font-bold text-base mb-3" style={{ color: "var(--color-dark)" }}>
                Why Choose Mr. Clog?
              </h3>
              <ul className="space-y-2">
                {[
                  "$0 call-out fee, any time of day",
                  "5-star rated on Google",
                  "NSW Fair Trading licensed plumbers",
                  "Fully insured — public liability & workers comp",
                  "Upfront pricing before work starts",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircleIcon size={16} className="flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="font-logo font-bold text-2xl mb-2" style={{ color: "var(--color-dark)" }}>
                Get a Free Quote
              </h2>
              <p className="text-sm text-gray-500 mb-6">We typically respond within 30 minutes.</p>

              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ focusRingColor: "var(--color-brand-blue)" } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="04XX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="suburb">
                    Suburb
                  </label>
                  <input
                    id="suburb"
                    name="suburb"
                    type="text"
                    placeholder="e.g. Newtown"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service">
                    Type of Job
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Emergency Plumbing</option>
                    <option>Blocked Drains</option>
                    <option>Hot Water Systems</option>
                    <option>Taps &amp; Toilets</option>
                    <option>Pipe Relining</option>
                    <option>Leak Detection</option>
                    <option>Jett Blasting</option>
                    <option>Gas Fitting</option>
                    <option>Bathroom Renovations</option>
                    <option>Roof Plumbing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                    Tell Us More
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe the issue or what you need done..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-base font-bold"
                >
                  Send Enquiry →
                </button>

                <p className="text-xs text-center text-gray-400">
                  Or call us directly: <a href={PHONE_HREF} className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>{PHONE}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
