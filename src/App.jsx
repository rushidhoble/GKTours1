import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import DestinationShowcase from './components/DestinationShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import DestinationStory from './components/DestinationStory';
import JourneyProcess from './components/JourneyProcess';
import ExperienceSection from './components/ExperienceSection';
import PackageSection from './components/PackageSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryDestination, setEnquiryDestination] = useState('');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenEnquiry = (destinationName = '') => {
    setEnquiryDestination(destinationName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryDestination('');
  };

  return (
    <div className="gk-tours-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Preloader */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Experience Stream */}
      <main id="main-content" style={{ flexGrow: 1 }}>
        {/* Section 03: Cinematic Hero */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Section 04: Brand Introduction */}
        <BrandIntro />

        {/* Section 05: Destination Showcase */}
        <DestinationShowcase
          onOpenEnquiry={(name) => handleOpenEnquiry(name)}
          onSelectDestination={(dest) => {
            const el = document.getElementById(`story-${dest.id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 06: Why Choose GK Tours */}
        <WhyChooseUs />

        {/* Section 07: Destination Storytelling */}
        <DestinationStory onOpenEnquiry={(name) => handleOpenEnquiry(name)} />

        {/* Section 08: The Journey Process */}
        <JourneyProcess onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Section 09: Travel Experience */}
        <ExperienceSection />

        {/* Section 10: Tour Packages */}
        <PackageSection onOpenEnquiry={(name) => handleOpenEnquiry(name)} />

        {/* Section 12: Frequently Asked Questions */}
        <FAQ />

        {/* Section 13: Final CTA */}
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Section 14: Signature Footer (Reference 01 Inspired) */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Section 11: Enquiry Modal Experience */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        preselectedDestination={enquiryDestination}
      />
    </div>
  );
}
