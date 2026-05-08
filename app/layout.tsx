import type { Metadata, Viewport } from 'next';
import { Oswald, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IrisShaderLazy } from '@/components/canvas/IrisShaderLazy';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://athletestoindustry.co.uk',
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
  icons: {
    icon: {
      url: 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/Athletes%20To%20Industry%20Option%20A.png',
      sizes: '512x512',
      type: 'image/png',
    },
    apple: {
      url: 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/Athletes%20To%20Industry%20Option%20A.png',
      sizes: '180x180',
      type: 'image/png',
    },
    shortcut: 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/Athletes%20To%20Industry%20Option%20A.png',
  },
  openGraph: {
    title: 'Athletes To Industry: Athlete Career Transition Programme',
    description:
      'A structured career transition programme for elite athletes leaving sport. Real career planning, industry training, and direct employer introductions.',
    type: 'website',
    url: '/',
    siteName: 'Athletes To Industry',
    locale: 'en_GB',
    images: [
      {
        url: 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/Athletes%20To%20Industry%20Option%20A.png',
        width: 1200,
        height: 630,
        alt: 'Athletes To Industry: Athlete Career Transition Programme',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athletes To Industry: Athlete Career Transition Programme',
    description:
      'A structured career transition programme for elite athletes leaving sport. Operated by Andrews Recruitment Group.',
    images: ['https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/Athletes%20To%20Industry%20Option%20A.png'],
    creator: '@TomAndrewsRec',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
      'x-default': '/',
    },
  },
  manifest: '/manifest.webmanifest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: 'Athletes To Industry',
  category: 'recruitment',
  other: {
    'msapplication-TileColor': '#060a18',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#060a18' },
    { media: '(prefers-color-scheme: dark)', color: '#060a18' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const SITE_LAST_MODIFIED = '2026-05-07T00:00:00Z';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://athletestoindustry.co.uk/#organization',
      name: 'Athletes To Industry',
      alternateName: ['A2I', 'Athletes2Industry'],
      url: 'https://athletestoindustry.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/Athletes%20To%20Industry%20Option%20A.png',
        width: 512,
        height: 512,
      },
      description:
        'A structured career transition programme for elite athletes leaving sport. Created and led by Tom Andrews. Operated by Andrews Recruitment Group.',
      foundingDate: '2025',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'tom@andrews-recruitment.com',
          contactType: 'Programme enquiries',
          areaServed: 'GB',
          availableLanguage: ['en-GB'],
        },
      ],
      founder: { '@id': 'https://andrews-recruitment.com/#tom-andrews' },
      parentOrganization: { '@id': 'https://andrews-recruitment.com/#organization' },
      knowsAbout: [
        'Athlete career transition',
        'Life after sport',
        'Recruitment for former athletes',
        'Apprenticeships for young athletes',
        'Player welfare',
        'Workforce development',
      ],
      sameAs: [
        'https://andrews-recruitment.com',
        'https://thepeoplesystem.co.uk',
        'https://recxchange.io',
        'https://ivylens.co.uk',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://andrews-recruitment.com/#tom-andrews',
      name: 'Tom Andrews',
      givenName: 'Tom',
      familyName: 'Andrews',
      jobTitle: 'Founder and Owner',
      description:
        'Founder and Owner of Andrews Recruitment Group, The People System, RecXchange and IvyLens. Created and leads Athletes To Industry to support athletes transitioning into a workplace after their career in sport.',
      url: 'https://andrews-recruitment.com',
      worksFor: { '@id': 'https://andrews-recruitment.com/#organization' },
      owns: [
        { '@id': 'https://andrews-recruitment.com/#organization' },
        { '@id': 'https://thepeoplesystem.co.uk/#organization' },
        { '@id': 'https://recxchange.io/#organization' },
        { '@id': 'https://ivylens.co.uk/#organization' },
      ],
      knowsAbout: [
        'Recruitment',
        'Talent management',
        'Career development',
        'Athlete career transition',
      ],
      sameAs: ['https://andrews-recruitment.com'],
    },
    {
      '@type': 'Organization',
      '@id': 'https://andrews-recruitment.com/#organization',
      name: 'Andrews Recruitment Group',
      alternateName: 'ARG',
      legalName: 'Andrews Recruitment Group Ltd',
      url: 'https://andrews-recruitment.com',
      description:
        'A UK specialist recruitment practice with experience placing people across mental health, building materials, industrial engineering, and M&E engineering. Operator of Athletes To Industry and owner of The People System talent platform. An independent company, separate from IvyLens.',
      founder: { '@id': 'https://andrews-recruitment.com/#tom-andrews' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://thepeoplesystem.co.uk/#organization',
      name: 'The People System',
      url: 'https://thepeoplesystem.co.uk',
      description:
        'A talent and development platform built and owned by Andrews Recruitment Group. Powers Athletes To Industry end to end.',
      parentOrganization: { '@id': 'https://andrews-recruitment.com/#organization' },
      founder: { '@id': 'https://andrews-recruitment.com/#tom-andrews' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://recxchange.io/#organization',
      name: 'RecXchange',
      url: 'https://recxchange.io',
      description:
        'A global recruiter collaboration network connecting thousands of specialist recruiters across sectors and geographies.',
      founder: { '@id': 'https://andrews-recruitment.com/#tom-andrews' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://ivylens.co.uk/#organization',
      name: 'IvyLens',
      legalName: 'IvyLens Group',
      url: 'https://ivylens.co.uk',
      description:
        'IvyLens is the parent group of AMIVY Designs. Founded by Tom Andrews. IvyLens is an independent company, separate from Andrews Recruitment Group.',
      founder: { '@id': 'https://andrews-recruitment.com/#tom-andrews' },
      subOrganization: [
        { '@id': 'https://ivylens.co.uk/amivy-designs#organization' },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://ivylens.co.uk/amivy-designs#organization',
      name: 'AMIVY Designs',
      url: 'https://ivylens.co.uk',
      description:
        'Design and build studio, part of the IvyLens group. Designed and built the Athletes To Industry website.',
      parentOrganization: { '@id': 'https://ivylens.co.uk/#organization' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://athletestoindustry.co.uk/#website',
      url: 'https://athletestoindustry.co.uk',
      name: 'Athletes To Industry',
      inLanguage: 'en-GB',
      publisher: { '@id': 'https://athletestoindustry.co.uk/#organization' },
      creator: { '@id': 'https://ivylens.co.uk/amivy-designs#organization' },
      copyrightHolder: { '@id': 'https://andrews-recruitment.com/#organization' },
      dateModified: SITE_LAST_MODIFIED,
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://athletestoindustry.co.uk/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://haaqtnq6favvrbuh.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://haaqtnq6favvrbuh.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="text-cream font-body overflow-x-hidden">

        {/* solid brand background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 lens-bg" />

        {/* WebGL iris shader (lazy, client-only, post-LCP) */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-40">
          <IrisShaderLazy />
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
