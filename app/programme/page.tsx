import type { Metadata } from 'next';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'The Programme',
  description:
    'A timed, structured career pathway for athletes leaving the elite pathway. ARG-led for the first 90 days, employer-led through to Month 12.',
};

const stage1Timeline = [
  {
    label: 'WEEK 1',
    items: ['Screening call', 'Onboarded onto The People System', 'Goals and options session'],
  },
  {
    label: 'MONTH 1',
    items: ['CV writing workshop', 'Interview skills workshop', 'Job search and tech workshops'],
  },
  {
    label: 'MONTH 2',
    items: ['Certificated training', 'Trusted, verified partners', 'Zero cost to the athlete'],
  },
  {
    label: 'MONTH 3',
    items: ['Client introductions', 'Interview scheduling', 'Trial day coordination'],
  },
];

const stage2Timeline = [
  {
    label: 'MONTH 6',
    items: ['Placement embedded', 'Development plan live', 'Six-month review'],
  },
  {
    label: 'MONTH 12',
    items: ['Twelve-month review', 'Progression check-in', 'Alumni network'],
  },
];

const trainingAreas = [
  {
    title: 'Career foundations',
    items: ['CV writing', 'Interview skills', 'Job-search strategy', 'Digital and tech fluency'],
  },
  {
    title: 'Leadership and commercial',
    items: ['Leadership development', 'Commercial awareness', 'Communication and presentation', 'Networking'],
  },
  {
    title: 'Vocational and safety',
    items: ['CSCS', 'Working at Heights', 'Site Supervisor', 'Sector-specific certifications'],
  },
  {
    title: 'Welfare and identity',
    items: ['Transition support', 'Identity and purpose work', 'Mental health signposting', 'Alumni connection'],
  },
];

export default function ProgrammePage() {
  return (
    <PageReveal>
      {/* ── Hero ── */}
      <section className="min-h-[70vh] flex items-center pt-44 pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[900px]">
            <div data-reveal="fade">
              <SectionLabel>The Programme</SectionLabel>
            </div>
            <div data-reveal>
              <Display>
                How it<br />actually <GoldSpan>works.</GoldSpan>
              </Display>
            </div>
            <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[19px] max-w-[680px]">
                Athletes To Industry is built around a clear, timed pathway. The first ninety days are owned
                end-to-end by Andrews Recruitment Group. From there, the development plan is shaped with the employer
                the athlete joins. The same pathway runs for both cohorts: athletes leaving the elite pathway placed
                into permanent industry roles, and apprenticeship-ready young players placed into trainee positions
                in parallel with their playing.
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stage 01 ── */}
      <section className="px-6 md:px-12 pb-0">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-14"
            style={{ background: 'var(--navy)' }}
            data-reveal
          >
            <div>
              <p className="text-[11px] tracking-widest3 text-gold font-semibold mb-3">STAGE 01</p>
              <div
                className="font-display text-[72px] font-semibold text-gold leading-none"
                style={{ opacity: 0.3 }}
                aria-hidden="true"
              >
                01
              </div>
            </div>
            <div>
              <p className="text-[11px] tracking-widest2 text-cream-muted mb-3 uppercase">
                ARG-LED · WEEK 1 TO MONTH 3
              </p>
              <h2 className="font-display text-[40px] font-semibold text-cream uppercase tracking-[0.02em] mb-6">
                Onboard, prepare,<br />introduce.
              </h2>
              <Prose className="mb-8">
                The first ninety days are run by ARG. Tom and Lucy take each athlete through a screening call,
                onboard them onto The People System, and run the discovery work that establishes what they want,
                what is realistic, and how to get there.
              </Prose>
              <Prose className="mb-8">
                Workshops cover CV writing, interview skills, job searching, and the digital and technology fluency
                expected in modern workplaces. Certificated training follows, delivered by trusted, verified partners
                at zero cost to the athlete. Client introductions and interview scheduling sit at the back end of the
                window. Trial days follow.
              </Prose>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8" data-stagger>
                {stage1Timeline.map((t) => (
                  <div key={t.label}>
                    <p className="text-[11px] text-gold tracking-widest2 mb-3 font-semibold">{t.label}</p>
                    {t.items.map((item) => (
                      <p key={item} className="text-cream-muted text-sm py-1.5">
                        — {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transition banner */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 px-10 md:px-14 py-8"
            style={{
              background: 'var(--gold-surface)',
              borderTop: '1px solid var(--gold-border)',
              borderBottom: '1px solid var(--gold-border)',
            }}
          >
            <span className="text-[11px] tracking-widest3 text-gold font-semibold shrink-0 uppercase">
              ↓ The Transition
            </span>
            <Prose className="text-[15px]">
              At Month 3 the athlete is in role or in active interview process. From Month 6 onwards, the development
              plan is co-owned with the employer. ARG remains involved as the continuity point through the first year.
            </Prose>
          </div>

          {/* Stage 02 */}
          <div
            className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-14"
            style={{ background: 'var(--navy)' }}
            data-reveal
          >
            <div>
              <p className="text-[11px] tracking-widest3 text-gold font-semibold mb-3">STAGE 02</p>
              <div
                className="font-display text-[72px] font-semibold text-gold leading-none"
                style={{ opacity: 0.3 }}
                aria-hidden="true"
              >
                02
              </div>
            </div>
            <div>
              <p className="text-[11px] tracking-widest2 text-cream-muted mb-3 uppercase">
                EMPLOYER-LED · MONTH 6 TO MONTH 12
              </p>
              <h2 className="font-display text-[40px] font-semibold text-cream uppercase tracking-[0.02em] mb-6">
                Develop, embed,<br />review.
              </h2>
              <Prose className="mb-8">
                The shape of the second stage depends on the role and the employer. Each placement runs against a
                written development plan agreed at offer stage. ARG checks in with both sides at six and twelve
                months and stays available between.
              </Prose>
              <div className="grid grid-cols-2 gap-6 mt-8" data-stagger>
                {stage2Timeline.map((t) => (
                  <div key={t.label}>
                    <p className="text-[11px] text-gold tracking-widest2 mb-3 font-semibold">{t.label}</p>
                    {t.items.map((item) => (
                      <p key={item} className="text-cream-muted text-sm py-1.5">
                        — {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Training and support ── */}
      <section className="py-32 px-6 md:px-12" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-16 max-w-[720px]" data-reveal>
            <SectionLabel>Training and support</SectionLabel>
            <Display size="lg" as="h2">
              A network of<br />specialists, <GoldSpan>not</GoldSpan> a curriculum.
            </Display>
            <Prose className="mt-8">
              Different athletes need different training. Some need vocational tickets to step onto a construction
              site. Some need commercial fluency to step into financial services. The programme draws from a network
              of trusted training providers and matches each athlete to what they actually need.
            </Prose>
          </div>

          {/* £0 callout */}
          <div
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-14 p-10 md:p-14 mb-10 items-center"
            style={{
              background: 'var(--gold-surface)',
              border: '1px solid var(--gold-border)',
            }}
            data-reveal
          >
            <div>
              <p className="font-display text-[11px] text-gold tracking-widest3 mb-3 font-semibold">FEATURED</p>
              <p className="font-display text-[64px] font-semibold text-gold leading-none">£0</p>
              <p className="text-[12px] tracking-widest2 text-cream-muted uppercase mt-2 font-medium">
                Cost to the athlete
              </p>
            </div>
            <div>
              <h3 className="font-display text-[32px] font-semibold text-cream uppercase tracking-[0.02em] mb-4">
                Certificated training,<br />delivered free.
              </h3>
              <Prose className="text-[16px] mb-5">
                Industry-recognised certifications delivered by trusted, verified training partners listed on The
                People System. Athletes leave the programme with paper, not just polish. Tickets and qualifications
                match the career path each athlete is taking.
              </Prose>
              <Prose className="text-[15px]">
                The certifications attach back to each athlete&rsquo;s profile, visible to employers when matching
                to roles. No course is paid for by the athlete. The programme covers it.
              </Prose>
            </div>
          </div>

          {/* Training grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
            {trainingAreas.map((area) => (
              <div
                key={area.title}
                className="p-10"
                style={{
                  background: 'var(--cream-surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <h4 className="font-display text-xl font-semibold text-cream uppercase tracking-[0.02em] mb-6">
                  {area.title}
                </h4>
                <ul className="space-y-0.5" role="list">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="text-cream-muted text-sm py-2"
                      style={{ borderBottom: '1px solid var(--border)' }}
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-32 px-6 md:px-12 text-center"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[720px] mx-auto" data-reveal>
          <Display size="md" as="h2">
            Want to see how the<br />system <GoldSpan>runs?</GoldSpan>
          </Display>
          <div className="mt-12">
            <Button href="/system">The People System</Button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
