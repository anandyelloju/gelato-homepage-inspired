import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ items, title, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubDropdownIndex, setActiveSubDropdownIndex] = useState(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveSubDropdownIndex(null);
  };

  const handleSubDropdownEnter = (index) => {
    setActiveSubDropdownIndex(index);
  };

  const handleSubDropdownLeave = () => {
    setActiveSubDropdownIndex(null);
  };

  return (
    <div
      className="relative inline-block hover:bg-gray-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-2 p-4 text-sm font-semibold text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        
        <span>{title}</span>
        {Icon && <Icon className={`h-4 w-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />}
      </button>

      {isOpen && (
        <ul className="absolute bg-white text-gray-700 font-semibold p-4 w-[200px] shadow-lg border border-gray-200 ">
          {items.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleSubDropdownEnter(index)}
              onMouseLeave={handleSubDropdownLeave}
            >
              <a
                href={item.href || '#'}
                className="flex justify-between items-center px-2 py-4 text-sm hover:bg-gray-300"
              >
                {item.label}
                {item.icon && <item.icon className="h-4 w-4 text-gray-500" />}
              </a>

              {/* Render sub-dropdown if available */}
              {item.secondaryItems && activeSubDropdownIndex === index && (
              <ul className="absolute top-0 left-full ml-0 bg-white text-gray-700 mt-0 font-semibold p-4 w-[400px] shadow-lg border border-gray-200">
                {item.secondaryItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.href}
                      className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {subItem.label}
                      {subItem.icon && <subItem.icon className="h-4 w-4 text-gray-500" />}
                    </a>
                  </li>
                ))}
              </ul>
             )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
