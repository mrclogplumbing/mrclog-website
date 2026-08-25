import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogPostSchema from "@/components/blog/BlogPostSchema";

export const metadata: Metadata = {
  title: "Water Pressure Too High or Too Low? How to Diagnose It Yourself | Mr. Clog Blog",
  description:
    "Bad water pressure isn't just annoying — it can damage appliances or signal a hidden leak. Here's how to test your own pressure in 5 minutes and know when it's serious.",
  openGraph: {
    type: "article",
    title: "Water Pressure Too High or Too Low? How to Diagnose It Yourself | Mr. Clog Blog",
    description: "Bad water pressure isn't just annoying — it can damage appliances or signal a hidden leak. Here's how to test your own pressure in 5 minutes and know when it's serious.",
    url: "https://www.mrclog.com.au/blog/water-pressure-too-high-or-too-low",
    siteName: "Mr. Clog Plumbing",
    publishedTime: "2026-05-20",
    modifiedTime: "2026-05-20",
    authors: ["Mr. Clog Plumbing"],
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog/water-pressure-too-high-or-too-low" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const tocItems = [
  { id: "test", title: "The Quick Test" },
  { id: "too-high", title: "If Pressure Is Too High" },
  { id: "too-low", title: "If Pressure Is Too Low" },
  { id: "hidden-leak", title: "The Hidden Warning Sign" },
  { id: "faq", title: "FAQs" },
];

export default function BlogWaterPressurePage() {
  return (
    <>
      <BlogPostSchema
        slug="water-pressure-too-high-or-too-low"
        title="Water Pressure Too High or Too Low? How to Diagnose It Yourself"
        description="Bad water pressure isn't just annoying — it can damage appliances or signal a hidden leak. Here's how to test your own pressure in 5 minutes and know when it's serious."
        datePublished="2026-05-20"
        faqs={[{"q":"What is normal household water pressure?","a":"Normal household water pressure sits between 350 and 500 kPa. Above 500 kPa is too high and risks damaging appliances; below 200 kPa is too low and may indicate a partial blockage or failing valve."},{"q":"Do I need a pressure-limiting valve?","a":"In NSW, all homes built since 2008 are required to have a pressure-limiting valve. They typically last around a decade before they need replacement."}]}
      />
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[38vh]" style={{ background: "var(--color-dark)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }} aria-hidden="true" />
        <div className="relative section-container py-12 md:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(26,159,255,0.2)", color: "var(--color-brand-blue)" }}>Plumbing Advice</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>20 May 2026 · 6 min read</span>
            </div>
            <h1 className="font-logo font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Water Pressure Too High or Too Low?
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>How to diagnose it yourself in 5 minutes</p>
          </div>
        </div>
      </section>

      <div className="section-container py-14 md:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 max-w-5xl mx-auto">
          <article>
            <div className="rounded-2xl p-6 mb-10 border-l-4" style={{ background: "var(--color-brand-blue-light)", borderColor: "var(--color-brand-blue)" }}>
              <p className="font-logo font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>Quick Answer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Screw an inexpensive pressure gauge onto any outside tap and turn it on fully. Normal household pressure is 350–500 kPa. Above that, you risk damaging appliances; below 200 kPa, something is restricting your supply.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Most Sydney homeowners only think about water pressure when something is clearly wrong — a weak shower, a banging pipe, or a suddenly huge water bill. But pressure issues are one of the easiest things to diagnose yourself before booking a callout.</p>

              <h2 id="test" className="font-logo font-bold text-2xl mt-10 mb-4" style={{ color: "var(--color-dark)" }}>The quick test</h2>
              <p>Pick up a screw-on pressure gauge from any hardware store. Screw it onto an outside tap, turn the tap fully on, and read the dial. Normal household pressure sits between 350 and 500 kPa. Anything above 500 kPa is too high; below 200 kPa is too low.</p>

              <h2 id="too-high" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>If pressure is too high</h2>
              <p>High pressure shortens the life of every appliance in your home — dishwashers, washing machines, and especially hot water units. Sydney Water mains can deliver pressure well above what household plumbing is designed for, which is why a pressure-limiting valve (PLV) is required by the plumbing code on all homes built after 2008.</p>
              <p>If yours is older, or your PLV has failed (they typically last about a decade), water hammer and leaks become inevitable. Replacing a failed PLV is a straightforward job for a licensed plumber.</p>

              <h2 id="too-low" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>If pressure is too low</h2>
              <p>Low pressure across the whole house usually means a partially closed main stop tap, a clogged PLV, or a corroded galvanised supply line in older homes.</p>
              <p>Low pressure at just one outlet is almost always a blocked aerator or cartridge — a 10-minute DIY fix.</p>

              <h2 id="hidden-leak" className="font-logo font-bold text-2xl mb-4" style={{ color: "var(--color-dark)" }}>The hidden warning sign</h2>
              <p>If your water meter is ticking over while every tap and appliance in the house is off, you have a leak somewhere — and pressure issues often go hand in hand with it. Do not ignore it; underground leaks can cause significant damage by the time they surface.</p>
              <p>Not sure what your reading means? Send us a photo of the gauge and we will tell you straight up whether it is a callout job or a DIY fix.</p>
            </div>

            <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "var(--color-dark)" }}>
              <p className="font-logo font-bold text-xl text-white mb-2">Pressure Problems? We Can Help</p>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Mr. Clog diagnoses and fixes water pressure issues across Sydney — from PLV replacement to leak detection.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={16} />
                  Call {PHONE}
                </a>
                <Link href="/services" className="btn-outline-white">All Services</Link>
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
