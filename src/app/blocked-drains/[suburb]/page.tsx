import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import ServiceSuburbPage from "@/components/ServiceSuburbPage";
import { blockedDrainAreas, getBlockedDrainArea } from "@/lib/blocked-drain-areas";
import { getPipeReliningArea } from "@/lib/pipe-relining-areas";
import { suburbForArea } from "@/lib/service-areas";

const BASE = "https://www.mrclog.com.au";

export async function generateStaticParams() {
  return blockedDrainAreas.map((a) => ({ suburb: a.suburb }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const area = getBlockedDrainArea(suburb);
  const place = area && suburbForArea(area);
  if (!area || !place) return {};
  return {
    alternates: { canonical: `/blocked-drains/${suburb}` },
    title: pageTitle(`Blocked Drains ${place.label} | Same-Day Drain Clearing`),
    description: `Blocked drain in ${place.label}? Cleared with CCTV inspection and high-pressure jetting. $0 call-out fee, any hour. Call (02) 9139 8945.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const area = getBlockedDrainArea(suburb);
  const place = area && suburbForArea(area);
  if (!area || !place) notFound();

  const hasRelining = Boolean(getPipeReliningArea(suburb));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: area.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Blocked Drains", item: `${BASE}/services/blocked-drains` },
                  { "@type": "ListItem", position: 2, name: place.label, item: `${BASE}/blocked-drains/${suburb}` },
                ],
              },
            ],
          }),
        }}
      />
      <ServiceSuburbPage
        serviceSlug="blocked-drains"
        serviceLabel="Blocked Drains"
        causesHeading={`Why Drains Block in ${place.label}`}
        subheadline={`Same-day drain clearing across ${place.label} — camera inspection, high-pressure jetting, and a fixed price before we start.`}
        reviewTag="Blocked Drains"
        area={area}
        place={place}
        related={
          hasRelining
            ? {
                href: `/pipe-relining/${suburb}`,
                label: `Pipe Relining ${place.label}`,
                blurb: `Drain blocking again and again in ${place.label}?`,
              }
            : undefined
        }
      />
    </>
  );
}
