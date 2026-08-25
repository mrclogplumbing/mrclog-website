import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Pipe Relining vs Pipe Replacement: Which Does Your Home Need? | Mr. Clog Blog",
  description:
    "Relining repairs a damaged pipe from the inside without digging. Replacement means excavation. Here is how to tell which one your Sydney home actually needs, and what to ask before you commit.",
  openGraph: {
    type: "article",
    title: "Pipe Relining vs Pipe Replacement: Which Does Your Home Need? | Mr. Clog Blog",
    description: "Relining repairs a damaged pipe from the inside without digging. Replacement means excavation. Here is how to tell which one your Sydney home actually needs, and what to ask before you commit.",
    url: "https://www.mrclog.com.au/blog/pipe-relining-vs-pipe-replacement",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-08-25",
    modifiedTime: "2026-08-25",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/pipe-relining-vs-pipe-replacement" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "how-relining-works", title: "How Relining Works" },
  { id: "when-relining", title: "When Relining Is Right" },
  { id: "when-replacement", title: "When You Need Replacement" },
  { id: "comparing", title: "Comparing the Two" },
  { id: "cctv", title: "Why CCTV Comes First" },
  { id: "questions", title: "Questions to Ask" },
  { id: "faq", title: "FAQs" },
];

export default function BlogPipeReliningVsPipeReplacementPage() {
  return (
    <>
      <BlogPostSchema
        slug="pipe-relining-vs-pipe-replacement"
        title="Pipe Relining vs Pipe Replacement: Which Does Your Home Need?"
        description="Relining repairs a damaged pipe from the inside without digging. Replacement means excavation. Here is how to tell which one your Sydney home actually needs, and what to ask before you commit."
        datePublished="2026-08-25"
        faqs={[{"q":"How long does pipe relining last?","a":"A properly installed liner is designed to last decades — most manufacturers rate the cured resin liner at around 50 years. The critical variables are surface preparation, correct resin mix, and a full cure, which is why the quality of the installer matters more than the brand of liner."},{"q":"Does pipe relining require digging up my garden?","a":"In most cases no. Relining is done through existing access points such as an inspection opening or a boundary shaft, which is the main reason homeowners choose it over excavation when the pipe runs under a driveway, established garden, or paving."},{"q":"Is relining always cheaper than replacing the pipe?","a":"Not always. Relining itself is usually the less disruptive option, but the honest comparison includes reinstatement — the cost of putting back the concrete, paving, or landscaping that excavation destroys. For a pipe under an open lawn, replacement can be competitive. For one under a driveway, relining is typically well ahead."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Pipe Relining</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>25 August 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Pipe Relining vs Pipe Replacement
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>How to tell which one your home actually needs</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Relining repairs a damaged pipe from the inside using a resin liner, with no excavation. Replacement digs the old pipe out and lays a new one. Relining suits pipes that are cracked, root-damaged, or leaking but still structurally continuous — especially under driveways and paving. Replacement is the answer when a pipe has collapsed, badly sagged, or is too far out of shape to line.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>You&rsquo;ve had the same drain block three times this year. A plumber has finally put a camera down it and confirmed the pipe itself is damaged. Now you&rsquo;re being offered two very different solutions at two very different prices, and it&rsquo;s not obvious which one is the honest recommendation.</p>
              <p>Here&rsquo;s how the two methods actually differ, and how to work out which one your situation calls for.</p>

              <h2 id="how-relining-works" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>How pipe relining works</h2>
              <p>Relining is often described as building a new pipe inside the old one. The damaged line is cleared and cleaned — usually with a high-pressure jetter — then a flexible liner soaked in resin is pulled or inverted into position and inflated against the existing pipe wall.</p>
              <p>The resin cures hard, either over time or accelerated with hot water, steam, or UV light. What&rsquo;s left is a smooth, jointless, structural pipe within the old one. Junctions to branch lines are then reopened with a cutter.</p>
              <p>Because the whole process runs through existing access points, nothing above the pipe gets touched. That is the entire appeal.</p>

              <h2 id="when-relining" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When relining is the right call</h2>
              <p>Relining tends to be the clear winner when the pipe is damaged but still holds its shape and line. Typical cases we see across Sydney:</p>
              <p><strong>Tree root intrusion.</strong> Roots enter through cracked joints in old earthenware pipes. A liner seals those joints permanently, which removes the entry point rather than just cutting back what has grown in. If your drain blocks like clockwork every few months, our guide on <Link href="/blog/tree-roots-in-drains" style={{ color: "var(--color-brand-blue)" }}>tree roots in drains</Link> explains why cutting alone never ends the cycle.</p>
              <p><strong>Cracked or fractured sections.</strong> Hairline cracks and longitudinal fractures line well, provided the pipe hasn&rsquo;t deformed.</p>
              <p><strong>Pipes under something expensive.</strong> Driveways, tiled courtyards, established gardens, retaining walls, or a slab. The cost of excavating and reinstating these is frequently larger than the pipe work itself.</p>
              <p><strong>Older terraces and semis.</strong> In the Inner West and inner south, drains often run under the house or tight against a boundary. Digging may be genuinely impractical there.</p>

              <h2 id="when-replacement" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When you actually need replacement</h2>
              <p>A liner needs a host pipe to form against. Where that host is gone or badly deformed, relining is the wrong tool, and any plumber who offers it anyway is worth a second opinion.</p>
              <p><strong>Collapsed pipe.</strong> If a section has caved in, there is nothing to line. That length has to be dug up and replaced, though sometimes only that section, with the rest relined.</p>
              <p><strong>Severe sagging, or a &ldquo;belly&rdquo;.</strong> Where ground movement has dropped a section so waste pools in it, a liner faithfully reproduces the sag. The structural problem is fixed and the drainage problem is not.</p>
              <p><strong>Badly undersized or wrongly graded pipes.</strong> Relining slightly reduces internal diameter. On a pipe that was already marginal, or laid at the wrong fall, replacement is the chance to correct it properly.</p>
              <p><strong>Extensive damage along the whole run.</strong> At some point, lining section after section stops making sense against simply laying new PVC.</p>

              <h2 id="comparing" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Comparing the two honestly</h2>
              <p><strong>Disruption.</strong> Relining wins decisively. Most jobs are done in a day with no excavation. Replacement means machinery, spoil, and a site that needs reinstating.</p>
              <p><strong>Time.</strong> A typical relining job is completed within a day, and the drain is usually back in service the same day. Replacement runs longer once you count excavation, laying, backfill, and putting the surface back.</p>
              <p><strong>Longevity.</strong> Both are long-term fixes when done properly. A cured liner is rated for decades, and so is new PVC.</p>
              <p><strong>Cost.</strong> Compare total project cost, not the plumbing line item. Excavation quotes that exclude reinstatement of your driveway or landscaping are not comparable to a relining quote that includes everything.</p>
              <p><strong>Access.</strong> Some pipe layouts have too many sharp bends or too little access to line well. A camera inspection settles this, not a phone conversation.</p>

              <h2 id="cctv" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Why a CCTV inspection has to come first</h2>
              <p>Nobody can tell you which method your drain needs without seeing inside it. A <Link href="/services/cctv-drain-inspection" style={{ color: "var(--color-brand-blue)" }}>CCTV drain inspection</Link> shows the actual condition, the depth and location of the fault, and whether the pipe still holds its shape.</p>
              <p>Insist on seeing the footage. A reputable plumber will walk you through it and show you the specific defect they&rsquo;re quoting to fix. If a recommendation for major work arrives without any camera evidence, that is a genuine red flag — the same one covered in our guide on <Link href="/blog/how-to-choose-a-plumber-in-sydney" style={{ color: "var(--color-brand-blue)" }}>choosing a plumber in Sydney</Link>.</p>

              <h2 id="questions" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Questions to ask before you commit</h2>
              <p><strong>Can I see the camera footage of the defect?</strong> Always. If the answer is vague, stop there.</p>
              <p><strong>Does the quote include reinstatement?</strong> For excavation, ask specifically who puts back the concrete, paving, or turf, and whether that is in the price.</p>
              <p><strong>What warranty comes with the liner or the new pipe?</strong> Get the term and what it covers in writing.</p>
              <p><strong>Will you re-camera the drain afterwards?</strong> A post-works inspection proves the repair landed as intended. It should be standard.</p>
              <p><strong>Is the whole run being lined, or one section?</strong> Understand exactly which metres are covered, and what happens to the rest.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How long does pipe relining last?</h3>
              <p>A properly installed liner is designed to last decades — most manufacturers rate the cured resin liner at around 50 years. The variables that matter are surface preparation, correct resin mix, and a full cure, which is why the quality of the installer matters more than the brand of liner.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Does relining mean digging up my garden?</h3>
              <p>In most cases no. The work runs through existing access points such as an inspection opening or boundary shaft. That is the main reason homeowners choose it when the pipe sits under a driveway, established garden, or paving.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can tree roots grow back through a relined pipe?</h3>
              <p>Not through the liner itself. Relining works against roots precisely because it seals the cracked joints they were entering through. Roots can still find an unlined section further along the run, which is why the camera inspection needs to cover the whole line, not just the blockage.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Not Sure Which One Your Drain Needs?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog camera-inspects your drain first and shows you the footage — then quotes an upfront fixed price with $0 call-out.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/pipe-relining" className="btn-outline-white">Pipe Relining Services</Link>
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
