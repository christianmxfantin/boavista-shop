import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductCategorySelect = styled(Select)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(4), //32px,
  padding: theme.spacing(1), //8px,
}));
