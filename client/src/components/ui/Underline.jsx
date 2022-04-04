import React from "react";
import { Container } from "@mui/material";

const Underline = ({ width, height, color }) => {
  return (
    <Container
      sx={{
        borderRadius: "20%",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}`,
      }}
    />
  );
};

export default Underline;
