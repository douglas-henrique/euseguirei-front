import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.luzdomundo.online',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.luzdomundo.online/milagres-eucaristicos',
      lastModified: new Date(),
      changeFrequency: `never`,
      priority: 0.8,
    }
  ]
}