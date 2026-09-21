import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Water Pressure Too High or Too Low? How to Diagnose It Yourself | Mr. Clog Blog",
  description:
    "Bad water pressure isn't just annoying — it can damage appliances or signal a hidden leak. Here's how to test your own pressure in 5 minutes and know when it's serious.",
  openGraph: {
    type: "article",
    title: "Water Pressure Too High or Too Low? How to Diagnose It Yourself | Mr. Clog Blog",
    description: "Bad water pressure isn't just annoying — it can damage appliances or signal a hidden leak. Here's how to test your own pressure in 5 minutes and know when it's serious.",
    url: "https://www.mrclog.com.au/blog/water-pressure-too-high-or-too-low",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-20",
    modifiedTime: "2026-05-20",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/water-pressure-too-high-or-too-low" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "test", title: "The Quick Test" },
  { id: "too-high", title: "If Pressure Is Too High" },
  { id: "too-low", title: "If Pressure Is Too Low" },
  { id: "hidden-leak", title: "The Hidden Warning Sign" },
  { id: "pressure-vs-flow", title: "Pressure and Flow Are Different Problems" },
  { id: "only-one-tap", title: "When It Is Only One Outlet" },
  { id: "plv-lifespan", title: "Pressure-Limiting Valves Do Not Last Forever" },
  { id: "when-to-call", title: "When It Is Worth Calling Someone" },
  { id: "what-normal-looks-like", title: "What Normal Actually Looks Like" },
  { id: "faq", title: "FAQs" },
];

export default function BlogWaterPressurePage() {
  return (
    <>
      <BlogPostSchema
        slug="water-pressure-too-high-or-too-low"
        title="Water Pressure Too High or Too Low? How to Diagnose It Yourself"
        description="Bad water pressure isn't just annoying — it can damage appliances or signal a hidden leak. Here's how to test your own pressure in 5 minutes and know when it's serious."
        datePublished="2026-05-20"
        faqs={[{"q":"What is normal household water pressure?","a":"Normal household water pressure sits between 350 and 500 kPa. Above 500 kPa is too high and risks damaging appliances; below 200 kPa is too low and may indicate a partial blockage or failing valve."},{"q":"Do I need a pressure-limiting valve?","a":"In NSW, all homes built since 2008 are required to have a pressure-limiting valve. They typically last around a decade before they need replacement."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Plumbing Advice</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>20 May 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Water Pressure Too High or Too Low?
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>How to diagnose it yourself in 5 minutes</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Screw an inexpensive pressure gauge onto any outside tap and turn it on fully. Normal household pressure is 350–500 kPa. Above that, you risk damaging appliances; below 200 kPa, something is restricting your supply.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Most Sydney homeowners only think about water pressure when something is clearly wrong — a weak shower, a banging pipe, or a suddenly huge water bill. But pressure issues are one of the easiest things to diagnose yourself before booking a callout.</p>

              <h2 id="test" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>The quick test</h2>
              <p>Pick up a screw-on pressure gauge from any hardware store. Screw it onto an outside tap, turn the tap fully on, and read the dial. Normal household pressure sits between 350 and 500 kPa. Anything above 500 kPa is too high; below 200 kPa is too low.</p>

              <h2 id="too-high" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>If pressure is too high</h2>
              <p>High pressure shortens the life of every appliance in your home — dishwashers, washing machines, and especially hot water units. Sydney Water mains can deliver pressure well above what household plumbing is designed for, which is why a pressure-limiting valve (PLV) is required by the plumbing code on all homes built after 2008.</p>
              <p>If yours is older, or your PLV has failed (they typically last about a decade), water hammer and leaks become inevitable. Replacing a failed PLV is a straightforward job for a licensed plumber.</p>

              <h2 id="too-low" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>If pressure is too low</h2>
              <p>Low pressure across the whole house usually means a partially closed main stop tap, a clogged PLV, or a corroded galvanised supply line in older homes.</p>
              <p>Low pressure at just one outlet is almost always a blocked aerator or cartridge — a 10-minute DIY fix.</p>

              <h2 id="hidden-leak" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The hidden warning sign</h2>
              <p>If your water meter is ticking over while every tap and appliance in the house is off, you have a leak somewhere — and pressure issues often go hand in hand with it. Do not ignore it; underground leaks can cause significant damage by the time they surface.</p>
              <p>Not sure what your reading means? Send us a photo of the gauge and we will tell you straight up whether it is a callout job or a DIY fix.</p>

              <h2 id="pressure-vs-flow" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Pressure and Flow Are Different Problems</h2>

              <p>These two get used interchangeably and they are not the same thing, which is why so many pressure complaints get misdiagnosed.</p>

              <p><strong>Pressure</strong> is the force in the pipe when nothing is running. <strong>Flow</strong> is how much water actually comes out per minute when you open a tap. You can have perfectly good pressure and poor flow — that is a restriction somewhere, not a pressure problem.</p>

              <p>The practical difference: a shower that feels weak but fills a bucket quickly has a flow-spreading issue at the head. A shower that is weak and fills the bucket slowly has a genuine supply problem upstream. Two very different jobs, and worth establishing before anyone quotes.</p>


              <h2 id="only-one-tap" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When It Is Only One Outlet</h2>

              <p>If the problem is confined to a single tap or shower, the cause is almost always local and often trivial.</p>

              <p>The usual suspects are a blocked aerator on the tap spout, a clogged shower head, a partly closed isolation valve under the sink, or a perished washer or cartridge inside the tap itself. Aerators and shower heads unscrew and soak clean in vinegar in an afternoon.</p>

              <p>It is worth ruling these out before calling anyone. A plumber attending to unscrew a shower head is an expensive way to learn that lesson.</p>


              <h2 id="plv-lifespan" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Pressure-Limiting Valves Do Not Last Forever</h2>

              <p>If your home has a pressure-limiting valve — and in NSW most newer homes do — it is a mechanical part with a finite life, typically around a decade.</p>

              <p>When one fails it can go either way. Fail open and your household pressure climbs to whatever the street is delivering, which is what damages appliances, flexible hoses and tap seals. Fail closed and pressure drops off across the whole house at once.</p>

              <p>A sudden change in pressure throughout the home, in either direction, points at the valve before it points at the network. It is a comparatively cheap part, and replacing a failing one is considerably cheaper than the burst flexible hose it can eventually cause.</p>


              <h2 id="when-to-call" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When It Is Worth Calling Someone</h2>

              <p>Some pressure problems are worth living with for a week; others are not.</p>

              <p>Call promptly if pressure has changed suddenly rather than gradually, if you are hearing banging or hammering in the walls when taps shut off, if pressure is low across the whole house with no obvious cause, or if you have noticed damp, staining or an unexplained rise in your water bill alongside it.</p>

              <p>That last combination matters most. Falling pressure together with rising usage is the classic signature of a leak somewhere you cannot see, and it is worth investigating quickly.</p>


              <h2 id="what-normal-looks-like" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What Normal Actually Looks Like</h2>


              <p>It helps to know what you are aiming for before deciding something is wrong.</p>


              <p>Australian plumbing standards put a maximum static pressure at the fixture of 500 kPa, and most homes sit comfortably between about 350 and 500. Below roughly 200 kPa, showers and appliances start to underperform noticeably. Above 500, you are shortening the life of flexible hoses, tap seals, and the inlet valves on your washing machine and dishwasher.</p>


              <p>Worth remembering that pressure varies naturally through the day. Early morning and early evening are peak demand across the network, so a reading taken at 7am will usually be lower than the same tap at 11am. If you are measuring, take a couple of readings at different times before concluding anything.</p>



              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>What is normal household water pressure?</h3>
              <p>Normal household water pressure sits between 350 and 500 kPa. Above 500 kPa is too high and risks damaging appliances; below 200 kPa is too low and may indicate a partial blockage or failing valve.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Do I need a pressure-limiting valve?</h3>
              <p>In NSW, all homes built since 2008 are required to have a pressure-limiting valve. They typically last around a decade before they need replacement.</p>
            </div>

            <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Pressure Problems? We Can Help</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog diagnoses and fixes water pressure issues across Sydney — from PLV replacement to leak detection.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services" className="btn-outline-white">All Services</Link>
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
