import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "95%",
  margin: theme.spacing(1.5, 3, 0, 3), //24px
  padding: theme.spacing(2), //16px
  borderRadius: theme.spacing(1), //8px,
  backgroundColor: theme.palette.primary[300],
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
  borderRadius: theme.spacing(1), //8px,
  // backgroundColor: theme.palette.primary[200],
  color: theme.palette.secondary.A100,
  fontWeight: "500",
}));
