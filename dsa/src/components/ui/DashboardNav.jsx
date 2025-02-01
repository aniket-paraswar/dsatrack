// DashboardNav.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaHome,
  FaEnvelope,
  FaTrophy,
  FaShieldAlt,
  FaBullseye,
  FaCalendarCheck,
  FaGraduationCap,
  FaUserCircle,
} from "react-icons/fa";

const DashboardNav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <nav ref={navRef} className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo with Code Icon */}
        <div className="flex items-center space-x-2 text-blue-600">
          <FaCode className="text-3xl" />
          <h1 className="text-2xl font-bold">Code Quest</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3 hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2 text-gray-500">🔍</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <li className="flex items-center space-x-1 hover:text-blue-600 transition duration-300">
            <Link to="/home" className="flex items-center space-x-1">
              <FaHome className="text-xl text-blue-600" />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-600 transition duration-300">
            <Link to="/messages" className="flex items-center space-x-1">
              <FaEnvelope className="text-xl text-red-500" />
              <span>Messages</span>
            </Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-600 transition duration-300">
            <Link to="/global" className="flex items-center space-x-1">
              <FaTrophy className="text-xl text-yellow-500" />
              <span>Global</span>
            </Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-600 transition duration-300">
            <Link to="/challenge" className="flex items-center space-x-1">
              <FaShieldAlt className="text-xl text-green-500" />
              <span>Challenge</span>
            </Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-600 transition duration-300">
            <Link to="/goals" className="flex items-center space-x-1">
              <FaBullseye className="text-xl text-purple-500" />
              <span>Goals</span>
            </Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-600 transition duration-300">
            <Link to="/dcc" className="flex items-center space-x-1">
              <FaCalendarCheck className="text-xl text-orange-500" />
              <span>DCC</span>
            </Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-600 transition duration-300">
            <Link to="/sheets" className="flex items-center space-x-1">
              <FaGraduationCap className="text-xl text-indigo-500" />
              <span>Sheets</span>
            </Link>
          </li>
        </ul>

        {/* User Profile Icon */}
        <FaUserCircle className="text-3xl text-gray-700 cursor-pointer hover:text-blue-500 transition duration-300" />
      </div>
    </nav>
  );
};

export default DashboardNav;
