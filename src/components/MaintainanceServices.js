import React from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const MaintenanceServices = () => {
  return (
    <div>
      <Accordion title="Maintenance Services">
        <div className="flex flex-col">
          <Link to="/shopbycat/maintenance/productlist">Level 3</Link>
          <Link to="/shopbycat/maintenance/productlist">Level 3</Link>
          <Link to="/shopbycat/maintenance/productlist">Level 3</Link>
          <Link to="/shopbycat/maintenance/productlist">Level 3</Link>
          <Link to="/shopbycat/maintenance/productlist">Level 3</Link>
        </div>
      </Accordion>
    </div>
  );
};

export default MaintenanceServices;
