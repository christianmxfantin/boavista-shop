import { Box, FormControl, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ShippingPaymentContainer = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ShippingContainer = styled(Box)(({ theme }) => ({
  width: "100%",
}));
