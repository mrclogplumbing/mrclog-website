import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon, CheckCircleIcon, StarIcon } from "@/components/ui/ServiceIcons";

export const metadata: Metadata = {
  title: "About Mr. Clog Plumbing | Sydney's Trusted Local Plumbers",
  description:
    "Learn about Mr. Clog — Sydney's trusted local plumbers. 5-star rated, fully licensed, available 24/7. $0 call-out fee across all Sydney metro areas.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const values = [
  {
    title: "Honesty First",
    desc: "We provide upfront pricing before any work begins. No hidden fees, no surprises on your invoice.",
  },
  {
    title: "Quality Workmanship",
    desc: "We use quality materials and stand behind our work. Every job is done to Australian standards.",
  },
  {
    title: "Always Available",
    desc: "Plumbing emergencies don't follow business hours. Our team is on call 24/7, 365 days a year.",
  },
  {
    title: "Respect Your Home",
    desc: "We treat every home like it's our own — protecting surfaces, cleaning up, and leaving your property as we found it.",
  },
  {
    title: "Licensed & Insured",
    desc: "All our plumbers hold current NSW Fair Trading licences. We carry full public liability and workers compensation insurance.",
  },
  {
    title: "Fast Response",
    desc: "We aim to reach you within 60 minutes for emergencies. For standard bookings, same-day or next-day appointments are usually available.",
  },
];

const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "5.0", label: "Google Rating" },
  { value: "24/7", label: "Always Available" },
  { value: "$0", label: "Call-Out Fee" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[45vh]"
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
              Our Story
            </p>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              Sydney&rsquo;s Trusted Local Plumbers
            </h1>
            <p className="font-display text-lg text-white/80">
              Built on honesty, quality workmanship, and genuine care for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--color-brand-blue)" }} className="py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-logo font-extrabold text-3xl md:text-4xl">{stat.value}</p>
                <p className="font-display text-sm text-white/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue)" }}>
              Who We Are
            </p>
            <h2 className="font-logo font-bold text-3xl md:text-4xl mb-5" style={{ color: "var(--color-dark)" }}>
              Local Plumbers Who Actually Care
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Mr. Clog was founded with one goal: to provide Sydney homeowners and businesses with a plumbing service they could actually trust. We were tired of hearing stories about hidden fees, no-shows, and shoddy workmanship — so we built something different.
              </p>
              <p>
                We&rsquo;re a local Sydney plumbing business, not a national franchise. That means every plumber who turns up to your door is part of our team, trained to our standards, and accountable to us directly.
              </p>
              <p>
                We keep our pricing transparent, our response times fast, and our workmanship to the highest standard. Our 5-star Google rating isn&rsquo;t a marketing claim — it&rsquo;s the result of hundreds of happy customers across Sydney.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-blue-50">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(i => <StarIcon key={i} size={16} />)}
                <span className="text-sm font-semibold text-gray-700 ml-1">5.0 Google Rating</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                &ldquo;Absolutely brilliant service. Called at 11pm with a burst pipe and they were here within 45 minutes. Professional, honest pricing, and sorted the problem quickly. Can&rsquo;t recommend enough.&rdquo;
              </p>
              <p className="text-xs text-gray-400 mt-3 font-semibold">— Sarah M., Newtown</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                &ldquo;Used Mr. Clog for a bathroom renovation and they were fantastic. Turned up when they said they would, gave us a clear quote, and did a great job. Would definitely use again.&rdquo;
              </p>
              <p className="text-xs text-gray-400 mt-3 font-semibold">— Tom K., Bondi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--color-grey-100)" }} className="py-16 md:py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
              What We Stand For
            </p>
            <h2 className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <CheckCircleIcon size={22} className="mb-4" />
                <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-container py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
            Credentials
          </p>
          <h2 className="font-logo font-bold text-3xl md:text-4xl mb-8" style={{ color: "var(--color-dark)" }}>
            Licensed, Insured & Compliant
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { title: "NSW Fair Trading Licence", desc: "All our plumbers hold current NSW plumbing licences as required by law." },
              { title: "Public Liability Insurance", desc: "We carry comprehensive public liability insurance on every job." },
              { title: "Workers Compensation", desc: "Our team is covered by workers compensation insurance for your peace of mind." },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                <CheckCircleIcon size={20} className="mb-3" />
                <h3 className="font-logo font-bold text-base mb-2" style={{ color: "var(--color-dark)" }}>{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-brand-blue)" }} className="py-16">
        <div className="section-container text-center">
          <h2 className="font-logo font-extrabold text-white text-3xl md:text-4xl mb-3">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 mb-8 font-display">
            Call now or get a free quote — $0 call-out fee, 24/7 availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white font-bold rounded-full px-8 py-4 text-base transition-all hover:bg-blue-50"
              style={{ color: "var(--color-brand-blue)" }}
            >
              <PhoneCallIcon size={18} />
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-ghost-white px-8 py-4 text-base text-center">
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
