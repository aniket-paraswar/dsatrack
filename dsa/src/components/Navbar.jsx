import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">DSA Mastery</div>
        <div className="space-x-4">
          <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
