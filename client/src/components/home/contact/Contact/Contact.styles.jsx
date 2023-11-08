import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContactContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary[500],
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(5, 5, 0, 5), //40px 40px 0 40px
  fontWeight: 500,
  color: theme.palette.secondary.A100,
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  // marginTop: theme.spacing(6), //40px
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
