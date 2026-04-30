import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';

const contacts = [
  {
    name: 'Tom Andrews',
    role: 'Owner, Andrews Recruitment Group',
    email: 'tom@andrews-recruitment.com',
  },
  {
    name: 'Lucinda Reader',
    role: 'Programme Lead',
    email: 'lucinda@ravellohr.co.uk',
  },
];

export function ContactClient() {
  return (
    <PageReveal>
      <section className="min-h-screen pt-44 pb-32 px-6 md:px-12">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-20 max-w-[720px]" data-reveal>
            <SectionLabel>Contact Athletes To Industry</SectionLabel>
            <Display>
              Start the<br /><GoldSpan>conversation.</GoldSpan>
            </Display>
            <Prose className="mt-8 text-[17px]">
              Reach out directly to the team. Whether you are an athlete, employer, club, or training provider,
              Tom and Lucy are the right people to speak to.
            </Prose>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'var(--border)' }} data-stagger>
            {contacts.map((c) => (
              <div key={c.email} className="p-10 md:p-12" style={{ background: 'var(--navy)' }}>
                <p className="font-display text-[11px] tracking-widest3 text-gold font-semibold uppercase mb-4">
                  {c.role}
                </p>
                <h2 className="font-display text-[28px] font-semibold text-cream uppercase tracking-[0.02em] mb-6 leading-snug">
                  {c.name}
                </h2>
                <a
                  href={`mailto:${c.email}`}
                  className="font-body text-[15px] text-cream-muted underline underline-offset-4 decoration-[var(--gold-border)] hover:text-cream hover:decoration-gold transition-colors duration-200 break-all"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
