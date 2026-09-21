import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Backflow Prevention: Does Your Property Need Annual Testing?",
  description:
    "Backflow devices protect drinking water from contamination, and testable ones generally need checking every year by an accredited plumber. Here is what backflow is, who it applies to, and what a test involves.",
  openGraph: {
    type: "article",
    title: "Backflow Prevention: Does Your Property Need Annual Testing?",
    description: "Backflow devices protect drinking water from contamination, and testable ones generally need checking every year by an accredited plumber. Here is what backflow is, who it applies to, and what a test involves.",
    url: "https://www.mrclog.com.au/blog/backflow-prevention-testing-explained",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-09-21",
    modifiedTime: "2026-09-21",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/backflow-prevention-testing-explained" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "what-is-it", title: "What Backflow Actually Is" },
  { id: "who-needs", title: "Who Needs a Device" },
  { id: "find-yours", title: "How to Find Out If You Have One" },
  { id: "hazard", title: "The Three Hazard Ratings" },
  { id: "testing", title: "What a Test Involves" },
  { id: "failing", title: "When a Device Fails" },
  { id: "strata", title: "Strata and Commercial" },
  { id: "faq", title: "FAQs" },
];

export default function BlogBackflowPreventionTestingExplainedPage() {
  return (
    <>
      <BlogPostSchema
        slug="backflow-prevention-testing-explained"
        title="Backflow Prevention: Does Your Property Need Annual Testing?"
        description="Backflow devices protect drinking water from contamination, and testable ones generally need checking every year by an accredited plumber. Here is what backflow is, who it applies to, and what a test involves."
        datePublished="2026-09-21"
        faqs={[{"q":"How often does a backflow device need testing?","a":"Testable backflow prevention devices are generally required to be tested every twelve months by a plumber holding backflow accreditation, with the results submitted to the relevant water authority. Requirements vary by device type and by property, so confirm your obligations with Sydney Water or your local council."},{"q":"Do I need a backflow device on a normal house?","a":"Most standard homes do not. Requirements are usually triggered by something that creates a cross-connection risk — an irrigation system, a rainwater tank plumbed into the house supply, a fire service, a pool auto-fill, or commercial equipment. If your home has any of those, it is worth checking."},{"q":"What happens if I do not have it tested?","a":"Two things. Practically, an untested device may have failed without anyone noticing, which leaves the drinking water unprotected. Administratively, water authorities can follow up on overdue testing for registered devices. Neither is expensive to avoid; both are unpleasant to deal with after the fact."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Backflow Prevention</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>21 September 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Backflow Prevention Explained
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>What it is, who needs it, and why it is tested yearly</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                A backflow prevention device stops contaminated water being drawn backwards into the drinking water supply. Testable devices generally need checking every twelve months by an accredited plumber, with results lodged with the water authority. Most ordinary houses do not need one — irrigation, rainwater tanks, fire services and commercial sites usually do.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Backflow prevention is one of those parts of plumbing nobody thinks about until a letter arrives saying a test is overdue. It is worth understanding, because the risk it guards against is genuinely serious and the compliance side is genuinely simple.</p>

              <h2 id="what-is-it" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>What backflow actually is</h2>
              <p>Water in your mains is supposed to travel one way: in. Backflow is when it travels the other way, pulling water from your property back into the supply.</p>
              <p>It happens when pressure changes unexpectedly. A burst main, a fire service drawing hard on the network, or heavy draw-off nearby can drop mains pressure below the pressure on your side. Water then flows backwards — and whatever it was sitting in comes with it.</p>
              <p>That is the part that matters. Water sitting in an irrigation line has been in contact with soil and fertiliser. Water in a commercial process line may have been in contact with chemicals. Backwards flow puts that into the pipe your neighbours drink from.</p>

              <h2 id="who-needs" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Who actually needs a device</h2>
              <p>Most standard Sydney homes do not have a testable backflow device and do not need one. What triggers a requirement is a <strong>cross-connection</strong> — a point where the drinking supply could meet something else.</p>
              <p>Common triggers include an in-ground irrigation system, a rainwater tank plumbed into the household supply, a fire service, a swimming pool with an automatic top-up, a commercial kitchen, a workshop, a medical or dental practice, and most industrial equipment connected to mains water.</p>
              <p>If your property has any of those, it is worth confirming your obligations with Sydney Water or your local council rather than assuming. Requirements differ by device type and property use, and they do change.</p>

              <h2 id="find-yours" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>How to find out if you already have one</h2>
              <p>Plenty of owners inherit a device without knowing. It was installed for a previous use, or fitted when the property was built, and nobody mentioned it at settlement.</p>
              <p><strong>Look near the water meter first.</strong> Most devices sit close to the meter or just inside the boundary, often in a ground box or mounted on a short section of exposed pipe. You are looking for a brass or stainless body noticeably bulkier than the pipe either side, usually with two isolation valves and a set of small test points capped with brass plugs.</p>
              <p><strong>Check for a tag.</strong> Tested devices normally carry a metal or plastic tag showing the serial number and the date it was last tested. That tag tells you both that testing applies and whether it is overdue.</p>
              <p><strong>Ask the water authority.</strong> Registered devices are recorded against the property, so Sydney Water can confirm what is listed for your address. Worth doing when you buy a property with irrigation, a tank or commercial history — the same records that shape your account, covered in our guide to <Link href="/blog/how-to-read-your-sydney-water-bill" style={{ color: "var(--color-brand-blue)" }}>reading your Sydney Water bill</Link>.</p>
              <p>If you find a device with no tag and no idea when it was last checked, treat it as due. A test is inexpensive next to the alternative of assuming an unverified device is protecting anything.</p>

              <h2 id="hazard" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The three hazard ratings</h2>
              <p>Properties are assessed by how much harm a backflow event could do, and the rating determines the device required.</p>
              <p><strong>Low hazard</strong> — contamination would be unpleasant but not dangerous. A single-check device is typically enough.</p>
              <p><strong>Medium hazard</strong> — contamination could cause illness. Irrigation systems and many commercial premises land here.</p>
              <p><strong>High hazard</strong> — contamination could cause serious illness or death. Chemical handling, some medical facilities and certain industrial sites. These need the most robust device type and the strictest oversight.</p>
              <p>A licensed plumber assesses the hazard rating; it is not something to self-diagnose from a website, including this one.</p>

              <h2 id="testing" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>What an annual test involves</h2>
              <p>Short and undramatic, which is how it should be. An accredited plumber isolates the device, connects a test kit to its test points, and measures whether the internal check valves are still holding pressure the way the standard requires.</p>
              <p>Water is off to that section for roughly fifteen to thirty minutes. The plumber records the readings, notes the device serial number and location, and submits the result to the water authority.</p>
              <p>Keep your copy. For strata and commercial properties it is the document that proves the obligation was met, and it is always easier to produce than to reconstruct.</p>

              <h2 id="failing" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>When a device fails the test</h2>
              <p>Devices fail. They are mechanical, they sit outside, and their rubber seats perish over time. Grit from the mains is a common cause.</p>
              <p>A failed device is usually repaired with a service kit rather than replaced — new seats, springs and O-rings, then a re-test. Replacement is reserved for devices that are too old for parts or physically damaged.</p>
              <p>The important thing is that a failure found during a scheduled test is a routine repair. A failure nobody found is an unprotected connection, quietly, for however long it has been that way. That is the entire argument for testing on time.</p>

              <h2 id="strata" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>Strata and commercial properties</h2>
              <p>If you manage a strata scheme or a commercial site, backflow testing usually sits alongside your other annual obligations — and it is the one most often forgotten, because the device is outdoors and nothing visibly goes wrong when it is overdue.</p>
              <p>Two habits make it painless. Keep a register of every device with its location, serial number and last test date. And book the testing on a recurring date rather than waiting for a reminder letter.</p>
              <p>If you are engaging someone for the first time, check they hold current backflow accreditation specifically — a plumbing licence alone does not cover it. Our guide on <Link href="/blog/how-to-choose-a-plumber-in-sydney" style={{ color: "var(--color-brand-blue)" }}>choosing a plumber in Sydney</Link> covers what else to verify before you hire.</p>

              <h2 id="faq" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>FAQs</h2>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>How often does a device need testing?</h3>
              <p>Testable devices are generally required to be tested every twelve months by a plumber holding backflow accreditation, with results submitted to the water authority. Requirements vary by device type and property, so confirm yours with Sydney Water or your council.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>Do I need one on a normal house?</h3>
              <p>Usually not. Requirements are triggered by a cross-connection risk — irrigation, a plumbed-in rainwater tank, a fire service, a pool auto-fill, or commercial equipment. If your home has one of those, it is worth checking.</p>
              <h3 className="font-logo font-bold text-lg mb-2 mt-6" style={{ color: "var(--color-dark)" }}>What if I skip the test?</h3>
              <p>Practically, a device may have failed without anyone noticing, leaving the drinking supply unprotected. Administratively, water authorities do follow up on overdue testing for registered devices. Neither is expensive to avoid; both are a nuisance to deal with afterwards.</p>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Need a Backflow Test Booked?</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog handles backflow testing, repairs and reporting for homes, strata and commercial sites across Sydney — upfront fixed pricing and $0 call-out.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services/backflow-prevention" className="btn-outline-white">Backflow Prevention Services</Link>
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
