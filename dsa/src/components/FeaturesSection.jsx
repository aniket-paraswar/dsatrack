import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Spline from "@splinetool/react-spline";


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

  const features = [
    {
      title: "🚀 Visual Simulations",
      description: "Understand complex algorithms with animations.",
    },
    {
      title: "🏆 Gamified Learning",
      description: "Earn XP, badges, and compete on leaderboards.",
    },
    {
      title: "💬 Community Support",
      description: "Discuss problems and solutions with peers.",
    },
  ];

  return (

    <section id="features" className="py-16 bg-white">
       <Spline
        scene="https://prod.spline.design/IFvfu62f8vpvlUKT/scene.splinecode"
        width={1039}
        height={590}
      />
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Unlock the power of interactive learning and enhance your coding skills with our platform.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FeaturesSection;
