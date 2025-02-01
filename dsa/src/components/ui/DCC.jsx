import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

// Fallback problem if API call fails
const fallbackProblem = {
  questionLink: "https://leetcode.com/problems/special-array-i/",
  questionTitle: "Special Array I",
  difficulty: "Easy",
  question: `<p>An array is considered <strong>special</strong> if every pair of its adjacent elements contains two numbers with different parity.</p>
    <p>You are given an array of integers <code>nums</code>. Return <code>true</code> if <code>nums</code> is a <strong>special</strong> array, otherwise, return <code>false</code>.</p>`,
  exampleTestcases: `[1]\n[2,1,4]\n[4,3,1,6]`,
  likes: 272,
  dislikes: 15,
};

const DCC = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://alfa-leetcode-api.onrender.com/daily')
      .then((response) => response.ok ? response.json() : Promise.reject('Failed to load'))
      .then((problemData) => {
        setData(problemData);
        setLoading(false);
      })
      .catch(() => {
        setData(fallbackProblem); // Use fallback problem
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-4 border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">LeetCode Daily Challenge</h1>

      {/* Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Problem Description */}
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold mb-2 text-gray-800">{data.questionTitle}</h2>

          {/* Difficulty Badge */}
          <div className="flex items-center space-x-2 mb-4">
            <span className={`px-3 py-1 text-sm font-bold text-white rounded-full ${
              data.difficulty === "Easy" ? "bg-green-500" :
              data.difficulty === "Medium" ? "bg-orange-500" :
              "bg-red-500"
            }`}>
              {data.difficulty}
            </span>
          </div>

          {/* Problem Description */}
          <h3 className="font-semibold text-xl text-gray-800 mb-2">Problem Description</h3>
          <div dangerouslySetInnerHTML={{ __html: data.question }} className="overflow-y-auto max-h-64 scroll-smooth mb-6"></div>
        </div>

        {/* Right Column: Test Cases Section */}
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">Example Testcases</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-6">{data.exampleTestcases}</pre>

          <a
            href={data.questionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Solve on LeetCode
          </a>
        </div>
      </div>

      {/* Likes and Dislikes Section */}
      <div className="mt-4 flex items-center justify-between text-gray-600">
        <div className="flex items-center space-x-2">
          <FaThumbsUp className="text-green-500" />
          <p className="text-sm">Likes: {data.likes}</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaThumbsDown className="text-red-500" />
          <p className="text-sm">Dislikes: {data.dislikes}</p>
        </div>
      </div>
    </div>
  );
};

export default DCC;
