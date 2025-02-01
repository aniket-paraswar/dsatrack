import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <section ref={heroRef} className="bg-custom-blue py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Master Data Structures & Algorithms
        </h1>
        <p className="mt-4 text-gray-600">
          Interactive learning with visualizations and challenges.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
