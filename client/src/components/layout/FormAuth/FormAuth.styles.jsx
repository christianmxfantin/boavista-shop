import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormAuthContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "450px",
  margin: `${theme.spacing(6.5)} auto`, //52px
  padding: theme.spacing(4), //32px
  borderRadius: theme.spacing(1.5), //12px,
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[50],
}));

export const FormAuthTitle = styled(Typography)(({ theme }) => ({
  // marginBottom: theme.spacing(3), //24px
  fontWeight: 500,
}));

export const FormAuthSocial = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const FormAuthSocialButtons = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3), //24px
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

export const FormAuthName = styled(Box)(({ theme }) => ({
  width: "376px",
  display: "flex",
  flexDirection: "column",
}));

export const NameInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1), //8px
}));

export const SurnameInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1), //8px
}));

export const FormAuthEmail = styled(Box)(({ theme }) => ({
  width: "376px",
  display: "flex",
  flexDirection: "column",
}));

export const EmailInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1), //8px
}));

export const PasswordInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1), //8px
}));

export const ButtonsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const ButtonsContainerDashboard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "350px",
  justifyContent: "center",
}));
