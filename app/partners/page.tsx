import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Programme Partners',
  description:
    'The organisations behind Athletes To Industry: Andrews Recruitment Group, The People System, RecXchange, Old Albanian RFC, Lighthouse Safety Training, and KRA Brown Group.',
  alternates: { canonical: '/partners' },
};

type Partner = {
  name: string;
  role: string;
  href: string;
  logoUrl: string; // Replace with real logo URL when available
  bio: string;
};

const partners: Partner[] = [
  {
    name: 'Andrews Recruitment Group',
    role: 'Operating Partner',
    href: 'https://andrews-recruitment.com',
    logoUrl: '', // TODO: replace with real logo URL
    bio: 'Andrews Recruitment Group is the business behind Athletes To Industry. Founded by Tom Andrews, ARG is a UK specialist recruitment practice with direct experience placing people across mental health, building materials, industrial engineering, and M&E engineering. The programme is owned, operated, and run by the ARG team from Week 1 through to Month 12.',
  },
  {
    name: 'The People System',
    role: 'Technology Platform',
    href: 'https://thepeoplesystem.co.uk',
    logoUrl: '', // TODO: replace with real logo URL
    bio: 'The People System is the talent and development platform that powers Athletes To Industry. Built and owned by Andrews Recruitment Group, it is the single portal where athletes build profiles, employers list roles with development plans, trainers publish accredited courses, and partners track programme progress. Everything in one place, nothing in an inbox.',
  },
  {
    name: 'RecXchange',
    role: 'Recruitment Network',
    href: 'https://recxchange.io',
    logoUrl: '', // TODO: replace with real logo URL
    bio: 'RecXchange is a global recruiter collaboration network connecting thousands of specialist recruiters across sectors and geographies. As a network partner, RecXchange extends the reach of Athletes To Industry beyond the ARG client base, opening placement opportunities across a wider range of employers and industries for athletes in the programme.',
  },
  {
    name: 'Old Albanian RFC',
    role: 'Athlete Provider',
    href: 'https://www.oarugby.com',
    logoUrl: '', // TODO: replace with real logo URL
    bio: 'Old Albanian Rugby Football Club is a rugby union club based in St Albans, Hertfordshire. As the pilot club partner for Athletes To Industry, Old Albanian provides the first cohort of athletes into the programme, including players leaving the academy and senior squad. The club is the first in what will become a broader network of sport and governing body partners.',
  },
  {
    name: 'Lighthouse Safety Training',
    role: 'Training Partner',
    href: 'https://www.lighthousesafety.co.uk',
    logoUrl: '', // TODO: replace with real logo URL
    bio: 'Lighthouse Safety Training is a UK-based health, safety, and environmental training provider established in 2004, accredited by CITB, NEBOSH, IOSH, and Qualsafe. As a training partner, Lighthouse delivers certificated industry courses to athletes through The People System at zero cost to the athlete, building the qualifications employers need to see before day one.',
  },
  {
    name: 'KRA Brown Group',
    role: 'Employer Partner',
    href: 'https://krabrown.co.uk',
    logoUrl: '', // TODO: replace with real logo URL
    bio: 'KRA Brown Group is a family-run industrial electrical engineering business with over 29 years of experience in the aggregate, asphalt, and concrete sectors. With 40+ engineers across 150+ sites nationwide, KRA Brown is an employer partner providing structured placement opportunities for athletes making the move into technical and industrial careers.',
  },
];

const portalGroups = [
  {
    group: 'Athletes',
    desc: 'Build their profile, track their pathway, access certificated training, and view their 12-month development plan from Week 1 through to their first anniversary in role.',
  },
  {
    group: 'Employers',
    desc: 'Post roles with written development plans attached, review matched athlete profiles, and track progress from initial introduction through interview, trial, and onboarding.',
  },
  {
    group: 'Trainers',
    desc: 'List accredited courses on the platform, receive matched athlete referrals from ARG, and report completions and certifications back into the athlete record.',
  },
  {
    group: 'Partners',
    desc: 'Monitor programme performance, cohort progress, and placement outcomes through shared reporting across the full operating cycle.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://athletestoindustry.co.uk/partners#webpage',
      url: 'https://athletestoindustry.co.uk/partners',
      name: 'Programme Partners | Athletes To Industry',
      description:
        'The organisations behind Athletes To Industry: operating partner, technology platform, training providers, employer partners, and athlete providers.',
      isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Partners', item: 'https://athletestoindustry.co.uk/partners' },
        ],
      },
    },
  ],
};

export default function PartnersPage() {
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
              <SectionLabel>Programme Partners</SectionLabel>
            </div>
            <div data-reveal>
              <Display>
                The people<br />behind the <GoldSpan>programme.</GoldSpan>
              </Display>
            </div>
            <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[19px] max-w-[680px]">
                Athletes To Industry is built on a network of operating, technology, training, and employer partners.
                Each plays a specific role. All of them connect through{' '}
                <Link
                  href="https://thepeoplesystem.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream underline underline-offset-4 decoration-[var(--gold-border)] hover:decoration-gold transition-colors"
                >
                  The People System
                </Link>
                , ensuring athletes, employers, trainers, and partners are always working from the same platform.
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner cards ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'var(--border)' }}
            data-stagger
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="p-10 md:p-12 flex flex-col gap-5"
                style={{ background: 'var(--navy)' }}
              >
                {/* Logo / placeholder */}
                <div className="h-10 flex items-center mb-1">
                  {partner.logoUrl ? (
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={140}
                      height={40}
                      className="object-contain object-left max-h-10 w-auto opacity-80"
                    />
                  ) : (
                    <div
                      className="inline-flex items-center px-3 py-1.5"
                      style={{ border: '1px dashed var(--border)' }}
                    >
                      <span className="font-display text-[10px] tracking-widest2 text-cream-muted uppercase font-medium opacity-50">
                        Logo
                      </span>
                    </div>
                  )}
                </div>

                {/* Role */}
                <p className="font-display text-[11px] tracking-widest2 text-gold uppercase font-semibold">
                  {partner.role}
                </p>

                {/* Name */}
                <h3 className="font-display text-[20px] font-semibold text-cream uppercase tracking-[0.02em] leading-snug">
                  {partner.name}
                </h3>

                {/* Bio */}
                <Prose className="text-[14px] flex-1">{partner.bio}</Prose>

                {/* External link */}
                <Link
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[12px] tracking-widest2 text-gold uppercase font-semibold hover:text-gold-bright transition-colors duration-200 mt-auto inline-flex items-center gap-1.5"
                >
                  Visit website ↗
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── One portal, four groups ── */}
      <section
        className="py-32 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 max-w-[720px]" data-reveal>
            <SectionLabel>One portal, four groups</SectionLabel>
            <Display size="lg" as="h2">
              Everyone in the<br />same <GoldSpan>system.</GoldSpan>
            </Display>
            <Prose className="mt-8 text-[17px]">
              The People System is the portal that brings the entire programme together. Athletes, employers, trainers,
              and partners all operate through the same platform, managed by Andrews Recruitment Group, so nothing
              falls through the gap and every stakeholder has visibility of what matters to them.
            </Prose>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'var(--border)' }}
            data-stagger
          >
            {portalGroups.map((item) => (
              <div key={item.group} className="p-8 md:p-10" style={{ background: 'var(--navy)' }}>
                <p className="font-display text-[11px] text-gold tracking-widest3 font-semibold uppercase mb-4">
                  {item.group}
                </p>
                <Prose className="text-[14px]">{item.desc}</Prose>
              </div>
            ))}
          </div>

          <div className="mt-12" data-reveal="fade">
            <Button
              variant="ghost"
              href="https://thepeoplesystem.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore The People System ↗
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-32 px-6 md:px-12 text-center"
        style={{ borderTop: '1px solid var(--border)' }}
        data-reveal
      >
        <div className="max-w-[720px] mx-auto">
          <SectionLabel>Join the network</SectionLabel>
          <Display size="md" as="h2">
            Clubs, employers,<br />trainers. <GoldSpan>Get involved.</GoldSpan>
          </Display>
          <Prose className="mt-8 mb-12 text-[17px] mx-auto" style={{ maxWidth: '560px' }}>
            Whether you run a sports club, a business looking to hire athletes, or a training organisation,
            get in touch to find out how you fit into the programme.
          </Prose>
          <Button href="/get-involved">Get involved</Button>
        </div>
      </section>
    </PageReveal>
  );
}
