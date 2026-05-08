import type { Metadata } from "next";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";

export const metadata: Metadata = {
  title: "7 Signs Your Hot Water System Is About to Fail | Mr. Clog Blog",
  description:
    "Don't get caught with a cold shower. These 7 warning signs mean your hot water system is struggling — and what to do before it fails completely.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "age", title: "1. It's Over 10 Years Old" },
  { id: "rust", title: "2. Rusty or Discoloured Water" },
  { id: "noise", title: "3. Rumbling or Popping Noises" },
  { id: "leaks", title: "4. Pooling Water or Leaks" },
  { id: "temperature", title: "5. Inconsistent Temperature" },
  { id: "running-out", title: "6. Running Out of Hot Water" },
  { id: "bills", title: "7. Rising Energy Bills" },
  { id: "repair-vs-replace", title: "Repair or Replace?" },
  { id: "faq", title: "FAQs" },
];

export default function BlogHotWaterPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[38vh]"
        style={{ background: "var(--color-dark)" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Hot Water</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>8 May 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              7 Signs Your Hot Water System Is About to Fail
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              Catch the warning signs before you&rsquo;re left with a cold shower
            </p>
          </div>
        </div>
      </section>

      {/* Article + TOC */}
      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">

          {/* Article */}
          <article>
            {/* Quick Answer */}
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                The seven key warning signs are: the system is over 10 years old, you&rsquo;re getting rusty or discoloured water, the unit is making unusual noises, you can see water pooling around it, the temperature is inconsistent, you&rsquo;re running out of hot water faster than usual, or your energy bills have risen unexpectedly.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>A hot water system failure rarely happens without warning. Most systems give clear signals weeks or even months before they break down completely &mdash; if you know what to look for. Acting early means you can plan a replacement on your terms rather than dealing with an emergency callout on a Saturday night.</p>
              <p>Here are the seven warning signs every Sydney homeowner should know.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="age" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>1. It&rsquo;s Over 10 Years Old</h2>
              <p>Most hot water systems &mdash; whether electric, gas, solar, or heat pump &mdash; have a typical lifespan of 8 to 12 years. After the 10-year mark, the risk of failure increases significantly, and the cost of ongoing repairs often exceeds the cost of a new system.</p>
              <p>Check the label on your unit for the manufacture date. If you can&rsquo;t find it, a Mr. Clog plumber can identify it from the serial number.</p>
              <div className="rounded-xl p-4 text-sm" style={{ background: "#f0f6fc" }}>
                <strong>Worth knowing:</strong> In Sydney&rsquo;s harder water areas (much of Western Sydney), scale build-up shortens system life. Servicing or descaling every few years helps extend it.
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="rust" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Rusty or Discoloured Hot Water</h2>
              <p>Brown, orange, or reddish water coming from your hot tap is a classic sign that the inside of your storage tank is corroding. The sacrificial anode rod &mdash; a magnesium or aluminium rod designed to protect the tank from corrosion &mdash; may have depleted, allowing the tank itself to rust.</p>
              <p>This can sometimes be fixed by replacing the anode rod, but if the tank itself is corroding, replacement is the only long-term solution. Rusty water is also a health concern and should be investigated promptly.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="noise" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. Rumbling, Popping, or Banging Noises</h2>
              <p>Loud noises from your hot water unit &mdash; particularly rumbling, popping, or banging during heating cycles &mdash; usually indicate sediment build-up at the bottom of the tank. As water heats up, it bubbles through layers of accumulated sediment and creates noise.</p>
              <p>Sediment build-up also makes the system work harder to heat water, reducing efficiency and increasing energy costs. In some cases a flush can help, but heavy sediment build-up in an older system often means replacement is more economical.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="leaks" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. Water Pooling Around the Unit</h2>
              <p>Any water pooling around or under your hot water system should be investigated immediately. Small drips from the pressure relief valve (a safety valve that releases excess pressure) are sometimes normal &mdash; but a constantly dripping or leaking pressure relief valve usually indicates the tank is under excessive pressure, which is a safety concern.</p>
              <p>Water pooling under the tank itself almost always means the tank is leaking from the inside &mdash; this cannot be repaired and the system must be replaced.</p>
              <div className="rounded-xl p-4 text-sm mt-2" style={{ background: "#fff3cd", borderLeft: "4px solid #ffc107" }}>
                <strong>Important:</strong> If you see water pooling near a gas hot water system, call a plumber immediately. Do not attempt to inspect or repair it yourself.
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="temperature" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5. Inconsistent Water Temperature</h2>
              <p>If your hot water fluctuates unpredictably &mdash; too hot, then lukewarm, then cold within the same shower &mdash; the thermostat or heating element may be failing. On a gas system, the burner assembly or pilot light assembly may need attention.</p>
              <p>Inconsistent temperature is one of the most common complaints before a hot water system fails completely. It&rsquo;s worth having it inspected rather than hoping it resolves itself.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="running-out" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>6. Running Out of Hot Water Faster Than Usual</h2>
              <p>If your household hasn&rsquo;t changed in size but you&rsquo;re running out of hot water more quickly, the storage capacity of your tank may have been reduced by sediment, or the heating element is no longer performing efficiently. It can also mean the thermostat setting has shifted.</p>
              <p>Sudden loss of all hot water (rather than gradual reduction) usually means a failed element or pilot light and is often repairable.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="bills" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>7. Rising Energy Bills With No Obvious Cause</h2>
              <p>Hot water accounts for around 25&ndash;30% of household energy use in Australia. If your energy bills have risen without an obvious explanation, an inefficient or failing hot water system may be the culprit. As systems age and sediment builds up, they work harder and use more energy to heat the same amount of water.</p>
              <p>Upgrading to a heat pump hot water system can reduce hot water energy costs by up to 70% compared to an electric storage system &mdash; and there are often government rebates available in NSW to help offset the cost.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="repair-vs-replace" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Should You Repair or Replace?</h2>
              <p>As a general rule:</p>
              <ul className="space-y-2 mt-3">
                {[
                  "If the system is under 8 years old and the repair is minor (element, thermostat, valve) — repair is usually the right call.",
                  "If the system is over 10 years old and showing multiple warning signs — replacement is almost always better value.",
                  "If the tank itself is leaking or corroding — replacement is the only option.",
                  "If energy efficiency is a concern — consider upgrading to a heat pump system and claiming available NSW rebates.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">When you call Mr. Clog, we&rsquo;ll give you an honest assessment of whether repair or replacement makes more financial sense for your situation &mdash; no upselling.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>

              <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>How much does a new hot water system cost in Sydney?</h3>
              <p>Supply and installation of a new hot water system in Sydney typically costs $800&ndash;$2,500 depending on the type and size. Electric storage systems are at the lower end; heat pump and solar systems cost more upfront but have lower running costs and may attract rebates.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can I get a same-day hot water replacement in Sydney?</h3>
              <p>In most cases, yes. Mr. Clog carries common hot water system models in our vans and can supply and install on the same day for most residential properties in Sydney. Call us on {PHONE} to check availability.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Are there rebates for hot water system replacement in NSW?</h3>
              <p>Yes &mdash; NSW has rebates available for certain energy-efficient hot water systems including heat pump and solar systems under the NSW Energy Savings Scheme. Ask your plumber about eligibility when getting a quote.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>What&rsquo;s the best type of hot water system for Sydney?</h3>
              <p>For most Sydney homes, a heat pump hot water system offers the best balance of efficiency and cost over time. Electric storage systems are the cheapest to install but most expensive to run. Gas continuous flow (instantaneous) systems are popular in Sydney due to the availability of natural gas through Jemena&rsquo;s network.</p>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Hot Water Problems in Sydney?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Mr. Clog repairs and replaces all hot water system types across Sydney. Same-day service available.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
                style={{ background: "var(--color-brand-blue)" }}
              >
                <PhoneCallIcon size={16} />
                Call {PHONE}
              </a>
            </div>
          </article>

          {/* TOC */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>

        </div>
      </div>
    </>
  );
}
