"use client";

import { useState, useMemo } from "react";

type Review = {
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

const FILTERS = [
  "All",
  "Emergency",
  "Blocked Drains",
  "Hot Water",
  "Bathroom",
  "Leak Detection",
  "General",
] as const;

type Filter = (typeof FILTERS)[number];

export default function ReviewsList({ reviews }: { reviews: Review[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return reviews;
    return reviews.filter((r) => r.tag === filter);
  }, [filter, reviews]);

  return (
    <section className="section-container py-12 md:py-16">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          Recent Reviews
        </h2>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter reviews by service">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={
                  "px-3.5 py-1.5 rounded-full text-sm border transition-colors " +
                  (active
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400")
                }
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((r, i) => (
          <article
            key={r.name + i}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: "var(--color-brand-blue, #1A9FFF)" }}
                  aria-hidden="true"
                >
                  {r.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-500">Verified Google review</div>
                </div>
              </div>
              <div className="text-yellow-500 text-base tracking-wider" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
            </div>

            <p className="text-gray-800 text-[15px] leading-relaxed">
              &quot;<span dangerouslySetInnerHTML={{ __html: r.text }} />&quot;
            </p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
              <span
                className="inline-block text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(26,159,255,0.10)",
                  color: "var(--color-brand-blue, #1A9FFF)",
                }}
              >
                {r.tag}
              </span>
              <span className="text-xs text-gray-500">{r.when}</span>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No reviews in this category yet — check back soon.
        </p>
      )}
    </section>
  );
}
