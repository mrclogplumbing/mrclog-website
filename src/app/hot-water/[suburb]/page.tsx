import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServiceSuburbPage from "@/components/ServiceSuburbPage";
import { hotWaterAreas, getHotWaterArea } from "@/lib/hot-water-areas";
import { getBlockedDrainArea } from "@/lib/blocked-drain-areas";
import { suburbForArea } from "@/lib/service-areas";

const BASE = "https://www.mrclog.com.au";

export async function generateStaticParams() {
  return hotWaterAreas.map((a) => ({ suburb: a.suburb }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const area = getHotWaterArea(suburb);
  const place = area && suburbForArea(area);
  if (!area || !place) return {};
  return {
    alternates: { canonical: `/hot-water/${suburb}` },
    title: `Hot Water Systems ${place.label} | Repairs & Same-Day Replacement`,
    description: `No hot water in ${place.label}? Mr. Clog repairs and replaces hot water systems across ${place.label}, usually same day. $0 call-out fee, any hour. Call (02) 9139 8945.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const area = getHotWaterArea(suburb);
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
                  { "@type": "ListItem", position: 1, name: "Hot Water Systems", item: `${BASE}/services/hot-water-systems` },
                  { "@type": "ListItem", position: 2, name: place.label, item: `${BASE}/hot-water/${suburb}` },
                ],
              },
            ],
          }),
        }}
      />
      <ServiceSuburbPage
        serviceSlug="hot-water-systems"
        serviceLabel="Hot Water Systems"
        causesHeading={`Hot Water in ${place.label}`}
        subheadline={`Repairs and same-day replacement across ${place.label} — we carry common units and will tell you honestly whether yours is worth fixing.`}
        reviewTag="Hot Water"
        area={area}
        place={place}
        related={
          hasDrains
            ? {
                href: `/blocked-drains/${suburb}`,
                label: `Blocked Drains ${place.label}`,
                blurb: `Blocked drain in ${place.label} too?`,
              }
            : undefined
        }
      />
    </>
  );
}
