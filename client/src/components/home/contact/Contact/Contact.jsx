import { useTheme } from "@emotion/react";
import {
  ContactContainer,
  ContactTitle,
  DataContainer,
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
      <ContactTitle variant="h3">Contactanos</ContactTitle>
      <Underline width={230} height={5} color={theme.palette.secondary.A100} />
      <DataContainer component={"article"}>
        <Image
          name="Contact"
          style={{
            margin: theme.spacing(1.5), //12px
            width: "40%",
            height: "40%",
            borderRadius: theme.spacing(4), //32px
            objectFit: "cover",
          }}
        />
        <SocialContainer component={"article"}>
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
    </ContactContainer>
  );
};

export default Contact;
