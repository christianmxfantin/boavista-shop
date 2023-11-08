import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 500,
  color: theme.palette.primary[500],
}));

export const AboutInfoContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2), //16px
  marginTop: theme.spacing(2.5), //20px
  textAlign: "justify",
  color: theme.palette.primary[500],
}));
