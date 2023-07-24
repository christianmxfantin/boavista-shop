import Hero from "../components/home/Hero";
import About from "../components/home/About/About";
import Contact from "../components/home/contact/Contact/Contact";
import Footer from "../components/home/Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
      <Footer />
      <Outlet />
    </main>
  );
};

export default Home;
