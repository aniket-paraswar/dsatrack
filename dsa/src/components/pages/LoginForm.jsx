import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const formRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: -50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate authentication (Replace this with actual backend authentication)
    if (username && password) {
      navigate("/dashboard"); // Redirect to Dashboard page
    } else {
      alert("Please enter a valid username and password!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60">
      <div ref={formRef} className="bg-white p-8 rounded-xl shadow-2xl w-96 transform transition-all">
        <div className="bg-blue-100 text-blue-700 p-3 rounded-md mb-4 text-center">
          <strong>Note:</strong> Please use your own Leetcode username to register/sign in.
        </div>
        <div className="flex justify-center items-center mb-4">
          <FaCode className="text-blue-600 text-4xl mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">Code Quest</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Leetcode username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-600 text-sm hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-md">
            Sign in
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account yet? <a href="#" className="text-blue-600 hover:underline font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
