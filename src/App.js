import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ViewAllCategories from "./components/ViewAllCategories";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/viewall" element={<ViewAllCategories />} />{" "}
      {/* Define route for viewing all categories */}
    </Routes>
  );
}

export default App;
