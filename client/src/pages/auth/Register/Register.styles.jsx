import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.palette.primary[500],
}));

export const RegisterTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3), //24px
  fontWeight: "500",
}));
