import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IrisShader } from '@/components/canvas/IrisShader';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://athletestoindustry.com',
  ),
  title: {
    default: 'Athletes To Industry: Athlete Career Transition Programme',
    template: '%s | Athletes To Industry',
  },
  description:
    'A structured career transition programme for elite athletes leaving sport. Real career planning, industry training, and direct employer introductions. Operated by Andrews Recruitment Group.',
  keywords: [
    'athlete career transition',
    'elite athlete career change',
    'life after sport',
    'career transition for sportspeople',
    'athlete recruitment programme UK',
    'retiring athlete career',
    'former athlete jobs',
    'athletes to industry',
    'Andrews Recruitment Group',
    'Tom Andrews',
  ],
  authors: [{ name: 'Tom Andrews', url: 'https://andrews-recruitment.com' }],
  creator: 'Andrews Recruitment Group',
  publisher: 'Andrews Recruitment Group',
  openGraph: {
    title: 'Athletes To Industry: Athlete Career Transition Programme',
    description:
      'A structured career transition programme for elite athletes leaving sport. Real career planning, industry training, and direct employer introductions.',
    type: 'website',
    url: '/',
    siteName: 'Athletes To Industry',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Athletes To Industry: Athlete Career Transition Programme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athletes To Industry: Athlete Career Transition Programme',
    description:
      'A structured career transition programme for elite athletes leaving sport. Operated by Andrews Recruitment Group.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://athletestoindustry.com/#organization',
      name: 'Athletes To Industry',
      url: 'https://athletestoindustry.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://athletestoindustry.com/og-image.png',
      },
      description:
        'A structured career transition programme for elite athletes leaving sport, operated by Andrews Recruitment Group.',
      founder: {
        '@type': 'Person',
        '@id': 'https://andrews-recruitment.com/#tom-andrews',
        name: 'Tom Andrews',
        jobTitle: 'Owner',
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://andrews-recruitment.com/#organization',
          name: 'Andrews Recruitment Group',
          url: 'https://andrews-recruitment.com',
        },
      },
      parentOrganization: {
        '@type': 'Organization',
        '@id': 'https://andrews-recruitment.com/#organization',
        name: 'Andrews Recruitment Group',
        url: 'https://andrews-recruitment.com',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://athletestoindustry.com/#website',
      url: 'https://athletestoindustry.com',
      name: 'Athletes To Industry',
      publisher: { '@id': 'https://athletestoindustry.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://athletestoindustry.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="text-cream font-body overflow-x-hidden">

        {/* solid brand background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 lens-bg" />

        {/* WebGL iris shader */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-40">
          <IrisShader />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="relative">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
