/**
 * Real job photos, mapped to the service pages they belong on.
 *
 * Every image here was taken on a Mr. Clog job — no stock photography.
 * That is the whole point: a prospect comparing five plumbers can tell
 * the difference between a real van in a real Sydney backyard and a
 * licensed photo of an American in a clean boiler suit.
 *
 * `hero` sits behind the dark gradient at the top of the page, so it
 * needs to read at a glance and survive being darkened. It also needs the
 * subject off to one side: the headline is left-aligned, so a person standing
 * in the middle of the frame ends up with text across their face. Photos that
 * fail that test still earn their keep as `proof`.
 * `proof` sits in the body with a visible caption, so detail shots and
 * screens work well there.
 *
 * Services not listed here simply keep the plain gradient hero. Adding a
 * photo later means adding a row — nothing else changes.
 */
export interface ServicePhoto {
  /** Path under /public. */
  src: string;
  /** Describes the image for screen readers and when it fails to load. */
  alt: string;
  /** Shown under `proof` images only. Written as evidence, not decoration. */
  caption?: string;
  /**
   * CSS object-position. Phone photos are portrait, but the hero is wide and
   * short, so the default centre crop can slice a face off. Nudge the focal
   * point per photo: "center 38%" keeps the person in frame on desktop
   * without affecting mobile, where the full portrait already fits.
   */
  focus?: string;
}

export interface ServicePhotoSet {
  hero?: ServicePhoto;
  proof?: ServicePhoto;
}

const ROOTS_REMOVED: ServicePhoto = {
  src: "/photos/blocked-drain-roots-removed.webp",
  alt: "Mr. Clog plumber holding two handfuls of tree roots cleared from a blocked sewer line, with the drain machine and open inspection opening beside him",
  focus: "center 38%",
  caption: "Tree roots pulled from a sewer line in Sydney's west — the cause of most blocked drains in older suburbs.",
};

const CCTV_ROOTS: ServicePhoto = {
  src: "/photos/cctv-camera-tree-roots.webp",
  alt: "Drain camera screen showing tree roots growing through a pipe joint 12.59 metres down the line",
  focus: "center 45%",
  caption: "The same job on camera: roots through a joint at 12.59 m. We locate the fault before we quote the fix.",
};

const FLEXI_HOSE: ServicePhoto = {
  src: "/photos/flexi-hose-failure.webp",
  alt: "Close-up of a braided flexible tap hose with the stainless braid frayed and broken at the failure point",
  caption: "A braided hose about to let go. These fail without warning and flood a house in minutes — check yours every few years.",
};

export const servicePhotos: Record<string, ServicePhotoSet> = {
  "emergency-plumbing": {
    hero: {
      src: "/photos/burst-water-main-repair.webp",
      alt: "Mr. Clog plumber excavating a burst water main in a Sydney front yard",
      focus: "center 24%",
    },
    proof: FLEXI_HOSE,
  },
  "blocked-drains": {
    hero: ROOTS_REMOVED,
    proof: CCTV_ROOTS,
  },
  "jet-blasting": {
    // No hero. The subject stands dead centre in this photo, so the
    // left-aligned headline lands across his face. Heroes need the person
    // on one side; centred compositions belong in the body.
    proof: {
      src: "/photos/jet-blasting-backyard.webp",
      alt: "Mr. Clog plumber running a high-pressure jetter hose into a backyard drain at a Sydney family home",
      focus: "center 42%",
      caption:
        "Jetting a blocked line in a backyard in Sydney's south. We work around the kids' swing set and leave the lawn as we found it.",
    },
  },
  "cctv-drain-inspection": {
    // No hero. The camera screen is the strongest evidence on the site but it
    // turns to mush stretched across a wide banner — it earns its place in the
    // body at full fidelity instead.
    proof: CCTV_ROOTS,
  },
  "pipe-relining": {
    hero: {
      src: "/photos/tree-roots-cleared.webp",
      alt: "Mr. Clog plumber holding tree roots cleared from a damaged sewer pipe",
      focus: "center 32%",
    },
    proof: CCTV_ROOTS,
  },
  "leak-detection": {
    proof: {
      src: "/photos/office-water-damage.webp",
      alt: "Soaked carpet across a Sydney office floor after a concealed water leak",
      focus: "center 60%",
      caption:
        "A concealed leak found in a Sydney office. By the time it shows on the floor it has usually been running for weeks.",
    },
  },
  "taps-and-toilets": {
    proof: {
      src: "/photos/tap-cartridge-old-vs-new.webp",
      alt: "A worn, scaled-up tap cartridge next to a clean replacement cartridge",
      caption: "Left: the cartridge out of a dripping mixer, furred up with scale. Right: the replacement. That is usually the whole repair.",
    },
  },
  "bathroom-renovations": {
    hero: {
      src: "/photos/bathroom-renovation-finished.webp",
      alt: "Completed Sydney bathroom renovation with a timber vanity, stone top, brushed brass tapware and a walk-in shower",
    },
  },
};

export function photosForService(slug: string): ServicePhotoSet {
  return servicePhotos[slug] ?? {};
}
