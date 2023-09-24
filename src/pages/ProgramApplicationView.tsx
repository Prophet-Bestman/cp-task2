import React, { useState } from "react";
import { ApplicationFilterSection } from "../components/programAppliationView";

const ProgramApplicationView = () => {
  //   const [applications, setApplications] = useState([]);
  return (
    <div>
      <div className="flex gap-8">
        <ApplicationFilterSection />
      </div>
    </div>
  );
};

export default ProgramApplicationView;
