import Link from "next/link";
import {
  EmergencyIcon, DrainIcon, HotWaterIcon, TapIcon,
  PipeIcon, LeakIcon, JettIcon, GasIcon,
  ArrowRightIcon,
} from "@/components/ui/ServiceIcons";

const services = [
  { Icon: EmergencyIcon, title: "Emergency Plumbing", description: "Burst pipes, flooding, gas leaks — we're there fast", href: "/services/emergency-plumbing" },
  { Icon: DrainIcon,     title: "Blocked Drains",     description: "Clear any drain, any size, same day",              href: "/services/blocked-drains" },
  { Icon: HotWaterIcon,  title: "Hot Water Systems",  description: "Installation, repair & replacement of all brands", href: "/services/hot-water-systems" },
  { Icon: TapIcon,       title: "Taps & Toilets",     description: "Repairs, replacements & upgrades",                 href: "/services/taps-and-toilets" },
  { Icon: PipeIcon,      title: "Pipe Relining",      description: "No-dig pipe repairs that last 50+ years",          href: "/services/pipe-relining" },
  { Icon: LeakIcon,      title: "Leak Detection",     description: "Find hidden leaks before they cost you more",      href: "/services/leak-detection" },
  { Icon: JettIcon,      title: "Jett Blasting",      description: "High-pressure drain cleaning for serious clogs",   href: "/services/jett-blasting" },
  { Icon: GasIcon,       title: "Gas Fitting",        description: "Licensed gas work for appliances & installations", href: "/services/gas-fitting" },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">

        <div className="text-center mb-12">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
            What We Do
          </p>
          <h2 className="font-logo font-extrabold text-3xl md:text-4xl mb-4" style={{ color: "var(--color-black)" }}>
            Everything Plumbing, All Across Sydney
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-grey-600)" }}>
            From a dripping tap to a full renovation — we handle it all, with upfront pricing and same-day availability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, description, href }) => (
            <Link key={href} href={href} className="card p-6 flex flex-col group no-underline">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: "var(--color-brand-blue-light)" }}
              >
                <Icon size={22} />
              </div>
              <h3
                className="font-logo font-bold text-base mb-2 group-hover:text-brand-blue transition-colors"
                style={{ color: "var(--color-black)" }}
              >
                {title}
              </h3>
              <p className="text-sm flex-1 leading-relaxed" style={{ color: "var(--color-grey-600)" }}>
                {description}
              </p>
              <span
                className="mt-4 text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
                style={{ color: "var(--color-brand-blue)" }}
              >
                Learn More
                <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
