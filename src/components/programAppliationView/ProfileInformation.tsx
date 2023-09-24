import { ReactNode } from "react";
import { useApplicationsContext } from "../../context/ApplicationsProvider";
import {
  DOBIcon,
  GenderIcon,
  NationalId,
  NationalityIcon,
} from "../../assets/Icons";

const ProfileInformation = () => {
  const { selectedApplication } = useApplicationsContext();
  return (
    <div className="p-6 bg-white rounded-3xl">
      <h3 className="mb-4 text-sm font-semibold text-black">
        Personal Information
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <InfoItem
          title="Nationality"
          value={selectedApplication.nationality}
          icon={<NationalityIcon />}
        />
        <InfoItem title="National ID" value={"0000000"} icon={<NationalId />} />
        <InfoItem title="Gender" value={"Female"} icon={<GenderIcon />} />
        <InfoItem
          title="Date of Birth"
          value={"00-00-0000"}
          icon={<DOBIcon />}
        />
      </div>
    </div>
  );
};

export default ProfileInformation;

const InfoItem = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3 p-2">
      <div className="h-8 w-8 border-[#ECECEC] center-item border rounded-lg">
        {icon}
      </div>

      <div>
        <p className="mb-1 text-sm text-[#5F5F5F]">{title}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
};
