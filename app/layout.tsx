import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmokeCanvas } from '@/components/canvas/SmokeCanvas';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Athletes To Industry',
    template: '%s | Athletes To Industry',
  },
  description:
    'A structured career programme for athletes moving out of the elite pathway. Real career planning, real training, real introductions — operated by Andrews Recruitment Group.',
  keywords: ['athlete career transition', 'elite sport career', 'Andrews Recruitment Group', 'athletes to industry'],
  openGraph: {
    title: 'Athletes To Industry',
    description: 'A structured career programme for athletes moving out of the elite pathway.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-navy-deep text-cream font-body overflow-x-hidden">
        <SmokeCanvas />
        <div className="relative" style={{ zIndex: 2 }}>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
