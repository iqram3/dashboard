import React, { useState } from "react";
import { FaHome, FaUserAlt, FaBell, FaEnvelope, FaCog, FaSignOutAlt, FaTh } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const handleSetActive = (item) => {
    setActive(item);
  };

  const menuItems = [
    { icon: FaHome, name: "home" },
    { icon: FaUserAlt, name: "profile" },
    { icon: FaBell, name: "notifications" },
    { icon: FaEnvelope, name: "messages" },
    { icon: FaCog, name: "settings" },
  ];

  return (
    <div className="h-screen p-4 bg-gray-800 text-gray-400 flex flex-col">
      <FaTh className="text-4xl mb-4 text-blue-500" />
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.name}
            className={`relative text-2xl my-4 p-2 cursor-pointer ${
              active === item.name ? "text-blue-500" : "text-gray-400"
            }`}
            onClick={() => handleSetActive(item.name)}
          >
            <IconComponent />
            {active === item.name && (
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
            )}
          </div>
        );
      })}
      <div
        className={`relative mt-auto text-2xl p-2 cursor-pointer ${
          active === "logout" ? "text-blue-500" : "text-gray-400"
        }`}
        onClick={() => handleSetActive("logout")}
      >
        <FaSignOutAlt />
        {active === "logout" && (
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
