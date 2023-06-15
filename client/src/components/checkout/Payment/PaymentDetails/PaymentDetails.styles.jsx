import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaymentDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const CardNumber = styled(TextField)(({ theme }) => ({
  //styles
}));

export const CardDataContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));

export const CardExpirationDate = styled(TextField)(({ theme }) => ({
  width: "50%",
  marginRight: theme.spacing(1),
}));

export const CardCVC = styled(TextField)(({ theme }) => ({
  width: "50%",
}));

export const CardName = styled(TextField)(({ theme }) => ({
  //styles
}));
