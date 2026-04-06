import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import SocialProof from "@/components/home/SocialProof";
import ServiceAreas from "@/components/home/ServiceAreas";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Mr. Clog | Sydney's #1 Plumber | (02) 9139 8945 | 24/7 Emergency",
  description:
    "Sydney's trusted plumbers. 5-star rated, available 24/7, $0 call-out fee. Blocked drains, emergency plumbing, hot water & more. Call (02) 9139 8945 now.",
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
      <FinalCTA />
    </>
  );
}
