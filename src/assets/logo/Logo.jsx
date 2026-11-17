import React from 'react';

/**
 * GK Tours Brand Logo Component
 * Meets client brief:
 * - Brand meaning: G = Goat. K = Kite.
 * - Easily replaceable when final client vector logo is supplied.
 * - Supports 'light' (on dark hero / deep blue footer) and 'dark' (on ivory).
 */
export default function Logo({
  variant = 'light',
  showSubtext = true,
  size = 'md',
  className = ''
}) {
  const isLight = variant === 'light';
  const primaryColor = isLight ? '#F8F6EF' : '#173D32';
  const goldColor = '#B99554';
  const subtextColor = isLight ? 'rgba(248, 246, 239, 0.72)' : '#54655E';

  const iconSizes = {
    sm: 30,
    md: 40,
    lg: 52
  };

  const textSizes = {
    sm: { main: '1.05rem', sub: '0.58rem' },
    md: { main: '1.35rem', sub: '0.65rem' },
    lg: { main: '1.85rem', sub: '0.75rem' }
  };

  const dim = iconSizes[size] || 40;
  const currentText = textSizes[size] || textSizes.md;

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
    >
      {/* Brand Emblem (Sacred Mountain Peak + Soaring Kite + Goat Crest Geometric Motif) */}
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, transition: 'transform 0.3s ease' }}
        aria-hidden="true"
      >
        {/* Outer Ring Accent */}
        <circle
          cx="24"
          cy="24"
          r="21.5"
          stroke={goldColor}
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.65"
        />

        {/* Kite / Diamond Geometry (K for Kite) */}
        <path
          d="M24 6L38 24L24 42L10 24L24 6Z"
          stroke={primaryColor}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Internal Sacred Mountain Peaks (Girnar Shrine Silhouette) */}
        <path
          d="M17 31L24 16L31 31"
          stroke={goldColor}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Vertical Spine / Rising Path */}
        <line
          x1="24"
          y1="10"
          x2="24"
          y2="38"
          stroke={goldColor}
          strokeWidth="1"
          opacity="0.75"
        />

        {/* Sun / Guru Dattatreya Golden Halo */}
        <circle cx="24" cy="14" r="2.2" fill="#C77A32" />
      </svg>

      {/* Typographic Identity */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: currentText.main,
            fontWeight: 800,
            letterSpacing: '0.14em',
            color: primaryColor,
            textTransform: 'uppercase',
            transition: 'color 0.3s ease'
          }}
        >
          GK TOURS
        </span>
        {showSubtext && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: currentText.sub,
              fontWeight: 600,
              letterSpacing: '0.22em',
              color: subtextColor,
              textTransform: 'uppercase',
              marginTop: '0.2rem'
            }}
          >
            G · Goat | K · Kite
          </span>
        )}
      </div>
    </div>
  );
}

