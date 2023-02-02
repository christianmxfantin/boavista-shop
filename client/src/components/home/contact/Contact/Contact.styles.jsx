import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContactContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary[500],
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(5, 5, 0, 5), //40px 40px 0 40px
  fontWeight: 500,
  color: theme.palette.secondary.A100,
}));

export const DataContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(5), //40px
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const Footer = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2.5), //20px
  textAlign: "center",
  color: theme.palette.secondary.A100,
}));
