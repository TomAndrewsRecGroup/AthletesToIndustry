/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://athletestoindustry.com',
  generateRobotsTxt: false, // we maintain public/robots.txt manually
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/programme': 0.9,
      '/get-involved': 0.9,
      '/employers': 0.85,
      '/about': 0.8,
      '/faq': 0.8,
      '/system': 0.75,
      '/contact': 0.7,
    };
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
