import React from "react";
import { useTheme } from "@emotion/react";
import {
  Container as ContactContainer,
  Container as DataContainer,
  Container as SocialContainer,
  Container as Footer,
  Typography as ContactTitle,
} from "@mui/material";
import Underline from "../../ui/Underline";
import ContactImage from "../../../images/contact-image.jpg";
import {
  ContactLink as AddressLink,
  ContactLink as EmailLink,
  ContactLink as WhatsappLink,
} from "./ContactLink";

const Contact = () => {
  const theme = useTheme();

  return (
    <ContactContainer
      maxWidth="xl"
      sx={{ backgroundColor: `${theme.palette.primary.main}` }}
    >
      <ContactTitle
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 40px 0 40px",
          fontWeight: 500,
          color: `${theme.palette.tertiary.main}`,
        }}
      >
        Contactanos
      </ContactTitle>
      <Underline width={230} height={5} color={theme.palette.tertiary.main} />
      <DataContainer
        sx={{
          display: "flex",
          marginTop: `${theme.spacing(5)}`, //40px
        }}
      >
        <img
          src={ContactImage}
          alt=""
          style={{
            padding: "0px !important",
            margin: `${theme.spacing(1.5)}`, //12px
            width: "50%",
            height: "50%",
            borderRadius: `${theme.spacing(4)}`, //32px
            objectFit: "cover",
          }}
        />
        <SocialContainer
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <AddressLink
            href="https://www.google.com.ar/maps/place/Av.+Leandro+N.+Alem+916,+C1001AAR+CABA"
            icon="Address"
            data="Leandro N. Alem 916, CABA"
          />
          <EmailLink
            href="mailto:info@libreriaboavista.com.ar"
            icon="Email"
            data="info@libreriaboavista.com.ar"
          />
          <WhatsappLink
            href="https://api.whatsapp.com/send?phone=541138323832"
            icon="Whatsapp"
            data="(+54 11) 3832-3832"
          />
        </SocialContainer>
      </DataContainer>
      <Footer
        sx={{
          color: `${theme.palette.tertiary.main}`,
          textAlign: "center",
          padding: `${theme.spacing(2.5)}`, //20px
        }}
      >
        Copyright 2022 - Librería Boa Vista
      </Footer>
    </ContactContainer>
  );
};

export default Contact;
