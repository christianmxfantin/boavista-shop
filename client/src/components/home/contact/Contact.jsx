import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Underline from "../../ui/Underline";
import ContactImage from "../../../images/contact-image.jpg";
import {
  ContactLink as AddressLink,
  ContactLink as EmailLink,
  ContactLink as WhatsappLink,
} from "./ContactLink";

const ContactContainer = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary[500]}`,
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "40px 40px 0 40px",
  fontWeight: 500,
  color: `${theme.palette.secondary.A100}`,
}));

const DataContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: `${theme.spacing(5)}`, //40px
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const Footer = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(2.5)}`, //20px
  textAlign: "center",
  color: `${theme.palette.secondary.A100}`,
}));

const Contact = () => {
  const theme = useTheme();

  return (
    <ContactContainer>
      <ContactTitle variant="h3">Contactanos</ContactTitle>
      <Underline width={230} height={5} color={theme.palette.secondary.A100} />
      <DataContainer>
        <img
          src={ContactImage}
          alt=""
          style={{
            margin: `${theme.spacing(1.5)}`, //12px
            width: "40%",
            height: "40%",
            borderRadius: `${theme.spacing(4)}`, //32px
            objectFit: "cover",
          }}
        />
        <SocialContainer>
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
      <Footer>Copyright 2022 - Librería Boa Vista</Footer>
    </ContactContainer>
  );
};

export default Contact;
