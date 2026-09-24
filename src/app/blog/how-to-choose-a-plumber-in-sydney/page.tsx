import type { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: pageTitle("How to Choose a Plumber in Sydney Without Getting Ripped Off"),
  description:
    "Choosing the wrong plumber can cost you hundreds. Here is exactly what to check before you hire \u2014 licence, insurance, pricing, and red flags.",
  openGraph: {
    type: "article",
    title: "How to Choose a Plumber in Sydney Without Getting Ripped Off",
    description: "Choosing the wrong plumber can cost you hundreds. Here is exactly what to check before you hire — licence, insurance, pricing, and red flags.",
    url: "https://www.mrclog.com.au/blog/how-to-choose-a-plumber-in-sydney",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-08",
    modifiedTime: "2026-05-08",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/how-to-choose-a-plumber-in-sydney" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "licence", title: "Check Their Licence" },
  { id: "insurance", title: "Insurance and Guarantees" },
  { id: "pricing", title: "Upfront vs Hourly Pricing" },
  { id: "red-flags", title: "Red Flags to Avoid" },
  { id: "verify-licence", title: "How to Verify a Licence in Two Minutes" },
  { id: "what-a-quote-contains", title: "What a Proper Quote Actually Contains" },
  { id: "questions-before-booking", title: "Questions Worth Asking on the Phone" },
  { id: "emergency-vs-planned", title: "Emergency Work Follows Different Rules" },
  { id: "after-the-job", title: "What You Should Receive After the Job" },
  { id: "faq", title: "FAQs" },
];

export default function BlogChoosePlumberPage() {
  return (
    <>
      <BlogPostSchema
        slug="how-to-choose-a-plumber-in-sydney"
        title="How to Choose a Plumber in Sydney (Without Getting Ripped Off)"
        description="Choosing the wrong plumber can cost you hundreds. Here is exactly what to check before you hire — licence, insurance, pricing, and red flags."
        datePublished="2026-05-08"
        faqs={[{"q":"How much does a Sydney plumber cost?","a":"Most jobs range from $150 for a minor repair to $500+ for blocked drain clearing or hot water repair. Always get a fixed upfront quote."},{"q":"How do I check a plumber’s licence?","a":"Search the plumber’s licence number on the NSW Fair Trading licence check website. Mr. Clog’s NSW licence is 347993C."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue-bright)" }}>Plumbing Advice</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>8 May 2026 · 5 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              How to Choose a Plumber in Sydney
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Without Getting Ripped Off</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Always verify a plumber&rsquo;s NSW licence before they start work. Ask for upfront fixed pricing, check they&rsquo;re insured, and avoid anyone who won&rsquo;t give you a written quote.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Finding a reliable plumber in Sydney can feel like a lottery. Here&rsquo;s exactly what to look for before you let anyone touch your pipes.</p>

              <h2 id="licence" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>1. Check Their Licence</h2>
              <p>In NSW, all plumbing and drainage work must be carried out by a licensed tradesperson. You can verify any NSW plumber&rsquo;s licence on the NSW Fair Trading licence check website.</p>
              <p><strong>Mr. Clog’s NSW Licence Number:</strong> 347993C</p>

              <h2 id="insurance" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>2. Insurance and Guarantees</h2>
              <p>A licenced plumber should carry public liability insurance (minimum $5 million) and workers compensation insurance if they have employees. Reputable plumbers also offer a 12-month workmanship guarantee on labour.</p>

              <h2 id="pricing" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>3. Upfront Fixed Pricing</h2>
              <p>Always ask for fixed upfront pricing. With hourly rates, jobs that should take an hour can stretch to three. Mr. Clog uses fixed pricing on every job — you know exactly what you&rsquo;ll pay before we pick up a spanner.</p>

              <h2 id="red-flags" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>4. Red Flags to Avoid</h2>
              <p>Watch out for plumbers who: don’t display a licence number, won’t give a written quote, ask for full payment up front in cash, can’t tell you their ABN, or pressure you to make a decision immediately.</p>

              <h2 id="verify-licence" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>How to Verify a Licence in Two Minutes</h2>

              <p>A licence number on a website proves nothing on its own. NSW Fair Trading publishes a public register of licence holders, and checking takes about as long as it takes to read this paragraph.</p>

              <p>Ask for the licence number, then look it up. You want three things to line up: the number is current rather than expired, the class of licence actually covers plumbing and drainage work, and the name on the licence matches the business you are dealing with. That last one catches a surprising amount — a licence belonging to a director who no longer works in the business is not a licence covering the person in your bathroom.</p>

              <p>If a business will not give you a licence number when asked directly, that is your answer. There is no innocent reason to withhold it.</p>


              <h2 id="what-a-quote-contains" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What a Proper Quote Actually Contains</h2>

              <p>A number on its own is not a quote. Before agreeing to anything, you want it in writing and you want it to say what is included.</p>

              <p>Look for the scope of the work described in plain terms, whether parts and materials are included or extra, whether the price covers making good afterwards — reinstating tiles, concrete or landscaping is frequently excluded and frequently expensive — and what the warranty covers and for how long.</p>

              <p>The most important clause is the one about the unexpected. Drainage work in particular can reveal a worse problem once a camera goes down or a wall comes off. A fair quote says what happens then: work stops, you are told what has been found, and you approve the extra before anyone continues. A quote that is silent on this is where disputed invoices come from.</p>


              <h2 id="questions-before-booking" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Questions Worth Asking on the Phone</h2>

              <p>Five minutes on the phone filters out most problems before anyone gets in a van.</p>

              <p><strong>Are you the person who will do the work?</strong> Some operators subcontract everything. That is not automatically bad, but you should know whose licence and whose warranty you are relying on.</p>

              <p><strong>Is there a call-out fee, and is it waived if I proceed?</strong> Get the answer before the booking, not on the invoice.</p>

              <p><strong>How do you charge — fixed price or hourly?</strong> Hourly rates reward slow work. Fixed pricing quoted after an inspection puts the risk on the plumber where it belongs.</p>

              <p><strong>What happens if the fix does not hold?</strong> A confident answer here tells you a lot about how they handle their own mistakes.</p>


              <h2 id="emergency-vs-planned" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Emergency Work Follows Different Rules</h2>

              <p>Everything above assumes you have time to compare. In a genuine emergency — water pouring through a ceiling, a gas smell, sewage backing up inside — you do not, and pretending otherwise is bad advice.</p>

              <p>What you can still do quickly: confirm the business is licensed, ask what the attendance charge is before they leave the depot, and ask them to call you with a price before starting work rather than after.</p>

              <p>The better protection is preparation. Find a plumber you trust while nothing is wrong, and save the number. The worst time to assess someone is while you are standing in water.</p>


              <h2 id="after-the-job" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What You Should Receive After the Job</h2>


              <p>The work being finished is not the end of it. There is paperwork you are entitled to, and it matters later far more than it seems on the day.</p>


              <p><strong>A proper tax invoice</strong> showing the business name, ABN and what was done — not a handwritten total on a docket.</p>


              <p><strong>A Certificate of Compliance</strong> for notifiable plumbing and drainage work in NSW. The licensed plumber is responsible for lodging it, and you should receive a copy. It is the document that proves the work was done lawfully, and its absence becomes a problem at sale time.</p>


              <p><strong>Warranty terms in writing</strong>, covering what is guaranteed and for how long, plus any manufacturer warranty on parts installed.</p>


              <p>Keep all of it with your property records. A folder of compliance certificates is genuinely useful when you sell, and reconstructing it years later is close to impossible.</p>



              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How much does a Sydney plumber cost?</h3>
              <p>Most jobs range from $150 for a minor repair to $500+ for blocked drain clearing or hot water repair. Always get a fixed upfront quote.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How do I check a plumber&rsquo;s licence?</h3>
              <p>Search the plumber’s licence number on the NSW Fair Trading licence check website. Mr. Clog’s NSW licence is 347993C.</p>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Need a Sydney Plumber You Can Trust?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog is fully licenced (NSW Lic. No. 347993C), insured, and provides upfront fixed pricing.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/contact" className="btn-outline-white">Contact Us</Link>
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
