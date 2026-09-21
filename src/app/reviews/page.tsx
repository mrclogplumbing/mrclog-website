import type { Metadata } from "next";
import { responseTimes } from "@/lib/response-times";
import { reviews } from "@/lib/reviews";
import ReviewsList from "./ReviewsList";
import { reviewSummary, reviewCountLabel } from "@/lib/reviews-summary";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Real Google reviews for Mr. Clog Plumbing. Sydney homeowners share their experience with our emergency plumbing, blocked drains, hot water, and bathroom renovation work.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Customer Reviews",
    description:
      `Read what Sydney customers say about Mr. Clog Plumbing on Google. ${reviewSummary.ratingValue} stars across ${reviewSummary.reviewCount} reviews.`,
    url: "https://www.mrclog.com.au/reviews",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";
const REVIEW_URL = reviewSummary.reviewUrl;
const GOOGLE_REVIEWS_URL = reviewSummary.profileUrl;

export default function ReviewsPage() {
  const schemaReviews = reviews.slice(0, 8).map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.text.replace(/&apos;/g, "'"),
    publisher: { "@type": "Organization", name: "Google" },
  }));

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Mr. Clog Plumbing",
    url: "https://www.mrclog.com.au/reviews",
    telephone: "+61291398945",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: { "@type": "City", name: "Sydney" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewSummary.ratingValue,
      reviewCount: String(reviewSummary.reviewCount),
      bestRating: "5",
    },
    review: schemaReviews,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      <section
        className="pt-24 pb-14"
        style={{
          background:
            "linear-gradient(135deg, #EAF6FF 0%, var(--color-cream, #FAF9F5) 100%)",
        }}
      >
        <div className="section-container text-center">
          <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3">
            Customer Reviews
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
            What Sydney Homeowners Say About Mr. Clog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Real reviews from real customers across Greater Sydney — burst pipes
            at midnight, blocked drains, hot water emergencies, bathroom
            renovations and everything in between.
          </p>

          <div className="inline-flex flex-col items-center bg-white border border-gray-200 rounded-2xl px-9 py-6 shadow-md mb-6">
            <div className="text-5xl font-extrabold text-gray-900 leading-none">{reviewSummary.ratingValue}</div>
            <div className="text-yellow-500 text-2xl tracking-widest mt-2 mb-1">★★★★★</div>
            <div className="text-sm text-gray-500">
              Based on <strong className="text-gray-800">{reviewCountLabel}</strong>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#4285F4" aria-hidden="true">
                <path d="M21.35 11.1H12v2.9h5.35c-.5 2.6-2.7 4-5.35 4-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.4 0 2.7.5 3.7 1.4l2.1-2.1C16.3 4.1 14.3 3.3 12 3.3 7.2 3.3 3.3 7.2 3.3 12s3.9 8.7 8.7 8.7c5 0 8.4-3.5 8.4-8.5 0-.4 0-.7-.05-1.1z" />
              </svg>
              Verified on Google Business
            </div>
            <a
              href={reviewSummary.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold mt-3 hover:underline"
              style={{ color: "var(--color-brand-blue)" }}
            >
              Read them on Google &rarr;
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3">
              ★ Leave us a Google Review
            </a>
            <a href={PHONE_HREF} className="btn-outline text-sm px-6 py-3" aria-label={`Call Mr. Clog Plumbing on ${PHONE}`}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <div className="bg-white border-y border-gray-200">
        <div className="section-container py-5 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-700">
          <span>✅ <strong>Licensed</strong> NSW 347993C</span>
          <span>⏱ <strong>{responseTimes.arrival}</strong> emergency response</span>
          <span>💵 <strong>$0</strong> call-out fee</span>
          <span>🛡 <strong>Fully insured</strong></span>
        </div>
      </div>

      <ReviewsList reviews={reviews} />

      <section className="bg-gray-900 text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "#fff" }}>
            Worked with us? We&apos;d love to hear from you.
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Leaving an honest Google review takes 30 seconds and helps other
            Sydney homeowners find a plumber they can trust.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3">
              ★ Leave a Review on Google
            </a>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-gray-600 text-white hover:bg-gray-800 transition-colors">
              See all reviews on Google →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
