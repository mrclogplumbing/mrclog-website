import { MetadataRoute } from 'next';
import { activeOffers } from '@/lib/offers';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import { posts } from '@/lib/blog';

const BASE_URL = 'https://www.mrclog.com.au';

const servicesSlugs = services.map((s) => s.slug);

const locationSlugs = locations.map((l) => l.slug);

const blogSlugs = posts.map((p) => p.slug);

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

  return [...staticPages, ...offerPages, ...servicePages, ...locationPages, ...blogPages];
}
