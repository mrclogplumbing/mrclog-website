import type { ReviewTag } from "@/lib/reviews";

/**
 * Maps a service slug onto the review tag whose reviews are most relevant.
 * Anything unmapped falls back to "General".
 */
export function reviewTagForService(slug: string): ReviewTag {
  const map: Record<string, ReviewTag> = {
    "emergency-plumbing": "Emergency",
    "blocked-drains": "Blocked Drains",
    "jet-blasting": "Blocked Drains",
    "cctv-drain-inspection": "Blocked Drains",
    "pipe-relining": "Blocked Drains",
    "stormwater-drainage": "Blocked Drains",
    "hot-water-systems": "Hot Water",
    "leak-detection": "Leak Detection",
    "bathroom-renovations": "Bathroom",
    "gas-fitting": "Gas",
  };
  return map[slug] ?? "General";
}
