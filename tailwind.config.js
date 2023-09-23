/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d5ecd",
        primaryBg: "#E9EFFF",
        primaryText: "#1d4ed8",
        primaryTextDark: "#22215b",
        greenText: "#037092",
        bg: "#f3fafc",
        border: "#eeeeee",
        border2: "#f2f2f2",
        avatarText: "#d0e1ff",
        avatarBg: "#edf4ff",
        iconBg: "#ececec",
      },
    },
  },
  plugins: [],
};
