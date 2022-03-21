import React from "react";
import { Typography } from "@mui/material";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <>
      <Typography sx={{ color: "primary.main" }}>
        <Hero />
        <About />
        <Contact />
      </Typography>
    </>
  );
};

export default Home;
