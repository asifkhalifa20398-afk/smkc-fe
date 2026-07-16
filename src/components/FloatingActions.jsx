import React from 'react';
import { FileText, Search, Download, Headset, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../context/translations';

const FloatingActions = () => {
  const { lang } = useLanguage();
  const tActions = translations[lang].actions;

  const icons = [
    <FileText size={22} className="text-white" />,
    <Search size={22} className="text-white" />,
    <Download size={22} className="text-white" />,
    <Headset size={22} className="text-white" />
  ];
  const iconBgs = ['#0d6efd', '#00b050', '#6f42c1', '#ff9900'];
  const links = ['#apply', '#track', '#download', '#help'];

  const actions = tActions.map((act, i) => ({
    ...act,
    icon: icons[i],
    iconBg: iconBgs[i],
    link: links[i]
  }));

  return (
    <div className="container-fluid px-md-5 mt-n4 position-relative" style={{ zIndex: 10 }}>
      <div className="mx-md-4">
        <div
          className="row g-0 rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-10"
          style={{ backgroundColor: '#1a407eff' }} // Deeper navy background matching mockup exactly
        >
          {actions.map((act, idx) => (
            <div
              key={idx}
              className="col-12 col-md-6 col-lg-3 action-card"
              style={{ cursor: 'pointer' }}
            >
              <a
                href={act.link}
                className="d-flex align-items-center justify-content-between p-4 text-decoration-none h-100 transition-all hover-bg-navy"
                style={{ minHeight: '104px' }}
              >
                <div className="d-flex align-items-center gap-3">
                  {/* Icon Wrapper with Custom Rounded Corners */}
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      backgroundColor: act.iconBg,
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px'
                    }}
                  >
                    {act.icon}
                  </div>
                  {/* Text Details */}
                  <div className="text-start">
                    <h5 className="text-white fw-bold mb-1 fs-6 font-outfit" style={{ letterSpacing: '-0.1px' }}>{act.title}</h5>
                    <p className="text-white small mb-0 lh-sm" style={{ fontSize: '0.78rem', opacity: 0.8 }}>{act.desc}</p>
                  </div>
                </div>
                {/* Arrow Icon with custom styling */}
                <div
                  className="arrow-btn rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '28px',
                    height: '28px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ArrowRight size={13} style={{ color: 'rgba(255, 255, 255, 0.65)', transition: 'all 0.2s ease' }} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingActions;
