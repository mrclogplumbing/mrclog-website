"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";

const PHONE = "(02) 9139 8945";
const PHONE_HREF = "tel:+61291398945";

const services = [
  { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
  { label: "Blocked Drains", href: "/services/blocked-drains" },
  { label: "Hot Water Systems", href: "/services/hot-water-systems" },
  { label: "Taps & Toilets", href: "/services/taps-and-toilets" },
  { label: "Pipe Relining", href: "/services/pipe-relining" },
  { label: "Leak Detection", href: "/services/leak-detection" },
  { label: "Jett Blasting", href: "/services/jett-blasting" },
  { label: "Gas Fitting", href: "/services/gas-fitting" },
  { label: "Bathroom Renovations", href: "/services/bathroom-renovations" },
  { label: "Roof Plumbing", href: "/services/roof-plumbing" },
];

const locations = [
  { label: "Inner West", href: "/locations/inner-west" },
  { label: "Eastern Suburbs", href: "/locations/eastern-suburbs" },
  { label: "North Shore", href: "/locations/north-shore" },
  { label: "Hills District", href: "/locations/hills-district" },
  { label: "South Sydney", href: "/locations/south-sydney" },
  { label: "Western Sydney", href: "/locations/western-sydney" },
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function DropdownMenu({
  items,
  isOpen,
}: {
  items: { label: string; href: string }[];
  isOpen: boolean;
}) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
        isOpen
          ? "opacity-100 scale-y-100 pointer-events-auto"
          : "opacity-0 scale-y-95 pointer-events-none"
      }`}
      style={{ zIndex: 60 }}
    >
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-brand-blue transition-colors duration-150"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setServicesOpen(false);
    setLocationsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      }`}
      style={{ borderBottom: scrolled ? "none" : "1px solid var(--color-grey-300)" }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Logo variant="dark" height={62} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => {
                  setServicesOpen((v) => !v);
                  setLocationsOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50 transition-colors duration-150"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <DropdownMenu items={services} isOpen={servicesOpen} />
            </div>

            {/* Locations Dropdown */}
            <div ref={locationsRef} className="relative">
              <button
                onClick={() => {
                  setLocationsOpen((v) => !v);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50 transition-colors duration-150"
                aria-expanded={locationsOpen}
                aria-haspopup="true"
              >
                Locations
                <ChevronDown
                  className={`transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <DropdownMenu items={locations} isOpen={locationsOpen} />
            </div>

            <Link
              href="/about"
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50 transition-colors duration-150"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50 transition-colors duration-150"
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Right: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-brand-blue transition-colors duration-150"
            >
              <PhoneIcon />
              {PHONE}
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get a Free Quote →
            </Link>
          </div>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1 text-sm font-bold"
              style={{ color: "var(--color-brand-blue)" }}
              aria-label={`Call us: ${PHONE}`}
            >
              <PhoneIcon />
              <span className="hidden sm:inline">{PHONE}</span>
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-container py-4 space-y-1" aria-label="Mobile navigation">

          {/* Services accordion */}
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-800 hover:bg-blue-50 rounded-lg"
          >
            Services
            <ChevronDown className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 space-y-0.5">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-3 py-2.5 text-sm text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* Locations accordion */}
          <button
            onClick={() => setMobileLocationsOpen((v) => !v)}
            className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-800 hover:bg-blue-50 rounded-lg"
          >
            Locations
            <ChevronDown className={`transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileLocationsOpen && (
            <div className="pl-4 space-y-0.5">
              {locations.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-3 py-2.5 text-sm text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/about" className="block px-3 py-3 text-sm font-medium text-gray-800 hover:bg-blue-50 rounded-lg">
            About
          </Link>
          <Link href="/blog" className="block px-3 py-3 text-sm font-medium text-gray-800 hover:bg-blue-50 rounded-lg">
            Blog
          </Link>

          <div className="pt-2 pb-2 flex flex-col gap-2">
            <a href={PHONE_HREF} className="btn-outline text-center text-sm py-3">
              Call {PHONE}
            </a>
            <Link href="/contact" className="btn-primary text-center text-sm py-3">
              Get a Free Quote →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
