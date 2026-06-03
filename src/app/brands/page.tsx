import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCallIcon, CheckCircleIcon } from "@/components/ui/ServiceIcons";
import BrandCard from "@/components/brands/BrandCard";

export const metadata: Metadata = {
  title: "Brands We Install & Our Trade Suppliers | Mr. Clog Plumbing Sydney",
  description:
    "Mr. Clog installs trusted plumbing brands like Rheem, Rinnai, Caroma, Bosch, Grohe, Kohler and more. See the full list of brands we install and the trade suppliers we use across Sydney.",
  openGraph: {
    type: "website",
    title: "Brands We Install & Our Trade Suppliers | Mr. Clog Plumbing Sydney",
    description: "Mr. Clog installs trusted plumbing brands like Rheem, Rinnai, Caroma, Bosch, Grohe, Kohler and more. See the full list of brands we install and the trade suppliers we use across Sydney.",
    url: "https://www.mrclog.com.au/brands",
    siteName: "Mr. Clog Plumbing",
    locale: "en_AU",
  },
  alternates: { canonical: "https://www.mrclog.com.au/brands" },
};

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

interface Brand {
  name: string;
  slug: string;
}

interface BrandCategory {
  id: string;
  title: string;
  description: string;
  brands: Brand[];
}

const categories: BrandCategory[] = [
  {
    id: "hot-water",
    title: "Hot Water Systems",
    description: "Storage, continuous flow, gas, electric, solar, and heat pump systems.",
    brands: [
      { name: "Rheem", slug: "rheem" },
      { name: "Rinnai", slug: "rinnai" },
      { name: "Bosch", slug: "bosch" },
      { name: "Thermann", slug: "thermann" },
      { name: "Dux", slug: "dux" },
      { name: "Vulcan", slug: "vulcan" },
      { name: "Aquamax", slug: "aquamax" },
      { name: "Stiebel Eltron", slug: "stiebel-eltron" },
    ],
  },
  {
    id: "tapware-bathroom",
    title: "Tapware & Bathroom",
    description: "Taps, mixers, showers, toilets, basins, and sinks for kitchens and bathrooms.",
    brands: [
      { name: "Caroma", slug: "caroma" },
      { name: "Grohe", slug: "grohe" },
      { name: "Kohler", slug: "kohler" },
      { name: "Fowler", slug: "fowler" },
      { name: "Posh", slug: "posh" },
      { name: "Abey", slug: "abey" },
      { name: "Blanco", slug: "blanco" },
    ],
  },
  {
    id: "pipes-fittings",
    title: "Pipes & Fittings",
    description: "Copper, PVC, PEX, and pressure pipework for water, drainage, and stormwater.",
    brands: [
      { name: "Kembla", slug: "kembla" },
      { name: "Vinidex", slug: "vinidex" },
      { name: "Iplex", slug: "iplex" },
      { name: "Plastec", slug: "plastec" },
    ],
  },
  {
    id: "pumps",
    title: "Pumps & Pressure Systems",
    description: "Domestic pressure pumps, submersible pumps, and circulators.",
    brands: [
      { name: "Grundfos", slug: "grundfos" },
      { name: "Bianco Pumpz", slug: "bianco-pumps" },
    ],
  },
  {
    id: "filtration",
    title: "Water Filtration",
    description: "Whole-of-house, under-sink, and commercial water filtration.",
    brands: [
      { name: "Puretec", slug: "puretec" },
      { name: "Enware", slug: "enware" },
    ],
  },
  {
    id: "gas-valves-specialty",
    title: "Gas, Valves & Specialty",
    description: "Gas fittings, isolation and tempering valves, cistern parts, sealants, and tools.",
    brands: [
      { name: "Bromic", slug: "bromic" },
      { name: "Zetco", slug: "zetco" },
      { name: "Fluidmaster", slug: "fluidmaster" },
      { name: "Holman", slug: "holman" },
      { name: "Soudal", slug: "soudal" },
      { name: "Ridgid", slug: "ridgid" },
    ],
  },
];

const suppliers: Brand[] = [
  { name: "Reece", slug: "reece" },
];

const totalBrands = categories.reduce((sum, c) => sum + c.brands.length, 0);

export default function BrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mrclog.com.au" },
              { "@type": "ListItem", "position": 2, "name": "Brands", "item": "https://www.mrclog.com.au/brands" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative pt-16 flex items-center min-h-[40vh]"
        style={{ background: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,31,46,0.97) 0%, rgba(26,159,255,0.15) 100%)" }}
          aria-hidden="true"
        />
        <div className="relative section-container py-14 md:py-20">
          <div className="max-w-3xl">
            <p
              className="font-display text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: "var(--color-brand-blue)" }}
            >
              Quality You Can Trust
            </p>
            <h1
              className="font-logo font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
            >
              Brands We Install & Suppliers We Use
            </h1>
            <p className="font-display text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
              We only install plumbing products from manufacturers we trust — backed by genuine warranties and proven across thousands of Sydney homes.
            </p>
          </div>
        </div>
      </section>

      {/* Intro / Why these brands */}
      <section className="section-container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Genuine Manufacturer Warranties",
                desc: "Installed by a licensed plumber so your warranty stays valid — no grey-market or look-alike parts.",
              },
              {
                title: `${totalBrands}+ Trusted Brands`,
                desc: "From hot water to tapware, fittings, pumps and filtration — we stock and install only proven products.",
              },
              {
                title: "Trade Supplier Accounts",
                desc: "Established accounts with Australia's largest plumbing wholesaler so parts arrive fast and authentic.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-5 border border-gray-100 bg-white shadow-sm">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircleIcon size={18} />
                  <p className="font-logo font-bold text-base leading-snug" style={{ color: "var(--color-dark)" }}>
                    {item.title}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="section-container pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto space-y-14">
          {categories.map((category) => (
            <div key={category.id} id={category.id}>
              <div className="mb-6 max-w-2xl">
                <h2
                  className="font-logo font-bold text-2xl md:text-3xl mb-2"
                  style={{ color: "var(--color-dark)" }}
                >
                  {category.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">{category.description}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.brands.map((brand) => (
                  <BrandCard key={brand.slug} name={brand.name} slug={brand.slug} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suppliers */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-brand-blue-light)" }}>
        <div className="section-container max-w-6xl mx-auto">
          <div className="mb-8 max-w-2xl">
            <p
              className="font-display text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "var(--color-brand-blue)" }}
            >
              Our Trade Suppliers
            </p>
            <h2
              className="font-logo font-bold text-2xl md:text-3xl mb-3"
              style={{ color: "var(--color-dark)" }}
            >
              Where We Source Our Parts
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              We hold trade accounts with Australia&rsquo;s largest plumbing wholesaler. This means genuine parts, fast access to stock across Sydney, and full traceability on every component installed in your home.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-xl">
            {suppliers.map((s) => (
              <BrandCard key={s.slug} name={s.name} slug={s.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-16 md:py-20">
        <div
          className="rounded-3xl p-10 md:p-14 text-center"
          style={{ background: "var(--color-dark)" }}
        >
          <p
            className="font-display text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--color-brand-blue)" }}
          >
            Got a brand in mind?
          </p>
          <h2 className="font-logo font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
            We&rsquo;ll Install, Service or Replace It
          </h2>
          <p className="text-base mb-6 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Whether you&rsquo;re replacing a Rheem hot water unit, fitting Grohe tapware, or need a Caroma toilet installed — we&rsquo;ve done it before, and we do it right.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
              style={{ background: "var(--color-brand-blue)" }}
            >
              <PhoneCallIcon size={16} />
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-outline-white">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
