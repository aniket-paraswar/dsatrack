import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import FeaturesSection from '../FeaturesSection';
import Footer from '../Footer';

function LandingPage() {
  return (
    <div className="landing">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
