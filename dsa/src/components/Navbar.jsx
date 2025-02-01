import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaSignInAlt } from "react-icons/fa"; // Importing React Icons

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
        <h1 className="text-3xl font-bold text-white hover:text-[#C5BAFF] transition duration-300">
          Code Quest
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <a
              href="#home"
              className="flex items-center space-x-2 hover:text-[#C5BAFF] transition duration-300"
            >
              <FaHome size={22} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center space-x-2 hover:text-[#C5BAFF] transition duration-300"
            >
              <FaInfoCircle size={22} />
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="flex items-center space-x-2 hover:text-[#C5BAFF] transition duration-300"
            >
              <FaCogs size={22} />
              <span>Features</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center space-x-2 hover:text-[#C5BAFF] transition duration-300"
            >
              <FaEnvelope size={22} />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        {/* Animated Shimmer Button */}
        <button
          className="hidden md:block py-2 px-4 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300"
          onClick={handleSignIn}
        >
          <FaSignInAlt size={18} className="mr-2" />
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
