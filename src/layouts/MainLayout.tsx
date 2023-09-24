import React, { ReactNode, useState } from "react";

import {
  CalendarIcon,
  DocumentIcon,
  HeartIcon,
  HomeIcon,
  NotesIcon,
  PeopleIcon,
  ShareIcon,
} from "../assets/Icons";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState("Home");
  return (
    <div className="flex h-screen shadow-lg bg-bg">
      <div className="w-[75px] bg-white  flex flex-col items-center p-6 gap-8">
        <div className="w-12 h-12 bg-[#D9D9D9] rounded-full" />

        {/* pagelist */}
        <div className="space-y-6">
          {navList.map((nav) => (
            <div
              key={nav.name}
              onClick={() => setSelectedNav(nav.name)}
              className={`p-3 cursor-pointer rounded-lg transition-all duration-500 ease-in-out  ${
                selectedNav === nav.name
                  ? "text-primary bg-primaryBg"
                  : "text-black"
              }  `}
            >
              {nav.icon}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-8">{children}</div>
    </div>
  );
};

export default MainLayout;

const navList = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "People",
    icon: <PeopleIcon />,
  },
  {
    name: "Calendar",
    icon: <CalendarIcon />,
  },
  {
    name: "Share",
    icon: <ShareIcon />,
  },
  {
    name: "Document",
    icon: <DocumentIcon />,
  },
  {
    name: "Notes",
    icon: <NotesIcon />,
  },
  {
    name: "Heart",
    icon: <HeartIcon />,
  },
];
