import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EmptyDataContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const EmptyDataTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary[500],
}));
