import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardAddressContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ItemsContainer = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  width: "100%",
  margin: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1), //8px
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[100],
}));
