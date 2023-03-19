import { Box, FormControl, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ShippingPaymentContainer = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ShippingData = styled(Box)(({ theme }) => ({
  //styles
}));

export const Comments = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2), //16px
}));

export const PaymentData = styled(Box)(({ theme }) => ({
  //styles
}));

export const PaymentDetails = styled(TextField)(({ theme }) => ({
  //styles
}));
