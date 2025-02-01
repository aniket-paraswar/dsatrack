import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
// Import your page components here
import Home from "./Home";
import Messages from "./Messages";
import Challenges from "./Challanges";
import DCC from "./DCC";
import Sheets from "./Sheets";
import Global from "./Global";

const Dashboard = () => {
  // State to track selected page
  const [selectedPage, setSelectedPage] = useState("home");

  // Function to handle menu item click
  const handleMenuClick = (page) => {
    setSelectedPage(page);
  };

  const renderContent = () => {
    switch (selectedPage) {
      case "home":
        return <Home />;
      case "messages":
        return <Messages />;
      case "global":
        return <Global />;
      case "challenge":
        return <Challenges />;
      case "dcc":
        return <DCC />;
      case "sheets":
        return <Sheets />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar Section */}
      <div className="bg-none fixed w-full ">
        <DashboardNav onMenuClick={handleMenuClick} />
      </div>

      {/* Content Section */}
      <div className="flex-1 mt-16 p-4 overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
