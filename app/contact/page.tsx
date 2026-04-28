import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Athletes To Industry',
  description:
    'Get in touch with the Athletes To Industry team. Whether you are an athlete, employer, club or training provider, messages route directly to the right person.',
  alternates: { canonical: '/contact' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://athletestoindustry.co.uk/contact#webpage',
  url: 'https://athletestoindustry.co.uk/contact',
  name: 'Contact Athletes To Industry',
  description:
    'Get in touch with the Athletes To Industry team. Messages route to the right person based on whether you are an athlete, employer, club, or training provider.',
  isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://athletestoindustry.co.uk/#organization',
    name: 'Athletes To Industry',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Programme enquiries',
        url: 'https://athletestoindustry.co.uk/contact',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://athletestoindustry.co.uk/contact' },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
