//Spacing(1) is equals to 8px

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      50: "hsl(207,50%,92%)",
      100: "hsl(206,51%,80%)",
      200: "hsl(207,51%,68%)",
      300: "hsl(207,50%,55%)",
      400: "hsl(207,60%,45%)",
      500: "hsl(207,90%,36%)",
      600: "hsl(208,91%,34%)",
      700: "hsl(210,93%,32%)",
      800: "hsl(212,93%,30%)",
      900: "hsl(216,97%,26%)",
      A100: "hsl(220,100%,85%)",
      A200: "hsl(220,100%,75%)",
      A400: "hsl(220,100%,65%)",
      A700: "hsl(220,100%,60%)",
    },
    secondary: {
      50: "hsl(48,93%,94%)",
      100: "hsl(50,89%,86%)",
      200: "hsl(50,90%,77%)",
      300: "hsl(50,90%,68%)",
      400: "hsl(50,90%,61%)",
      500: "hsl(50,90%,54%)",
      600: "hsl(49,88%,53%)",
      700: "hsl(48,87%,52%)",
      800: "hsl(47,86%,50%)",
      900: "hsl(45,91%,48%)",
      A100: "hsl(0,0%,100%)",
      A200: "hsl(44,100%,94%)",
      A400: "hsl(44,100%,84%)",
      A700: "hsl(44,100%,79%)",
    },
    grey: {
      50: "hsl(240,7%,94%)",
      100: "hsl(225,6%,86%)",
      200: "hsl(230,5%,77%)",
      300: "hsl(232,5%,68%)",
      400: "hsl(229,5%,61%)",
      500: "hsl(227,5%,54%)",
      600: "hsl(230,5%,51%)",
      700: "hsl(230,5%,48%)",
      800: "hsl(230,5%,43%)",
      900: "hsl(231,7%,35%)",
      A100: "hsl(231,88%,90%)",
      A200: "hsl(231,88%,80%)",
      A400: "hsl(231,100%,70%)",
      A700: "hsl(231,100%,65%)",
    },
    success: {
      50: "hsl(120,36%,94%)",
      100: "hsl(115,37%,86%)",
      200: "hsl(116,37%,77%)",
      300: "hsl(116,37%,68%)",
      400: "hsl(117,36%,61%)",
      500: "hsl(117,36%,54%)",
      600: "hsl(116,34%,51%)",
      700: "hsl(117,36%,47%)",
      800: "hsl(117,40%,44%)",
      900: "hsl(117,47%,37%)",
      A100: "hsl(117,100%,92%)",
      A200: "hsl(117,100%,82%)",
      A400: "hsl(117,100%,72%)",
      A700: "hsl(117,100%,67%)",
    },
    error: {
      50: "hsl(357,59%,93%)",
      100: "hsl(358,59%,83%)",
      200: "hsl(358,59%,72%)",
      300: "hsl(358,58%,61%)",
      400: "hsl(357,59%,53%)",
      500: "hsl(358,72%,45%)",
      600: "hsl(358,74%,43%)",
      700: "hsl(358,77%,41%)",
      800: "hsl(358,80%,38%)",
      900: "hsl(359,87%,34%)",
      A100: "hsl(0,100%,91%)",
      A200: "hsl(359,100%,81%)",
      A400: "hsl(360,100%,71%)",
      A700: "hsl(359,100%,66%)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*::before": {
          boxSizing: "border-box",
        },
        "*::after": {
          boxSizing: "border-box",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiOutlinedInput-root": {
            marginBottom: theme.spacing(1.5), //12px
            color: theme.palette.primary[500],
            "& fieldset": {
              borderColor: theme.palette.primary[500],
            },
            "&:hover fieldset": {
              borderWidth: "2px",
              borderColor: theme.palette.primary[500],
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary[500],
            },
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          //change focus and standard
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary[500],
          },
          "& .MuiOutlinedInput-input": {
            padding: theme.spacing(0.5), //4px
          },
          "&:hover": {
            borderBottom: "none",
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary[500],
          "&:before": {
            borderBottom: "none",
          },
          "&:hover": {
            color: theme.palette.secondary[500],
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiSelect-icon": {
            color: theme.palette.primary[500],
          },
          "&:focus-visible": {
            border: theme.palette.primary[500],
          },
          "& .MuiSelect-icon:hover": {
            color: theme.palette.secondary[500],
          },
        }),
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiTypography-root": {
            color: theme.palette.primary[500],
          },
        }),
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiStepLabel-label": {
            fontSize: theme.spacing(2.5), //20px
          },
          "& .MuiStepLabel-label.Mui-active": {
            color: theme.palette.primary[500],
            position: "relative",
          },
          "& .MuiStepLabel-label.Mui-completed": {
            color: theme.palette.success[700],
          },
          "& .MuiSvgIcon-root.Mui-completed": {
            color: theme.palette.success[700],
          },
          "& .MuiStepLabel-label.Mui-active:hover": {
            color: theme.palette.secondary[500],
            cursor: "pointer",
            transition: "color 0.4s ease-in-out",
          },
          "& .MuiStepLabel-label.Mui-active::after": {
            content: '""',
            position: "absolute",
            width: "0%",
            height: "2px",
            bottom: "-2px",
            left: "50%",
            backgroundColor: theme.palette.secondary[500],
            transition: "all 0.4s ease-in-out",
            transform: "translateX(-50%)",
          },
          "& .MuiStepLabel-label.Mui-active:hover::after": {
            width: "100%",
            transition: "all 0.4s ease-in-out",
          },
        }),
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiStepConnector-line": {
            borderColor: theme.palette.primary[500],
          },
        }),
      },
    },
  },
});
