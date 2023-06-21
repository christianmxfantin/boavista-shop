import { FooterContainer } from "../Footer/Footer.styles";

const Footer = () => {
  return (
    <FooterContainer component="footer">
      Copyright © {new Date().getFullYear()} - Librería Boa Vista
    </FooterContainer>
  );
};

export default Footer;
