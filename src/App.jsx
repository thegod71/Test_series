import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import WhatYouGet from './components/WhatYouGet';
import UpscTestSeriesArticle from './components/UpscTestSeriesArticle';
import Testimonials from './components/Testimonials';
import Programmes from './components/Programmes';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import ToastNotification from './components/ToastNotification';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Graceful automatic trigger on page load (600ms delay for smooth perception)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (programmeName = '') => {
    setSelectedProgramme(programmeName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProgramme('');
  };

  const handleLeadSubmitted = (leadData) => {
    setToastMessage(`Thank you, ${leadData.fullName}! Your registration has been received.`);
    setShowToast(true);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#faf8f5] text-slate-800">
      {/* Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Headline, Student & Heritage Visuals, and Embedded Lead Card */}
        <HeroSection onLeadSubmitted={handleLeadSubmitted} />

        {/* Why Choose Us: 4 core pillars */}
        <WhyChooseUs />

        {/* What You Get: Dark Navy Banner with Booklets, Checklist, and Hand Writing Photo */}
        <WhatYouGet onOpenModal={handleOpenModal} />

        {/* CREATIVE ADD-ON: Comprehensive UPSC CSE 2027 All India Pre-cum-Mains Testing Ecosystem */}
        <UpscTestSeriesArticle onOpenModal={handleOpenModal} />

        {/* Testimonials: Real student reviews with ratings and ranks */}
        <Testimonials />

        {/* Programmes: Prelims, Mains (Most Popular), UPPCS Cards */}
        <Programmes onSelectProgramme={handleOpenModal} />

        {/* FAQ & Counsellor Assistance */}
        <FAQSection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Lead Generation Popup Modal (Auto-opens on page load & accessible via buttons) */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialProgramme={selectedProgramme}
        onLeadSubmitted={handleLeadSubmitted}
      />

      {/* Toast Notification for Confirmation */}
      <ToastNotification
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
