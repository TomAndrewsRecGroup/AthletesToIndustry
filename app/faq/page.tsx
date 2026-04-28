import type { Metadata } from 'next';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions: Athlete Career Transition',
  description:
    'Common questions about the Athletes To Industry programme. Who it is for, how it works, what it costs, and how athletes, employers, clubs and trainers get involved.',
  alternates: { canonical: '/faq' },
};

const faqs = [
  {
    category: 'About the programme',
    items: [
      {
        q: 'What is Athletes To Industry?',
        a: 'Athletes To Industry is a structured career transition programme for elite athletes leaving sport. Run by Andrews Recruitment Group, it takes athletes from initial career planning through to placement in a permanent role or apprenticeship, with a written 12-month development plan agreed at offer stage.',
      },
      {
        q: 'Who is the programme designed for?',
        a: 'The programme is built around two cohorts. The first is athletes leaving the elite pathway: released academy players, retiring semi-professionals, retiring professionals, and athletes returning from career-ending injury. The second is apprenticeship-ready young players still pursuing a professional contract who want to build a real career in parallel.',
      },
      {
        q: 'What sports does Athletes To Industry work with?',
        a: 'The programme is open to athletes from any sport. Initial pilot delivery is being run in partnership with Old Albanian RFC, but athletes from rugby, football, cricket, athletics, and every other sport are eligible to apply.',
      },
      {
        q: 'How long does the programme run?',
        a: 'The structured pathway runs for 12 months. The first 90 days are owned end-to-end by Andrews Recruitment Group, covering onboarding, career planning, training, and employer introductions. From Month 3, the development plan is co-owned with the employer the athlete joins. ARG remains involved as the continuity point through the full first year.',
      },
      {
        q: 'Is Athletes To Industry a job board?',
        a: 'No. Athletes To Industry is not a job board or a CV submission service. Every athlete on the programme receives individual career planning, relevant training, and direct introductions to employers who are already committed to the programme. The goal is a permanent role or apprenticeship with a written development plan, not a job listing.',
      },
    ],
  },
  {
    category: 'For athletes',
    items: [
      {
        q: 'How much does it cost for an athlete to join?',
        a: 'Nothing. The programme is free to athletes. Certificated training, career planning, employer introductions, and programme support are all delivered at no cost to the athlete. Employer and partner fees fund the programme.',
      },
      {
        q: 'What kind of roles do athletes get placed into?',
        a: 'Athletes are placed into permanent roles across a wide range of industries including commercial, operations, logistics, construction, and technology. Placements are matched to each athlete\'s skills, interests, and career plan. Young players in the second cohort are placed into apprenticeships and trainee positions that run alongside their playing.',
      },
      {
        q: 'What training is included?',
        a: 'Training is delivered through a network of specialist providers listed on The People System. Areas covered include career foundations, CV and interview preparation, leadership and commercial skills, vocational and safety qualifications, and welfare and identity support. Every athlete is matched to training that fits their specific career path, not a generic curriculum.',
      },
      {
        q: 'How do I apply as an athlete?',
        a: 'Use the Get Involved page to register your interest. Select "Athlete" as your contact type and provide a short description of your background and situation. The team will be in touch to set up an initial conversation.',
      },
    ],
  },
  {
    category: 'For employers',
    items: [
      {
        q: 'Why should employers hire through Athletes To Industry?',
        a: 'Athletes bring a measurable set of behaviours that employers consistently value: high performance under pressure, coachability, resilience, and the ability to operate within structures. Athletes To Industry pre-qualifies candidates, provides certificated training, and builds a 12-month development plan with the employer at offer stage, reducing onboarding risk and improving early-tenure retention.',
      },
      {
        q: 'What does it cost to hire through the programme?',
        a: 'Contact the team directly to discuss the employer partner structure. Fees are set in line with the placement type and the level of programme involvement. All employer partners receive access to The People System to manage roles, development plans, and reporting.',
      },
      {
        q: 'What is the 12-month development plan?',
        a: 'A written plan agreed between the employer and the athlete at offer stage. It sets out objectives, milestones, training commitments, and review points for the athlete\'s first year in role. Andrews Recruitment Group stays involved as the continuity point throughout, facilitating the Month 3, Month 6, and Month 12 reviews.',
      },
    ],
  },
  {
    category: 'For clubs and governing bodies',
    items: [
      {
        q: 'How can a rugby or football club get involved?',
        a: 'Clubs and governing bodies can partner with the programme to provide a structured career transition pathway for their players leaving the squad. As a club partner, the programme runs in your name, your players receive programme access, and ARG handles the operating infrastructure. Old Albanian RFC is the current pilot club partner.',
      },
      {
        q: 'Does the programme affect player welfare obligations?',
        a: 'Athletes To Industry is designed to complement existing player welfare frameworks, not replace them. The programme covers career planning, training, and employer introductions: the employment and transition support layer that most welfare programmes do not provide operationally.',
      },
    ],
  },
  {
    category: 'The People System',
    items: [
      {
        q: 'What is The People System?',
        a: 'The People System is a full talent and development platform built and owned by Andrews Recruitment Group. It manages athlete profiles, employer roles, training courses, and 12-month development plans in one place. Athletes To Industry runs on it end to end.',
      },
      {
        q: 'Do I need to use The People System to be on the programme?',
        a: 'Yes. The People System is the operational backbone of Athletes To Industry. Athletes, employers, and training providers all access the programme through it. It handles matching, tracking, reporting, and review at every stage of the pathway.',
      },
    ],
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://athletestoindustry.co.uk/faq#webpage',
      url: 'https://athletestoindustry.co.uk/faq',
      name: 'Frequently Asked Questions: Athlete Career Transition',
      description:
        'Common questions about the Athletes To Industry programme. Who it is for, how it works, what it costs, and how athletes, employers, clubs and trainers get involved.',
      isPartOf: { '@id': 'https://athletestoindustry.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://athletestoindustry.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://athletestoindustry.co.uk/faq' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://athletestoindustry.co.uk/faq#faqpage',
      mainEntity: faqs.flatMap((cat) =>
        cat.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        }))
      ),
    },
  ],
};

export default function FaqPage() {
  return (
    <PageReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="min-h-[50vh] flex items-center pt-44 pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[860px]">
            <div data-reveal="fade">
              <SectionLabel>Athlete Career Transition: Common Questions</SectionLabel>
            </div>
            <div data-reveal>
              <Display>
                Questions,<br /><GoldSpan>answered.</GoldSpan>
              </Display>
            </div>
            <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[19px] max-w-[680px]">
                Everything you need to know about the programme: who it is built for, what it costs, how the
                pathway works, and how to get involved as an athlete, employer, club, or training provider.
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ sections ── */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-[860px] mx-auto space-y-20">
          {faqs.map((cat) => (
            <div key={cat.category} data-reveal>
              <h2 className="font-display text-[11px] tracking-widest3 text-gold font-semibold uppercase mb-8">
                {cat.category}
              </h2>
              <div className="space-y-0" style={{ borderTop: '1px solid var(--border)' }}>
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="group"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <summary
                      className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none focus-visible:outline-none"
                      style={{ outline: 'none' }}
                    >
                      <h3 className="font-display text-[18px] md:text-[20px] font-semibold text-cream uppercase tracking-[0.02em] leading-snug">
                        {item.q}
                      </h3>
                      <span
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300 group-open:rotate-45"
                        style={{ color: 'var(--gold)' }}
                        aria-hidden="true"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
                          <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="pb-6">
                      <Prose className="text-[16px] max-w-none">{item.a}</Prose>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ borderTop: '1px solid var(--border)' }}
        data-reveal
      >
        <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-display text-[11px] tracking-widest3 text-gold font-semibold uppercase mb-3">
              Still have questions?
            </p>
            <p className="font-display text-[28px] font-semibold text-cream uppercase tracking-[0.02em]">
              Talk to the team directly.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button href="/contact">Get in touch</Button>
            <Button variant="ghost" href="/programme">Read the programme</Button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
