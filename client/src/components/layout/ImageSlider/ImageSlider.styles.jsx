import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SliderContainer = styled(Box)(({ theme }) => ({
  // width: "60%",
  // marginRight: theme.spacing(2), //
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const SliderData = styled(Box)(({ theme }) => ({
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

export const ImagesData = styled(Box)(({ theme }) => ({
  //styles
}));

export const ButtonNext = styled(Button)(({ theme }) => ({
  //styles
}));

export const ImageCounter = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1), //8px
  textAlign: "center",
  color: theme.palette.primary[500],
}));
