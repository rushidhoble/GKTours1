import React, { useRef } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import finalCtaData from '../data/finalCta.json';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function FinalCTA({ onOpenEnquiry }) {
  const containerRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    gsap.fromTo(
      '.final-cta-anim',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
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
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '60svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: 'var(--color-ivory)',
        textAlign: 'center',
        padding: '6rem 1.5rem'
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${finalCtaData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          zIndex: 1
        }}
      />

      {/* Dark Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(16, 42, 35, 0.45) 0%, rgba(10, 26, 21, 0.9) 100%)',
          zIndex: 2
        }}
      />

      {/* Content Canvas */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '780px',
          margin: '0 auto'
        }}
      >
        <span
          className="final-cta-anim eyebrow-badge-pill"
          style={{
            color: 'var(--color-gold)',
            borderColor: 'rgba(185, 149, 84, 0.4)',
            backgroundColor: 'rgba(16, 42, 35, 0.65)',
            marginBottom: '1.5rem'
          }}
        >
          {finalCtaData.eyebrow}
        </span>

        <h2
          className="final-cta-anim"
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'var(--color-ivory)',
            marginBottom: '1.25rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}
        >
          {finalCtaData.headlineSans} <br />
          <em
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#F4DEB3'
            }}
          >
            {finalCtaData.headlineItalic}
          </em>
        </h2>

        <p
          className="final-cta-anim"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
            color: 'rgba(248, 246, 239, 0.9)',
            marginBottom: '2.5rem',
            lineHeight: 1.7
          }}
        >
          {finalCtaData.supportingCopy}
        </p>

        <div className="final-cta-anim">
          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry()}
            className="btn-primary"
            style={{
              padding: '1.1rem 2.6rem',
              fontSize: '0.86rem'
            }}
          >
            <MessageCircle size={18} />
            <span>{finalCtaData.ctaLabel}</span>
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
