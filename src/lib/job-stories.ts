/**
 * Job stories: short case studies from real Mr. Clog jobs.
 *
 * Anthony uploads photos from one job to marketing/job-photos/inbox/ on
 * GitHub and writes what happened in the commit message. The job-stories
 * skill (.claude/skills/job-stories/SKILL.md) turns each upload into an
 * entry here and a folder of cleaned WebP photos under public/jobs/.
 *
 * Honesty rule: every story comes only from the owner's own notes and
 * photos. Nothing is invented or embellished: no made-up numbers,
 * durations, prices or outcomes, and no wording that makes the job sound
 * bigger than the notes say. No customer names, street names or numbers,
 * or anything else that identifies the customer or their home. If the
 * notes do not say it, the story does not say it.
 *
 * An empty list is fine: the sections that show these render nothing.
 */

export interface JobStory {
  /** Unique, e.g. "2026-09-paddington-relined-clay-sewer". */
  slug: string;
  /** Slug from src/lib/suburbs.ts. May name a suburb without a page. */
  suburb: string;
  /** Suburb name as written for people, e.g. "Paddington". */
  suburbLabel: string;
  /** Slug from src/lib/services.ts, when the job fits one. */
  service?: string;
  title: string;
  /** Year and month of the job, e.g. "2026-09". */
  month: string;
  /** What was wrong, 1-3 sentences, from the owner's notes. */
  problem: string;
  /** What was done, 1-3 sentences, from the owner's notes. */
  fix: string;
  /** Cleaned WebP photos under /jobs/<story folder>/, metadata stripped. */
  photos: { src: string; alt: string; width: number; height: number }[];
}

export const jobStories: JobStory[] = [];

function newestFirst(a: JobStory, b: JobStory): number {
  return b.month.localeCompare(a.month) || a.slug.localeCompare(b.slug);
}

export function storiesForSuburb(slug: string): JobStory[] {
  return jobStories.filter((s) => s.suburb === slug).sort(newestFirst);
}

export function storiesForService(slug: string): JobStory[] {
  return jobStories.filter((s) => s.service === slug).sort(newestFirst);
}

/** "2026-09" -> "September 2026". */
export function formatStoryMonth(month: string): string {
  const [year, m] = month.split("-").map(Number);
  const name = new Date(Date.UTC(year, (m || 1) - 1, 1)).toLocaleString("en-AU", {
    month: "long",
    timeZone: "UTC",
  });
  return `${name} ${year}`;
}
