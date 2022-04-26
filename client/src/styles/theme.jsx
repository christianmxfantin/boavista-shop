//Spacing(1) is equals to 8px

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(207, 90%, 36%)",
      second: "hsl(207, 50%, 55%)",
      third: "hsl(207, 50%, 93%)",
    },
    secondary: {
      main: "hsl(50, 90%, 54%)",
      second: "hsl(50, 90%, 81%)",
    },
    tertiary: {
      main: "hsl(0, 0%, 100%)",
    },
    grey: {
      main: "hsl(227, 5%, 54%)",
      second: "hsl(227, 5%, 90%)",
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
