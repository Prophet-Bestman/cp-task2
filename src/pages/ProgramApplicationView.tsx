import React, { useState } from "react";
import {
  ApplicationFilterSection,
  ApplicationDetials,
} from "../components/programAppliationView";

const ProgramApplicationView = () => {
  return (
    <div className="relative flex w-full gap-8">
      <ApplicationFilterSection />
      <ApplicationDetials />
    </div>
  );
};

export default ProgramApplicationView;
