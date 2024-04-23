import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ViewAllCategories from "./components/ViewAllCategories";
import ShopByCategory from "./components/ShopByCategory";
import MaintenanceServices from "./components/MaintainanceServices";
import WorkWearUniforms from "./components/WorkWearUniforms";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/viewall" element={<ViewAllCategories />} />{" "}
      {/* Define route for viewing all categories */}
      <Route exact path="/shopbycat" element={<ShopByCategory />} />
      <Route
        exact
        path="/shopbycat/maintenance/productlist"
        element={<ProductList />}
      />{" "}
      {/* Route for direct navigation to ProductList */}
      <Route
        exact
        path="/shopbycat/maintenance"
        element={<MaintenanceServices />}
      />
      <Route exact path="/shopbycat/workwear" element={<WorkWearUniforms />} />
    </Routes>
  );
}

export default App;
