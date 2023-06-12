import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BillingContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const BillingTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  "&:hover": { cursor: "pointer" },
}));

export const BillingTitle = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(1), //8px
  color: theme.palette.primary[500],
  fontSize: theme.spacing(2.5), //20px
}));

export const DataContainer = styled(Box)(({ theme }) => ({
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

export const CommentsInput = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2), //16px
}));

export const EmailInput = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(1), //8px
}));

export const PhoneInput = styled(TextField)(({ theme }) => ({
  //styles
}));
