import type { Metadata } from 'next';
import Link from 'next/link';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Athletes To Industry: Andrews Recruitment Group',
  description:
    'Athletes To Industry is operated by Andrews Recruitment Group, a UK recruitment business with a specialism in structured talent pathways. Learn about the programme, the operator, and the pilot partner.',
  alternates: { canonical: '/about' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://athletestoindustry.co.uk/about#webpage',
      url: 'https://athletestoindustry.co.uk/about',
      name: 'About Athletes To Industry: Andrews Recruitment Group',
      description:
        'Athletes To Industry is a structured career transition programme for elite athletes, operated by Andrews Recruitment Group.',
      isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://athletestoindustry.co.uk/about' },
        ],
      },
      mainEntity: {
        '@type': 'Organization',
        '@id': 'https://athletestoindustry.co.uk/#organization',
        name: 'Athletes To Industry',
        foundingDate: '2025',
        description:
          'A structured career transition programme for elite athletes leaving sport, operated by Andrews Recruitment Group.',
        founder: {
          '@type': 'Person',
          '@id': 'https://andrews-recruitment.com/#tom-andrews',
          name: 'Tom Andrews',
          jobTitle: 'Owner',
          url: 'https://andrews-recruitment.com',
          sameAs: ['https://andrews-recruitment.com'],
        },
        parentOrganization: {
          '@type': 'Organization',
          '@id': 'https://andrews-recruitment.com/#organization',
          name: 'Andrews Recruitment Group',
          url: 'https://andrews-recruitment.com',
          description:
            'A UK recruitment business specialising in structured talent pathways, placement, and workforce development. Operator of Athletes To Industry and owner of The People System talent platform.',
        },
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://andrews-recruitment.com/#tom-andrews',
      name: 'Tom Andrews',
      jobTitle: 'Owner',
      url: 'https://andrews-recruitment.com',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://andrews-recruitment.com/#organization',
        name: 'Andrews Recruitment Group',
        url: 'https://andrews-recruitment.com',
      },
      knowsAbout: ['Athlete career transition', 'Recruitment', 'Talent management', 'Career development'],
    },
  ],
};

export default function AboutPage() {
  return (
    <PageReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="min-h-[60vh] flex items-center pt-44 pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[900px]">
            <div data-reveal="fade">
              <SectionLabel>About Athletes To Industry: Andrews Recruitment Group</SectionLabel>
            </div>
            <div data-reveal>
              <Display>
                Built by people<br />who run <GoldSpan>recruitment.</GoldSpan>
              </Display>
            </div>
            <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[19px] max-w-[680px]">
                Athletes To Industry is a structured career transition programme for elite athletes leaving sport.
                It is operated by{' '}
                <Link
                  href="https://andrews-recruitment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream underline underline-offset-4 decoration-[var(--gold-border)] hover:decoration-gold transition-colors"
                >
                  Andrews Recruitment Group
                </Link>
                , founded by{' '}
                <Link
                  href="https://andrews-recruitment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream underline underline-offset-4 decoration-[var(--gold-border)] hover:decoration-gold transition-colors"
                >
                  Tom Andrews
                </Link>
                , a UK recruitment business with direct experience placing people into roles and building the
                infrastructure to support them once they are there.
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ── The problem ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div data-reveal>
            <SectionLabel>Why the programme exists</SectionLabel>
            <Display size="md" as="h2">
              The gap no one<br />was <GoldSpan>filling.</GoldSpan>
            </Display>
          </div>
          <div data-reveal>
            <Prose as="div" className="text-[17px] space-y-5">
              <p>
                When athletes leave the elite pathway (whether at 17 from an academy or at 32 from a professional
                career), they are typically well-supported in terms of welfare and identity. What they are rarely
                supported with is the practical mechanics of building a career in industry: what roles to target,
                what training they need, and how to get in front of the right employers.
              </p>
              <p>
                Existing programmes tend to stop at CV writing and interview coaching. Athletes To Industry goes
                further: it owns the first 90 days end-to-end, places athletes into real roles with real employers,
                and stays involved through a written 12-month development plan. The infrastructure that makes this
                work is The People System, a talent and learning platform built and owned by Andrews Recruitment
                Group.
              </p>
              <p>
                The programme exists because being a great athlete and being a stranger to the working world should
                not be the same thing.
              </p>
            </Prose>
          </div>
        </div>
      </section>

      {/* ── The operator ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-14 max-w-[720px]" data-reveal>
            <SectionLabel>The operating partner</SectionLabel>
            <Display size="lg" as="h2">
              Andrews<br /><GoldSpan>Recruitment Group.</GoldSpan>
            </Display>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'var(--border)' }} data-stagger>
            {[
              {
                title: 'UK recruitment specialists',
                text: 'Andrews Recruitment Group is a UK-based recruitment business placing candidates across commercial, operational, and technical roles. Athletes To Industry is an extension of that practice, applied specifically to athletes transitioning out of sport.',
              },
              {
                title: 'Owners of The People System',
                text: 'The People System is a full talent and learning platform built and owned by ARG. It manages athlete profiles, employer roles, training courses, and development plans. Athletes To Industry runs on it end to end.',
              },
              {
                title: 'Operators, not advisors',
                text: 'ARG owns the first 90 days of every athlete\'s transition, not as consultants providing advice, but as operators running the process. Career planning, training coordination, and employer introductions are all handled by the ARG team.',
              },
              {
                title: 'Continuity through the first year',
                text: 'ARG stays involved through the Month 3, Month 6, and Month 12 development plan reviews. The relationship with the athlete and the employer does not end at placement. It is designed to run through the first year in role.',
              },
            ].map((item) => (
              <div key={item.title} className="p-10 md:p-12" style={{ background: 'var(--navy)' }}>
                <h3 className="font-display text-[20px] font-semibold text-cream uppercase tracking-[0.02em] mb-4">
                  {item.title}
                </h3>
                <Prose className="text-[15px]">{item.text}</Prose>
              </div>
            ))}
          </div>
          <div className="mt-8" data-reveal="fade">
            <Button variant="ghost" href="https://andrews-recruitment.com" target="_blank" rel="noopener noreferrer">
              Visit Andrews Recruitment Group
            </Button>
          </div>
        </div>
      </section>

      {/* ── Pilot partner ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
        data-reveal
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <SectionLabel>Pilot club partner</SectionLabel>
            <Display size="md" as="h2">
              Old Albanian RFC.
            </Display>
            <Prose className="mt-6 text-[17px] mb-8">
              The programme is launching with Old Albanian Rugby Football Club as the first club partner. Old
              Albanian RFC provides the initial athlete cohort, including players leaving the academy and senior squad,
              and the club context within which the first operating cycle runs. The pilot is designed to prove
              the model at club level before broader rollout to other sports and governing bodies.
            </Prose>
            <Prose className="text-[15px]">
              Clubs and governing bodies interested in becoming programme partners should get in touch to discuss
              how the model works at club level.
            </Prose>
            <div className="mt-8">
              <Button href="/get-involved">Become a club partner</Button>
            </div>
          </div>
          <div
            className="p-10 md:p-12 space-y-8"
            style={{ background: 'var(--navy)', border: '1px solid var(--border)' }}
          >
            <p className="font-display text-[11px] text-gold tracking-widest3 font-semibold uppercase">
              What the pilot covers
            </p>
            {[
              'Full operating cycle for the first athlete cohort',
              'Career planning and onboarding for departing players',
              'Employer introductions and placement process',
              'Certificated training through The People System',
              '12-month development plans for all placed athletes',
              'Programme review and model refinement before wider rollout',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="block w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                <p className="font-body text-[15px] text-cream-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
        data-reveal
      >
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-display text-[11px] tracking-widest3 text-gold font-semibold uppercase mb-3">
              Get started
            </p>
            <p className="font-display text-[28px] font-semibold text-cream uppercase tracking-[0.02em]">
              Read the programme or get in touch.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button href="/programme">The programme</Button>
            <Button variant="ghost" href="/contact">Contact the team</Button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
