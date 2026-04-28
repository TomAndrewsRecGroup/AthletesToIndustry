import type { Metadata } from 'next';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'The People System',
  description:
    'A full talent and learning platform built and owned by Andrews Recruitment Group. Athletes, employers, trainers and courses — one system.',
};

const features = [
  {
    title: 'Athlete profiles',
    text: 'Background, goals, training to date, certifications, sector preferences, geography, working pattern. A single source of truth for each athlete on the programme.',
  },
  {
    title: 'Employer portal',
    text: 'Partner businesses log in, post roles, see profiled candidates matched to their requirements, and track progress through interview and onboarding.',
  },
  {
    title: 'Roles and development plans',
    text: 'Each open role attaches a written development plan covering what the first twelve months look like. No development plan, no listing.',
  },
  {
    title: 'Trainer and course directory',
    text: 'Trusted, verified training providers list courses on the system. Athletes are matched to the certificated training they actually need, delivered at zero cost to them.',
  },
  {
    title: 'Pathway tracking',
    text: 'Week 1, Month 1, Month 3, Month 6, Month 12. Each athlete is tracked through the timeline. Drop-off is visible. Nothing gets lost.',
  },
  {
    title: 'Reporting and review',
    text: 'Programme-level data on placements, retention, certifications delivered, and time-to-employment. Built for honest reporting to clubs, employers and partners.',
  },
];

export default function SystemPage() {
  return (
    <PageReveal>
      {/* ── Hero ── */}
      <section className="min-h-[70vh] flex items-center pt-44 pb-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[900px]">
            <div data-reveal="fade">
              <SectionLabel>The People System</SectionLabel>
            </div>
            <div data-reveal>
              <Display>
                The operating<br /><GoldSpan>spine.</GoldSpan>
              </Display>
            </div>
            <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[19px] max-w-[680px]">
                The People System is a full talent and learning platform built and owned by Andrews Recruitment
                Group. It supports clients across talent, HR, process, learning, and policies, and includes a portal
                for clients to manage their own people work. Athletes To Industry runs on it.
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1080px] mx-auto">
          <div data-reveal="fade">
            <SectionLabel>Why it matters</SectionLabel>
          </div>
          <div data-reveal>
            <Display size="lg" as="h2">
              Athletes, employers,<br />roles, trainers, courses.<br /><GoldSpan>One system.</GoldSpan>
            </Display>
          </div>
          <div data-reveal>
            <Prose className="mt-10 text-[18px] max-w-[720px]">
              Other operators in the athlete-transition space run a CV pile and a calendar. Athletes To Industry
              runs on a real platform. Athletes are profiled with goals, skills and aspirations. Employers list roles
              and development plans. Trainers list courses. ARG sees the whole picture and matches accordingly.
              Nothing is held in someone&rsquo;s inbox. Nothing falls through the gap.
            </Prose>
          </div>
        </div>
      </section>

      {/* ── Six features ── */}
      <section className="py-20 pb-32 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mosaic-grid" data-stagger>
            {features.map((feature) => (
              <div key={feature.title} className="mosaic-cell p-10 md:p-12">
                <h3 className="font-display text-[22px] font-semibold text-cream uppercase tracking-[0.02em] mb-4">
                  {feature.title}
                </h3>
                <Prose className="text-[14px]">{feature.text}</Prose>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built by ARG ── */}
      <section
        className="py-32 px-6 md:px-12 text-center"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[780px] mx-auto" data-reveal>
          <SectionLabel>Built and owned by ARG</SectionLabel>
          <Display size="md" as="h2">
            A platform we own.<br />A programme we <GoldSpan>run.</GoldSpan>
          </Display>
          <Prose className="mt-8 text-[17px] mx-auto" style={{ maxWidth: '680px' }}>
            The People System sits under Andrews Recruitment Group as our full people-solution offering for clients.
            Athletes To Industry uses the same infrastructure. The platform is built, the team is in place, and the
            model is in operation. This is not a pitch deck.
          </Prose>
          <div className="mt-12">
            <Button href="/contact">Request a walkthrough</Button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
