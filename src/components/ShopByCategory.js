import React from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion"; // Import the Accordion component
import MaintenanceServices from "./MaintainanceServices";
import WorkWearUniforms from "./WorkWearUniforms";

const ShopByCategory = () => {
  return (
    <div>
      <h2>Facility Management</h2>
      <Accordion title={<MaintenanceServices />} />
      <hr />
      <Accordion title={<WorkWearUniforms />} />
      <hr />
      <p>Custodial Services</p>
      <hr />
      <p>Facility Management</p>
      <hr />
      <p>Facility Management</p>
      <hr />
      <p>Facility Management</p>
      <hr />
      <p>Facility Management</p>
      <hr />
      <p>Facility Management</p>
    </div>
  );
};

export default ShopByCategory;
