import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { PiHeadsetFill, PiGlobeBold } from "react-icons/pi";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center gap-2 text-sm"
      >
        
        <span className="mr-1">IN/INR</span>
        <IoIosArrowDown className={`fill-current h-4 w-4 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} />
      </button>

      {isOpen && (
        <ul className="absolute bg-white text-gray-700 mt-4 -ml-11 w-[130px] rounded shadow-lg">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="block text-sm p-2 mb-2 rounded-md hover:bg-gray-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
