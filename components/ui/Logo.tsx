interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const dims = { sm: 32, md: 56, lg: 120 } as const;

export function Logo({ size = 'sm' }: LogoProps) {
  const dim = dims[size];
  return (
    <svg
      width={dim}
      height={dim * 1.1}
      viewBox="0 0 100 110"
      fill="none"
      aria-label="Athletes To Industry logo"
    >
      <g transform="translate(20 10)">
        <path
          d="M 15 10 Q 10 20 12 35 Q 8 50 14 60 L 18 55 Q 16 45 20 35 Q 24 25 22 15 Z"
          fill="var(--cream)"
        />
        <circle cx="16" cy="8" r="4" fill="var(--cream)" />
      </g>
      <g transform="translate(45 10)">
        <path
          d="M 15 10 Q 10 20 14 35 Q 10 50 16 60 L 20 55 Q 18 45 22 35 Q 26 25 24 15 Z"
          fill="var(--cream)"
        />
        <circle cx="18" cy="8" r="4" fill="var(--cream)" />
      </g>
      <line x1="20" y1="78" x2="80" y2="78" stroke="var(--gold)" strokeWidth="0.8" />
    </svg>
  );
}
