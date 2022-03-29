import React from "react";
import { useTheme } from "@emotion/react";
import { Container, Typography } from "@mui/material";
import ContactImage from "../../images/contact-image.jpg";

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: `${theme.palette.primary.main}` }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "40px",
            fontWeight: "bold",
            color: `${theme.palette.tertiary.main}`,
          }}
        >
          Contacto
        </Typography>
        <Container
          sx={{
            display: "flex",
            paddingBottom: "60px",
          }}
        >
          <Container
            sx={{
              padding: "0px !important",
              margin: "10px",
            }}
          >
            <img
              src={ContactImage}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "30px",
                objectFit: "cover",
              }}
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: `${theme.palette.tertiary.main}`,
              }}
            >
              Comunicáte con Nosotros
            </Typography>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
