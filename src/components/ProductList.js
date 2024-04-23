import React from "react";
import { productlist } from "../utils/constant"; // Import the allCat array
import { useLocation } from "react-router-dom";
import { FaArrowLeft, FaFilter } from "react-icons/fa"; // Import hamburger and filter icons
import { MdSearch } from "react-icons/md"; // Import search icon

const ProductList = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\//g, " > ");

  return (
    <div>
      <div className="flex m-2 items-center">
        <div className="text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-2">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-gray-600"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Filter Icon */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
            />
          </svg>
        </div>
      </div>
      <div>
        <h3>{path}</h3>
        {/* Render the list of products here */}
      </div>

      <ul className="flex items-center m-2 ">
        <li className="border rounded-full p-2 m-2 cursor-pointer bg-blue-200">
          All
        </li>
        <li className="border rounded-full p-2 m-2 cursor-pointer">
          Maintainance Services
        </li>
        <li className="border rounded-full p-2 m-2 cursor-pointer">
          Work wear & Uniforms
        </li>
        <li className="border rounded-full p-2 m-2 cursor-pointer bg-blue-700 text-white">
          View all
        </li>
      </ul>

      <ul className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
        {productlist.map((category, index) => (
          <li
            key={index}
            className="container bg-slate-400 rounded-md m-2 p-2 flex flex-col"
          >
            <img src={category.img} alt="img" />
            <p>{category.name}</p>
            <p> {category.price}</p>
            <label> {category.time}</label>
            <p className="text-red-700">{category.timeleft}</p>
            <p>{category.bids}</p>
            <p>{category.shipping}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
