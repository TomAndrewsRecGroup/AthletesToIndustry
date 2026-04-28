import type { Metadata } from 'next';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Hire Former Athletes: Employer Programme',
  description:
    'Partner with Athletes To Industry to hire pre-qualified, certificated former elite athletes. Every placement comes with a written 12-month development plan. Operated by Andrews Recruitment Group.',
  alternates: { canonical: '/employers' },
};

const attributes = [
  {
    num: '01',
    title: 'High performance under pressure',
    text: 'Elite athletes have operated in high-stakes environments their entire careers. That baseline translates directly into commercial roles that demand resilience, composure, and consistent output.',
  },
  {
    num: '02',
    title: 'Coachable and structure-ready',
    text: 'Athletes are trained to receive feedback, absorb instruction, and execute within a system. The transition into a managed workplace is natural, as they are already used to performing within structures.',
  },
  {
    num: '03',
    title: 'Certificated before day one',
    text: 'Every athlete completing the programme holds relevant qualifications matched to their career path. Employers are not starting from zero on training. The groundwork is done before the placement lands.',
  },
  {
    num: '04',
    title: 'A written development plan at offer',
    text: 'The 12-month development plan is agreed between the employer and the athlete at offer stage, not after. Clear milestones, review dates, and ARG as the continuity point throughout the first year.',
  },
];

const process = [
  {
    step: '01',
    title: 'Register as an employer partner',
    text: 'Contact the team to discuss your business, the types of roles you are looking to fill, and the level of programme involvement that suits you. Employer partners gain access to The People System to manage roles, plans, and reporting.',
  },
  {
    step: '02',
    title: 'Define the roles and development structure',
    text: 'Work with ARG to set out the role profile, salary range, and the broad shape of the 12-month development plan. This is the brief Athletes To Industry matches candidates against.',
  },
  {
    step: '03',
    title: 'Meet pre-qualified athletes',
    text: 'Candidates introduced to you have completed the onboarding phase, hold relevant certifications, and have a career plan aligned to the type of role you are offering. No speculative CVs.',
  },
  {
    step: '04',
    title: 'Agree the development plan at offer',
    text: 'At offer stage, the 12-month development plan is finalised with the athlete and countersigned by the employer. ARG facilitates the Month 3, Month 6, and Month 12 reviews throughout the first year.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://athletestoindustry.co.uk/employers#webpage',
      url: 'https://athletestoindustry.co.uk/employers',
      name: 'Hire Former Athletes: Employer Programme',
      description:
        'Partner with Athletes To Industry to hire pre-qualified, certificated former elite athletes. Every placement comes with a written 12-month development plan. Operated by Andrews Recruitment Group.',
      isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Employers', item: 'https://athletestoindustry.co.uk/employers' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://athletestoindustry.co.uk/employers#service',
      name: 'Athletes To Industry: Employer Programme',
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
      description:
        'Pre-qualified former elite athletes placed into permanent roles with certificated training and a written 12-month development plan.',
      serviceType: 'Recruitment and career transition',
      areaServed: 'GB',
      url: 'https://athletestoindustry.co.uk/employers',
    },
  ],
};

export default function EmployersPage() {
  return (
    <PageReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="min-h-[70vh] flex items-center pt-44 pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[900px]">
            <div data-reveal="fade">
              <SectionLabel>Hire Former Elite Athletes: Employer Partner Programme</SectionLabel>
            </div>
            <div data-reveal>
              <Display>
                Athletes who<br />perform on <GoldSpan>day one.</GoldSpan>
              </Display>
            </div>
            <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[19px] max-w-[680px]">
                Athletes To Industry places pre-qualified former elite athletes into permanent roles and
                apprenticeships with employer partners. Every placement includes certificated training and a
                written 12-month development plan agreed at offer stage. Operated by Andrews Recruitment Group.
              </Prose>
            </div>
            <div className="flex gap-4 flex-wrap mt-10" data-reveal="fade">
              <Button href="/contact">Become an employer partner</Button>
              <Button variant="ghost" href="/programme">How the programme works</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why athletes ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 max-w-[720px]" data-reveal>
            <SectionLabel>Why hire through Athletes To Industry</SectionLabel>
            <Display size="lg" as="h2">
              What athletes<br />bring to <GoldSpan>your team.</GoldSpan>
            </Display>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mosaic-grid" data-stagger>
            {attributes.map((item) => (
              <div key={item.num} className="mosaic-cell p-10 md:p-12">
                <p className="font-display text-sm text-gold tracking-widest2 mb-6 font-semibold">{item.num}</p>
                <h3 className="font-display text-xl font-semibold text-cream uppercase tracking-[0.02em] mb-4 leading-snug">
                  {item.title}
                </h3>
                <Prose className="text-[15px]">{item.text}</Prose>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 max-w-[720px]" data-reveal>
            <SectionLabel>How employer partnership works</SectionLabel>
            <Display size="lg" as="h2">
              Four steps from<br /><GoldSpan>brief to placement.</GoldSpan>
            </Display>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
            {process.map((item) => (
              <div
                key={item.step}
                className="p-10 md:p-12"
                style={{ background: 'var(--navy)' }}
                data-reveal
              >
                <p className="font-display text-[11px] text-gold tracking-widest3 mb-4 font-semibold">
                  STEP {item.step}
                </p>
                <h3 className="font-display text-[22px] font-semibold text-cream uppercase tracking-[0.02em] mb-4 leading-snug">
                  {item.title}
                </h3>
                <Prose className="text-[15px]">{item.text}</Prose>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development plan callout ── */}
      <section
        className="px-6 md:px-12 pb-24"
      >
        <div className="max-w-[1280px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-14 p-10 md:p-14 items-center"
            style={{
              background: 'var(--gold-surface)',
              border: '1px solid var(--gold-border)',
            }}
            data-reveal
          >
            <div>
              <p className="font-display text-[11px] text-cream-muted tracking-widest3 mb-3 font-semibold">INCLUDED</p>
              <p className="font-display text-[56px] font-semibold text-gold leading-none">12</p>
              <p className="text-[12px] tracking-widest2 text-cream-muted uppercase mt-2 font-medium">
                Month development plan
              </p>
            </div>
            <div>
              <h3 className="font-display text-[28px] font-semibold text-cream uppercase tracking-[0.02em] mb-4">
                Every placement includes a written plan.
              </h3>
              <Prose className="text-[16px] mb-6">
                The 12-month development plan is not an onboarding document. It is a binding commitment agreed
                between the employer and the athlete at offer stage. It sets milestones, training obligations,
                and review dates. ARG facilitates every formal review and stays involved throughout.
              </Prose>
              <Button href="/contact">Talk to the team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── The System ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
        data-reveal
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <SectionLabel>Powered by The People System</SectionLabel>
            <Display size="md" as="h2">
              One platform.<br />Every <GoldSpan>touchpoint.</GoldSpan>
            </Display>
            <Prose className="mt-6 text-[16px] mb-8">
              Employer partners access The People System to manage roles, review athlete profiles, track
              development plan milestones, and access reporting throughout the placement year. Built and owned
              by Andrews Recruitment Group.
            </Prose>
            <Button variant="ghost" href="/system">About The People System</Button>
          </div>
          <div
            className="p-10 md:p-12 space-y-6"
            style={{ background: 'var(--navy)', border: '1px solid var(--border)' }}
          >
            {[
              'Role and vacancy management',
              'Athlete profile and progress tracking',
              'Development plan milestones',
              'Training course directory',
              'Monthly and annual reporting',
              'Direct ARG contact at every review',
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-4">
                <span className="block w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                <p className="font-body text-[15px] text-cream-muted">{feat}</p>
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
              Ready to hire?
            </p>
            <p className="font-display text-[28px] font-semibold text-cream uppercase tracking-[0.02em]">
              Become an employer partner.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button href="/contact">Get in touch</Button>
            <Button variant="ghost" href="/faq">Read the FAQs</Button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
