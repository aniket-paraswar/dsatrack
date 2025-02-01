import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { FaCode,FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaSignInAlt } from "react-icons/fa"; 

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
      className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md py-4 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex"><FaCode className="text-blue-600 text-4xl mr-2" />
        <h1 className="text-3xl font-bold text-gray-900 hover:text-[#6A5ACD] transition duration-300">
          Code Quest
        </h1>
        </div>
        

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li>
            <a
              href="#home"
              className="flex items-center space-x-2 hover:text-[#6A5ACD] transition duration-300"
            >
              <FaHome size={22} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center space-x-2 hover:text-[#6A5ACD] transition duration-300"
            >
              <FaInfoCircle size={22} />
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="flex items-center space-x-2 hover:text-[#6A5ACD] transition duration-300"
            >
              <FaCogs size={22} />
              <span>Features</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center space-x-2 hover:text-[#6A5ACD] transition duration-300"
            >
              <FaEnvelope size={22} />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        {/* Animated Gradient Button */}
        <button
          className="hidden md:flex items-center gap-2 py-2 px-6 bg-gradient-to-r from-[#6A5ACD] to-[#4A90E2] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleSignIn}
        >
          <FaSignInAlt size={18} />
          Sign In
        </button>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-900 text-3xl hover:text-[#6A5ACD] transition duration-300">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;