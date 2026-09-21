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
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
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
  { id: "sizing", title: "Sizing: What Capacity You Actually Need" },
  { id: "installation", title: "What Installation Involves for Each Type" },
  { id: "running-costs", title: "Comparing Running Costs Honestly" },
  { id: "repair-or-replace", title: "Repair or Replace?" },
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
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>20 May 2026 · 5 min read</span>
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
                For most Sydney homes with rooftop solar, a heat pump is the best long-term choice. If gas is already connected and you don&apos;t have solar, instantaneous gas is still a strong option. Avoid plain electric storage unless install budget is the only consideration.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Replacing a hot water system is one of the biggest plumbing decisions a homeowner makes — and one of the easiest to get wrong. The wrong system can leave you paying more than you should every year, or fail years before it should because it wasn&apos;t suited to your home.</p>
              <p>Here is how the three main options stack up in Sydney conditions.</p>

              <h2 id="gas" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Gas (instantaneous or storage)</h2>
              <p>Gas remains popular in Sydney because mains gas is widely available and recovery rates are fast — you won&apos;t run out of hot water during back-to-back showers. Instantaneous gas units are compact, wall-mounted, and tend to last well over a decade.</p>
              <p>The downside: gas prices have climbed sharply in recent years, and new-build estates are increasingly being built all-electric.</p>

              <h2 id="electric" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Electric storage</h2>
              <p>Cheap to install, expensive to run. A standard electric tank has the lowest upfront cost but tends to be the most expensive system to operate over its lifetime.</p>
              <p>Worth considering only if you have solar with a timer, or as a short-term replacement.</p>

              <h2 id="heat-pump" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Heat pump</h2>
              <p>The clear long-term winner for most Sydney homes built after 2000. Heat pumps use a fraction of the electricity of a standard electric tank, often qualify for government STC rebates that significantly reduce install costs, and pair beautifully with rooftop solar.</p>
              <p>They are noisier than gas and need outdoor clearance, but the running cost savings are real and add up year on year.</p>

              <h2 id="verdict" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Our verdict</h2>
              <p>If you have solar, go heat pump. If you don&apos;t and gas is already connected, instantaneous gas is still a solid choice. Avoid plain electric storage unless budget at install time is the only factor.</p>
              <p>Need help choosing? We do free on-site assessments across Sydney.</p>

              <h2 id="sizing" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Sizing: What Capacity You Actually Need</h2>

              <p>Choosing the technology is only half the decision. A well-chosen system that is too small will annoy you daily for a decade.</p>

              <p>For storage systems, capacity is driven by how many people shower in the same window rather than by household size alone. Two people who shower twelve hours apart put far less strain on a tank than two who shower back to back. Baths, a second bathroom, and a dishwasher drawing hot water all push the requirement up.</p>

              <p>For instantaneous systems, the limiting number is flow rate rather than volume — how many outlets can run at once before the temperature drops. If two showers running together is normal in your house, say so before anyone recommends a unit.</p>

              <p>Undersizing is the most common regret we hear about, and it is the one thing you cannot fix later without replacing the system.</p>


              <h2 id="installation" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What Installation Involves for Each Type</h2>

              <p>The unit price is rarely the whole cost, and the gap between types is mostly installation.</p>

              <p><strong>Gas</strong> needs an adequate gas supply and correct flueing, and switching from electric to gas means running a gas line to the location. That work has to be done by a licensed gas fitter.</p>

              <p><strong>Electric storage</strong> is usually the simplest swap when replacing like with like, particularly if the existing unit is in the same spot on a compatible circuit.</p>

              <p><strong>Heat pumps</strong> need outdoor space with airflow around the unit, and they are not silent — they hum like a split-system air conditioner. Placement matters, and under a bedroom window is a decision people regret.</p>

              <p>Get the installation described specifically in the quote. Two quotes for the same unit can differ substantially, and the difference is usually in what each assumes about the work around it.</p>


              <h2 id="running-costs" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Comparing Running Costs Honestly</h2>

              <p>Running-cost comparisons are where hot water marketing gets slippery, because the answer genuinely depends on your household.</p>

              <p>Heat pumps use electricity to move heat rather than generate it, which is why they use markedly less energy than conventional electric storage for the same hot water. That advantage grows if you have solar and can run the unit during the day.</p>

              <p>Gas costs depend on your supply charges as much as usage — if the hot water is the only gas appliance in the house, the standing charge is carried entirely by it, which changes the maths considerably.</p>

              <p>The honest way to compare is over the life of the system: purchase, installation, running cost, and expected lifespan together. A cheaper unit that costs more to run and lasts less time is not cheaper.</p>


              <h2 id="repair-or-replace" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Repair or Replace?</h2>

              <p>Not every fault means a new system. The question worth asking is what has failed and how old the unit is.</p>

              <p>Thermostats, elements and valves are ordinary replaceable parts, and on a system under about eight years old, replacing one is usually sensible. A leaking tank is different — once the cylinder itself has corroded through, there is no repair, only replacement.</p>

              <p>Past ten to twelve years, weigh a significant repair carefully. Spending several hundred dollars on a system that may fail completely within a year or two rarely pays off. If yours is in that range and showing symptoms, our guide on <Link href="/blog/signs-your-hot-water-system-is-failing" style={{ color: "var(--color-brand-blue)" }}>the warning signs of a failing hot water system</Link> covers what to watch for.</p>


              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Which hot water system is cheapest to run?</h3>
              <p>For most Sydney homes, a heat pump system has the lowest ongoing running cost, especially when paired with rooftop solar.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Are heat pumps noisy?</h3>
              <p>Heat pumps make a low hum similar to a split-system air conditioner unit. They should be installed with adequate clearance and ideally away from bedroom windows.</p>
            </div>

            <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Thinking About a New Hot Water System?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog installs gas, electric, and heat pump hot water systems across Sydney. Free on-site assessment and honest advice.</p>
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
