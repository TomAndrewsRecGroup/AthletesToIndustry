'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { navLinks } from '@/lib/tokens';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Move focus into menu on open; return to hamburger on close
  useEffect(() => {
    if (menuOpen) {
      wasOpenRef.current = true;
      const firstLink = mobileNavRef.current?.querySelector<HTMLElement>('a');
      firstLink?.focus();
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      hamburgerRef.current?.focus();
    }
  }, [menuOpen]);

  // Escape closes menu; Tab cycles focus within the nav (focus trap)
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const nav = mobileNavRef.current;
      if (!nav) return;
      const focusable = Array.from(
        nav.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(6,10,24,0.95)'
            : 'rgba(6,10,24,0.75)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4 md:py-[18px] max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none"
            aria-label="Athletes To Industry home"
          >
            <Logo size="md" />
            <div className="leading-none">
              <div className="font-display text-[14px] tracking-widest2 text-cream font-semibold group-hover:text-gold transition-colors duration-200">
                ATHLETE
              </div>
              <div className="font-display text-[14px] tracking-widest2 text-gold font-semibold mt-0.5">
                TO INDUSTRY
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className="relative font-body text-[13px] tracking-[0.08em] font-medium py-1.5 transition-colors duration-200"
                  style={{ color: active ? 'var(--gold)' : 'var(--cream-muted)' }}
                  aria-current={active ? 'page' : undefined}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--cream)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--cream-muted)';
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{
                      width: active ? '100%' : '0',
                      background: 'var(--gold)',
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus-visible:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span
              className="block w-6 h-px bg-cream transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-px bg-cream transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-cream transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
          opacity: menuOpen ? 1 : 0,
        }}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(6,10,24,0.5)' }}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          ref={mobileNavRef}
          id="mobile-nav"
          className="absolute top-[88px] left-0 right-0 transition-transform duration-300"
          style={{
            background: 'rgba(6,10,24,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
            transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          }}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className="flex items-center px-8 py-4 font-body text-base tracking-[0.08em] transition-colors duration-200"
                style={{
                  color: active ? 'var(--gold)' : 'var(--cream)',
                  borderBottom: '1px solid var(--border)',
                }}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
