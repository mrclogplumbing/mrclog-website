import Image from "next/image";

interface BlogFigureProps {
  /** Path under /public, e.g. "/blog/why-does-my-drain-smell/hero.webp". */
  src: string;
  /** Describes the image for screen readers and when it fails to load. */
  alt: string;
  /**
   * Shown under the image. Required for real job photos (written as
   * evidence, like the service pages). Leave out for generated images —
   * a caption would read as a claim about a job that never happened.
   */
  caption?: string;
  /** The first image in a post loads eagerly; later ones lazy-load. */
  priority?: boolean;
}

/**
 * An image inside a blog post. Real job photos come from public/photos;
 * generated illustrations live in public/blog/<slug>/.
 */
export default function BlogFigure({ src, alt, caption, priority }: BlogFigureProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        priority={priority}
        sizes="(min-width: 1024px) 720px, 100vw"
        className="w-full h-auto rounded-2xl"
      />
      {caption && <figcaption className="text-sm text-gray-500 mt-3">{caption}</figcaption>}
    </figure>
  );
}
