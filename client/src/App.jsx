import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import ProductItem from "./pages/products/ProductItem";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
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
            path={`/products/:id`}
            element={
              <>
                <Navbar />
                <ProductItem />
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
  );
};

export default App;
