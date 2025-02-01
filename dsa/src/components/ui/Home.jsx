import Spline from '@splinetool/react-spline';
import { FaTrophy, FaFire, FaUsers, FaChartBar, FaLightbulb, FaCode, FaTasks, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Left Section - Scrollable Bento Grid */}
      <div className="lg:w-2/3 flex flex-col gap-6 overflow-y-auto max-h-screen p-4 scrollbar-thin scrollbar-thumb-gray-400">
        <h1 className="text-2xl font-bold text-gray-800 text-center lg:text-left">
          Dashboard Overview 🚀
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cards */}
          {[
            { icon: <FaTrophy className="text-yellow-500" />, title: "Badges & Achievements", text: "View your accomplishments" },
            { icon: <FaFire className="text-red-500" />, title: "Current Streak", text: "Keep up with daily challenges" },
            { icon: <FaChartBar className="text-blue-500" />, title: "Problem Stats", text: "Advanced, Intermediate, Beginner" },
            { icon: <FaLightbulb className="text-green-500" />, title: "Suggestions for You", text: "Join contests & improve skills" },
            { icon: <FaUsers className="text-purple-500" />, title: "Friends", text: "Connect & compete with friends" },
            { icon: <FaCode className="text-indigo-500" />, title: "Language Stats", text: "Track coding proficiency" },
            { icon: <FaTasks className="text-orange-500" />, title: "To-Do List", text: "Manage your coding goals" },
            { icon: <FaCalendarAlt className="text-teal-500" />, title: "Upcoming Contests", text: "Plan ahead for competitions" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Spline 3D Model */}
      <div className="lg:w-1/3 flex justify-center items-ceneter p-6">
        <div className="">
          <Spline scene="https://prod.spline.design/2ddTVdAge0to-UPC/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Home;
