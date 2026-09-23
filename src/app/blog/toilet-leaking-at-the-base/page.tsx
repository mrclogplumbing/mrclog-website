import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";
import BlogFigure from "@/components/blog/BlogFigure";

export const metadata: Metadata = {
  title: "Toilet Leaking at the Base? The Five Usual Causes",
  description:
    "Water pooling around the base of your toilet can be condensation, a dripping connection, a failed seal, or waste water from the pan connector. Here is how to tell which, and when to call a plumber.",
  openGraph: {
    type: "article",
    title: "Toilet Leaking at the Base? The Five Usual Causes",
    description: "Water pooling around the base of your toilet can be condensation, a dripping connection, a failed seal, or waste water from the pan connector. Here is how to tell which, and when to call a plumber.",
    url: "https://www.mrclog.com.au/blog/toilet-leaking-at-the-base",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-09-23",
    modifiedTime: "2026-09-23",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/photos/toilet-cistern-removed.webp", width: 1200, height: 1600, alt: "Toilet cistern lifted off and laid on its side, showing the stained underside, outlet and perished seal" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/toilet-leaking-at-the-base" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "find-the-source", title: "Find the Source First" },
  { id: "condensation", title: "Condensation" },
  { id: "supply", title: "The Water Supply Connection" },
  { id: "cistern-seal", title: "The Cistern Seal" },
  { id: "pan-connector", title: "The Pan Connector" },
  { id: "cracked-pan", title: "A Cracked Pan" },
  { id: "why-it-matters", title: "Why Not to Wait" },
  { id: "faq", title: "FAQs" },
];

export default function BlogToiletLeakingAtTheBasePage() {
  return (
    <>
      <BlogPostSchema
        slug="toilet-leaking-at-the-base"
        title="Toilet Leaking at the Base? The Five Usual Causes"
        description="Water pooling around the base of your toilet can be condensation, a dripping connection, a failed seal, or waste water from the pan connector. Here is how to tell which, and when to call a plumber."
        datePublished="2026-09-23"
        faqs={[{"q":"Why is there water around my toilet only after I flush?","a":"Water that appears only after a flush usually comes from the cistern-to-pan seal or the pan connector that joins the toilet to the drain. Both are only under load while water is moving through them. Because a pan connector leak can be waste water, keep the area clean and have a plumber look at it soon."},{"q":"Can I just run silicone around the base of the toilet?","a":"Not to fix a leak. Silicone around the base holds the pan in place and keeps the edge clean, but sealing over a leak traps the water underneath, where it soaks into the floor and subfloor out of sight. Find and fix the source first."},{"q":"Is a toilet leaking at the base an emergency?","a":"Usually not, but it should not wait long. A constant supply leak can be stopped at the toilet's isolation valve in the meantime. A leak from the pan connector can mean waste water on the floor, which is a hygiene problem and should be fixed promptly."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Taps &amp; Toilets</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>23 September 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Toilet Leaking at the Base?
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>How to work out where the water is really coming from</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Water at the base of a toilet usually comes from one of five places: condensation on the cistern, a dripping supply connection, a perished seal between the cistern and pan, a failed pan connector to the drain, or a cracked pan. Dry everything, then watch when the water returns. Constant water points to the supply; water after flushing points to a seal or the pan connector.
              </p>
            </div>

            <BlogFigure
              src="/photos/toilet-cistern-removed.webp"
              alt="Toilet cistern lifted off and laid on its side, showing the stained underside, outlet and perished seal"
              caption="A cistern lifted off its pan to replace a perished outlet seal, with water on the tiles beneath. A toilet that weeps at the base is often a seal like this, not a new toilet."
              priority
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>A small puddle around the toilet is easy to wipe up and forget. Then it comes back, the grout starts to darken, and the floor near the pan begins to feel soft underfoot.</p>
              <p>The water is coming from somewhere specific, and there are only a handful of places it can be. Some are harmless and some mean waste water is getting onto your floor. A few minutes of detective work tells you which.</p>

              <h2 id="find-the-source" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Find the source first</h2>
              <p>Start by drying the whole area properly: the floor, the base of the pan, the back of the cistern, and the hose and valve on the wall. Then lay a few sheets of dry toilet paper around the base and under each connection. Wet paper shows you where the water lands first.</p>
              <p>Next, work out <strong>when</strong> the water appears. That is the most useful clue you have:</p>
              <p><strong>All the time, even when nobody has used the toilet:</strong> suspect the water supply connection or condensation.</p>
              <p><strong>Only after a flush:</strong> suspect the cistern-to-pan seal, the pan connector, or a crack in the pan.</p>
              <p>A third test helps separate clean water from bowl water. Put a few drops of food colouring in the cistern, not the bowl, and flush. If coloured water turns up at the base, it has come through the flush path. If the puddle stays clear, the water is coming from the supply side or from condensation.</p>

              <h2 id="condensation" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>1. Condensation (not a leak at all)</h2>
              <p>On humid days, cold water in the cistern chills the porcelain, and moisture in the air condenses on the outside. It runs down the cistern and pan and gathers on the floor. Sydney summers and steamy bathrooms with poor ventilation make it worse.</p>
              <p>The giveaway is beads of water across the whole outside of the cistern, not just at a joint. Better ventilation, running the exhaust fan during and after showers, and fixing a toilet that runs constantly all help. A cistern that keeps refilling stays colder, so if yours does, our guide to <Link href="/blog/why-your-toilet-keeps-running" style={{ color: "var(--color-brand-blue)" }}>why your toilet keeps running</Link> is worth a read.</p>

              <h2 id="supply" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. The water supply connection</h2>
              <p>The cistern is fed by a hose from an isolation valve on the wall. Water from a weeping valve, a loose nut, or a failing braided hose runs down the hose, drips off the lowest point, and lands at the base of the toilet, looking exactly like a leak from the toilet itself.</p>
              <p>Run a dry tissue around the valve, both ends of the hose, and the inlet under the cistern. Check the braid for rust or fraying. A damaged braided hose should be replaced before it bursts, and our guide to <Link href="/blog/braided-flexi-hose-failure" style={{ color: "var(--color-brand-blue)" }}>spotting a failing flexi hose</Link> shows what to look for.</p>

              <h2 id="cistern-seal" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. The seal between the cistern and the pan</h2>
              <p>On a close-coupled toilet, where the cistern sits directly on the back of the pan, a rubber seal around the flush outlet joins the two, and bolts hold them together. Over time the seal perishes, or the bolts loosen, and some water escapes each time you flush. It tends to run down the back of the pan, so you often find it behind the toilet rather than at the front.</p>
              <p>Fixing it means isolating the water, emptying the cistern, lifting it off, and replacing the seal and bolt washers, which is the job in the photo above. It is a standard repair and nearly always cheaper than a new toilet.</p>

              <h2 id="pan-connector" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. The pan connector to the drain</h2>
              <p>The pan connector is the rubber or plastic sleeve that joins the toilet&rsquo;s outlet to the sewer pipe, either in the floor or in the wall behind the pan. When it cracks, perishes, or shifts because the pan has moved, water leaks out on every flush.</p>
              <p>This is the one to take seriously, because the water can be waste water. Signs include a puddle after flushing, a sewer smell around the toilet, a pan that rocks slightly when you sit on it, and grout around the base that stays dark. Fixing it involves disconnecting and resetting the pan, which is work for a licensed plumber. Until then, clean the area with disinfectant and keep children and pets away.</p>

              <h2 id="cracked-pan" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5. A cracked pan</h2>
              <p>Porcelain can crack from an impact, from being over-tightened to the floor, or from years of a pan rocking on an uneven surface. Hairline cracks are hard to see, so check around the base and the back of the bowl with a torch after drying everything.</p>
              <p>A crack below the waterline cannot be reliably patched. The pan needs replacing, and that is a good moment to consider a modern dual-flush suite if yours is an older model.</p>

              <h2 id="why-it-matters" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Why not to wait</h2>
              <p>Water at the base of a toilet rarely stays on the surface. It gets under tiles, into the screed, and in older Sydney homes with timber floors, into the joists below. A slow leak over months can mean lifting tiles or replacing flooring, which costs far more than the original seal or connector.</p>
              <p>If you have dried everything and still cannot find where the water is coming from, it may not be the toilet at all. A leaking pipe in the wall or under the floor can surface next to a toilet, and our guide to <Link href="/blog/how-to-detect-a-hidden-water-leak" style={{ color: "var(--color-brand-blue)" }}>detecting a hidden water leak</Link> explains the water meter test. Our <Link href="/services/leak-detection" style={{ color: "var(--color-brand-blue)" }}>leak detection</Link> service can find it without pulling the bathroom apart.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why is there water around my toilet only after I flush?</h3>
              <p>Water that appears only after a flush usually comes from the cistern-to-pan seal or the pan connector that joins the toilet to the drain. Both are only under load while water is moving through them. Because a pan connector leak can be waste water, keep the area clean and have a plumber look at it soon.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can I just run silicone around the base of the toilet?</h3>
              <p>Not to fix a leak. Silicone around the base holds the pan in place and keeps the edge clean, but sealing over a leak traps the water underneath, where it soaks into the floor and subfloor out of sight. Find and fix the source first.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is a toilet leaking at the base an emergency?</h3>
              <p>Usually not, but it should not wait long. A constant supply leak can be stopped at the toilet&rsquo;s isolation valve in the meantime. A leak from the pan connector can mean waste water on the floor, which is a hygiene problem and should be fixed promptly.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Water Still Pooling Around the Toilet?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog repairs toilet seals, pan connectors and cisterns across Sydney, with no call-out fee and a fixed price before any work starts.</p>
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
