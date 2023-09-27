import { Checkbox, Drawer, Dropdown, Input, MenuProps, theme } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

import {
  CheveronDown,
  FilterIcon,
  SearchIcon,
  WarningIcon,
} from "../../assets/Icons";
import React, { useEffect, useState } from "react";
import { CustomAvatar, Pill } from "../general";
import { useApplicationsContext } from "../../context/ApplicationsProvider";
import { applications as applicationslist } from "../../data";

const categories = [
  {
    name: "qualified",
    number: 247,
  },
  {
    name: "task",
    number: 25,
  },
  {
    name: "disqualified",
    number: 78,
  },
];

const { useToken } = theme;

const ApplicationFilterSection = () => {
  const [selectedTab, setSelectedTab] = useState(categories[0].name);
  const [checked, setChecked] = useState<CheckboxValueType[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const {
    applications,
    selectCategory,
    searchApplication,
    selectApplication,
    setSelectedType,
    selectedApplication,
    selectedType,
  } = useApplicationsContext();

  // GET COUNT OF APPLICATIONS
  const getCount = (arg: string) =>
    applicationslist.filter((application) => application.type === arg).length;

  useEffect(() => {
    setCheckAll(checked.length === applications.length);
  }, [checked]);

  const onCheckAllChange = (e: any) => {
    setChecked(e.target.checked ? applications.map((item) => item.id) : []);
    setCheckAll(e.target.checked);
  };

  const { token } = useToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
    padding: 0,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
    padding: 0,
    margin: 0,
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <DropDownItem title="Applied" count={getCount("Applied")} />,
      onClick: () => setSelectedType("Applied"),
    },
    {
      key: "2",
      label: (
        <DropDownItem title="Shortlisted" count={getCount("Shortlisted")} />
      ),
      onClick: () => setSelectedType("Shortlisted"),
    },
    {
      key: "3",
      label: (
        <DropDownItem
          title="Technical Interview"
          count={getCount("Technical Interview")}
        />
      ),
      onClick: () => setSelectedType("Technical Interview"),
    },
    {
      key: "4",
      label: <DropDownItem title="Offer" count={getCount("Offer")} />,
      onClick: () => setSelectedType("Offer"),
    },
  ];

  return (
    <div className="w-[440px] dropdown min-h-[calc(100vh-32px)] top-0 left-0 z-10 sticky space-y-2 ">
      <Dropdown
        menu={{ items }}
        className="cursor-pointer "
        trigger={["click"]}
        dropdownRender={(menu) => (
          <div style={contentStyle}>
            {React.cloneElement(menu as React.ReactElement, {
              style: menuStyle,
            })}
          </div>
        )}
      >
        <a onClick={(e) => e.preventDefault()}>
          <div className="flex items-center p-2 bg-white rounded-lg">
            <div className="center-item w-8 h-8 p-2 text-[13px] font-bold uppercase rounded-full bg-bg">
              <p>SIP</p>
            </div>
            <Hr />
            <div className="flex w-full text-[#384A69] font-medium justify-between mr-[2px]">
              <p>{selectedType || "Select an application type"}</p>
              <p>2332</p>
            </div>
            <Hr />
            <CheveronDown />
          </div>
        </a>
      </Dropdown>

      <div className="flex items-center gap-2">
        <Input
          onChange={(e) => searchApplication(e.target.value)}
          className="h-12 remove-input-styles placeholder:text-[#9AA6AC] w-full"
          placeholder="Serach by name, edu, exp or #tag"
          prefix={
            <div className="text-[#9AA6AC] pxa-3">
              <SearchIcon />
            </div>
          }
          suffix={
            <div className="text-[#9AA6AC] pxa-3">
              <WarningIcon />
            </div>
          }
        />
        <div
          className="p-3 bg-white rounded-lg cursor-pointer "
          onClick={showDrawer}
        >
          <FilterIcon />
        </div>
      </div>

      <div className="flex items-center p-2 bg-white rounded-t-2xl h-[54px]">
        <Checkbox onChange={onCheckAllChange} checked={checkAll}></Checkbox>
        <div className="flex items-center gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center capitalize cursor-pointer"
            >
              <Hr />

              <div
                className={`text-sm font-medium flex items-center gap-2 smooth-transit ${
                  selectedTab === category.name ? "text-primary" : "text-black"
                }`}
                onClick={() => {
                  selectCategory(category.name);
                  setSelectedTab(category.name);
                }}
              >
                {category.name}
                <span
                  className={`p-[4px] text-[10px] rounded-full smooth-transit ${
                    selectedTab === category.name ? "bg-primaryBg" : ""
                  }  `}
                >
                  {category.number}
                </span>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-2 bg-white rounded-b-2xl h-[70vh] hide-scroll overflow-y-auto">
        <Checkbox.Group
          style={{ width: "100%" }}
          value={checked}
          onChange={(checkedValues) => {
            setChecked(checkedValues);
          }}
        >
          <div className="w-full space-y-2">
            {applications.map(
              ({ name, degree, hashTags, id, nationality, tags, year }) => (
                <div key={id} className="flex items-center w-full gap-2">
                  <Checkbox value={id} />

                  <div
                    className={`flex items-center rounded-3xl p-4 gap-6 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#F5F8FF] w-full ${
                      selectedApplication.id === id
                        ? "bg-[#F5F8FF]"
                        : "bg-white"
                    }`}
                    onClick={() => selectApplication(id)}
                  >
                    <CustomAvatar name={name} />

                    <div className="spacey-2">
                      <h3 className="text-sm font-semibold text-black">
                        {name}
                      </h3>
                      <p className="text-black text-[10px] font-medium">
                        {nationality}
                      </p>

                      <span className="text-[10px] font-light text-[black] space-x-2">
                        {degree}

                        <span>{year}</span>
                      </span>

                      <div className="flex items-center gap-2">
                        {hashTags.map((tag, i) => (
                          <div key={i} className="text-[#8492A7] text-[8px]">
                            {tag}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {tags.map((tag, i) => (
                          <Pill key={i} text={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
            {/* <List
              className="demo-loadmore-list"
              itemLayout="horizontal"
              dataSource={applications}
              renderItem={({
                name,
                degree,
                hashTags,
                id,
                nationality,
                tags,
                year,
              }) => (
                <div key={id} className="flex items-center w-full gap-2">
                  <Checkbox value={name} />

                  <div
                    className={`flex items-center rounded-3xl p-4 gap-6 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#F5F8FF] w-full ${
                      selectedApplication.id === id
                        ? "bg-[#F5F8FF]"
                        : "bg-white"
                    }`}
                    onClick={() => selectApplication(id)}
                  >
                    <CustomAvatar name={name} />

                    <div className="spacey-2">
                      <h3 className="text-sm font-semibold text-black">
                        {name}
                      </h3>
                      <p className="text-black text-[10px] font-medium">
                        {nationality}
                      </p>

                      <span className="text-[10px] font-light text-[black] space-x-2">
                        {degree}

                        <span>{year}</span>
                      </span>

                      <div className="flex items-center gap-2">
                        {hashTags.map((tag, i) => (
                          <div key={i} className="text-[#8492A7] text-[8px]">
                            {tag}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {tags.map((tag, i) => (
                          <Pill key={i} text={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            /> */}
          </div>
        </Checkbox.Group>
      </div>

      <Drawer
        title="Applications Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Drawer>
    </div>
  );
};

const Hr = () => <div className="h-5 mx-[14px] w-[3px] bg-[#EEF2FF]"></div>;

export default ApplicationFilterSection;

interface DropDownItemProps {
  title: string;
  count: number;
}

const DropDownItem = ({ title, count }: DropDownItemProps) => {
  const { selectedType } = useApplicationsContext();

  return (
    <div
      className={`flex items-center justify-between px-4 py-6 hover:bg-[#EDF2FF] ${
        selectedType === title ? "bg-[#EDF2FF] text-primary font-medium" : ""
      }`}
    >
      <p>{title}</p>

      <div
        className={`rounded-full  px-[10px] py-1 ${
          selectedType === title ? "bg-[#D1DDFF] text-primary" : "bg-[#F8F8F8]"
        }`}
      >
        {count}
      </div>
    </div>
  );
};
