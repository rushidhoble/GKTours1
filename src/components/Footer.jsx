import React from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import Logo from '../assets/logo/Logo';
import GirnarLandscape from '../assets/illustrations/GirnarLandscape';
import footerData from '../data/footer.json';
import siteData from '../data/site.json';

export default function Footer({ onOpenEnquiry }) {
  const exploreLinks = footerData.columns?.explore?.links || [];
  const journeyLinks = footerData.columns?.journeys?.links || [];
  const getInTouchLinks = footerData.columns?.getInTouch?.links || [];

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#153F87',
        backgroundImage: 'radial-gradient(circle at 50% 0%, #1C4E9A 0%, #153F87 60%, #0E2E69 100%)',
        color: '#F8F6EF',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Four Column Editorial Layout (Reference 01 Inspired) */}
        <div className="footer-editorial-grid">
          {/* Column 1: Brand & Editorial Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Logo variant="light" size="md" showSubtext={true} />

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.08rem',
                lineHeight: 1.6,
                color: 'rgba(248, 246, 239, 0.88)',
                maxWidth: '340px'
              }}
            >
              “{footerData.brandDescription}”
            </p>

            {/* Direct Contact Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.5rem' }}>
              <a
                href={`mailto:${siteData.contact.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.88rem',
                  color: 'rgba(248, 246, 239, 0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B99554')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 246, 239, 0.85)')}
              >
                <Mail size={15} color="#B99554" />
                <span>{siteData.contact.email}</span>
              </a>

              <a
                href={`tel:${siteData.contact.phone.replace(/[^0-9+]/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.88rem',
                  color: 'rgba(248, 246, 239, 0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B99554')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 246, 239, 0.85)')}
              >
                <Phone size={15} color="#B99554" />
                <span>{siteData.contact.phone}</span>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.88rem',
                  color: 'rgba(248, 246, 239, 0.7)'
                }}
              >
                <MapPin size={15} color="#B99554" />
                <span>{siteData.contact.address}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: '0.5rem' }}>
              <a
                href={siteData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F8F6EF',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B99554';
                  e.currentTarget.style.color = '#153F87';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#F8F6EF';
                }}
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F8F6EF',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B99554';
                  e.currentTarget.style.color = '#153F87';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#F8F6EF';
                }}
              >
                <Instagram size={18} />
              </a>

              <a
                href={siteData.socials.email}
                aria-label="Email"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F8F6EF',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B99554';
                  e.currentTarget.style.color = '#153F87';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#F8F6EF';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#F8F6EF',
                display: 'block',
                paddingBottom: '0.65rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                marginBottom: '1.25rem'
              }}
            >
              {footerData.columns?.explore?.title || 'EXPLORE'}
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {exploreLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'rgba(248, 246, 239, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#B99554')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 246, 239, 0.8)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: OUR JOURNEYS */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#F8F6EF',
                display: 'block',
                paddingBottom: '0.65rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                marginBottom: '1.25rem'
              }}
            >
              {footerData.columns?.journeys?.title || 'OUR JOURNEYS'}
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {journeyLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'rgba(248, 246, 239, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#B99554')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 246, 239, 0.8)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH / ENQUIRE */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#F8F6EF',
                display: 'block',
                paddingBottom: '0.65rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                marginBottom: '1.25rem'
              }}
            >
              {footerData.columns?.getInTouch?.title || 'GET IN TOUCH'}
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: 'rgba(248, 246, 239, 0.78)',
                marginBottom: '1.25rem'
              }}
            >
              Ready to explore Girnar or Narsobachi Wadi? Send us an enquiry directly.
            </p>
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="btn-primary"
              style={{
                width: '100%',
                backgroundColor: '#B99554',
                color: '#0D275A'
              }}
            >
              <MessageCircle size={16} />
              <span>PLAN YOUR JOURNEY</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Legal & Copyright Line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '1.5rem 0 0.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'rgba(248, 246, 239, 0.65)'
          }}
        >
          <span>{footerData.legal?.copyright}</span>
          <span>{footerData.legal?.subtext}</span>
        </div>
      </div>

      {/* Distinctive Illustrated Mountain Landscape running along bottom */}
      <GirnarLandscape />
    </footer>
  );
}

