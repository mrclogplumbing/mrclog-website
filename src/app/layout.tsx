import type { Metadata } from "next";
import { Inter, Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
