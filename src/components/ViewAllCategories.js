import React from "react";
import { allCat } from "../utils/constant"; // Import the allCat array
import Header from "./Header";

const ViewAllCategories = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="view-all-categories ">
        <h2>All Categories</h2>
        <ul className="grid grid-cols-3 gap-2">
          {allCat.map((category, index) => (
            <li
              key={index}
              className="container bg-slate-400 rounded-md p-1 m-2"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ViewAllCategories;
