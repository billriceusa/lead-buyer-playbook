import type { MetadataRoute } from 'next';
import { getAllContent } from '@/lib/chapters';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const chapters: MetadataRoute.Sitemap = getAllContent().map((chapter) => ({
    url: `${SITE_URL}/chapter/${chapter.slug}`,
    changeFrequency: 'yearly',
    priority: chapter.type === 'chapter' ? 0.8 : 0.5,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...chapters,
  ];
}
