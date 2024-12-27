import React from 'react';
import { FaUsers, FaDollarSign, FaPiggyBank } from 'react-icons/fa';

function StartupCard({ image, name, description, members, valuation, investments }) {
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow max-w-lg mx-4">
      {/* Image Container */}
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={`${name} Logo`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="mt-4 sm:mt-0 sm:ml-4 flex-1">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
          {name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {description}
        </p>
        {/* Additional Information */}
        <div className="mt-4">
          {/* Members */}
          <div className="flex items-center text-sm mb-4">
            <FaUsers className="mr-2 text-2xl text-[#1836b2] dark:text-[#e7c94d]" />
            <span className="text-gray-800 dark:text-white font-bold">
              {members} Members
            </span>
          </div>
          {/* Valuation and Investments */}
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <FaDollarSign className="mr-2 text-2xl text-[#1836b2] dark:text-[#e7c94d]" />
              <span className="text-gray-800 dark:text-white">
                Valuation: <span className="font-bold">${valuation}M</span>
              </span>
            </div>
            <div className="flex items-center">
              <FaPiggyBank className="mr-2 text-2xl text-[#1836b2] dark:text-[#e7c94d]" />
              <span className="text-gray-800 dark:text-white">
                Investments: <span className="font-bold">${investments}M</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupCard;
