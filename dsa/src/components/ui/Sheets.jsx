import { useEffect, useState } from "react";

const fallbackProblems = [
  { id: "1", title: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
  { id: "2", title: "Add Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/add-two-numbers/" },
  { id: "3", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { id: "4", title: "Median of Two Sorted Arrays", difficulty: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
  { id: "5", title: "Longest Palindromic Substring", difficulty: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
  { id: "6", title: "Zigzag Conversion", difficulty: "Medium", link: "https://leetcode.com/problems/zigzag-conversion/" },
  { id: "7", title: "Reverse Integer", difficulty: "Medium", link: "https://leetcode.com/problems/reverse-integer/" },
  { id: "8", title: "String to Integer (atoi)", difficulty: "Medium", link: "https://leetcode.com/problems/string-to-integer-atoi/" },
  { id: "9", title: "Palindrome Number", difficulty: "Easy", link: "https://leetcode.com/problems/palindrome-number/" },
  { id: "10", title: "Regular Expression Matching", difficulty: "Hard", link: "https://leetcode.com/problems/regular-expression-matching/" },
];

const Sheets = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/problems")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch problems");
        return response.json();
      })
      .then((data) => {
        setProblems(data.length ? data : fallbackProblems);
        setLoading(false);
      })
      .catch(() => {
        setProblems(fallbackProblems);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-4 text-lg font-semibold">Loading...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Problem List</h1>
      
      {/* Scrollable Container */}
      <div className="max-h-[500px] overflow-y-auto border border-gray-300 rounded-lg p-4 shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={problem.id || index} 
              className="bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                <a 
                  href={problem.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  {problem.title}
                </a>
              </h2>
              <p className="text-sm font-medium text-gray-700">
                Difficulty: 
                <span 
                  className={`ml-2 px-3 py-1 rounded text-white text-sm font-semibold ${
                    problem.difficulty === 'Easy' ? 'bg-green-500' : 
                    problem.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                >
                  {problem.difficulty}
                </span>
              </p>
              <a 
                href={problem.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 block w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition"
              >
                Solve
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sheets;
