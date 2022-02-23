import React from "react";
import "../styles/pages/Home.css";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default Home;
