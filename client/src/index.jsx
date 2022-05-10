import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { margin: 0, padding: 0 },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
