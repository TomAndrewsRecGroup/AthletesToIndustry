import type { Metadata } from 'next';
import { GetInvolvedClient } from './GetInvolvedClient';

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    'Four ways to step into the Athletes To Industry programme: as an athlete seeking a career, an employer hiring trained talent, a club or governing body, or a certified training provider.',
  alternates: { canonical: '/get-involved' },
  openGraph: {
    title: 'Get Involved: Athletes, Employers, Clubs and Trainers',
    description:
      'Four ways to step into the programme: as an athlete, employer, club or governing body, or training provider.',
    url: '/get-involved',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://athletestoindustry.co.uk/get-involved#webpage',
  url: 'https://athletestoindustry.co.uk/get-involved',
  name: 'Join the Programme: Athletes, Employers, Clubs and Trainers',
  description:
    'Four ways to step into the Athletes To Industry programme: athlete, employer, club or governing body, or training provider.',
  isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
  dateModified: '2026-05-07T00:00:00Z',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Get Involved', item: 'https://athletestoindustry.co.uk/get-involved' },
    ],
  },
};

export default function GetInvolvedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GetInvolvedClient />
    </>
  );
}
