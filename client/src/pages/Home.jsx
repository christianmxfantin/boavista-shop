import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Contact from "../components/home/contact/Contact";

const Home = () => {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <article>
            <About />
          </article>
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
