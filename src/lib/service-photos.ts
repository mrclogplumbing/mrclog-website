/**
 * Real job photos, mapped to the service pages they belong on.
 *
 * Every image here was taken on a Mr. Clog job — no stock photography.
 * That is the whole point: a prospect comparing five plumbers can tell the
 * difference between a real van in a real Sydney backyard and a licensed
 * photo of an American in a clean boiler suit.
 *
 * `hero` sits behind the dark gradient at the top of the page, so it needs to
 * read at a glance and survive being darkened. It also needs the subject off
 * to one side: the headline is left-aligned, so a person standing in the
 * middle of the frame ends up with text across their face. Photos that fail
 * that test still earn their keep in `proof`.
 *
 * `proof` holds images that sit in the body with visible captions, shown at
 * full fidelity. Detail shots belong here — a drain camera screen or a worn
 * tap cartridge is unreadable stretched across a banner but carries a page at
 * proper size. A single image runs the width of the column; two or more fall
 * into a two-column grid, which is what a before-and-after pair wants.
 *
 * Services not listed here keep the plain gradient hero. Adding a photo later
 * means adding a row — nothing else changes.
 */
export interface ServicePhoto {
  /** Path under /public. */
  src: string;
  /** Describes the image for screen readers and when it fails to load. */
  alt: string;
  /** Shown under `proof` images. Written as evidence, not decoration. */
  caption?: string;
  /**
   * CSS object-position. Phone photos are portrait but these frames are
   * landscape, so the default centre crop can slice a head off. Nudge the
   * focal point per photo.
   */
  focus?: string;
}

export interface ServicePhotoSet {
  hero?: ServicePhoto;
  /** One or two images. Two render side by side on desktop. */
  proof?: ServicePhoto[];
}

const ROOTS_REMOVED: ServicePhoto = {
  src: "/photos/blocked-drain-roots-removed.webp",
  alt: "Mr. Clog plumber holding two handfuls of tree roots cleared from a blocked sewer line, with the drain machine and open inspection opening beside him",
  focus: "center 38%",
  caption:
    "Tree roots pulled from a sewer line in Sydney's west — the cause of most blocked drains in older suburbs.",
};

const CCTV_ROOTS: ServicePhoto = {
  src: "/photos/cctv-camera-tree-roots.webp",
  alt: "Drain camera screen showing tree roots growing through a pipe joint 12.59 metres down the line",
  focus: "center 45%",
  caption:
    "The same job on camera: roots through a joint at 12.59 m. We locate the fault before we quote the fix.",
};

const FLEXI_HOSE: ServicePhoto = {
  src: "/photos/flexi-hose-failure.webp",
  alt: "Close-up of a braided flexible tap hose with the stainless braid frayed and broken at the failure point",
  caption:
    "A braided hose about to let go. These fail without warning and flood a house in minutes — check yours every few years.",
};

const OFFICE_FLOOD: ServicePhoto = {
  src: "/photos/office-water-damage.webp",
  alt: "Soaked carpet across a Sydney office floor after a concealed water leak",
  focus: "center 60%",
  caption:
    "A concealed leak found in a Sydney office. By the time it shows on the floor it has usually been running for weeks.",
};

export const servicePhotos: Record<string, ServicePhotoSet> = {
  "emergency-plumbing": {
    hero: {
      src: "/photos/burst-water-main-repair.webp",
      alt: "Mr. Clog plumber excavating a burst water main in a Sydney front yard",
      focus: "center 24%",
    },
    proof: [FLEXI_HOSE, OFFICE_FLOOD],
  },
  "blocked-drains": {
    hero: ROOTS_REMOVED,
    proof: [CCTV_ROOTS],
  },
  "jet-blasting": {
    // No hero. The subject stands dead centre in this photo, so the
    // left-aligned headline lands across his face.
    proof: [
      {
        src: "/photos/jet-blasting-backyard.webp",
        alt: "Mr. Clog plumber running a high-pressure jetter hose into a backyard drain at a Sydney family home",
        focus: "center 42%",
        caption:
          "Jetting a blocked line in a backyard in Sydney's south. We work around the kids' swing set and leave the lawn as we found it.",
      },
    ],
  },
  "cctv-drain-inspection": {
    // The camera screen is the strongest evidence on the site but turns to
    // mush stretched across a banner. It earns its place in the body instead.
    proof: [
      CCTV_ROOTS,
      {
        src: "/photos/cctv-camera-debris.webp",
        alt: "Drain camera screen showing a pipe coated in scale and debris at 0.60 metres from the inspection point",
        caption:
          "A different line at 0.60 m, its walls furred with scale and debris. The camera shows how much pipe is left before anyone quotes a repair.",
      },
    ],
  },
  "pipe-relining": {
    hero: {
      src: "/photos/tree-roots-cleared.webp",
      alt: "Mr. Clog plumber holding tree roots cleared from a damaged sewer pipe",
      focus: "center 32%",
    },
    proof: [CCTV_ROOTS],
  },
  "leak-detection": {
    proof: [
      {
        src: "/photos/leak-detection-dye-test.webp",
        alt: "Bath filled with bright fluorescent yellow dyed water during a leak detection dye test",
        caption:
          "A dye test in progress: the bath filled with water carrying fluorescent tracer dye.",
      },
      {
        src: "/photos/leak-detection-dye-on-floor.webp",
        alt: "Yellow tracer dye seeping up through the grout lines of a tiled bathroom floor, marking the path of a hidden leak",
        caption:
          "The same dye coming up through the floor outside the bath. Where it surfaces is where the water is escaping — no floor lifted to find it.",
      },
    ],
  },
  "taps-and-toilets": {
    proof: [
      {
        src: "/photos/kitchen-tap-before.webp",
        alt: "Worn chrome swan-neck kitchen mixer tap on an existing double-bowl sink",
        caption:
          "Before: the original mixer, stiff and weeping at the base.",
      },
      {
        src: "/photos/kitchen-tap-after.webp",
        alt: "New brushed-finish gooseneck mixer tap fitted to the same double-bowl kitchen sink",
        caption:
          "After: a new gooseneck mixer in the same sink. The sink and benchtop were fine — only the tap needed replacing.",
      },
      {
        src: "/photos/tap-cartridge-old-vs-new.webp",
        alt: "A worn, scaled-up tap cartridge next to a clean replacement cartridge",
        caption:
          "Left: the cartridge out of a dripping mixer, furred up with scale. Right: the replacement. That is usually the whole repair.",
      },
      {
        src: "/photos/toilet-cistern-removed.webp",
        alt: "Toilet cistern lifted off and laid on its side, showing the stained underside, outlet and perished seal",
        caption:
          "A cistern lifted to replace a perished outlet seal. A toilet that runs or weeps at the base is usually this, not a new toilet.",
      },
    ],
  },
  "bathroom-renovations": {
    hero: {
      src: "/photos/bathroom-renovation-finished.webp",
      alt: "Completed Sydney bathroom renovation with a timber vanity, stone top, brushed brass tapware and a walk-in shower",
    },
    proof: [
      {
        src: "/photos/shower-before.webp",
        alt: "Original wall-mounted shower rose and cross handles in a yellow-tiled bathroom",
        caption:
          "Before: the original rose and cross handles, in a bathroom the owners were happy with otherwise.",
      },
      {
        src: "/photos/shower-after.webp",
        alt: "The same shower recess fitted with a rain head and hand shower on a rail",
        caption:
          "After: a rain head and hand shower on a rail, same tiles, same recess. Not every bathroom needs gutting.",
      },
      {
        src: "/photos/ensuite-microcement.webp",
        alt: "Completed ensuite in pink microcement and fluted tile, with aged brass tapware, a ceiling-mounted rain head and a vessel basin on a tiled bench",
        focus: "center 50%",
        caption:
          "The other end of the same trade: a full ensuite in microcement and brass, ceiling-mounted rain head, wall-mounted basin mixer.",
      },
    ],
  },
  "hot-water-systems": {
    // No hero: the technician stands left of centre, where the headline goes.
    proof: [
      {
        src: "/photos/hot-water-cylinder-replacement.webp",
        alt: "Mr. Clog plumber in a branded hoodie connecting a new stainless hot water cylinder beside the old unit it replaces",
        caption:
          "A new cylinder going in beside the one it replaces. Most hot water changeovers are done and running the same day.",
      },
    ],
  },
  "water-pressure": {
    proof: [
      {
        src: "/photos/water-service-copper-upgrade.webp",
        alt: "Old galvanised water service pipe beside its new copper replacement in an open trench, with a new brass garden tap fitted",
        caption:
          "Old galvanised service on the left, its copper replacement on the right. Galvanised pipe rusts closed from the inside, which is why pressure in older Sydney homes drops off over the years.",
      },
    ],
  },
  "stormwater-drainage": {
    proof: [
      {
        src: "/photos/side-passage-drain-line.webp",
        alt: "Mr. Clog plumber feeding a hose up a narrow side passage beside a house, with a drain machine and an open trench along the wall",
        caption:
          "Working a line down the side passage of a Sydney home. Access this tight is the normal case, not the exception.",
      },
      {
        src: "/photos/drainage-excavation.webp",
        alt: "Open drainage excavation across a Sydney yard with new inspection risers standing proud, broken concrete stacked to one side and orange safety mesh around the dig",
        caption:
          "A larger dig with new inspection openings in. Concrete is lifted and stacked rather than broken into the soil, and the excavation is fenced while it is open.",
      },
    ],
  },
  "roof-plumbing": {
    hero: {
      src: "/photos/gutter-rust-replacement.webp",
      alt: "Rusted-through guttering along a Sydney roofline, with a Mr. Clog plumber below preparing to replace it",
      focus: "center 42%",
    },
    proof: [
      {
        src: "/photos/gutter-new-length.webp",
        alt: "New Colorbond gutter length laid out on the lawn with the downpipe outlet fitted, alongside tin snips, screws and a drill",
        caption:
          "The replacement length for the roofline above, outlet fitted and ready to go up. Gutter is measured and made up on site, not ordered in and waited for.",
      },
      {
        src: "/photos/gutter-installation.webp",
        alt: "Mr. Clog plumber on a ladder in a narrow side passage fixing the new gutter length into place along the roofline",
        focus: "center 45%",
        caption:
          "And going up, off a ladder in a side passage barely wider than the ladder itself.",
      },
    ],
  },
  "laundry-plumbing": {
    hero: {
      src: "/photos/laundry-fitout.webp",
      alt: "Mr. Clog plumber connecting the waste under a new laundry benchtop, with washer, dryer and a black undermount sink installed",
      focus: "center 55%",
    },
  },
  "kitchen-plumbing": {
    hero: {
      src: "/photos/kitchen-stone-benchtop.webp",
      alt: "Completed Sydney kitchen with a stone benchtop and full slab splashback, undermount sink and gooseneck mixer tap",
      focus: "center 55%",
    },
    proof: [
      {
        src: "/photos/kitchen-sink-before.webp",
        alt: "Original drop-in stainless kitchen sink with a drainer board and plain mixer tap, cupboard below open ready for removal",
        caption:
          "Before: the original drop-in sink and tap, cupboard open ready to disconnect.",
      },
      {
        src: "/photos/kitchen-sink-after.webp",
        alt: "The same kitchen after installation, with a flush-mounted stainless sink and a pull-out mixer tap",
        caption:
          "After: a flush-mounted sink and pull-out mixer in the same benchtop. No new kitchen, no new cabinetry.",
      },
    ],
  },
};

export function photosForService(slug: string): ServicePhotoSet {
  return servicePhotos[slug] ?? {};
}
