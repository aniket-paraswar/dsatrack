import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaCode,
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
    <nav ref={navRef} className="bg-[#4B0082] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo with Code Icon */}
        <div className="flex items-center space-x-2 text-white">
          <FaCode className="text-3xl" />
          <h1 className="text-2xl font-bold">Code Quest</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white font-medium">
          {[
            { label: "Home", icon: <FaHome className="text-blue-400" />, section: "home" },
            { label: "Messages", icon: <FaEnvelope className="text-red-400" />, section: "messages" },
            { label: "Global", icon: <FaTrophy className="text-yellow-400" />, section: "global" },
            { label: "Visualize", icon: <FaShieldAlt className="text-green-400" />, section: "challenge" },
            { label: "Discuss", icon: <FaBullseye className="text-purple-400" />, section: "goals" },
            { label: "DCC", icon: <FaCalendarCheck className="text-orange-400" />, section: "dcc" },
            { label: "Sheets", icon: <FaGraduationCap className="text-indigo-400" />, section: "sheets" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 cursor-pointer hover:text-gray-300 transition duration-300"
              onClick={() => onMenuClick(item.section)}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
