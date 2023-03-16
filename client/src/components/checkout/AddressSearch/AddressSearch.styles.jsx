import { Box, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AddressSearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StateSelect = styled(Select)(({ theme }) => ({
  width: "100%",
}));

export const CitySelect = styled(Select)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(2), //16px
}));
