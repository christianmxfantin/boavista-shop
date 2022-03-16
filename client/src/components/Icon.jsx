import React from "react";

const icons = [{ name: "fa-solid fa-cart-shopping" }];

const Icon = ({ name }) => {
  let icon = icons.find((icon) => icon.name === name);

  return (
    <>
      <i className={icon.name}></i>
    </>
  );
};

export default Icon;
