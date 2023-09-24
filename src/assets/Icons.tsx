import React, { ReactSVGElement, SVGProps } from "react";

type MyCustomIconProps = SVGProps<ReactSVGElement>;

export const HomeIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 17.0001V11.4522V11.4514C20 10.9176 20 10.6505 19.9351 10.402C19.8775 10.1816 19.7827 9.97269 19.6548 9.78426C19.5104 9.57164 19.3096 9.39575 18.9074 9.04389L14.1074 4.84389C13.3608 4.1906 12.9875 3.864 12.5674 3.73976C12.1972 3.63028 11.8028 3.63028 11.4326 3.73976C11.0127 3.86393 10.6398 4.19025 9.894 4.84281L9.89278 4.84389L5.09277 9.04389L5.09182 9.04473C4.69032 9.39603 4.48944 9.57181 4.34521 9.78427C4.2173 9.97269 4.12255 10.1816 4.06497 10.402C4 10.6506 4 10.9178 4 11.4522V17.0001C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74481 19.6448 5.23486 19.8478C5.60241 20 6.06835 20 7.00023 20C7.93211 20 8.39782 20 8.76537 19.8478C9.25542 19.6448 9.64467 19.2554 9.84766 18.7654C9.9999 18.3978 10 17.9319 10 17V16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16V17C14 17.9319 14 18.3978 14.1522 18.7654C14.3552 19.2554 14.7448 19.6448 15.2349 19.8478C15.6024 20 16.0683 20 17.0002 20C17.9321 20 18.3978 20 18.7654 19.8478C19.2554 19.6448 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0001Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CalendarIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7.4C3.66863 7.4 3.4 7.66863 3.4 8C3.4 8.33137 3.66863 8.6 4 8.6V7.4ZM20 8.6C20.3314 8.6 20.6 8.33137 20.6 8C20.6 7.66863 20.3314 7.4 20 7.4V8.6ZM5.0918 19.782L5.36419 19.2474L5.0918 19.782ZM4.21799 18.908L3.68338 19.1804H3.68338L4.21799 18.908ZM19.7822 18.908L19.2476 18.6356L19.7822 18.908ZM18.9078 19.782L18.6354 19.2474L18.9078 19.782ZM18.9078 4.21799L19.1802 3.68338L18.9078 4.21799ZM19.7822 5.09204L19.2476 5.36444V5.36444L19.7822 5.09204ZM5.0918 4.21799L5.36419 4.75259L5.0918 4.21799ZM4.21799 5.09204L4.75259 5.36444L4.21799 5.09204ZM15.4243 12.4243C15.6586 12.1899 15.6586 11.8101 15.4243 11.5757C15.1899 11.3414 14.8101 11.3414 14.5757 11.5757L15.4243 12.4243ZM11 16L10.5757 16.4243C10.8101 16.6586 11.1899 16.6586 11.4243 16.4243L11 16ZM9.42426 13.5757C9.18995 13.3414 8.81005 13.3414 8.57574 13.5757C8.34142 13.8101 8.34142 14.1899 8.57574 14.4243L9.42426 13.5757ZM16.6 2C16.6 1.66863 16.3314 1.4 16 1.4C15.6686 1.4 15.4 1.66863 15.4 2H16.6ZM15.4 4C15.4 4.33137 15.6686 4.6 16 4.6C16.3314 4.6 16.6 4.33137 16.6 4H15.4ZM8.6 2C8.6 1.66863 8.33137 1.4 8 1.4C7.66863 1.4 7.4 1.66863 7.4 2H8.6ZM7.4 4C7.4 4.33137 7.66863 4.6 8 4.6C8.33137 4.6 8.6 4.33137 8.6 4H7.4ZM4 8.6H20V7.4H4V8.6ZM7.2002 4.6H16.8002V3.4H7.2002V4.6ZM19.4 7.19995V16.8H20.6V7.19995H19.4ZM16.8002 19.4H7.2002V20.6H16.8002V19.4ZM4.6 16.8V7.19995H3.4V16.8H4.6ZM7.2002 19.4C6.63026 19.4 6.23876 19.3995 5.93525 19.3747C5.6387 19.3505 5.4794 19.3061 5.36419 19.2474L4.8194 20.3166C5.13202 20.4759 5.46686 20.5405 5.83753 20.5707C6.20124 20.6005 6.65003 20.6 7.2002 20.6V19.4ZM3.4 16.8C3.4 17.3501 3.39953 17.7988 3.42924 18.1625C3.45952 18.5331 3.52411 18.8678 3.68338 19.1804L4.75259 18.6356C4.69388 18.5204 4.64947 18.3612 4.62526 18.0647C4.60047 17.7613 4.6 17.3699 4.6 16.8H3.4ZM5.36419 19.2474C5.10086 19.1132 4.88686 18.8992 4.75259 18.6356L3.68338 19.1804C3.93261 19.6696 4.33009 20.0673 4.8194 20.3166L5.36419 19.2474ZM19.4 16.8C19.4 17.37 19.3996 17.7614 19.3748 18.0648C19.3507 18.3613 19.3063 18.5205 19.2476 18.6356L20.3168 19.1804C20.4761 18.8678 20.5407 18.5329 20.5709 18.1624C20.6005 17.7988 20.6 17.35 20.6 16.8H19.4ZM16.8002 20.6C17.3504 20.6 17.799 20.6005 18.1625 20.5707C18.533 20.5404 18.8676 20.4758 19.1802 20.3166L18.6354 19.2474C18.5201 19.3061 18.361 19.3505 18.0647 19.3747C17.7614 19.3995 17.3701 19.4 16.8002 19.4V20.6ZM19.2476 18.6356C19.1136 18.8988 18.8991 19.113 18.6354 19.2474L19.1802 20.3166C19.6691 20.0675 20.0674 19.67 20.3168 19.1804L19.2476 18.6356ZM16.8002 4.6C17.3702 4.6 17.7614 4.60047 18.0647 4.62525C18.361 4.64947 18.5201 4.69386 18.6354 4.75259L19.1802 3.68338C18.8676 3.52413 18.533 3.45953 18.1625 3.42924C17.799 3.39953 17.3503 3.4 16.8002 3.4V4.6ZM20.6 7.19995C20.6 6.64986 20.6005 6.20117 20.5709 5.83762C20.5407 5.46706 20.4761 5.1323 20.3168 4.81965L19.2476 5.36444C19.3063 5.4796 19.3507 5.63875 19.3748 5.93516C19.3996 6.23858 19.4 6.62994 19.4 7.19995H20.6ZM18.6354 4.75259C18.8991 4.88694 19.1135 5.10125 19.2476 5.36444L20.3168 4.81965C20.0674 4.33018 19.6692 3.93253 19.1802 3.68338L18.6354 4.75259ZM7.2002 3.4C6.65004 3.4 6.20125 3.39953 5.83755 3.42924C5.46688 3.45951 5.13203 3.52409 4.8194 3.68338L5.36419 4.75259C5.47939 4.6939 5.63868 4.64948 5.93523 4.62526C6.23875 4.60047 6.63025 4.6 7.2002 4.6V3.4ZM4.6 7.19995C4.6 6.63 4.60047 6.23864 4.62526 5.93525C4.64947 5.63888 4.69387 5.47967 4.75259 5.36444L3.68338 4.81965C3.52411 5.13223 3.45952 5.46693 3.42924 5.83753C3.39953 6.20112 3.4 6.6498 3.4 7.19995H4.6ZM4.8194 3.68338C4.33003 3.93273 3.93257 4.33058 3.68338 4.81965L4.75259 5.36444C4.88689 5.10085 5.10092 4.88673 5.36419 4.75259L4.8194 3.68338ZM14.5757 11.5757L10.5757 15.5757L11.4243 16.4243L15.4243 12.4243L14.5757 11.5757ZM11.4243 15.5757L9.42426 13.5757L8.57574 14.4243L10.5757 16.4243L11.4243 15.5757ZM15.4 2V4H16.6V2H15.4ZM7.4 2V4H8.6V2H7.4Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const PeopleIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 16.9999C21 15.7697 19.7659 14.7124 18 14.2495M3 16.9999C3 15.7697 4.2341 14.7124 6 14.2495M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShareIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 13.5L15 16.5M15 7.5L9 10.5M18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21ZM6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12C9 13.6569 7.65685 15 6 15ZM18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DocumentIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 17H15M9 14H15M18.9996 9H14.5996C14.0396 9 13.7598 8.99998 13.5459 8.89099C13.3577 8.79512 13.2049 8.64218 13.109 8.45401C13 8.2401 13 7.96005 13 7.4V3M19 17.8V9.65399C19 9.19048 19.0002 8.95872 18.9502 8.73932C18.9059 8.54475 18.8328 8.35788 18.7332 8.18499C18.6208 7.99002 18.4632 7.81997 18.1483 7.47986L14.9502 4.02588C14.6002 3.64789 14.425 3.45888 14.2168 3.32343C14.0322 3.20337 13.8286 3.11464 13.6151 3.06077C13.3743 3 13.1172 3 12.6021 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71572 5.21799 4.09204C5 4.51986 5 5.07991 5 6.20001V17.8C5 18.9201 5 19.4801 5.21799 19.908C5.40973 20.2843 5.71547 20.5902 6.0918 20.782C6.51962 21 7.08009 21 8.2002 21H15.8002C16.9203 21 17.48 21 17.9078 20.782C18.2841 20.5902 18.5905 20.2843 18.7822 19.908C19.0002 19.4801 19 18.9201 19 17.8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NotesIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.21799 5.09204L4.66349 5.31904L4.21799 5.09204ZM5.0918 4.21799L5.31879 4.66349L5.0918 4.21799ZM5.0918 19.782L5.31879 19.3365L5.0918 19.782ZM4.21799 18.908L3.77248 19.135H3.77248L4.21799 18.908ZM19.7822 18.908L19.3367 18.681L19.7822 18.908ZM18.9078 19.782L18.6808 19.3365L18.9078 19.782ZM19.7822 5.09204L19.3367 5.31904L19.7822 5.09204ZM18.9078 4.21799L19.1348 3.77248L18.9078 4.21799ZM12 10.5C11.7239 10.5 11.5 10.7239 11.5 11C11.5 11.2761 11.7239 11.5 12 11.5V10.5ZM16 11.5C16.2761 11.5 16.5 11.2761 16.5 11C16.5 10.7239 16.2761 10.5 16 10.5V11.5ZM12 7.5C11.7239 7.5 11.5 7.72386 11.5 8C11.5 8.27614 11.7239 8.5 12 8.5V7.5ZM16 8.5C16.2761 8.5 16.5 8.27614 16.5 8C16.5 7.72386 16.2761 7.5 16 7.5V8.5ZM7.5 20C7.5 20.2761 7.72386 20.5 8 20.5C8.27614 20.5 8.5 20.2761 8.5 20H7.5ZM8.5 4C8.5 3.72386 8.27614 3.5 8 3.5C7.72386 3.5 7.5 3.72386 7.5 4L8.5 4ZM19.5 7.20001V16.8H20.5V7.20001H19.5ZM16.8002 19.5H7.2002V20.5H16.8002V19.5ZM4.5 16.8V7.20001H3.5V16.8H4.5ZM7.2002 4.5H16.8002V3.5H7.2002V4.5ZM4.5 7.20001C4.5 6.63171 4.50039 6.23556 4.52559 5.92714C4.55031 5.62456 4.5964 5.45071 4.66349 5.31904L3.77248 4.86505C3.62159 5.16119 3.55868 5.48128 3.52891 5.8457C3.49961 6.20429 3.5 6.64821 3.5 7.20001H4.5ZM7.2002 3.5C6.64839 3.5 6.20437 3.49961 5.84569 3.52891C5.4812 3.55868 5.16098 3.62157 4.8648 3.77248L5.31879 4.66349C5.45044 4.59641 5.62436 4.55032 5.92709 4.52559C6.23563 4.50039 6.6319 4.5 7.2002 4.5V3.5ZM4.66349 5.31904C4.80737 5.03666 5.03668 4.80723 5.31879 4.66349L4.8648 3.77248C4.39427 4.01223 4.0121 4.39477 3.77248 4.86505L4.66349 5.31904ZM7.2002 19.5C6.6319 19.5 6.23563 19.4996 5.92711 19.4744C5.62438 19.4497 5.45045 19.4036 5.31879 19.3365L4.8648 20.2275C5.16097 20.3784 5.48118 20.4413 5.84568 20.4711C6.20436 20.5004 6.64838 20.5 7.2002 20.5V19.5ZM3.5 16.8C3.5 17.3518 3.49961 17.7957 3.52891 18.1543C3.55868 18.5187 3.62159 18.8388 3.77248 19.135L4.66349 18.681C4.5964 18.5493 4.55031 18.3755 4.52559 18.0729C4.50039 17.7645 4.5 17.3683 4.5 16.8H3.5ZM5.31879 19.3365C5.03666 19.1927 4.80736 18.9633 4.66349 18.681L3.77248 19.135C4.01211 19.6053 4.39429 19.9877 4.8648 20.2275L5.31879 19.3365ZM19.5 16.8C19.5 17.3684 19.4997 17.7645 19.4745 18.073C19.4498 18.3756 19.4038 18.5493 19.3367 18.681L20.2277 19.135C20.3787 18.8388 20.4415 18.5186 20.4712 18.1542C20.5004 17.7957 20.5 17.3518 20.5 16.8H19.5ZM16.8002 20.5C17.352 20.5 17.7958 20.5004 18.1543 20.4711C18.5187 20.4413 18.8387 20.3784 19.1348 20.2275L18.6808 19.3365C18.5491 19.4036 18.3753 19.4497 18.0729 19.4744C17.7645 19.4996 17.3685 19.5 16.8002 19.5V20.5ZM19.3367 18.681C19.193 18.963 18.9633 19.1926 18.6808 19.3365L19.1348 20.2275C19.605 19.9879 19.9879 19.6056 20.2277 19.135L19.3367 18.681ZM20.5 7.20001C20.5 6.64826 20.5004 6.20434 20.4712 5.84578C20.4415 5.48139 20.3787 5.16125 20.2277 4.86505L19.3367 5.31904C19.4038 5.45066 19.4498 5.62445 19.4745 5.92706C19.4997 6.23551 19.5 6.63166 19.5 7.20001H20.5ZM16.8002 4.5C17.3685 4.5 17.7646 4.50039 18.0729 4.52559C18.3753 4.55031 18.5491 4.59638 18.6808 4.66349L19.1348 3.77248C18.8387 3.6216 18.5187 3.55869 18.1543 3.52891C17.7958 3.49961 17.352 3.5 16.8002 3.5V4.5ZM20.2277 4.86505C19.9879 4.39444 19.605 4.01206 19.1348 3.77248L18.6808 4.66349C18.9632 4.8074 19.193 5.037 19.3367 5.31904L20.2277 4.86505ZM12 11.5H16V10.5H12V11.5ZM12 8.5H16V7.5H12V8.5ZM8.5 20L8.5 4L7.5 4L7.5 20H8.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const HeartIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 8.19431C10 3.49988 3 3.99988 3 9.99991C3 15.9999 12 20.9999 12 20.9999C12 20.9999 21 15.9999 21 9.99991C21 3.99988 14 3.49988 12 8.19431Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheveronDown: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 10L12 14L8 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const SearchIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M13.0303 11.9697C12.7374 11.6768 12.2626 11.6768 11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303L13.0303 11.9697ZM16.9697 18.0303C17.2626 18.3232 17.7374 18.3232 18.0303 18.0303C18.3232 17.7374 18.3232 17.2626 18.0303 16.9697L16.9697 18.0303ZM8.33333 13.4167C5.52589 13.4167 3.25 11.1408 3.25 8.33333H1.75C1.75 11.9692 4.69746 14.9167 8.33333 14.9167V13.4167ZM3.25 8.33333C3.25 5.52589 5.52589 3.25 8.33333 3.25V1.75C4.69746 1.75 1.75 4.69746 1.75 8.33333H3.25ZM8.33333 3.25C11.1408 3.25 13.4167 5.52589 13.4167 8.33333H14.9167C14.9167 4.69746 11.9692 1.75 8.33333 1.75V3.25ZM13.4167 8.33333C13.4167 11.1408 11.1408 13.4167 8.33333 13.4167V14.9167C11.9692 14.9167 14.9167 11.9692 14.9167 8.33333H13.4167ZM11.9697 13.0303L16.9697 18.0303L18.0303 16.9697L13.0303 11.9697L11.9697 13.0303Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const WarningIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.0415 12.875H10.3415C10.3415 12.7093 10.2072 12.575 10.0415 12.575V12.875ZM10.0415 12.9583L10.0414 13.2583C10.121 13.2583 10.1973 13.2267 10.2536 13.1705C10.3099 13.1142 10.3415 13.0379 10.3415 12.9583H10.0415ZM9.9585 12.9583H9.6585C9.6585 13.1239 9.79276 13.2582 9.95842 13.2583L9.9585 12.9583ZM9.9585 12.875V12.575C9.79281 12.575 9.6585 12.7093 9.6585 12.875H9.9585ZM10.3 7.04163C10.3 6.87594 10.1657 6.74163 10 6.74163C9.83431 6.74163 9.7 6.87594 9.7 7.04163H10.3ZM9.7 10.375C9.7 10.5406 9.83431 10.675 10 10.675C10.1657 10.675 10.3 10.5406 10.3 10.375H9.7ZM10 17.2C6.02355 17.2 2.8 13.9764 2.8 10H2.2C2.2 14.3078 5.69218 17.8 10 17.8V17.2ZM2.8 10C2.8 6.02355 6.02355 2.8 10 2.8V2.2C5.69218 2.2 2.2 5.69218 2.2 10H2.8ZM10 2.8C13.9764 2.8 17.2 6.02355 17.2 10H17.8C17.8 5.69218 14.3078 2.2 10 2.2V2.8ZM17.2 10C17.2 13.9764 13.9764 17.2 10 17.2V17.8C14.3078 17.8 17.8 14.3078 17.8 10H17.2ZM9.7415 12.875V12.9583H10.3415V12.875H9.7415ZM10.0416 12.6583L9.95857 12.6583L9.95842 13.2583L10.0414 13.2583L10.0416 12.6583ZM10.2585 12.9583V12.875H9.6585V12.9583H10.2585ZM9.9585 13.175H10.0415V12.575H9.9585V13.175ZM9.7 7.04163V10.375H10.3V7.04163H9.7Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CloseIcon: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CirclePlus: React.FC<MyCustomIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <g clipPath="url(#clip0_202_2192)">
        <path
          d="M3.33333 4.65C3.14003 4.65 2.98333 4.8067 2.98333 5C2.98333 5.1933 3.14003 5.35 3.33333 5.35V4.65ZM6.66667 5.35C6.85997 5.35 7.01667 5.1933 7.01667 5C7.01667 4.8067 6.85997 4.65 6.66667 4.65V5.35ZM4.65 6.66667C4.65 6.85997 4.8067 7.01667 5 7.01667C5.1933 7.01667 5.35 6.85997 5.35 6.66667H4.65ZM5.35 3.33333C5.35 3.14003 5.1933 2.98333 5 2.98333C4.8067 2.98333 4.65 3.14003 4.65 3.33333H5.35ZM5 8.4C3.12223 8.4 1.6 6.87777 1.6 5H0.9C0.9 7.26437 2.73563 9.1 5 9.1V8.4ZM1.6 5C1.6 3.12223 3.12223 1.6 5 1.6V0.9C2.73563 0.9 0.9 2.73563 0.9 5H1.6ZM5 1.6C6.87777 1.6 8.4 3.12223 8.4 5H9.1C9.1 2.73563 7.26437 0.9 5 0.9V1.6ZM8.4 5C8.4 6.87777 6.87777 8.4 5 8.4V9.1C7.26437 9.1 9.1 7.26437 9.1 5H8.4ZM3.33333 5.35H6.66667V4.65H3.33333V5.35ZM5.35 6.66667V3.33333H4.65V6.66667H5.35Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_202_2192">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
