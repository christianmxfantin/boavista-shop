import { useTheme } from "@emotion/react";

import ImageNotFound from "../../images/image-not-found.jpg";
import Logo from "../../images/layout/logo.png";
import Hero from "../../images/home/hero.jpg";
import About from "../../images/home/about.jpg";
import Contact from "../../images/home/contact.jpg";

export const Image = ({ name, style, src, alt }) => {
  const theme = useTheme();

  const images = [
    {
      name: "Logo",
      src: Logo,
      alt: "Página de Inicio",
    },
    {
      name: "Hero",
      src: Hero,
      alt: "Imágen principal",
    },
    {
      name: "About",
      src: About,
      alt: "Imágen de la sección Sobre Nosotros",
    },
    {
      name: "Contact",
      src: Contact,
      alt: "Imágen de la sección Contacto",
    },
    {
      name: "Products",
      src,
      alt,
    },
  ];

  let image = images.find((image) => image.name === name);

  return (
    <>
      {!image ? (
        <img
          src={ImageNotFound}
          alt="Imágen no disponible"
          style={{
            width: "30%",
            height: "30%",
            margin: `${theme.spacing(4)}`, //16px,
            borderRadius: `${theme.spacing(4)}`, //32px
            objectFit: "cover",
          }}
        ></img>
      ) : (
        <img src={image.src} alt={image.alt} style={style}></img>
      )}
    </>
  );
};
