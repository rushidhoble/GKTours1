import React, { useState, useEffect, useRef } from 'react';
import { X, Send, AlertCircle, CheckCircle, Compass, Users, Phone, Calendar, Mail, MessageSquare } from 'lucide-react';
import siteData from '../data/site.json';
import destinationsData from '../data/destinations.json';

export default function EnquiryModal({ isOpen, onClose, preselectedDestination }) {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travellers, setTravellers] = useState('2');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});
  const [configWarning, setConfigWarning] = useState('');

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Set default or preselected destination when modal opens
  useEffect(() => {
    if (isOpen) {
      if (preselectedDestination) {
        setDestination(preselectedDestination);
      } else if (!destination && destinationsData.length > 0) {
        setDestination(destinationsData[0].fullName);
      }
      setErrors({});
      setConfigWarning('');
      setTimeout(() => {
        if (firstInputRef.current) firstInputRef.current.focus();
      }, 100);
    }
  }, [isOpen, preselectedDestination]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = () => {
    const errs = {};
    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    // Indian 10-digit mobile validation (allowing optional +91 prefix)
    const cleanMobile = mobile.replace(/[^0-9]/g, '');
    const mobileDigits = cleanMobile.startsWith('91') && cleanMobile.length === 12
      ? cleanMobile.slice(2)
      : cleanMobile;

    if (!mobileDigits || mobileDigits.length !== 10) {
      errs.mobile = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!destination) {
      errs.destination = 'Please choose a destination.';
    }

    if (!travellers || parseInt(travellers, 10) < 1) {
      errs.travellers = 'Please specify at least 1 traveller.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email format or leave blank.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const whatsappNumber = siteData?.contact?.whatsappNumber?.trim();

    // Verification check for business number configuration
    if (!whatsappNumber || whatsappNumber === '0000000000') {
      setConfigWarning(
        'WhatsApp business number is not yet configured in src/data/site.json. Please set a valid business number.'
      );
      return;
    }

    // Construct the official WhatsApp click-to-chat message
    const lines = [
      'Hello GK Tours,',
      '',
      'I would like to enquire about a pilgrimage package.',
      '',
      `Destination: ${destination}`,
      `Name: ${fullName.trim()}`,
      `Mobile: ${mobile.trim()}`,
      `Travellers: ${travellers}`,
      preferredDate ? `Preferred Date: ${preferredDate}` : 'Preferred Date: Flexible / To be discussed',
      email.trim() ? `Email: ${email.trim()}` : null,
      message.trim() ? `Note: ${message.trim()}` : null,
      '',
      'Please share the package details.',
      '',
      'Thank you.'
    ].filter(Boolean);

    const messageText = lines.join('\n');
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(10, 26, 21, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '580px',
          boxShadow: 'var(--shadow-floating)',
          overflow: 'hidden',
          border: '1px solid rgba(23, 61, 50, 0.12)',
          position: 'relative',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            backgroundColor: 'var(--color-forest)',
            color: 'var(--color-ivory)',
            padding: '1.75rem 2rem',
            position: 'relative'
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              color: 'var(--color-ivory)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
          >
            <X size={18} />
          </button>

          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)'
            }}
          >
            PILGRIMAGE ENQUIRY
          </span>
          <h3
            id="enquiry-modal-title"
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.65rem',
              fontWeight: 800,
              marginTop: '0.35rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15
            }}
          >
            Plan Your Sacred Journey
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.86rem',
              color: 'rgba(248, 246, 239, 0.8)',
              marginTop: '0.35rem'
            }}
          >
            Tell us about your travel intentions. We will connect with you directly via WhatsApp with tailored details.
          </p>
        </div>

        {/* Modal Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '1.75rem 2rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {configWarning && (
            <div
              style={{
                backgroundColor: '#FFF4E5',
                border: '1px solid #FFC107',
                borderRadius: '8px',
                padding: '0.85rem 1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                color: '#855100',
                fontSize: '0.85rem'
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Configuration Notice:</strong> {configWarning}
              </div>
            </div>
          )}

          {/* Destination Selection */}
          <div>
            <label
              htmlFor="enquiry-destination"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
                marginBottom: '0.4rem'
              }}
            >
              Select Destination <span style={{ color: '#C77A32' }}>*</span>
            </label>
            <select
              id="enquiry-destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                border: errors.destination ? '1.5px solid #D32F2F' : '1px solid rgba(23, 61, 50, 0.2)',
                backgroundColor: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                color: 'var(--color-text-dark)',
                outline: 'none'
              }}
            >
              {destinationsData.map((d) => (
                <option key={d.id} value={d.fullName}>
                  {d.fullName} ({d.location})
                </option>
              ))}
              <option value="Both / Custom Datta Pilgrimage">
                Both Corridors (Girnar & Narsobachi Wadi)
              </option>
            </select>
            {errors.destination && (
              <span style={{ color: '#D32F2F', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>
                {errors.destination}
              </span>
            )}
          </div>

          {/* Full Name & Mobile Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label
                htmlFor="enquiry-name"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-text-dark)',
                  marginBottom: '0.4rem'
                }}
              >
                Full Name <span style={{ color: '#C77A32' }}>*</span>
              </label>
              <input
                ref={firstInputRef}
                id="enquiry-name"
                type="text"
                placeholder="e.g. Ramesh Patel"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: errors.fullName ? '1.5px solid #D32F2F' : '1px solid rgba(23, 61, 50, 0.2)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  color: 'var(--color-text-dark)',
                  outline: 'none'
                }}
              />
              {errors.fullName && (
                <span style={{ color: '#D32F2F', fontSize: '0.74rem', marginTop: '0.2rem', display: 'block' }}>
                  {errors.fullName}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="enquiry-mobile"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-text-dark)',
                  marginBottom: '0.4rem'
                }}
              >
                Mobile (10 Digits) <span style={{ color: '#C77A32' }}>*</span>
              </label>
              <input
                id="enquiry-mobile"
                type="tel"
                placeholder="9876543210"
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: errors.mobile ? '1.5px solid #D32F2F' : '1px solid rgba(23, 61, 50, 0.2)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  color: 'var(--color-text-dark)',
                  outline: 'none'
                }}
              />
              {errors.mobile && (
                <span style={{ color: '#D32F2F', fontSize: '0.74rem', marginTop: '0.2rem', display: 'block' }}>
                  {errors.mobile}
                </span>
              )}
            </div>
          </div>

          {/* Travellers & Preferred Date Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label
                htmlFor="enquiry-travellers"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-text-dark)',
                  marginBottom: '0.4rem'
                }}
              >
                Number of Travellers <span style={{ color: '#C77A32' }}>*</span>
              </label>
              <input
                id="enquiry-travellers"
                type="number"
                min="1"
                max="50"
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: errors.travellers ? '1.5px solid #D32F2F' : '1px solid rgba(23, 61, 50, 0.2)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  color: 'var(--color-text-dark)',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-date"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-text-dark)',
                  marginBottom: '0.4rem'
                }}
              >
                Preferred Date (Optional)
              </label>
              <input
                id="enquiry-date"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(23, 61, 50, 0.2)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  color: 'var(--color-text-dark)',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Optional Email */}
          <div>
            <label
              htmlFor="enquiry-email"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
                marginBottom: '0.4rem'
              }}
            >
              Email Address (Optional)
            </label>
            <input
              id="enquiry-email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                border: errors.email ? '1.5px solid #D32F2F' : '1px solid rgba(23, 61, 50, 0.2)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                color: 'var(--color-text-dark)',
                outline: 'none'
              }}
            />
            {errors.email && (
              <span style={{ color: '#D32F2F', fontSize: '0.74rem', marginTop: '0.2rem', display: 'block' }}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label
              htmlFor="enquiry-message"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
                marginBottom: '0.4rem'
              }}
            >
              Additional Requirements or Notes (Optional)
            </label>
            <textarea
              id="enquiry-message"
              rows={3}
              placeholder="e.g. Senior citizens in group, specific ropeway assistance requirements, departure from Mumbai/Ahmedabad..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(23, 61, 50, 0.2)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                color: 'var(--color-text-dark)',
                outline: 'none',
                resize: 'none'
              }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '0.5rem' }}>
            <button
              type="submit"
              className="btn-primary"
              style={{
                width: '100%',
                backgroundColor: 'var(--color-forest)',
                color: 'var(--color-ivory)',
                padding: '1.05rem',
                fontSize: '0.86rem'
              }}
            >
              <Send size={16} />
              <span>SUBMIT ENQUIRY VIA WHATSAPP</span>
            </button>
            <span
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                color: 'var(--color-text-muted)',
                marginTop: '0.65rem'
              }}
            >
              Direct consultation on WhatsApp · No automated payment required
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

