import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Burst Pipe at Home: The First 5 Minutes Before the Plumber Arrives | Mr. Clog Blog",
  description: "A burst pipe can dump hundreds of litres into your home in minutes. Here is exactly what to do in the first 5 minutes to stop the damage, before the plumber arrives.",
  openGraph: {
    type: "article",
    title: "Burst Pipe at Home: The First 5 Minutes Before the Plumber Arrives | Mr. Clog Blog",
    description: "A burst pipe can dump hundreds of litres into your home in minutes. Here is exactly what to do in the first 5 minutes to stop the damage, before the plumber arrives.",
    url: "https://www.mrclog.com.au/blog/burst-pipe-first-5-minutes",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-20",
    modifiedTime: "2026-05-20",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/burst-pipe-first-5-minutes" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "stop-water", title: "Step 1: Stop the Water" },
  { id: "kill-power", title: "Step 2: Kill the Power" },
  { id: "contain", title: "Step 3: Contain the Damage" },
  { id: "drain", title: "Step 4: Drain the Pipes" },
  { id: "call", title: "Step 5: Call a Plumber" },
  { id: "after", title: "What to Do After" },
  { id: "faq", title: "FAQs" },
];

export default function BlogBurstPipePage() {
  return (
    <>
      <BlogPostSchema
        slug="burst-pipe-first-5-minutes"
        title="Burst Pipe at Home: The First 5 Minutes Before the Plumber Arrives"
        description="A burst pipe can dump hundreds of litres into your home in minutes. Here is exactly what to do in the first 5 minutes to stop the damage, before the plumber arrives."
        datePublished="2026-05-20"
        faqs={[
          { q: "Where is my water main shut-off valve?", a: "In most Sydney homes it is at the front of the property near the boundary, in a small concrete pit with a metal cover. Inside the pit you will find a tap-style valve — turn it clockwise to shut off all water to the house." },
          { q: "Should I turn off the electricity?", a: "Yes — if water is anywhere near power points, light fittings, or appliances, switch off the main breaker at the meter box before going near the leak. Water and electricity together is a serious safety risk." },
        ]}
      />

      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Emergency Plumbing</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>20 May 2026 &middot; 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>Burst Pipe at Home: The First 5 Minutes</h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Exactly what to do before the plumber arrives.</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">Shut off the water at the main valve (out the front), kill the power if water is near any electrics, move valuables out of the area, open a tap to drain the pipes, then call a plumber. Do all five steps in the first 5 minutes and you will save thousands in damage.</p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>A burst pipe is one of the most stressful things that can happen in your home. Water can pour out at twenty or more litres a minute — that is a full bath every five minutes, flooding floors, soaking into walls, and ruining ceilings below. The good news: the first 5 minutes matter more than the next hour. Here is exactly what to do.</p>

              <h2 id="stop-water" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Step 1: Stop the Water</h2>
              <p><strong>Find your water main shut-off valve and close it.</strong> In most Sydney homes this is at the front of the property near the boundary, in a small concrete pit with a metal lid. Inside the pit you will find a tap-style valve. Turn it fully clockwise and the entire house water supply will stop.</p>
              <p>If you cannot find or operate the main, look for an internal stop tap (often under the kitchen sink, in the laundry, or in the garage). If you have an isolation valve on the specific pipe that is leaking, close that. Anything to stop the flow.</p>

              <h2 id="kill-power" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Step 2: Kill the Power</h2>
              <p>If water is anywhere near power points, light fittings, the meter box, or electrical appliances, switch off your main electrical breaker before going near it. Water and electricity together can kill. If you cannot safely reach the meter box, stay back and call 000.</p>

              <h2 id="contain" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Step 3: Contain the Damage</h2>
              <p>Grab every towel, bucket, and mop you own. Move rugs, electronics, important papers, and anything irreplaceable away from the wet area. If the leak is upstairs and water is dripping through the ceiling, poke a small hole in the bulging plasterboard with a screwdriver to release it into a bucket — counter-intuitive, but it stops the entire ceiling collapsing.</p>

              <h2 id="drain" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Step 4: Drain the Pipes</h2>
              <p>Open every cold tap in the house (kitchen, bathroom, laundry) and flush the toilets. This drains the residual water in your pipes so it does not keep dribbling out of the burst section. Once the taps run dry, you are no longer adding water to the mess.</p>

              <h2 id="call" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Step 5: Call a Plumber</h2>
              <p>Now you have stopped the water, killed the power, contained the damage, and drained the pipes. Time to call. Mr. Clog answers the phone 24/7. Have ready: where the leak is (kitchen, wall, ceiling), how bad it is (drip, spray, gusher), and whether you have managed to shut off the main.</p>

              <h2 id="after" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What to Do After</h2>
              <p>Take photos of everything before you start cleaning up — your home insurer will want them. Most home insurance policies cover sudden burst pipe damage but not the pipe itself. Get the plumber&apos;s invoice in writing and keep it with your claim. Run a fan or dehumidifier on wet carpet and walls for several days to prevent mould — Sydney humidity makes this a real risk.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Where is my water main shut-off valve?</h3>
              <p>In most Sydney homes it is at the front of the property near the boundary, in a small concrete pit with a metal cover. Inside the pit you will find a tap-style valve — turn it clockwise to shut off all water to the house. If you rent or have never used it, find it now before you need it in an emergency.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Should I turn off the electricity?</h3>
              <p>Yes — if water is anywhere near power points, light fittings, or appliances, switch off the main breaker at the meter box before going near the leak. Water and electricity together is a serious safety risk.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <h3 className="font-logo font-bold text-xl text-white mb-2">Burst Pipe Right Now?</h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog answers 24/7. We will talk you through shutting off the water and get a plumber to you fast.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={18} /> Call {PHONE}
                </a>
                <Link href="/services/emergency-plumbing" className="btn-outline-white">Emergency Plumbing</Link>
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
