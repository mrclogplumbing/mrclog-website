import Image from "next/image";
import Link from "next/link";
import { getArea } from "@/lib/areas";
import { getService } from "@/lib/services";
import { formatStoryMonth, type JobStory } from "@/lib/job-stories";

/**
 * "Recent jobs" section for suburb and service pages.
 *
 * Renders nothing when there are no stories, so a page without any looks
 * exactly as it did before this existed.
 */
export default function JobStories({
  heading,
  stories,
  show,
}: {
  heading: string;
  stories: JobStory[];
  /** Which cross-link to put under each title: the suburb or the service. */
  show: "suburb" | "service";
}) {
  if (stories.length === 0) return null;

  return (
    <section className="section-container py-16 md:py-20" aria-labelledby="recent-jobs-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-display text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-blue)" }}>
            From the Job Sheet
          </p>
          <h2 id="recent-jobs-heading" className="font-logo font-bold text-3xl md:text-4xl" style={{ color: "var(--color-dark)" }}>
            {heading}
          </h2>
        </div>
        <div className="space-y-8">
          {stories.map((story) => {
            const suburbPage = getArea(story.suburb);
            const service = story.service ? getService(story.service) : undefined;
            return (
              <article key={story.slug} className="rounded-2xl p-6 md:p-8 border border-gray-100 bg-white shadow-sm">
                <h3 className="font-logo font-bold text-xl mb-1" style={{ color: "var(--color-dark)" }}>
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  {show === "suburb" && suburbPage ? (
                    <Link href={`/locations/${suburbPage.slug}`} className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                      {story.suburbLabel}
                    </Link>
                  ) : show === "suburb" ? (
                    story.suburbLabel
                  ) : service ? (
                    <Link href={`/services/${service.slug}`} className="font-semibold" style={{ color: "var(--color-brand-blue)" }}>
                      {service.label}
                    </Link>
                  ) : null}
                  {(show === "suburb" || service) && " · "}
                  <time dateTime={story.month}>{formatStoryMonth(story.month)}</time>
                </p>
                <div className="grid gap-4 md:grid-cols-2 mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-brand-blue)" }}>
                      The problem
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base">{story.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-brand-blue)" }}>
                      What we did
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base">{story.fix}</p>
                  </div>
                </div>
                {story.photos.length > 0 && (
                  <div className={`grid gap-4 ${story.photos.length > 1 ? "grid-cols-2" : "md:grid-cols-2"} ${story.photos.length > 2 ? "md:grid-cols-4" : ""}`}>
                    {story.photos.map((photo) => (
                      <div key={photo.src} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-100">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          loading="lazy"
                          sizes={story.photos.length > 2 ? "(min-width: 768px) 220px, 50vw" : "(min-width: 768px) 440px, " + (story.photos.length > 1 ? "50vw" : "100vw")}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
