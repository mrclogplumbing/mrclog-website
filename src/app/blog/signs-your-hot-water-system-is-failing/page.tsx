import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "7 Signs Your Hot Water System Is About to Fail | Mr. Clog Blog",
  description:
    "Don\u2019t get caught with a cold shower. Spot these 7 warning signs that your Sydney hot water system needs attention before it gives up completely.",
  openGraph: {
    type: "article",
    title: "7 Signs Your Hot Water System Is About to Fail | Mr. Clog Blog",
    description: "Don’t get caught with a cold shower. Spot these 7 warning signs that your Sydney hot water system needs attention before it gives up completely.",
    url: "https://www.mrclog.com.au/blog/signs-your-hot-water-system-is-failing",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-08",
    modifiedTime: "2026-05-08",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/signs-your-hot-water-system-is-failing" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "rusty-water", title: "Rusty or Discoloured Water" },
  { id: "noises", title: "Strange Noises" },
  { id: "leaks", title: "Leaks Around the Tank" },
  { id: "cold", title: "Running Out of Hot Water" },
  { id: "age", title: "Age of System" },
  { id: "energy", title: "Rising Energy Bills" },
  { id: "faq", title: "FAQs" },
];

export default function BlogHotWaterSignsPage() {
  return (
    <>
      <BlogPostSchema
        slug="signs-your-hot-water-system-is-failing"
        title="7 Signs Your Hot Water System Is About to Fail"
        description="Don’t get caught with a cold shower. Spot these 7 warning signs that your Sydney hot water system needs attention before it gives up completely."
        datePublished="2026-05-08"
        faqs={[{"q":"How long does a hot water system last?","a":"Storage tanks last 8–12 years. Continuous flow (instantaneous) units last 15–20 years. Heat pump systems last 10–15 years."},{"q":"Can I replace a hot water system myself?","a":"No — in NSW, hot water installation must be done by a licensed plumber (and a licensed gasfitter for gas systems). DIY work voids insurance and warranties."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Hot Water</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>8 May 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              7 Signs Your Hot Water System Is About to Fail
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Catch the warning signs before you wake up to a cold shower</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Watch for rusty water, banging noises, leaks at the base, lukewarm showers, and rising energy bills. Hot water systems typically last 8–12 years — if yours is older and showing any of these signs, replacement is usually cheaper than waiting for a flood.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Hot water systems rarely fail without warning. The trick is knowing what to look for so you can act before you’re standing in a cold shower at 6am or mopping up a flooded laundry.</p>

              <h2 id="rusty-water" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>1. Rusty or Discoloured Hot Water</h2>
              <p>If only the hot tap runs rusty water (cold runs clear), the inside of your storage tank is corroding. Once the tank wall fails, you’ll have a flood. Time to replace.</p>

              <h2 id="noises" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Strange Noises</h2>
              <p>Banging, popping, or rumbling sounds usually mean sediment buildup at the bottom of the tank. The sediment overheats and steam pockets explode — reducing efficiency and damaging the tank.</p>

              <h2 id="leaks" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. Leaks Around the Tank</h2>
              <p>Any moisture pooling around the base is bad news. Small drips become floods quickly. If the tank itself is leaking (not just a fitting), replacement is the only option.</p>

              <h2 id="cold" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. Running Out of Hot Water Fast</h2>
              <p>If your morning shower goes lukewarm halfway through, you’ve likely got a failing element (electric) or a sediment-fouled burner (gas). Often repairable if caught early.</p>

              <h2 id="age" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5. Age of the System</h2>
              <p>Storage tanks last 8–12 years. Continuous flow units last 15–20. If yours is at or past its lifespan and showing any other sign on this list, replace before it fails.</p>

              <h2 id="energy" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>6. Rising Energy Bills</h2>
              <p>A failing element or sediment-coated burner has to work harder to heat the same amount of water. If your gas or electricity bill keeps climbing without explanation, your hot water system is often the culprit.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How long does a hot water system last?</h3>
              <p>Storage tanks: 8–12 years. Continuous flow (instantaneous): 15–20 years. Heat pump: 10–15 years.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can I replace a hot water system myself?</h3>
              <p>No — in NSW, hot water installation must be done by a licensed plumber (and a licensed gasfitter for gas systems). DIY work voids insurance and warranties.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Hot Water Trouble in Sydney?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog repairs and replaces all hot water systems — gas, electric, and heat pump. Same-day service across Sydney.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/hot-water-systems" className="btn-outline-white">Hot Water Services</Link>
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
