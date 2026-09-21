import { MetadataRoute } from 'next';
import { activeOffers } from '@/lib/offers';
import { services } from '@/lib/services';
import { allAreas } from '@/lib/areas';
import { blockedDrainAreas } from '@/lib/blocked-drain-areas';
import { pipeReliningAreas } from '@/lib/pipe-relining-areas';
import { posts } from '@/lib/blog';

const BASE_URL = 'https://www.mrclog.com.au';

const servicesSlugs = services.map((s) => s.slug);

const locationSlugs = allAreas.map((a) => a.slug);

const blogSlugs = posts.map((p) => p.slug);

const blockedDrainSlugs = blockedDrainAreas.map((a) => a.suburb);

const pipeReliningSlugs = pipeReliningAreas.map((a) => a.suburb);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/locations`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/reviews`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/offers`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const offerPages = activeOffers.map((offer) => ({
    url: `${BASE_URL}/offers/${offer.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const servicePages = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blockedDrainPages = blockedDrainSlugs.map((slug) => ({
    url: `${BASE_URL}/blocked-drains/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const pipeReliningPages = pipeReliningSlugs.map((slug) => ({
    url: `${BASE_URL}/pipe-relining/${slug}`,
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

  return [...staticPages, ...offerPages, ...servicePages, ...locationPages, ...blockedDrainPages, ...pipeReliningPages, ...blogPages];
}
