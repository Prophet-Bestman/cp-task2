import { SectionCard } from "../general";
import { SchoolIcon } from "../../assets/Icons";

const Education = () => {
  return (
    <SectionCard title="Education">
      <div className="flex gap-4 py-4 ">
        <div className="h-8 w-8 border-[#ECECEC] center-item border rounded-lg">
          <SchoolIcon />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Bachelor in Biochemistry</p>

          <div className="flex font-light items-center text-sm gap-2 text-[#B8B8B8]">
            <p className="text-black">King Saud University</p>|
            <p>Saudi Arabia</p> | <p>Jan 2022</p>
            <p>Jan 2023</p>
          </div>
        </div>
      </div>

      <div className="border-b border-[#eee] w-full"></div>

      <div className="flex gap-4 py-4 ">
        <div className="h-8 w-8 border-[#ECECEC] center-item border rounded-lg">
          <SchoolIcon />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Bachelor in Biochemistry</p>

          <div className="flex font-light items-center text-sm gap-2 text-[#B8B8B8]">
            <p className="text-black">King Saud University</p>|
            <p>Saudi Arabia</p> | <p>Jan 2022</p>
            <p>Jan 2023</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default Education;
