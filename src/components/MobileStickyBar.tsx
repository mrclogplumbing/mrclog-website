"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

const PHONE_HREF = "tel:+61291398945";

type AnalyticsType = "call" | "quote";

function track(type: AnalyticsType) {
  try {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: Array<Record<string, unknown>>;
    };
    if (typeof w.gtag === "function") {
      w.gtag("event", "sticky_mobile_cta", {
        event_category: "engagement",
        event_label: type,
      });
    }
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "sticky_mobile_cta",
      cta_type: type,
      cta_location: "sticky_bottom_bar",
    });
  } catch {
    /* never block the click */
  }
}

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Reveal the bar once the hero is mostly out of view
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hero = document.querySelector('section[aria-label="Hero"]');
    if (!hero || !("IntersectionObserver" in window)) {
      setVisible(true);
      document.body.classList.add("mc-bar-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const show = !e.isIntersecting;
          setVisible(show);
          document.body.classList.toggle("mc-bar-visible", show);
        });
      },
      { threshold: 0, rootMargin: "-20% 0px 0px 0px" }
    );
    io.observe(hero);
    return () => {
      io.disconnect();
      document.body.classList.remove("mc-bar-visible");
    };
  }, []);

  // Close sheet on Escape
  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSheetOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sheetOpen]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      problem: String(fd.get("problem") || "").trim(),
    };
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Sorry, something went wrong. Please call us instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div
        ref={barRef}
        id="mc-mobile-bar"
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 flex shadow-2xl transition-transform transition-opacity duration-300 ease-out ${
          visible ? "" : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-hidden={visible ? "false" : "true"}
      >
        <a
          href={PHONE_HREF}
          onClick={() => track("call")}
          data-analytics="mobile-sticky-call"
          aria-label="Call Mr. Clog Plumbing on (02) 9139 8945"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-display font-bold text-base"
          style={{ background: "var(--color-brand-blue)" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Now
        </a>
        <button
          type="button"
          onClick={() => {
            track("quote");
            setSubmitted(false);
            setError(null);
            setSheetOpen(true);
          }}
          data-analytics="mobile-sticky-quote"
          aria-label="Open free quote form"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-display font-bold text-base text-white border-l border-white/20"
          style={{ background: "var(--color-dark)" }}
        >
          Free Quote
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        id="mc-quote-sheet"
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-200 ${
          sheetOpen ? "" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={sheetOpen ? "false" : "true"}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mc-sheet-title"
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,.55)" }}
          onClick={() => setSheetOpen(false)}
        />
        <div
          className={`absolute inset-x-0 bottom-0 bg-white rounded-t-2xl p-5 shadow-2xl transition-transform duration-300 ${
            sheetOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 20px)" }}
        >
          <div className="mx-auto w-12 h-1.5 rounded-full bg-gray-300 mb-4" />
          {submitted ? (
            <div className="text-center py-6">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                Thanks — we&apos;ll be in touch.
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                We typically respond within 30 minutes.
              </p>
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                className="w-full py-3 rounded-lg text-white font-display font-bold text-base"
                style={{ background: "var(--color-brand-blue)" }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3
                id="mc-sheet-title"
                className="font-display font-bold text-xl text-gray-900 mb-1"
              >
                Get a Free Quote
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                We typically respond within 30 minutes.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  required
                  name="problem"
                  rows={3}
                  placeholder="What's the issue?"
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg text-white font-display font-bold text-base disabled:opacity-60"
                  style={{ background: "var(--color-brand-blue)" }}
                >
                  {submitting ? "Sending…" : "Request Quote →"}
                </button>
                <button
                  type="button"
                  onClick={() => setSheetOpen(false)}
                  className="w-full py-2 text-sm text-gray-500"
                >
                  Cancel
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
