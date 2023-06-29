import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ShippingPaymentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ShippingButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "auto",
  justifyContent: "space-between",
}));
