"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "mrclog_promo_dismissed_hhc";
const OFFER_HREF = "/offers/household-plumbing-health-check";

export default function PromoBanner() {
  const pathname = usePathname();

  // Don't show the banner on the offer page itself.
  const onOfferPage = pathname?.startsWith("/offers/household-plumbing-health-check");

  useEffect(() => {
    const root = document.documentElement;
    if (onOfferPage) {
      root.classList.remove("has-promo");
      return;
    }
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") {
        root.classList.add("has-promo");
      }
    } catch {
      /* ignore storage errors */
    }
  }, [onOfferPage]);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore storage errors */
    }
    document.documentElement.classList.remove("has-promo");
  }

  if (onOfferPage) return null;

  return (
    <div
      className="promo-banner fixed top-0 inset-x-0 z-[60] text-white"
      style={{ background: "linear-gradient(90deg, #0080E0 0%, #1A9FFF 100%)" }}
      role="region"
      aria-label="Current promotion"
    >
      <div className="section-container">
        <div className="flex items-center justify-center gap-3 h-10 text-center">
          <Link
            href={OFFER_HREF}
            className="group flex items-center gap-2 text-xs sm:text-sm font-medium no-underline text-white min-w-0"
          >
            <span aria-hidden="true">🏠</span>
            <span className="truncate">
              <strong className="font-bold">Household Plumbing Health Check</strong>
              <span className="hidden sm:inline">
                {" "}— 10-point inspection, $149.99 incl GST
              </span>
            </span>
            <span className="font-bold whitespace-nowrap underline underline-offset-2 group-hover:no-underline">
              Book&nbsp;→
            </span>
          </Link>
        </div>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss promotion"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-white/80 hover:text-white hover:bg-white/15 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
