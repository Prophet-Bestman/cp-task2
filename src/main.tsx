import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1d5ecd",
          colorPrimaryBgHover: "#EDF2FF",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
