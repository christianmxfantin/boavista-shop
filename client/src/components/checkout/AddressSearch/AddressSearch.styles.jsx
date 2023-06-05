import { Box, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AddressSearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StateSelectContainer = styled(Box)(({ theme }) => ({
  width: "100%",
}));

export const StateSelect = styled(Select)(({ theme }) => ({
  //styles
}));

export const CitySelectContainer = styled(Box)(({ theme }) => ({
  width: "100%",
}));

export const CitySelect = styled(Select)(({ theme }) => ({
  marginTop: theme.spacing(1), //8px
}));
