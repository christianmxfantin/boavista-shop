import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginDataContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const FirstInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2), //16px
}));

export const SecondInput = styled(TextField)(({ theme }) => ({
  //styles
}));

export const ThirdInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2), //16px
}));
