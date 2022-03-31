import React from "react";
import { SvgIcon } from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Icon = ({ name, color }) => {
  const icons = [
    {
      name: "ShoppingCartIcon",
      img: <SvgIcon component={ShoppingCartIcon} sx={{ color: color }} />,
    },
  ];

  let icon = icons.find((icon) => icon.name === name);

  return <>{!icon ? <SvgIcon component={BrokenImageIcon} /> : icon.img}</>;
};

export default Icon;
