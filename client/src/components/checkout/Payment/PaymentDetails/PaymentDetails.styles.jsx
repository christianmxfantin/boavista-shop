import { Box, List, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaymentDetailsContainer = styled(Box)(({ theme }) => ({
  //styles
}));

export const MyCardsList = styled(List)(({ theme }) => ({
  borderRadius: theme.spacing(1), //8px
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[100],
}));

export const ListItemTextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  // justifyContent: "space-between",
}));

export const PaymentNewCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const CardNumber = styled(TextField)(({ theme }) => ({
  //styles
}));

export const CardDataContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

export const CardExpirationDate = styled(TextField)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const CardCVC = styled(TextField)(({ theme }) => ({
  //styles
}));

export const CardName = styled(TextField)(({ theme }) => ({
  //styles
}));
