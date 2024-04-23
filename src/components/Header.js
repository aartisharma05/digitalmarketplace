import React from "react";
import { FaBars, FaFilter } from "react-icons/fa"; // Import hamburger and filter icons
import { MdSearch } from "react-icons/md"; // Import search icon

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      {/* Hamburger Icon */}
      <div className="text-2xl">
        <FaBars />
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <div className="relative">
          <input
            type="text"
            className="w-full bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-gray-600"
            placeholder="Search..."
          />
          <div className="absolute top-0 left-0 mt-2 ml-3">
            <MdSearch className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Filter Icon */}
      <div>
        <FaFilter />
      </div>
    </header>
  );
};

export default Header;
