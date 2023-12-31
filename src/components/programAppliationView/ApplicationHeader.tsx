import userimg from "../../assets/VDO.svg";
import { Pill } from "../general";
import { CirclePlus } from "../../assets/Icons";
import { useApplicationsContext } from "../../context/ApplicationsProvider";

const ApplicationHeader = () => {
  const { selectedApplication } = useApplicationsContext();

  return (
    <div className="flex flex-1 w-full gap-6 px-4 py-6 bg-white rounded-3xl">
      <img src={userimg} className="w-[88px] h-[88px]" />

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <p className="text-sm font-semibold text-black">
            {selectedApplication.name}
          </p>
          <div className="flex items-center gap-2">
            {selectedApplication.tags.map((tag, i) => (
              <Pill text={tag} key={i} />
            ))}
          </div>
        </div>

        <div className="flex gap-2 text-[10px]">
          <p>{selectedApplication.nationality}</p>|<p>aaliyahs@gmail.com</p>|
          <p>+00 000 000 0000</p>
        </div>

        <div className="flex items-center gap-2">
          {selectedApplication.hashTags.map((tag, i) => (
            <Pill text={tag} key={i} />
          ))}

          <Pill
            text={
              <div className="flex items-center gap-1">
                <CirclePlus />
                <p>Add Tag</p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col justify-between ml-auto">
        <div
          style={{
            boxShadow: "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
          }}
          className="flex items-center py-2 pl-4 pr-2 text-sm font-medium rounded-full gap-11 h-fit"
        >
          <p>Overall Score</p>
          <p className="rounded-full bg-bg px-[10px] py-1">7</p>
        </div>

        <p className="text-[10px] font-light text-[#A8A8A8]">
          Applied on 12 June 2023
        </p>
      </div>
    </div>
  );
};

export default ApplicationHeader;
