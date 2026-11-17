import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo/Logo';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 200);
          return 100;
        }
        const step = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Preparing your journey"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#102A23',
        backgroundImage: 'radial-gradient(circle at center, #173D32 0%, #0A1C17 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        transform: isFading ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFading ? 'none' : 'all',
        color: '#F8F6EF'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.75rem',
          transform: isFading ? 'scale(0.92)' : 'scale(1)',
          transition: 'transform 0.5s ease'
        }}
      >
        <Logo variant="light" size="lg" showSubtext={true} />

        <div style={{ width: '220px', marginTop: '1.5rem' }}>
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'rgba(248, 246, 239, 0.15)',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#B99554',
                transition: 'width 0.15s ease',
                boxShadow: '0 0 12px rgba(185, 149, 84, 0.8)'
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '0.85rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(248, 246, 239, 0.7)'
            }}
          >
            <span>PREPARING YOUR JOURNEY</span>
            <span style={{ color: '#B99554', fontWeight: 600 }}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

