import { Tabs, TabsProps } from "antd";

import ApplicationHeader from "./ApplicationHeader";
import ProfileTab from "./ProfileTab";

const ApplicationDetials = () => {
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
    <div className="flex-1 w-full h-[calc(100vh-38px)] overflow-y-auto details hide-scroll">
      <ApplicationHeader />

      <Tabs animated className="my-8" defaultActiveKey="1" items={items} />
    </div>
  );
};

export default ApplicationDetials;
