import React from "react";
import { SvgIcon } from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";

export const Icon = ({ name, color, size }) => {
  const icons = [
    {
      name: "Cart",
      img: (
        <SvgIcon
          aria-label="Carrito de Compras"
          component={ShoppingCartIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Address",
      img: (
        <SvgIcon
          aria-label="Dirección"
          component={StoreIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Email",
      img: (
        <SvgIcon
          aria-label="Email"
          component={EmailIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Whatsapp",
      img: (
        <SvgIcon
          aria-label="Whatsapp"
          component={WhatsAppIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Search",
      img: (
        <SvgIcon
          aria-label="Buscar"
          component={SearchIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Share",
      img: (
        <SvgIcon
          aria-label="Compartir"
          component={ShareIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
  ];

  let icon = icons.find((icon) => icon.name === name);

  return <>{!icon ? <SvgIcon component={BrokenImageIcon} /> : icon.img}</>;
};
