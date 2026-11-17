import React, { useRef } from 'react';
import destinationsData from '../data/destinations.json';
import DestinationCard from './DestinationCard';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function DestinationShowcase({ onOpenEnquiry, onSelectDestination }) {
  const sectionRef = useRef(null);

  useScrollAnimation((gsap, ScrollTrigger) => {
    gsap.fromTo(
      '.destination-card-anim',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      }
    );
  }, []);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="py-section"
      style={{
        backgroundColor: 'var(--color-ivory)',
        position: 'relative'
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.5rem' }}>
          <span className="eyebrow-badge" style={{ color: 'var(--color-forest)' }}>
            EXPLORE OUR DESTINATIONS
          </span>
          <h2 className="section-headline" style={{ color: 'var(--color-forest)' }}>
            Discover Our <br />
            <em style={{ color: 'var(--color-saffron)' }}>Featured Journeys.</em>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Two sacred destinations. Two unique experiences. One meaningful connection.
          </p>
        </div>

        {/* Asymmetrical Editorial Card Grid (Reference 02 Inspired) */}
        <div className="destinations-grid">
          {destinationsData.map((dest) => (
            <div key={dest.id} className="destination-card-anim">
              <DestinationCard
                destination={dest}
                onExplore={() => {
                  const el = document.getElementById(`story-${dest.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onSelectPackage={() => {
                  if (onOpenEnquiry) onOpenEnquiry(dest.fullName || dest.name);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
