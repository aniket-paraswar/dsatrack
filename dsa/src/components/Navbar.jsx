import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-md py-4 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">DSA Mastery</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-[#C5BAFF] transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#C5BAFF] transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-[#C5BAFF] transition duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#C5BAFF] transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Animated Shimmer Button */}
        <button className="shimmer-button hidden md:block" onClick={handleSignIn}>
          Sign In
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
