import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CustomerFeedback = ({ image, name, feedback, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="p-4 bg-gray-800 text-white border-b border-gray-700">
      <div className="flex items-center mb-2">
        <img src={image} alt={name} className="w-10 h-10 rounded-full mr-4" />
        <h3 className="text-md">{name}</h3>
      </div>
      <div className="flex my-1">{renderStars(rating)}</div>
      <p className="text-xs text-gray-400">{feedback}</p>
    </div>
  );
};

export default CustomerFeedback;
