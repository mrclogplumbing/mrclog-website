import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "7 Signs Your Hot Water System Is About to Fail",
  description:
    "Don\u2019t get caught with a cold shower. Spot these 7 warning signs that your Sydney hot water system needs attention before it gives up completely.",
  openGraph: {
    type: "article",
    title: "7 Signs Your Hot Water System Is About to Fail",
    description: "Don’t get caught with a cold shower. Spot these 7 warning signs that your Sydney hot water system needs attention before it gives up completely.",
    url: "https://www.mrclog.com.au/blog/signs-your-hot-water-system-is-failing",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-08",
    modifiedTime: "2026-05-08",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/signs-your-hot-water-system-is-failing" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "rusty-water", title: "Rusty or Discoloured Water" },
  { id: "noises", title: "Strange Noises" },
  { id: "leaks", title: "Leaks Around the Tank" },
  { id: "cold", title: "Running Out of Hot Water" },
  { id: "age", title: "Age of System" },
  { id: "energy", title: "Rising Energy Bills" },
  { id: "check-yourself", title: "What to Check Yourself First" },
  { id: "relief-valve", title: "The Relief Valve — the Part Everyone Ignores" },
  { id: "plan-replacement", title: "Planning a Replacement Before It Fails" },
  { id: "how-long-they-last", title: "How Long Systems Actually Last" },
  { id: "faq", title: "FAQs" },
];

export default function BlogHotWaterSignsPage() {
  return (
    <>
      <BlogPostSchema
        slug="signs-your-hot-water-system-is-failing"
        title="7 Signs Your Hot Water System Is About to Fail"
        description="Don’t get caught with a cold shower. Spot these 7 warning signs that your Sydney hot water system needs attention before it gives up completely."
        datePublished="2026-05-08"
        faqs={[{"q":"How long does a hot water system last?","a":"Storage tanks last 8–12 years. Continuous flow (instantaneous) units last 15–20 years. Heat pump systems last 10–15 years."},{"q":"Can I replace a hot water system myself?","a":"No — in NSW, hot water installation must be done by a licensed plumber (and a licensed gasfitter for gas systems). DIY work voids insurance and warranties."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
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
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Catch the warning signs before you wake up to a cold shower</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Watch for rusty water, banging noises, leaks at the base, lukewarm showers, and rising energy bills. Hot water systems typically last 8–12 years — if yours is older and showing any of these signs, replacement is usually cheaper than waiting for a flood.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Hot water systems rarely fail without warning. The trick is knowing what to look for so you can act before you’re standing in a cold shower at 6am or mopping up a flooded laundry.</p>

              <h2 id="rusty-water" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>1. Rusty or Discoloured Hot Water</h2>
              <p>If only the hot tap runs rusty water (cold runs clear), the inside of your storage tank is corroding. Once the tank wall fails, you’ll have a flood. Time to replace.</p>

              <h2 id="noises" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Strange Noises</h2>
              <p>Banging, popping, or rumbling sounds usually mean sediment buildup at the bottom of the tank. The sediment overheats and steam pockets explode — reducing efficiency and damaging the tank.</p>

              <h2 id="leaks" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. Leaks Around the Tank</h2>
              <p>Any moisture pooling around the base is bad news. Small drips become floods quickly. If the tank itself is leaking (not just a fitting), replacement is the only option.</p>

              <h2 id="cold" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. Running Out of Hot Water Fast</h2>
              <p>If your morning shower goes lukewarm halfway through, you’ve likely got a failing element (electric) or a sediment-fouled burner (gas). Often repairable if caught early.</p>

              <h2 id="age" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5. Age of the System</h2>
              <p>Storage tanks last 8–12 years. Continuous flow units last 15–20. If yours is at or past its lifespan and showing any other sign on this list, replace before it fails.</p>

              <h2 id="energy" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>6. Rising Energy Bills</h2>
              <p>A failing element or sediment-coated burner has to work harder to heat the same amount of water. If your gas or electricity bill keeps climbing without explanation, your hot water system is often the culprit.</p>

              <h2 id="check-yourself" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What to Check Yourself First</h2>

              <p>Before you book anyone, five minutes of looking can tell you whether this is a system failure or something simpler.</p>

              <p><strong>Check the isolation valve is fully open.</strong> Valves get knocked, and a partly closed one produces exactly the weak, inconsistent hot water people assume is a dying system.</p>

              <p><strong>Check the thermostat setting</strong> if yours is accessible. Someone may have turned it down, and a setting that is too low is also a bacteria risk in a storage system.</p>

              <p><strong>Check whether it is every outlet or just one.</strong> Weak hot water at a single tap is a tap problem. Weak hot water everywhere is a system problem. This one distinction saves a lot of wasted diagnosis.</p>

              <p><strong>Look underneath.</strong> A damp patch, rust staining, or mineral crust on the floor around the base tells you the tank is already leaking, whatever else is happening.</p>


              <h2 id="relief-valve" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The Relief Valve — the Part Everyone Ignores</h2>

              <p>Every storage hot water system has a temperature and pressure relief valve, and it is the single most neglected component in Australian homes.</p>

              <p>Its job is to release pressure if the system overheats. It is a safety device, and a failed one is not a minor fault. Relief valves are generally designed to be eased open periodically so mineral buildup does not seize them — check the manufacturer&rsquo;s instructions for your unit, or have it done at a service.</p>

              <p>Two symptoms worth acting on: a valve that drips constantly rather than occasionally, which usually means it is failing or the system pressure is too high; and a valve that has never been operated in a decade, which may well be seized. Neither is expensive to address. Both are unpleasant if ignored.</p>


              <h2 id="plan-replacement" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Planning a Replacement Before It Fails</h2>

              <p>Hot water systems almost always fail at the worst time, because the worst time is winter when they are working hardest.</p>

              <p>If your system is past ten years and showing any of the signs above, the useful move is to decide now what you would replace it with — type, size, and roughly what it costs. That turns an emergency into a phone call.</p>

              <p>It also gives you the option of choosing properly rather than taking whatever is on the van. If you are weighing options, our comparison of <Link href="/blog/gas-vs-electric-vs-heat-pump-hot-water" style={{ color: "var(--color-brand-blue)" }}>gas, electric and heat pump systems</Link> covers what each suits.</p>

              <p>The other benefit is timing. A planned replacement can be scheduled; an emergency one happens at whatever rate applies on a Sunday.</p>


              <h2 id="how-long-they-last" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>How Long Systems Actually Last</h2>


              <p>Knowing the typical service life of your type of system turns guesswork into planning.</p>


              <p><strong>Electric storage</strong> units generally give around ten to fifteen years, depending heavily on water quality and whether the sacrificial anode was ever replaced. Most never are, which shortens tank life considerably.</p>


              <p><strong>Gas storage</strong> tends to run a similar course, often slightly shorter, since the tank faces the same corrosion pressures with added thermal cycling.</p>


              <p><strong>Instantaneous gas</strong> units have no tank to corrode and frequently outlast storage systems, though the electronics and heat exchanger eventually become the limiting parts.</p>


              <p><strong>Heat pumps</strong> are newer to most Australian homes, with expected life typically quoted around ten to fifteen years. The compressor is the component that decides it.</p>


              <p>Against those ranges, work out how old yours is. If you do not know, the compliance plate on the unit usually carries a manufacture date. A system in the last third of its expected life showing any warning sign is telling you something worth listening to.</p>



              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How long does a hot water system last?</h3>
              <p>Storage tanks: 8–12 years. Continuous flow (instantaneous): 15–20 years. Heat pump: 10–15 years.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can I replace a hot water system myself?</h3>
              <p>No — in NSW, hot water installation must be done by a licensed plumber (and a licensed gasfitter for gas systems). DIY work voids insurance and warranties.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Hot Water Trouble in Sydney?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog repairs and replaces all hot water systems — gas, electric, and heat pump. Same-day service across Sydney.</p>
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
