import { EnrollIcon } from "../../assets/Icons";
import { IconWrap, SectionCard } from "../general";

const EnrolledOtherPrograms = () => {
  return (
    <SectionCard title="Enrolled Other Programs">
      <div className="space-y-4">
        {programs.map((program, i) => (
          <div
            key={program.title}
            className={`py-8 flex justify-between ${
              i !== programs.length - 1 ? "border-b border-[#eee}" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <IconWrap>
                <EnrollIcon />
              </IconWrap>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">{program?.title}</h3>
                <p className="text-xs font-light">{program.desc}</p>
              </div>
            </div>

            <span
              className={`px-4 rounded-full h-fit text-[9px]  ${
                program.status === "Active"
                  ? "text-[#087B2F] border border-[#9DDC89] bg-[#DBF5D3]"
                  : "text-[#FC402B] border border-[#FEA095] bg-[#FFECEA]"
              } `}
            >
              {program.status}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default EnrolledOtherPrograms;

const programs = [
  {
    title: "Misk Traineeship",
    desc: "Currently At Video Task",
    status: "Active",
  },
  {
    title: "Summer Internship",
    desc: "Currently At Video Task",
    status: "Disqualified",
  },
  {
    title: "XYZ Traineeship",
    desc: "Currently At Video Task",
    status: "Active",
  },
  {
    title: "London Internship",
    desc: "Currently At Video Task",
    status: "Disqualified",
  },
];
