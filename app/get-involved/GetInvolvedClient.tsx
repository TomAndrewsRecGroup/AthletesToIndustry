'use client';

import { useState } from 'react';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

type TabId = 'athletes' | 'employers' | 'clubs' | 'trainers';

interface TabContent {
  title: string;
  intro: string;
  what: string;
  next: string;
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'athletes', label: 'Athletes' },
  { id: 'employers', label: 'Employers' },
  { id: 'clubs', label: 'Clubs and bodies' },
  { id: 'trainers', label: 'Trainers' },
];

const content: Record<TabId, TabContent> = {
  athletes: {
    title: 'Athletes',
    intro:
      'The programme runs two cohorts. The primary group is athletes leaving the elite pathway: released academy players, retiring semi-pros, retiring professionals, and athletes returning from injury. A second, smaller cohort sits alongside: young players still chasing a professional contract who are ready to start an apprenticeship in parallel.',
    what:
      'Same pathway, different placement target. Elite-pathway-leavers are placed into permanent industry roles with a written 12-month development plan. Apprenticeship-ready young players are matched to trainee positions and apprenticeships with employers committed to a structured development plan. Both groups go through the same onboarding, workshops, certificated training and aftercare.',
    next:
      'Most athletes come into Athletes To Industry through a referring club or a player welfare programme. If you are an athlete reading this directly, get in touch and we will route you in.',
  },
  employers: {
    title: 'Employers',
    intro:
      'Businesses across multiple sectors who want to hire with intent. Industrial, technical, commercial, financial services, trades, media, sales. The programme delivers candidates who have been profiled, prepared, and matched to a development plan you write together.',
    what:
      'You list roles on The People System with a written development plan. You see profiled candidates matched to your requirements. ARG runs the introduction, the interview process and the onboarding. You stay close on the development plan through the first twelve months. We stay close behind you.',
    next:
      'Bring an open role and a development plan. We will match athletes to it and run the rest. Most partner conversations start with a thirty-minute call to see whether the model fits.',
  },
  clubs: {
    title: 'Clubs and bodies',
    intro:
      'Sports clubs, academies, governing bodies, and player welfare organisations across rugby, football, cricket, athletics and other elite pathways. The pilot runs at Old Albanian RFC; the model is built to roll out across multiple clubs, sports and partner organisations.',
    what:
      'You identify and refer athletes. You stay close as the continuity point on the sport side. We take the athlete through the programme, keep you informed at each milestone, and check in on retention through the first year. Athletes stay engaged with their club or pathway through the transition.',
    next:
      'If you run a club, academy, governing body or welfare programme and want to explore bringing your athletes onto the pathway, get in touch. The conversation starts with the basics: how many athletes, what kind of profile, and what success looks like for your organisation.',
  },
  trainers: {
    title: 'Trainers',
    intro:
      'Training providers offering CV, interview, leadership, technical, vocational, safety or wellbeing programmes. The People System lists courses from a network of specialists; ARG matches athletes to the training they actually need based on the career path they are taking.',
    what:
      'Your courses sit on the system. Athletes are referred to you when their pathway calls for it. You deliver the training. The certification or learning outcome attaches back to the athlete profile, visible to employers and to ARG. A clean, single source of truth.',
    next:
      'If you deliver training that fits the programme, get in touch. We are particularly interested in providers covering vocational certifications, mental health and identity work, financial literacy, and commercial fluency.',
  },
};

export function GetInvolvedClient() {
  const [active, setActive] = useState<TabId>('athletes');
  const c = content[active];

  return (
    <PageReveal>
      {/* ── Hero ── */}
      <section className="min-h-[50vh] flex items-center pt-44 pb-16 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="max-w-[900px]">
            <div data-reveal="fade">
              <SectionLabel>Join the Athletes To Industry Programme</SectionLabel>
            </div>
            <div data-reveal>
              <Display>
                Four ways<br />to <GoldSpan>step in.</GoldSpan>
              </Display>
            </div>
            <span className="gold-line mt-10 mb-10 block" data-reveal="fade" />
            <div data-reveal>
              <Prose className="text-[18px] max-w-[680px]">
                The programme works because the right people are at the table. Below is what each kind of partner
                brings, what they get, and how to come in.
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <section className="px-6 md:px-12 pb-6">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="flex flex-wrap"
            style={{ borderBottom: '1px solid var(--border)' }}
            role="tablist"
            aria-label="Partner type"
          >
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    'px-6 md:px-7 py-5 font-body text-[13px] tracking-[0.15em] font-semibold uppercase transition-all duration-200 -mb-px border-b-2 focus-visible:outline-none',
                    isActive
                      ? 'text-gold border-gold'
                      : 'text-cream-muted border-transparent hover:text-cream'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Active panel ── */}
      <section className="pt-16 pb-32 px-6 md:px-12">
        <div
          className="max-w-[1080px] mx-auto"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          <div data-reveal>
            <Display size="lg" as="h2">{c.title}</Display>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12" data-stagger>
            <div>
              <p className="text-[11px] tracking-widest3 text-gold mb-4 font-semibold uppercase">Who it is for</p>
              <Prose className="text-[16px]">{c.intro}</Prose>
            </div>
            <div>
              <p className="text-[11px] tracking-widest3 text-gold mb-4 font-semibold uppercase">What it looks like</p>
              <Prose className="text-[16px]">{c.what}</Prose>
            </div>
            <div>
              <p className="text-[11px] tracking-widest3 text-gold mb-4 font-semibold uppercase">How to come in</p>
              <Prose className="text-[16px]">{c.next}</Prose>
            </div>
          </div>

          <div className="mt-16" data-reveal="fade">
            <Button href="/contact">Start the conversation</Button>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
