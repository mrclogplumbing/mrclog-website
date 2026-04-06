import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  /** "dark" = black wordmark (white header), "light" = white wordmark (dark bg / footer) */
  variant?: "dark" | "light";
  className?: string;
  /** Height in px — width is auto-calculated from aspect ratio */
  height?: number;
}

export default function Logo({ variant = "dark", className = "", height = 38 }: LogoProps) {
  const src = variant === "light" ? "/logo-light.webp" : "/logo-dark.webp";
  // Approximate aspect ratio of the Mr Clog logo (wide wordmark)
  const width = Math.round(height * 3.8);

  return (
    <Link href="/" className={`flex-shrink-0 no-underline ${className}`} aria-label="Mr Clog — Home">
      <Image
        src={src}
        alt="Mr Clog"
        width={width}
        height={height}
        priority
        style={{ height, width: "auto", objectFit: "contain" }}
      />
    </Link>
  );
}
