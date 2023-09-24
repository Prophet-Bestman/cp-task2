import React from "react";

const CustomAvatar = ({ name }: { name: string }) => {
  return (
    <div className="text-avatarText w-[56px] h-[56px] text-xl bg-avatarBg rounded-full font-semibold flex justify-center items-center">
      {name[0]}
      {name[1]}
    </div>
  );
};

export default CustomAvatar;
