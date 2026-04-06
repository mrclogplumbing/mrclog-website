import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";

export const metadata: Metadata = {
  title: "Why Is My Drain Blocked? The Most Common Causes | Mr. Clog Blog",
  description:
    "A blocked drain is almost always caused by one of five things. Learn what causes blocked drains in Australian homes and when to call a plumber.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

export default function Blog1Page() {
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
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Blocked Drains</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>7 April 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Why Is My Drain Blocked?
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              The Most Common Causes in Australian Homes
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="section-container py-14 md:py-20">
        <div className="max-w-3xl mx-auto">

          {/* Quick Answer */}
          <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
            <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              A blocked drain is almost always caused by one of five things: a build-up of hair and soap scum, cooking grease and food scraps, tree root intrusion, foreign objects, or a damaged pipe. Most blockages can be cleared quickly — but knowing what&rsquo;s causing the problem makes all the difference.
            </p>
          </div>

          <div className="prose-custom space-y-6 text-gray-700 leading-relaxed">
            <p>If your sink is draining slowly, your shower is pooling with water, or your toilet is gurgling — you&rsquo;ve got a blockage somewhere in the system. It&rsquo;s one of the most common plumbing problems Australian homeowners deal with, and the good news is that it&rsquo;s almost always fixable.</p>
            <p>This guide walks you through the five most common causes of blocked drains, the warning signs to watch for, and exactly when to call in the professionals.</p>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>The 5 Most Common Causes of Blocked Drains</h2>

            <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>1. Hair and Soap Scum (Bathroom Drains)</h3>
            <p>Hair is the number one culprit in bathroom drains. Every time you shower or wash your hair, loose strands make their way into the drain and start to bind together with soap residue. Over time, this creates a sticky, matted plug that traps everything else that goes down — and it gets worse fast.</p>
            <p>You&rsquo;ll notice it first as slow drainage, then as water pooling around your feet in the shower. Left unchecked, it leads to a complete blockage.</p>
            <div className="rounded-xl p-4 text-sm" style={{ background: "#f0f6fc" }}>
              <strong>Quick tip:</strong> A drain catcher over your shower or bath drain costs just a few dollars and prevents most hair blockages before they start.
            </div>

            <h3 className="font-logo font-bold text-lg mb-2 mt-8" style={{ color: "var(--color-dark)" }}>2. Grease and Food Scraps (Kitchen Drains)</h3>
            <p>In the kitchen, the main offenders are cooking fats, oils, and grease — known in the plumbing trade as &ldquo;FOG&rdquo;. When hot grease is poured down the sink it seems harmless, but as it cools inside the pipe it solidifies and sticks to the pipe walls. Food particles, coffee grounds, and soap then cling to it, gradually narrowing the pipe until it blocks completely.</p>
            <p>Even &ldquo;biodegradable&rdquo; dish soap can make this worse, as it can bind with grease rather than breaking it down.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-8" style={{ color: "var(--color-dark)" }}>3. Tree Root Intrusion</h3>
            <p>This one surprises a lot of homeowners. Tree roots are naturally drawn to the moisture and nutrients inside underground pipes. Over time, fine root fibres find tiny cracks or joints in older pipes and begin growing inside them — eventually causing a partial or complete blockage, or even cracking the pipe itself.</p>
            <p>If you have large trees near your home and notice recurring slow drains or gurgling sounds from multiple fixtures at once, tree roots may be the cause. This is one blockage that won&rsquo;t fix itself and needs professional assessment with a CCTV drain camera.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-8" style={{ color: "var(--color-dark)" }}>4. Foreign Objects</h3>
            <p>Children&rsquo;s toys, cotton buds, sanitary products, &ldquo;flushable&rdquo; wipes, and dental floss are among the most common items retrieved from blocked drains. Despite what the packaging says, most &ldquo;flushable&rdquo; products don&rsquo;t break down properly in Australian plumbing systems and are responsible for a significant number of blockages every year.</p>

            <h3 className="font-logo font-bold text-lg mb-2 mt-8" style={{ color: "var(--color-dark)" }}>5. Damaged or Collapsed Pipes</h3>
            <p>In older homes, pipes can corrode, crack, shift, or collapse over time — particularly if they&rsquo;re made from older materials like clay or cast iron. A damaged pipe doesn&rsquo;t just cause blockages; it can also allow soil and debris to enter the pipe, making the problem compound over time.</p>
            <p>If blockages keep coming back despite clearing them, a damaged pipe may be the underlying cause.</p>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Warning Signs You Have a Blocked Drain</h2>
            <ul className="space-y-2">
              {[
                "Water draining slowly or not at all",
                "Gurgling or bubbling sounds from drains, toilets, or pipes",
                "Unpleasant smells coming from drains — caused by trapped waste decomposing inside the pipe",
                "Water backing up in a sink, shower, or toilet",
                "Multiple drains slow at the same time — often indicates a main sewer line blockage",
                "Water pooling around floor drains or in the garden near your pipes",
              ].map((sign) => (
                <li key={sign} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                  {sign}
                </li>
              ))}
            </ul>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Can You Unblock a Drain Yourself?</h2>
            <p>For minor blockages — particularly hair in a shower drain or a slow-draining bathroom sink — there are a few things you can try at home before calling a plumber:</p>
            <ol className="space-y-3 list-decimal pl-5 text-sm">
              <li><strong>Remove visible debris:</strong> Unscrew the drain cover and pull out any hair or gunk by hand. Always wear gloves.</li>
              <li><strong>Boiling water:</strong> For kitchen grease blockages, slowly pour boiling water down the drain in two or three stages.</li>
              <li><strong>Baking soda and vinegar:</strong> Pour half a cup of baking soda followed by half a cup of white vinegar. Wait 15 minutes, then flush with hot water.</li>
              <li><strong>A plunger:</strong> Works well for toilet and sink blockages. Create a firm seal and pump with steady, even pressure.</li>
            </ol>
            <div className="rounded-xl p-4 text-sm mt-4" style={{ background: "#fff3cd", borderLeft: "4px solid #ffc107" }}>
              <strong>A word of caution:</strong> Avoid using chemical drain cleaners regularly — they can corrode your pipes over time, especially older PVC or copper pipes. For persistent blockages, professional clearing is always safer and more effective.
            </div>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When to Call a Licensed Plumber</h2>
            <p>DIY methods work well for minor, surface-level blockages. But there are situations where you need a professional:</p>
            <ul className="space-y-2">
              {[
                "The blockage keeps coming back after you've cleared it",
                "Multiple drains in your home are slow or blocked at the same time",
                "You can hear gurgling noises from drains or toilets",
                "There's a persistent foul smell that won't go away",
                "You suspect tree roots or a damaged pipe",
                "Water is backing up rather than draining at all",
                "There's sewage smell coming from your yard",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                  {r}
                </li>
              ))}
            </ul>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>How to Prevent Blocked Drains</h2>
            <ul className="space-y-2">
              {[
                ["Fit drain guards or hair catchers", "in shower and bath drains — empty them weekly"],
                ["Never pour cooking oil or grease down the sink", "let it cool and dispose of it in the bin"],
                ["Run hot water down the kitchen drain for 30 seconds after washing up", "helps flush residual grease"],
                ["Only flush toilet paper", 'everything else — including "flushable" wipes — goes in the bin'],
                ["Have your drains professionally inspected every 1–2 years", "especially if you have large trees near your sewer line"],
              ].map(([main, note]) => (
                <li key={main} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                  <span><strong>{main}</strong>{note ? ` — ${note}` : ""}</span>
                </li>
              ))}
            </ul>

            <hr className="border-gray-200 my-8" />

            <h2 className="font-logo font-bold text-2xl mb-6" style={{ color: "var(--color-dark)" }}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                ["Can a blocked drain fix itself?", "Minor blockages sometimes clear on their own with normal water flow, but most don't. If you notice slow drainage, it's worth addressing it early — a full blockage is much harder and more expensive to clear than a partial one."],
                ["How much does it cost to unblock a drain in Australia?", "A standard drain unblock typically costs between $150 and $400, depending on the severity, location, and equipment needed. CCTV camera inspections are usually an additional cost but are well worth it for recurring problems."],
                ["Why does my drain keep blocking in the same spot?", "Repeated blockages in the same drain usually point to an underlying issue — such as a partial pipe collapse, tree root intrusion, or a pipe that's incorrectly graded. A CCTV inspection is the most reliable way to find out."],
                ["Is it safe to use chemical drain cleaners?", "Chemical drain cleaners can shift minor blockages, but they're harsh on pipes and bad for the environment. Use them sparingly and avoid them entirely on older or PVC pipes."],
                ["How do I know if it's a main sewer line blockage?", "If multiple drains in your home are slow or backing up at the same time — toilets, sinks, shower — it's likely a main sewer line issue. This needs urgent attention from a licensed plumber."],
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
            <h3 className="font-logo font-bold text-xl mb-2" style={{ color: "var(--color-dark)" }}>Got a blocked drain that won&rsquo;t budge?</h3>
            <p className="text-sm text-gray-600 mb-5">Mr. Clog diagnoses and fixes blockages fast — same-day service available. $0 call-out fee.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PHONE_HREF} className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm">
                <PhoneCallIcon size={16} />Call {PHONE}
              </a>
              <Link href="/contact" className="btn-outline text-sm px-6 py-3 text-center">Get a Free Quote →</Link>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-8 italic border-t border-gray-100 pt-4">Written and reviewed by the licensed plumbers at Mr. Clog.</p>
          <div className="mt-6">
            <Link href="/blog" className="text-sm font-semibold" style={{ color: "var(--color-brand-blue)" }}>← Back to Blog</Link>
          </div>
        </div>
      </article>
    </>
  );
}
