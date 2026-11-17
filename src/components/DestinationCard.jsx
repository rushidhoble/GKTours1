import React from 'react';
import { ArrowUpRight, MapPin, Check } from 'lucide-react';

export default function DestinationCard({ destination, onExplore, onSelectPackage }) {
  const {
    number,
    name,
    subtitle,
    location,
    description,
    image,
    highlights,
    cta,
    stats
  } = destination;

  return (
    <article
      className="destination-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid rgba(23, 61, 50, 0.08)',
        transition: 'all 0.45s var(--transition-smooth)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }}
    >
      {/* Top Photography Canvas */}
      <div
        className="image-reveal-wrapper"
        style={{
          position: 'relative',
          height: 'clamp(280px, 35vw, 420px)',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <img
          src={image}
          alt={`${name} - ${location}`}
          className="img-cover"
          loading="eager"
          style={{ transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />

        {/* Floating Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(16, 42, 35, 0.82) 0%, rgba(16, 42, 35, 0.2) 50%, transparent 100%)'
          }}
        />

        {/* Top Floating Badge & Large Index */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            right: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(23, 61, 50, 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(185, 149, 84, 0.35)',
              color: 'var(--color-ivory)',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500
            }}
          >
            <MapPin size={13} color="#B99554" />
            <span>{location}</span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2.4rem',
              fontWeight: 800,
              color: 'rgba(248, 246, 239, 0.85)',
              lineHeight: 1,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)'
            }}
          >
            {number}
          </span>
        </div>

        {/* Bottom Card Title Inside Photography */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.75rem',
            right: '1.75rem',
            zIndex: 2,
            color: 'var(--color-ivory)'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: 0
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)',
              color: '#F4DEB3',
              marginTop: '0.25rem'
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Card Body Information */}
      <div
        style={{
          padding: 'clamp(1.5rem, 3vw, 2.25rem)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
          gap: '1.75rem',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.98rem',
              lineHeight: 1.7,
              color: 'var(--color-text-dark)',
              marginBottom: '1.5rem'
            }}
          >
            {description}
          </p>

          {/* Quick Stats Pill Strip */}
          {stats && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                padding: '0.85rem 0',
                borderTop: '1px solid rgba(23, 61, 50, 0.08)',
                borderBottom: '1px solid rgba(23, 61, 50, 0.08)',
                marginBottom: '1.5rem'
              }}
            >
              {stats.map((s, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.66rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    {s.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: 'var(--color-forest)',
                      marginTop: '0.2rem'
                    }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Key Highlights Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)'
              }}
            >
              JOURNEY HIGHLIGHTS
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {highlights?.map((h, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.88rem',
                    color: 'var(--color-text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(185, 149, 84, 0.15)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Check size={11} color="#B99554" strokeWidth={3} />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(23, 61, 50, 0.08)'
          }}
        >
          <a
            href="#storytelling"
            onClick={(e) => {
              if (onExplore) onExplore(destination);
            }}
            className="btn-outline-dark"
            style={{ flexGrow: 1 }}
          >
            <span>{cta}</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            onClick={() => onSelectPackage && onSelectPackage(destination)}
            className="btn-primary"
            style={{
              padding: '0.85rem 1.4rem',
              fontSize: '0.76rem',
              backgroundColor: 'var(--color-forest)',
              color: 'var(--color-ivory)'
            }}
          >
            <span>ENQUIRE</span>
          </button>
        </div>
      </div>
    </article>
  );
}
