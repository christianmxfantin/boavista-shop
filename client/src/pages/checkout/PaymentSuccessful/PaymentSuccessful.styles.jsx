import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaymentSuccessfulContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary[50],
}));

export const PaymentData = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: "center",
  color: theme.palette.primary[500],
}));
