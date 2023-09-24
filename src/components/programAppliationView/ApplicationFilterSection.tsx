import { Checkbox, Dropdown, Input, MenuProps, Tag } from "antd";
import {
  CheveronDown,
  HomeIcon,
  SearchIcon,
  WarningIcon,
} from "../../assets/Icons";
import { useEffect, useState } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CustomAvatar, Pill } from "../general";

const categories = [
  {
    name: "Qualified",
    number: 247,
  },
  {
    name: "Task",
    number: 25,
  },
  {
    name: "Disqualified",
    number: 78,
  },
];

const user = {
  name: "Frances R. Kostka",
  nationality: "Saudi Arabia",
  degree: "Bachelor in Marketing",
  year: "(2023 - 2023)",
  hashTags: ["#top_candidate", "#top_candidate"],
  tags: ["New York", "Marketing", "London"],
  score: 7,
  category: "qualified",
  id: "9n29n09",
};

const data = [
  {
    title: "Frances R. Kostka",
  },
  {
    title: "Aaliyah Sanderson",
  },
  {
    title: "Michael D. McKee",
  },
  {
    title: "Christel R. Sclafani",
  },
];

const ApplicationFilterSection = () => {
  const [selectedTab, setSelectedTab] = useState(categories[0].name);
  const [checked, setChecked] = useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState<any>(false);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    setIndeterminate(checked.length && checked.length !== data.length);
    setCheckAll(checked.length === data.length);
  }, [checked]);

  const onCheckAllChange = (e: any) => {
    setChecked(e.target.checked ? data.map((item) => item.title) : []);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="w-[440px] min-h-screen  space-y-2 ">
      {/* @ts-ignore */}
      <Dropdown menu={{ items }} className="cursor-pointer" trigger="click">
        <a onClick={(e) => e.preventDefault()}>
          <div className="flex items-center p-2 bg-white rounded-lg">
            <div className="flex  items-center justify-center w-8 h-8 p-2 text-[13px] font-bold uppercase rounded-full bg-bg">
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
          {/* <Space>Hover me</Space> */}
        </a>
      </Dropdown>

      <Input
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
        <Checkbox
          // indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        ></Checkbox>

        <div className="flex items-center gap-4">
          {categories.map((category) => (
            <div className="flex items-center ">
              <Hr />

              <div
                className={`text-sm font-medium flex items-center gap-2 ${
                  selectedTab === category.name ? "text-primary" : "text-black"
                }`}
              >
                {category.name}
                <span
                  className={`p-[4px] text-[10px] rounded-full ${
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
            {users.map((user, i) => (
              <div key={i} className="flex items-center w-full gap-2">
                <Checkbox value={user.name} />

                <div
                  className={`flex items-center rounded-3xl p-4 gap-6 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#F5F8FF] w-full`}
                >
                  <CustomAvatar name={user.name} />

                  <div className="spacey-2">
                    <h3 className="text-sm font-semibold text-black">
                      {user.name}
                    </h3>
                    <p className="text-black text-[10px] font-medium">
                      {" "}
                      {user.nationality}
                    </p>

                    <span className="text-[10px] font-light text-[black] space-x-2">
                      {user.degree}

                      <span>{user.year}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {user.hashTags.map((tag, i) => (
                        <div key={i} className="text-[#8492A7] text-[8px]">
                          {tag}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {user.tags.map((tag, i) => (
                        <Pill key={i} text={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
