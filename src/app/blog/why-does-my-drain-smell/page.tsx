import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Why Does My Drain Smell? The Five Usual Causes",
  description:
    "A smelly drain is telling you something. Here are the five things that actually cause it, how to tell which one you have, and the fixes that work — from a 30-second one to the ones that need a plumber.",
  openGraph: {
    type: "article",
    title: "Why Does My Drain Smell? The Five Usual Causes",
    description: "A smelly drain is telling you something. Here are the five things that actually cause it, how to tell which one you have, and the fixes that work — from a 30-second one to the ones that need a plumber.",
    url: "https://www.mrclog.com.au/blog/why-does-my-drain-smell",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-09-21",
    modifiedTime: "2026-09-21",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/why-does-my-drain-smell" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "dry-trap", title: "A Dry P-Trap" },
  { id: "buildup", title: "Grease and Soap Buildup" },
  { id: "blockage", title: "A Partial Blockage" },
  { id: "vent", title: "A Blocked Vent Pipe" },
  { id: "sewer", title: "A Damaged Sewer Line" },
  { id: "diy", title: "What to Try First" },
  { id: "faq", title: "FAQs" },
];

export default function BlogWhyDoesMyDrainSmellPage() {
  return (
    <>
      <BlogPostSchema
        slug="why-does-my-drain-smell"
        title="Why Does My Drain Smell? The Five Usual Causes"
        description="A smelly drain is telling you something. Here are the five things that actually cause it, how to tell which one you have, and the fixes that work — from a 30-second one to the ones that need a plumber."
        datePublished="2026-09-21"
        faqs={[{"q":"Why does my drain smell worse in summer?","a":"Warmth accelerates the bacteria feeding on the grease, hair and soap film inside your pipes, so the same buildup produces a much stronger odour once the weather turns. Water in unused traps also evaporates faster, which lets sewer gas rise through a drain that was fine all winter."},{"q":"Is a smelly drain dangerous?","a":"An occasional whiff from a dry trap is a nuisance rather than a hazard. A persistent sewer smell is worth acting on: it means sewer gas is entering your home somewhere it should not, which can indicate a damaged pipe or a venting fault. If the smell is strong, constant, or comes with gurgling and slow drainage, have it looked at."},{"q":"Will bleach fix a smelly drain?","a":"Rarely, and it can make things worse. Bleach passes straight through and does little to the grease film coating the pipe walls, which is where the smell usually lives. It also will not touch a dry trap, a blocked vent or a cracked pipe. Hot water and a physical clean address far more causes."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Blocked Drains</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>21 September 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Why Does My Drain Smell?
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Five causes, and how to tell which one is yours</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                A smelly drain is almost always one of five things: a dry P-trap letting sewer gas up, grease and soap coating the pipe walls, a partial blockage holding waste in place, a blocked vent pipe, or a damaged sewer line. Run the tap for thirty seconds first — if a rarely-used drain stops smelling, it was simply a dry trap.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>You walk past the laundry and catch it. A sour, eggy smell that wasn&rsquo;t there last week. You pour some bleach down, it fades for a day, and then it&rsquo;s back.</p>
              <p>Drain smells get worse as Sydney warms up, which is why we field so many of these calls in spring. Here are the five real causes, roughly in order of how often we find them.</p>

              <h2 id="dry-trap" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>1. A dry P-trap</h2>
              <p>Under every fixture is a U-bend that holds a small amount of water. That water is a seal — it physically blocks sewer gas from rising up the pipe into your home. It is the simplest and most elegant part of your plumbing.</p>
              <p>If a fixture goes unused, that water evaporates. The seal breaks, and the drain starts breathing sewer gas into the room. Spare bathrooms, laundry tubs, floor wastes and holiday homes are the classic offenders.</p>
              <p><strong>The test:</strong> run the tap for thirty seconds. If the smell disappears within the hour and stays gone, that was it. For a floor waste with no tap above it, tip a couple of litres of water down instead.</p>

              <h2 id="buildup" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Grease, soap and hair coating the pipe</h2>
              <p>This is the most common cause in a drain that gets used daily. Fat, soap scum, shampoo and hair build a film on the inside of the pipe. The drain still runs, so nothing looks wrong — but that film is organic matter, and bacteria feed on it.</p>
              <p>Kitchen sinks and shower drains are the usual sites. The smell is less sewer-like and more stale or sour.</p>
              <p><strong>The test:</strong> if the smell is strongest right at the plughole and you can see dark gunge on a bent wire or an old toothbrush, you&rsquo;ve found it. A kettle of hot (not boiling) water with a squirt of dish soap, poured slowly, shifts a surprising amount. Boiling water can damage PVC joints and crack older fittings, so keep it just off the boil.</p>

              <h2 id="blockage" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. A partial blockage holding waste in place</h2>
              <p>When something narrows the pipe, waste stops flowing away cleanly and sits there rotting. The smell arrives before the blockage becomes obvious, which makes it a useful early warning.</p>
              <p>Look for the smell alongside slow drainage, gurgling after the washing machine empties, or water rising slightly before it clears. Those three together mean a blockage is forming. Our guide on <Link href="/blog/why-is-my-drain-blocked" style={{ color: "var(--color-brand-blue)" }}>what actually causes blocked drains</Link> covers the usual culprits.</p>
              <p>Clearing a partial blockage properly means removing the buildup from the pipe wall, not just punching a hole through it. That is what <Link href="/services/jet-blasting" style={{ color: "var(--color-brand-blue)" }}>high-pressure jet blasting</Link> does — it scours the pipe back to its full diameter, which is why the smell stays gone instead of returning in a month.</p>

              <h2 id="vent" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. A blocked vent pipe</h2>
              <p>Your drainage system needs air. Vent pipes run up through the roof so that when water goes down, air can follow it — otherwise the falling water siphons the seal straight out of your traps.</p>
              <p>Block that vent with leaves, a nest or a possum, and two things happen: traps get sucked dry, and sewer gas finds its way back through the fixtures.</p>
              <p><strong>The clue:</strong> several drains smelling at once, and gurgling from one fixture when you use another — flush the toilet and the basin burbles. That pattern points up at the roof, not down at the plughole, and it is a plumber&rsquo;s job.</p>

              <h2 id="sewer" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5. A damaged sewer line</h2>
              <p>The least common cause, and the one that matters most. A cracked or displaced pipe under the house or yard lets sewer gas escape into the soil and up through the slab, floorboards or garden.</p>
              <p>Signs worth taking seriously: a smell outdoors near the same patch of ground, a lawn area that stays soggy or unusually green, recurring blockages in the same line, or a smell inside that no amount of drain cleaning touches.</p>
              <p>This needs a camera down the line to confirm. Guessing is expensive — see our guide on <Link href="/blog/pipe-relining-vs-pipe-replacement" style={{ color: "var(--color-brand-blue)" }}>relining versus replacement</Link> for what the repair options look like once the fault is found.</p>

              <h2 id="diy" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What to try first, in order</h2>
              <p><strong>1. Run every tap</strong> for thirty seconds, including the ones you never use, and tip water down any floor waste. Wait a few hours. This alone solves a good share of calls.</p>
              <p><strong>2. Clean the plughole.</strong> Pull the grate, clear the hair and gunge you can reach, and flush with hot soapy water.</p>
              <p><strong>3. Note the pattern.</strong> One drain or several? Any gurgling? Slow drainage? Worse after the washing machine runs? Write it down — it genuinely shortens the diagnosis.</p>
              <p><strong>4. Skip the chemical drain cleaner.</strong> It rarely fixes a smell, it damages older pipes, and it makes the drain hazardous for whoever opens it next.</p>
              <p>If the smell survives all that, the cause is inside the pipework rather than at the opening, and it needs someone with a camera and a jetter.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why does my drain smell worse in summer?</h3>
              <p>Warmth speeds up the bacteria feeding on the film inside your pipes, so the same buildup smells far stronger. Water in unused traps also evaporates faster, so a drain that behaved all winter can start letting gas through once the weather turns.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is a smelly drain dangerous?</h3>
              <p>An occasional whiff from a dry trap is a nuisance, not a hazard. A persistent sewer smell means gas is entering the house where it should not, which can point to a damaged pipe or a venting fault. Strong, constant, or paired with gurgling and slow drainage — get it looked at.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Will bleach fix it?</h3>
              <p>Rarely, and it can make things worse. Bleach runs straight past the grease film where the smell actually lives, and does nothing at all for a dry trap, a blocked vent or a cracked pipe. Hot soapy water and a physical clean address more causes for less risk to your pipes.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Smell Still There?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog camera-inspects and jet-cleans drains across Sydney — upfront fixed pricing and $0 call-out.</p>
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
