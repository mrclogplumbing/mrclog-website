import type { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";
import BlogFigure from "@/components/blog/BlogFigure";

export const metadata: Metadata = {
  title: pageTitle("Braided Flexi Hoses: How to Spot One Before It Bursts"),
  description:
    "Braided flexi hoses under sinks and toilets can fail without warning and flood a home in minutes. How to check yours, the warning signs, and what to do.",
  openGraph: {
    type: "article",
    title: "Braided Flexi Hoses: How to Spot One Before It Bursts",
    description: "Braided flexi hoses under sinks and toilets can fail without warning and flood a home in minutes. How to check yours, the warning signs, and what to do.",
    url: "https://www.mrclog.com.au/blog/braided-flexi-hose-failure",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-09-23",
    modifiedTime: "2026-09-23",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/photos/flexi-hose-failure.webp", width: 1600, height: 1200, alt: "Close-up of a braided flexible tap hose with the stainless braid frayed and broken at the failure point" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/braided-flexi-hose-failure" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "what-they-are", title: "What a Flexi Hose Is" },
  { id: "why-they-fail", title: "Why They Fail" },
  { id: "warning-signs", title: "Warning Signs" },
  { id: "check", title: "The 10-Minute Check" },
  { id: "burst", title: "If One Bursts" },
  { id: "replacement", title: "Replacing Them" },
  { id: "faq", title: "FAQs" },
];

export default function BlogBraidedFlexiHoseFailurePage() {
  return (
    <>
      <BlogPostSchema
        slug="braided-flexi-hose-failure"
        title="Braided Flexi Hoses: How to Spot One Before It Bursts"
        description="Braided flexi hoses under sinks and toilets can fail without warning and flood a home in minutes. How to check yours, the warning signs, and what to do."
        datePublished="2026-09-23"
        faqs={[{"q":"How often should braided flexi hoses be replaced?","a":"There is no single rule, so follow the manufacturer's guidance for the hose you have. As a practical habit, check every hose in the house once a year and replace any showing rust, fraying, kinks or weeping at the fittings straight away. Hoses that have been in place for many years are worth replacing as a set."},{"q":"Why did my flexi hose burst when it looked fine?","a":"The part that holds the water is a rubber tube inside the braid, and it ages out of sight. Corrosion from cleaning products stored under the sink, a tight bend or twist from installation, and high mains pressure all weaken it. The braid can look clean right up until the inner tube gives way."},{"q":"Is a burst flexi hose an emergency?","a":"Yes. A burst hose releases mains-pressure water continuously until it is turned off. Close the isolation valve under the fixture or the main stop tap at the meter first, then call a plumber."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue-bright)" }}>Emergency Plumbing</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>23 September 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Braided Flexi Hoses: Spot One Before It Bursts
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>The small hose under your sink that can flood a house</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Braided flexi hoses connect your taps, toilets and appliances to the water supply, and they fail when the rubber tube inside the braid perishes. Look under every sink and behind every toilet for rust spots, frayed or broken strands, kinks, bulges and moisture at the fittings. Any hose showing one of those signs should be replaced now, not after it bursts.
              </p>
            </div>

            <BlogFigure
              src="/photos/flexi-hose-failure.webp"
              alt="Close-up of a braided flexible tap hose with the stainless braid frayed and broken at the failure point"
              caption="A braided hose about to let go. The braid has frayed and broken in one spot along its length, which is easy to miss from above the sink."
              priority
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Most people have never looked at the hoses under their kitchen sink. They sit in the back of a cupboard behind the cleaning products, doing their job for years, and then one day one of them lets go at full mains pressure.</p>
              <p>A failed flexi hose does not drip politely. It sprays, and it keeps spraying until someone turns the water off. If that happens overnight or while you are at work, the damage is to floors, cabinetry and the rooms below. The good news is that most hoses show warning signs well before they fail, and checking them takes about ten minutes.</p>

              <h2 id="what-they-are" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>What a braided flexi hose actually is</h2>
              <p>A flexi hose is the short, flexible connector that runs from the isolation valve on the wall to a tap, toilet cistern or appliance. The water runs through a rubber or synthetic tube. Around that tube is a woven stainless steel braid, which stops the tube ballooning under pressure. Crimped brass or steel fittings hold it all together at each end.</p>
              <p>A typical Sydney home has more of them than people expect: two under each kitchen and bathroom basin mixer, one on every toilet cistern, and often more on the dishwasher, washing machine, fridge water filter and laundry tub.</p>
              <p>The braid is the part you can see, but the rubber tube inside is what holds the water back. When the braid is damaged, the tube underneath is left without support.</p>

              <h2 id="why-they-fail" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Why they fail</h2>
              <p><strong>Corrosion from what is stored beside them.</strong> Bleach, chlorine-based cleaners and drain chemicals give off fumes that attack the stainless braid in a closed cupboard. Rust spots on the braid are the first sign, and once strands corrode through, the braid can no longer do its job.</p>
              <p><strong>Tight bends and twists.</strong> A hose installed with a sharp bend, a twist along its length, or pulled taut because it is slightly too short puts constant stress on one spot. That is often where it eventually gives way, or at the join with the crimped fitting.</p>
              <p><strong>High water pressure.</strong> Hoses are rated for a working pressure, and a home where the mains pressure runs high, or a pressure limiting valve has failed, works them harder every day. Our guide to <Link href="/blog/water-pressure-too-high-or-too-low" style={{ color: "var(--color-brand-blue)" }}>water pressure that is too high or too low</Link> explains how to tell.</p>
              <p><strong>Age.</strong> The inner tube hardens and perishes over time, however well the hose was installed. A hose that has been under a sink for many years is on borrowed time even if it looks clean.</p>
              <p><strong>Poor-quality hoses.</strong> Hoses used for drinking water in Australia should carry WaterMark certification. Uncertified hoses bought cheaply online are a gamble with your floors.</p>

              <h2 id="warning-signs" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Warning signs to look for</h2>
              <p>Any of these means the hose should be replaced:</p>
              <p><strong>Rust or brown discolouration</strong> anywhere on the braid, even a small patch.</p>
              <p><strong>Frayed or broken strands</strong>, especially where the braid meets the crimped fitting. This is a common failure point.</p>
              <p><strong>Bulges or a kink</strong> in the hose. A bulge means the inner tube is already pushing through the braid.</p>
              <p><strong>Moisture, green staining or mineral crust</strong> at either fitting, which points to a slow weep.</p>
              <p><strong>A swollen or stained cupboard base</strong> under the sink. Particleboard soaks up small leaks for months before anyone notices.</p>

              <BlogFigure
                src="/photos/tap-connection-hoses.webp"
                alt="Braided flexi hose connected to a chrome under-sink isolation valve, with the braid frayed and broken just past the crimped fitting"
                caption="Under a basin: the braid has frayed and broken just past the crimped fitting at the isolation valve. From standing height, this hose looks fine."
              />

              <h2 id="check" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The 10-minute check</h2>
              <p>Grab a torch and go room by room. Clear the cupboard under each sink so you can actually see the hoses, and check behind each toilet.</p>
              <p><strong>1. Look along the whole length</strong> of each hose, including the back side, for rust, fraying and bulges.</p>
              <p><strong>2. Run a dry tissue around each fitting.</strong> Any damp patch on the tissue means a weep.</p>
              <p><strong>3. Check the bend.</strong> The hose should follow a gentle curve with no kink or twist, and should not be pulled tight.</p>
              <p><strong>4. Find the isolation valves</strong> and make sure you know which way turns them off. They are the small taps on the wall where each hose starts. If a valve is seized or missing, note it: that is the first thing you will need in an emergency.</p>
              <p><strong>5. Move the cleaning chemicals</strong> out of the cupboard, or at least away from the hoses, and make sure lids are closed.</p>
              <p>Do this once a year. It is one of the cheapest pieces of flood prevention you can do in a home.</p>

              <h2 id="burst" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>If one bursts</h2>
              <p>Turn off the isolation valve under that fixture straight away. If you cannot reach it, it will not turn, or you cannot tell which hose has failed, turn off the main stop tap, which is usually beside the water meter at the front of the property.</p>
              <p>If water has reached power points, appliances or the ceiling below, switch off the power at the switchboard if you can do so safely and without standing in water. Then move what you can off the wet floor, take photos for your insurer, and call a plumber. Our guide to <Link href="/blog/burst-pipe-first-5-minutes" style={{ color: "var(--color-brand-blue)" }}>the first five minutes after a burst pipe</Link> walks through it step by step, and our <Link href="/services/emergency-plumbing" style={{ color: "var(--color-brand-blue)" }}>emergency plumbing</Link> team is available 24/7.</p>

              <h2 id="replacement" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Replacing them</h2>
              <p>Replacing a flexi hose is a quick job for a licensed plumber, and it is usually worth doing the whole house in one visit rather than one hose at a time. Hoses installed together have aged together.</p>
              <p>A good replacement uses a WaterMark-certified hose of the right length, so it can sit in a gentle curve without strain, fitted without over-tightening. We also check the isolation valves while we are there, because a valve that will not close is no help on the day a hose fails.</p>
              <p>If the hose has been leaking slowly for a while, it is worth checking the cabinetry and floor underneath. Water that has been getting into a cupboard base or subfloor for months can do more damage than the hose itself.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How often should braided flexi hoses be replaced?</h3>
              <p>There is no single rule, so follow the manufacturer&rsquo;s guidance for the hose you have. As a practical habit, check every hose in the house once a year and replace any showing rust, fraying, kinks or weeping at the fittings straight away. Hoses that have been in place for many years are worth replacing as a set.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why did my flexi hose burst when it looked fine?</h3>
              <p>The part that holds the water is a rubber tube inside the braid, and it ages out of sight. Corrosion from cleaning products stored under the sink, a tight bend or twist from installation, and high mains pressure all weaken it. The braid can look clean right up until the inner tube gives way.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is a burst flexi hose an emergency?</h3>
              <p>Yes. A burst hose releases mains-pressure water continuously until it is turned off. Close the isolation valve under the fixture or the main stop tap at the meter first, then call a plumber.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Found a Hose That Looks Like This?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog replaces flexi hoses and isolation valves across Sydney, with no call-out fee and a fixed price before any work starts.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/taps-and-toilets" className="btn-outline-white">Tap &amp; Toilet Services</Link>
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
