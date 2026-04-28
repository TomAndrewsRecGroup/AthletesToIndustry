'use client';

import { useState, useId } from 'react';
import { PageReveal } from '@/components/layout/PageReveal';
import { Display, GoldSpan } from '@/components/ui/Display';
import { Prose } from '@/components/ui/Prose';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

type ContactType = 'athlete' | 'employer' | 'club' | 'trainer';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactTypes: { id: ContactType; label: string; routed: string }[] = [
  { id: 'athlete', label: 'Athlete or athlete representative', routed: 'Routes to Tom or Lucy at ARG' },
  { id: 'employer', label: 'Employer or hiring partner', routed: 'Routes to Tom at ARG' },
  { id: 'club', label: 'Sports club, academy or welfare body', routed: 'Routes to Alan at Old Albanian RFC' },
  { id: 'trainer', label: 'Training provider', routed: 'Routes to Tom at ARG' },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactClient() {
  const formId = useId();
  const [type, setType] = useState<ContactType>('athlete');
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email address.';
    } else if (!validateEmail(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Please enter a message.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0] as keyof FormErrors;
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

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
              Tell us who you are and what you are bringing to the table. Messages route to the right person on the
              programme based on what you select below.
            </Prose>
          </div>

          {submitted ? (
            <div
              className="py-20 px-12 text-center"
              style={{ border: '1px solid var(--gold)', background: 'var(--gold-surface)' }}
              data-reveal
              role="status"
              aria-live="polite"
            >
              <p className="text-[11px] tracking-widest3 text-cream-muted mb-6 font-semibold uppercase">
                Message received
              </p>
              <Display size="md" as="h2">Thank you.</Display>
              <Prose className="mt-6 mx-auto max-w-[480px]">
                We will be in touch shortly. In the meantime, feel free to read the rest of the programme.
              </Prose>
              <div className="mt-10">
                <Button variant="ghost" href="/programme">Read the programme</Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16" data-reveal>
              {/* Who you are */}
              <div>
                <p className="text-[11px] tracking-widest2 text-gold mb-5 font-semibold uppercase">
                  Who you are
                </p>
                <div className="space-y-3" role="radiogroup" aria-label="Contact type">
                  {contactTypes.map((ct) => {
                    const isActive = type === ct.id;
                    return (
                      <label
                        key={ct.id}
                        className="flex flex-col px-6 py-5 cursor-pointer transition-all duration-200"
                        style={{
                          border: `1px solid ${isActive ? 'var(--gold)' : 'var(--border)'}`,
                          background: isActive ? 'var(--gold-surface)' : 'var(--cream-surface)',
                        }}
                      >
                        <input
                          type="radio"
                          name="contact-type"
                          value={ct.id}
                          checked={isActive}
                          onChange={() => setType(ct.id)}
                          className="sr-only"
                        />
                        <span
                          className="font-body text-[15px] font-medium mb-1"
                          style={{ color: isActive ? 'var(--gold)' : 'var(--cream)' }}
                        >
                          {ct.label}
                        </span>
                        <span className="text-cream-muted text-[12px] tracking-[0.05em]">
                          {ct.routed}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-8">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor={`${formId}-name`}
                      className="block text-[11px] tracking-widest2 text-gold mb-3 font-semibold uppercase"
                    >
                      Name
                    </label>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className="form-input"
                      aria-describedby={errors.name ? `${formId}-name-err` : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p
                        id={`${formId}-name-err`}
                        className="text-[12px] text-red-400 mt-2"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor={`${formId}-email`}
                      className="block text-[11px] tracking-widest2 text-gold mb-3 font-semibold uppercase"
                    >
                      Email
                    </label>
                    <input
                      id={`${formId}-email`}
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className="form-input"
                      aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p
                        id={`${formId}-email-err`}
                        className="text-[12px] text-red-400 mt-2"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor={`${formId}-message`}
                      className="block text-[11px] tracking-widest2 text-gold mb-3 font-semibold uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id={`${formId}-message`}
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={cn('form-input', 'resize-y min-h-[100px]')}
                      aria-describedby={errors.message ? `${formId}-message-err` : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p
                        id={`${formId}-message-err`}
                        className="text-[12px] text-red-400 mt-2"
                        role="alert"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" disabled={submitting} className="min-w-[180px]">
                    {submitting ? 'Sending…' : 'Send message'}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </PageReveal>
  );
}
