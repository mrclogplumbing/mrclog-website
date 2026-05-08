interface FaqItem { q: string; a: string; }

interface BlogPostSchemaProps {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO format
  dateModified?: string; // ISO format
  faqs?: FaqItem[];
  image?: string;
}

const BASE_URL = "https://www.mrclog.com.au";
const DEFAULT_IMAGE = "https://www.mrclog.com.au/og-default.png";

export default function BlogPostSchema({
  slug,
  title,
  description,
  datePublished,
  dateModified,
  faqs,
  image,
}: BlogPostSchemaProps) {
  const url = `${BASE_URL}/blog/${slug}`;
  const imgUrl = image || DEFAULT_IMAGE;
  const modified = dateModified || datePublished;

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imgUrl,
    "datePublished": datePublished,
    "dateModified": modified,
    "author": {
      "@type": "Organization",
      "name": "Mr. Clog Plumbing",
      "url": BASE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mr. Clog Plumbing",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
      { "@type": "ListItem", "position": 3, "name": title, "item": url },
    ],
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
