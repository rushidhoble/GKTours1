import React, { useRef } from 'react';
import experienceData from '../data/experience.json';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    gsap.to(bgRef.current, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.fromTo(
      '.experience-content-anim',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '75svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: 'var(--color-ivory)',
        textAlign: 'center',
        padding: '5rem 1.5rem'
      }}
    >
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-10% 0',
          width: '100%',
          height: '120%',
          backgroundImage: `url(${experienceData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          zIndex: 1,
          willChange: 'transform'
        }}
      />

      {/* Atmospheric Dark Tint Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(16, 42, 35, 0.72)',
          zIndex: 2
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(16, 42, 35, 0.2) 0%, rgba(10, 26, 21, 0.85) 100%)',
          zIndex: 2
        }}
      />

      {/* Content */}
      <div
        className="experience-content-anim"
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '820px',
          margin: '0 auto'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            display: 'inline-block',
            marginBottom: '1.25rem'
          }}
        >
          {experienceData.locationCaption}
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.75rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: 'var(--color-ivory)',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}
        >
          {experienceData.headlineSans}{' '}
          <em
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#F4DEB3'
            }}
          >
            {experienceData.headlineItalic}
          </em>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
            color: 'rgba(248, 246, 239, 0.9)',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: '0 auto 2rem'
          }}
        >
          {experienceData.supportingCopy}
        </p>

        {/* Editorial Meditation Quotation */}
        <div
          style={{
            borderLeft: '2px solid var(--color-gold)',
            paddingLeft: '1.5rem',
            textAlign: 'left',
            maxWidth: '540px',
            margin: '0 auto',
            backgroundColor: 'rgba(23, 61, 50, 0.45)',
            backdropFilter: 'blur(6px)',
            borderRadius: '0 8px 8px 0',
            padding: '1rem 1.5rem'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: '#F4DEB3',
              lineHeight: 1.5
            }}
          >
            “{experienceData.quote}”
          </p>
        </div>
      </div>
    </section>
  );
}
