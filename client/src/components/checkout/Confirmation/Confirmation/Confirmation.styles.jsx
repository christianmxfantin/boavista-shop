import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ConfirmationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ConfirmationButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "auto",
  justifyContent: "flex-end",
}));
