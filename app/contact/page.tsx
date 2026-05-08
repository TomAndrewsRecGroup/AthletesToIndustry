import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Athletes To Industry',
  description:
    'Get in touch with the Athletes To Industry team. Email Tom Andrews or Lucinda Reader directly.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Athletes To Industry',
    description:
      'Email Tom Andrews or Lucinda Reader directly to discuss the Athletes To Industry programme.',
    url: '/contact',
    type: 'website',
  },
};

const CONTACT_LAST_MODIFIED = '2026-05-07T00:00:00Z';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://athletestoindustry.co.uk/contact#webpage',
      url: 'https://athletestoindustry.co.uk/contact',
      name: 'Contact Athletes To Industry',
      description:
        'Get in touch with the Athletes To Industry team. Email Tom Andrews or Lucinda Reader directly.',
      isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
      inLanguage: 'en-GB',
      dateModified: CONTACT_LAST_MODIFIED,
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
    },
    {
      '@type': 'Person',
      '@id': 'https://athletestoindustry.co.uk/#lucinda-reader',
      name: 'Lucinda Reader',
      givenName: 'Lucinda',
      familyName: 'Reader',
      jobTitle: 'Programme Lead',
      email: 'lucinda@ravellohr.co.uk',
      worksFor: { '@id': 'https://andrews-recruitment.com/#organization' },
    },
  ],
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
