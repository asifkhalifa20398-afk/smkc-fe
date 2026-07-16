import React from 'react';
import {
  MapPin, Mail, Phone, Calendar, Clock,
  Monitor, Shield, RefreshCw, FileText, ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../context/translations';

const InfoSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].info;

  return (
    <section className="container-fluid px-md-5 py-5 bg-light" id="contact">
      <div className="mx-md-4">
        <div className="row g-4">

          {/* Column 1: Why Choose Our Services */}
          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white">
              <div className="d-flex align-items-center gap-2 mb-4">
                <RefreshCw className="text-primary" size={20} />
                <h4 className="fw-bold mb-0 text-dark fs-5">{t.whyChooseTitle}</h4>
              </div>

              <div className="row g-3 h-100">
                {/* 2x2 Grid of features (responsive: stacks on mobile, grid on tablet+) */}

                {/* Item 1 */}
                <div className="col-12 col-sm-6">
                  <div className="p-3 rounded-4 h-100 d-flex flex-column text-start" style={{ backgroundColor: '#f0f5ff', border: '1px solid #e1ecff' }}>
                    <div className="bg-primary p-2.5 rounded-3 text-white d-inline-block mb-3 align-self-start" style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Monitor size={20} />
                    </div>
                    <h6 className="fw-bold text-dark mb-1 fs-6">{t.item1Title}</h6>
                    <p className="text-secondary small mb-0 lh-sm">{t.item1Desc}</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-12 col-sm-6">
                  <div className="p-3 rounded-4 h-100 d-flex flex-column text-start" style={{ backgroundColor: '#eefcf4', border: '1px solid #def7e8' }}>
                    <div className="bg-success p-2.5 rounded-3 text-white d-inline-block mb-3 align-self-start" style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Shield size={20} />
                    </div>
                    <h6 className="fw-bold text-dark mb-1 fs-6">{t.item2Title}</h6>
                    <p className="text-secondary small mb-0 lh-sm">{t.item2Desc}</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="col-12 col-sm-6">
                  <div className="p-3 rounded-4 h-100 d-flex flex-column text-start" style={{ backgroundColor: '#fff7ed', border: '1px solid #ffedd5' }}>
                    <div className="bg-warning p-2.5 rounded-3 text-white d-inline-block mb-3 align-self-start" style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={20} />
                    </div>
                    <h6 className="fw-bold text-dark mb-1 fs-6">{t.item3Title}</h6>
                    <p className="text-secondary small mb-0 lh-sm">{t.item3Desc}</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="col-12 col-sm-6">
                  <div className="p-3 rounded-4 h-100 d-flex flex-column text-start" style={{ backgroundColor: '#faf5ff', border: '1px solid #f3e8ff' }}>
                    <div className="bg-purple p-2.5 rounded-3 text-white d-inline-block mb-3 align-self-start" style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6f42c1' }}>
                      <FileText size={20} />
                    </div>
                    <h6 className="fw-bold text-dark mb-1 fs-6">{t.item4Title}</h6>
                    <p className="text-secondary small mb-0 lh-sm">{t.item4Desc}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center gap-2">
                  <Phone className="text-primary" size={20} />
                  <h4 className="fw-bold mb-0 text-dark fs-5">{t.contactTitle}</h4>
                </div>
                <a href="#contact" className="text-primary small fw-semibold text-decoration-none">{t.viewAll}</a>
              </div>

              <div className="d-flex flex-column gap-3.5">
                {/* Head Office Address */}
                <div className="d-flex gap-3 align-items-start">
                  <div className="bg-light p-2 rounded-3 text-primary flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="small fw-bold text-dark">{t.headOffice}</div>
                    <div className="text-secondary small mt-0.5 lh-sm">{t.headOfficeAddr}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex gap-3 align-items-start">
                  <div className="bg-light p-2 rounded-3 text-primary flex-shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="small fw-bold text-dark">{t.email}</div>
                    <div className="text-secondary small mt-0.5 font-monospace">smkctpd201@gmail.com</div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="d-flex gap-3 align-items-start">
                  <div className="bg-light p-2 rounded-3 text-primary flex-shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="small fw-bold text-dark">{t.telephone}</div>
                    <div className="text-secondary small mt-0.5 font-monospace">(0233) 262xxxx</div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="d-flex gap-3 align-items-start">
                  <div className="bg-light p-2 rounded-3 text-primary flex-shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="small fw-bold text-dark">{t.officeHours}</div>
                    <div className="text-secondary small mt-0.5">{t.officeHoursVal}</div>
                  </div>
                </div>

                {/* Weekly Off */}
                <div className="d-flex gap-3 align-items-start">
                  <div className="bg-light p-2 rounded-3 text-primary flex-shrink-0 mt-0.5">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="small fw-bold text-dark">{t.weeklyOff}</div>
                    <div className="text-secondary small mt-0.5 fw-medium text-danger">{t.weeklyOffVal}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Location */}
          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center gap-2">
                  <MapPin className="text-primary" size={20} />
                  <h4 className="fw-bold mb-0 text-dark fs-5">{t.locationTitle}</h4>
                </div>
                <a
                  href="https://www.google.com/maps/place/Sangli+Miraj+Kupwad+Corporation+Administrtive+Building/@16.8603377,74.5652959,17z/data=!4m6!3m5!1s0x3bc11840c8545b77:0x861d950f6a40370b!8m2!3d16.8603604!4d74.565248!16s%2Fg%2F124yd3wvw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary small fw-semibold text-decoration-none d-flex align-items-center gap-1"
                >
                  <span>{t.openMaps}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
              <div className="flex-grow-1 w-100 position-relative rounded-3 overflow-hidden" style={{ minHeight: '350px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=16.8603604,74.565248+(Sangli+Miraj+Kupwad+Corporation+Administrative+Building)&z=16&ie=UTF8&iwloc=addr&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="SMKMC Location Map"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
