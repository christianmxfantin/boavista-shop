import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
  width: "400px",
  height: "400px",
  margin: `${theme.spacing(6.5)} auto`, //52px
  padding: theme.spacing(4), //32px
  borderRadius: theme.spacing(1.5), //12px,
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[50],
}));

export const DashboardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary[500],
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  height: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
