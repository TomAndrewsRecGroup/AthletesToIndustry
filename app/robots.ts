import type { MetadataRoute } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://athletestoindustry.co.uk';

// Explicit allow rules across the major search-engine and assistant crawlers
// so we are clearly opted-in for indexing and AI / generative-engine citation.
const ALLOWED_AGENTS = [
  // Search engines
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-News',
  'GoogleOther',
  'Google-Extended',
  'Bingbot',
  'msnbot',
  'DuckDuckBot',
  'YandexBot',
  'Yandex',
  'Baiduspider',
  'Naverbot',
  'Yeti',
  'Applebot',
  'Applebot-Extended',
  'Slurp',
  'Sogou web spider',
  'Exabot',
  'facebot',
  'ia_archiver',
  // Generative AI / answer engines
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'FacebookBot',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'Cohere',
  'YouBot',
  'MistralAI-User',
  'Amazonbot',
  'Diffbot',
  'omgili',
  'omgilibot',
  'AwarioRssBot',
  'AwarioSmartBot',
  'PiplBot',
  'SemrushBot',
  'AhrefsBot',
  'MJ12bot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...ALLOWED_AGENTS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
