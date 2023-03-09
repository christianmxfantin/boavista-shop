import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BillingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const NameInput = styled(TextField)(({ theme }) => ({
  width: "376px",
  marginBottom: theme.spacing(2), //16px
}));

export const SurnameInput = styled(TextField)(({ theme }) => ({
  width: "376px",
  marginBottom: theme.spacing(2), //16px
}));
