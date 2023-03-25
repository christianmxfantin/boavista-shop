import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "400px",
  height: "400px",
  margin: `${theme.spacing(6.5)} auto`, //52px
  padding: theme.spacing(4), //32px
  borderRadius: theme.spacing(1.5), //12px,
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[50],
}));

export const LoginTitle = styled(Typography)(() => ({
  fontWeight: 500,
}));

export const SocialLogin = styled(Box)(() => ({
  display: "flex",
}));

export const GoogleButton = styled(Button)(({ theme }) => ({
  width: "180px",
  marginRight: theme.spacing(2), //16px
  "&:hover": {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.secondary[500],
  },
}));

export const FacebookButton = styled(Button)(({ theme }) => ({
  width: "180px",
  "&:hover": {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.secondary[500],
  },
}));

export const EmailLogin = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const EmailInput = styled(TextField)(({ theme }) => ({
  width: "376px",
  marginBottom: theme.spacing(2), //16px
}));

export const PasswordInput = styled(TextField)(({ theme }) => ({
  //styles
}));

export const ButtonsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));
