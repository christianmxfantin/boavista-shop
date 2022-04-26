import React from "react";
import { Container } from "@mui/material";

const Underline = ({ width, height, color, hover }) => {
  return (
    <Container
      sx={{
        borderRadius: "20%",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}`,
        "&:hover": {
          backgroundColor: `${hover}`,
        },
      }}
    />
  );
};

export default Underline;
