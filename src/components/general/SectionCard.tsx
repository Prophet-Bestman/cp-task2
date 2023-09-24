import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  title: string;
}

const SectionCard = ({ children, title }: SectionCardProps) => {
  return (
    <div className="p-6 bg-white rounded-3xl">
      <h3 className="mb-4 text-sm font-semibold text-black">{title}</h3>
      {children}
    </div>
  );
};

export default SectionCard;
