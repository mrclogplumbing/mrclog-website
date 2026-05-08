import type { Metadata } from "next";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";

export const metadata: Metadata = {
  title: "How to Choose a Plumber in Sydney (Without Getting Ripped Off) | Mr. Clog Blog",
  description:
    "Choosing the wrong plumber can cost you hundreds. Here's exactly what to check before you hire — licence, insurance, pricing, and the red flags to avoid.",
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "licence", title: "Check Their Licence" },
  { id: "insurance", title: "Insurance & Guarantees" },
  { id: "pricing", title: "Upfront vs Hourly Pricing" },
  { id: "red-flags", title: "Red Flags to Avoid" },
  { id: "questions", title: "Questions to Ask" },
  { id: "faq", title: "FAQs" },
];

export default function BlogChoosePlumberPage() {
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
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Plumbing Advice</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>8 May 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              How to Choose a Plumber in Sydney
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              Without Getting Ripped Off
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
                Always verify a plumber&rsquo;s NSW licence before they start work. Ask for upfront fixed pricing, check they&rsquo;re insured, and avoid anyone who won&rsquo;t give you a written quote. A licenced plumber in NSW must display their licence number on all advertising.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Finding a reliable plumber in Sydney can feel like a lottery. Stories of dodgy tradespeople charging three times the quoted amount, doing shoddy work, or disappearing mid-job are unfortunately common. But with the right checklist, you can dramatically reduce your risk of a bad experience.</p>
              <p>Here&rsquo;s exactly what to look for before you let anyone touch your pipes.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="licence" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>1. Check Their Licence (It&rsquo;s the Law)</h2>
              <p>In NSW, all plumbing and drainage work must be carried out by a licensed tradesperson. It&rsquo;s not optional &mdash; it&rsquo;s a legal requirement under the <em>Plumbing and Drainage Act 2011</em>. An unlicensed plumber puts you at risk of fines, voided insurance claims, and dangerous work.</p>
              <p>You can verify any NSW plumber&rsquo;s licence instantly on the <strong>NSW Fair Trading licence check</strong> website. You&rsquo;ll need their licence number, which any reputable plumber will display on their van, website, and paperwork.</p>
              <div className="rounded-xl p-4 text-sm" style={{ background: "#f0f6fc" }}>
                <strong>Mr. Clog&rsquo;s NSW Licence Number:</strong> 347993C &mdash; you can verify this at any time on the NSW Fair Trading website.
              </div>

              <h3 className="font-logo font-bold text-lg mb-2 mt-8" style={{ color: "var(--color-dark)" }}>What the licence covers</h3>
              <p>A full plumbing contractor licence covers all plumbing and drainage work. There are also restricted licences that only cover gas fitting, irrigation, or roof plumbing. Make sure the plumber you hire holds the right licence for the job you need done.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="insurance" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Check They&rsquo;re Insured</h2>
              <p>A licenced plumber should carry at minimum:</p>
              <ul className="space-y-2 mt-3">
                {[
                  "Public liability insurance (minimum $5 million for most residential work)",
                  "Workers compensation insurance if they have employees",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-brand-blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">If a plumber causes damage to your property and isn&rsquo;t insured, you may have little recourse. Always ask for proof of insurance if you&rsquo;re in any doubt.</p>
              <p>Most reputable plumbers also offer a <strong>workmanship guarantee</strong> &mdash; typically 12 months on labour. This means if something goes wrong with the work, they&rsquo;ll come back and fix it at no charge.</p>

              <hr className="border-gray-200 my-8" />

              <h2 id="pricing" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. Upfront Fixed Pricing vs Hourly Rates</h2>
              <p>This is where many homeowners get burned. Two different pricing models exist in the Sydney plumbing industry:</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Hourly rate</h3>
              <p>The plumber charges a set hourly rate plus parts. Common in Sydney &mdash; but the final bill is unpredictable. Jobs that should take an hour can mysteriously stretch to three. Always get a cap or estimate up front if a plumber charges hourly.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Fixed upfront pricing</h3>
              <p>The plumber diagnoses the problem and gives you a fixed price before starting work. No surprises. This is what Mr. Clog uses on every job &mdash; you know exactly what you&rsquo;ll pay before we pick up a spanner.</p>
              <div className="rounded-xl p-4 text-sm mt-4" style={{ background: "#fff3cd", borderLeft: "4px solid #ffc107" }}>
                <strong>Watch out:</strong> Some plumbers quote a low &ldquo;call-out fee&rdquo; then hit you with high hourly rates once they&rsquo;re on site and you feel committed. Ask for the full likely cost in writing before agreeing to any work.
              </div>

              <hr className="border-gray-200 my-8" />

              <h2 id="red-flags" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. Red Flags to Avoid</h2>
              <ul className="space-y-3 mt-3">
                {[
                  "No licence number displayed on their website, van, or paperwork",
                  "Won't give a written quote before starting work",
                  "Asks for full payment up front in cash",
                  "Can't tell you their ABN when asked",
                  "Pressures you to make a decision immediately",
                  "Refuses to show you what's wrong before starting repairs",
                  "No reviews, no website, no fixed address",
                  "Quote is dramatically lower than everyone else — often means corners will be cut",
                ].map((flag) => (
                  <li key={flag} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e74c3c" }} />
                    {flag}
                  </li>
                ))}
              </ul>

              <hr className="border-gray-200 my-8" />

              <h2 id="questions" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>5. Questions to Ask Before Hiring</h2>
              <p>Before you agree to anything, ask these:</p>
              <ol className="space-y-3 list-decimal pl-5 text-sm mt-3">
                <li><strong>What&rsquo;s your NSW plumbing licence number?</strong> Any legitimate plumber will answer this immediately.</li>
                <li><strong>Can you give me a fixed price in writing before you start?</strong> If they won&rsquo;t, think carefully.</li>
                <li><strong>Are you insured?</strong> Public liability at minimum.</li>
                <li><strong>What&rsquo;s your workmanship guarantee?</strong> Look for at least 12 months on labour.</li>
                <li><strong>Do you have recent reviews I can see?</strong> Google reviews are the most reliable &mdash; look for volume and recency, not just star rating.</li>
              </ol>

              <hr className="border-gray-200 my-8" />

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>

              <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>How much does a plumber cost in Sydney?</h3>
              <p>Sydney plumbers typically charge between $120 and $250 per hour, plus parts. Fixed-price jobs like a tap replacement might cost $150&ndash;$250 all in. More complex jobs like hot water system replacement start from $800&ndash;$1,200. Always get a written quote before work begins.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Can I do plumbing work myself in NSW?</h3>
              <p>In NSW, virtually all licensed plumbing work must be done by a licensed plumber. Homeowners can do very minor tasks &mdash; like replacing a tap washer &mdash; but connecting to water supply, drainage, or gas systems requires a licensed tradesperson and, in most cases, a Certificate of Compliance.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>What is a Certificate of Compliance?</h3>
              <p>A Certificate of Compliance (formerly called a compliance certificate) is a document your plumber must provide after completing certain types of work. It certifies the work was done to the required standard. Keep it &mdash; you&rsquo;ll need it if you sell your home.</p>

              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How do I verify a plumber&rsquo;s licence in NSW?</h3>
              <p>Visit the NSW Fair Trading website and use the licence check tool. You&rsquo;ll need the plumber&rsquo;s licence number, which must be displayed on their advertising. You can also call NSW Fair Trading on 13 32 20.</p>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Need a Licensed Sydney Plumber?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Mr. Clog is fully licensed (NSW Lic. 347993C), insured, and uses fixed upfront pricing on every job.
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
