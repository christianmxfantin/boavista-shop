import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary[500],
}));

export const ProfileTitle = styled(Typography)(({ theme }) => ({
  margin: `${theme.spacing(3)} 0 ${theme.spacing(2)} 0`, //24px y 16px
  fontWeight: "500",
}));
