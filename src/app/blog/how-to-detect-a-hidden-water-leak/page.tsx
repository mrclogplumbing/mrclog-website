import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "How to Detect a Hidden Water Leak Before It Costs You Thousands | Mr. Clog Blog",
  description:
    "A hidden water leak can rot timber, ruin ceilings, and waste thousands of litres before you ever see a drop. Here is how to detect one early using the meter test and six warning signs.",
  openGraph: {
    type: "article",
    title: "How to Detect a Hidden Water Leak Before It Costs You Thousands | Mr. Clog Blog",
    description: "A hidden water leak can rot timber, ruin ceilings, and waste thousands of litres before you ever see a drop. Here is how to detect one early using the meter test and six warning signs.",
    url: "https://www.mrclog.com.au/blog/how-to-detect-a-hidden-water-leak",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-07-16",
    modifiedTime: "2026-07-16",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/how-to-detect-a-hidden-water-leak" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "signs", title: "6 Warning Signs" },
  { id: "meter-test", title: "The Water Meter Test" },
  { id: "hot-spots", title: "Where Leaks Hide" },
  { id: "diy", title: "DIY Checks" },
  { id: "when-to-call", title: "When to Call a Plumber" },
  { id: "faq", title: "FAQs" },
];

export default function BlogHowToDetectAHiddenWaterLeakPage() {
  return (
    <>
      <BlogPostSchema
        slug="how-to-detect-a-hidden-water-leak"
        title="How to Detect a Hidden Water Leak Before It Costs You Thousands"
        description="A hidden water leak can rot timber, ruin ceilings, and waste thousands of litres before you ever see a drop. Here is how to detect one early using the meter test and six warning signs."
        datePublished="2026-07-16"
        faqs={[{"q":"How can I tell if I have a hidden water leak?","a":"The quickest check is the water meter test: turn off every tap and water-using appliance, note the meter reading, then check it again after two hours with no water used. If the numbers have moved, water is leaking somewhere in your system."},{"q":"Can a plumber find a leak without digging up my floor?","a":"Yes. Modern leak detection uses acoustic listening equipment, thermal imaging, and pressure testing to pinpoint a leak to within centimetres, so only the affected area needs to be opened up. This is far cheaper and less destructive than exploratory digging."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Leak Detection</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>16 July 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              How to Detect a Hidden Water Leak
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Catch it early, before it costs you thousands</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                To detect a hidden leak, do the water meter test: shut off all water, note the meter, and re-check it two hours later. If it moved, you have a leak. Back that up by watching for a spiking water bill, damp patches, musty smells, low pressure, and the sound of running water when everything is off.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>The worst plumbing leaks are the ones you never see. A slab leak under the floor, a weeping joint inside a wall, a cracked pipe under the garden — they run for weeks or months, rotting timber and swelling plaster, before a single visible drop ever appears.</p>
              <p>By the time water stains the ceiling, the damage bill is often ten times what the original repair would have cost. Here&rsquo;s how to catch a hidden leak early.</p>

              <h2 id="signs" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>6 warning signs of a hidden leak</h2>
              <p><strong>1. Your water bill jumped for no reason.</strong> A sudden increase with no change in usage is the single most reliable red flag.</p>
              <p><strong>2. A musty or damp smell.</strong> Persistent mustiness, especially in one room, points to moisture trapped behind a wall or under a floor.</p>
              <p><strong>3. Stains or bubbling paint.</strong> Yellow-brown marks on ceilings and walls, or paint that blisters and peels, mean water is getting in.</p>
              <p><strong>4. A drop in water pressure.</strong> If a pipe is leaking, less pressure reaches your taps and shower.</p>
              <p><strong>5. The sound of running water.</strong> A faint hiss or trickle when every tap is off is a classic sign of a pressurised leak.</p>
              <p><strong>6. An unusually green or soggy patch of lawn.</strong> An underground supply leak feeds one area of garden far better than the rest.</p>

              <h2 id="meter-test" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The water meter test (do this first)</h2>
              <p>This is the most reliable DIY check there is, and it takes two minutes of active effort:</p>
              <p><strong>Step 1.</strong> Turn off every tap inside and outside, and make sure no appliance is using water — no dishwasher, washing machine, or ice maker running.</p>
              <p><strong>Step 2.</strong> Find your water meter (usually at the front boundary) and write down the exact reading, including the small dials.</p>
              <p><strong>Step 3.</strong> Don&rsquo;t use any water for two hours, then read the meter again.</p>
              <p>If the reading has changed at all, water is escaping somewhere between the meter and your taps — you have a leak. Many modern meters also have a small spinning leak indicator; if it&rsquo;s turning while all water is off, that confirms it.</p>

              <h2 id="hot-spots" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Where hidden leaks like to hide</h2>
              <p>Some spots account for the majority of the concealed leaks we find in Sydney homes:</p>
              <p><strong>Under the slab.</strong> Supply pipes running beneath a concrete floor. Warm patches on the floor can indicate a hot water slab leak.</p>
              <p><strong>Inside walls.</strong> Old soldered joints and corroded pipework behind kitchens and bathrooms.</p>
              <p><strong>Under the house.</strong> In homes with a subfloor, dripping joints often go unnoticed for years.</p>
              <p><strong>In the garden.</strong> The main supply line from the meter to the house, especially where old galvanised or poly pipe has been in the ground for decades.</p>
              <p><strong>The toilet cistern.</strong> A silent internal leak here can waste thousands of litres — see our guide on <Link href="/blog/why-your-toilet-keeps-running" style={{ color: "var(--color-brand-blue)" }}>why your toilet keeps running</Link>.</p>

              <h2 id="diy" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>DIY checks you can do today</h2>
              <p>Beyond the meter test, walk the house and check under every sink, behind the toilet, around the dishwasher and washing machine, and at the base of your hot water unit. Look for water stains, corrosion, swollen cabinetry, and mould. Feel for damp spots on floors and walls. Reading your bill closely also helps — our <Link href="/blog/how-to-read-your-sydney-water-bill" style={{ color: "var(--color-brand-blue)" }}>Sydney water bill guide</Link> shows how to compare usage across billing periods.</p>

              <h2 id="when-to-call" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When to call a plumber</h2>
              <p>If the meter test confirms a leak but you can&rsquo;t see where it is, that&rsquo;s the moment to call. A licensed plumber uses acoustic listening gear, thermal cameras, and pressure testing to pinpoint the leak to within centimetres — no guesswork, no tearing up floors on a hunch. Finding it precisely means we open up only the small area that actually needs repairing, which keeps both the disruption and the bill down.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How much water can a hidden leak waste?</h3>
              <p>Even a small pinhole leak can waste hundreds of litres a day. Left running for a full quarter, that easily becomes tens of thousands of litres — and a water bill that&rsquo;s hundreds of dollars higher than usual.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Does home insurance cover hidden leak damage?</h3>
              <p>Many policies cover sudden water damage but exclude damage from a leak that&rsquo;s been slowly happening over time. That&rsquo;s exactly why early detection matters — the sooner it&rsquo;s found and fixed, the stronger your position and the smaller the damage.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is leak detection expensive?</h3>
              <p>Professional leak detection is a fraction of the cost of the water damage a hidden leak causes if left running, and far cheaper than exploratory digging. We give you an upfront price before we start, with $0 call-out fee.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Think You Have a Hidden Leak?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog uses acoustic and thermal leak detection to find hidden leaks fast across Sydney — no unnecessary digging, no guesswork.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/leak-detection" className="btn-outline-white">Leak Detection Services</Link>
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
