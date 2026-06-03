import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Winter Plumbing Checklist: How to Prepare Your Sydney Home | Mr. Clog Blog",
  description:
    "Sydney winters are mild, but they still cause burst pipes, hot water failures, and blocked drains. Here is a simple checklist to prepare your home before the cold hits.",
  openGraph: {
    type: "article",
    title: "Winter Plumbing Checklist: How to Prepare Your Sydney Home | Mr. Clog Blog",
    description: "Sydney winters are mild, but they still cause burst pipes, hot water failures, and blocked drains. Here is a simple checklist to prepare your home before the cold hits.",
    url: "https://www.mrclog.com.au/blog/winter-plumbing-checklist-sydney",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-06-03",
    modifiedTime: "2026-06-03",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/winter-plumbing-checklist-sydney" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "pipes", title: "Insulate Exposed Pipes" },
  { id: "outdoor", title: "Outdoor Taps and Hoses" },
  { id: "hot-water", title: "Check Your Hot Water System" },
  { id: "drains", title: "Clear Drains and Gutters" },
  { id: "leaks", title: "Hunt Down Small Leaks" },
  { id: "shutoff", title: "Know Your Main Shut-Off" },
  { id: "faq", title: "FAQs" },
];

export default function BlogWinterPlumbingChecklistPage() {
  return (
    <>
      <BlogPostSchema
        slug="winter-plumbing-checklist-sydney"
        title="Winter Plumbing Checklist: How to Prepare Your Sydney Home for Cold Weather"
        description="Sydney winters are mild, but they still cause burst pipes, hot water failures, and blocked drains. Here is a simple checklist to prepare your home before the cold hits."
        datePublished="2026-06-03"
        faqs={[{"q":"Do pipes really freeze in Sydney?","a":"It is rare, but it happens — particularly in the Hills District, Blue Mountains fringe, and homes with exposed external pipework. Even a few degrees below zero overnight is enough to crack older copper or PVC pipes."},{"q":"When should I get my hot water system serviced?","a":"Before winter. Sediment buildup and ageing elements are the most common reasons systems fail in June and July, when demand is highest. A quick service in autumn is far cheaper than an emergency callout in July."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Seasonal</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>3 June 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Winter Plumbing Checklist for Sydney Homes
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Six simple steps to avoid a winter plumbing disaster</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sydney&rsquo;s winter plumbing failures almost all come from five things: uninsulated outdoor pipes, neglected hot water systems, leaf-clogged gutters and drains, small leaks that worsen with thermal stress, and homeowners who don&rsquo;t know where the main water shut-off is. Sort all five before July and you&rsquo;ll skip the emergency callout.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Sydney winters don&rsquo;t look like Canberra or Melbourne, but the call volume at Mr. Clog still doubles between June and August. Cold mornings, heavier hot water use, and months of leaf buildup all hit at the same time — and the homes that didn&rsquo;t prepare are the ones that flood at 6am on a Tuesday.</p>
              <p>Here&rsquo;s the checklist we give every customer.</p>

              <h2 id="pipes" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>1. Insulate Exposed Pipes</h2>
              <p>Any pipe that runs along an external wall, under a raised floor, or through an unheated garage is at risk. In the Hills District, Hawkesbury, and outer west, overnight temperatures regularly drop low enough to crack older copper joints.</p>
              <p>Foam pipe lagging from Bunnings costs about $4 a metre and takes minutes to fit. Pay particular attention to the cold-water inlet to your hot water unit — it&rsquo;s the most common pipe to split in a Sydney winter.</p>

              <h2 id="outdoor" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Outdoor Taps and Hoses</h2>
              <p>Disconnect garden hoses before the first cold snap. Water left in a connected hose can freeze, expand back into the tap, and crack the spindle or wall pipe behind it.</p>
              <p>If your outdoor taps drip in winter, fix them now. A slow drip becomes a frozen plug overnight, and a frozen plug becomes a burst pipe by sunrise.</p>

              <h2 id="hot-water" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. Check Your Hot Water System</h2>
              <p>If your hot water unit is more than 8 years old, get it serviced in autumn — not after it fails in July. Watch for rusty water, popping or rumbling sounds, leaks at the base, or a pressure relief valve that drips constantly. These are the signs it&rsquo;s on the way out.</p>
              <p>For gas systems, check that the pilot light is steady and blue. A yellow or unstable flame means it needs servicing before peak demand season.</p>

              <h2 id="drains" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. Clear Drains and Gutters</h2>
              <p>Autumn leaves are still the number-one cause of winter stormwater floods in Sydney. Clear gutters, downpipes, and the grates over your stormwater drains <em>before</em> the first heavy June rain.</p>
              <p>If your shower or kitchen sink has been draining slowly all autumn, deal with it now. Cold weather thickens grease and slows organic blockages even further — a half-blocked drain in May becomes a completely blocked one in July.</p>

              <h2 id="leaks" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5. Hunt Down Small Leaks</h2>
              <p>Cold weather causes pipes to contract slightly. That movement is enough to turn a tiny weep — the kind you&rsquo;ve been ignoring under the kitchen sink — into a real leak.</p>
              <p>Walk your house and check under every sink, around the dishwasher, behind the toilet, and at the hot water unit. Look for water stains, swollen cabinetry, or that faint musty smell. Fixing a $50 washer in June saves a $2,000 ceiling repair in August.</p>

              <h2 id="shutoff" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>6. Know Your Main Shut-Off</h2>
              <p>If a pipe bursts at 3am, the first thing you&rsquo;ll need to do is shut off the water. Most Sydney homes have the main isolation valve at the front boundary near the water meter, but some have an additional internal stop tap.</p>
              <p>Find yours now, while it&rsquo;s dry and light. Make sure it turns smoothly — old gate valves often seize. Show every adult in the house. Five minutes today saves thousands in water damage if the worst happens.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Do pipes really freeze in Sydney?</h3>
              <p>It is rare, but it happens — particularly in the Hills District, Blue Mountains fringe, and homes with exposed external pipework. Even a few degrees below zero overnight is enough to crack older copper or PVC pipes.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>When should I get my hot water system serviced?</h3>
              <p>Before winter. Sediment buildup and ageing elements are the most common reasons systems fail in June and July, when demand is highest. A quick service in autumn is far cheaper than an emergency callout in July.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Want a Pre-Winter Plumbing Check?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog does pre-winter inspections across Sydney — hot water, drains, leaks, and shut-off valves. One visit, no surprises in July.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services" className="btn-outline-white">See All Services</Link>
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
