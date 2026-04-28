import type { Metadata } from 'next';
import { GetInvolvedClient } from './GetInvolvedClient';

export const metadata: Metadata = {
  title: 'Join the Programme: Athletes, Employers, Clubs and Trainers',
  description:
    'Four ways to step into the Athletes To Industry programme: as an athlete seeking a career, an employer hiring trained talent, a club or governing body, or a certified training provider.',
  alternates: { canonical: '/get-involved' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://athletestoindustry.com/get-involved#webpage',
  url: 'https://athletestoindustry.com/get-involved',
  name: 'Join the Programme: Athletes, Employers, Clubs and Trainers',
  description:
    'Four ways to step into the Athletes To Industry programme: athlete, employer, club or governing body, or training provider.',
  isPartOf: { '@id': 'https://athletestoindustry.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.com/' },
      { '@type': 'ListItem', position: 2, name: 'Get Involved', item: 'https://athletestoindustry.com/get-involved' },
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
