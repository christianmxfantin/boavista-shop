import React from "react";
import { useTheme } from "@emotion/react";
import {
  Container as ContactContainer,
  Container as DataContainer,
  Container as SocialContainer,
  Container as AddressCard,
  Container as EmailCard,
  Container as WhatsappCard,
  Typography as ContactTitle,
  Typography as AddressData,
  Typography as EmailData,
  Typography as WhatsappData,
} from "@mui/material";
import {
  Icon as AddressIcon,
  Icon as EmailIcon,
  Icon as WhatsappIcon,
} from "../Icon";
import ContactImage from "../../images/contact-image.jpg";

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <ContactContainer
        maxWidth="xl"
        sx={{ backgroundColor: `${theme.palette.primary.main}` }}
      >
        <ContactTitle
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "40px",
            fontWeight: 500,
            color: `${theme.palette.tertiary.main}`,
          }}
        >
          Contactanos
        </ContactTitle>
        <DataContainer
          sx={{
            display: "flex",
            paddingBottom: "60px",
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
            <AddressCard
              sx={{
                display: "flex",
                margin: "30px",
              }}
            >
              <AddressIcon
                name="Address"
                color={theme.palette.tertiary.main}
                size={40}
              />
              <AddressData
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
            <EmailCard
              sx={{
                display: "flex",
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
      </ContactContainer>
    </>
  );
};

export default Contact;
