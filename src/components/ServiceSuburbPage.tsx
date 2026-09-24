import Link from "next/link";
import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import ReviewStrip from "@/components/ReviewStrip";
import type { ServiceArea } from "@/lib/service-areas";
import type { Location } from "@/lib/locations";
import { getService } from "@/lib/services";
import { photosForService } from "@/lib/service-photos";
import { calloutFee } from "@/lib/offer-terms";
import { PhoneCallIcon } from "@/components/ui/ServiceIcons";
import type { ReviewTag } from "@/lib/reviews";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

export interface ServiceSuburbPageProps {
  /** The service slug, e.g. "blocked-drains". Drives photos, process and cost. */
  serviceSlug: string;
  /** Display name, e.g. "Blocked Drains". Used in headings and breadcrumbs. */
  serviceLabel: string;
  /** Heading above the suburb-specific points. */
  causesHeading: string;
  /** Sentence under the H1. */
  subheadline: string;
  /** Which reviews to show. */
  reviewTag: ReviewTag;
  area: ServiceArea;
  place: Location;
  /** Optional cross-link to the same suburb under another service. */
  related?: { href: string; label: string; blurb: string };
}

export default function ServiceSuburbPage({
  serviceSlug,
  serviceLabel,
  causesHeading,
  subheadline,
  reviewTag,
  area,
  place,
  related,
}: ServiceSuburbPageProps) {
  const service = getService(serviceSlug);
  const { hero: heroPhoto, proof: proofPhotos = [] } = photosForService(serviceSlug);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 flex items-center min-h-[50vh]" style={{ background: "var(--color-dark)" }}>
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
            <p className="font-display text-sm mb-3">
              <Link href={`/services/${serviceSlug}`} className="text-white/70 hover:text-white no-underline">
                {serviceLabel}
              </Link>
              <span className="text-white/40"> / {place.label}</span>
            </p>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              {serviceLabel} {place.label}
            </h1>
            <p className="font-display text-lg text-white/80 mb-8 max-w-2xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={PHONE_HREF} data-call-cta className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base">
                <PhoneCallIcon size={18} />
                Call {PHONE}
              </a>
              <Link href="/contact" className="btn-ghost-white px-8 py-4 text-base text-center">
                Get a Free Quote →
              </Link>
            </div>
            <p className="text-sm mt-5" style={{ color: "rgba(255,255,255,0.55)" }}>
              {calloutFee.line} · Available 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Why drains block here */}
      <section className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-logo font-bold text-3xl mb-4" style={{ color: "var(--color-dark)" }}>
              {causesHeading}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-8">{area.intro}</p>

            {proofPhotos.length > 0 && (
              <div className={`grid gap-6 ${proofPhotos.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {proofPhotos.map((photo) => (
                  <figure key={photo.src}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 22vw, 50vw"
                        className="object-cover"
                        style={{ objectPosition: photo.focus ?? "center" }}
                      />
                    </div>
                    {photo.caption && (
                      <figcaption className="text-sm text-gray-500 mt-3 leading-relaxed">{photo.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            {area.causes.map((cause) => (
              <div key={cause.title} className="rounded-2xl p-6 bg-blue-50">
                <h3 className="font-logo font-bold text-lg mb-2" style={{ color: "var(--color-dark)" }}>
                  {cause.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{cause.body}</p>
              </div>
            ))}
            {service?.typicalCost && (
              <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(26,159,255,0.25)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-brand-blue)" }}>
                  Typical Cost
                </p>
                <p className="text-sm font-medium text-gray-800">{service.typicalCost}</p>
                <a href={PHONE_HREF} data-call-cta className="inline-flex items-center gap-2 font-bold text-sm mt-3" style={{ color: "var(--color-brand-blue)" }}>
                  <PhoneCallIcon size={14} />
                  {PHONE}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      {service && (
        <section style={{ background: "var(--color-grey-100)" }} className="py-16 md:py-20">
          <div className="section-container">
            <div className="text-center mb-12">
              <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
                How It Works
              </p>
              <h2 className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
                {`How It Works in ${place.label}`}
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
      )}

      {/* FAQs */}
      <section className="section-container py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
              Common Questions
            </p>
            <h2 className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
              {`${serviceLabel} in ${place.label}`}
            </h2>
          </div>
          <div className="space-y-4">
            {area.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl p-6 border border-gray-100 bg-white shadow-sm">
                <h3 className="font-logo font-bold text-base mb-2" style={{ color: "var(--color-dark)" }}>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/*
            Two links out: the related service in this same suburb where one
            exists, and always the suburb page itself. Both matter — a drains
            page and a relining page for the same street are answering the
            same customer at different stages.
          */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {related && (
              <div className="rounded-2xl p-6 bg-blue-50">
                <p className="font-semibold text-sm" style={{ color: "var(--color-dark)" }}>
                  {related.blurb}
                </p>
                <Link href={related.href} className="inline-block mt-3 font-semibold text-sm no-underline" style={{ color: "var(--color-brand-blue)" }}>
                  {related.label} &rarr;
                </Link>
              </div>
            )}
            <div className="rounded-2xl p-6 bg-blue-50">
              <p className="font-semibold text-sm" style={{ color: "var(--color-dark)" }}>
                {`Need something else in ${place.label}?`}
              </p>
              <Link href={`/locations/${place.slug}`} className="inline-block mt-3 font-semibold text-sm no-underline" style={{ color: "var(--color-brand-blue)" }}>
                Plumber {place.label} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewStrip tag={reviewTag} />

      <section className="section-container py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <QuoteForm
            source={`${serviceLabel} ${place.label}`}
            heading={`Get a Quote — ${serviceLabel} ${place.label}`}
            blurb="Prefer not to call? Send a few details and we’ll come back to you with an upfront fixed price."
          />
        </div>
      </section>

      <section style={{ background: "var(--color-brand-blue)" }} className="py-16">
        <div className="section-container text-center">
          <h2 className="font-logo font-extrabold text-white text-3xl md:text-4xl mb-3">
            {`${serviceLabel} in ${place.label}?`}
          </h2>
          <p className="text-white mb-8 font-display">
            {calloutFee.line}. Available 24/7, 365 days a year.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              data-call-cta
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
