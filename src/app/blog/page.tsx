import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumbing Tips & Advice | Mr. Clog Blog | Sydney",
  description:
    "Plumbing tips, how-to guides, and advice from Sydney's trusted plumbers. Read the Mr. Clog blog for expert insights on blocked drains, hot water, and more.",
};

const posts = [
  {
    slug: "signs-blocked-drain",
    title: "5 Warning Signs You Have a Blocked Drain",
    excerpt: "Caught early, a blocked drain is a quick fix. Left too long, it can cause serious damage. Here are the signs to watch for.",
    date: "March 2025",
    category: "Blocked Drains",
    readTime: "4 min read",
  },
  {
    slug: "hot-water-system-life",
    title: "How Long Should a Hot Water System Last?",
    excerpt: "Most hot water systems last 8–12 years. Learn how to tell if yours is on the way out — and when to repair vs replace.",
    date: "February 2025",
    category: "Hot Water",
    readTime: "5 min read",
  },
  {
    slug: "dripping-tap-cost",
    title: "How Much Does a Dripping Tap Really Cost?",
    excerpt: "A single dripping tap can waste up to 20,000 litres of water a year. Here's what that means for your water bill — and how to fix it.",
    date: "February 2025",
    category: "Taps & Toilets",
    readTime: "3 min read",
  },
  {
    slug: "pipe-relining-vs-replacement",
    title: "Pipe Relining vs Pipe Replacement: Which Is Right for You?",
    excerpt: "No-dig pipe relining is often faster and cheaper than excavation. But it's not right for every situation. We break down the decision.",
    date: "January 2025",
    category: "Pipe Relining",
    readTime: "6 min read",
  },
  {
    slug: "gas-leak-signs",
    title: "Gas Leak Warning Signs Every Homeowner Should Know",
    excerpt: "Gas leaks are dangerous — but they're often detectable before they become an emergency. Here's what to look (and smell) for.",
    date: "January 2025",
    category: "Gas Fitting",
    readTime: "4 min read",
  },
  {
    slug: "bathroom-reno-plumbing-tips",
    title: "Bathroom Renovation? Here's What Your Plumber Needs to Know",
    excerpt: "Getting the plumbing right early is critical to a smooth bathroom reno. Here's what to sort out before the tiles go in.",
    date: "December 2024",
    category: "Bathroom Renovations",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
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
                  <span className="text-sm font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                    Coming soon →
                  </span>
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
