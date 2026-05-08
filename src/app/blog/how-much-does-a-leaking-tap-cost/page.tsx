import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";

export const metadata: Metadata = {
  title: "How Much Does a Leaking Tap Actually Cost You? | Mr. Clog Blog",
  description:
    "A dripping tap might seem minor, but the numbers add up fast. Find out exactly how much a leaking tap costs in water bills — and why you should fix it now.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "the-numbers", title: "The Numbers" },
  { id: "water-damage", title: "Water Damage Risk" },
  { id: "types", title: "Types of Tap Leaks" },
  { id: "diy-or-plumber", title: "DIY or Call a Plumber?" },
  { id: "cost-to-fix", title: "Cost to Fix" },
  { id: "faq", title: "FAQs" },
];

export default function BlogLeakingTapPage() {
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
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Taps &amp; Toilets</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>8 May 2026 &middot; 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              How Much Does a Leaking Tap Actually Cost You?
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              The Numbers Might Surprise You
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
                A tap dripping once per second wastes around 31 litres of water per day — that&rsquo;s over 11,000 litres a year. In Sydney, that&rsquo;s roughly $30&ndash;$50 extra on your water bill annually, per tap. A hot water tap leak costs significantly more. Most leaking taps cost $100&ndash;$200 to fix — a fraction of what you&rsquo;ll pay in wasted water if you ignore it.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>It starts as a gentle drip. You tell yourself you&rsquo;ll get to it eventually. Then weeks become months, and that tap is still dripping. It seems harmless — after all, how much water can a single drip really waste?</p>
              <p>The answer, it turns out, is quite a lot. And the water cost is only part of the story.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="the-numbers" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>The Numbers: What a Dripping Tap Actually Costs</h2>
              <p>The maths is simple once you run it:</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200 mt-4 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--color-brand-blue-light)" }}>
                      <th className="text-left px-4 py-3 font-logo font-bold" style={{ color: "var(--color-dark)" }}>Drip Rate</th>
                      <th className="text-left px-4 py-3 font-logo font-bold" style={{ color: "var(--color-dark)" }}>Litres/Day</th>
                      <th className="text-left px-4 py-3 font-logo font-bold" style={{ color: "var(--color-dark)" }}>Litres/Year</th>
                      <th className="text-left px-4 py-3 font-logo font-bold" style={{ color: "var(--color-dark)" }}>Est. Annual Cost (cold)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Slow drip (1/sec)</td>
                      <td className="px-4 py-3">31 L</td>
                      <td className="px-4 py-3">11,300 L</td>
                      <td className="px-4 py-3">~$30&ndash;$50</td>
                    </tr>
                    <tr className="border-t border-gray-100 bg-gray-50">
                      <td className="px-4 py-3">Moderate drip (2/sec)</td>
                      <td className="px-4 py-3">62 L</td>
                      <td className="px-4 py-3">22,600 L</td>
                      <td className="px-4 py-3">~$60&ndash;$100</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Steady trickle</td>
                      <td className="px-4 py-3">200+ L</td>
                      <td className="px-4 py-3">73,000+ L</td>
                      <td className="px-4 py-3">~$200+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Sydney Water charges around $2.77 per kilolitre (1,000 litres) for the first tier of usage. A hot water tap leak costs considerably more — you&rsquo;re also heating all that water you&rsquo;re wasting, adding to your energy bill on top of the water bill.</p>
              <div className="rounded-xl p-4 text-sm" style={{ background: "#fff3cd", borderLeft: "4px solid #ffc107" }}>
                <strong>Hot water leak tip:</strong> If your leaking tap is connected to hot water, multiply your estimate by 2&ndash;3 to account for the energy cost of heating water you&rsquo;re pouring straight down the drain.
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="water-damage" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The Hidden Cost: Water Damage</h2>
              <p>The water bill is just the start. A leaking tap that drips onto or near a surface — timber vanities, under-sink cabinetry, tile grout — causes gradual water damage that can be far more expensive than the original repair.</p>
              <p>Common water damage from ignored tap leaks includes:</p>
              <ul className="space-y-2 mt-3">
                {[
                  "Timber swelling, warping or rotting under bathroom and kitchen benches",
                  "Mould and mildew growth inside cabinets — a health risk as well as a repair cost",
                  "Grout and silicone deterioration around the sink or basin",
                  "Rust and corrosion on pipes and fittings",
                  "Damage to flooring if the leak goes unnoticed for a long time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">A $150 tap washer replacement today can save you $1,500+ in cabinetry repairs down the track.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="types" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Types of Tap Leaks — and What Each One Means</h2>

              <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>Dripping from the Spout</h3>
              <p>The most common type. Usually caused by a worn tap washer or O-ring. On older style taps (compression taps), it&rsquo;s almost always a washer. On mixer taps, it&rsquo;s typically a ceramic cartridge that needs replacing.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Leaking Around the Base of the Spout</h3>
              <p>Water pooling at the base of the tap — especially when it&rsquo;s turned on — indicates a worn O-ring on the spout body. This is a straightforward fix but needs to be done before the leak damages the bench or cabinet below.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Leaking Under the Sink</h3>
              <p>If the drip is coming from the pipe connections beneath the sink, it&rsquo;s likely a loose fitting, degraded thread tape, or a corroded supply line. This one needs attention quickly — it can saturate the under-sink cabinet without you noticing.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Running Toilet (Often Mistaken for a Tap)</h3>
              <p>A toilet that &ldquo;runs&rdquo; constantly — where you can hear water trickling into the bowl — is the most expensive leak of all. A running toilet can waste up to 60,000 litres per year. That&rsquo;s roughly $165 straight off your water bill, every year, until it&rsquo;s fixed.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="diy-or-plumber" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>DIY or Call a Plumber?</h2>
              <p>In NSW, you legally need a licensed plumber for most tap repairs — including replacing tap washers, cartridges, and any work involving the water supply. It&rsquo;s not just a formality: incorrect repairs can void your home insurance and potentially make leaks worse.</p>
              <p>That said, there are a couple of things you can safely do yourself:</p>
              <ul className="space-y-2 mt-3">
                {[
                  "Tightening an aerator (the small filter at the tip of the spout) if it&rsquo;s loose",
                  "Replacing a tap cover button or decorative cap",
                  "Tightening an accessible compression fitting under the sink (hand-tight only)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">For anything that involves removing tap components, replacing washers or cartridges, or touching the water supply lines — call a licensed plumber. It&rsquo;s a quick, inexpensive job for a professional.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="cost-to-fix" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>How Much Does It Cost to Fix a Leaking Tap in Sydney?</h2>
              <p>Typical costs for leaking tap repairs in Sydney:</p>
              <ul className="space-y-2 mt-3">
                {[
                  "Tap washer replacement: $100–$180",
                  "Ceramic cartridge replacement: $120–$220",
                  "O-ring replacement: $100–$160",
                  "Under-sink supply line repair: $120–$200",
                  "Full tap replacement (supply only): $200–$400+",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">Mr. Clog charges no call-out fee, and most tap repairs are completed in a single visit. Given the ongoing water and potential damage costs, getting it fixed is almost always the right financial decision.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Can I just turn the tap off harder to stop the drip?",
                    a: "This is a common mistake that actually makes things worse. Forcing a dripping tap closed damages the washer further, meaning the repair will be more extensive when you do get around to it.",
                  },
                  {
                    q: "How quickly should I get a dripping tap fixed?",
                    a: "Ideally within a few weeks. The longer you leave it, the more water you waste and the greater the risk of water damage to surrounding surfaces and cabinetry.",
                  },
                  {
                    q: "Does home insurance cover leaking taps?",
                    a: "Generally, no. Home insurance covers sudden damage (like a burst pipe) but not gradual leaks from worn components. The repair cost is yours — which is why fixing it quickly keeps costs low.",
                  },
                  {
                    q: "My tap was just replaced — why is it already leaking?",
                    a: "If a recently replaced tap is leaking, it may have been installed with incorrect fittings, or the seat (the valve surface the washer presses against) was damaged and not recut. Call the plumber who did the work.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="rounded-xl p-5 border border-gray-100" style={{ background: "#fafafa" }}>
                    <p className="font-logo font-bold text-base mb-2" style={{ color: "var(--color-dark)" }}>{q}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-white text-xl mb-2">Got a dripping tap?</p>
              <p className="text-white/70 text-sm mb-6">Mr. Clog fixes leaking taps fast — same-day service, $0 call-out fee.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={PHONE_HREF} className="btn-primary inline-flex items-center gap-2 justify-center">
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/contact" className="btn-outline-white inline-flex items-center justify-center">
                  Get a Free Quote &rarr;
                </Link>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-8 text-center">Written and reviewed by the licensed plumbers at Mr. Clog.</p>
            <div className="mt-6 text-center">
              <Link href="/blog" className="text-sm font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                &larr; Back to Blog
              </Link>
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
