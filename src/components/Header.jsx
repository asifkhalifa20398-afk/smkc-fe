import React, { useState } from 'react';
import Emblem from './Emblem';
import { Home, HelpCircle, PhoneCall, Globe, LogIn, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../context/translations';

const Header = ({ onApplicantClick, onOfficeClick }) => {
  const { lang, setLang } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].header;

  const handleLangChange = (selectedLang) => {
    setLang(selectedLang);
    setLangDropdownOpen(false);
  };

  return (
    <header className="bg-white border-bottom sticky-top py-2 shadow-sm">
      <div className="container-fluid px-md-5">
        <div className="d-flex flex-wrap align-items-center justify-content-between">

          {/* Logo & Portal Identity Section */}
          <div className="d-flex align-items-center gap-3">
            <Emblem size={56} className="flex-shrink-0" />
            <div className="lh-sm border-end pe-3 me-3 d-none d-lg-block">
              <div className="fw-bold text-dark fs-5 mb-0" style={{ letterSpacing: '-0.3px', fontFamily: '"Outfit", sans-serif' }}>
                {t.municipalityLine1}
              </div>
              <div className="fw-bold fs-5 text-uppercase" style={{ color: '#801008', letterSpacing: '-0.3px', fontFamily: '"Outfit", sans-serif' }}>
                {t.municipalityLine2}
              </div>
            </div>

            <div className="lh-sm">
              <div className="fw-bold text-primary mb-0 font-outfit" style={{ fontSize: 'calc(0.85rem + 0.15vw)', lineHeight: '1.2' }}>
                {t.dept}
              </div>
              <div className="text-secondary fw-medium" style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                {t.portalSubtitle}
              </div>
            </div>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            className="btn btn-light d-lg-none p-2 border rounded-3 d-flex align-items-center justify-content-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{ width: '40px', height: '40px' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <nav className="d-flex align-items-center gap-3">
              <a href="#" className="nav-link active d-flex align-items-center gap-1 fw-semibold text-primary px-2">
                <Home size={18} /><span>{t.home}</span>
              </a>
              <a href="#faq" className="nav-link text-dark d-flex align-items-center gap-1 fw-medium px-2">
                <HelpCircle size={18} /><span>{t.faq}</span>
              </a>
              <a href="#contact" className="nav-link text-dark d-flex align-items-center gap-1 fw-medium px-2">
                <PhoneCall size={18} /><span>{t.contactUs}</span>
              </a>
            </nav>

            {/* Language Selector */}
            <div className="position-relative">
              <button
                className="btn btn-light border d-flex align-items-center gap-2 px-3 py-1.5 fw-medium rounded-3"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                style={{ fontSize: '0.9rem' }}
              >
                <Globe size={16} className="text-secondary" />
                <span>{lang}</span>
                <ChevronDown size={14} className="text-secondary ms-1" />
              </button>

              {langDropdownOpen && (
                <div
                  className="position-absolute bg-white border rounded-3 shadow-lg mt-2 end-0 py-1"
                  style={{ zIndex: 1050, minWidth: '120px' }}
                >
                  <button
                    className={`dropdown-item text-start px-3 py-2 ${lang === 'English' ? 'bg-light fw-bold text-primary' : ''}`}
                    onClick={() => handleLangChange('English')}
                  >English</button>
                  <button
                    className={`dropdown-item text-start px-3 py-2 ${lang === 'मराठी' ? 'bg-light fw-bold text-primary' : ''}`}
                    onClick={() => handleLangChange('मराठी')}
                  >मराठी</button>
                </div>
              )}
            </div>

            {/* Login Buttons */}
            <div className="d-flex align-items-center gap-2">
              <button onClick={onApplicantClick} className="btn btn-outline-primary d-flex align-items-center gap-1.5 px-3 py-1.5 fw-semibold rounded-3" style={{ fontSize: '0.9rem' }}>
                <LogIn size={16} /><span>{t.applicantLogin}</span>
              </button>
              <button onClick={onOfficeClick} className="btn btn-primary d-flex align-items-center gap-1.5 px-3 py-1.5 fw-semibold rounded-3" style={{ fontSize: '0.9rem' }}>
                <LogIn size={16} /><span>{t.officeLogin}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="d-lg-none mt-3 pt-3 border-top animate-fade-in">
            <nav className="d-flex flex-column gap-2 mb-3">
              <a href="#" className="nav-link active d-flex align-items-center gap-2 fw-semibold text-primary py-2.5 px-3 rounded-3 bg-light" onClick={() => setMobileMenuOpen(false)}>
                <Home size={18} /><span>{t.home}</span>
              </a>
              <a href="#faq" className="nav-link text-dark d-flex align-items-center gap-2 fw-medium py-2.5 px-3 rounded-3" onClick={() => setMobileMenuOpen(false)}>
                <HelpCircle size={18} /><span>{t.faq}</span>
              </a>
              <a href="#contact" className="nav-link text-dark d-flex align-items-center gap-2 fw-medium py-2.5 px-3 rounded-3" onClick={() => setMobileMenuOpen(false)}>
                <PhoneCall size={18} /><span>{t.contactUs}</span>
              </a>
            </nav>

            <div className="border-top pt-3 mb-3">
              <div className="d-flex align-items-center justify-content-between px-3 mb-2">
                <span className="small text-secondary fw-semibold">Language</span>
                <div className="d-flex gap-2">
                  <button onClick={() => handleLangChange('English')} className={`btn btn-sm ${lang === 'English' ? 'btn-primary' : 'btn-light border'}`}>English</button>
                  <button onClick={() => handleLangChange('मराठी')} className={`btn btn-sm ${lang === 'मराठी' ? 'btn-primary' : 'btn-light border'}`}>मराठी</button>
                </div>
              </div>
            </div>

            <div className="border-top pt-3 pb-2 d-flex flex-column gap-2">
              <button onClick={() => { onApplicantClick(); setMobileMenuOpen(false); }} className="btn btn-outline-primary w-100 py-2.5 fw-semibold rounded-3 d-flex align-items-center justify-content-center gap-2">
                <LogIn size={16} /><span>{t.applicantLogin}</span>
              </button>
              <button onClick={() => { onOfficeClick(); setMobileMenuOpen(false); }} className="btn btn-primary w-100 py-2.5 fw-semibold rounded-3 d-flex align-items-center justify-content-center gap-2">
                <LogIn size={16} /><span>{t.officeLogin}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
