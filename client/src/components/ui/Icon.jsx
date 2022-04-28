import React from "react";
import { SvgIcon } from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";

export const Icon = ({ name, color, size }) => {
  const icons = [
    {
      name: "Cart",
      img: (
        <SvgIcon
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
          component={SearchIcon}
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
