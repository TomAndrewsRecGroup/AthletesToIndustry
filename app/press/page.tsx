import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

const A2I_LOGO_URL =
  'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/Athletes%20To%20Industry%20Option%20A.png';

export const metadata: Metadata = {
  title: 'Press & Media',
  description:
    'Media-ready assets, short bios and press contact for Athletes To Industry. Brand mark download, programme one-pager, factsheet and key facts for journalists.',
  alternates: { canonical: '/press' },
  openGraph: {
    title: 'Athletes To Industry: Press & Media',
    description:
      'Media-ready assets, short bios and press contact. Brand mark, one-pager, factsheet and key facts.',
    url: '/press',
    type: 'article',
  },
};

const PRESS_LAST_MODIFIED = '2026-05-08T00:00:00Z';

const facts: { label: string; value: string }[] = [
  { label: 'Programme length', value: '12 months' },
  { label: 'Created and led by', value: 'Tom Andrews' },
  { label: 'Operated by', value: 'Andrews Recruitment Group' },
  { label: 'Platform', value: 'The People System' },
  { label: 'Pilot club', value: 'Old Albanian RFC' },
  { label: 'Country', value: 'United Kingdom' },
  { label: 'Sports', value: 'All' },
  { label: 'Development plan', value: '12-month, written' },
];

const bios: {
  name: string;
  role: string;
  short: string;
  long: string;
}[] = [
  {
    name: 'Tom Andrews',
    role: 'Founder & Owner — Athletes To Industry',
    short:
      'Tom Andrews created and leads Athletes To Industry. He is Founder and Owner of Andrews Recruitment Group, The People System, RecXchange and IvyLens.',
    long: 'Tom Andrews is Founder and Owner of Andrews Recruitment Group, The People System, RecXchange and IvyLens. A specialist recruiter with experience placing people across mental health, building materials, industrial engineering and M&E engineering, Tom created Athletes To Industry to bring the same structured recruitment process to athletes leaving sport. He leads the programme directly, with a hands-on role in the first ninety days of every athlete’s transition.',
  },
  {
    name: 'Lucinda Reader',
    role: 'Programme Lead — Athletes To Industry',
    short:
      'Lucinda Reader is the Programme Lead. She runs the front end of every athlete’s pathway: screening, onboarding and the workshop programme.',
    long: 'Lucinda Reader is the Programme Lead for Athletes To Industry. She works alongside Tom across the first stage of every athlete’s pathway: screening calls, onboarding onto The People System, and the workshop programme that takes athletes from CV writing through to live employer introductions. Lucinda is the operational backbone of the programme.',
  },
  {
    name: 'Athletes To Industry',
    role: 'The programme',
    short:
      'A 12-month structured career transition programme for elite athletes leaving sport. Created and led by Tom Andrews. Operated by Andrews Recruitment Group.',
    long: 'Athletes To Industry is a 12-month structured career transition programme for athletes leaving the elite sporting pathway. The programme places athletes into permanent industry roles or apprenticeships, with industry-recognised certifications and a written 12-month development plan agreed at offer stage. The first ninety days are owned end-to-end by Andrews Recruitment Group; from Month 6 the development plan is co-owned with the employer. The programme is powered by The People System, a talent and development platform built and owned by Andrews Recruitment Group. The pilot launches with Old Albanian RFC.',
  },
];

const assets: {
  label: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
}[] = [
  {
    label: 'Brand mark (PNG)',
    description:
      'Primary Athletes To Industry logo. Use on dark backgrounds. Keep clear space around the mark equal to the height of the letterform.',
    href: A2I_LOGO_URL,
    cta: 'Download PNG',
    external: true,
  },
  {
    label: 'Programme one-pager',
    description:
      'Full one-pager covering the brief, the long-form story, the pathway and the facts. Print to PDF for partner marketing teams and journalists.',
    href: '/partner-toolkit',
    cta: 'Open one-pager',
  },
  {
    label: 'AI / search factsheet',
    description:
      'Long-form plain-text factsheet for AI engines, voice assistants and structured citation. Includes key facts, pathway, partners and group structure.',
    href: '/llms-full.txt',
    cta: 'Open factsheet',
    external: true,
  },
  {
    label: 'FAQ',
    description:
      'Common questions about the programme: who it is for, how it works, and how athletes, employers, clubs and trainers get involved.',
    href: '/faq',
    cta: 'Read the FAQ',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['WebPage', 'AboutPage'],
      '@id': 'https://athletestoindustry.co.uk/press#webpage',
      url: 'https://athletestoindustry.co.uk/press',
      name: 'Athletes To Industry: Press & Media',
      description:
        'Media-ready assets, short bios and press contact for Athletes To Industry.',
      isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
      about: { '@id': 'https://athletestoindustry.co.uk/#organization' },
      inLanguage: 'en-GB',
      dateModified: PRESS_LAST_MODIFIED,
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: A2I_LOGO_URL,
        width: 512,
        height: 512,
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Press', item: 'https://athletestoindustry.co.uk/press' },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://andrews-recruitment.com/#tom-andrews',
      name: 'Tom Andrews',
      jobTitle: 'Founder and Owner',
      description: bios[0].long,
      url: 'https://andrews-recruitment.com',
      worksFor: { '@id': 'https://andrews-recruitment.com/#organization' },
    },
    {
      '@type': 'Person',
      '@id': 'https://athletestoindustry.co.uk/#lucinda-reader',
      name: 'Lucinda Reader',
      jobTitle: 'Programme Lead',
      description: bios[1].long,
      email: 'lucinda@ravellohr.co.uk',
      worksFor: { '@id': 'https://andrews-recruitment.com/#organization' },
    },
  ],
};

export default function PressPage() {
  return (
    <PageReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="hero-pad px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[900px]">
            <div data-reveal="fade">
              <SectionLabel>Press &amp; Media</SectionLabel>
            </div>
            <div data-reveal>
              <Display as="h1">
                Ready-to-use<br />
                press <GoldSpan>kit.</GoldSpan>
              </Display>
            </div>
            <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[19px] max-w-[680px]">
                Short bios, the brand mark, the programme one-pager and the long-form factsheet. Use
                what you need. For everything else,{' '}
                <Link
                  href="#press-contact"
                  className="text-cream underline underline-offset-4 decoration-[var(--gold-border)] hover:decoration-gold transition-colors"
                >
                  reach out
                </Link>
                .
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick facts ── */}
      <section
        className="section-pad-y-sm px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div data-reveal="fade">
            <SectionLabel>The numbers</SectionLabel>
          </div>
          <div data-reveal>
            <Display size="md" as="h2">
              Quick <GoldSpan>facts.</GoldSpan>
            </Display>
          </div>
          <dl
            className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: 'var(--border)' }}
            data-stagger
          >
            {facts.map((f) => (
              <div key={f.label} className="p-6 md:p-8" style={{ background: 'var(--navy)' }}>
                <dt className="font-display text-[10px] tracking-widest3 text-gold uppercase font-semibold mb-2">
                  {f.label}
                </dt>
                <dd className="font-display text-[18px] md:text-[20px] font-semibold text-cream uppercase tracking-[0.02em] leading-snug">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Bios ── */}
      <section
        className="section-pad-y-sm px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div data-reveal="fade">
            <SectionLabel>Bios</SectionLabel>
          </div>
          <div data-reveal>
            <Display size="md" as="h2">
              Short <GoldSpan>and long.</GoldSpan>
            </Display>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--border)' }} data-stagger>
            {bios.map((b) => (
              <article
                key={b.name}
                className="p-8 md:p-10 flex flex-col gap-5"
                style={{ background: 'var(--navy)' }}
              >
                <p className="font-display text-[10px] tracking-widest3 text-gold uppercase font-semibold">
                  {b.role}
                </p>
                <h3 className="font-display text-[20px] md:text-[22px] font-semibold text-cream uppercase tracking-[0.02em] leading-snug">
                  {b.name}
                </h3>
                <div>
                  <p className="font-display text-[10px] tracking-widest3 text-cream-muted uppercase font-semibold mb-2">
                    Short
                  </p>
                  <Prose className="text-[14px]">{b.short}</Prose>
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-widest3 text-cream-muted uppercase font-semibold mb-2">
                    Long
                  </p>
                  <Prose className="text-[14px]">{b.long}</Prose>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media-ready assets ── */}
      <section
        className="section-pad-y-sm px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div data-reveal="fade">
            <SectionLabel>Assets</SectionLabel>
          </div>
          <div data-reveal>
            <Display size="md" as="h2">
              Brand <GoldSpan>and copy.</GoldSpan>
            </Display>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center" data-reveal>
            <div
              className="flex items-center justify-center p-8"
              style={{ background: 'var(--cream-surface)', border: '1px solid var(--border)' }}
            >
              <Image
                src={A2I_LOGO_URL}
                alt="Athletes To Industry brand mark"
                width={140}
                height={140}
                sizes="140px"
                className="object-contain"
              />
            </div>
            <div>
              <Prose className="text-[15px] mb-2 max-w-[640px]">
                Use the gold-on-navy mark in dark contexts. Keep clear space around the mark equal
                to the height of the letterform. Asset URL is plain-text below for reference.
              </Prose>
              <p className="font-body text-[12px] text-cream-muted break-all mb-6">{A2I_LOGO_URL}</p>
            </div>
          </div>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'var(--border)' }} data-stagger>
            {assets.map((a) => (
              <li
                key={a.label}
                className="p-8 md:p-10 flex flex-col gap-4"
                style={{ background: 'var(--navy)' }}
              >
                <h3 className="font-display text-[16px] md:text-[18px] font-semibold text-cream uppercase tracking-[0.02em] leading-snug">
                  {a.label}
                </h3>
                <Prose className="text-[14px] flex-1">{a.description}</Prose>
                <div>
                  <Button
                    variant="ghost"
                    href={a.href}
                    {...(a.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {a.cta} {a.external ? '↗' : '→'}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Press contact ── */}
      <section
        id="press-contact"
        className="section-pad-y-sm px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-start">
            <div data-reveal>
              <SectionLabel>Press contact</SectionLabel>
              <Display size="md" as="h2">
                Talk to <GoldSpan>Tom.</GoldSpan>
              </Display>
              <Prose className="mt-6 text-[16px]">
                Press, speaker requests, partnership enquiries and anything else: Tom is the right
                first point of contact.
              </Prose>
            </div>
            <div
              className="p-8 md:p-10"
              style={{ background: 'var(--navy)', border: '1px solid var(--border)' }}
              data-reveal
            >
              <p className="font-display text-[10px] tracking-widest3 text-gold uppercase font-semibold mb-2">
                Founder &amp; Owner
              </p>
              <p className="font-display text-[20px] font-semibold text-cream uppercase tracking-[0.02em] mb-3 leading-snug">
                Tom Andrews
              </p>
              <a
                href="mailto:tom@andrews-recruitment.com?subject=Press%20enquiry%20%E2%80%94%20Athletes%20To%20Industry"
                className="font-body text-[15px] text-cream-muted underline underline-offset-4 decoration-[var(--gold-border)] hover:text-cream hover:decoration-gold transition-colors break-all"
              >
                tom@andrews-recruitment.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
