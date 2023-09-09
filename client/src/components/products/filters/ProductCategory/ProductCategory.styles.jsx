import { Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductCategoryTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px,
  fontWeight: 600,
}));

export const ProductCategorySelect = styled(Select)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1), //8px,
}));
