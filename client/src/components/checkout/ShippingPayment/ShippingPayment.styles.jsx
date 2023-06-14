import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ShippingPaymentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ShippingContainer = styled(Box)(({ theme }) => ({
  width: "100%",
}));
