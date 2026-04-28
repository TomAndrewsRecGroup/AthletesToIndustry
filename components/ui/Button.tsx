'use client';

import { type ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const base =
  'inline-block px-8 py-4 text-xs tracking-widest2 font-semibold uppercase cursor-pointer transition-all duration-300 font-body leading-none';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-navy-deep border border-gold hover:bg-gold-bright hover:border-gold-bright active:scale-[0.98]',
  ghost:
    'bg-transparent text-cream border border-[var(--border)] hover:border-gold hover:text-gold active:scale-[0.98]',
};

export function Button({ variant = 'primary', href, children, className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
