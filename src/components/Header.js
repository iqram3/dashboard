import React from "react";
import { FaSearch, FaBell, FaEnvelope, FaCog } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-700 p-2 rounded w-full max-w-md mb-2 md:mb-0">
        <FaSearch className="mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white focus:outline-none w-full"
        />
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <div className="relative bg-gray-500 bg-opacity-20 p-3 rounded-full">
          <FaEnvelope />
        </div>
        <div className="relative bg-gray-500 bg-opacity-20 p-3 rounded-full">
          <FaCog />
        </div>
        <div className="relative bg-gray-500 bg-opacity-20 p-3 rounded-full">
          <FaBell />
          <div className="absolute top-1 right-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-gray-800"></div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
            alt="User Profile Picture"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
