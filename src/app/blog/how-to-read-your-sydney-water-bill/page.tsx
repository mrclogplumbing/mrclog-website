import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "How to Read Your Sydney Water Bill (and Spot a Hidden Leak) | Mr. Clog Blog",
  description: "Your Sydney Water bill tells a story most people miss. Here is how to read it properly — and how to spot a hidden leak that could be quietly draining hundreds of litres a day.",
  openGraph: {
    type: "article",
    title: "How to Read Your Sydney Water Bill (and Spot a Hidden Leak) | Mr. Clog Blog",
    description: "Your Sydney Water bill tells a story most people miss. Here is how to read it properly — and how to spot a hidden leak that could be quietly draining hundreds of litres a day.",
    url: "https://www.mrclog.com.au/blog/how-to-read-your-sydney-water-bill",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-20",
    modifiedTime: "2026-05-20",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/how-to-read-your-sydney-water-bill" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "anatomy", title: "The Anatomy of Your Bill" },
  { id: "usage", title: "Average Daily Use" },
  { id: "compare", title: "Compare to Last Quarter" },
  { id: "meter-test", title: "The 15-Minute Meter Test" },
  { id: "common-leaks", title: "Most Common Hidden Leaks" },
  { id: "next", title: "What to Do Next" },
  { id: "faq", title: "FAQs" },
];

export default function BlogReadWaterBillPage() {
  return (
    <>
      <BlogPostSchema
        slug="how-to-read-your-sydney-water-bill"
        title="How to Read Your Sydney Water Bill (and Spot a Hidden Leak)"
        description="Your Sydney Water bill tells a story most people miss. Here is how to read it properly — and how to spot a hidden leak that could be quietly draining hundreds of litres a day."
        datePublished="2026-05-20"
        faqs={[
          { q: "How do I know if I have a hidden leak?", a: "Do the 15-minute meter test: turn off every tap in the house, write down your meter reading, wait 15 minutes without using any water, and read it again. If the numbers have moved, you have a leak somewhere on your property." },
          { q: "Is Sydney Water responsible for leaks on my property?", a: "No. Sydney Water owns and maintains the pipes up to your water meter. Everything past the meter — including the pipe running from the meter to your house — is your responsibility as the property owner." },
        ]}
      />

      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Plumbing Advice</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>20 May 2026 &middot; 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>How to Read Your Sydney Water Bill</h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>And how to spot a hidden leak before it costs you a fortune.</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">Look at the &quot;Average daily use&quot; figure on your Sydney Water bill. A typical Sydney household uses around 200 litres per person per day. If yours is well above that — or higher than last quarter for no obvious reason — you may have a hidden leak. Do the 15-minute meter test to find out for sure.</p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Most Sydney homeowners glance at their water bill, see the total, pay it, and move on. But that bill contains the single most useful piece of plumbing intelligence you will ever get about your home. A hidden leak — a slow-dripping pipe behind a wall, a silently running toilet cistern, a small leak in an underground service line — can waste hundreds of litres a day for months before you notice. Here is how to read your bill properly and catch it early.</p>

              <h2 id="anatomy" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>The Anatomy of Your Bill</h2>
              <p>Sydney Water bills come quarterly. The most important sections are:</p>
              <p><strong>Meter reading details:</strong> the previous reading, the current reading, and the difference (your usage in kilolitres — 1 kL = 1,000 litres).</p>
              <p><strong>Average daily use:</strong> total usage divided by days in the billing period. This is the number to watch.</p>
              <p><strong>Usage comparison:</strong> most bills show a small chart comparing this quarter to the same quarter last year. Spikes here are a red flag.</p>

              <h2 id="usage" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What Is Average Daily Use?</h2>
              <p>According to Sydney Water, the average Sydney household uses around 200 litres per person per day. So:</p>
              <p>A single person averages around 200 L/day. A couple averages around 400 L/day. A family of four averages around 800 L/day. If yours is dramatically higher and your habits have not changed, something is wrong.</p>

              <h2 id="compare" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Compare to Last Quarter</h2>
              <p>The single best leak-detection tool is comparing this quarter to the same quarter last year. A 30 percent jump with no lifestyle change (no new family member, no new garden, no broken habits) almost always means a leak somewhere.</p>
              <p>Seasonal variation is normal — Sydney households typically use more water in summer (gardens, swimming, longer showers) — so compare like for like.</p>

              <h2 id="meter-test" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The 15-Minute Meter Test</h2>
              <p>Suspect a leak? Here is the test every Sydney homeowner should know:</p>
              <p><strong>1.</strong> Make sure no water is being used anywhere in the house — no running taps, no washing machine, no dishwasher, no irrigation, no flushing toilets.</p>
              <p><strong>2.</strong> Find your water meter (usually at the front of the property in a small concrete pit).</p>
              <p><strong>3.</strong> Write down the full meter reading, including the small red dial that measures fractions of a litre.</p>
              <p><strong>4.</strong> Wait 15 minutes. Do not use any water during this time.</p>
              <p><strong>5.</strong> Read the meter again.</p>
              <p>If the numbers are different, you have a leak. The red dial moves with even a tiny flow, so it is sensitive enough to catch a dripping pipe inside a wall.</p>

              <h2 id="common-leaks" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Most Common Hidden Leaks</h2>
              <p><strong>Running toilet cistern:</strong> the most common silent water waster. A toilet that runs continuously can waste many litres a day. Drop a few drops of food colouring into the cistern — if colour appears in the bowl without flushing, the flapper or seal is leaking.</p>
              <p><strong>Underground service line:</strong> the pipe between your meter and your house can crack from tree roots or ground movement. Telltale sign: a soft, always-wet patch of lawn or a section of garden that grows much greener than the rest.</p>
              <p><strong>Hot water tank:</strong> tanks corrode from the inside out. Drips or a damp patch under the tank means it is on its way out.</p>
              <p><strong>Dripping taps and shower mixers:</strong> a slow drip looks like nothing but adds up fast over a quarter.</p>

              <h2 id="next" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What to Do Next</h2>
              <p>If the meter test confirms a leak but you cannot see one, call a plumber for leak detection. We use acoustic detection equipment and thermal imaging to find leaks behind walls and under slabs without ripping anything up. Acting early stops a hidden leak from becoming wall, floor, or foundation damage.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How do I know if I have a hidden leak?</h3>
              <p>Do the 15-minute meter test: turn off every tap in the house, write down your meter reading, wait 15 minutes without using any water, and read it again. If the numbers have moved, you have a leak somewhere on your property.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is Sydney Water responsible for leaks on my property?</h3>
              <p>No. Sydney Water owns and maintains the pipes up to your water meter. Everything past the meter — including the pipe running from the meter to your house — is your responsibility as the property owner.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <h3 className="font-logo font-bold text-xl text-white mb-2">Think You Have a Hidden Leak?</h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog offers acoustic leak detection across Sydney — we find leaks without tearing up walls or floors.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={18} /> Call {PHONE}
                </a>
                <Link href="/services/leak-detection" className="btn-outline-white">Leak Detection</Link>
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
