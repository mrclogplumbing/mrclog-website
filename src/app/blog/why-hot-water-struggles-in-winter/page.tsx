import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Why Your Hot Water Struggles in Winter (and How to Fix It) | Mr. Clog Blog",
  description:
    "Lukewarm showers, water that runs out fast, or no hot water at all? Here is why hot water systems struggle every Sydney winter — and what to do before yours fails.",
  openGraph: {
    type: "article",
    title: "Why Your Hot Water Struggles in Winter (and How to Fix It) | Mr. Clog Blog",
    description: "Lukewarm showers, water that runs out fast, or no hot water at all? Here is why hot water systems struggle every Sydney winter — and what to do before yours fails.",
    url: "https://www.mrclog.com.au/blog/why-hot-water-struggles-in-winter",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-06-03",
    modifiedTime: "2026-06-03",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/why-hot-water-struggles-in-winter" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "colder-inlet", title: "Colder Inlet Water" },
  { id: "higher-demand", title: "Higher Household Demand" },
  { id: "sediment", title: "Sediment Buildup" },
  { id: "thermostat", title: "Thermostat Settings" },
  { id: "ageing", title: "An Ageing System" },
  { id: "fix", title: "What to Do Now" },
  { id: "faq", title: "FAQs" },
];

export default function BlogHotWaterWinterPage() {
  return (
    <>
      <BlogPostSchema
        slug="why-hot-water-struggles-in-winter"
        title="Why Your Hot Water Struggles in Winter (and How to Fix It)"
        description="Lukewarm showers, water that runs out fast, or no hot water at all? Here is why hot water systems struggle every Sydney winter — and what to do before yours fails."
        datePublished="2026-06-03"
        faqs={[{"q":"Why does my hot water run out faster in winter?","a":"Two reasons. The mains water entering your tank in winter is much colder, so it takes more energy to heat — and once you mix it with the cold tap to get a comfortable shower temperature, you draw the hot side down faster. A tank that gave you three good showers in summer might only manage two in July."},{"q":"Is it cheaper to fix or replace an old hot water system?","a":"If your unit is under 8 years old, repair almost always wins. Past 10–12 years, replacement usually pays for itself within a couple of years through lower running costs and no more emergency callouts. Anything over 15 years should be replaced — it is living on borrowed time."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Hot Water</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>3 June 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Why Your Hot Water Struggles in Winter
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Lukewarm showers? Running out fast? Here&rsquo;s why — and how to fix it.</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Hot water systems work harder in winter for five reasons: the inlet water is much colder, households use more of it, sediment has built up over summer, thermostats are often set too low, and ageing units finally show their cracks when demand peaks. Most of these are fixable with a service — not a full replacement.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Every June, our phone starts ringing about the same thing: &ldquo;The shower goes cold halfway through.&rdquo; &ldquo;It&rsquo;s lukewarm now.&rdquo; &ldquo;It worked fine last week.&rdquo; The truth is the system didn&rsquo;t suddenly break — winter just exposed problems that were already there. Here&rsquo;s what&rsquo;s actually happening.</p>

              <h2 id="colder-inlet" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>1. The Inlet Water Is Much Colder</h2>
              <p>In summer, mains water arrives at your hot water unit at around 20°C. In winter, that drops to about 12°C in Sydney — and lower in colder pockets like the upper north shore or the Hills.</p>
              <p>That&rsquo;s an extra 8°C your system has to heat for every litre. A tank that recovers in 40 minutes in February might take 70 minutes in July. If the family lines up for back-to-back showers, the third or fourth person gets the surprise.</p>

              <h2 id="higher-demand" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Higher Household Demand</h2>
              <p>Winter showers are longer and hotter. Dishwashing happens with hotter water. People run baths instead of quick rinses. Towels, sheets, and heavy clothes get washed on warm cycles.</p>
              <p>A system rated comfortably for your family in summer can be undersized for your real winter usage. If you&rsquo;ve added a person, a tenant, or a new bathroom since the unit went in, this is often the underlying issue.</p>

              <h2 id="sediment" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. Sediment Buildup</h2>
              <p>Sydney has relatively soft water, but minerals still settle at the bottom of storage tanks over years. That layer of sediment acts as insulation between the burner or element and the water above it — meaning your system burns more gas or electricity to deliver less heat.</p>
              <p>Signs of sediment: popping or rumbling noises when the unit heats, water that&rsquo;s slightly discoloured first thing in the morning, or much higher winter bills than last year. A flush-and-service usually solves it.</p>

              <h2 id="thermostat" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. Thermostat Settings</h2>
              <p>Storage tanks should be set to 60°C at the unit (then tempered down to 50°C at bathroom outlets, per Australian regulations). Many older units have drifted lower over the years, or were never set correctly to begin with.</p>
              <p>If your thermostat is reading 50–55°C at the tank, you don&rsquo;t have a hot water problem — you have a warm water problem. A licensed plumber can adjust it safely. Don&rsquo;t turn it up yourself: you risk scalding and breach of regulation.</p>

              <h2 id="ageing" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5. An Ageing System</h2>
              <p>Most electric storage tanks last 8–12 years. Gas systems, 10–15. Continuous flow units, around 15–20. If yours is in the back half of that range and is struggling this winter, you&rsquo;re seeing the early signs of failure — not a one-off.</p>
              <p>A failing element, a corroded sacrificial anode, or a tired heat exchanger can all be replaced if you catch them early. Wait until it fails completely and you&rsquo;re looking at an emergency replacement at peak season pricing.</p>

              <h2 id="fix" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What to Do Now</h2>
              <p>Three things, in order:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Book a winter service.</strong> A licensed plumber will flush sediment, check the anode, test the thermostat, and inspect the pressure relief valve. Usually under an hour.</li>
                <li><strong>Stagger your morning showers.</strong> Five to ten minutes between users lets the tank recover. It&rsquo;s a free fix.</li>
                <li><strong>Get a recovery-time estimate.</strong> If your plumber says the tank is too small for your current household, plan the replacement now rather than during the inevitable mid-July failure.</li>
              </ul>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why does my hot water run out faster in winter?</h3>
              <p>Two reasons. The mains water entering your tank in winter is much colder, so it takes more energy to heat — and once you mix it with the cold tap to get a comfortable shower temperature, you draw the hot side down faster. A tank that gave you three good showers in summer might only manage two in July.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is it cheaper to fix or replace an old hot water system?</h3>
              <p>If your unit is under 8 years old, repair almost always wins. Past 10–12 years, replacement usually pays for itself within a couple of years through lower running costs and no more emergency callouts. Anything over 15 years should be replaced — it is living on borrowed time.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Hot Water Acting Up This Winter?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog services, repairs, and replaces hot water systems across Sydney. Same-day service for electric, gas, and continuous flow.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/hot-water-systems" className="btn-outline-white">Hot Water Services</Link>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </>
  );
}
