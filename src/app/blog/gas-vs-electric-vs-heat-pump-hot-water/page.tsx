import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Gas vs Electric vs Heat Pump Hot Water: Which Is Best for Your Sydney Home? | Mr. Clog Blog",
  description:
    "Choosing a hot water system is a 10-year decision. Compare gas, electric, and heat pump systems for Sydney homes — running costs, install costs, and reliability.",
  openGraph: {
    type: "article",
    title: "Gas vs Electric vs Heat Pump Hot Water: Which Is Best for Your Sydney Home? | Mr. Clog Blog",
    description: "Choosing a hot water system is a 10-year decision. Compare gas, electric, and heat pump systems for Sydney homes — running costs, install costs, and reliability.",
    url: "https://www.mrclog.com.au/blog/gas-vs-electric-vs-heat-pump-hot-water",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-20",
    modifiedTime: "2026-05-20",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/gas-vs-electric-vs-heat-pump-hot-water" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "gas", title: "Gas Systems" },
  { id: "electric", title: "Electric Storage" },
  { id: "heat-pump", title: "Heat Pump" },
  { id: "verdict", title: "Our Verdict" },
  { id: "faq", title: "FAQs" },
];

export default function BlogGasVsElectricVsHeatPumpPage() {
  return (
    <>
      <BlogPostSchema
        slug="gas-vs-electric-vs-heat-pump-hot-water"
        title="Gas vs Electric vs Heat Pump Hot Water: Which Is Best for Your Sydney Home?"
        description="Choosing a hot water system is a 10-year decision. Compare gas, electric, and heat pump systems for Sydney homes — running costs, install costs, and reliability."
        datePublished="2026-05-20"
        faqs={[{"q":"Which hot water system is cheapest to run?","a":"For most Sydney homes, a heat pump system has the lowest ongoing running cost, especially when paired with rooftop solar."},{"q":"Are heat pumps noisy?","a":"Heat pumps make a low hum similar to a split-system air conditioner unit. They should be installed with adequate clearance and ideally away from bedroom windows."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Hot Water</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>20 May 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Gas vs Electric vs Heat Pump Hot Water
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Which system is best for your Sydney home in 2026?</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                For most Sydney homes with rooftop solar, a heat pump is the best long-term choice. If gas is already connected and you don't have solar, instantaneous gas is still a strong option. Avoid plain electric storage unless install budget is the only consideration.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Replacing a hot water system is one of the biggest plumbing decisions a homeowner makes — and one of the easiest to get wrong. The wrong system can leave you paying more than you should every year, or fail years before it should because it wasn't suited to your home.</p>
              <p>Here is how the three main options stack up in Sydney conditions.</p>

              <h2 id="gas" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Gas (instantaneous or storage)</h2>
              <p>Gas remains popular in Sydney because mains gas is widely available and recovery rates are fast — you won't run out of hot water during back-to-back showers. Instantaneous gas units are compact, wall-mounted, and tend to last well over a decade.</p>
              <p>The downside: gas prices have climbed sharply in recent years, and new-build estates are increasingly being built all-electric.</p>

              <h2 id="electric" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Electric storage</h2>
              <p>Cheap to install, expensive to run. A standard electric tank has the lowest upfront cost but tends to be the most expensive system to operate over its lifetime.</p>
              <p>Worth considering only if you have solar with a timer, or as a short-term replacement.</p>

              <h2 id="heat-pump" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Heat pump</h2>
              <p>The clear long-term winner for most Sydney homes built after 2000. Heat pumps use a fraction of the electricity of a standard electric tank, often qualify for government STC rebates that significantly reduce install costs, and pair beautifully with rooftop solar.</p>
              <p>They are noisier than gas and need outdoor clearance, but the running cost savings are real and add up year on year.</p>

              <h2 id="verdict" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Our verdict</h2>
              <p>If you have solar, go heat pump. If you don't and gas is already connected, instantaneous gas is still a solid choice. Avoid plain electric storage unless budget at install time is the only factor.</p>
              <p>Need help choosing? We do free on-site assessments across Sydney.</p>
            </div>

            <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Thinking About a New Hot Water System?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog installs gas, electric, and heat pump hot water systems across Sydney. Free on-site assessment and honest advice.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/hot-water" className="btn-outline-white">Hot Water Services</Link>
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
