import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import ServiceSuburbPage from "@/components/ServiceSuburbPage";
import { pipeReliningAreas, getPipeReliningArea } from "@/lib/pipe-relining-areas";
import { getBlockedDrainArea } from "@/lib/blocked-drain-areas";
import { suburbForArea } from "@/lib/service-areas";

const BASE = "https://www.mrclog.com.au";

export async function generateStaticParams() {
  return pipeReliningAreas.map((a) => ({ suburb: a.suburb }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const area = getPipeReliningArea(suburb);
  const place = area && suburbForArea(area);
  if (!area || !place) return {};
  return {
    alternates: { canonical: `/pipe-relining/${suburb}` },
    title: pageTitle(`Pipe Relining ${place.label} | No-Dig Drain Repair`),
    description: `Pipe relining in ${place.label}: fix a cracked or root-damaged drain without digging. CCTV inspection first, fixed price upfront. Call (02) 9139 8945.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const area = getPipeReliningArea(suburb);
  const place = area && suburbForArea(area);
  if (!area || !place) notFound();

  const hasDrains = Boolean(getBlockedDrainArea(suburb));

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
                  { "@type": "ListItem", position: 1, name: "Pipe Relining", item: `${BASE}/services/pipe-relining` },
                  { "@type": "ListItem", position: 2, name: place.label, item: `${BASE}/pipe-relining/${suburb}` },
                ],
              },
            ],
          }),
        }}
      />
      <ServiceSuburbPage
        serviceSlug="pipe-relining"
        serviceLabel="Pipe Relining"
        causesHeading={`Pipe Relining in ${place.label}`}
        subheadline={`Repair a cracked or root-damaged drain in ${place.label} without digging it up — inspected first, fixed price before we start.`}
        reviewTag="Blocked Drains"
        area={area}
        place={place}
        related={
          hasDrains
            ? {
                href: `/blocked-drains/${suburb}`,
                label: `Blocked Drains ${place.label}`,
                blurb: `Blocked right now in ${place.label}?`,
              }
            : undefined
        }
      />
    </>
  );
}
