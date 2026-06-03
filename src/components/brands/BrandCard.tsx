"use client";

import { useState } from "react";

interface BrandCardProps {
  name: string;
  slug: string;
}

const EXTS = ["svg", "png", "webp"];

export default function BrandCard({ name, slug }: BrandCardProps) {
  const [extIndex, setExtIndex] = useState(0);
  const failed = extIndex >= EXTS.length;

  return (
    <div className="aspect-[5/3] bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-4">
      {failed ? (
        <span
          className="font-logo font-bold text-center leading-tight"
          style={{ color: "var(--color-dark)", fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)" }}
        >
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/brands/${slug}.${EXTS[extIndex]}`}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setExtIndex((i) => i + 1)}
          className="max-h-full max-w-full object-contain"
          style={{ maxHeight: "72px" }}
        />
      )}
    </div>
  );
}
