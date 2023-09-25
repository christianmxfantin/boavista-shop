import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SliderContainer = styled(Box)(({ theme }) => ({
  width: "60%",
  marginRight: theme.spacing(2), //16px
  display: "flex",
}));

export const EmptyImage = styled(Box)(({ theme }) => ({
  width: "100%",
  color: theme.palette.secondary.A100,
}));

export const ButtonPrevious = styled(Button)(({ theme }) => ({
  //styles
}));

export const ImagesContainer = styled(Box)(({ theme }) => ({
  //styles
}));

export const ButtonNext = styled(Button)(({ theme }) => ({
  //styles
}));
