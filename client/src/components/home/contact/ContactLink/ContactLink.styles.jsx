import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LinkCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: theme.spacing(4), //32px
  color: theme.palette.secondary.A100,
  "&:hover": {
    color: theme.palette.secondary[500],
  },
}));

export const LinkData = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  marginLeft: theme.spacing(2), //16px
}));
