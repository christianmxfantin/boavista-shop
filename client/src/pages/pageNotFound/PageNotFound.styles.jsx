import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageNotFoundContainer = styled(Box)(({ theme }) => ({
  height: "85vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const ImageTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1), //8px
  borderRadius: theme.spacing(1), //8px
  backgroundColor: theme.palette.primary[200],
  marginTop: theme.spacing(4), //32px,
  color: theme.palette.secondary.A100,
}));
