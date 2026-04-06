import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import { PhoneCallIcon, CheckCircleIcon } from "@/components/ui/ServiceIcons";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

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
    title: service.metaTitle,
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

  return (
    <>
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
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue)" }}>
              Mr. Clog Plumbing
            </p>
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

      {/* CTA */}
      <section style={{ background: "var(--color-brand-blue)" }} className="py-16">
        <div className="section-container text-center">
          <h2 className="font-logo font-extrabold text-white text-3xl md:text-4xl mb-3">
            Ready to Book?
          </h2>
          <p className="text-white/80 mb-8 font-display">
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
