import { type ReactNode, type ElementType } from 'react';
import { cn } from '@/lib/cn';

type DisplaySize = 'xl' | 'lg' | 'md';

interface DisplayProps {
  children: ReactNode;
  size?: DisplaySize;
  as?: ElementType;
  className?: string;
}

const sizeClasses: Record<DisplaySize, string> = {
  xl: 'text-[clamp(48px,8vw,96px)]',
  lg: 'text-[clamp(36px,5vw,64px)]',
  md: 'text-[clamp(28px,3.5vw,42px)]',
};

export function Display({ children, size = 'xl', as: Tag = 'h1', className }: DisplayProps) {
  return (
    <Tag
      className={cn(
        'font-display font-semibold tracking-[0.02em] leading-[0.95] text-cream uppercase m-0',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function GoldSpan({ children }: { children: ReactNode }) {
  return <span className="text-gold">{children}</span>;
}
