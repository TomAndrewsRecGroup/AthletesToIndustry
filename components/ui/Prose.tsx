import { type ReactNode, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

interface ProseProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: 'p' | 'div' | 'span';
}

export function Prose({ children, className, style, as: Tag = 'p' }: ProseProps) {
  return (
    <Tag
      className={cn(
        'font-body text-[17px] leading-[1.75] text-cream-muted font-normal m-0',
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}
