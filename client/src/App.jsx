import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/auth/Profile";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import ProductItem from "./pages/products/ProductItem";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import SearchPage from "./pages/SearchPage";

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
                <Navbar login={false} />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Navbar login={true} />
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <>
                <Navbar login={true} />
                <Register />
              </>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <>
                <Navbar login={false} />
                <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <>
                <Navbar login={false} />
                <Profile />
              </>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <>
                <Navbar login={false} />
                <Products />
              </>
            }
          />
          {/* <Route
            exact
            path={"/products/:id"}
            element={
              <>
                <Navbar login={false} />
                <ProductItem />
              </>
            }
          /> */}
          <Route
            exact
            path={"/products/search/"}
            element={
              <>
                <Navbar login={false} />
                <SearchPage />
              </>
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <>
                <Navbar login={false} />
                <Cart />
              </>
            }
          />
          <Route
            exact
            path="*"
            element={
              <>
                <Navbar login={false} />
                <PageNotFound />
              </>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
