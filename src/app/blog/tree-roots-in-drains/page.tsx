import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Tree Roots in Your Drains: Why It Keeps Happening (and How to Stop It) | Mr. Clog Blog",
  description:
    "If your drain keeps blocking every few months, tree roots are almost always the culprit. Here is how they get in, and the three real fixes — from temporary to permanent.",
  openGraph: {
    type: "article",
    title: "Tree Roots in Your Drains: Why It Keeps Happening (and How to Stop It) | Mr. Clog Blog",
    description: "If your drain keeps blocking every few months, tree roots are almost always the culprit. Here is how they get in, and the three real fixes — from temporary to permanent.",
    url: "https://www.mrclog.com.au/blog/tree-roots-in-drains",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-20",
    modifiedTime: "2026-05-20",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/tree-roots-in-drains" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "how-roots-get-in", title: "How Roots Get In" },
  { id: "cutting", title: "Mechanical Cutting" },
  { id: "foaming", title: "Root Foaming" },
  { id: "relining", title: "Pipe Relining" },
  { id: "which-fix", title: "Which Should You Choose?" },
  { id: "faq", title: "FAQs" },
];

export default function BlogTreeRootsInDrainsPage() {
  return (
    <>
      <BlogPostSchema
        slug="tree-roots-in-drains"
        title="Tree Roots in Your Drains: Why It Keeps Happening (and How to Stop It)"
        description="If your drain keeps blocking every few months, tree roots are almost always the culprit. Here is how they get in, and the three real fixes — from temporary to permanent."
        datePublished="2026-05-20"
        faqs={[{"q":"Will cutting down the tree fix the problem?","a":"Not always. Root systems can survive for months after a tree is removed, and existing damage to the pipe still allows new roots from neighbouring vegetation to enter. The pipe itself needs to be sealed for a permanent fix."},{"q":"How do I know if I have tree roots in my drain?","a":"Repeat blockages every few months, gurgling sounds, slow draining across multiple fixtures, and unexplained soggy patches in the lawn are classic signs. A CCTV drain inspection will confirm it."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Blocked Drains</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>20 May 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Tree Roots in Your Drains
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Why it keeps happening — and how to stop it for good</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                If a drain keeps blocking every few months, tree roots are almost certainly entering through a cracked or offset joint. Mechanical cutting is temporary, root foaming buys a few years, and pipe relining is the only true permanent fix.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>You have had the drain cleared twice this year already. Six weeks later — slow drains again. Sound familiar?</p>
              <p>In Sydney&apos;s older suburbs, tree roots are responsible for the majority of repeat drain blockages. Earthenware and old clay pipes are the worst offenders, but even PVC joins can let roots in once seals degrade.</p>

              <h2 id="how-roots-get-in" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>How roots get in</h2>
              <p>Roots don&apos;t smash pipes — they find weakness. A hairline crack, a loose rubber seal, or a slightly offset join is enough. Once a single root hair enters, it thickens, traps debris, and within months you have a full blockage.</p>

              <h2 id="cutting" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>1. Mechanical cutting (temporary)</h2>
              <p>An electric eel or hydro-jet cuts the roots out. Quick, effective, and the lowest-cost option — but the roots will grow back. Good for renters or short-term homeowners who just need the line flowing again.</p>

              <h2 id="foaming" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Root foaming treatment</h2>
              <p>A herbicide foam is flushed through the line to kill roots inside the pipe without harming the tree above ground. Treatment typically lasts several years before retreatment is needed. A solid middle-ground option when relining is not yet justified.</p>

              <h2 id="relining" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. Pipe relining or replacement (permanent)</h2>
              <p>A resin sleeve is cured inside the existing pipe, creating a seamless new pipe within the old one — no digging required. It is the most significant up-front investment of the three, but it is the only true permanent fix and the new pipe is rated to last for decades.</p>

              <h2 id="which-fix" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Which should you choose?</h2>
              <p>If you have cleared the same blockage more than twice, stop paying for repeat jetting and get a CCTV inspection. We will show you exactly where the roots are entering and what the line actually looks like — then you can make an informed call.</p>
            </div>

            <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Roots Keep Blocking Your Drain?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog offers CCTV inspection, root cutting, foaming treatments, and pipe relining across Sydney.</p>
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
