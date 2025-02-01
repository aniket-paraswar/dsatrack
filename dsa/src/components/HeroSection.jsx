import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section ref={heroRef} className="bg-blue-100 py-20 px-6 flex flex-col items-center text-center">
      {/* Container for content */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* First Column - Spline Model 1 */}
        <div className="w-full max-w-lg mx-auto mb-8 md:mb-0">
          <Spline
            scene="https://prod.spline.design/9NwUhMAxgQlqoRMY/scene.splinecode"
            className="w-full h-auto"  // Ensure the Spline model takes up the full width with auto height
          />
        </div>

        {/* Second Column - Spline Model 2 */}
        <div className="w-full max-w-lg mx-auto">
          <Spline
            scene="https://prod.spline.design/2ddTVdAge0to-UPC/scene.splinecode"
            className="w-full h-100"  // Adjust height to make the model properly visible
          />
        </div>
      </div>

      {/* Text and Join Us Button */}
      <div className="max-w-3xl w-full text-center mt-8">

        <button className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Join Us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
