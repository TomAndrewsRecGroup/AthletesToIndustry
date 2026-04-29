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
    logoUrl: 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/ARG%20Transparent.png', // TODO: replace with real logo URL
    bio: 'Andrews Recruitment Group is the business behind Athletes To Industry. Founded by Tom Andrews, ARG is a UK specialist recruitment practice with direct experience placing people across mental health, building materials, industrial engineering, and M&E engineering. The programme is owned, operated, and run by the ARG team from Week 1 through to Month 12.',
  },
  {
    name: 'The People System',
    role: 'Technology Platform',
    href: 'https://thepeoplesystem.co.uk',
    logoUrl: 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/the%20people%20system%20%282%29.png', // TODO: replace with real logo URL
    bio: 'The People System is the talent and development platform that powers Athletes To Industry. Built and owned by Andrews Recruitment Group, it is the single portal where athletes build profiles, employers list roles with development plans, trainers publish accredited courses, and partners track programme progress. Everything in one place, nothing in an inbox.',
  },
  {
    name: 'RecXchange',
    role: 'Recruitment Network',
    href: 'https://recxchange.io',
    logoUrl: 'https://haaqtnq6favvrbuh.public.blob.vercel-storage.com/REX-Main-Logo-25.png', // TODO: replace with real logo URL
    bio: 'RecXchange is a global recruiter collaboration network connecting thousands of specialist recruiters across sectors and geographies. As a network partner, RecXchange extends the reach of Athletes To Industry beyond the ARG client base, opening placement opportunities across a wider range of employers and industries for athletes in the programme.',
  },
  {
    name: 'Old Albanian RFC',
    role: 'Athlete Provider',
    href: 'https://www.oarugby.com',
    logoUrl: 'https://img-res.pitchero.com/?url=images.pitchero.com%2Fclub_logos%2F79073%2FteCYCs5pRWWAkIStj3Vv_main-gold.png&bg=null&h=90&w=90&t=square&q=null', // TODO: replace with real logo URL
    bio: 'Old Albanian Rugby Football Club is a rugby union club based in St Albans, Hertfordshire. As the pilot club partner for Athletes To Industry, Old Albanian provides the first cohort of athletes into the programme, including players leaving the academy and senior squad. The club is the first in what will become a broader network of sport and governing body partners.',
  },
  {
    name: 'Lighthouse Safety Training',
    role: 'Training Partner',
    href: 'https://www.lighthousesafety.co.uk',
    logoUrl: 'https://www.lighthousesafety.co.uk/wp-content/uploads/2019/05/LighthouseSafety-logo02.png', // TODO: replace with real logo URL
    bio: 'Lighthouse Safety Training is a UK-based health, safety, and environmental training provider established in 2004, accredited by CITB, NEBOSH, IOSH, and Qualsafe. As a training partner, Lighthouse delivers certificated industry courses to athletes through The People System at zero cost to the athlete, building the qualifications employers need to see before day one.',
  },
  {
    name: 'KRA Brown Group',
    role: 'Employer Partner',
    href: 'https://krabrown.co.uk',
    logoUrl: 'data:image/png;base64,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', // TODO: replace with real logo URL
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
                <div className="h-16 flex items-center mb-1">
                  {partner.logoUrl ? (
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={220}
                      height={64}
                      className="object-contain object-left max-h-16 max-w-[220px] w-auto"
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
