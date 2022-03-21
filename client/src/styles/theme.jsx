import { createTheme } from "@mui/material/styles";
//import { purple } from "@mui/material//colors";

const theme = createTheme({
  //Colors
  palette: {
    primary: {
      main: "hsl(207, 90%, 36%)",
    },
    secondary: {
      main: "hsl(50, 90%, 54%)",
    },
    tertiary: {
      main: "hsl(0, 0%, 100%)",
    },
    grey: {
      main: "grey",
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
