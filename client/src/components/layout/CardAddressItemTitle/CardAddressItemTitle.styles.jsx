import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ItemComponentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  // flexDirection: "row",
}));

export const ItemTitleContainer = styled(Box)(({ theme }) => ({
  // display: "flex",
  // flexDirection: "column",
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const ItemData = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.secondary.A100,
  fontWeight: "normal",
}));
