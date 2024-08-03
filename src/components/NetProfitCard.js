import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const NetProfitCard = ({ value, percentage }) => {
  return (
    <div className="relative bg-gray-800 text-white px-4 pb-4 pt-1 rounded-lg flex items-center">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm">Net Profit</h3>
          <div className="flex items-center text-2xl mb-2">
            <p className="text-xxl font-bold">{value}</p>
          </div>
        </div>
        <div className="flex items-center">
          {percentage > 0 ? (
            <FaCaretUp className="text-2xl text-green-500 mr-2" />
          ) : (
            <FaCaretDown className="text-2xl text-red-500 mr-2" />
          )}
          <p className={percentage > 0 ? "text-green-500" : "text-red-500"}>
            3%
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 w-24 h-24 ml-4 relative mb-2">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: percentage > 0 ? "#609fff" : "#f44336",
            textColor: "#fff",
            trailColor: "#333",
            strokeLinecap: "round",
          })}
        />
        {percentage >= 70 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[9px] text-gray-400 text-center mt-10">
              <p>Goal</p>
              <p>Completed</p>
            </div>
          </div>
        )}
      </div>
      <p className="absolute bottom-2 right-2 text-xs text-gray-400">
        * The value here has been rounded off.
      </p>
    </div>
  );
};

export default NetProfitCard;
