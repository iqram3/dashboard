import React from "react";
import {
  FaShoppingCart,
  FaBox,
  FaTimesCircle,
  FaFileInvoiceDollar,
  FaCaretUp,
  FaCaretDown,
} from "react-icons/fa";

const icons = {
  orders: <FaShoppingCart className="text-blue-500" />,
  delivered: <FaBox className="text-green-500" />,
  cancelled: <FaTimesCircle className="text-orange-500" />,
  revenue: <FaFileInvoiceDollar className="text-pink-500" />,
};

const Card = ({ title, value, percentage, positive, icon }) => {
  const iconBackgrounds = {
    orders: "bg-blue-500 bg-opacity-20",
    delivered: "bg-green-500 bg-opacity-20",
    cancelled: "bg-orange-500 bg-opacity-20",
    revenue: "bg-pink-500 bg-opacity-20",
  };

  return (
    <div className="relative bg-gray-800 text-white p-4 rounded-lg flex items-center">
      <div className="">
        <div className={`p-3 rounded-[9px] mr-20 ${iconBackgrounds[icon]}`}>
          {icons[icon]}
        </div>
        <div>
          <p className="text-[14px]">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
      {percentage && (
        <div className="absolute bottom-4 right-4 flex items-center">
          {positive ? (
            <FaCaretUp className="text-2xl text-green-500 mr-2" />
          ) : (
            <FaCaretDown className="text-2xl text-red-500 mr-2" />
          )}
          <p className={positive ? "text-green-500" : "text-red-500"}>
            {percentage}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
