import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary[500],
}));

export const ProfileTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  marginBottom: theme.spacing(2),
  fontWeight: "500",
}));
