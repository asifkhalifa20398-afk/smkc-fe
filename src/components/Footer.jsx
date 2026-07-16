import React from 'react';
import Emblem from './Emblem';
import { useLanguage } from '../context/LanguageContext';
import translations from '../context/translations';

// Inline SVGs for Brand Icons to ensure reliable build and rendering
const FacebookIcon = ({ size = 16, style = {} }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ size = 16, style = {} }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ size = 16, style = {} }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ size = 16, style = {} }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const Footer = () => {
  const { lang } = useLanguage();
  const tf = translations[lang].footer;

  const socialLinks = [
    { name: 'Facebook', link: '#facebook', icon: FacebookIcon },
    { name: 'Twitter', link: '#twitter', icon: TwitterIcon },
    { name: 'Youtube', link: '#youtube', icon: YoutubeIcon },
    { name: 'Instagram', link: '#instagram', icon: InstagramIcon }
  ];

  const quickLinks = tf.quickLinkItems.map((name, i) => ({
    name,
    link: ['#apply-zone','#apply-part','#aaple-sarkar','#manual','#feedback','#rts','#maha-gov','#tp-dept'][i]
  }));

  const legalLinks = tf.legalLinkItems.map((name, i) => ({
    name,
    link: ['#timeline','#cmap','#cap','#charges-gr','#hyperlink-policies','#privacy-policies','#terms-conditions','#website-monitoring','#disclaimer'][i]
  }));

  const contactLinks = tf.contactItems.map((name, i) => ({
    name,
    link: ['#contact','#feedback','#enquiry'][i]
  }));

  const headingStyle = {
    color: 'var(--accent-gold)',
    fontWeight: '700',
    letterSpacing: '0.8px',
    borderBottom: '1.5px solid var(--accent-gold)',
    paddingBottom: '8px',
    marginBottom: '16px',
    fontSize: '0.9rem'
  };

  const renderLinkItem = (item, idx) => (
    <li key={idx} className="mb-2">
      <a
        href={item.link}
        className="text-decoration-none small hover-white d-flex align-items-start gap-1"
        style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.4' }}
      >
        <span
          className="flex-shrink-0"
          style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', lineHeight: '0.9' }}
        >
          &rsaquo;
        </span>
        <span style={{ flex: 1, minWidth: 0, wordBreak: 'break-word' }}>
          {item.name}
        </span>
      </a>
    </li>
  );

  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#203e66', fontFamily: '"Outfit", sans-serif' }}>
      <div className="container-fluid px-md-5">
        <div className="mx-md-4">
          <div className="row g-4 mb-4">

            {/* Column 1: Brand Logo */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="d-flex flex-column align-items-start gap-3">
                <Emblem size={100} />
                <h6 className="fw-bold mb-0" style={{ color: 'var(--accent-gold)', fontSize: '0.95rem', lineHeight: '1.3' }}>
                  Town Planning Department
                </h6>
              </div>
            </div>

            {/* Column 2: Follow us on */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <h6 style={headingStyle}>{tf.followUs}</h6>
              <ul className="list-unstyled d-flex flex-column gap-2.5 mb-0">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx}>
                      <a href={item.link} className="text-decoration-none small d-flex align-items-center gap-2 hover-white" style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>
                        <Icon size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                        <span style={{ flex: 1, minWidth: 0 }}>{item.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <h6 className="text-uppercase" style={headingStyle}>{tf.quickLinks}</h6>
              <ul className="list-unstyled mb-0">
                {quickLinks.map((item, idx) => renderLinkItem(item, idx))}
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <h6 className="text-uppercase" style={headingStyle}>{tf.legalLinks}</h6>
              <ul className="list-unstyled mb-0">
                {legalLinks.map((item, idx) => renderLinkItem(item, idx))}
              </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-2">
              <h6 className="text-uppercase" style={headingStyle}>{tf.contact}</h6>
              <ul className="list-unstyled mb-0">
                {contactLinks.map((item, idx) => renderLinkItem(item, idx))}
              </ul>
            </div>

          </div>

          {/* Sub-footer Separator */}
          <div className="border-top border-secondary border-opacity-20 pt-3 mt-4">
              <div className="text-center text-secondary" style={{ fontSize: '0.75rem' }}>
                {tf.copyright}
              </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
