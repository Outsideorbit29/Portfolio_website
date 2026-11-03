import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/experience`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/projects`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/skills`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/resume`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
