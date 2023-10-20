import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SliderContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const SliderData = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

export const EmptyImage = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  color: theme.palette.secondary.A100,
  textAlign: "center",
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
