import React, { useRef } from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import heroData from '../data/hero.json';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function Hero({ onOpenEnquiry }) {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    // Parallax background effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 22,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Content fade & lift on scroll down
    gsap.to(contentRef.current, {
      opacity: 0.15,
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'center center',
        end: 'bottom top',
        scrub: true
      }
    });

    // Initial Staggered Reveal
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      imageRef.current,
      { scale: 1.14, filter: 'brightness(0.65)' },
      { scale: 1.02, filter: 'brightness(0.9)', duration: 1.8 }
    )
      .fromTo(
        '.hero-anim-item',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
        '-=1.2'
      );
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-wrapper"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Cinematic Photograph */}
      <div
        ref={imageRef}
        className="hero-bg"
        style={{
          position: 'absolute',
          inset: '-5% 0',
          width: '100%',
          height: '110%',
          backgroundImage: `url(${heroData.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 38%',
          zIndex: 1,
          willChange: 'transform'
        }}
      />

      {/* Atmospheric Vignette Overlay */}
      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 45%, rgba(16, 42, 35, 0.28) 0%, rgba(16, 42, 35, 0.72) 70%, rgba(10, 26, 21, 0.94) 100%)',
          zIndex: 2
        }}
      />

      {/* Gradient fade to seamlessly blend into next section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '140px',
          background: 'linear-gradient(to bottom, transparent, rgba(248, 246, 239, 0.15) 60%, #F8F6EF 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Hero Content Canvas */}
      <div
        ref={contentRef}
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '2rem 1rem'
        }}
      >
        {/* Eyebrow with location tag */}
        <div
          className="hero-anim-item"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.45rem 1.15rem',
            borderRadius: '9999px',
            background: 'rgba(23, 61, 50, 0.55)',
            border: '1px solid rgba(185, 149, 84, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            marginBottom: '1.5rem'
          }}
        >
          <Compass size={14} color="#B99554" />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-ivory)'
            }}
          >
            {heroData.eyebrow}
          </span>
        </div>

        {/* Expressive Heading (Syne + Instrument Serif Italic) */}
        <h1
          className="hero-title hero-anim-item"
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.4rem, 6.2vw, 5.25rem)',
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
            color: 'var(--color-ivory)',
            marginBottom: '1.5rem',
            textShadow: '0 4px 24px rgba(0, 0, 0, 0.5)'
          }}
        >
          {heroData.headlineSans}{' '}
          <em
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#F4DEB3',
              display: 'inline-block',
              textShadow: '0 2px 18px rgba(185, 149, 84, 0.4)'
            }}
          >
            {heroData.headlineItalic}
          </em>
        </h1>

        {/* Editorial Subtitle */}
        <p
          className="hero-subtext hero-anim-item"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.35vw, 1.22rem)',
            color: 'rgba(248, 246, 239, 0.88)',
            maxWidth: '660px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {heroData.supportingText}
        </p>

        {/* CTAs */}
        <div
          className="hero-cta-group hero-anim-item"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap'
          }}
        >
          <a href={heroData.primaryCta.href} className="btn-primary">
            <span>{heroData.primaryCta.label}</span>
            <ArrowDown size={16} />
          </a>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onOpenEnquiry && onOpenEnquiry()}
          >
            <span>{heroData.secondaryCta.label}</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Small Visual Detail Badge */}
        <div
          className="hero-anim-item"
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(248, 246, 239, 0.65)'
            }}
          >
            {heroData.badge}
          </span>
          <span
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-gold)'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: 'rgba(248, 246, 239, 0.55)'
            }}
          >
            {heroData.location}
          </span>
        </div>
      </div>

      {/* Animated Scroll Indicator at bottom */}
      <a
        href="#about"
        aria-label="Scroll to introduction"
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'var(--color-gold)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
        className="animate-scroll-bounce"
      >
        <span
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(248, 246, 239, 0.65)',
            fontFamily: 'var(--font-body)'
          }}
        >
          SCROLL
        </span>
        <ArrowDown size={17} />
      </a>
    </section>
  );
}
