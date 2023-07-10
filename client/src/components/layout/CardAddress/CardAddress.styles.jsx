import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardAddressContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const CardAddressItemContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1), //8px
  backgroundColor: theme.palette.primary[100],
}));

export const CardAddressItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1), //8px
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
