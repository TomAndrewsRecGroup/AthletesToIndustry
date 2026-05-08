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
  title: 'Partner Marketing One-Pager',
  description:
    'Athletes To Industry partner marketing one-pager. Brand mark and download link, the brief, the full story, key facts and team contacts. Print to PDF for partner marketing teams.',
  alternates: { canonical: '/partner-toolkit' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: 'Athletes To Industry: Partner Marketing One-Pager',
    description:
      'Brand mark, headline copy and the full story for partner marketing teams. Print to PDF.',
    url: '/partner-toolkit',
    type: 'article',
  },
};

const TOOLKIT_LAST_MODIFIED = '2026-05-08T00:00:00Z';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['WebPage', 'AboutPage'],
      '@id': 'https://athletestoindustry.co.uk/partner-toolkit#webpage',
      url: 'https://athletestoindustry.co.uk/partner-toolkit',
      name: 'Athletes To Industry: Partner Marketing One-Pager',
      description:
        'Partner marketing one-pager for Athletes To Industry. Brand mark and download link, the brief, the full story, key facts and team contacts.',
      isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
      about: { '@id': 'https://athletestoindustry.co.uk/#organization' },
      inLanguage: 'en-GB',
      dateModified: TOOLKIT_LAST_MODIFIED,
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: A2I_LOGO_URL,
        width: 512,
        height: 512,
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '[data-stagger] p'],
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Partner Toolkit', item: 'https://athletestoindustry.co.uk/partner-toolkit' },
        ],
      },
      mainEntity: { '@id': 'https://athletestoindustry.co.uk/#organization' },
    },
    {
      '@type': 'DigitalDocument',
      '@id': 'https://athletestoindustry.co.uk/partner-toolkit#document',
      name: 'Athletes To Industry brand mark',
      description: 'Athletes To Industry primary brand mark, PNG.',
      url: A2I_LOGO_URL,
      encodingFormat: 'image/png',
      author: { '@id': 'https://ivylens.co.uk/amivy-designs#organization' },
      copyrightHolder: { '@id': 'https://andrews-recruitment.com/#organization' },
      isAccessibleForFree: true,
    },
  ],
};

const facts: { label: string; value: string }[] = [
  { label: 'Programme length', value: '12 months' },
  { label: 'Cost to athletes', value: '£0' },
  { label: 'Operated by', value: 'Andrews Recruitment Group' },
  { label: 'Founder & Owner', value: 'Tom Andrews' },
  { label: 'Platform', value: 'The People System' },
  { label: 'Pilot club', value: 'Old Albanian RFC' },
  { label: 'Country', value: 'United Kingdom' },
  { label: 'Sports', value: 'All' },
];

export default function PartnerToolkitPage() {
  return (
    <PageReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Print fallback: static gold gradient sits behind page when WebGL doesn't print. */}
      <div aria-hidden className="iris-print-fallback" />

      <article className="one-pager">
        {/* ── Hero ── */}
        <section className="hero-pad px-6 md:px-12">
          <div className="max-w-[1280px] mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-[820px]">
                <div data-reveal="fade">
                  <SectionLabel>Partner Marketing One-Pager</SectionLabel>
                </div>
                <div data-reveal>
                  <Display as="h1">
                    Sport ends.<br />
                    Careers <GoldSpan>don&rsquo;t have to.</GoldSpan>
                  </Display>
                </div>
                <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
                <div data-reveal>
                  <Prose className="text-[19px] max-w-[680px]">
                    A 12-month programme that walks athletes leaving sport into a real career,
                    with real qualifications and a real recruiter. Free to athletes. Operated by{' '}
                    <Link
                      href="https://andrews-recruitment.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream underline underline-offset-4 decoration-[var(--gold-border)] hover:decoration-gold transition-colors"
                    >
                      Andrews Recruitment Group
                    </Link>
                    . Powered by{' '}
                    <Link
                      href="https://thepeoplesystem.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream underline underline-offset-4 decoration-[var(--gold-border)] hover:decoration-gold transition-colors"
                    >
                      The People System
                    </Link>
                    .
                  </Prose>
                </div>
              </div>

              <p className="font-display text-[10px] tracking-widest3 text-cream-muted uppercase font-medium opacity-70 print:opacity-100 self-end">
                For partner marketing teams · v1.0
              </p>
            </div>
          </div>
        </section>

        {/* ── Brand assets ── */}
        <section
          className="section-pad-y-sm px-6 md:px-12"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-[1280px] mx-auto">
            <div data-reveal="fade">
              <SectionLabel>Brand mark</SectionLabel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-center" data-reveal>
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
                <h2 className="font-display text-[24px] md:text-[28px] font-semibold text-cream uppercase tracking-[0.02em] mb-3 leading-snug">
                  Athletes To Industry
                </h2>
                <Prose className="text-[15px] mb-6 max-w-[640px]">
                  Use the gold-on-navy mark in dark contexts. The full asset pack lives at the
                  link below. Please keep clear space around the mark equal to the height of the
                  letterform.
                </Prose>
                <div className="flex flex-wrap gap-4 print:hidden">
                  <Button
                    href={A2I_LOGO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download logo (PNG)
                  </Button>
                  <Button
                    variant="ghost"
                    href="https://athletestoindustry.co.uk/partner-toolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Asset pack
                  </Button>
                </div>
                <p className="mt-4 font-body text-[12px] text-cream-muted hidden print:block">
                  Logo: {A2I_LOGO_URL}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The brief ── */}
        <section
          className="section-pad-y-sm px-6 md:px-12"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-[1080px] mx-auto">
            <div data-reveal="fade">
              <SectionLabel>The brief</SectionLabel>
            </div>
            <div data-reveal>
              <Display size="md" as="h2">
                In a <GoldSpan>paragraph.</GoldSpan>
              </Display>
            </div>
            <div data-reveal>
              <Prose className="mt-8 text-[18px] max-w-[820px]">
                The end of a sporting career arrives faster than anyone wants to admit. Released
                academy players at seventeen. Semi-pros whose bodies have had enough at twenty-eight.
                Retired pros at thirty-two who are fit, sharp, and quietly worried that the only
                thing they know is how to play. Athletes To Industry is for that moment. A 12-month
                programme that takes athletes from the dressing room to a permanent industry role,
                with the qualifications, the development plan and the recruiter to make it stick.
              </Prose>
            </div>
          </div>
        </section>

        {/* ── The long story ── */}
        <section
          className="section-pad-y-sm px-6 md:px-12"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-[1080px] mx-auto">
            <div data-reveal="fade">
              <SectionLabel>The full story</SectionLabel>
            </div>
            <div data-reveal>
              <Display size="md" as="h2">
                Built for performance.<br />
                Performing for a <GoldSpan>career.</GoldSpan>
              </Display>
            </div>
            <div className="mt-8 max-w-[820px] space-y-5" data-stagger>
              <Prose className="text-[16px]">
                Athletes To Industry is a structured 12-month career transition programme. Two
                cohorts, one model. Athletes leaving the elite pathway, placed into permanent
                industry roles. Apprenticeship-ready young players, placed into trainee positions
                in parallel with their playing. Same pathway, same care.
              </Prose>
              <Prose className="text-[16px]">
                The first ninety days are owned end-to-end by Andrews Recruitment Group. Screening
                calls. Onboarding onto The People System. Workshops on CV, interview, job search
                and digital fluency. Industry-recognised certifications delivered free, by partners
                like NEBOSH Gold Learning Partner Lighthouse Safety. Then live introductions to
                employers who have signed up to the model, and a written 12-month development plan
                agreed at offer stage.
              </Prose>
              <Prose className="text-[16px]">
                From month six the development plan is co-owned with the employer. ARG stays in
                the room as the continuity point through the full first year. No CV pile. No job
                board. No drift.
              </Prose>
              <Prose className="text-[16px]">
                The infrastructure is The People System. Athletes build profiles. Employers list
                roles with development plans attached. Trainers publish accredited courses. Partners
                track outcomes. Everyone in one portal.
              </Prose>
              <Prose className="text-[16px]">
                Athletes To Industry was created and is led by Tom Andrews, Founder and Owner of
                Andrews Recruitment Group, The People System, RecXchange and IvyLens. The model is
                built on years of recruitment delivery, not a deck.
              </Prose>
              <Prose className="text-[16px]">
                Free to athletes. Funded by employer and partner fees. Piloted with Old Albanian
                RFC. Designed to roll out across rugby, football, cricket, athletics and beyond.
              </Prose>
              <Prose className="text-[17px] font-medium" style={{ color: 'var(--cream)' }}>
                Athletes built for performance. Now performing for a career.
              </Prose>
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

        {/* ── Contact ── */}
        <section
          className="section-pad-y-sm px-6 md:px-12"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-start">
              <div data-reveal>
                <SectionLabel>Talk to the team</SectionLabel>
                <Display size="md" as="h2">
                  Get in <GoldSpan>touch.</GoldSpan>
                </Display>
                <Prose className="mt-6 text-[16px]">
                  For partnership, programme and press enquiries, reach out directly. Tom and Lucy
                  are the right people to speak to.
                </Prose>
              </div>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-px"
                style={{ background: 'var(--border)' }}
                data-stagger
              >
                <div className="p-6 md:p-8" style={{ background: 'var(--navy)' }}>
                  <p className="font-display text-[10px] tracking-widest3 text-gold uppercase font-semibold mb-2">
                    Founder & Owner
                  </p>
                  <p className="font-display text-[18px] font-semibold text-cream uppercase tracking-[0.02em] mb-3 leading-snug">
                    Tom Andrews
                  </p>
                  <a
                    href="mailto:tom@andrews-recruitment.com"
                    className="font-body text-[14px] text-cream-muted underline underline-offset-4 decoration-[var(--gold-border)] hover:text-cream hover:decoration-gold transition-colors break-all"
                  >
                    tom@andrews-recruitment.com
                  </a>
                </div>
                <div className="p-6 md:p-8" style={{ background: 'var(--navy)' }}>
                  <p className="font-display text-[10px] tracking-widest3 text-gold uppercase font-semibold mb-2">
                    Programme Lead
                  </p>
                  <p className="font-display text-[18px] font-semibold text-cream uppercase tracking-[0.02em] mb-3 leading-snug">
                    Lucinda Reader
                  </p>
                  <a
                    href="mailto:lucinda@ravellohr.co.uk"
                    className="font-body text-[14px] text-cream-muted underline underline-offset-4 decoration-[var(--gold-border)] hover:text-cream hover:decoration-gold transition-colors break-all"
                  >
                    lucinda@ravellohr.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── One-pager footer (visible in print) ── */}
        <section
          className="px-6 md:px-12 py-8 print:py-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4">
            <p className="font-body text-[11px] text-cream-muted tracking-[0.05em]">
              athletestoindustry.co.uk · Created and led by Tom Andrews · Operated by Andrews Recruitment Group
            </p>
            <p className="font-body text-[11px] text-cream-muted tracking-[0.05em]">
              Designed and built by AMIVY Designs (IvyLens group)
            </p>
          </div>
        </section>

        {/* ── Save-as-PDF helper (screen only) ── */}
        <div className="no-print px-6 md:px-12 pb-16 sm:pb-24 md:pb-32">
          <div className="max-w-[1280px] mx-auto mt-8">
            <div
              className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              style={{ background: 'var(--gold-surface)', border: '1px solid var(--gold-border)' }}
              data-reveal="fade"
            >
              <div>
                <p className="font-display text-[10px] tracking-widest3 text-gold uppercase font-semibold mb-2">
                  Export to PDF
                </p>
                <p className="font-body text-[14px] text-cream-muted">
                  Press <kbd className="px-1.5 py-0.5 mx-0.5 rounded text-cream" style={{ background: 'rgba(243,236,216,0.08)', border: '1px solid var(--border)' }}>⌘</kbd>
                  /
                  <kbd className="px-1.5 py-0.5 mx-0.5 rounded text-cream" style={{ background: 'rgba(243,236,216,0.08)', border: '1px solid var(--border)' }}>Ctrl</kbd>
                  +
                  <kbd className="px-1.5 py-0.5 mx-0.5 rounded text-cream" style={{ background: 'rgba(243,236,216,0.08)', border: '1px solid var(--border)' }}>P</kbd>
                  , choose <span className="text-cream">Save as PDF</span>, set background graphics to <span className="text-cream">on</span>, paper size <span className="text-cream">A4</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageReveal>
  );
}
