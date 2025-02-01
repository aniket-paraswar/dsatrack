import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaHome,
  FaEnvelope,
  FaTrophy,
  FaShieldAlt,
  FaBullseye,
  FaCalendarCheck,
  FaGraduationCap,
} from "react-icons/fa";

const DashboardNav = ({ onMenuClick }) => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <nav ref={navRef} className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo with Code Icon */}
        <div className="flex items-center space-x-2 text-blue-600">
          <FaHome className="text-3xl" />
          <h1 className="text-2xl font-bold">Code Quest</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="flex items-center space-x-2 hover:text-blue-600 transition duration-300" onClick={() => onMenuClick("home")}>
            <FaHome className="text-xl text-blue-600" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600 transition duration-300" onClick={() => onMenuClick("messages")}>
            <FaEnvelope className="text-xl text-red-500" />
            <span>Messages</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600 transition duration-300" onClick={() => onMenuClick("global")}>
            <FaTrophy className="text-xl text-yellow-500" />
            <span>Global</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600 transition duration-300" onClick={() => onMenuClick("challenge")}>
            <FaShieldAlt className="text-xl text-green-500" />
            <span>Challenge</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600 transition duration-300" onClick={() => onMenuClick("goals")}>
            <FaBullseye className="text-xl text-purple-500" />
            <span>Goals</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600 transition duration-300" onClick={() => onMenuClick("dcc")}>
            <FaCalendarCheck className="text-xl text-orange-500" />
            <span>DCC</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600 transition duration-300" onClick={() => onMenuClick("sheets")}>
            <FaGraduationCap className="text-xl text-indigo-500" />
            <span>Sheets</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
