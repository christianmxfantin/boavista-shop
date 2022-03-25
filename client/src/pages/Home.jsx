import React from "react";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Typography sx={{ color: `${theme.palette.primary.main}` }}>
        <Hero />
        <About />
        <Contact />
      </Typography>
    </>
  );
};

export default Home;
