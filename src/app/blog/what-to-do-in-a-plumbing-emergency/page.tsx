import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";

export const metadata: Metadata = {
  title: "What to Do in a Plumbing Emergency | Mr. Clog Blog",
  description:
    "Burst pipe? Flooding? Gas leak? Here's a clear step-by-step guide for Sydney homeowners on exactly what to do in a plumbing emergency — and when to call.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "burst-pipe", title: "Burst Pipe" },
  { id: "flooding", title: "Flooding or Overflow" },
  { id: "gas-leak", title: "Suspected Gas Leak" },
  { id: "blocked-toilet", title: "Blocked / Overflowing Toilet" },
  { id: "no-hot-water", title: "No Hot Water" },
  { id: "when-to-call", title: "When to Call 000" },
  { id: "faq", title: "FAQs" },
];

export default function BlogEmergencyPage() {
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
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Emergency Plumbing</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>8 May 2026 &middot; 7 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              What to Do in a Plumbing Emergency
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              A Step-by-Step Guide for Sydney Homeowners
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
                In any plumbing emergency, the first step is almost always the same: <strong>turn off the water supply</strong>. Locate your isolation valve (under the sink or behind the toilet) or your main water meter at the front of your property. Once the water is off, the situation stops getting worse. Then call a 24/7 emergency plumber.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Plumbing emergencies rarely happen at a convenient time. A burst pipe at midnight, a flooding bathroom on Christmas morning, or a gas smell when you get home from work — these situations are stressful, and it&rsquo;s easy to panic and make things worse.</p>
              <p>This guide gives you a clear, calm plan for the most common plumbing emergencies in Australian homes — so you know exactly what to do before a licensed plumber arrives.</p>
              <div className="rounded-xl p-4 text-sm" style={{ background: "#fff3cd", borderLeft: "4px solid #ffc107" }}>
                <strong>Know your shutoffs before you need them.</strong> Before an emergency strikes, walk around your home and find: (1) the isolation valve under each sink and behind each toilet, and (2) your main water meter — usually in the front garden near the boundary, or in a box at the front of the property.
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="burst-pipe" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Burst Pipe</h2>
              <p>A burst pipe can release hundreds of litres per minute. Acting quickly limits the damage.</p>
              <ol className="space-y-4 list-decimal pl-5 text-sm mt-3">
                <li><strong>Turn off the water immediately.</strong> If it&rsquo;s a burst near a tap or appliance, close the isolation valve right there. If you can&rsquo;t find it or it won&rsquo;t close, go to your main water meter and turn the valve clockwise to close it.</li>
                <li><strong>Turn off the electricity in affected areas.</strong> Water and electricity are a dangerous combination. If water is near power points, light fittings, or your switchboard, turn off those circuits at the main switchboard.</li>
                <li><strong>Open taps to drain remaining water.</strong> This relieves pressure and drains water already in the pipes, reducing ongoing leakage.</li>
                <li><strong>Move valuables and furniture.</strong> Get rugs, electronics, and furniture away from the water while you wait for the plumber.</li>
                <li><strong>Call an emergency plumber.</strong> Burst pipes need same-day repair. Don&rsquo;t leave a closed main as a long-term solution.</li>
              </ol>
              <div className="rounded-xl p-4 text-sm mt-4" style={{ background: "#f0f6fc" }}>
                <strong>For insurance purposes:</strong> Take photos of the burst pipe, the water damage, and any affected property before cleaning up. You&rsquo;ll need this for your claim.
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="flooding" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Flooding or Sewage Overflow</h2>
              <p>Whether it&rsquo;s a washing machine overflow, a backed-up drain, or a flooding bathroom, the approach is similar.</p>
              <ol className="space-y-4 list-decimal pl-5 text-sm mt-3">
                <li><strong>Stop the source.</strong> Turn off the appliance or isolation valve causing the flooding. For a backed-up drain or toilet, stop adding water — don&rsquo;t flush again.</li>
                <li><strong>Don&rsquo;t use any drains in the home</strong> until the blockage is cleared. Using another drain or toilet can make the backflow worse.</li>
                <li><strong>If it&rsquo;s a sewage overflow, don&rsquo;t touch the water.</strong> Sewage contains bacteria and pathogens. Keep children and pets away, open windows, and wait for a professional.</li>
                <li><strong>Contain and absorb what you can safely.</strong> Use old towels or buckets to limit spread — but only if the water is clean (not sewage).</li>
                <li><strong>Call a plumber.</strong> Sewage blockages and overflows are always an emergency call — they need professional clearing equipment and sanitation.</li>
              </ol>

              <hr className="border-gray-200 my-8" />

              <h2 id="gas-leak" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Suspected Gas Leak</h2>
              <p>A gas leak is the most serious plumbing-related emergency. The risk of explosion or carbon monoxide poisoning is real.</p>
              <ol className="space-y-4 list-decimal pl-5 text-sm mt-3">
                <li><strong>Don&rsquo;t turn any switches on or off.</strong> Electrical sparks can ignite gas. Don&rsquo;t touch light switches, powerpoints, or appliances.</li>
                <li><strong>Don&rsquo;t use your phone inside the building.</strong> Step outside first, then make calls.</li>
                <li><strong>Open windows and doors as you leave</strong> to ventilate — but don&rsquo;t delay getting out.</li>
                <li><strong>Turn off the gas at the meter.</strong> Your gas meter is usually on the side of the house. Turn the valve so it&rsquo;s perpendicular to the pipe to close it.</li>
                <li><strong>Call 000 if you suspect a serious leak</strong> or if people are feeling unwell. Also call your gas provider&rsquo;s emergency line: <strong>Jemena (NSW): 131 909</strong>.</li>
                <li><strong>Call a licensed gasfitter</strong> before re-entering or relighting any appliances.</li>
              </ol>
              <div className="rounded-xl p-4 text-sm mt-4" style={{ background: "#fce8e8", borderLeft: "4px solid #dc3545" }}>
                <strong>Never ignore a gas smell.</strong> Even a faint smell of gas (like rotten eggs or sulphur) should be treated as a real leak. Don&rsquo;t assume it&rsquo;s nothing.
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="blocked-toilet" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Blocked or Overflowing Toilet</h2>
              <ol className="space-y-4 list-decimal pl-5 text-sm mt-3">
                <li><strong>Stop flushing immediately.</strong> If the toilet bowl is full or nearly full, each flush makes it worse.</li>
                <li><strong>Shut off the isolation valve</strong> — the small valve on the water supply pipe behind or below the toilet. Turn it clockwise to stop water filling the cistern.</li>
                <li><strong>Try a plunger.</strong> For a simple toilet blockage, a good rubber plunger with a firm, steady pump can clear most obstructions. Create a seal over the drain hole and pump 10&ndash;15 times.</li>
                <li><strong>If water is overflowing onto the floor,</strong> contain it with towels and don&rsquo;t attempt to use the toilet or any nearby drain until a plumber has cleared the blockage.</li>
                <li><strong>Call a plumber</strong> if the plunger doesn&rsquo;t clear it within a few attempts, or if sewage is backing up.</li>
              </ol>

              <hr className="border-gray-200 my-8" />

              <h2 id="no-hot-water" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>No Hot Water</h2>
              <p>While not dangerous, loss of hot water — especially with children or elderly household members — warrants prompt attention.</p>
              <ul className="space-y-2 mt-3">
                {[
                  "Check your circuit breaker or gas supply first — the system may have simply tripped or run out of gas.",
                  "For electric systems: reset the circuit breaker once. If it trips again, call a plumber — don&rsquo;t keep resetting it.",
                  "For gas systems: check the pilot light if it&rsquo;s an older unit. Relight per the manual. If it won&rsquo;t stay lit, there&rsquo;s an underlying fault.",
                  "If you can see water pooling under the hot water unit, the tank may be failing. Turn off the water and power/gas supply to the unit and call a plumber.",
                  "Most hot water system repairs or replacements can be done same-day by a licensed plumber.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="border-gray-200 my-8" />

              <h2 id="when-to-call" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When to Call 000 vs. a Plumber</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 mt-4 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--color-brand-blue-light)" }}>
                      <th className="text-left px-4 py-3 font-logo font-bold" style={{ color: "var(--color-dark)" }}>Situation</th>
                      <th className="text-left px-4 py-3 font-logo font-bold" style={{ color: "var(--color-dark)" }}>Who to Call</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Strong gas smell indoors, people feeling unwell", "000 immediately, then gas provider"],
                      ["Gas smell outdoors / faint indoors", "Gas provider emergency line, then licensed gasfitter"],
                      ["Flooding touching electrical switchboard or fittings", "000 (electrical risk), then plumber"],
                      ["Sewage backing up throughout home", "Emergency plumber"],
                      ["Burst pipe, active flooding", "Emergency plumber (after shutting off water)"],
                      ["Blocked toilet, no hot water", "Emergency plumber or next-day plumber"],
                    ].map(([situation, who]) => (
                      <tr key={situation} className="border-t border-gray-100">
                        <td className="px-4 py-3">{situation}</td>
                        <td className="px-4 py-3 font-semibold" style={{ color: "var(--color-brand-blue)" }}>{who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Where is my main water shut-off in Sydney?",
                    a: "Your main water meter and shut-off valve is almost always near the front boundary of your property — look for a metal or plastic box set into the ground at the front of the garden, near the footpath. The valve inside closes the water to the whole house.",
                  },
                  {
                    q: "Can I call a plumber at 3am for an emergency?",
                    a: "Yes — licensed emergency plumbers operate 24/7, including weekends and public holidays. Mr. Clog is available around the clock for genuine plumbing emergencies.",
                  },
                  {
                    q: "Will my home insurance cover an emergency plumbing call?",
                    a: "Most home and contents policies cover sudden and accidental damage from events like burst pipes. They generally don&rsquo;t cover gradual damage or maintenance issues. Check your policy or call your insurer — but don&rsquo;t let insurance questions delay calling a plumber in an active emergency.",
                  },
                  {
                    q: "How do I know if it&rsquo;s a plumbing emergency or something I can wait on?",
                    a: "If water or gas is actively escaping and can&rsquo;t be stopped by a simple isolation valve, if there&rsquo;s risk of electrical contact, or if sewage is involved — treat it as an emergency. If the situation is stable (the water is off, nothing is spreading), a same-day or next-day call is usually fine.",
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
              <p className="font-logo font-bold text-white text-xl mb-2">Plumbing emergency right now?</p>
              <p className="text-white/70 text-sm mb-6">Mr. Clog is available 24/7, including weekends and public holidays. $0 call-out fee.</p>
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
