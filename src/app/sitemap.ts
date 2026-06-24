import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.mrclog.com.au';

const servicesSlugs = [
  'emergency-plumbing',
  'blocked-drains',
  'hot-water-systems',
  'taps-and-toilets',
  'pipe-relining',
  'leak-detection',
  'jet-blasting',
  'gas-fitting',
  'bathroom-renovations',
  'roof-plumbing',
  'stormwater-drainage',
  'cctv-drain-inspection',
  'kitchen-plumbing',
  'laundry-plumbing',
  'backflow-prevention',
  'water-pressure',
];

const locationSlugs = [
  'inner-west',
  'eastern-suburbs',
  'north-shore',
  'hills-district',
  'south-sydney',
  'western-sydney',
  'northern-beaches',
  'sydney-cbd',
  'ryde-macquarie-park',
  'canterbury-bankstown',
  'lower-north-shore',
];

const blogSlugs = [
  'winter-plumbing-checklist-sydney',
  'why-hot-water-struggles-in-winter',
  'why-is-my-drain-blocked',
  'gas-leak-or-not',
  'how-much-does-a-leaking-tap-cost',
  'what-to-do-in-a-plumbing-emergency',
  'how-to-choose-a-plumber-in-sydney',
  'signs-your-hot-water-system-is-failing',
  'how-to-prevent-blocked-drains',
  'gas-vs-electric-vs-heat-pump-hot-water',
  'tree-roots-in-drains',
  'water-pressure-too-high-or-too-low',
  'burst-pipe-first-5-minutes',
  'how-to-read-your-sydney-water-bill',
  'bathroom-renovation-plumbing-checklist',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/locations`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/reviews`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/offers/winter-hot-water-check`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  const servicePages = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const locationPages = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
