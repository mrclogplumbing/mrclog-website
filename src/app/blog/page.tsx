import type { Metadata } from "next";
import Link from "next/link";

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
  },
  alternates: { canonical: "https://www.mrclog.com.au/blog" },
};

const posts = [
  {
    slug: "why-is-my-drain-blocked",
    title: "Why Is My Drain Blocked? The Most Common Causes in Australian Homes",
    excerpt: "A blocked drain is almost always caused by one of five things. Learn what's causing yours — and when to call a plumber.",
    date: "7 April 2026",
    category: "Blocked Drains",
    readTime: "6 min read",
    published: true,
  },
  {
    slug: "gas-leak-or-not",
    title: "Gas Leak or Not? How to Tell — and What to Do Immediately",
    excerpt: "If you smell gas indoors, treat it as a real leak until proven otherwise. Here's exactly what to do — and what not to do.",
    date: "10 April 2026",
    category: "Gas Safety",
    readTime: "5 min read",
    published: true,
  },
  {
    slug: "how-much-does-a-leaking-tap-cost",
    title: "How Much Does a Leaking Tap Actually Cost You? (The Numbers Might Surprise You)",
    excerpt: "A dripping tap might seem minor, but the water waste and hidden damage costs add up fast. Here's exactly what a leaking tap costs — and why you should fix it now.",
    date: "8 May 2026",
    category: "Taps & Toilets",
    readTime: "5 min read",
    published: true,
  },
  {
    slug: "what-to-do-in-a-plumbing-emergency",
    title: "What to Do in a Plumbing Emergency: A Step-by-Step Guide for Sydney Homeowners",
    excerpt: "Burst pipe? Flooding? Gas leak? Here's a clear, calm plan for the most common plumbing emergencies — so you know exactly what to do before a plumber arrives.",
    date: "8 May 2026",
    category: "Emergency Plumbing",
    readTime: "7 min read",
    published: true,
  },
  {
    slug: "how-to-choose-a-plumber-in-sydney",
    title: "How to Choose a Plumber in Sydney (Without Getting Ripped Off)",
    excerpt: "Choosing the wrong plumber can cost you hundreds. Here's exactly what to check before you hire — licence, insurance, pricing, and the red flags to avoid.",
    date: "8 May 2026",
    category: "Plumbing Advice",
    readTime: "6 min read",
    published: true,
  },
  {
    slug: "signs-your-hot-water-system-is-failing",
    title: "7 Signs Your Hot Water System Is About to Fail",
    excerpt: "Don't get caught with a cold shower. These 7 warning signs mean your hot water system is struggling — and what to do before it fails completely.",
    date: "8 May 2026",
    category: "Hot Water",
    readTime: "5 min read",
    published: true,
  },
  {
    slug: "how-to-prevent-blocked-drains",
    title: "How to Prevent Blocked Drains: A Room-by-Room Guide",
    excerpt: "Most blocked drains are 100% preventable. Here's exactly what to do in each room of your home to keep your drains clear and avoid expensive callouts.",
    date: "8 May 2026",
    category: "Blocked Drains",
    readTime: "5 min read",
    published: true,
  },
];

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
