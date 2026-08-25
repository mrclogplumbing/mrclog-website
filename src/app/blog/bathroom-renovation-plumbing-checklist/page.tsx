import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Bathroom Renovation Plumbing Checklist for Sydney Homes | Mr. Clog Blog",
  description: "Planning a bathroom renovation? Get the plumbing right and the project flows smoothly. Get it wrong and you will pay for it twice. Here is the checklist every Sydney homeowner needs.",
  openGraph: {
    type: "article",
    title: "Bathroom Renovation Plumbing Checklist for Sydney Homes | Mr. Clog Blog",
    description: "Planning a bathroom renovation? Get the plumbing right and the project flows smoothly. Get it wrong and you will pay for it twice. Here is the checklist every Sydney homeowner needs.",
    url: "https://www.mrclog.com.au/blog/bathroom-renovation-plumbing-checklist",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-20",
    modifiedTime: "2026-05-20",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/bathroom-renovation-plumbing-checklist" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "before", title: "Before You Start" },
  { id: "layout", title: "Get the Layout Right" },
  { id: "rough-in", title: "Rough-In: What Goes Behind the Walls" },
  { id: "fixtures", title: "Choosing Fixtures" },
  { id: "compliance", title: "Compliance & Certificates" },
  { id: "sequence", title: "The Right Order of Trades" },
  { id: "mistakes", title: "Common Mistakes to Avoid" },
  { id: "faq", title: "FAQs" },
];

export default function BlogBathroomRenoPage() {
  return (
    <>
      <BlogPostSchema
        slug="bathroom-renovation-plumbing-checklist"
        title="Bathroom Renovation Plumbing Checklist for Sydney Homes"
        description="Planning a bathroom renovation? Get the plumbing right and the project flows smoothly. Get it wrong and you will pay for it twice. Here is the checklist every Sydney homeowner needs."
        datePublished="2026-05-20"
        faqs={[
          { q: "Do I need a licensed plumber for a bathroom renovation?", a: "Yes. In NSW any work involving water supply, drainage, or gas must be carried out by a licensed plumber. They must also issue a Certificate of Compliance for the work, which you need for insurance and resale." },
          { q: "Can I move the toilet or shower to a new spot?", a: "Usually yes, but moving waste plumbing is expensive because the drain pipe needs to maintain a downhill gradient back to the main stack. Moving a toilet or shower significantly can mean tearing up floors or building a step-up. A plumber should assess feasibility before you finalise the design." },
        ]}
      />

      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Bathroom Renovations</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>20 May 2026 &middot; 7 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>Bathroom Renovation Plumbing Checklist</h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Everything Sydney homeowners need to plan and sequence the plumbing.</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">Bathroom plumbing has to be planned before a single tile comes off. Confirm the layout, lock in fixture choices, get a licensed plumber to scope the rough-in, sequence the trades correctly (demo, plumbing rough-in, waterproofing, tiling, fit-off), and make sure you get the NSW Certificate of Compliance at the end.</p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>A bathroom renovation is one of the highest-value upgrades you can make to a Sydney home — and one of the easiest to get wrong. Most bathroom horror stories come down to plumbing decisions that were never made, or made too late. This checklist walks through the order of operations and the questions you need answered before the demolition starts.</p>

              <h2 id="before" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Before You Start</h2>
              <p><strong>Get the age of the existing plumbing.</strong> If your house has galvanised steel pipes (common in pre-1970s Sydney homes), they are at the end of their life. Replacing them while the walls are open is dramatically cheaper than doing it later. The same applies to old earthenware drains under the slab.</p>
              <p><strong>Check the hot water situation.</strong> Renovating a bathroom is the perfect time to upsize the hot water system if you are adding a second shower or a bath, or to switch to a more efficient heat pump or solar setup.</p>
              <p><strong>Confirm strata approval (if applicable).</strong> Strata-titled Sydney apartments almost always require formal approval for bathroom work. Get this in writing before signing contracts.</p>

              <h2 id="layout" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Get the Layout Right</h2>
              <p>Once tiles go down, moving a drain is a major job. Lock in the layout before you commit. Key things to nail down:</p>
              <p><strong>Toilet position:</strong> the further from the main stack, the trickier and more expensive the waste plumbing. Try to keep the toilet on the same wall as the existing soil pipe.</p>
              <p><strong>Shower drain location:</strong> linear drains and centre drains have different rough-in requirements. Decide before the floor is poured.</p>
              <p><strong>Vanity plumbing:</strong> wall-hung vanities need an in-wall cistern frame or a tall waste outlet. Confirm with your plumber what is feasible behind the wall.</p>
              <p><strong>Bath vs shower vs both:</strong> baths typically need a deeper floor recess for the trap. Decide early.</p>

              <h2 id="rough-in" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Rough-In: What Goes Behind the Walls</h2>
              <p>The rough-in stage is when the new pipework is installed before any walls or floors are closed up. Get this right or pay for it twice.</p>
              <p><strong>Mixer heights:</strong> Australian standard is typically 1000mm from finished floor for shower mixers and 100mm above bath rim for bath mixers. Confirm with your designer because tile thickness changes the finished floor level.</p>
              <p><strong>Shower head heights:</strong> standard is 2000mm. Add height for tall users — you can always lower the slide rail; you cannot raise a fixed outlet without re-tiling.</p>
              <p><strong>Concealed cisterns:</strong> if you are using an in-wall cistern, the wall has to be deep enough — sometimes that means furring out a wall with extra studs. Plan for it.</p>
              <p><strong>Floor wastes:</strong> every wet area needs a floor waste. Make sure they are positioned where water actually flows to, not just where they look neat.</p>

              <h2 id="fixtures" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Choosing Fixtures</h2>
              <p>Order all fixtures before the plumber starts rough-in — different brands have different rough-in dimensions. A plumber rough-ing in for a generic mixer and then being handed a Brodware or Astra Walker will likely need to re-do the rough-in.</p>
              <p><strong>WELS rating:</strong> by law all tapware sold in Australia must show a Water Efficiency Labelling and Standards (WELS) star rating. Higher stars use less water.</p>
              <p><strong>Watermark certification:</strong> any plumbing product that connects to mains water must carry the Australian WaterMark. Cheap online imports often do not — and using them voids your plumbing compliance and home insurance.</p>

              <h2 id="compliance" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Compliance and Certificates</h2>
              <p>In NSW, all plumbing work must be done by a licensed plumber and notified to NSW Fair Trading through the Plumbing and Drainage portal. At the end of the job you must receive a <strong>Certificate of Compliance</strong>. Keep it — you will need it for insurance claims and you will need it when you sell.</p>
              <p>Waterproofing is a separate certified trade in NSW. The plumber does not waterproof; a licensed waterproofer does, and they too must issue a certificate of compliance. Both certificates protect you.</p>

              <h2 id="sequence" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The Right Order of Trades</h2>
              <p>Bathroom trades happen in a strict sequence. Mess with the order and the job blows out in time and cost. Standard sequence:</p>
              <p>1. Demolition (strip back to studs and slab). 2. Plumbing rough-in (new pipes installed but not connected to fixtures). 3. Electrical rough-in (lights, fans, heated towel rails). 4. Wall sheeting where needed. 5. Waterproofing (with mandatory cure time). 6. Tiling (floor first, then walls). 7. Plumbing fit-off (fixtures installed and tested). 8. Electrical fit-off. 9. Silicone, final clean.</p>

              <h2 id="mistakes" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Common Mistakes to Avoid</h2>
              <p><strong>Choosing fixtures after rough-in.</strong> See above — different brands have different rough-in dimensions.</p>
              <p><strong>Skipping the waterproofing cure time.</strong> Membranes need time to cure properly. Tile too fast and the waterproofing fails — and you will not know until water is in the wall behind your new tiles.</p>
              <p><strong>Forgetting access panels.</strong> In-wall cisterns and concealed shower mixers must have access for future servicing. No access panel means chisel out tiles when something fails.</p>
              <p><strong>Using non-WaterMark fixtures.</strong> Voids your compliance and your insurance. Always check before buying online.</p>
              <p><strong>Reusing old fixtures without checking.</strong> The chrome shower rose from 1995 might look fine, but old rubber seals fail months later and you will be re-tiling.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Do I need a licensed plumber for a bathroom renovation?</h3>
              <p>Yes. In NSW any work involving water supply, drainage, or gas must be carried out by a licensed plumber. They must also issue a Certificate of Compliance for the work, which you need for insurance and resale.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can I move the toilet or shower to a new spot?</h3>
              <p>Usually yes, but moving waste plumbing is expensive because the drain pipe needs to maintain a downhill gradient back to the main stack. Moving a toilet or shower significantly can mean tearing up floors or building a step-up. A plumber should assess feasibility before you finalise the design.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <h3 className="font-logo font-bold text-xl text-white mb-2">Planning a Bathroom Renovation?</h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog handles bathroom renovation plumbing across Sydney — rough-in, fit-off, and Certificate of Compliance included.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={18} /> Call {PHONE}
                </a>
                <Link href="/services/bathroom-renovations" className="btn-outline-white">Bathroom Renovations</Link>
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
