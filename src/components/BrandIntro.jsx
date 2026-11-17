import React, { useRef } from 'react';
import brandData from '../data/brand.json';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function BrandIntro() {
  const containerRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    gsap.fromTo(
      '.brand-reveal-item',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%'
        }
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-section"
      style={{
        backgroundColor: 'var(--color-ivory)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="section-container">
        {/* Top Eyebrow */}
        <div className="brand-reveal-item">
          <span className="eyebrow-badge" style={{ color: 'var(--color-forest)' }}>
            {brandData.eyebrow}
          </span>
        </div>

        {/* Asymmetric Header Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'flex-start',
            marginBottom: 'clamp(3rem, 6vw, 5rem)'
          }}
        >
          {/* Left: Oversized Typography */}
          <div className="brand-reveal-item">
            <h2
              className="section-headline"
              style={{
                color: 'var(--color-forest)',
                fontSize: 'clamp(2.3rem, 4.8vw, 4.25rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                margin: 0
              }}
            >
              {brandData.headlineSans} <br />
              <em
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--color-saffron)'
                }}
              >
                {brandData.headlineItalic}
              </em>
            </h2>
            <div
              className="gold-divider"
              style={{
                width: '64px',
                height: '2px',
                background: 'linear-gradient(90deg, #B99554, transparent)',
                marginTop: '1.75rem'
              }}
            />
          </div>

          {/* Right: Editorial Brand Description & Pillars */}
          <div className="brand-reveal-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: 1.75,
                color: 'var(--color-text-dark)',
                fontWeight: 400
              }}
            >
              {brandData.description}
            </p>

            {/* Three Brand Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginTop: '1rem',
                borderTop: '1px solid rgba(23, 61, 50, 0.12)',
                paddingTop: '1.5rem'
              }}
            >
              {brandData.pillars?.map((p) => (
                <div key={p.number} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      letterSpacing: '0.15em'
                    }}
                  >
                    {p.number} — {p.title}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.86rem',
                      lineHeight: 1.55,
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    {p.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Supporting Travel Image Canvas with Subtle Frame */}
        <div
          className="brand-reveal-item image-reveal-wrapper"
          style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
            position: 'relative',
            maxHeight: '480px'
          }}
        >
          <img
            src={brandData.image}
            alt={brandData.imageCaption || 'Sacred pilgrimage landscape'}
            style={{
              width: '100%',
              height: '420px',
              objectFit: 'cover',
              objectPosition: 'center 45%'
            }}
            loading="lazy"
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(16, 42, 35, 0.85) 0%, transparent 100%)',
              padding: '2.5rem 2rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              color: 'var(--color-ivory)'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)'
                }}
              >
                THE SACRED CORRIDOR
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.25rem',
                  marginTop: '0.25rem'
                }}
              >
                {brandData.imageCaption}
              </p>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.76rem',
                letterSpacing: '0.12em',
                color: 'rgba(248, 246, 239, 0.75)'
              }}
            >
              GUJARAT & MAHARASHTRA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

