import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Why Your Toilet Keeps Running (and How to Fix It) | Mr. Clog Blog",
  description:
    "A toilet that keeps running wastes thousands of litres a month and quietly inflates your water bill. Here is what causes it, how to diagnose it, and when to call a plumber.",
  openGraph: {
    type: "article",
    title: "Why Your Toilet Keeps Running (and How to Fix It) | Mr. Clog Blog",
    description: "A toilet that keeps running wastes thousands of litres a month and quietly inflates your water bill. Here is what causes it, how to diagnose it, and when to call a plumber.",
    url: "https://www.mrclog.com.au/blog/why-your-toilet-keeps-running",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-07-16",
    modifiedTime: "2026-07-16",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/why-your-toilet-keeps-running" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "how-it-works", title: "How a Toilet Works" },
  { id: "flapper", title: "A Worn Flapper" },
  { id: "fill-valve", title: "A Faulty Fill Valve" },
  { id: "float", title: "Float Set Too High" },
  { id: "cost", title: "What It's Costing You" },
  { id: "diy", title: "5-Minute DIY Checks" },
  { id: "faq", title: "FAQs" },
];

export default function BlogWhyYourToiletKeepsRunningPage() {
  return (
    <>
      <BlogPostSchema
        slug="why-your-toilet-keeps-running"
        title="Why Your Toilet Keeps Running (and How to Fix It)"
        description="A toilet that keeps running wastes thousands of litres a month and quietly inflates your water bill. Here is what causes it, how to diagnose it, and when to call a plumber."
        datePublished="2026-07-16"
        faqs={[{"q":"Is a running toilet an emergency?","a":"No, but it is not something to ignore either. A constantly running toilet can waste 100 to 200 litres a day, which adds up to a noticeably higher water bill within a single billing cycle. It is worth fixing within a week or two."},{"q":"Can I fix a running toilet myself?","a":"Often yes. A worn flapper or a float set too high are simple DIY repairs with parts from any hardware store. If the fill valve is faulty, the cistern is cracked, or the problem returns after a repair, it is time to call a licensed plumber."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Taps &amp; Toilets</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>16 July 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Why Your Toilet Keeps Running
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>The three usual suspects — and how to fix them</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                A toilet that keeps running almost always comes down to one of three parts inside the cistern: a worn flapper that no longer seals, a faulty fill valve that never shuts off, or a float set too high so water spills into the overflow tube. All three are cheap to fix — but left alone they can waste over 4,000 litres a month.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>That faint hiss of water in the bathroom at night. The cistern that refills itself every few minutes even though nobody has touched it. A running toilet is one of the most common calls we get — and one of the easiest to ignore, right up until the water bill arrives.</p>
              <p>The good news: the cause is nearly always one of three worn parts, and two of them are simple to check yourself.</p>

              <h2 id="how-it-works" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>How a toilet actually works</h2>
              <p>Lift the cistern lid and you&rsquo;ll see two things. At the bottom sits the <strong>flapper</strong> (or flush valve) — a rubber seal that lifts when you flush and drops back to hold water in the tank. On one side is the <strong>fill valve</strong>, controlled by a <strong>float</strong> that rises with the water level and shuts the valve off when the tank is full.</p>
              <p>When a toilet runs continuously, it means water is escaping the tank faster than it should — so the fill valve keeps topping it up. Find where the water is leaving and you&rsquo;ve found your problem.</p>

              <h2 id="flapper" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>1. A worn flapper (most common)</h2>
              <p>Rubber flappers harden and warp with age and years of chlorinated water. Once the seal is imperfect, water trickles from the tank into the bowl continuously, and the fill valve keeps running to compensate.</p>
              <p>The classic test: add a few drops of food colouring to the cistern and wait 15 minutes without flushing. If colour appears in the bowl, your flapper is leaking. A replacement is a few dollars and takes ten minutes with no tools.</p>

              <h2 id="fill-valve" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. A faulty fill valve</h2>
              <p>If the flapper is sealing but the toilet still hisses, the fill valve itself may be failing to shut off completely. You&rsquo;ll often hear a constant high-pitched trickle even when the tank looks full.</p>
              <p>Fill valves wear out, jam with sediment, or lose their seal. Replacing one is a slightly bigger job than a flapper and involves turning off the water supply and draining the tank — a common point where DIY tips over into a plumber&rsquo;s call.</p>

              <h2 id="float" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. The float is set too high</h2>
              <p>If water is draining into the plastic <strong>overflow tube</strong> in the middle of the cistern, the float is set too high — the tank fills past the safe line and spills continuously into the tube.</p>
              <p>Look for the water level sitting right at the top of the overflow tube. Lowering the float (bending the arm on older toilets, or adjusting the clip/screw on modern ones) so the water stops about 20mm below the tube usually fixes it in seconds.</p>

              <h2 id="cost" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What a running toilet is really costing you</h2>
              <p>A steadily running toilet can waste 100 to 200 litres a day — quietly, around the clock. Over a month that&rsquo;s 3,000 to 6,000 litres, and it lands straight on your Sydney Water bill. We regularly meet homeowners chasing a &ldquo;mystery&rdquo; bill spike that turns out to be one running toilet in a rarely-used bathroom.</p>
              <p>If you want to check whether a hidden toilet leak is inflating your usage, our guide on <Link href="/blog/how-to-read-your-sydney-water-bill" style={{ color: "var(--color-brand-blue)" }}>how to read your Sydney water bill</Link> walks through spotting it on the meter.</p>

              <h2 id="diy" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5-minute DIY checks before you call</h2>
              <p>Before anything else, run through these:</p>
              <p><strong>1. The dye test.</strong> Food colouring in the tank, wait 15 minutes, check the bowl. Colour in the bowl = flapper leak.</p>
              <p><strong>2. Check the water level.</strong> If it&rsquo;s at or above the overflow tube, adjust the float down.</p>
              <p><strong>3. Wiggle the flush handle.</strong> If the running stops when you jiggle it, the flapper or chain is catching and not sealing.</p>
              <p>If none of these solve it, or the problem keeps coming back, the fill valve or cistern seals likely need replacing — and that&rsquo;s where we come in.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Why does my toilet run for a few seconds every so often on its own?</h3>
              <p>That&rsquo;s called &ldquo;phantom flushing&rdquo; and it&rsquo;s a textbook sign of a slowly leaking flapper. Water escapes the tank so gradually that the fill valve kicks in briefly every few minutes to top it up. Replace the flapper and it stops.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is it worth repairing an old toilet or should I replace it?</h3>
              <p>If the cistern and bowl are sound, replacing worn internal parts is far cheaper than a new toilet. But if the toilet is very old, cracked, or a water-guzzling single-flush model, upgrading to a modern dual-flush unit pays for itself in water savings over a few years.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Do you charge a call-out fee to fix a running toilet?</h3>
              <p>No — Mr. Clog charges $0 call-out and gives you an upfront fixed price before any work starts, so you know the cost before we begin.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Toilet Still Running After All That?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog repairs running toilets, cisterns, and taps across Sydney — fast, tidy, and fixed-price with no call-out fee.</p>
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
