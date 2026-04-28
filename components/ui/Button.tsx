'use client';

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'ghost';

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
} & (
  | ({ href: string } & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

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
    const { target, rel } = props as { target?: string; rel?: string };
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
