import type { Metadata } from "next";
import ReviewsList from "./ReviewsList";
import { reviewSummary, reviewCountLabel } from "@/lib/reviews-summary";

export const metadata: Metadata = {
  title: "Customer Reviews | Mr. Clog Plumbing Sydney",
  description:
    "Real Google reviews for Mr. Clog Plumbing. Sydney homeowners share their experience with our emergency plumbing, blocked drains, hot water, and bathroom renovation work.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Customer Reviews | Mr. Clog Plumbing Sydney",
    description:
      "Read what Sydney customers say about Mr. Clog Plumbing on Google. 5.0 stars across 18+ reviews.",
    url: "https://www.mrclog.com.au/reviews",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";
const REVIEW_URL = "https://g.page/r/mrclog/review";
const GOOGLE_REVIEWS_URL = "https://g.page/r/mrclog";

export type Review = {
  name: string;
  initial: string;
  when: string;
  tag:
    | "Emergency"
    | "Blocked Drains"
    | "Hot Water"
    | "Bathroom"
    | "Gas"
    | "Leak Detection"
    | "General";
  text: string;
};

const reviews: Review[] = [
  {
    name: "Samantha M.",
    initial: "S",
    when: "4 days ago",
    tag: "General",
    text:
      "Absolute legend. Turned up on time, sorted the problem quickly and didn&apos;t charge a fortune. Super easy to deal with and cleaned up after the job too. Will definitely be using him again and would happily recommend to anyone needing a good plumber.",
  },
  {
    name: "Stephano A.",
    initial: "S",
    when: "1 week ago",
    tag: "General",
    text:
      "Excellent service from start to finish. Chris was professional, knowledgeable, and took the time to explain everything clearly before starting the job. He worked efficiently, kept the area clean, and made sure everything was done correctly. You can tell he takes pride in his work.",
  },
  {
    name: "Danny D.",
    initial: "D",
    when: "1 week ago",
    tag: "General",
    text:
      "Turned up on time and honest service, couldn&apos;t ask for much more.",
  },
  {
    name: "Daniel M.",
    initial: "D",
    when: "1 month ago",
    tag: "General",
    text:
      "Amazing customer service. Affordable. Jorge was an amazing tech! Highly recommend!",
  },
  {
    name: "Christ Angel S.",
    initial: "C",
    when: "2 months ago",
    tag: "General",
    text:
      "Mr. Jorge was so fast and so efficient. He did a clean job and was so nice.",
  },
  {
    name: "Chris M.",
    initial: "C",
    when: "a year ago",
    tag: "Emergency",
    text:
      "The team at Mr Clog were an absolute pleasure to deal with. I had my hot water tank burst at 4am and called them to assist with this issue and they were very prompt in coming out by 5am and having this issue rectified. Would use again and recommend highly.",
  },
  {
    name: "Joseph C.",
    initial: "J",
    when: "a year ago",
    tag: "Blocked Drains",
    text:
      "Matt and Anthony from Mr Clog have to be the best plumbing company in Sydney. I called for a blocked drain. I was left impressed by the quality of service I received. They arrived on time, guided me through every step and took care of the problem.",
  },
  {
    name: "Andrew B.",
    initial: "A",
    when: "a year ago",
    tag: "Blocked Drains",
    text:
      "Had the team from Mr Clog come to check out a problem I had with my sewer. They were able to rectify the problem and get it sorted out straight away at a very reasonable price. Will definitely be using the team again. Thanks Mr Clog!",
  },
  {
    name: "Braeden C.",
    initial: "B",
    when: "a year ago",
    tag: "Blocked Drains",
    text:
      "Anthony and Matthew are top blokes! Had them out to unblock our sewer. They came out on time, were extremely tidy and were a pleasure to deal with.",
  },
  {
    name: "Elias K.",
    initial: "E",
    when: "a year ago",
    tag: "Hot Water",
    text:
      "Had trouble with our hot water system for weeks and was unable to figure out the issue. Matt and Anthony came out the same day I enquired and the issue was resolved within an hour. Couldn&apos;t recommend enough!",
  },
  {
    name: "Valerie",
    initial: "V",
    when: "a year ago",
    tag: "Hot Water",
    text:
      "I would highly recommend Anthony and Matthew from Mr Clog plumbing. They were easy and trustworthy to deal with and fixed my leaking hot water system in no time.",
  },
  {
    name: "Jason",
    initial: "J",
    when: "a year ago",
    tag: "Leak Detection",
    text:
      "Just want to thank the team from Mr Clog for coming out today for an emergency water leak under my house. They were quick, reliable and fair priced. Thanks guys.",
  },
  {
    name: "Vania T.",
    initial: "V",
    when: "a year ago",
    tag: "Bathroom",
    text:
      "I want to acknowledge the high level of plumbing service I received. It was outstanding, and the bathroom-ware was exactly what I was looking for. I was so pleased with Matt from Mr Clog and the team. They went above and beyond to help me.",
  },
  {
    name: "Michael G.",
    initial: "M",
    when: "a year ago",
    tag: "Bathroom",
    text:
      "Excellent service and attention to detail. Matt was a pleasure to deal with throughout the whole process of upgrading our apartment.",
  },
  {
    name: "Isabelle B.",
    initial: "I",
    when: "a year ago",
    tag: "Blocked Drains",
    text:
      "Matt was fantastic in his work resolving ongoing drainage issues and providing practical solutions in a professional and friendly manner. Would definitely engage Mr Clog services for future plumbing needs.",
  },
  {
    name: "Simon D.",
    initial: "S",
    when: "a year ago",
    tag: "General",
    text:
      "Matt from Mr Clog was on time, professional, knowledgeable and lovely to interact with. Happy demeanour. Thoroughly looked at the issue to determine the best way to deal with it. A pleasure to deal with him and his company.",
  },
  {
    name: "Sydney W.",
    initial: "S",
    when: "a year ago",
    tag: "Emergency",
    text:
      "Just want to thank the team at Mr Clog. I urgently needed my toilet unclogged. Matt and Anthony came on the day and thankfully unclogged my toilet! Thanks once again.",
  },
  {
    name: "Matthew G.",
    initial: "M",
    when: "a year ago",
    tag: "General",
    text:
      "I&apos;ve used Matt and Anthony on multiple plumbing jobs at our house and can&apos;t speak highly enough of them. They walk through all the options and explain pros/cons to let you make a decision and always at a reasonable price. Will definitely use them again for my next plumbing work.",
  },
];

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
          <span>⏱ <strong>30 min</strong> avg response</span>
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
