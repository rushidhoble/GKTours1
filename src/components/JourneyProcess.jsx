import React, { useRef } from 'react';
import journeyData from '../data/journey.json';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function JourneyProcess({ onOpenEnquiry }) {
  const containerRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    gsap.fromTo(
      '.process-step-anim',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
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
      id="process"
      ref={containerRef}
      className="py-section"
      style={{
        backgroundColor: 'var(--color-sand)',
        color: 'var(--color-text-dark)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="eyebrow-badge" style={{ color: 'var(--color-forest)' }}>
            {journeyData.eyebrow}
          </span>
          <h2 className="section-headline" style={{ color: 'var(--color-forest)' }}>
            {journeyData.headlineSans} <br />
            <em style={{ color: 'var(--color-saffron)' }}>{journeyData.headlineItalic}</em>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {journeyData.subtitle}
          </p>
        </div>

        {/* Desktop Horizontal Timeline Track */}
        <div className="timeline-track-desktop">
          <div className="timeline-line" />
          <div className="timeline-grid">
            {journeyData.steps?.map((step) => (
              <div
                key={step.step}
                className="process-step-anim"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                {/* Step Circle Node */}
                <div
                  style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '2px solid var(--color-gold)',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.75rem',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: 'var(--color-forest)'
                    }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--color-forest)',
                    marginBottom: '0.65rem'
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.96rem',
                    lineHeight: 1.6,
                    color: 'var(--color-text-dark)',
                    maxWidth: '300px',
                    marginBottom: '0.5rem'
                  }}
                >
                  {step.description}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.84rem',
                    lineHeight: 1.55,
                    color: 'var(--color-text-muted)',
                    maxWidth: '300px'
                  }}
                >
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline Track */}
        <div className="timeline-vertical-mobile">
          <div className="timeline-vertical-line" />
          {journeyData.steps?.map((step) => (
            <div
              key={step.step}
              className="process-step-anim"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem'
              }}
            >
              {/* Node indicator */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: '0',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--color-forest)'
                  }}
                >
                  {step.step}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--color-forest)'
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-dark)'
                }}
              >
                {step.description}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  lineHeight: 1.55,
                  color: 'var(--color-text-muted)'
                }}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
