import Link from "next/link";
import { reviewsForTag, type ReviewTag } from "@/lib/reviews";
import { reviewSummary, reviewCountLabel } from "@/lib/reviews-summary";

function StarIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/**
 * Three reviews plus the headline rating, for service and location pages.
 *
 * Social proof belongs where the decision is made. Someone searching for a
 * blocked drain lands on the service page, not the reviews page.
 */
export default function ReviewStrip({ tag = "General" }: { tag?: ReviewTag }) {
  const shown = reviewsForTag(tag, 3);

  return (
    <section style={{ background: "var(--color-grey-100)" }} className="py-14 md:py-16">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <div>
            <h2 className="font-logo font-bold text-2xl md:text-3xl" style={{ color: "var(--color-dark)" }}>
              What Sydney Customers Say
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
              </span>
              <span className="font-logo font-bold text-sm" style={{ color: "var(--color-dark)" }}>
                {reviewSummary.ratingValue}
              </span>
              <span className="text-sm text-gray-600">from {reviewCountLabel}</span>
            </div>
          </div>
          <a
            href={reviewSummary.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold self-start sm:self-auto hover:underline"
            style={{ color: "var(--color-brand-blue)" }}
          >
            Read them on Google &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {shown.map((r) => (
            <figure key={r.name + r.when} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={13} />)}
              </div>
              <blockquote className="text-sm text-gray-700 leading-relaxed flex-1">
                {r.text.length > 210 ? `${r.text.slice(0, 210).trimEnd()}…` : r.text}
              </blockquote>
              <figcaption className="flex items-center gap-2.5 mt-4 pt-4 border-t border-gray-100">
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white"
                  style={{ background: "var(--color-brand-blue)" }}
                  aria-hidden="true"
                >
                  {r.initial}
                </span>
                <span className="text-sm">
                  <span className="font-semibold" style={{ color: "var(--color-dark)" }}>{r.name}</span>
                  <span className="block text-xs text-gray-500">{r.when}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-7">
          <Link href="/reviews" className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>
            See all reviews
          </Link>
        </p>
      </div>
    </section>
  );
}
