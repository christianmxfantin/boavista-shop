import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const icons = [{ name: "ShoppingCartIcon", img: ShoppingCartIcon }];

const Icon = ({ name }) => {
  let icon = icons.find((icon) => icon.name === name);
  console.log(icon);

  return <>{icon.img.render}</>;
};

export default Icon;
