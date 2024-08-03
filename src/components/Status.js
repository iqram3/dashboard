import React from "react";

const Status = ({ status }) => {
  let color;
  switch (status) {
    case "Delivered":
      color = "bg-green-500 bg-opacity-20 p-3 rounded-full text-green-500";
      break;
    case "Cancelled":
      color = "bg-red-500 bg-opacity-20 p-3 rounded-full text-red-500";
      break;
    case "Pending":
      color = "bg-yellow-500 bg-opacity-20 p-3 rounded-full text-yellow-500";
      break;
    default:
      color = "text-gray-500";
      break;
  }
  return <span className={color}>{status}</span>;
};

export default Status;
