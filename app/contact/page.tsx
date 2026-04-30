import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Athletes To Industry',
  description:
    'Get in touch with the Athletes To Industry team. Email Tom Andrews or Lucinda Reader directly.',
  alternates: { canonical: '/contact' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://athletestoindustry.co.uk/contact#webpage',
  url: 'https://athletestoindustry.co.uk/contact',
  name: 'Contact Athletes To Industry',
  description:
    'Get in touch with the Athletes To Industry team. Email Tom Andrews or Lucinda Reader directly.',
  isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://athletestoindustry.co.uk/#organization',
    name: 'Athletes To Industry',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        name: 'Tom Andrews',
        email: 'tom@andrews-recruitment.com',
        contactType: 'Programme enquiries',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        name: 'Lucinda Reader',
        email: 'lucinda@ravellohr.co.uk',
        contactType: 'Programme enquiries',
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
