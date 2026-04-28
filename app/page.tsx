import type { Metadata } from 'next';
import Link from 'next/link';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Athlete Career Transition Programme | Athletes To Industry',
  description:
    'Athletes To Industry is a structured career transition programme for elite athletes leaving sport. Permanent roles, certificated training, and a 12-month development plan at no cost to the athlete.',
  alternates: { canonical: '/' },
};

const differentiators = [
  {
    num: '01',
    title: 'Recruitment, not referral',
    text: 'Andrews Recruitment Group is a working recruitment business, not an athlete-development agency that has bolted on placement. Athletes are taken through by recruiters who place into real sectors every week.',
  },
  {
    num: '02',
    title: 'A timed pathway',
    text: 'Week 1, Month 1, Month 3, Month 6, Month 12. Every athlete in the programme has visibility on what happens at each stage and what is expected of them. No drift.',
  },
  {
    num: '03',
    title: 'A real operating system',
    text: 'The People System is a full talent and learning platform built and owned by ARG. Athletes, employers, trainers and courses sit on it. Everyone matched, nothing lost.',
  },
  {
    num: '04',
    title: 'Wide sector range',
    text: 'Industrial, technical, commercial, financial services, trades, media, sales. The match is built for the athlete, not bent toward a predefined client list.',
  },
];

const pathway = [
  {
    when: 'WEEK 1',
    items: ['Screening call with Tom or Lucy', 'Onboarded onto The People System', 'Goals, options, expectations'],
  },
  {
    when: 'MONTH 1',
    items: ['CV writing workshop', 'Interview skills workshop', 'Job-search and tech workshops'],
  },
  {
    when: 'MONTH 2',
    items: ['Certificated training', 'Delivered by trusted partners', 'At zero cost to the athlete'],
  },
  {
    when: 'MONTH 3',
    items: ['Client introductions live', 'Interviews scheduled', 'First trial days arranged'],
  },
  {
    when: 'MONTH 6',
    items: ['Placement embedded', 'Development plan agreed', 'Ongoing employer support'],
  },
  {
    when: 'MONTH 12',
    items: ['Twelve-month review', 'Career progression check-in', 'Programme alumni network'],
  },
];

const partners = [
  {
    num: '01',
    title: 'Athletes',
    text: 'Released academy players, retiring semi-pros, retiring professionals, and those returning from injury or ending a competitive career.',
    href: '/get-involved',
  },
  {
    num: '02',
    title: 'Employers',
    text: 'Businesses across multiple sectors who want to hire with intent and offer a structured development plan, not just a job offer.',
    href: '/get-involved',
  },
  {
    num: '03',
    title: 'Clubs and bodies',
    text: 'Sports clubs, academies, governing bodies and player welfare organisations who refer athletes into the programme and stay close as the continuity point.',
    href: '/get-involved',
  },
  {
    num: '04',
    title: 'Trainers',
    text: 'Specialist training providers offering CV, interview, leadership, technical, vocational and safety qualifications, all delivered through the programme.',
    href: '/get-involved',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://athletestoindustry.com/#webpage',
      url: 'https://athletestoindustry.com/',
      name: 'Athletes To Industry: Athlete Career Transition Programme',
      description:
        'A structured career transition programme for elite athletes leaving sport. Permanent roles, certificated training, and a 12-month development plan at no cost to the athlete.',
      isPartOf: { '@id': 'https://athletestoindustry.com/#website' },
      about: { '@id': 'https://athletestoindustry.com/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.com/' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://athletestoindustry.com/#service',
      name: 'Athletes To Industry Career Transition Programme',
      description:
        'A structured 12-month career transition service for elite athletes leaving sport. Includes career planning, certificated training, employer introductions, and a written development plan.',
      provider: {
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
      },
      serviceType: 'Athlete career transition and recruitment',
      areaServed: 'GB',
      url: 'https://athletestoindustry.com',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
        description: 'Free to athletes. Employer and partner fees fund the programme.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <PageReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center pt-40 pb-20 px-6 md:px-12 relative">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[900px]">
            <div data-reveal="fade">
              <SectionLabel>Athlete Career Transition Programme, Andrews Recruitment Group</SectionLabel>
            </div>
            <div data-reveal>
              <Display>
                You&rsquo;ve trained<br />
                your whole <GoldSpan>life.</GoldSpan><br />
                Now what?
              </Display>
            </div>
            <span className="gold-line mt-12 mb-12 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[20px] max-w-[680px]">
                Athletes To Industry is a{' '}
                <Link href="/programme" className="text-cream underline underline-offset-4 decoration-[var(--gold-border)] hover:decoration-gold transition-colors">structured career programme</Link>
                {' '}for athletes moving out of the elite pathway.
                Built for the released academy player at 17 and the retiring pro at 32. Across rugby, football,
                cricket, athletics, and every sport in between. Real career planning, real training, real
                introductions, all run on{' '}
                <Link href="/system" className="text-cream underline underline-offset-4 decoration-[var(--gold-border)] hover:decoration-gold transition-colors">a platform built for this</Link>
                {' '}designed to support people through the move from sport into a working life that lasts.
              </Prose>
            </div>
            <div className="flex flex-wrap gap-4 mt-14" data-reveal="fade">
              <Button href="/programme">Explore the programme</Button>
              <Button variant="ghost" href="/contact">Get in touch</Button>
            </div>
          </div>
        </div>

        <p
          className="absolute bottom-10 left-6 md:left-12 text-[10px] tracking-widest3 text-cream-muted uppercase"
          aria-label="Programme operator and pilot partner"
        >
          Operated by Andrews Recruitment Group · Pilot partner Old Albanian RFC
        </p>
      </section>

      {/* ── Why this exists ── */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="max-w-[1080px] mx-auto">
          <div data-reveal="fade">
            <SectionLabel>Why this exists</SectionLabel>
          </div>
          <div data-reveal>
            <Display size="lg" as="h2">
              Leaving elite sport<br />is rarely<br /><GoldSpan>well-handled.</GoldSpan>
            </Display>
          </div>
          <div className="max-w-[720px] mt-12 space-y-6" data-stagger>
            <Prose className="text-[18px]">
              A seventeen-year-old who has chased a contract for a decade, told they have not been picked up. A
              semi-pro in their late twenties whose body will not take another season. A retiring professional at
              thirty-two, physically fit, sharp, and quietly worried that the only thing they know how to do is play.
            </Prose>
            <Prose className="text-[18px]">
              Most athletes leave the game with a CV that does not reflect them, a professional network that does not
              exist outside their sport, and an identity that has lived inside one discipline for as long as they can
              remember.
            </Prose>
            <Prose className="text-[18px]">
              Athletes To Industry exists because being a great athlete and being a stranger to the working world
              should not be the same thing. We do not place athletes into jobs. We help them build the next career
              properly, with structure, support, and a real human running it.
            </Prose>
          </div>
        </div>
      </section>

      {/* ── Two cohorts ── */}
      <section
        className="py-32 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 max-w-[720px]" data-reveal>
            <SectionLabel>Who the programme is built for</SectionLabel>
            <Display size="lg" as="h2">
              Two cohorts.<br /><GoldSpan>One</GoldSpan> programme.
            </Display>
            <Prose className="mt-8">
              The programme is built around athletes leaving the elite pathway. A second, smaller cohort sits
              alongside them: young players who are still chasing the dream but ready to start an apprenticeship in
              parallel.
            </Prose>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger>
            {/* Cohort 01 */}
            <div className="cohort-card-primary relative p-10 md:p-12">
              <span
                className="absolute top-5 right-6 text-[10px] tracking-[0.25em] text-gold font-semibold"
                aria-hidden="true"
              >
                PRIMARY
              </span>
              <p className="font-display text-xs text-gold tracking-[0.25em] mb-4 font-semibold">COHORT 01</p>
              <h3 className="font-display text-[28px] font-semibold text-cream uppercase tracking-[0.02em] leading-[1.1] mb-5">
                Athletes leaving the elite pathway
              </h3>
              <Prose className="text-[15px] mb-6">
                Released academy players, retiring semi-pros, retiring professionals, and athletes returning from
                injury or ending a competitive career. The credibility core of the programme.
              </Prose>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                <p className="text-[11px] text-gold tracking-widest2 mb-3 font-semibold uppercase">Placement target</p>
                <p className="text-cream-muted text-sm">
                  Permanent roles into industry, with a written 12-month development plan agreed at offer stage.
                </p>
              </div>
            </div>

            {/* Cohort 02 */}
            <div className="cohort-card-secondary p-10 md:p-12">
              <p className="font-display text-xs text-gold tracking-[0.25em] mb-4 font-semibold">COHORT 02</p>
              <h3 className="font-display text-[28px] font-semibold text-cream uppercase tracking-[0.02em] leading-[1.1] mb-5">
                Apprenticeship-ready young players
              </h3>
              <Prose className="text-[15px] mb-6">
                Young players still chasing a professional contract who want to start a real career in parallel. The
                programme runs alongside their playing, not in place of it.
              </Prose>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                <p className="text-[11px] text-gold tracking-widest2 mb-3 font-semibold uppercase">Placement target</p>
                <p className="text-cream-muted text-sm">
                  Apprenticeships and trainee positions with employers committed to a structured development plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What makes it different ── */}
      <section
        className="py-32 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-20 max-w-[720px]" data-reveal>
            <SectionLabel>What makes it different</SectionLabel>
            <Display size="lg" as="h2">
              Not a job board.<br />A <GoldSpan>plan</GoldSpan> for a person.
            </Display>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mosaic-grid" data-stagger>
            {differentiators.map((item) => (
              <div key={item.num} className="mosaic-cell p-10 md:p-12">
                <p className="font-display text-sm text-gold tracking-widest2 mb-6 font-semibold">{item.num}</p>
                <h3 className="font-display text-2xl font-semibold text-cream uppercase tracking-[0.02em] mb-4">
                  {item.title}
                </h3>
                <Prose className="text-[15px]">{item.text}</Prose>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pathway preview ── */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 max-w-[720px]" data-reveal>
            <SectionLabel>The pathway, at a glance</SectionLabel>
            <Display size="lg" as="h2">
              The first ninety<br />days are <GoldSpan>ours.</GoldSpan>
            </Display>
            <Prose className="mt-8">
              Week 1 through Month 3 is owned by ARG. Screening, onboarding, workshops, introductions. From Month 6
              onwards, the development plan is co-owned with the employer the athlete has joined. A clean structure.
              A real human at every step.
            </Prose>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
            data-stagger
          >
            {pathway.map((milestone) => (
              <div
                key={milestone.when}
                className="pt-8"
                style={{ borderTop: '1px solid var(--gold)' }}
              >
                <p className="font-display text-sm font-semibold text-gold leading-none mb-5 tracking-widest2">
                  {milestone.when}
                </p>
                {milestone.items.map((item) => (
                  <Prose key={item} className="text-[14px] mt-2.5">
                    · {item}
                  </Prose>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-reveal="fade">
            <Button variant="ghost" href="/programme">
              Read the full programme →
            </Button>
          </div>
        </div>
      </section>

      {/* ── Four kinds of partner ── */}
      <section className="py-32 px-6 md:px-12" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-20 max-w-[720px]" data-reveal>
            <SectionLabel>Who is involved</SectionLabel>
            <Display size="lg" as="h2">
              Built around four<br />kinds of <GoldSpan>partner.</GoldSpan>
            </Display>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
            {partners.map((partner) => (
              <Link
                key={partner.num}
                href={partner.href}
                className="partner-card block p-10 focus-visible:outline-none"
              >
                <p className="font-display text-sm text-gold tracking-widest2 mb-6">{partner.num}</p>
                <h3 className="font-display text-[28px] font-semibold text-cream uppercase tracking-[0.02em] mb-4">
                  {partner.title}
                </h3>
                <Prose className="text-[14px]">{partner.text}</Prose>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-40 px-6 md:px-12 text-center">
        <div className="max-w-[760px] mx-auto" data-reveal>
          <Display size="lg" as="h2">
            If this lands<br />with <GoldSpan>you</GoldSpan>&hellip;
          </Display>
          <Prose className="mt-8 mb-12 text-[18px] mx-auto" style={{ maxWidth: '600px' }}>
            Whether you run a club, a business, a training organisation, or a player welfare programme, we want to
            hear from you. The model only works at scale if the right people are at the table.
          </Prose>
          <Button href="/contact">Start the conversation</Button>
        </div>
      </section>
    </PageReveal>
  );
}
