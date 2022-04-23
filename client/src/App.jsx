import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Typography } from "@mui/material";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import ProductItem from "./components/products/ProductItem";

const App = () => {
  let id;
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Typography>
                  <Navbar />
                  <Home />
                </Typography>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Typography>
                  <Navbar />
                  <Login />
                </Typography>
              }
            />
            <Route
              exact
              path="/products"
              element={
                <Typography>
                  <Navbar />
                  <Products />
                </Typography>
              }
            />
            <Route
              exact
              path={`/products/:id`}
              element={
                <Typography>
                  <Navbar />
                  <ProductItem />
                </Typography>
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Typography>
                  <Navbar />
                  <Cart />
                </Typography>
              }
            />
            <Route
              exact
              path="*"
              element={
                <Typography>
                  <PageNotFound />
                </Typography>
              }
            />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
