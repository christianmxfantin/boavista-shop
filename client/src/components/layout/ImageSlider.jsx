import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { Icon } from "../../components/ui/Icon";
import ProductImage from "../../images/product.jpg";
import ProductImage2 from "../../images/product2.jpg";

const SliderContainer = styled(Box)(({ theme }) => ({
  width: "60%",
  marginRight: theme.spacing(2), //16px
  display: "flex",
}));

const ButtonPrevious = styled(Button)(({ theme }) => ({
  //styles
}));

const ImagesContainer = styled(Box)(({ theme }) => ({
  //styles
}));

const ButtonNext = styled(Button)(({ theme }) => ({
  //styles
}));

const ImageSlider = () => {
  const theme = useTheme();

  return (
    <SliderContainer>
      <ButtonPrevious>
        <Icon name="Arrow-Previous" size={30} />
      </ButtonPrevious>
      <ImagesContainer>
        <img
          src={ProductImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: theme.spacing(1.5), //12px
            objectFit: "cover",
          }}
        />
        <img
          src={ProductImage2}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: theme.spacing(1.5), //12px
            objectFit: "cover",
          }}
        />
      </ImagesContainer>
      <ButtonNext>
        <Icon name="Arrow-Next" size={30} />
      </ButtonNext>
    </SliderContainer>
  );
};

export default ImageSlider;
