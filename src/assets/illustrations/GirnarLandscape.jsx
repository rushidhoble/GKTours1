import React from 'react';

/**
 * Custom Illustrated Girnar Mountain Landscape
 * Inspired by Reference 01 (Sequel Website) editorial footer engraving aesthetic.
 * Features:
 * - Girnar mountain peaks & Gorakhnath / Dattatreya ridge silhouettes
 * - Sacred temple shikharas & flags
 * - Fine-engraved cross-hatching and layered terrain
 * - Small pilgrimage traveller walking along the sacred route
 * - Atmospheric celestial stars and subtle glow
 * - Palette: Ivory (#F8F6EF), Pale Blue (#A2C2E8), White (#FFFFFF), Muted Gold (#B99554)
 */
export default function GirnarLandscape({ className = '' }) {
  return (
    <div
      className={`w-full overflow-hidden select-none pointer-events-none relative ${className}`}
      style={{
        width: '100%',
        lineHeight: 0,
        position: 'relative',
        marginTop: '2rem'
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1600 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYEnd meet"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          {/* Subtle gradient transitions for mountain layers */}
          <linearGradient id="skyGrad" x1="800" y1="0" x2="800" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#153F87" stopOpacity="0" />
            <stop offset="50%" stopColor="#1C4E9A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#102E66" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="farMountainGrad" x1="0" y1="60" x2="0" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8FBBE8" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#3B73BE" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1C4E9A" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="midMountainGrad" x1="0" y1="110" x2="0" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E0EDFA" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#A9CEF2" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2559A2" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="foregroundTerrain" x1="0" y1="180" x2="0" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8F6EF" stopOpacity="0.98" />
            <stop offset="45%" stopColor="#EAE3D6" stopOpacity="1" />
            <stop offset="100%" stopColor="#D9D0C1" stopOpacity="1" />
          </linearGradient>

          {/* Hatching patterns for engraving look */}
          <pattern id="hatchPattern" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#153F87" strokeWidth="0.8" opacity="0.25" />
          </pattern>

          <pattern id="hatchPatternFine" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="4" stroke="#153F87" strokeWidth="0.6" opacity="0.18" />
          </pattern>
        </defs>

        {/* Atmospheric Celestial Field (Stars & Golden Evening Star) */}
        <g opacity="0.75">
          <circle cx="140" cy="40" r="1.5" fill="#F8F6EF" opacity="0.6" />
          <circle cx="280" cy="25" r="1.2" fill="#F8F6EF" opacity="0.4" />
          <circle cx="430" cy="55" r="1.8" fill="#B99554" opacity="0.8" />
          <circle cx="620" cy="30" r="1" fill="#F8F6EF" opacity="0.5" />
          <circle cx="890" cy="45" r="1.5" fill="#F8F6EF" opacity="0.7" />
          <circle cx="1060" cy="22" r="2.2" fill="#F8F6EF" opacity="0.9" />
          <circle cx="1240" cy="60" r="1.3" fill="#B99554" opacity="0.6" />
          <circle cx="1420" cy="35" r="1.6" fill="#F8F6EF" opacity="0.8" />
          <circle cx="1510" cy="50" r="1.2" fill="#F8F6EF" opacity="0.5" />

          {/* Evening Star / Guru Dattatreya Star */}
          <g transform="translate(1060, 22)">
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#B99554" strokeWidth="0.8" opacity="0.7" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke="#B99554" strokeWidth="0.8" opacity="0.7" />
          </g>
        </g>

        {/* LAYER 1: Distant Girnar Ridge & Mountain Silhouettes */}
        <path
          d="M0 160 C 180 145, 260 110, 390 125 C 480 135, 540 85, 680 90 C 760 92, 830 50, 940 55 C 1030 58, 1100 100, 1220 95 C 1340 90, 1450 140, 1600 130 L 1600 320 L 0 320 Z"
          fill="url(#farMountainGrad)"
        />

        {/* Distant Ridge Engraving Shading */}
        <path
          d="M390 125 Q 460 110 540 85 Q 610 88 680 90 Q 750 92 830 50 Q 885 52 940 55 Q 985 80 1030 58 Q 1125 98 1220 95 L 1220 180 L 390 180 Z"
          fill="url(#hatchPatternFine)"
          opacity="0.35"
        />

        {/* LAYER 2: Middle Mountain Peaks with Guru Dattatreya Temple Shikhara */}
        <path
          d="M0 200 C 120 180, 220 150, 340 165 C 460 180, 520 130, 640 140 C 730 148, 800 95, 910 100 C 970 102, 1020 135, 1140 130 C 1260 125, 1380 180, 1500 165 C 1550 160, 1580 170, 1600 175 L 1600 320 L 0 320 Z"
          fill="url(#midMountainGrad)"
        />

        {/* Temple Architecture on Mountain Peak (Dattatreya Shikhar at x=910, y=95) */}
        <g transform="translate(896, 70)" stroke="#153F87" strokeWidth="1.2">
          {/* Temple Base */}
          <rect x="4" y="24" width="20" height="8" fill="#F8F6EF" />
          {/* Main Shikhara (Curvilinear spire) */}
          <path d="M6 24 C 8 16, 12 10, 14 3 C 16 10, 20 16, 22 24 Z" fill="#F8F6EF" />
          {/* Kalash & Dhwaja (Golden Flag) */}
          <line x1="14" y1="3" x2="14" y2="-4" stroke="#B99554" strokeWidth="1" />
          <path d="M14 -4 L21 -1 L14 2 Z" fill="#C77A32" stroke="none" />
          {/* Subsidiary small Shikhara */}
          <path d="M-1 25 C 0 20, 2 16, 3 12 C 4 16, 6 20, 7 25 Z" fill="#EAE3D6" />
        </g>

        {/* Second Jain Temple Cluster at x=640, y=130 */}
        <g transform="translate(628, 116)" stroke="#153F87" strokeWidth="1">
          <rect x="5" y="18" width="18" height="7" fill="#F8F6EF" />
          <path d="M7 18 C 9 12, 12 8, 14 2 C 16 8, 19 12, 21 18 Z" fill="#F8F6EF" />
          <line x1="14" y1="2" x2="14" y2="-3" stroke="#B99554" strokeWidth="0.8" />
          <path d="M14 -3 L19 -1 L14 1 Z" fill="#C77A32" stroke="none" />
        </g>

        {/* LAYER 3: Foreground Terraced Plains & Hillocks (Engraved Antique Ivory) */}
        <path
          d="M0 240 C 140 230, 240 210, 380 220 C 520 230, 620 205, 780 215 C 920 225, 1040 195, 1200 205 C 1360 215, 1480 235, 1600 225 L 1600 320 L 0 320 Z"
          fill="url(#foregroundTerrain)"
        />

        {/* Engraving Texture Over Foreground Plains */}
        <path
          d="M0 240 C 140 230, 240 210, 380 220 C 520 230, 620 205, 780 215 C 920 225, 1040 195, 1200 205 C 1360 215, 1480 235, 1600 225 L 1600 320 L 0 320 Z"
          fill="url(#hatchPattern)"
        />

        {/* Sacred Winding Stone Path & Steps Leading Upward */}
        <g stroke="#153F87" strokeWidth="1.2" opacity="0.65" fill="none">
          <path d="M680 320 C 700 290, 715 270, 740 250 C 765 230, 790 220, 810 200 C 830 180, 855 160, 875 140 C 890 125, 905 105, 910 98" strokeDasharray="3 3" />
        </g>

        {/* Sacred Audumbar Tree Silhouettes (Narsobachi Wadi Connection) */}
        <g transform="translate(320, 185)" stroke="#153F87" strokeWidth="0.8" opacity="0.7">
          {/* Tree trunk */}
          <path d="M20 35 Q 22 20 24 10 Q 26 20 28 35" fill="#153F87" />
          {/* Canopy */}
          <path d="M10 18 Q 8 6 22 4 Q 30 2 38 8 Q 44 16 34 22 Q 22 24 10 18 Z" fill="#3B73BE" opacity="0.4" />
        </g>

        <g transform="translate(1260, 175)" stroke="#153F87" strokeWidth="0.8" opacity="0.6">
          <path d="M16 38 Q 18 22 20 12 Q 22 22 24 38" fill="#153F87" />
          <path d="M6 20 Q 5 8 18 5 Q 26 4 32 10 Q 38 18 28 24 Q 18 26 6 20 Z" fill="#3B73BE" opacity="0.35" />
        </g>

        {/* THE PILGRIMAGE TRAVELLER (Solitary Yatri Journeying with Staff & Shawl) */}
        {/* Placed prominently along the foreground path near center: x=720, y=242 */}
        <g transform="translate(715, 230)" className="pilgrim-traveller">
          {/* Subtle Ground Shadow */}
          <ellipse cx="14" cy="46" rx="12" ry="2.5" fill="#153F87" opacity="0.35" />

          {/* Golden Pilgrim's Staff (Lathi) */}
          <line x1="22" y1="12" x2="22" y2="46" stroke="#B99554" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="22" cy="11" r="1.5" fill="#C77A32" />

          {/* Pilgrim Figure in Traditional Yatri Robes / Shawl */}
          {/* Feet */}
          <ellipse cx="12" cy="45" rx="2" ry="1.2" fill="#153F87" />
          <ellipse cx="16" cy="44.5" rx="2" ry="1.2" fill="#153F87" />

          {/* Dhoti / Robe Body */}
          <path
            d="M8 26 C 7 34, 6 40, 10 44 C 13 44, 16 43, 19 44 C 20 38, 20 32, 18 26 Z"
            fill="#153F87"
          />

          {/* Upper Body / Angavastram / Shawl Drapery */}
          <path
            d="M9 19 C 7 23, 7 27, 9 32 C 12 34, 17 33, 20 30 C 21 25, 20 20, 18 19 Z"
            fill="#153F87"
          />
          <path
            d="M9 20 C 13 25, 17 26, 21 21"
            stroke="#B99554"
            strokeWidth="0.8"
            fill="none"
          />

          {/* Arm holding staff */}
          <path d="M15 22 Q 19 23 22 20" stroke="#153F87" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Head & Pagri / Headcloth */}
          <circle cx="13.5" cy="15" r="3.2" fill="#153F87" />
          <ellipse cx="13.5" cy="14" rx="3.6" ry="2.2" fill="#B99554" />
        </g>

        {/* Foreground Desert Shrubbery & Fine Ground Detail (Matching Reference 01) */}
        <g stroke="#153F87" strokeWidth="0.9" opacity="0.6">
          {/* Cluster 1 */}
          <path d="M120 295 L116 285 M120 295 L121 282 M120 295 L126 286" />
          <path d="M180 305 L176 295 M180 305 L182 291 M180 305 L187 296" />
          {/* Cluster 2 */}
          <path d="M460 290 L455 280 M460 290 L462 277 M460 290 L468 281" />
          {/* Cluster 3 */}
          <path d="M1020 298 L1015 288 M1020 298 L1022 284 M1020 298 L1028 289" />
          {/* Cluster 4 */}
          <path d="M1380 292 L1375 281 M1380 292 L1382 278 M1380 292 L1388 283" />
        </g>
      </svg>
    </div>
  );
}
