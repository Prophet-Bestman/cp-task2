import { Tabs, TabsProps } from "antd";
import ApplicationHeader from "./ApplicationHeader";
import ProfileTab from "./ProfileTab";

const ApplicationDetials = () => {
  // const { selectedApplication } = useApplicationsContext();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Profile",
      children: <ProfileTab />,
    },
    {
      key: "2",
      label: "Video",
      children: "VIDEO DETAILS",
    },
    {
      key: "3",
      label: "Evaluation",
      children: "Evaluation Details",
    },
    {
      key: "4",
      label: "Placement",
      children: "Placement Details",
    },
    {
      key: "5",
      label: "Compliance",
      children: "Compliance Details",
    },
    {
      key: "6",
      label: "Notes",
      children: "Notes Details",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-32px)] overflow-y-auto">
      <ApplicationHeader />

      {/* @ts-ignore */}
      <Tabs className="my-8" type="none" defaultActiveKey="1" items={items} />
    </div>
  );
};

export default ApplicationDetials;
