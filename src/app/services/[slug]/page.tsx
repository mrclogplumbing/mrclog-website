import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import QuoteForm from "@/components/QuoteForm";
import ReviewStrip from "@/components/ReviewStrip";
import JobStories from "@/components/JobStories";
import { reviewTagForService } from "@/lib/review-tags";
import Link from "next/link";
import Image from "next/image";
import { services, getService } from "@/lib/services";
import { photosForService } from "@/lib/service-photos";
import { storiesForService } from "@/lib/job-stories";
import { blockedDrainSuburbLinks } from "@/lib/blocked-drain-areas";
import { pipeReliningSuburbLinks } from "@/lib/pipe-relining-areas";
import { hotWaterSuburbLinks } from "@/lib/hot-water-areas";
import { PhoneCallIcon, CheckCircleIcon } from "@/components/ui/ServiceIcons";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";
const BASE = "https://www.mrclog.com.au";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    alternates: { canonical: `/services/${slug}` },
    title: pageTitle(service.metaTitle),
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { hero: heroPhoto, proof: proofPhotos = [] } = photosForService(slug);
  const suburbLinks =
    slug === "blocked-drains"
      ? { prefix: "blocked-drains", items: blockedDrainSuburbLinks() }
      : slug === "pipe-relining"
        ? { prefix: "pipe-relining", items: pipeReliningSuburbLinks() }
        : slug === "hot-water-systems"
          ? { prefix: "hot-water", items: hotWaterSuburbLinks() }
          : null;

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": service.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />
      {/* Breadcrumb schema, matching the visible breadcrumb in the hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Services", item: `${BASE}/services` },
              { "@type": "ListItem", position: 2, name: service.label, item: `${BASE}/services/${slug}` },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[50vh]"
        style={{ background: "var(--color-dark)" }}
      >
        {heroPhoto && (
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            quality={60}
            sizes="(max-width: 767px) 67vw, 100vw"
            className="object-cover"
            style={{ objectPosition: heroPhoto.focus ?? "center" }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: heroPhoto
              ? "linear-gradient(105deg, rgba(26,31,46,0.95) 0%, rgba(26,31,46,0.82) 55%, rgba(26,159,255,0.45) 100%)"
              : "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative section-container py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue-bright)" }}>
              Mr. Clog Plumbing
            </p>
            <nav aria-label="Breadcrumb" className="font-display text-sm mb-3">
              <Link href="/services" className="text-white/70 hover:text-white no-underline">
                Services
              </Link>
              <span className="text-white/60"> / </span>
              <span className="text-white/60" aria-current="page">{service.label}</span>
            </nav>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              {service.headline}
            </h1>
            <p className="font-display text-lg text-white/80 mb-8 max-w-2xl">
              {service.subheadline}
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

      {/* Description + Benefits */}
      <section className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-logo font-bold text-3xl mb-4" style={{ color: "var(--color-dark)" }}>
              About This Service
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {service.description}
            </p>
            {proofPhotos.length > 0 && (
              <div className={`mt-8 grid gap-6 ${proofPhotos.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {proofPhotos.map((photo) => (
                  <figure key={photo.src}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes={proofPhotos.length > 1 ? "(min-width: 768px) 22vw, 50vw" : "(min-width: 768px) 45vw, 100vw"}
                        className="object-cover"
                        style={{ objectPosition: photo.focus ?? "center" }}
                      />
                    </div>
                    {photo.caption && (
                      <figcaption className="text-sm text-gray-500 mt-3 leading-relaxed">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </div>
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="font-logo font-bold text-xl mb-5" style={{ color: "var(--color-dark)" }}>
              What&rsquo;s Included
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircleIcon size={18} className="flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
            {service.typicalCost && (
              <div className="mb-4 p-3 rounded-xl" style={{ background: "rgba(26,159,255,0.08)", border: "1px solid rgba(26,159,255,0.2)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-brand-blue)" }}>Typical Cost</p>
                <p className="text-sm font-medium text-gray-800">{service.typicalCost}</p>
                <p className="text-xs text-gray-600 mt-0.5">Get an exact quote — call us or submit a request.</p>
              </div>
            )}
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(26,159,255,0.2)" }}>
              <p className="text-sm font-semibold text-gray-800 mb-1">Ready to book?</p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 font-bold text-sm"
                style={{ color: "var(--color-brand-blue)" }}
              >
                <PhoneCallIcon size={14} />
                {PHONE} — available 24/7
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guide sections, on services that have them */}
      {service.sections && service.sections.length > 0 && (
        <section className="section-container pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto space-y-12">
            {service.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-logo font-bold text-2xl md:text-3xl mb-3" style={{ color: "var(--color-dark)" }}>
                  {section.heading}
                </h2>
                {section.intro && (
                  <p className="text-gray-600 leading-relaxed text-base mb-5">{section.intro}</p>
                )}
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.title} className="rounded-2xl p-5 border border-gray-100 bg-white shadow-sm">
                      <h3 className="font-logo font-bold text-base mb-1" style={{ color: "var(--color-dark)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recent jobs, from the owner's own photos and notes */}
      <JobStories heading={`Recent ${service.label} Jobs`} stories={storiesForService(slug)} show="suburb" />

      {/* Suburb pages, on the blocked drains service only */}
      {suburbLinks && suburbLinks.items.length > 0 && (
        <section style={{ background: "var(--color-grey-100)" }} className="py-16 md:py-20">
          <div className="section-container">
            <div className="text-center mb-10">
              <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
                By Suburb
              </p>
              <h2 className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
                {service.label} Near You
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
                {`What matters in Newtown is not what matters in Castle Hill. These pages cover what is specific to each area.`}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
              {suburbLinks.items.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/${suburbLinks.prefix}/${sub.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-white border no-underline transition-colors hover:bg-blue-50"
                  style={{ borderColor: "rgba(26,159,255,0.45)", color: "var(--color-brand-blue)" }}
                >
                  {sub.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section style={{ background: "var(--color-grey-100)" }} className="py-16 md:py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
              How It Works
            </p>
            <h2 className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
              Our Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 shadow-sm">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4"
                  style={{ background: "var(--color-brand-blue)" }}
                >
                  {step.step}
                </div>
                <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      {service.related && service.related.length > 0 && (
        <section className="section-container pt-16 md:pt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-logo font-bold text-2xl mb-5" style={{ color: "var(--color-dark)" }}>
              Related Pages
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card p-5 flex flex-col group no-underline"
                >
                  <span className="font-logo font-bold text-base mb-1" style={{ color: "var(--color-brand-blue)" }}>
                    {link.label} &rarr;
                  </span>
                  <span className="text-sm text-gray-600 leading-relaxed">{link.desc}</span>
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
            {service.faqs.map((faq) => (
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
      <ReviewStrip tag={reviewTagForService(service.slug)} />

      {/* Enquiry form */}
      <section className="section-container py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <QuoteForm
            source={service.label}
            heading={`Get a Quote for ${service.label}`}
            blurb="Prefer not to call? Send a few details and we&rsquo;ll come back to you with an upfront fixed price."
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-brand-blue)" }} className="py-16">
        <div className="section-container text-center">
          <h2 className="font-logo font-extrabold text-white text-3xl md:text-4xl mb-3">
            Ready to Book?
          </h2>
          <p className="text-white mb-8 font-display">
            Call now for fast, reliable service — $0 call-out fee, available 24/7.
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
