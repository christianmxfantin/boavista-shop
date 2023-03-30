import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProfileDataContainer = styled(Box)(({ theme }) => ({
  width: "500px",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.primary[50],
}));

export const ProfileDataTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ProfileDataTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));
