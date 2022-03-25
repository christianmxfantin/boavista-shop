import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(207, 90%, 36%)",
      second: "hsl(207, 50%, 55%)",
    },
    secondary: {
      main: "hsl(50, 90%, 54%)",
    },
    tertiary: {
      main: "hsl(0, 0%, 100%)",
    },
    grey: {
      main: "hsl(227, 5%, 54%)",
    },
    success: {
      main: "hsl(117, 36%, 54%)",
    },
    error: {
      main: "hsl(358, 72%, 45%)",
    },
  },
});
export default theme;
