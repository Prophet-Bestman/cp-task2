import ProfileInformation from "./ProfileInformation";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const ProfileTab = () => {
  return (
    <div className="space-y-8">
      <ProfileInformation />
      <Education />
      <WorkExperience />
      <Education />
    </div>
  );
};

export default ProfileTab;
