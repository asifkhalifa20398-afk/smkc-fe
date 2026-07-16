import React from 'react';
import { Shield, Clock, FileDown } from 'lucide-react';
import heroImage from '../assets/hero_river_banner.png';
import { useLanguage } from '../context/LanguageContext';
import translations from '../context/translations';

const Hero = () => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="position-relative overflow-hidden" style={{ minHeight: '460px' }}>

      {/* Background Image Container */}
      <div
        className="position-absolute top-0 bottom-0 end-0 start-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          zIndex: 1
        }}
      />

      {/* Soft Sky Blue Gradient Overlay matching mockup exactly */}
      <div
        className="position-absolute top-0 bottom-0 start-0 end-0 hero-overlay"
        style={{ zIndex: 2 }}
      />

      {/* Hero Content Container */}
      <div className="container-fluid px-md-5 position-relative py-5 h-100 d-flex flex-column justify-content-center" style={{ zIndex: 3 }}>
        <div className="row py-4">
          <div className="col-12 col-lg-6 col-xl-5 ps-md-4">

            {/* Top Tagline Badge */}
            <span className="d-inline-block mb-3 px-3 py-1.5 fw-semibold rounded-2 border" style={{
              backgroundColor: '#e6f0fa',
              borderColor: '#bcccf0',
              color: '#0056b3',
              fontSize: '0.8rem',
              fontFamily: '"Outfit", sans-serif'
            }}>
              {t.badge}
            </span>

            {/* Main Title */}
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: 'calc(1.8rem + 1.5vw)',
                lineHeight: '1.18',
                color: '#203560',
                fontFamily: '"Outfit", sans-serif',
                letterSpacing: '-0.8px'
              }}
            >
              {t.title1} <br />
              {t.title2}
            </h1>

            {/* Subtitle */}
            <p className="text-secondary mb-3 fs-5 lh-sm" style={{ maxWidth: '460px', fontSize: '1.1rem' }}>
              {t.subtitle}
            </p>

            {/* Short Golden Line Accent */}
            <div style={{ width: '42px', height: '3.5px', backgroundColor: '#ff9900', margin: '1.25rem 0 1.75rem 0', borderRadius: '2px' }}></div>

            {/* Horizontal Badges / Key Value Props with separators */}
            <div className="d-flex flex-wrap align-items-center gap-3.5 pt-1">

              {/* Badge 1 */}
              <div className="d-flex align-items-center gap-2 border-end pe-3">
                <Shield className="text-primary flex-shrink-0" size={24} style={{ color: '#0d6efd' }} />
                <div className="lh-sm">
                  <div className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>{t.secure}</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{t.trusted}</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="d-flex align-items-center gap-2 border-end pe-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
                <div className="lh-sm">
                  <div className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>{t.razorpay}</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{t.securePayment}</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="d-flex align-items-center gap-2 border-end pe-3">
                <Clock className="text-primary flex-shrink-0" size={24} style={{ color: '#0d6efd' }} />
                <div className="lh-sm">
                  <div className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>{t.realtime}</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{t.tracking}</div>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="d-flex align-items-center gap-2">
                <FileDown className="text-primary flex-shrink-0" size={24} style={{ color: '#0d6efd' }} />
                <div className="lh-sm">
                  <div className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>{t.digital}</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{t.certificates}</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
