import React, { useRef } from 'react';
import { ArrowUpRight, MapPin, CheckCircle2, Info } from 'lucide-react';
import packagesData from '../data/packages.json';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function PackageSection({ onOpenEnquiry }) {
  const containerRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    gsap.fromTo(
      '.package-panel-anim',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%'
        }
      }
    );
  }, []);

  return (
    <section
      id="packages"
      ref={containerRef}
      className="py-section"
      style={{
        backgroundColor: 'var(--color-ivory)',
        position: 'relative'
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(2.5rem, 5vw, 4.5rem)' }}>
          <span className="eyebrow-badge" style={{ color: 'var(--color-forest)' }}>
            {packagesData.eyebrow}
          </span>
          <h2 className="section-headline" style={{ color: 'var(--color-forest)' }}>
            {packagesData.headlineSans} <br />
            <em style={{ color: 'var(--color-saffron)' }}>{packagesData.headlineItalic}</em>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {packagesData.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packagesData.packages?.map((pkg) => (
            <div
              key={pkg.id}
              className="package-panel-anim"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid rgba(23, 61, 50, 0.09)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              {/* Header Image Strip */}
              <div
                style={{
                  height: '240px',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="img-cover"
                  loading="eager"
                  style={{ transition: 'transform 0.7s ease' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(16, 42, 35, 0.85) 0%, transparent 60%)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    backgroundColor: 'rgba(23, 61, 50, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--color-ivory)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    border: '1px solid rgba(185, 149, 84, 0.35)'
                  }}
                >
                  {pkg.tag}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.5rem',
                    color: 'var(--color-ivory)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.78rem',
                      color: 'rgba(248, 246, 239, 0.85)',
                      marginBottom: '0.2rem'
                    }}
                  >
                    <MapPin size={13} color="#B99554" />
                    <span>{pkg.location}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      margin: 0
                    }}
                  >
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Package Content */}
              <div
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      color: 'var(--color-text-dark)',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--color-gold)',
                        display: 'block',
                        marginBottom: '0.65rem'
                      }}
                    >
                      PACKAGE INCLUSION HIGHLIGHTS
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {pkg.highlights?.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.55rem',
                            fontSize: '0.88rem',
                            color: 'var(--color-text-dark)',
                            fontFamily: 'var(--font-body)'
                          }}
                        >
                          <CheckCircle2 size={15} color="#173D32" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strictly Honest Detail Specs (No Fabricated Prices or Dates) */}
                  <div
                    style={{
                      backgroundColor: 'var(--color-sand)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                      border: '1px solid rgba(185, 149, 84, 0.2)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Duration:</span>
                      <span style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                        {pkg.duration || packagesData.missingInfoFallback}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Departures:</span>
                      <span style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                        {pkg.departure || packagesData.missingInfoFallback}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Pricing:</span>
                      <span style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                        {pkg.price || packagesData.missingInfoFallback}
                      </span>
                    </div>
                  </div>

                  {/* Informational Transparency Note */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      marginTop: '0.85rem',
                      fontSize: '0.74rem',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    <Info size={13} color="#B99554" />
                    <span>Exact dates and transport options confirmed during personal consultation.</span>
                  </div>
                </div>

                {/* Enquiry CTA */}
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(pkg.name)}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--color-forest)',
                    color: 'var(--color-ivory)'
                  }}
                >
                  <span>{pkg.cta}</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
