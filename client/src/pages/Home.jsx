import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessMessages } from "../utils/toastMessages";
import { toastColor } from "../utils/toastOptions";

import Hero from "../components/home/Hero";
import About from "../components/home/About/About";
import Contact from "../components/home/contact/Contact/Contact";
import Footer from "../components/home/Footer/Footer";

const Home = () => {
  const location = useLocation();

  let isLogout;
  if (location.state && location.state.isLogout === true) {
    isLogout = location.state.isLogout;
  }

  useEffect(() => {
    if (isLogout) {
      toast.success(SuccessMessages.LOGOUT, toastColor("success"));
    }
  }, [isLogout]);

  return (
    <main>
      <Hero />
      <About />
      <Contact />
      <Footer />
      <Outlet />
      <ToastContainer />
    </main>
  );
};

export default Home;
