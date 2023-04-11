import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  SliderContainer,
  ButtonPrevious,
  ImagesContainer,
  ButtonNext,
} from "../ImageSlider/ImageSlider.styles";
import { Icon } from "../../ui/Icon";
import ProductImage1 from "../../../images/product.jpg";
import ProductImage2 from "../../../images/product2.jpg";
import ProductImage3 from "../../../images/home/about.jpg";

const images = [ProductImage1, ProductImage2, ProductImage3];

const ImageSlider = () => {
  const theme = useTheme();

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <SliderContainer>
      <ButtonPrevious
        disabled={currentIndex === 0 ? true : false}
        onClick={handlePrevious}
      >
        <Icon name="Arrow-Previous" size={30} />
      </ButtonPrevious>
      <ImagesContainer>
        <img
          src={currentImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: theme.spacing(1.5), //12px
            objectFit: "cover",
          }}
        />
      </ImagesContainer>
      <ButtonNext
        disabled={currentIndex === images.length - 1 ? true : false}
        onClick={handleNext}
      >
        <Icon name="Arrow-Next" size={30} />
      </ButtonNext>
    </SliderContainer>
  );
};

export default ImageSlider;
