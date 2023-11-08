import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";
import {
  ContactContainer,
  ContactTitle,
  SocialContainer,
} from "../Contact/Contact.styles";
import {
  ContactLink as AddressLink,
  ContactLink as EmailLink,
  ContactLink as WhatsappLink,
} from "../ContactLink/ContactLink";
import Underline from "../../../ui/Underline";
import { Image } from "../../../ui/Image";

const Contact = () => {
  const theme = useTheme();

  return (
    <ContactContainer component={"section"}>
      <Grid container>
        <Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
          <ContactTitle variant="h3">Contactanos</ContactTitle>
          <Underline
            width={230}
            height={5}
            color={theme.palette.secondary.A100}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            name="Contact"
            style={{
              width: "100%",
              height: "100%",
              padding: theme.spacing(2),
              borderRadius: theme.spacing(4), //32px
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SocialContainer sx={{ marginTop: { lg: theme.spacing(8) } }}>
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
        </Grid>
      </Grid>
    </ContactContainer>
  );
};

export default Contact;
