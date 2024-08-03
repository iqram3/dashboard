import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white !custom-scrollbar">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
