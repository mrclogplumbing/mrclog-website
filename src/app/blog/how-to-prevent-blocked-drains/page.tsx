import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";

export const metadata: Metadata = {
  title: "How to Prevent Blocked Drains: A Room-by-Room Guide | Mr. Clog Blog",
  description:
    "Most blocked drains are 100% preventable. Here's exactly what to do in each room of your home to keep your drains clear and avoid expensive callouts.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "kitchen", title: "Kitchen" },
  { id: "bathroom", title: "Bathroom & Shower" },
  { id: "toilet", title: "Toilet" },
  { id: "laundry", title: "Laundry" },
  { id: "outdoor", title: "Outdoor & Stormwater" },
  { id: "maintenance", title: "Regular Maintenance" },
  { id: "faq", title: "FAQs" },
];

export default function BlogPreventBlockedDrainsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[38vh]"
        style={{ background: "var(--color-dark)" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Blocked Drains</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>8 May 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              How to Prevent Blocked Drains
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              A room-by-room guide for Sydney homeowners
            </p>
          </div>
        </div>
      </section>

      {/* Article + TOC */}
      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">

          {/* Article */}
          <article>
            {/* Quick Answer */}
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                The single best thing you can do is never pour cooking fat down the kitchen sink, and use a drain catcher in your shower. Add a monthly hot-water flush and an annual CCTV inspection if you have large trees nearby, and you&rsquo;ll avoid most blocked drain callouts entirely.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Most blocked drains are preventable. The vast majority are caused by simple habits &mdash; pouring grease down the sink, letting hair accumulate in the shower, flushing the wrong things &mdash; that are easy to change once you know about them.</p>
              <p>This guide covers every room in your home and exactly what to do (and avoid) to keep your drains clear year-round.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="kitchen" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>Kitchen Drains</h2>
              <p>The kitchen is responsible for the majority of domestic drain blockages. The main culprits are fats, oils, and grease (known as &ldquo;FOG&rdquo;), coffee grounds, and food scraps.</p>

              <h3 className="font-logo font-bold text-lg mb-3 mt-6" style={{ color: "var(--color-dark)" }}>What not to put down the kitchen sink</h3>
              <ul className="space-y-2">
                {[
                  "Cooking oil, fat, or grease (let it solidify and bin it instead)",
                  "Coffee grounds (they clump together and stick to pipe walls)",
                  "Rice, pasta, or bread (they expand and create a starchy paste)",
                  "Fibrous vegetables like celery or onion skins",
                  "Eggshells (the membrane wraps around other debris)",
                  "Any food scraps — even small amounts accumulate over time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e74c3c" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-logo font-bold text-lg mb-3 mt-6" style={{ color: "var(--color-dark)" }}>What to do instead</h3>
              <ul className="space-y-2">
                {[
                  "Pour cooking fat into an old tin or jar, let it solidify, then bin it",
                  "Use a sink strainer to catch food scraps — empty it after every wash",
                  "Flush the drain with boiling water weekly to dissolve any grease build-up",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#27ae60" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="border-gray-200 my-8" />

              <h2 id="bathroom" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Bathroom &amp; Shower Drains</h2>
              <p>Bathroom drain blockages are almost always caused by hair and soap scum. They&rsquo;re one of the easiest to prevent with a single cheap product.</p>

              <h3 className="font-logo font-bold text-lg mb-3 mt-6" style={{ color: "var(--color-dark)" }}>Prevention tips</h3>
              <ul className="space-y-2">
                {[
                  "Install a drain hair catcher over every shower and bath drain — they cost $5–$10 and prevent the vast majority of bathroom blockages",
                  "Clean the catcher after every shower",
                  "Once a month, pour a kettle of boiling water slowly down bathroom drains to dissolve soap build-up",
                  "Every few months, use a plastic drain snake (available from hardware stores) to pull out any hair that's made it past the catcher",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-4 text-sm mt-4" style={{ background: "#f0f6fc" }}>
                <strong>Note on chemical drain cleaners:</strong> Products like Drano can clear minor blockages, but repeated use damages older PVC and copper pipes over time. They&rsquo;re also hazardous to handle. Use sparingly, and never as a substitute for proper cleaning habits.
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="toilet" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Toilets</h2>
              <p>Toilet blockages are almost always caused by flushing items that shouldn&rsquo;t go down. Australian plumbing systems and sewerage infrastructure are designed for toilet paper only. Everything else should go in the bin.</p>

              <h3 className="font-logo font-bold text-lg mb-3 mt-6" style={{ color: "var(--color-dark)" }}>Never flush these</h3>
              <ul className="space-y-2">
                {[
                  ""Flushable" wipes (they do not break down in Australian plumbing)",
                  "Cotton buds, cotton pads, or make-up wipes",
                  "Sanitary products, nappies, or incontinence pads",
                  "Dental floss (it tangles around other debris and creates nets)",
                  "Paper towels or tissues (much thicker than toilet paper)",
                  "Medications (these should be returned to a pharmacy for safe disposal)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e74c3c" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">If you have young children, consider a toilet lock or seat cover that prevents items being dropped in accidentally.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="laundry" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Laundry Drains</h2>
              <p>Laundry drains can block from lint, soap residue, and in some cases, small items of clothing left in pockets. Most washing machines have a filter that should be cleaned regularly &mdash; consult your machine&rsquo;s manual for how to access it.</p>
              <ul className="space-y-2 mt-3">
                {[
                  "Install a laundry lint filter on your washing machine outlet hose",
                  "Check and clean your washing machine filter every 2–3 months",
                  "Don't use excessive detergent — undissolved detergent can build up in pipes",
                  "Flush the laundry tub with hot water monthly",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="border-gray-200 my-8" />

              <h2 id="outdoor" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Outdoor &amp; Stormwater Drains</h2>
              <p>Outdoor blocked drains are often caused by leaf litter, soil, and tree root intrusion. In Sydney, the main offenders are large fig trees, camphor laurels, and jacarandas &mdash; all common in older Sydney suburbs &mdash; whose root systems are highly aggressive.</p>
              <ul className="space-y-2 mt-3">
                {[
                  "Keep grates over stormwater drains clear of leaves and debris — especially in autumn",
                  "Don't plant trees with aggressive root systems near drainage lines (ask a plumber or arborist for advice)",
                  "If you have large established trees near your home, a CCTV drain inspection every 2–3 years will catch root intrusion early",
                  "Ensure garden beds don't slope toward your house — redirecting surface water away reduces load on stormwater drains",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="border-gray-200 my-8" />

              <h2 id="maintenance" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Regular Maintenance Schedule</h2>
              <p>Here&rsquo;s a simple maintenance schedule to keep your drains clear year-round:</p>

              <div className="rounded-2xl overflow-hidden border border-gray-200 mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--color-brand-blue)" }}>
                      <th className="text-left px-4 py-3 text-white font-semibold">Frequency</th>
                      <th className="text-left px-4 py-3 text-white font-semibold">Task</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { freq: "After every shower", task: "Empty shower drain hair catcher" },
                      { freq: "Weekly", task: "Boiling water flush in kitchen sink" },
                      { freq: "Monthly", task: "Boiling water flush in all bathroom drains; clear outdoor grates of leaves" },
                      { freq: "Every 2–3 months", task: "Snake bathroom drains; clean washing machine filter" },
                      { freq: "Every 1–2 years", task: "Professional drain inspection (especially if you have large trees)" },
                    ].map((row, i) => (
                      <tr key={row.freq} style={{ background: i % 2 === 0 ? "#f9fafb" : "white" }}>
                        <td className="px-4 py-3 font-medium text-gray-700">{row.freq}</td>
                        <td className="px-4 py-3 text-gray-600">{row.task}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>

              <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>How do I know if my drain is starting to block?</h3>
              <p>The early signs are slow drainage, occasional gurgling sounds, and mild smells from the drain. Acting at this stage &mdash; with a flush or a snake &mdash; is much easier and cheaper than waiting for a full blockage.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Is baking soda and vinegar safe to use on drains?</h3>
              <p>Yes &mdash; it&rsquo;s a safe, non-corrosive option for minor build-up and odours. Pour half a cup of baking soda down the drain followed by half a cup of white vinegar. Wait 15 minutes, then flush with hot water. It&rsquo;s not as effective as a proper mechanical clean for a genuine blockage, but it&rsquo;s safe for regular maintenance.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How often should I get a professional drain inspection?</h3>
              <p>For most Sydney homes without large trees nearby, every 2&ndash;3 years is sufficient. If you have large trees (especially figs, camphor laurels, or willows) anywhere near your drainage lines, annual inspections are worthwhile. A CCTV drain inspection by Mr. Clog takes about 30 minutes and shows exactly what&rsquo;s happening inside your pipes.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Are enzyme drain cleaners worth using?</h3>
              <p>Enzyme-based drain treatments (available from hardware stores) are safe to use regularly and can help break down organic matter before it builds up into a blockage. They work slowly &mdash; they won&rsquo;t fix an existing blockage &mdash; but as a preventive maintenance product, they&rsquo;re worth adding to your routine, especially in kitchen drains.</p>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Got a Blocked Drain That Won&rsquo;t Budge?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Mr. Clog clears blocked drains across Sydney with CCTV inspection and high-pressure jetting. Same-day service available.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
                style={{ background: "var(--color-brand-blue)" }}
              >
                <PhoneCallIcon size={16} />
                Call {PHONE}
              </a>
            </div>
          </article>

          {/* TOC */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>

        </div>
      </div>
    </>
  );
}
