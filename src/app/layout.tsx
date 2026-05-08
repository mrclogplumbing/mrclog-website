import type { Metadata } from "next";
import { Inter, Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PHONE_HREF = "tel:+61291398945";
const PHONE = "(02) 9139 8945";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  title: {
    default: "Mr. Clog | Sydney's #1 Plumber | (02) 9139 8945 | 24/7 Emergency",
    template: "%s | Mr. Clog Plumbing Sydney",
  },
  description:
    "Sydney's trusted plumbers. 5-star rated, available 24/7, $0 call-out fee. Blocked drains, emergency plumbing, hot water & more. Call (02) 9139 8945 now.",
  keywords: [
    "plumber Sydney",
    "emergency plumber Sydney",
    "blocked drain Sydney",
    "hot water system Sydney",
    "24/7 plumber",
    "Mr Clog",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://mrclog.com.au",
    siteName: "Mr. Clog Plumbing",
    title: "Mr. Clog | Sydney's #1 Plumber | 24/7 Emergency",
    description:
      "Sydney's trusted plumbers. 5-star rated, available 24/7, $0 call-out fee.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Clog | Sydney's #1 Plumber",
    description: "Sydney's trusted plumbers. 5-star rated, 24/7, $0 call-out fee.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${sora.variable} ${jakartaSans.variable}`}>
      <body className="font-body antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            "name": "Mr. Clog Plumbing",
            "url": "https://www.mrclog.com.au",
            "telephone": "+61291398945",
            "email": "info@mrclog.com.au",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sydney",
              "addressRegion": "NSW",
              "addressCountry": "AU"
            },
            "areaServed": {
              "@type": "City",
              "name": "Sydney"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "18",
              "bestRating": "5"
            },
            "description": "Sydney\'s trusted local plumbers. 5-star rated, available 24/7, $0 call-out fee. Blocked drains, emergency plumbing, hot water systems and more.",
            "image": "https://www.mrclog.com.au/favicon.svg",
            "sameAs": []
          })
        }}
      />

        <Header />
        <main>{children}</main>
        <Footer />
              {/* Sticky mobile call bar */}
        <a
          href={PHONE_HREF}
          className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center justify-center gap-3 py-4 text-white font-display font-bold text-base shadow-lg"
          style={{ background: "var(--color-brand-blue)" }}
          aria-label="Call Mr. Clog Plumbing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call {PHONE} — Available 24/7
        </a>
</body>
    </html>
  );
}
