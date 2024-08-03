import React from "react";
import {
  FaBullseye,
  FaUtensils,
  FaListAlt,
  FaArrowRight,
} from "react-icons/fa";

const Goals = () => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <div className="mb-6">
        <div className="flex items-center">
          <div className="bg-red-500 bg-opacity-20 p-3 rounded-full mr-4">
            <FaBullseye className="text-2xl text-red-500" />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <p className="text-sm mb-2">Goals</p>
            <div className="bg-gray-500 bg-opacity-20 p-3 rounded-full">
              <FaArrowRight className="text-sm text-white-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-center">
          <div className="bg-blue-500 bg-opacity-20 p-3 rounded-full mr-4">
            <FaUtensils className="text-2xl text-blue-500" />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <p className="text-sm mb-2">Popular Dishes</p>
            <div className="bg-gray-500 bg-opacity-20 p-3 rounded-full">
              <FaArrowRight className="text-sm text-white-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center">
          <div className="bg-green-500 bg-opacity-20 p-3 rounded-full mr-4">
            <FaListAlt className="text-2xl text-green-500" />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <p className="text-sm mb-2">Menus</p>
            <div className="bg-gray-500 bg-opacity-20 p-3 rounded-full">
              <FaArrowRight className="text-sm text-white-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
