import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageNotFoundContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8), //64px,
  textAlign: "center",
}));

export const ImageTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px,
  color: theme.palette.primary[500],
}));
