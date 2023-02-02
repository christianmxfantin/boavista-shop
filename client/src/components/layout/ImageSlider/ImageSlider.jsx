import { useTheme } from "@emotion/react";
import {
  SliderContainer,
  ButtonPrevious,
  ImagesContainer,
  ButtonNext,
} from "../ImageSlider/ImageSlider.styles";
import { Icon } from "../../ui/Icon";
import ProductImage from "../../../images/product.jpg";
// import ProductImage2 from "../../../images/product2.jpg";

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
        {/* <img
          src={ProductImage2}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: theme.spacing(1.5), //12px
            objectFit: "cover",
          }}
        /> */}
      </ImagesContainer>
      <ButtonNext>
        <Icon name="Arrow-Next" size={30} />
      </ButtonNext>
    </SliderContainer>
  );
};

export default ImageSlider;
