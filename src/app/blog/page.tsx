import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Plumbing Tips & Advice | Mr. Clog Blog | Sydney",
  description:
    "Plumbing tips, how-to guides, and advice from Sydney's trusted plumbers. Read the Mr. Clog blog for expert insights on blocked drains, hot water, and more.",
  openGraph: {
    type: "website",
    title: "Plumbing Tips & Advice | Mr. Clog Blog | Sydney",
    description: "Plumbing tips, how-to guides, and advice from Sydney's trusted plumbers. Read the Mr. Clog blog for expert insights on blocked drains, hot water, and more.",
    url: "https://www.mrclog.com.au/blog",
    siteName: "Mr. Clog Plumbing",
    locale: "en_AU",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Mr. Clog Plumbing" }],
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog" },
};


export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Mr. Clog Blog",
            "description": "Plumbing tips, how-to guides, and advice from Sydney's trusted plumbers.",
            "url": "https://www.mrclog.com.au/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Mr. Clog Plumbing",
              "url": "https://www.mrclog.com.au",
            },
            "blogPost": posts.map((p) => ({
              "@type": "BlogPosting",
              "headline": p.title,
              "description": p.excerpt,
              "url": `https://www.mrclog.com.au/blog/${p.slug}`,
              "datePublished": p.date,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mrclog.com.au" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mrclog.com.au/blog" },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[35vh]"
        style={{ background: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative section-container py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-blue)" }}>
              Expert Advice
            </p>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              Plumbing Tips & Advice
            </h1>
            <p className="font-display text-lg text-white/80">
              Practical guides from Sydney&rsquo;s trusted plumbers.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-container py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              {/* Colour bar */}
              <div className="h-1.5 w-full" style={{ background: "var(--color-brand-blue)" }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "var(--color-brand-blue-light)", color: "var(--color-brand-blue)" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="font-logo font-bold text-lg mb-2 leading-snug" style={{ color: "var(--color-dark)" }}>
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  {post.published ? (
                    <Link href={`/blog/${post.slug}`} className="text-sm font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                      Read article →
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-gray-400">Coming soon →</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-10">
          More articles coming soon. Have a plumbing question?{" "}
          <Link href="/contact" className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>
            Ask us directly.
          </Link>
        </p>
      </section>
    </>
  );
}
