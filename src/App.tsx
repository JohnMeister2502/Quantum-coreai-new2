import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WebDevelopment from './components/WebDevelopment';
import WhatsAppAutomation from './components/WhatsAppAutomation';
import MessengerAutomation from './components/MessengerAutomation';
import EmailOutreach from './components/EmailOutreach';
import VideoSystem from './components/VideoSystem';
import BusinessAudit from './components/BusinessAudit';
import SocialFeed from './components/SocialFeed';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PricingToggle from './components/PricingToggle';

function App() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Navigation />
      <Hero />
      <WebDevelopment isAnnual={isAnnual} />
      <WhatsAppAutomation isAnnual={isAnnual} />
      <MessengerAutomation isAnnual={isAnnual} />
      <EmailOutreach isAnnual={isAnnual} />
      <VideoSystem isAnnual={isAnnual} />
      <BusinessAudit />
      <Testimonials />
      <SocialFeed />
      <Newsletter />
      <FinalCTA />
      <Footer />
      <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
    </div>
  );
}

export default App;