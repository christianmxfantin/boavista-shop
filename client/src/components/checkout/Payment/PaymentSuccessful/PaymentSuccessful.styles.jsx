import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaymentSuccessfulContainer = styled(Box)(({ theme }) => ({
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const PaymentData = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: "center",
  color: theme.palette.primary[500],
}));
