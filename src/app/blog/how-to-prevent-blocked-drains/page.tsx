import type { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: pageTitle("How to Prevent Blocked Drains: A Room-by-Room Guide"),
  description:
    "Most blocked drains are 100% preventable. Here is exactly what to do in your kitchen, bathroom, toilet, laundry, and outdoors to keep your drains flowing.",
  openGraph: {
    type: "article",
    title: "How to Prevent Blocked Drains: A Room-by-Room Guide",
    description: "Most blocked drains are 100% preventable. Here is exactly what to do in your kitchen, bathroom, toilet, laundry, and outdoors to keep your drains flowing.",
    url: "https://www.mrclog.com.au/blog/how-to-prevent-blocked-drains",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-08",
    modifiedTime: "2026-05-08",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/how-to-prevent-blocked-drains" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "kitchen", title: "Kitchen" },
  { id: "bathroom", title: "Bathroom and Shower" },
  { id: "toilet", title: "Toilet" },
  { id: "laundry", title: "Laundry" },
  { id: "outdoor", title: "Outdoor and Stormwater" },
  { id: "maintenance", title: "Regular Maintenance" },
  { id: "real-causes", title: "What Actually Causes Most Blockages" },
  { id: "makes-it-worse", title: "Products That Make It Worse" },
  { id: "when-prevention-fails", title: "When Prevention Is Not the Answer" },
  { id: "monthly-routine", title: "A Ten-Minute Monthly Routine" },
  { id: "faq", title: "FAQs" },
];

export default function BlogPreventBlockedDrainsPage() {
  return (
    <>
      <BlogPostSchema
        slug="how-to-prevent-blocked-drains"
        title="How to Prevent Blocked Drains: A Room-by-Room Guide"
        description="Most blocked drains are 100% preventable. Here is exactly what to do in your kitchen, bathroom, toilet, laundry, and outdoors to keep your drains flowing."
        datePublished="2026-05-08"
        faqs={[{"q":"What are the early signs of a blocked drain?","a":"Slow drainage, gurgling sounds, mild smells, and water backing up when you run another fixture (e.g. shower drains slowly when toilet flushes)."},{"q":"Are enzyme drain treatments safe?","a":"Yes — enzyme-based treatments are safe for pipes and can help prevent buildup. Avoid harsh chemical drain cleaners; they corrode pipes and don’t solve serious blockages."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue-bright)" }}>Blocked Drains</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>8 May 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              How to Prevent Blocked Drains
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>A room-by-room guide for Sydney homes</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Most blocked drains are caused by hair, grease, food scraps, wet wipes, and tree roots. Use sink strainers, never pour grease down the sink, only flush the 3 P’s (pee, poo, paper), and run boiling water through drains monthly to keep them clear.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Blocked drains are one of the most common plumbing problems in Sydney homes — and one of the most preventable. Here’s how to keep them flowing freely, room by room.</p>

              <h2 id="kitchen" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Kitchen</h2>
              <p><strong>Never pour grease, oil, or fat down the sink.</strong> Even with hot water, it cools and solidifies inside your pipes, building up over months until it forms a complete blockage. Wipe greasy pans with paper towel before washing.</p>
              <p>Use a sink strainer to catch food scraps. Even a few rice grains or coffee grounds a day add up. Empty the strainer into the bin, not down the sink.</p>

              <h2 id="bathroom" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Bathroom and Shower</h2>
              <p>Hair is the number one cause of bathroom drain blockages. Install a hair catcher in every shower drain (a $5 investment). Clean it weekly.</p>
              <p>Avoid pouring loose hair from a hairbrush into the sink or toilet. Bin it instead.</p>

              <h2 id="toilet" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Toilet</h2>
              <p>Only flush the three P’s: pee, poo, and (toilet) paper. Even “flushable” wet wipes don’t break down properly and are responsible for most major sewer blockages in Sydney.</p>
              <p>Other things that should NEVER go in the toilet: paper towels, tissues, sanitary products, cotton buds, dental floss, condoms, nappies, cat litter.</p>

              <h2 id="laundry" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Laundry</h2>
              <p>Lint from clothes is a major cause of laundry drain blockages. Make sure your washing machine’s lint filter is in place and clean it regularly.</p>
              <p>Don’t use excessive detergent — too many suds can build up in pipes and trap other debris.</p>

              <h2 id="outdoor" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Outdoor and Stormwater</h2>
              <p>Tree roots are the leading cause of major drain blockages in older Sydney homes. Don’t plant trees with aggressive root systems near your sewer line. Ensure garden beds don’t slope toward your house or stormwater drains.</p>
              <p>Clean leaves and debris out of stormwater grates regularly, especially before heavy rain.</p>

              <h2 id="maintenance" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Regular Maintenance</h2>
              <p>Pour a kettle of boiling water down kitchen and bathroom drains once a month to dissolve early grease and soap buildup before it sets.</p>
              <p>For older homes (or homes with large trees), book a CCTV drain inspection every 2–3 years to catch tree-root intrusion before it causes a full blockage.</p>

              <h2 id="real-causes" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What Actually Causes Most Blockages</h2>

              <p>Prevention works better when you know what you are preventing. In Sydney homes, the overwhelming majority of blockages come down to four things.</p>

              <p><strong>Fat and grease</strong> poured down the kitchen sink, which cools and hardens on the pipe wall and then catches everything that follows.</p>

              <p><strong>Hair and soap</strong> in bathroom wastes, binding into a mat that water eventually cannot pass.</p>

              <p><strong>Wipes and sanitary products</strong> in toilets, which do not break down the way paper does regardless of what the packet claims.</p>

              <p><strong>Tree roots</strong> entering through cracked or perished joints in older drainage — the one cause no amount of careful use will prevent, covered in our guide on <Link href="/blog/tree-roots-in-drains" style={{ color: "var(--color-brand-blue)" }}>tree roots in drains</Link>.</p>

              <p>The first three are entirely within your control. The fourth is a pipe condition problem, and knowing the difference tells you whether better habits will help.</p>


              <h2 id="makes-it-worse" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Products That Make It Worse</h2>

              <p>Some of the things marketed for drains actively shorten the life of your plumbing.</p>

              <p><strong>Caustic drain cleaners</strong> generate heat and can soften or damage PVC and older pipework. They frequently fail to clear a real blockage, and they leave the drain hazardous for whoever opens it next — including a plumber, who should be told if you have used one.</p>

              <p><strong>“Flushable” wipes</strong> are the single biggest change in blockage patterns over the last decade. They pass the toilet and then do not break down, catching on any irregularity downstream.</p>

              <p><strong>In-sink food waste disposers</strong> reduce visible waste but send fine organic matter into a system that was not designed for it. If you have one, it makes careful fat disposal more important rather than less.</p>


              <h2 id="when-prevention-fails" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When Prevention Is Not the Answer</h2>

              <p>If you are doing everything right and a drain still blocks on a cycle of months, the problem is the pipe rather than the use.</p>

              <p>Repeat blockages in the same location, several fixtures draining slowly at once, gurgling when another fixture is used, or water rising in the shower when the washing machine empties all point to a shared line problem rather than anything happening at the plughole.</p>

              <p>At that point the useful spend is a camera inspection rather than another clearing. Clearing treats the symptom; knowing whether the pipe is root-damaged, cracked, sagging or simply coated tells you what will actually stop it.</p>


              <h2 id="monthly-routine" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>A Ten-Minute Monthly Routine</h2>


              <p>Most of this is habit rather than work. A short routine once a month prevents the large majority of callouts.</p>


              <p><strong>Flush the drains you use most</strong> with a kettle of hot — not boiling — water and a squirt of dish soap, poured slowly. Boiling water can damage PVC joints and older fittings, so keep it just off the boil.</p>


              <p><strong>Pull and clean the shower and basin grates.</strong> Two minutes with an old toothbrush removes the hair and soap film before it becomes a mat.</p>


              <p><strong>Run every tap you rarely use</strong>, including the spare bathroom and the laundry tub, and tip water down any floor waste. This keeps trap seals full and stops sewer gas getting in.</p>


              <p><strong>Check the outside.</strong> Clear leaves from gully grates and stormwater inlets, particularly before storm season.</p>


              <p>Do that monthly and the only blockages left are the ones caused by the pipe itself rather than by what goes into it.</p>



              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>What are the early signs of a blocked drain?</h3>
              <p>Slow drainage, gurgling sounds, mild smells, and water backing up when you run another fixture (e.g. shower drains slowly when toilet flushes).</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Are enzyme drain treatments safe?</h3>
              <p>Yes — enzyme-based treatments are safe for pipes and can help prevent buildup. Avoid harsh chemical drain cleaners; they corrode pipes and don’t solve serious blockages.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Got a Blocked Drain That Won’t Budge?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog clears blocked drains across Sydney with CCTV inspection and high-pressure jetting. Same-day service.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/blocked-drains" className="btn-outline-white">Blocked Drain Services</Link>
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
