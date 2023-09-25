import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  SliderContainer,
  ButtonPrevious,
  ImagesContainer,
  ButtonNext,
  EmptyImage,
} from "../ImageSlider/ImageSlider.styles";
import { Icon } from "../../ui/Icon";
import { Tooltip } from "@mui/material";
import UploadImage from "../UploadImage/UploadImage";

const ImageSlider = ({ formType, productsImages }) => {
  const theme = useTheme();

  const [productImage, setProductImage] = useState("");

  let images = useMemo(() => [], []);
  if (productsImages) {
    images = productsImages.map((product) => product.url);
  }
  if (productImage) {
    if (images.length !== 0) {
      images.push(productImage);
    } else {
      images[0] = productImage;
    }
  }

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  // console.log(images);

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

  const handleOpenDialog = () => {
    if (formType === "products" || formType === "edit-product") {
      setOpenDialog(true);
    }
  };

  return (
    <>
      <SliderContainer>
        {images.length === 0 ? (
          <>
            <Tooltip title="Haz clic para añadir imágenes">
              <EmptyImage
                sx={{
                  backgroundColor:
                    formType === "products"
                      ? theme.palette.secondary[900]
                      : formType === "edit-product"
                      ? theme.palette.primary[300]
                      : null,
                }}
                onClick={handleOpenDialog}
              >
                Sin datos
              </EmptyImage>
            </Tooltip>
          </>
        ) : (
          <>
            <ButtonPrevious
              disabled={currentIndex === 0 ? true : false}
              onClick={handlePrevious}
            >
              <Icon name="Arrow-Previous" size={30} />
            </ButtonPrevious>
            <ImagesContainer>
              {formType === "products" || formType === "edit-product" ? (
                <Tooltip title="Haz clic aquí para añadir más imágenes">
                  <img
                    src={currentImage}
                    alt="Imágen del Producto"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: theme.spacing(1.5), //12px
                      objectFit: "cover",
                    }}
                    onClick={handleOpenDialog}
                  />
                </Tooltip>
              ) : (
                <img
                  src={currentImage}
                  alt="Imágen del Producto"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: theme.spacing(1.5), //12px
                    objectFit: "cover",
                  }}
                />
              )}
            </ImagesContainer>
            <ButtonNext
              disabled={currentIndex === images.length - 1 ? true : false}
              onClick={handleNext}
            >
              <Icon name="Arrow-Next" size={30} />
            </ButtonNext>
          </>
        )}
      </SliderContainer>
      <UploadImage
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        formType="dashboard-products"
        setProductImage={setProductImage}
      />
    </>
  );
};

export default ImageSlider;
