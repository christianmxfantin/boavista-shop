import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ForgetPasswordContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(4), //32px
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[50],
}));

export const ForgetPasswordForm = styled(Box)(({ theme }) => ({
  //styles
}));

export const FormAuthTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 500,
}));

export const FormAuthContent = styled(Box)(({ theme }) => ({
  //styles
}));

export const EmailInput = styled(TextField)(({ theme }) => ({
  width: "96%",
  marginBottom: theme.spacing(3), //8px
}));
