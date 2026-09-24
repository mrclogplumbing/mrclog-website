import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import SocialProof from "@/components/home/SocialProof";
import ServiceAreas from "@/components/home/ServiceAreas";
import Guarantee from "@/components/Guarantee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FinalCTA from "@/components/home/FinalCTA";
import { reviewSummary } from "@/lib/reviews-summary";

export const metadata: Metadata = {
  title: { absolute: "Local Sydney Plumbers 24/7 | Mr. Clog | (02) 9139 8945" },
  description: `Local Sydney plumbers, ${reviewSummary.ratingValue}★ on Google from ${reviewSummary.reviewCount} reviews. 24/7, $0 call-out fee. Blocked drains, hot water & more. Call (02) 9139 8945.`,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AboutTeaser />
      <ServicesGrid />
      <SocialProof />
      <ServiceAreas />
      <WhyChooseUs />
      <Guarantee />
      <FinalCTA />
    </>
  );
}
