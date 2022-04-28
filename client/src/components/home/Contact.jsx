import React, { useState } from "react";
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
  Link as EmailLink,
  Link as WhatsappLink,
} from "@mui/material";
import {
  Icon as AddressIcon,
  Icon as EmailIcon,
  Icon as WhatsappIcon,
} from "../ui/Icon";
import Underline from "../ui/Underline";
import ContactImage from "../../images/contact-image.jpg";

const Contact = () => {
  const theme = useTheme();

  const [isHover, setIsHover] = useState(false);

  //posible useEffect para que renderize nuevamente el elemento Icon

  // const handleIconHover = () => {};

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
            target="_blank"
            rel="noreferrer"
          >
            <AddressCard
              sx={{
                display: "flex",
                alignItems: "center",
                margin: `${theme.spacing(4)}`, //32px
              }}
            >
              <AddressIcon
                name="Address"
                color={
                  !isHover
                    ? theme.palette.tertiary.main
                    : theme.palette.secondary.main
                }
                size={40}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              />
              <AddressData
                variant="h5"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                sx={{
                  color: `${
                    !isHover
                      ? theme.palette.tertiary.main
                      : theme.palette.secondary.main
                  }`,
                  fontWeight: 300,
                  marginLeft: `${theme.spacing(2)}`, //16px
                }}
              >
                Leandro N. Alem 916, CABA
              </AddressData>
            </AddressCard>
          </AddressLink>
          <EmailLink
            href="mailto:info@libreriaboavista.com.ar"
            target="_blank"
            rel="noreferrer"
          >
            <EmailCard
              sx={{
                display: "flex",
                alignItems: "center",
                margin: `${theme.spacing(4)}`, //32px
              }}
            >
              <EmailIcon
                name="Email"
                color={
                  !isHover
                    ? theme.palette.tertiary.main
                    : theme.palette.secondary.main
                }
                size={40}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              />
              <EmailData
                variant="h5"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                sx={{
                  color: `${theme.palette.tertiary.main}`,
                  fontWeight: 300,
                  marginLeft: `${theme.spacing(2)}`, //16px
                }}
              >
                info@libreriaboavista.com.ar
              </EmailData>
            </EmailCard>
          </EmailLink>
          <WhatsappLink
            href="https://api.whatsapp.com/send?phone=541138323832"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappCard
              sx={{
                display: "flex",
                alignItems: "center",
                margin: `${theme.spacing(4)}`, //32px
              }}
            >
              <WhatsappIcon
                name="Whatsapp"
                color={
                  !isHover
                    ? theme.palette.tertiary.main
                    : theme.palette.secondary.main
                }
                size={40}
                // onMouseEnter={() => setIsHover(true)}
                // onMouseLeave={() => setIsHover(false)}
              />
              <WhatsappData
                variant="h5"
                // onMouseEnter={() => setIsHover(true)}
                // onMouseLeave={() => setIsHover(false)}
                sx={{
                  color: `${theme.palette.tertiary.main}`,
                  fontWeight: 300,
                  marginLeft: `${theme.spacing(2)}`, //16px
                }}
              >
                (+54 11) 3832-3832
              </WhatsappData>
            </WhatsappCard>
          </WhatsappLink>
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
