import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const features = [
  {
    title: 'Visual Simulations',
    description: 'Understand complex algorithms with animations.',
  },
  {
    title: 'Gamified Learning',
    description: 'Earn XP, badges, and compete on leaderboards.',
  },
  {
    title: 'Community Support',
    description: 'Discuss problems and solutions with peers.',
  },
];

const FeaturesSection = () => {
  const featureRefs = useRef([]);
  featureRefs.current = [];

  useEffect(() => {
    gsap.fromTo(
      featureRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Why Choose Us?
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-gray-700">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
