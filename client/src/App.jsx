import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Typography } from "@mui/material";

import Login from "./pages/Login";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductItem from "./pages/ProductItem";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Typography component="div">
                  <Navbar />
                  <Home />
                </Typography>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Typography component="div">
                  <Navbar />
                  <Login />
                </Typography>
              }
            />
            <Route
              exact
              path="/products"
              element={
                <Typography component="div">
                  <Navbar />
                  <Products />
                </Typography>
              }
            />
            <Route
              exact
              path={`/products/:id`}
              element={
                <Typography
                  component="div"
                  sx={{ backgroundColor: `${theme.palette.primary[50]}` }}
                >
                  <Navbar />
                  <ProductItem />
                </Typography>
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Typography component="div">
                  <Navbar />
                  <Cart />
                </Typography>
              }
            />
            <Route
              exact
              path="*"
              element={
                <Typography component="div">
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
