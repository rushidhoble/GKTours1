import React, { useRef } from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import destinationsData from '../data/destinations.json';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function DestinationStory({ onOpenEnquiry }) {
  const containerRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    // Parallax on story images
    gsap.utils.toArray('.story-image-canvas').forEach((img) => {
      gsap.to(img, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // Content reveal
    gsap.fromTo(
      '.story-text-block',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section
      id="storytelling"
      ref={containerRef}
      className="py-section"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="section-container">
        {/* Section Intro */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto clamp(3.5rem, 6vw, 6rem)' }}>
          <span className="eyebrow-badge" style={{ color: 'var(--color-forest)' }}>
            IMMERSIVE DESTINATION CHRONICLES
          </span>
          <h2 className="section-headline" style={{ color: 'var(--color-forest)' }}>
            Sacred Lands. <br />
            <em style={{ color: 'var(--color-saffron)' }}>Living Traditions.</em>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Delve deeper into the historic sanctity and natural grandeur of Lord Dattatreya’s most revered pilgrim corridors.
          </p>
        </div>

        {/* Stories Alternating */}
        {destinationsData.map((dest, idx) => {
          const isEven = idx % 2 === 1;
          const story = dest.story || {};

          return (
            <div
              key={dest.id}
              id={`story-${dest.id}`}
              className={`story-row ${isEven ? 'reverse' : ''}`}
            >
              {/* Image Column */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  height: 'clamp(340px, 42vw, 540px)',
                  backgroundColor: '#0E241E'
                }}
              >
                <img
                  src={dest.secondaryImage || dest.image}
                  alt={dest.fullName}
                  className="story-image-canvas img-cover"
                  loading="eager"
                  style={{ willChange: 'transform' }}
                />

                {/* Subtle Image Tag Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    backgroundColor: 'rgba(16, 42, 35, 0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.4rem 1rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(185, 149, 84, 0.3)',
                    color: '#F8F6EF',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    fontWeight: 600
                  }}
                >
                  {story.regionLabel || dest.location.toUpperCase()}
                </div>

                {/* Bottom Inset Caption */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2.5rem 1.75rem 1.5rem',
                    background: 'linear-gradient(to top, rgba(16, 42, 35, 0.9) 0%, transparent 100%)',
                    color: 'var(--color-ivory)'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '1.15rem',
                      color: '#F4DEB3'
                    }}
                  >
                    {dest.subtitle}
                  </p>
                </div>
              </div>

              {/* Text Editorial Column */}
              <div className="story-text-block" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)'
                  }}
                >
                  {dest.number} — {story.regionLabel || dest.location.toUpperCase()}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: 'var(--color-forest)'
                  }}
                >
                  {story.title || dest.fullName}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.22rem',
                    lineHeight: 1.5,
                    color: 'var(--color-saffron)'
                  }}
                >
                  {story.subtitle}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.02rem',
                    lineHeight: 1.75,
                    color: 'var(--color-text-dark)',
                    marginTop: '0.5rem'
                  }}
                >
                  {story.lead}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.96rem',
                    lineHeight: 1.75,
                    color: 'var(--color-text-muted)'
                  }}
                >
                  {story.body}
                </p>

                {/* Highlight Action */}
                <div style={{ marginTop: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(dest.fullName)}
                    className="btn-outline-dark"
                  >
                    <span>ENQUIRE ABOUT {dest.name}</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
