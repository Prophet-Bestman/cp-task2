import React, { useState } from "react";
import {
  ApplicationFilterSection,
  UserDetailsSection,
} from "../components/programAppliationView";

const ProgramApplicationView = () => {
  //   const [applications, setApplications] = useState([]);
  return (
    <div className="flex w-full gap-8">
      <ApplicationFilterSection />
      <UserDetailsSection />
    </div>
  );
};

export default ProgramApplicationView;
