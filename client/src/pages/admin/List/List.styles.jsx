import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: theme.spacing(3), //24px
}));

export const ListTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary[500],
  fontWeight: "500",
}));
