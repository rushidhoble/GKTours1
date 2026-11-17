import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../assets/logo/Logo';
import navData from '../data/navigation.json';
import siteData from '../data/site.json';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = navData.links || [];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(248, 246, 239, 0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 8px 30px rgba(16, 42, 35, 0.08)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(185, 149, 84, 0.2)' : '1px solid transparent',
          padding: isScrolled ? '0.75rem 0' : '1.35rem 0'
        }}
      >
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo (Left) */}
          <a
            href="#hero"
            style={{ textDecoration: 'none' }}
            aria-label="GK Tours Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo variant={isScrolled ? 'dark' : 'light'} size="sm" showSubtext={!isScrolled} />
          </a>

          {/* Center Links (Desktop) */}
          <nav
            style={{ display: 'none' }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.2rem',
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.86rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: isScrolled ? 'var(--color-text-dark)' : 'var(--color-ivory)',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isScrolled ? 'var(--color-text-dark)' : 'var(--color-ivory)')
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div style={{ display: 'none' }} className="desktop-nav-cta">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="btn-primary"
              style={{
                padding: '0.7rem 1.6rem',
                fontSize: '0.76rem',
                backgroundColor: isScrolled ? 'var(--color-forest)' : 'var(--color-gold)',
                color: isScrolled ? 'var(--color-ivory)' : '#0E241E',
                boxShadow: isScrolled
                  ? '0 4px 16px rgba(23, 61, 50, 0.25)'
                  : '0 4px 18px rgba(185, 149, 84, 0.4)'
              }}
            >
              <span>{navData.cta.label}</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: isScrolled ? 'var(--color-text-dark)' : 'var(--color-ivory)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '6px'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          backgroundColor: '#102A23',
          backgroundImage: 'radial-gradient(circle at top right, #173D32 0%, #0A1C17 100%)',
          color: 'var(--color-ivory)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '6rem 2rem 2.5rem',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'all' : 'none',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)'
            }}
          >
            NAVIGATION MENU
          </span>
          <nav aria-label="Mobile Navigation">
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1.9rem',
                      fontWeight: 700,
                      color: 'var(--color-ivory)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(248, 246, 239, 0.1)',
                      paddingBottom: '0.85rem'
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}>
                      0{idx + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Drawer Bottom CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          <button
            type="button"
            className="btn-primary"
            style={{ width: '100%', padding: '1rem' }}
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenEnquiry) onOpenEnquiry();
            }}
          >
            <span>{navData.cta.label}</span>
            <ArrowUpRight size={17} />
          </button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.78rem',
              color: 'rgba(248, 246, 239, 0.65)',
              paddingTop: '0.5rem'
            }}
          >
            <span>{siteData.brand.sub}</span>
            <span>{siteData.contact.phone}</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-nav-cta {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
