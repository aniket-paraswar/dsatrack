import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Spline from "@splinetool/react-spline";

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
    <section ref={heroRef} className="bg-blue-100 py-20">
       <Spline
        scene="https://prod.spline.design/9NwUhMAxgQlqoRMY/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;
