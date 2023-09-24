import React from "react";
import { IconWrap, SectionCard } from "../general";
import { DownloadFileIcon, EyeIcon } from "../../assets/Icons";

const Resume = () => {
  return (
    <SectionCard
      title="Resume"
      rightElement={
        <div className="flex gap-2">
          <IconWrap>
            <EyeIcon />
          </IconWrap>
          <IconWrap>
            <DownloadFileIcon />
          </IconWrap>
        </div>
      }
    >
      <div className="bg-[#F1F1F1] w-full h-[901px]"></div>
    </SectionCard>
  );
};

export default Resume;
