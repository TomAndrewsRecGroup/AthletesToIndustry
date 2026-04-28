'use client';

import { useEffect, type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface PageRevealProps {
  children: ReactNode;
}

export function PageReveal({ children }: PageRevealProps) {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return <div className="page-enter">{children}</div>;
}
