import ProfileInformation from "./ProfileInformation";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import AdditionalQuestions from "./AdditionalQuestions";
import Resume from "./Resume";
import EnrolledOtherPrograms from "./EnrolledOtherPrograms";

const ProfileTab = () => {
  return (
    <div className="space-y-8">
      <ProfileInformation />
      <Education />
      <WorkExperience />
      <Education />
      <Resume />
      <AdditionalQuestions />
      <EnrolledOtherPrograms />
    </div>
  );
};

export default ProfileTab;
