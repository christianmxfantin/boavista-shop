import React from "react";
import { useTheme } from "@emotion/react";
import {
  Container as ContactContainer,
  Container as DataContainer,
  Container as SocialContainer,
  Container as AddressCard,
  Container as EmailCard,
  Container as WhatsappCard,
  Container as Footer,
  Typography as ContactTitle,
  Typography as AddressData,
  Typography as EmailData,
  Typography as WhatsappData,
  Link as AddressLink,
} from "@mui/material";
import {
  Icon as AddressIcon,
  Icon as EmailIcon,
  Icon as WhatsappIcon,
} from "../Icon";
import Underline from "../ui/Underline";
import ContactImage from "../../images/contact-image.jpg";
import "../../styles/styles.css";

const Contact = () => {
  const theme = useTheme();

  const handleLink = (e) => {
    e.target.style.color = "yellow";
  };

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
          marginTop: "40px",
        }}
      >
        <img
          src={ContactImage}
          alt=""
          style={{
            padding: "0px !important",
            margin: "10px",
            width: "50%",
            height: "50%",
            borderRadius: "30px",
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
            target="_blank"
            rel="noreferrer"
          >
            <AddressCard
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "30px",
              }}
            >
              <AddressIcon
                className="contact-card"
                name="Address"
                color={theme.palette.tertiary.main}
                size={40}
              />
              <AddressData
                className="contact-card"
                variant="h5"
                sx={{
                  color: `${theme.palette.tertiary.main}`,
                  fontWeight: 300,
                  marginLeft: "15px",
                }}
              >
                Leandro N. Alem 916, CABA
              </AddressData>
            </AddressCard>
          </AddressLink>
          <EmailCard
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "30px",
            }}
          >
            <EmailIcon
              name="Email"
              color={theme.palette.tertiary.main}
              size={40}
            />
            <EmailData
              variant="h5"
              sx={{
                color: `${theme.palette.tertiary.main}`,
                fontWeight: 300,
                marginLeft: "15px",
              }}
            >
              info@libreriaboavista.com.ar
            </EmailData>
          </EmailCard>
          <WhatsappCard
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "30px",
            }}
          >
            <WhatsappIcon
              name="Whatsapp"
              color={theme.palette.tertiary.main}
              size={40}
            />
            <WhatsappData
              variant="h5"
              sx={{
                color: `${theme.palette.tertiary.main}`,
                fontWeight: 300,
                marginLeft: "15px",
              }}
            >
              (+54 11) 3832-3832
            </WhatsappData>
          </WhatsappCard>
        </SocialContainer>
      </DataContainer>
      <Footer
        sx={{
          color: `${theme.palette.tertiary.main}`,
          textAlign: "center",
          padding: "20px",
        }}
      >
        Copyright 2022 - Librería Boa Vista
      </Footer>
    </ContactContainer>
  );
};

export default Contact;
