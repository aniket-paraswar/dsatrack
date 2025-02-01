import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginForm";
import Dashboard from "./components/ui/Dashboard";
import Home from "./components/ui/Home";
import Global from "./components/ui/Global";
import Messages from "./components/ui/Messages";
import Goals from "./components/ui/Goals";
import Sheets from "./components/ui/Sheets";
import Challanges from "./components/ui/Challanges";
import DCC from "./components/ui/DCC";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/global" element={<Global />} />
        <Route path="/challenge" element={<Challanges />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/dcc" element={<DCC />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/home" element={<Home />} />

        
      </Routes>
    </Router>
  );
}

export default App;