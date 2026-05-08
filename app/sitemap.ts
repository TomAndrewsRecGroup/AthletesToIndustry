import type { MetadataRoute } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://athletestoindustry.co.uk';

// Stable lastmod prevents Google from treating every crawl as freshness churn.
// Bump when content materially changes.
const SITE_LAST_MODIFIED = new Date('2026-05-08T00:00:00Z');

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/programme', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/employers', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/get-involved', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/partners', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/system', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/partner-toolkit', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: {
      languages: {
        'en-GB': `${SITE_URL}${r.path}`,
        'x-default': `${SITE_URL}${r.path}`,
      },
    },
  }));
}
