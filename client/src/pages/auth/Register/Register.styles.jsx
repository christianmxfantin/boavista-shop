import { Box, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "400px",
  height: "400px",
  margin: `${theme.spacing(6.5)} auto`, //52px
  padding: theme.spacing(4), //32px
  borderRadius: theme.spacing(1.5), //12px,
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[50],
}));

export const RegisterTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3), //24px
  fontWeight: "500",
}));

export const RegisterDataContainer = styled(Box)(({ theme }) => ({
  width: "80%",
  display: "flex",
  flexDirection: "column",
}));

export const NameInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1.5), //12px
}));

export const SurnameInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1.5), //12px
}));

export const EmailInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1.5), //12px
}));

export const PasswordInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1.5), //12px
}));
