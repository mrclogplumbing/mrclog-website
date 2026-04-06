import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";

export const metadata: Metadata = {
  title: "Gas Leak or Not? How to Tell — and What to Do | Mr. Clog Blog",
  description:
    "If you smell gas, treat it as a real leak until proven otherwise. Learn the signs of a gas leak, exactly what to do, and what not to do.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

export default function Blog2Page() {
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
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Gas Safety</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>10 April 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Gas Leak or Not?
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              How to Tell — and What to Do Immediately
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="section-container py-14 md:py-20">
        <div className="max-w-3xl mx-auto">

          {/* Safety alert */}
          <div className="rounded-2xl p-5 mb-8 border-l-4" style={{ background: "#fdecea", borderColor: "#c0392b" }}>
            <p className="text-sm font-bold mb-1" style={{ color: "#c0392b" }}>SAFETY FIRST</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              If you smell gas right now, don&rsquo;t touch any switches. Get everyone out of the building immediately and call 000 or your gas emergency line from outside.
            </p>
          </div>

          {/* Quick Answer */}
          <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
            <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              If you can smell gas indoors, treat it as a real leak until proven otherwise. Don&rsquo;t touch any switches — get everyone out, leave doors and windows open as you go, and call your gas provider&rsquo;s emergency line or 000 from outside. Gas leaks are rare, but knowing what to do in the first few minutes can make all the difference.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>Gas is one of the safest and most reliable energy sources for Australian homes — but like anything, it requires respect and a little know-how. Most people will never experience a gas leak in their lifetime. But if you ever do, knowing how to react quickly and calmly is what keeps it from becoming a serious incident.</p>
            <p>This guide covers the warning signs of a gas leak, exactly what to do (and what not to do), the most common causes, and why regular gas safety checks are one of the best investments you can make as a homeowner.</p>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Signs You Might Have a Gas Leak</h2>

            <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>The smell of rotten eggs or sulphur</h3>
            <p>Natural gas is odourless by itself, so gas companies add a chemical called mercaptan — a deliberately unpleasant smell, similar to rotten eggs or sulphur. If you notice this smell anywhere in or around your home, even faintly, take it seriously. Don&rsquo;t try to pinpoint the exact source yourself.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>A hissing or whistling sound near a gas line or appliance</h3>
            <p>A hissing or soft whistling sound near your gas meter, a gas pipe, your stove, heater, or hot water system can indicate gas escaping under pressure. Even a faint hiss in an otherwise quiet room is worth investigating by a professional.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Dead or yellowing plants near underground gas lines</h3>
            <p>If a patch of garden, grass, or plants near an underground gas line is dying without an obvious reason, gas escaping from the soil may be depriving the roots of oxygen. This can be hard to spot but is a telltale sign of a slow underground leak.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Bubbling in wet ground or standing water</h3>
            <p>Gas bubbling up through puddles or wet soil near your gas meter or infrastructure is a serious warning sign. Report this to your gas distributor immediately — don&rsquo;t wait.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Physical symptoms in people or pets</h3>
            <p>Exposure to leaking gas can cause headaches, dizziness, nausea, and eye or throat irritation. If multiple people in the home feel unwell and the symptoms ease once you go outside, gas could be the cause. Pets may also seem lethargic or disoriented.</p>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What to Do Immediately — 8 Steps</h2>
            <p>If you suspect a gas leak, act quickly and calmly:</p>
            <ol className="space-y-3 list-decimal pl-5 text-sm mt-4">
              {[
                ["Don't touch any electrical switches", "not even to turn lights off. Electrical sparks can ignite gas."],
                ["Don't use your phone inside the building", "wait until you are safely outside."],
                ["Open doors and windows as you leave", "this helps disperse the gas and reduces the risk of build-up."],
                ["Get everyone — including pets — out of the building", "don't stop to grab belongings."],
                ["Turn off the gas at the mains if it's safe to do so", "the shutoff valve is usually beside your gas meter. Turn the handle 90 degrees so it sits across the pipe."],
                ["Move well away from the building", "at least 10 metres, or further if you can."],
                ["Call your gas distributor's emergency line or 000", "from outside, away from the building."],
                ["Do not re-enter the building", "until a licensed gas fitter or emergency services have declared it safe."],
              ].map(([label, detail]) => (
                <li key={label}><strong>{label}</strong>{detail ? ` — ${detail}` : ""}</li>
              ))}
            </ol>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What NOT to Do During a Gas Leak</h2>
            <ul className="space-y-2">
              {[
                ["Don't switch any lights or appliances on or off", "this includes ceiling fans, heaters, and anything powered by electricity"],
                ["Don't use your mobile phone inside", "step outside first, then call"],
                ["Don't light matches, candles, or a cigarette", ""],
                ["Don't try to find the source of the leak yourself", "this is a job for a licensed gas fitter"],
                ["Don't use the garage door opener", "the motor can generate a spark"],
                ["Don't assume the smell will go away on its own", "even a slow leak is a serious risk over time"],
              ].map(([main, note]) => (
                <li key={main} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#c0392b" }} />
                  <span><strong>{main}</strong>{note ? ` — ${note}` : ""}</span>
                </li>
              ))}
            </ul>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Common Causes of Gas Leaks at Home</h2>

            <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>Corroded or damaged gas pipes</h3>
            <p>Older homes often have gas pipes that have corroded over time, particularly underground or in damp areas. Corrosion creates tiny pinholes or cracks that allow gas to escape slowly — often without any obvious smell.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Ageing or loose appliance connections</h3>
            <p>Gas cooktops, heaters, and hot water systems connect to the gas supply via flexible hoses or fittings. These can loosen, crack, or perish over time — especially if an appliance has been moved, knocked, or simply hasn&rsquo;t been serviced in years.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Unlicensed gas work</h3>
            <p>In Australia, all gas fitting must be done by a licensed gas fitter. Unlicensed gas work is illegal and dangerous — poorly fitted connections and incorrectly installed appliances are a common cause of leaks.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Ground movement or external damage</h3>
            <p>Significant ground movement — or even accidental damage from digging in the garden — can stress and shift gas pipes at their joints. If you&rsquo;ve had any earthworks near your property, it&rsquo;s worth having your gas infrastructure checked.</p>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The Importance of Regular Gas Safety Checks</h2>
            <p>The best way to avoid a gas emergency is regular professional maintenance. A licensed gas fitter will:</p>
            <ul className="space-y-2 mt-3">
              {[
                "Inspect all accessible gas pipes for corrosion or damage",
                "Test all gas appliance connections for tightness and integrity",
                "Check for gas pressure irregularities that could indicate a leak",
                "Identify potential hazards before they become dangerous",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">Most gas safety professionals recommend a check every two years for homes with multiple gas appliances, or annually for older properties.</p>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-6" style={{ color: "var(--color-dark)" }}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                ["How do I know if it's actually a gas leak and not something else?", "The rotten egg or sulphur smell is the most reliable indicator. If you smell it near a gas appliance, pipe, or meter — even faintly — treat it as a gas leak. When in doubt, call your gas provider."],
                ["Is a small or slow gas leak dangerous?", "Yes. Even a minor, slow leak can allow gas to accumulate in an enclosed space over time, creating a risk of fire, explosion, or carbon monoxide poisoning. Small leaks don't stay small."],
                ["Can I repair a gas leak myself?", "No. All gas fitting work in Australia — including repairing a leak — must be carried out by a licensed gas fitter. Attempting to repair a gas leak yourself is illegal and extremely dangerous."],
                ["How much does a gas leak repair cost in Australia?", "A simple connection repair typically costs between $150 and $350. More complex repairs involving pipe replacement can range from $400 to over $1,000 depending on the extent of the work."],
                ["My gas appliance was installed by a handyman — is it safe?", "This is a real risk. In Australia, only licensed gas fitters can legally install or service gas appliances. If your appliance was installed without a licensed gas fitter, we strongly recommend having it inspected as soon as possible."],
              ].map(([q, a]) => (
                <div key={q} className="rounded-xl p-5 border border-gray-100 bg-gray-50">
                  <p className="font-logo font-bold text-sm mb-2" style={{ color: "var(--color-dark)" }}>{q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-brand-blue-light)" }}>
            <h3 className="font-logo font-bold text-xl mb-2" style={{ color: "var(--color-dark)" }}>Concerned about a gas smell? Want a safety check?</h3>
            <p className="text-sm text-gray-600 mb-5">Mr. Clog&rsquo;s licensed gas fitters are available 24/7 for emergencies and routine safety inspections. $0 call-out fee.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PHONE_HREF} className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm">
                <PhoneCallIcon size={16} />Call {PHONE}
              </a>
              <Link href="/contact" className="btn-outline text-sm px-6 py-3 text-center">Get a Free Quote →</Link>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-8 italic border-t border-gray-100 pt-4">Written and reviewed by the licensed gas fitters and plumbers at Mr. Clog.</p>
          <div className="mt-6">
            <Link href="/blog" className="text-sm font-semibold" style={{ color: "var(--color-brand-blue)" }}>← Back to Blog</Link>
          </div>
        </div>
      </article>
    </>
  );
}
