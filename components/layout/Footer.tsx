import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { navLinks } from '@/lib/tokens';

export function Footer() {
  return (
    <footer
      className="relative z-10 pt-20 pb-12 px-6 md:px-12"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Logo size="sm" />
              <div>
                <div className="font-display text-[14px] tracking-widest2 text-cream font-semibold">ATHLETE</div>
                <div className="font-display text-[14px] tracking-widest2 text-gold font-semibold mt-0.5">TO INDUSTRY</div>
              </div>
            </div>
            <p className="font-body text-[13px] leading-relaxed text-cream-muted">
              A structured career programme for athletes leaving the elite pathway. Operated by Andrews Recruitment Group, with Old Albanian RFC as pilot partner.
            </p>
          </div>

          {/* Run by */}
          <div>
            <div className="text-[11px] tracking-widest2 text-gold font-semibold mb-5 uppercase">Run by</div>
            <p className="text-cream text-sm mb-1">Andrews Recruitment Group</p>
            <p className="text-cream-muted text-[13px] mb-4">Operating partner</p>
            <p className="text-cream text-sm mb-1">Old Albanian RFC</p>
            <p className="text-cream-muted text-[13px]">Pilot club partner</p>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[11px] tracking-widest2 text-gold font-semibold mb-5 uppercase">Navigate</div>
            <ul className="space-y-2.5">
              {navLinks.slice(1).map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-[11px] tracking-widest2 text-gold font-semibold mb-5 uppercase">Resources</div>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '/about' },
                { label: 'Employers', href: '/employers' },
                { label: 'FAQs', href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] tracking-widest2 text-gold font-semibold mb-5 uppercase">Contact</div>
            <Link
              href="https://andrews-recruitment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-200 block mb-3"
            >
              andrews-recruitment.com ↗
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm text-gold underline underline-offset-2 hover:text-gold-bright transition-colors duration-200"
            >
              Start the conversation →
            </Link>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-6 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span className="text-[12px] text-cream-muted tracking-[0.05em]">
            © 2026 Athletes To Industry, a programme by{' '}
            <Link
              href="https://andrews-recruitment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors duration-200"
            >
              Andrews Recruitment Group Ltd
            </Link>
            . Operated by{' '}
            <Link
              href="https://andrews-recruitment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors duration-200"
            >
              Tom Andrews
            </Link>
            .
          </span>

          <div className="flex items-center gap-6">
            <span className="text-[12px] text-cream-muted tracking-[0.05em]">
              Powered by{' '}
              <Link href="/system" className="text-gold hover:text-gold-bright transition-colors duration-200">
                The People System
              </Link>
            </span>

            {/* AMIVY Designs — site design credit placeholder */}
            <div
              className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity duration-200"
              title="Site by AMIVY Designs, part of Andrews Recruitment Group"
            >
              <span className="text-[10px] tracking-widest2 text-cream-muted uppercase font-medium">
                Design
              </span>
              {/* Replace the span below with the AMIVY Designs logo SVG or <Image> when available */}
              <span
                className="font-display text-[11px] font-semibold text-cream-muted tracking-widest2 uppercase"
                aria-label="AMIVY Designs"
              >
                AMIVY
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
