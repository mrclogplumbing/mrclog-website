import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";
import BlogFigure from "@/components/blog/BlogFigure";

export const metadata: Metadata = {
  title: "Hot Water Not Working? What to Check",
  description:
    "No hot water, lukewarm water or hot water running out fast? Safe checks by symptom for electric, gas, heat pump and continuous flow systems.",
  openGraph: {
    type: "article",
    title: "Hot Water Not Working? What to Check",
    description: "No hot water, lukewarm water or hot water running out fast? Safe checks by symptom for electric, gas, heat pump and continuous flow systems.",
    url: "https://www.mrclog.com.au/blog/hot-water-not-working",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-09-23",
    modifiedTime: "2026-09-23",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/photos/hot-water-cylinder-replacement.webp", width: 1200, height: 1600, alt: "Mr. Clog plumber in a branded hoodie connecting a new stainless hot water cylinder beside the old unit it replaces" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/hot-water-not-working" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "start-here", title: "Start Here: Two Questions" },
  { id: "no-hot-water", title: "No Hot Water at All" },
  { id: "lukewarm", title: "Lukewarm Water" },
  { id: "runs-out", title: "Hot Water Runs Out Fast" },
  { id: "relief-valve", title: "Relief Valve Dripping" },
  { id: "call-a-plumber", title: "Where to Stop and Call" },
  { id: "faq", title: "FAQs" },
];

export default function BlogHotWaterNotWorkingPage() {
  return (
    <>
      <BlogPostSchema
        slug="hot-water-not-working"
        title="Hot Water Not Working? What to Check"
        description="No hot water, lukewarm water or hot water running out fast? Safe checks by symptom for electric, gas, heat pump and continuous flow systems."
        datePublished="2026-09-23"
        faqs={[{"q":"Why is there no hot water but the cold water works fine?","a":"On an electric storage system, check the hot water circuit breaker at the switchboard. On a gas storage system, check whether the pilot light is still lit and whether other gas appliances work. On a continuous flow unit, check that it has power and look for an error code on the controller. If none of those explain it, the fault is inside the unit and needs a licensed plumber."},{"q":"Is it safe to keep resetting a tripped hot water breaker?","a":"No. Resetting it once is reasonable. If it trips again, leave it off: a breaker that keeps tripping is protecting you from a fault such as a failed element or water in the wiring. Call a licensed plumber or electrician."},{"q":"Why is my hot water hot in the kitchen but lukewarm in the shower?","a":"Bathroom outlets are usually supplied through a tempering valve that mixes hot and cold water down to a safe temperature. When the kitchen is hot and the bathrooms are lukewarm, a failing tempering valve is the usual cause. It is a common repair for a licensed plumber."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Hot Water</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>23 September 2026 · 8 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Hot Water Not Working?
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Safe checks by symptom, and where to stop and call a plumber</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                First check whether it is every tap or just one, and whether anything is leaking. Then match the symptom to your system: a tripped circuit breaker on electric, a pilot light that has gone out on gas storage, no power or an error code on continuous flow. Reset a breaker once at most. Anything involving gas, wiring or a leaking tank is a job for a licensed professional.
              </p>
            </div>

            <BlogFigure
              src="/photos/hot-water-cylinder-replacement.webp"
              alt="Mr. Clog plumber in a branded hoodie connecting a new stainless hot water cylinder beside the old unit it replaces"
              caption="A new cylinder going in beside the one it replaces. Not every hot water fault ends like this: plenty are a breaker, a valve or a single part."
              priority
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>You turn the tap, wait, and the water never warms up. Or it starts hot and fades halfway through a shower. Either way, the question is the same: is this something you can sort out in five minutes, or does it need a plumber?</p>
              <p>This guide works through it by symptom. Every check here is safe for a homeowner. Where a check would mean touching gas fittings, wiring or the inside of the unit, the guide stops and tells you so.</p>

              <h2 id="start-here" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Start here: two questions</h2>
              <p><strong>Is it every hot tap, or just one?</strong> If every other hot tap is fine and only one shower or basin is cold, the hot water system is working. The fault is in that tap or mixer, often a worn cartridge. If all the bathrooms are affected but the kitchen is hot, skip to lukewarm water below. If every outlet is affected, keep reading.</p>
              <p><strong>Is anything leaking?</strong> Look around the base of the unit and under any cupboard it sits in. Water on the floor, rust stains or a steady stream from the pipework changes the priority. Close the cold water valve on the inlet pipe at the unit, switch off an electric system at the switchboard if you can reach it from dry ground, and call a plumber. A leaking tank is not a troubleshooting job.</p>
              <p>If you live in an apartment and your neighbours have lost hot water too, the building may run a central system. That is a strata matter rather than a fault in your apartment, as our <Link href="/hot-water/parramatta-cbd" style={{ color: "var(--color-brand-blue)" }}>Parramatta CBD</Link> and <Link href="/hot-water/campsie" style={{ color: "var(--color-brand-blue)" }}>Campsie</Link> hot water pages explain.</p>

              <h2 id="no-hot-water" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>No hot water at all</h2>
              <p>What to check depends on what heats your water. The compliance plate on the side of the unit tells you the type if you are not sure.</p>
              <p><strong>Electric storage.</strong> Go to the switchboard and find the circuit labelled hot water. If it has tripped, switch it back on once. If it trips again straight away or within a few hours, leave it off. A breaker that keeps tripping usually means a failed heating element or thermostat, or moisture in the wiring, and that is a job for a licensed plumber or electrician. Do not remove the covers on the unit to look.</p>
              <p>Many Sydney electric systems are on an off-peak or controlled load tariff, where your electricity network switches power to the heater on and off on a schedule. If the tank has not heated at all and the breaker is on, the controlled load supply itself may be at fault. Your electricity distributor can check it.</p>
              <p><strong>Gas storage.</strong> Most gas storage units have a small window near the base where you can see the pilot flame. If there is no flame, check whether your gas stovetop or other gas appliances still work. If they don&rsquo;t, the problem is the gas supply, not the heater. If they do, the pilot has gone out. A pilot that goes out repeatedly usually points to a worn part or a draught problem with the flue. Do not dismantle anything on a gas appliance. If you smell gas at any point, get everyone outside and call 000 or your gas distributor from outside. Otherwise, call a licensed gas fitter.</p>
              <p><strong>Continuous flow (instantaneous) gas.</strong> These units need mains power as well as gas to ignite. Check the power point or circuit the unit runs from, and look at the temperature controller inside for an error code. The manual lists what each code means. Also try turning the hot tap on fully: at a very low flow, some units will not fire. Beyond that, the fault is inside a gas appliance and needs a licensed gas fitter.</p>
              <p><strong>Heat pump.</strong> Check the circuit breaker and listen for the fan running when the unit should be heating. Clear any leaves or clutter blocking the air intake. Heat pumps also recover more slowly than an electric element, so after heavy use it can take a while for hot water to come back. If the fan never starts, or you see an error on the unit, it needs a technician.</p>
              <p><strong>Solar.</strong> In a run of cloudy days, solar systems rely on a gas or electric booster. Check that the booster&rsquo;s circuit breaker is on, or that its timer has not been switched off. A booster that is on but not heating needs a plumber.</p>

              <h2 id="lukewarm" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Lukewarm water</h2>
              <p>Lukewarm is a different problem from no hot water, and the most useful clue is <strong>where</strong> it is lukewarm.</p>
              <p><strong>Hot in the kitchen, lukewarm in the bathrooms.</strong> Bathroom outlets are usually fed through a tempering valve that mixes hot and cold water down to a safe temperature. When it wears or clogs, the bathrooms go tepid while the kitchen stays hot. That points straight at the tempering valve, a common repair and not something to adjust yourself.</p>
              <p><strong>Lukewarm everywhere.</strong> Check that the valve on the inlet pipe is fully open, since a part-closed valve gives weak, uneven hot water. After that, the usual causes are a thermostat set too low, a failing element or burner, or sediment in the tank. Thermostat settings on a storage system affect both scalding and bacteria risk, so leave adjustment to a licensed plumber.</p>
              <p><strong>One tap only.</strong> As above, that is the tap or mixer, not the system.</p>

              <h2 id="runs-out" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Hot water runs out fast</h2>
              <p>Start with what has changed. More people in the house, longer showers in cold weather, or a new bathroom can all outgrow a system that used to cope. Our guide to <Link href="/blog/why-hot-water-struggles-in-winter" style={{ color: "var(--color-brand-blue)" }}>why hot water struggles in winter</Link> covers the seasonal side of this in detail.</p>
              <p>On an off-peak electric system, the tank may only reheat during the network&rsquo;s switching window. Use the tank up in the evening and it may not recover until the next heating period. That is how the tariff works, not a fault, although it can make a tank that is too small for the household show up quickly.</p>
              <p>If nothing has changed and the hot water still runs out much sooner than it used to, a failing element, a tired burner or a build-up of sediment are the likely causes. Our list of <Link href="/blog/signs-your-hot-water-system-is-failing" style={{ color: "var(--color-brand-blue)" }}>signs your hot water system is failing</Link> helps you judge whether it is worth repairing.</p>

              <h2 id="relief-valve" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Relief valve dripping</h2>
              <p>Storage systems have a temperature and pressure relief valve, with a drain line running from it. Water expands as it heats, and on many mains-pressure systems a small discharge from that line while the tank is heating is normal.</p>
              <p>What is not normal is a constant trickle that never stops, or water pouring out. That usually means the valve is failing or the water pressure is too high, and both need a plumber. The water coming out can be scalding, so keep hands clear of the outlet. Never block, cap or tie off the valve or its drain line: it is a safety device that stops the tank overheating under pressure.</p>
              <p>If your unit sits in an internal cupboard with no floor waste, as many apartment units do, any water from the valve or the tank has nowhere to go. Our <Link href="/hot-water/surry-hills" style={{ color: "var(--color-brand-blue)" }}>Surry Hills hot water page</Link> explains why that setup deserves attention early.</p>

              <h2 id="call-a-plumber" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Where to stop and call a licensed plumber</h2>
              <p>Stop checking and call if any of these apply:</p>
              <p><strong>Water leaking from the tank</strong> or its fittings, rather than from the relief valve drain.</p>
              <p><strong>A breaker that trips again</strong> after one reset, or any sign of burning, scorching or a hot smell near the unit or switchboard. Leave it off and call a licensed electrician or plumber.</p>
              <p><strong>A pilot that will not stay lit</strong>, a gas unit showing an error, or any smell of gas. Gas work in NSW is for a licensed gas fitter only. For a gas smell, get outside first; our guide to <Link href="/blog/gas-leak-or-not" style={{ color: "var(--color-brand-blue)" }}>telling whether you have a gas leak</Link> covers what to do.</p>
              <p><strong>A relief valve that runs constantly</strong> or pours water.</p>
              <p><strong>Rusty or discoloured hot water</strong>, or rumbling and popping from the tank.</p>
              <p>If you are weighing up a replacement, what can go in often depends on the property as much as the budget. On a larger block, for example, a heat pump is a practical option, as our <Link href="/hot-water/castle-hill" style={{ color: "var(--color-brand-blue)" }}>Castle Hill hot water page</Link> explains. Our <Link href="/services/hot-water-systems" style={{ color: "var(--color-brand-blue)" }}>hot water systems service</Link> covers repairs and replacements for electric, gas, solar and heat pump systems.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why is there no hot water but the cold water works fine?</h3>
              <p>On an electric storage system, check the hot water circuit breaker at the switchboard. On a gas storage system, check whether the pilot light is still lit and whether other gas appliances work. On a continuous flow unit, check that it has power and look for an error code on the controller. If none of those explain it, the fault is inside the unit and needs a licensed plumber.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is it safe to keep resetting a tripped hot water breaker?</h3>
              <p>No. Resetting it once is reasonable. If it trips again, leave it off: a breaker that keeps tripping is protecting you from a fault such as a failed element or water in the wiring. Call a licensed plumber or electrician.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why is my hot water hot in the kitchen but lukewarm in the shower?</h3>
              <p>Bathroom outlets are usually supplied through a tempering valve that mixes hot and cold water down to a safe temperature. When the kitchen is hot and the bathrooms are lukewarm, a failing tempering valve is the usual cause. It is a common repair for a licensed plumber.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Still No Hot Water?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog repairs and replaces electric, gas, solar and heat pump hot water systems across Sydney, with no call-out fee and a fixed price before any work starts.</p>
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
