import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NumericInputContainer = styled(ToggleButtonGroup)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px
}));

export const AddButton = styled(ToggleButton)(({ theme }) => ({
  //styles
}));

export const Quantity = styled(Box)(({ theme }) => ({
  // padding: theme.spacing(0, 1, 0, 1), //8px
  color: theme.palette.primary[500],
}));

export const RemoveButton = styled(ToggleButton)(({ theme }) => ({
  //styles
}));
