import React from "react";
import { CloseIcon } from "../../assets/Icons";

interface Props {
  text: string;
  canDelete?: boolean;
}

const Pill = ({ text, canDelete }: Props) => {
  return (
    <div
      className={` gap-2 flex items-center bg-[#F3FAFC] px-[10px] py-1 rounded-full font-medium text-[8px] ${
        canDelete ? "text-[#808EA3]" : "text-[#6B6B6B] "
      } `}
    >
      <p>{text}</p>

      {canDelete && <CloseIcon />}
    </div>
  );
};

export default Pill;
