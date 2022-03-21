import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "@mui/material";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles
      styles={{
        body: { margin: 0, padding: 0 },
      }}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
