import { PropsWithChildren } from "react";

const IconWrap = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-8 w-8 border-[#ECECEC] center-item border rounded-lg">
      {children}
    </div>
  );
};

export default IconWrap;
