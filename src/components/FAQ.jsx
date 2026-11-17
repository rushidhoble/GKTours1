import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import faqData from '../data/faq.json';

export default function FAQ() {
  const [openId, setOpenId] = useState(faqData.items?.[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-section"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="section-container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: ' clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="eyebrow-badge" style={{ color: 'var(--color-forest)' }}>
            {faqData.eyebrow}
          </span>
          <h2 className="section-headline" style={{ color: 'var(--color-forest)' }}>
            {faqData.headline}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {faqData.subtitle}
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData.items?.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  border: '1px solid rgba(23, 61, 50, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isOpen ? 'var(--color-ivory)' : '#FFFFFF',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-btn-${item.id}`}
                  style={{
                    width: '100%',
                    padding: '1.4rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: isOpen ? 'var(--color-forest)' : 'var(--color-text-dark)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--color-forest)' : 'rgba(23, 61, 50, 0.06)',
                      color: isOpen ? 'var(--color-ivory)' : 'var(--color-forest)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Smooth CSS Grid Transition */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  className={`faq-accordion-content ${isOpen ? 'open' : ''}`}
                >
                  <div className="faq-accordion-inner">
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.96rem',
                        lineHeight: 1.7,
                        color: 'var(--color-text-dark)',
                        padding: '0 1.75rem 1.5rem',
                        margin: 0
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

