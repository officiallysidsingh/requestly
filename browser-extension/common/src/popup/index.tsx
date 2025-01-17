import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider, theme } from "antd";
import Popup from "./components/Popup";
import { RecordsProvider } from "./contexts/RecordsContext";
import "./index.css";

const token = {
  fontSize: 13,
  borderRadius: 4,
  controlHeight: 30,
  colorText: "#ffffff",
  colorTextTertiary: "#b0b0b5",
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ token, algorithm: [theme.darkAlgorithm] }}>
      <RecordsProvider>
        <Popup />
      </RecordsProvider>
    </ConfigProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
