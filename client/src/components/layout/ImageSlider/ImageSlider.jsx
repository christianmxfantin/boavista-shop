import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  SliderContainer,
  ButtonPrevious,
  ImagesContainer,
  ButtonNext,
  EmptyImage,
  ImageCounter,
  SliderData,
  ImagesData,
} from "../ImageSlider/ImageSlider.styles";
import { Icon } from "../../ui/Icon";
import { Button, Tooltip, Typography } from "@mui/material";
import UploadImage from "../UploadImage/UploadImage";

const ImageSlider = ({ formType, productsImages }) => {
  const theme = useTheme();
  const [productImage, setProductImage] = useState("");
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (productsImages) {
      const newImages = productsImages.map((product) => product.url);
      const filteredImages = newImages.filter((item) => item !== "S/D");
      setImages(filteredImages);
    }
  }, [productsImages]);

  useEffect(() => {
    if (productImage && !images.includes(productImage)) {
      const newImages = [...images, productImage];
      const filteredImages = newImages.filter((item) => item !== "S/D");
      setImages(filteredImages);
    }
  }, [productImage]);

  useEffect(() => {
    if (images.length > 0 && currentImage === "") {
      setCurrentImage(images[0]);
    }
  }, [images]);

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
        <SliderData>
          {images.length === 0 || images[0] === "S/D" ? (
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
                    cursor:
                      (formType === "products" ||
                        formType === "edit-product") &&
                      "pointer",
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
                  <ImagesData>
                    <Tooltip title="Haz clic aquí para añadir más imágenes">
                      <img
                        src={currentImage}
                        alt="Imágen del Producto"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: theme.spacing(1.5), //12px
                          objectFit: "cover",
                          cursor:
                            (formType === "products" ||
                              formType === "edit-product") &&
                            "pointer",
                        }}
                        onClick={handleOpenDialog}
                      />
                    </Tooltip>
                    <Button
                      sx={{
                        color: theme.palette.secondary.A100,
                        backgroundColor: theme.palette.error[500],
                      }}
                    >
                      Borrar imágen
                    </Button>
                  </ImagesData>
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
        </SliderData>
        {(formType === "edit-product" || images.length > 0) && (
          <ImageCounter>
            <Typography>{`Foto ${currentIndex + 1} de ${
              images.length
            }`}</Typography>
          </ImageCounter>
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
