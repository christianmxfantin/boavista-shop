import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: theme.spacing(1, 0, 2, 0), //8px y 16px;
}));

export const AboutData = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: theme.spacing(4), //32px
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 500,
  color: theme.palette.primary[500],
}));

export const AboutInfo = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2.5), //20px
  textAlign: "justify",
  color: theme.palette.primary[500],
}));
