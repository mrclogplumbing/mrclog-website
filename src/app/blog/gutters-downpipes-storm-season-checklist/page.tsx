import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Gutters and Downpipes: The Storm Season Checklist for Sydney Homes | Mr. Clog Blog",
  description:
    "Sydney storm season arrives fast in spring, and blocked gutters cause more ceiling damage than leaking roofs do. Here is a practical checklist to get your gutters, downpipes, and flashings ready before the first big downpour.",
  openGraph: {
    type: "article",
    title: "Gutters and Downpipes: The Storm Season Checklist for Sydney Homes | Mr. Clog Blog",
    description: "Sydney storm season arrives fast in spring, and blocked gutters cause more ceiling damage than leaking roofs do. Here is a practical checklist to get your gutters, downpipes, and flashings ready before the first big downpour.",
    url: "https://www.mrclog.com.au/blog/gutters-downpipes-storm-season-checklist",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-08-25",
    modifiedTime: "2026-08-25",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/gutters-downpipes-storm-season-checklist" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "why-it-matters", title: "Why Storms Catch Homes Out" },
  { id: "warning-signs", title: "Signs From the Last Storm" },
  { id: "gutters", title: "Checking Your Gutters" },
  { id: "downpipes", title: "Testing Your Downpipes" },
  { id: "flashings", title: "Flashings and Valleys" },
  { id: "when-to-call", title: "When to Call a Roof Plumber" },
  { id: "faq", title: "FAQs" },
];

export default function BlogGuttersDownpipesStormSeasonChecklistPage() {
  return (
    <>
      <BlogPostSchema
        slug="gutters-downpipes-storm-season-checklist"
        title="Gutters and Downpipes: The Storm Season Checklist for Sydney Homes"
        description="Sydney storm season arrives fast in spring, and blocked gutters cause more ceiling damage than leaking roofs do. Here is a practical checklist to get your gutters, downpipes, and flashings ready before the first big downpour."
        datePublished="2026-08-25"
        faqs={[{"q":"How often should gutters be cleaned in Sydney?","a":"Twice a year suits most homes — once before storm season in early spring and once in late autumn after leaf fall. Homes under gum trees or with a lot of overhanging cover often need it quarterly, because gum leaves and bark strip build up far faster than most people expect."},{"q":"Why does water overflow the front of my gutter during heavy rain?","a":"Usually one of three things: the gutter is blocked with debris, the downpipe below it cannot clear water fast enough, or the gutter has sagged so water pools instead of running to the outlet. If it only happens in very heavy rain and the gutter is clean, the downpipe or stormwater line is the likely restriction."},{"q":"Is a leaking gutter a roof plumber job or a general handyman job?","a":"Gutters, downpipes, flashings, and the stormwater connection are roof plumbing work, and in NSW that is licensed plumbing work. A licensed roof plumber can also confirm whether the water entering your ceiling is a gutter problem or a roof problem, which is not always obvious from inside."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Roof Plumbing</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>25 August 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Get Your Gutters Ready for Storm Season
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>A practical checklist before the first big Sydney downpour</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Before storm season, clear your gutters of leaves and sediment, flush every downpipe to confirm it runs free, check for sagging or rusted sections, and look for stains around flashings and roof valleys. Most storm damage inside a home starts with water overflowing a blocked gutter backwards into the eaves — not with a hole in the roof.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>The first serious storm of the season is the one that finds every weakness at once. Gutters that coped fine with light winter rain suddenly overflow, and water appears somewhere it has no business being — a ceiling stain, a damp cornice, water running down the inside of a window frame.</p>
              <p>Almost none of it is caused by a hole in the roof. It is caused by water that had nowhere to go.</p>

              <h2 id="why-it-matters" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Why storms catch homes out</h2>
              <p>Your roof drainage is a system with a capacity, and Sydney storms routinely test the limit. A short, intense burst puts far more water across the roof in ten minutes than hours of steady drizzle ever will.</p>
              <p>When a gutter is half full of compacted leaf litter, its capacity has already been cut before the rain starts. Water backs up, rises above the back edge of the gutter, and runs down inside the eaves and wall cavity instead of away from the house.</p>
              <p>That is the failure mode that damages plaster, insulation, and cornices. And it is almost entirely preventable with an afternoon of maintenance.</p>

              <h2 id="warning-signs" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Signs your last storm already left you</h2>
              <p>Before climbing anywhere, walk around the house and look for what the previous downpour recorded:</p>
              <p><strong>Staining on the fascia or under the eaves.</strong> Dark streaks below the gutter line mean water has been going over the back or through a joint.</p>
              <p><strong>Erosion or splash-back at ground level.</strong> A trench in the garden bed or mud splashed up a wall marks a spot where water has been dumping rather than draining.</p>
              <p><strong>Plants growing in the gutter.</strong> Not subtle, but people stop seeing it. Anything growing up there means years of accumulated sediment.</p>
              <p><strong>Ceiling stains that dried and stayed.</strong> An old ring on the plaster is unresolved history, not a closed case.</p>
              <p><strong>Water pooling near the house after rain.</strong> That may point past the gutters to the stormwater system itself — worth reading our guide on <Link href="/blog/blocked-stormwater-drains" style={{ color: "var(--color-brand-blue)" }}>blocked stormwater drains</Link>.</p>

              <h2 id="gutters" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Checking your gutters safely</h2>
              <p>A word on ladders first, because we would rather you read the rest of this than fall off something. Work from a stable ladder on firm level ground, have someone home with you, and stay off the roof itself — tiles crack and metal sheeting is lethal when wet. If your house is two storeys or the roof is steep, this is not a DIY job.</p>
              <p>From the ladder, look for:</p>
              <p><strong>Debris load.</strong> Leaves, twigs, gum bark, and the fine black sediment underneath. That sediment holds water against the metal and is what rusts gutters out from the inside.</p>
              <p><strong>Sagging sections.</strong> Water should run to the outlet. Where the gutter has dropped between brackets, water sits and stagnates, and mosquitoes take an interest.</p>
              <p><strong>Rust, splits, and failed joints.</strong> Check corners and joins especially — that is where old gutters part company.</p>
              <p><strong>The back edge.</strong> Look at how the gutter meets the fascia. If the roof sheeting or tiles do not sit far enough into the gutter, heavy rain will overshoot the back edge no matter how clean it is.</p>

              <h2 id="downpipes" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Testing your downpipes</h2>
              <p>Clean gutters draining into a blocked downpipe still flood. This is the step most people skip.</p>
              <p>Run a hose into the gutter near each outlet and watch two things: whether water drains away briskly rather than pooling, and whether it actually emerges where you expect at the bottom.</p>
              <p>If it drains slowly, the downpipe is partly blocked — often at the first bend. If water goes in and never appears at the discharge point, the blockage is below ground in the stormwater line, which is a different and more serious problem than a leafy gutter.</p>
              <p>Also check the discharge point itself. Downpipes should carry water clear of the house. One quietly discharging against a wall or footing does slow, expensive damage over years.</p>

              <h2 id="flashings" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Flashings, valleys, and the bits people forget</h2>
              <p>Roof valleys — where two roof planes meet — carry a surprising volume of water and collect debris at the bottom. A blocked valley pushes water sideways under the tiles.</p>
              <p>Flashings around chimneys, skylights, vents, and wall junctions are the other classic entry point. Look for lifted edges, perished sealant, or rusted metal.</p>
              <p>From inside, the roof space on a dry day tells you a lot: daylight where there should not be any, damp timber, or water staining on the underside of the sarking. If you can see it, note where it is before you call — it saves diagnosis time.</p>

              <h2 id="when-to-call" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When to call a roof plumber</h2>
              <p>Call rather than climb when the house is two storeys or the roof is steep, when gutters are rusted through or sagging badly enough to need re-bracketing, when a downpipe is blocked below ground level, or when water is already coming inside.</p>
              <p>Gutters, downpipes, flashings, and the stormwater connection are licensed plumbing work in NSW — not general handyman work. A licensed <Link href="/services/roof-plumbing" style={{ color: "var(--color-brand-blue)" }}>roof plumber</Link> can also tell you whether the water reaching your ceiling started at the gutter or the roof, which is genuinely hard to judge from inside.</p>
              <p>The timing matters more than the task. Every plumber in Sydney is busy the week after the first big storm. Booking maintenance before the season starts is the difference between a scheduled visit and an emergency one.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How often should gutters be cleaned in Sydney?</h3>
              <p>Twice a year suits most homes — once before storm season in early spring, once in late autumn after leaf fall. Under gum trees, quarterly is more realistic, because bark strip and leaves build up far faster than people expect.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why does my gutter overflow at the front in heavy rain?</h3>
              <p>Usually the gutter is blocked, the downpipe cannot clear water fast enough, or the gutter has sagged so water pools instead of running to the outlet. If it only happens in very heavy rain and the gutter is clean, the downpipe or the stormwater line below is the restriction.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Are gutter guards worth installing?</h3>
              <p>They help a lot under heavy leaf cover, and they reduce how often someone needs to be on a ladder. They do not remove the need for maintenance — fine sediment still gets through, and guards themselves need clearing. Treat them as reducing the frequency, not ending it.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Get It Sorted Before the First Storm</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog handles gutters, downpipes, flashings, and stormwater across Sydney — upfront fixed pricing and $0 call-out.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/roof-plumbing" className="btn-outline-white">Roof Plumbing Services</Link>
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
