import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  title: string;
  rightElement?: ReactNode;
}

const SectionCard = ({ children, title, rightElement }: SectionCardProps) => {
  return (
    <div className="p-6 bg-white rounded-3xl">
      <div className="flex items-center justify-between mb-4 ">
        <h3 className="text-sm font-semibold text-black">{title}</h3>

        {rightElement && rightElement}
      </div>
      {children}
    </div>
  );
};

export default SectionCard;
