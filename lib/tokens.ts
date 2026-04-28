export const tokens = {
  colors: {
    navy: '#0a1126',
    navyDeep: '#060a18',
    cream: '#f3ecd8',
    creamMuted: '#c9c4b3',
    gold: '#c9a24a',
    goldBright: '#e0b85a',
    border: 'rgba(243,236,216,0.12)',
    goldBorder: 'rgba(201,162,74,0.3)',
    goldSurface: 'rgba(201,162,74,0.06)',
    creamSurface: 'rgba(243,236,216,0.02)',
  },
} as const;

export type NavRoute = 'home' | 'programme' | 'system' | 'involved' | 'contact';

export const navLinks: { id: NavRoute; label: string; href: string }[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'programme', label: 'The Programme', href: '/programme' },
  { id: 'system', label: 'The System', href: '/system' },
  { id: 'involved', label: 'Get Involved', href: '/get-involved' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];
