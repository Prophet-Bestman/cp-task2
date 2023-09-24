import { Checkbox, Dropdown, Input, List, MenuProps } from "antd";
import {
  CheveronDown,
  HomeIcon,
  SearchIcon,
  WarningIcon,
} from "../../assets/Icons";
import { useEffect, useState } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CustomAvatar, Pill } from "../general";
import { useApplicationsContext } from "../../context/ApplicationsProvider";

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

const ApplicationFilterSection = () => {
  const [selectedTab, setSelectedTab] = useState(categories[0].name);
  const [checked, setChecked] = useState<CheckboxValueType[]>([]);
  const [checkAll, setCheckAll] = useState(false);

  const {
    applications,
    selectCategory,
    searchApplication,
    selectApplication,
    selectedApplication,
  } = useApplicationsContext();

  useEffect(() => {
    setCheckAll(checked.length === applications.length);
  }, [checked]);

  const onCheckAllChange = (e: any) => {
    setChecked(e.target.checked ? applications.map((item) => item.id) : []);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="w-[440px] min-h-[calc(100vh - 32px)]  space-y-2 ">
      {/* @ts-ignore */}
      <Dropdown menu={{ items }} className="cursor-pointer" trigger="click">
        <a onClick={(e) => e.preventDefault()}>
          <div className="flex items-center p-2 bg-white rounded-lg">
            <div className="center-item w-8 h-8 p-2 text-[13px] font-bold uppercase rounded-full bg-bg">
              <p>SIP</p>
            </div>
            <Hr />
            <div className="flex w-full text-[#384A69] font-medium justify-between mr-[2px]">
              <p>Opportunity Browsing</p>
              <p>2332</p>
            </div>
            <Hr />
            <CheveronDown />
          </div>
        </a>
      </Dropdown>

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

      <div className="px-4 py-2 bg-white rounded-t-2xl h-[70vh] overflow-y-auto">
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
    </div>
  );
};

const Hr = () => <div className="h-5 mx-[14px] w-[3px] bg-[#EEF2FF]"></div>;

export default ApplicationFilterSection;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <div>1st menu item</div>,
  },
  {
    key: "2",
    label: <div>2nd menu item (disabled)</div>,
    icon: <HomeIcon />,
    disabled: true,
  },
  {
    key: "3",
    label: <div>3rd menu item (disabled)</div>,
    disabled: true,
  },
  {
    key: "4",

    label: "a danger item",
  },
];

const users = [
  {
    name: "Frances R. Kostka",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 1,
  },
  {
    name: "Aaliyah Sanderson",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Finance",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "task",
    id: 2,
  },
  {
    name: "Michael D. McKee",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Computer Science",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 3,
  },
  {
    name: "Christel R. Sclafani",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "disqualified",
    id: 4,
  },
  {
    name: "Jerry S. Pollock",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 5,
  },
  {
    name: "Frances R. Kostka",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 6,
  },
  {
    name: "Aaliyah Sanderson",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Finance",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "task",
    id: 7,
  },
  {
    name: "Michael D. McKee",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Computer Science",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: "9n29n09",
  },
  {
    name: "Christel R. Sclafani",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "disqualified",
    id: 8,
  },
  {
    name: "Jerry S. Pollock",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 9,
  },
  {
    name: "Frances R. Kostka",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 10,
  },
  {
    name: "Aaliyah Sanderson",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Finance",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "task",
    id: 11,
  },
  {
    name: "Michael D. McKee",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Computer Science",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 12,
  },
  {
    name: "Christel R. Sclafani",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "disqualified",
    id: 13,
  },
  {
    name: "Jerry S. Pollock",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 14,
  },
  {
    name: "Frances R. Kostka",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 15,
  },
  {
    name: "Aaliyah Sanderson",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Finance",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "task",
    id: 16,
  },
  {
    name: "Michael D. McKee",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Computer Science",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 17,
  },
  {
    name: "Christel R. Sclafani",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "disqualified",
    id: 18,
  },
  {
    name: "Jerry S. Pollock",
    nationality: "Saudi Arabia",
    degree: "Bachelor in Marketing",
    year: "(2023 - 2023)",
    hashTags: ["#top_candidate", "#top_candidate"],
    tags: ["New York", "Marketing", "London"],
    score: 7,
    category: "qualified",
    id: 19,
  },
];
