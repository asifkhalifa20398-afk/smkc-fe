import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../context/translations';

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const { lang } = useLanguage();
  const tf = translations[lang].faq;

  const faqs = tf.items.map((item, i) => ({ id: i + 1, ...item }));

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section className="container-fluid px-md-5 py-5 bg-white border-top" id="faq">
      <div className="mx-md-4">
        
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark font-outfit" style={{ fontSize: '2rem' }}>{tf.title}</h2>
          <p className="text-secondary small mt-1">{tf.subtitle}</p>
        </div>

        {/* Two-column FAQ Grid */}
        <div className="row g-3">
          {/* Left Column - FAQs 1 to 6 */}
          <div className="col-12 col-lg-6 d-flex flex-column gap-3">
            {faqs.filter((_, i) => i < 6).map((item) => {
              const isOpen = activeFaq === item.id;
              return (
                <div
                  key={item.id}
                  className={`card border rounded-3 overflow-hidden transition-all shadow-sm ${isOpen ? 'border-primary' : 'border-light-subtle'}`}
                  style={isOpen ? { backgroundColor: '#f8fafd' } : { backgroundColor: '#ffffff' }}
                >
                  <button
                    className="btn w-100 text-start p-3 d-flex align-items-center justify-content-between border-0 bg-transparent"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="fw-bold text-dark fs-6" style={{ letterSpacing: '-0.2px' }}>
                      {item.q}
                    </span>
                    <span className="text-primary flex-shrink-0 ms-3">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="card-body border-top p-4 bg-white text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column - FAQs 7 to 11 */}
          <div className="col-12 col-lg-6 d-flex flex-column gap-3">
            {faqs.filter((_, i) => i >= 6).map((item) => {
              const isOpen = activeFaq === item.id;
              return (
                <div
                  key={item.id}
                  className={`card border rounded-3 overflow-hidden transition-all shadow-sm ${isOpen ? 'border-primary' : 'border-light-subtle'}`}
                  style={isOpen ? { backgroundColor: '#f8fafd' } : { backgroundColor: '#ffffff' }}
                >
                  <button
                    className="btn w-100 text-start p-3 d-flex align-items-center justify-content-between border-0 bg-transparent"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="fw-bold text-dark fs-6" style={{ letterSpacing: '-0.2px' }}>
                      {item.q}
                    </span>
                    <span className="text-primary flex-shrink-0 ms-3">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="card-body border-top p-4 bg-white text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
