"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav aria-label="Table of contents" className="sticky top-24 hidden lg:block">
      <p className="font-logo font-bold text-xs uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue)" }}>
        Contents
      </p>
      <ul className="space-y-1">
        {items.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="block text-sm py-1 pl-3 border-l-2 transition-all duration-150"
              style={{
                borderColor: activeId === id ? "var(--color-brand-blue)" : "transparent",
                color: activeId === id ? "var(--color-brand-blue)" : "#6B7280",
                fontWeight: activeId === id ? 600 : 400,
              }}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
