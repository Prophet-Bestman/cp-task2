import ProfileInformation from "./ProfileInformation";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Resume from "./Resume";
import AdditionalQuestions from "./AdditionalQuestions";

const ProfileTab = () => {
  return (
    <div className="space-y-8">
      <ProfileInformation />
      <Education />
      <WorkExperience />
      <Resume />
      <AdditionalQuestions />
    </div>
  );
};

export default ProfileTab;
