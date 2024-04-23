import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import Header from "./Header";
import { Loptions, PopCatOptions } from "../utils/constant";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        {/* <h1>Welcome to Our Digital Marketplace</h1> */}
        <Header />
      </header>
      <section className="features flex flex-col justify-center">
        <div className="flex gap-3 m-2 items center">
          {Loptions.map((option, index) => (
            <div key={index} className="bg-gray-400 shadow-md p-3">
              <h2 className="text-xl font-semibold mb-4">{option}</h2>
            </div>
          ))}
        </div>
      </section>

      <section>
        <span className="flex justify-between items-center">
          <p>Explore Popular Categories</p>
          {/* Connect "View All" link to the "viewall" route */}
          <Link to="/viewall" className="text-blue-600">
            View All
          </Link>
        </span>

        <div className="flex gap-3 m-2 items center">
          {PopCatOptions.map((option, index) => (
            <div key={index} className="bg-gray-400 shadow-md p-3">
              {/* <img src={option.svg} /> */}
              <h2 className="text-xl font-semibold mb-4">{option.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
