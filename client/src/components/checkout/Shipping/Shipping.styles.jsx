import { FormControl, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ShippingContainer = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Comments = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2), //16px
}));
