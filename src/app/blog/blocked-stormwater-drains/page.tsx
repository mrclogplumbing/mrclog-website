import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Blocked Stormwater Drains: Why Your Yard Floods When It Rains | Mr. Clog Blog",
  description:
    "If your yard pools with water every time it rains hard, your stormwater drains are blocked. Here is what causes it, the warning signs, and how to fix it before water reaches your home.",
  openGraph: {
    type: "article",
    title: "Blocked Stormwater Drains: Why Your Yard Floods When It Rains | Mr. Clog Blog",
    description: "If your yard pools with water every time it rains hard, your stormwater drains are blocked. Here is what causes it, the warning signs, and how to fix it before water reaches your home.",
    url: "https://www.mrclog.com.au/blog/blocked-stormwater-drains",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-07-16",
    modifiedTime: "2026-07-16",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/blocked-stormwater-drains" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "how-it-works", title: "How Stormwater Works" },
  { id: "causes", title: "Why It Blocks" },
  { id: "signs", title: "Warning Signs" },
  { id: "diy", title: "What You Can Do" },
  { id: "permanent", title: "Permanent Fixes" },
  { id: "faq", title: "FAQs" },
];

export default function BlogBlockedStormwaterDrainsPage() {
  return (
    <>
      <BlogPostSchema
        slug="blocked-stormwater-drains"
        title="Blocked Stormwater Drains: Why Your Yard Floods When It Rains"
        description="If your yard pools with water every time it rains hard, your stormwater drains are blocked. Here is what causes it, the warning signs, and how to fix it before water reaches your home."
        datePublished="2026-07-16"
        faqs={[{"q":"What is the difference between a stormwater drain and a sewer drain?","a":"Stormwater drains carry rainwater from your roof, gutters, and yard out to the street or a legal discharge point. Sewer drains carry wastewater from toilets, sinks, and showers to the sewer main. They are completely separate systems, and by law they must never be connected."},{"q":"Who is responsible for a blocked stormwater drain?","a":"The pipes on your property are the homeowner's responsibility up to the boundary or legal point of discharge. The council or Sydney Water is responsible for the public stormwater infrastructure beyond that. If your yard floods, the blockage is almost always in your own pipes."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Stormwater</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>16 July 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Blocked Stormwater Drains
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Why your yard floods every time it rains — and how to stop it</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                If water pools in your yard or overflows from pits every time it rains, your stormwater drains are blocked — usually by leaves, silt, or tree roots in the underground pipes. Clearing the surface grates helps, but a recurring flood needs a jet-blast clean and a CCTV inspection to find the real cause before water reaches your foundations.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Sydney doesn&rsquo;t get much rain — until it does. When a heavy downpour rolls through, a blocked stormwater system turns a normal storm into a backyard lake, and water that should be running to the street starts pooling against your house instead.</p>
              <p>Left unaddressed, that water finds its way under slabs, into subfloors, and against foundations. Here&rsquo;s what&rsquo;s going wrong and how to fix it.</p>

              <h2 id="how-it-works" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>How your stormwater system works</h2>
              <p>Your stormwater system is completely separate from your sewer. Rain lands on the roof, runs into the gutters, down the downpipes, and into underground pipes that carry it to the street kerb, a council drain, or another legal discharge point. Surface pits and grates around the yard collect ground-level runoff and feed the same network.</p>
              <p>It all relies on gravity and clear pipes. Block that path anywhere along the line and the water has nowhere to go but up and out.</p>

              <h2 id="causes" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Why stormwater drains block</h2>
              <p><strong>Leaves and debris.</strong> The number-one cause in Sydney. Autumn leaf fall clogs gutters, downpipes, and pit grates, then washes down and packs into the pipes.</p>
              <p><strong>Silt and sediment.</strong> Over years, fine dirt and sand settle in low points of the pipe and gradually choke the flow.</p>
              <p><strong>Tree roots.</strong> Just like sewer pipes, stormwater lines are a target for roots seeking moisture. If yours blocks every few months, roots are the likely culprit — our guide on <Link href="/blog/tree-roots-in-drains" style={{ color: "var(--color-brand-blue)" }}>tree roots in drains</Link> explains the fixes.</p>
              <p><strong>Collapsed or misaligned pipes.</strong> Old earthenware stormwater pipes crack, sag, and shift over time, trapping debris at the fault.</p>

              <h2 id="signs" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Warning signs to watch for</h2>
              <p>Don&rsquo;t wait for the next big storm to find out. Watch for:</p>
              <p><strong>Overflowing pits and grates</strong> that fill and spill during rain instead of draining away.</p>
              <p><strong>Pooling water in the yard</strong> that lingers for hours or days after the rain stops.</p>
              <p><strong>Water overflowing from gutters</strong> at the downpipe, a sign the pipe below is blocked.</p>
              <p><strong>Damp or water in the subfloor</strong> after heavy rain — the most serious sign, and a cue to act fast.</p>
              <p><strong>Erosion or soggy patches</strong> tracing the line of an underground pipe, which can indicate a crack.</p>

              <h2 id="diy" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What you can do yourself</h2>
              <p>Regular maintenance prevents most stormwater floods:</p>
              <p><strong>Clean your gutters and downpipes</strong> before the rainy months — this is by far the highest-impact thing you can do.</p>
              <p><strong>Clear pit grates</strong> of leaves and debris so surface water can actually get in.</p>
              <p><strong>Flush accessible downpipes</strong> with a garden hose to check they run freely to the underground line.</p>
              <p>Our <Link href="/blog/how-to-prevent-blocked-drains" style={{ color: "var(--color-brand-blue)" }}>room-by-room guide to preventing blocked drains</Link> covers the indoor side of the same habit. But if water still pools after the surface is clear, the blockage is underground — and that&rsquo;s beyond a garden hose.</p>

              <h2 id="permanent" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Permanent fixes for a recurring flood</h2>
              <p>When a stormwater drain blocks repeatedly, clearing the grate is only treating the symptom. The real fix has two stages:</p>
              <p><strong>1. Jet-blast cleaning.</strong> High-pressure water scours years of silt, leaves, and root matter out of the underground pipe and restores full flow.</p>
              <p><strong>2. CCTV inspection.</strong> A camera run through the cleaned line shows exactly what&rsquo;s going on — roots, cracks, sags, or a collapse — so the underlying cause can be fixed rather than just cleared again in three months. Where roots or damage are found, <Link href="/services/pipe-relining" style={{ color: "var(--color-brand-blue)" }}>pipe relining</Link> can seal the pipe permanently without digging up the yard.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why does my yard only flood in heavy rain?</h3>
              <p>A partly blocked drain can cope with light rain but is overwhelmed the moment volume spikes. The flooding is a warning sign that the pipe is running well below its designed capacity — it will only get worse as more debris builds up.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can a blocked stormwater drain damage my house?</h3>
              <p>Yes. Water pooling against the building can seep under slabs, saturate subfloors, undermine foundations, and cause rising damp and mould. It&rsquo;s one of the more damaging plumbing problems to leave unresolved, especially before Sydney&rsquo;s wetter months.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can I connect my stormwater to the sewer to fix it?</h3>
              <p>No — that&rsquo;s illegal and can cause serious problems for the whole system. Stormwater and sewer must remain separate. If your stormwater has nowhere to discharge, a licensed plumber can design a compliant solution such as a soak well or a rerouted line.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Yard Flooding Every Time It Rains?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog clears blocked stormwater drains with jet-blasting and CCTV inspection across Sydney — so the water goes where it should.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/stormwater-drainage" className="btn-outline-white">Stormwater Services</Link>
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
