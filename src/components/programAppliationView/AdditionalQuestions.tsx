import { useEffect, useState } from "react";
import { Checkbox, Dropdown, Space } from "antd";

import { SectionCard } from "../general";
import videoImg from "../../assets/answer-video.png";

const AdditionalQuestions = () => {
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const [checked, setChecked] = useState<any>(
    questions.map((question) => question.title)
  );

  useEffect(() => {
    const filtered = questions.filter((question) =>
      checked?.includes(question.title)
    );
    setFilteredQuestions(filtered);
  }, [checked]);
  return (
    <SectionCard
      title="Additional Questions"
      rightElement={<DropDown checked={checked} setChecked={setChecked} />}
    >
      <div className="space-y-8">
        {filteredQuestions.map((question) => (
          <div className="flex gap-3">
            <div
              className={`rounded-full h-3 w-3 mt-11 bg-[${question.dotColor}]`}
            ></div>

            <div className="w-full">
              <div className="border-b border-[#eee]">
                <span
                  className={`text-[${question.titleColor}] text-[10px] px-[10px] py-1 bg-[${question.titleBg}] rounded-t-lg"`}
                >
                  {question.title}
                </span>
              </div>

              <p className="py-4 text-sm font-light">{question.question}</p>

              {question.answerComponent}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default AdditionalQuestions;

const DropDown = ({ checked, setChecked }: any) => {
  return (
    <Dropdown
      dropdownRender={() => (
        <Checkbox.Group
          style={{ width: "100%" }}
          value={checked}
          onChange={(checkedValues) => {
            setChecked(checkedValues);
          }}
        >
          <div className="z-50 w-[255px]  bg-white shadow-lg px-4 py-2 rounded-lg space-y-5">
            {dropDownOptions.map((option) => (
              <div key={option} className="flex items-center gap-6">
                <Checkbox value={option} />

                <p className="text-sm">{option}</p>
              </div>
            ))}
          </div>
        </Checkbox.Group>
      )}
      trigger={["click"]}
      placement="bottomRight"
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="w-[200px] h-8 rounded-lg text-sm text-[#0B0B0B] border border-[#EBEBEB] px-4 py-2 ">
          Sort
        </Space>
      </a>
    </Dropdown>
  );
};

const dropDownOptions = [
  "Paragraph",
  "Short Answer",
  "Dropdown Select",
  "Multiple Choice",
  "Video Upload",
];

const questions = [
  {
    title: "Short Answer",
    question:
      "What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply",
    titleColor: "#F1CC04",
    titleBg: "#FFFBE4",
    dotColor: "#FFF3B0",
    answerComponent: (
      <div className="text-[#216C84] p-4 rounded-2xl bg-[#F8FAFF] text-xs font-normal">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    ),
  },
  {
    title: "Video Upload",
    question:
      "What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply",
    titleColor: "#9EB8FF",
    titleBg: "#EEF2FF",
    dotColor: "#9EB8FF",
    answerComponent: (
      <img src={videoImg} alt="video-image" className="w-[400px] h-[225px]" />
    ),
  },
  {
    title: "Number",
    question:
      "What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply",
    titleColor: "#E48A8F",
    titleBg: "#FFF6F7",
    dotColor: "#E48A8F",
    answerComponent: (
      <div className="text-[#216C84] p-4 rounded-2xl bg-[#F8FAFF] text-xs font-normal">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </div>
    ),
  },
  {
    title: "Multiple Choice",
    question:
      "What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply",
    titleColor: "#8DB97F",
    titleBg: "#F0FFEB",
    dotColor: "#D2FFC5",
    answerComponent: (
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="px-4 py-2 bg-[#F8FAFF] text-[#216C84] rounded-2xl"
          >
            New York
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Dropdown Select",
    question:
      "What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply",
    titleColor: "#82E0FF",
    titleBg: "#F2FCFF",
    dotColor: "#82E0FF",
    answerComponent: (
      <div className="text-[#216C84] p-4 rounded-2xl bg-[#F8FAFF] text-xs font-normal">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    ),
  },
];
