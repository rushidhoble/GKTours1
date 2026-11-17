import React, { useRef } from 'react';
import { Compass, Landmark, Users, Sparkles } from 'lucide-react';
import featuresData from '../data/features.json';
import { useScrollAnimation } from '../hooks/useAnimations';

const iconMap = {
  Compass: Compass,
  Landmark: Landmark,
  Users: Users,
  Sparkles: Sparkles
};

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    gsap.fromTo(
      '.feature-card-anim',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.15,
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
      id="why-us"
      ref={containerRef}
      className="py-section"
      style={{
        backgroundColor: 'var(--color-forest)',
        color: 'var(--color-ivory)',
        position: 'relative'
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
          <span className="eyebrow-badge" style={{ color: 'var(--color-gold)' }}>
            {featuresData.eyebrow}
          </span>
          <h2 className="section-headline" style={{ color: 'var(--color-ivory)', margin: 0 }}>
            {featuresData.headlineSans} <br />
            <em style={{ color: '#F4DEB3' }}>{featuresData.headlineItalic}</em>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="features-grid">
          {featuresData.items?.map((item) => {
            const IconComponent = iconMap[item.icon] || Compass;
            return (
              <div
                key={item.number}
                className="feature-card-anim"
                style={{
                  backgroundColor: 'rgba(16, 42, 35, 0.65)',
                  border: '1px solid rgba(185, 149, 84, 0.25)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.75rem',
                  transition: 'all 0.35s var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(16, 42, 35, 0.9)';
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(16, 42, 35, 0.65)';
                  e.currentTarget.style.borderColor = 'rgba(185, 149, 84, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Top Row: Large Numerical Indicator + Minimal Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--color-gold)',
                      opacity: 0.9,
                      lineHeight: 1
                    }}
                  >
                    {item.number}
                  </span>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(185, 149, 84, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold)'
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* Fine Gold Divider */}
                <div
                  style={{
                    width: '36px',
                    height: '1.5px',
                    backgroundColor: 'var(--color-gold)',
                    opacity: 0.5
                  }}
                />

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: 'var(--color-ivory)',
                      marginBottom: '0.65rem'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: 'rgba(248, 246, 239, 0.78)'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
