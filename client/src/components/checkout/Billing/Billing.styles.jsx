import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BillingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "row-reverse",
}));

export const DataContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "column",
}));

export const NameInput = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2), //16px
}));

export const SurnameInput = styled(TextField)(({ theme }) => ({
  //styles
}));

export const AddressInput = styled(TextField)(({ theme }) => ({
  //styles
}));

export const MailInput = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2), //16px
}));

export const PhoneInput = styled(TextField)(({ theme }) => ({
  //styles
}));
