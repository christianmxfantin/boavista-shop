import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { margin: 0, padding: 0 },
        }}
      />
      <App />
    </ThemeProvider>
  </StrictMode>
);
