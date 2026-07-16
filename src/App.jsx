import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingActions from './components/FloatingActions';
import InfoSection from './components/InfoSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, tab: 'login', userType: 'applicant' });

  const handleOpenApplicant = () => setAuthModal({ isOpen: true, tab: 'login', userType: 'applicant' });
  const handleOpenOffice = () => setAuthModal({ isOpen: true, tab: 'login', userType: 'office' });
  const handleCloseAuth = () => setAuthModal(prev => ({ ...prev, isOpen: false }));

  return (
    <LanguageProvider>
      <div className="d-flex flex-column min-vh-100 bg-light">
        {/* 1. Header Bar */}
        <Header 
          onApplicantClick={handleOpenApplicant} 
          onOfficeClick={handleOpenOffice} 
        />

        {/* Main Container */}
        <main className="flex-grow-1">
          {/* 2. Hero Section with Background and Text */}
          <Hero />

          {/* 3. Overlapping Action Bar Cards */}
          <FloatingActions />

          {/* 4. Three-Column Middle Content (Why Choose Us, Contacts, Location) */}
          <InfoSection />

          {/* 5. Frequently Asked Questions (Grid Accordion) */}
          <FAQSection />
        </main>

        {/* 6. Deep Navy Blue Brand Footer */}
        <Footer />

        {/* Auth Modal (Login / Register) */}
        <AuthModal 
          isOpen={authModal.isOpen} 
          initialTab={authModal.tab} 
          userType={authModal.userType}
          onClose={handleCloseAuth} 
        />
      </div>
    </LanguageProvider>
  );
}

export default App;

