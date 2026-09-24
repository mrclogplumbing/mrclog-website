import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import QuoteForm from "@/components/QuoteForm";
import ReviewStrip from "@/components/ReviewStrip";
import JobStories from "@/components/JobStories";
import Link from "next/link";
import { allAreas, getArea, suburbPageFor, suburbsInRegion } from "@/lib/areas";
import { getBlockedDrainArea } from "@/lib/blocked-drain-areas";
import { getPipeReliningArea } from "@/lib/pipe-relining-areas";
import { getHotWaterArea } from "@/lib/hot-water-areas";
import { storiesForSuburb } from "@/lib/job-stories";
import { PhoneCallIcon, MapPinIcon, CheckCircleIcon } from "@/components/ui/ServiceIcons";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";
const BASE = "https://www.mrclog.com.au";

/**
 * Up to `count` other suburb pages in the same region, for the "nearby"
 * links. Suburbs this page already names as neighbours come first, then the
 * rest of the region alphabetically, so a new suburb page is picked up
 * without anyone editing a list.
 */
function neighbourPages(slug: string, regionSlug: string, named: string[], count = 4) {
  const siblings = suburbsInRegion(regionSlug).filter((s) => s.slug !== slug);
  const lower = named.map((n) => n.toLowerCase());
  const near = siblings.filter((s) => lower.includes(s.label.toLowerCase()));
  const rest = siblings.filter((s) => !lower.includes(s.label.toLowerCase()));
  return [...near, ...rest].slice(0, count);
}

export async function generateStaticParams() {
  return allAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getArea(slug);
  if (!location) return {};
  return {
    alternates: { canonical: `/locations/${slug}` },
    title: pageTitle(location.metaTitle),
    description: location.metaDescription,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getArea(slug);
  if (!location) notFound();

  const parentRegion = location.parent ? getArea(location.parent) : undefined;
  const seeAlso = location.seeAlso ? getArea(location.seeAlso.slug) : undefined;
  // Suburb pages that mention strata or commercial work link to that service.
  const mentionsStrata = /strata|commercial/i.test(`${location.metaTitle} ${location.headline}`);
  const neighbours = parentRegion
    ? neighbourPages(slug, parentRegion.slug, location.suburbs)
    : [];
  // On a region page, every suburb page filed under it.
  const regionSuburbPages = parentRegion ? [] : suburbsInRegion(slug);
  // Matches the visible breadcrumb in the hero.
  const breadcrumb = [
    { name: "Service Areas", path: "/locations" },
    ...(parentRegion ? [{ name: parentRegion.label, path: `/locations/${parentRegion.slug}` }] : []),
    { name: location.label, path: `/locations/${slug}` },
  ];
  // Service pages that exist for this specific suburb, for the cross-links.
  const suburbServices = [
    getBlockedDrainArea(slug) && { href: `/blocked-drains/${slug}`, label: "Blocked Drains" },
    getPipeReliningArea(slug) && { href: `/pipe-relining/${slug}`, label: "Pipe Relining" },
    getHotWaterArea(slug) && { href: `/hot-water/${slug}`, label: "Hot Water Systems" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumb.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
              item: `${BASE}${c.path}`,
            })),
          }),
        }}
      />
      {location.faqs && location.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: location.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      )}
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[50vh]"
        style={{ background: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative section-container py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue-bright)" }}>
              Mr. Clog Plumbing
            </p>
            <nav aria-label="Breadcrumb" className="font-display text-sm mb-3">
              {breadcrumb.slice(0, -1).map((c) => (
                <span key={c.path}>
                  <Link href={c.path} className="text-white/70 hover:text-white no-underline">
                    {c.name}
                  </Link>
                  <span className="text-white/60"> / </span>
                </span>
              ))}
              <span className="text-white/60" aria-current="page">{location.label}</span>
            </nav>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              {location.headline}
            </h1>
            <p className="font-display text-lg text-white/80 mb-8 max-w-2xl">
              {location.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                <PhoneCallIcon size={18} />
                Call {PHONE}
              </a>
              <Link href="/contact" className="btn-ghost-white px-8 py-4 text-base text-center">
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Which page is which, where a region and a suburb page overlap */}
      {location.seeAlso && seeAlso && (
        <section className="section-container pt-10">
          <div className="max-w-3xl rounded-2xl p-5 border" style={{ borderColor: "rgba(26,159,255,0.35)", background: "var(--color-brand-blue-light)" }}>
            <p className="text-sm text-gray-700 leading-relaxed">
              {location.seeAlso.text}{" "}
              <Link href={`/locations/${seeAlso.slug}`} className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                {seeAlso.headline} &rarr;
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Description + Services */}
      <section className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-logo font-bold text-3xl mb-4" style={{ color: "var(--color-dark)" }}>
              Your Local {location.label} Plumber
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              {location.description}
            </p>            {location.localContent && (
              <p className="text-gray-600 leading-relaxed text-base mb-6 mt-4 p-4 border-l-4 rounded-r-xl" style={{ borderColor: "var(--color-brand-blue)", background: "rgba(26,159,255,0.04)" }}>
                {location.localContent}
              </p>
            )}

            <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--color-brand-blue-light)" }}>
              <MapPinIcon size={20} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <strong>$0 call-out fee</strong> — available 24/7, 365 days a year across all {location.label} suburbs.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-logo font-bold text-xl mb-5" style={{ color: "var(--color-dark)" }}>
              Services in {location.label}
            </h3>
            <ul className="space-y-2">
              {location.services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircleIcon size={16} className="flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            {mentionsStrata && (
              <Link
                href="/services/strata-and-commercial-plumbing"
                className="mt-6 block rounded-xl p-4 bg-white border no-underline transition-colors hover:bg-blue-50"
                style={{ borderColor: "rgba(26,159,255,0.35)" }}
              >
                <span className="font-semibold text-sm block" style={{ color: "var(--color-dark)" }}>
                  Strata &amp; commercial plumbing
                </span>
                <span className="text-sm font-semibold mt-1 block" style={{ color: "var(--color-brand-blue)" }}>
                  For strata managers, apartment blocks, offices and shops &rarr;
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Common local problems */}
      {location.commonProblems && location.commonProblems.length > 0 && (
        <section className="section-container pb-4 md:pb-8">
          <div className="max-w-3xl">
            <h2 className="font-logo font-bold text-3xl mb-4" style={{ color: "var(--color-dark)" }}>
              Common Plumbing Problems in {location.label}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Every part of Sydney has its own plumbing character, shaped by the age of the
              housing, the ground it sits on, and the weather it takes. Here is what we are
              called out for most often around {location.label}.
            </p>
            <div className="space-y-8">
              {location.commonProblems.map((problem) => (
                <div key={problem.title}>
                  <h3 className="font-logo font-bold text-xl mb-2" style={{ color: "var(--color-dark)" }}>
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">{problem.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent jobs, from the owner's own photos and notes */}
      <JobStories heading={`Recent Jobs in ${location.label}`} stories={storiesForSuburb(slug)} show="service" />

      {/* Suburbs */}
      <section style={{ background: "var(--color-grey-100)" }} className="py-16 md:py-20">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
              Coverage Area
            </p>
            <h2 className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
              {parentRegion ? "Nearby Suburbs We Cover" : "Suburbs We Service"}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {location.suburbs.map((suburb) => {
              const page = suburbPageFor(suburb);
              return page ? (
                <Link
                  key={suburb}
                  href={`/locations/${page.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-white border no-underline transition-colors hover:bg-blue-50"
                  style={{ borderColor: "rgba(26,159,255,0.45)", color: "var(--color-brand-blue)" }}
                >
                  {suburb} &rarr;
                </Link>
              ) : (
                <span
                  key={suburb}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700"
                >
                  {suburb}
                </span>
              );
            })}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            Don&rsquo;t see your suburb? <a href={PHONE_HREF} style={{ color: "var(--color-brand-blue)" }} className="font-semibold">Call us</a> — we likely cover it.
          </p>
          {regionSuburbPages.length > 0 && (
            <div className="mt-10 max-w-4xl mx-auto text-center">
              <h3 className="font-logo font-bold text-xl mb-4" style={{ color: "var(--color-dark)" }}>
                Suburb Guides in {location.label}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {regionSuburbPages.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/locations/${sub.slug}`}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white border no-underline transition-colors hover:bg-blue-50"
                    style={{ borderColor: "rgba(26,159,255,0.45)", color: "var(--color-brand-blue)" }}
                  >
                    Plumber {sub.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          )}
          {parentRegion && neighbours.length > 0 && (
            <div className="mt-10 max-w-4xl mx-auto text-center">
              <h3 className="font-logo font-bold text-xl mb-4" style={{ color: "var(--color-dark)" }}>
                More Suburbs in {parentRegion.label}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {neighbours.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/locations/${sub.slug}`}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white border no-underline transition-colors hover:bg-blue-50"
                    style={{ borderColor: "rgba(26,159,255,0.45)", color: "var(--color-brand-blue)" }}
                  >
                    Plumber {sub.label} &rarr;
                  </Link>
                ))}
                <Link
                  href={`/locations/${parentRegion.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-white border no-underline transition-colors hover:bg-blue-50"
                  style={{ borderColor: "rgba(26,159,255,0.45)", color: "var(--color-brand-blue)" }}
                >
                  All of {parentRegion.label} &rarr;
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {suburbServices.length > 0 && (
        <section className="section-container pb-4">
          <div className="max-w-3xl mx-auto">
            <p className="font-semibold text-sm mb-3" style={{ color: "var(--color-dark)" }}>
              Written for {location.label} specifically
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {suburbServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="rounded-2xl p-5 bg-blue-50 no-underline transition-colors hover:bg-blue-100"
                >
                  <span className="font-semibold text-sm block" style={{ color: "var(--color-dark)" }}>
                    {svc.label}
                  </span>
                  <span className="text-sm font-semibold mt-1 block" style={{ color: "var(--color-brand-blue)" }}>
                    in {location.label} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-container py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
              Common Questions
            </p>
            <h2 className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
              FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {location.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl p-6 border border-gray-100 bg-white shadow-sm">
                <h3 className="font-logo font-bold text-base mb-2" style={{ color: "var(--color-dark)" }}>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewStrip />

      {/* Enquiry form */}
      <section className="section-container py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <QuoteForm
            source={location.label}
            heading={`Request a Plumber in ${location.label}`}
            blurb="Prefer not to call? Send a few details and we&rsquo;ll come back to you with an upfront fixed price."
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-brand-blue)" }} className="py-16">
        <div className="section-container text-center">
          <h2 className="font-logo font-extrabold text-white text-3xl md:text-4xl mb-3">
            Need a Plumber in {location.label}?
          </h2>
          <p className="text-white mb-8 font-display">
            Call now — $0 call-out fee, available 24/7 across {location.label}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white font-bold rounded-full px-8 py-4 text-base transition-all hover:bg-blue-50"
              style={{ color: "var(--color-brand-blue)" }}
            >
              <PhoneCallIcon size={18} />
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-ghost-white px-8 py-4 text-base text-center">
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
