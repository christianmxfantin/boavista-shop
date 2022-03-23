import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Navbar />
                    <Home />
                  </>
                }
              />
              <Route
                exact
                path="/products"
                element={
                  <>
                    <Navbar />
                    <Products />
                  </>
                }
              />
              <Route
                exact
                path="/login"
                element={
                  <>
                    <Navbar />
                    <Login />
                  </>
                }
              />
              <Route
                exact
                path="/cart"
                element={
                  <>
                    <Navbar />
                    <Cart />
                  </>
                }
              />
              <Route exact path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
