import React from "react";
import { useTheme } from "@emotion/react";
import { Container, Typography } from "@mui/material";

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <Container sx={{ backgroundColor: `${theme.palette.primary.main}` }}>
        <Typography sx={{ color: `${theme.palette.tertiary.main}` }}>
          Contact
        </Typography>
      </Container>
    </>
  );
};

export default Contact;
