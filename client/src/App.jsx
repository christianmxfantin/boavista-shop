import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Profile from "./pages/auth/Profile/Profile";
import Home from "./pages/Home";
import Products from "./pages/products/Products/Products";
import ProductDetails from "./pages/products/ProductDetails/ProductDetails";
import Checkout from "./pages/checkout/Checkout";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import PrivateRoute from "./components/auth/PrivateRoute";
import List from "./pages/admin/List/List";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleAuth = (isLogged) => {
    setIsLogged(isLogged);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar
                isLoginForm={false}
                isLogged={isLogged}
                handleAuth={handleAuth}
              />
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <>
              <Navbar isLoginForm={true} />
              <Login handleAuth={handleAuth} />
            </>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <>
              <Navbar isLoginForm={true} />
              <Register handleAuth={handleAuth} />
            </>
          }
        />
        <Route exact path="/dashboard/users" element={<PrivateRoute />}>
          <Route
            exact
            path="/dashboard/users"
            element={
              <>
                <Navbar
                  isLoginForm={false}
                  isLogged={isLogged}
                  handleAuth={handleAuth}
                />
                <List typeData="users" />
              </>
            }
          />
        </Route>
        <Route exact path="/dashboard/products" element={<PrivateRoute />}>
          <Route
            exact
            path="/dashboard/products"
            element={
              <>
                <Navbar
                  isLoginForm={false}
                  isLogged={isLogged}
                  handleAuth={handleAuth}
                />
                <List typeData="products" />
              </>
            }
          />
        </Route>
        <Route exact path="/dashboard" element={<PrivateRoute />}>
          <Route
            exact
            path="/dashboard"
            element={
              <>
                <Navbar
                  isLoginForm={false}
                  isLogged={isLogged}
                  handleAuth={handleAuth}
                />
                <Dashboard />
              </>
            }
          ></Route>
        </Route>
        <Route exact path="/profile" element={<PrivateRoute />}>
          <Route
            exact
            path="/profile"
            element={
              <>
                <Navbar
                  isLoginForm={false}
                  isLogged={isLogged}
                  handleAuth={handleAuth}
                />
                <Profile />
              </>
            }
          />
        </Route>
        <Route
          exact
          path="/products"
          element={
            <>
              <Navbar
                isLoginForm={false}
                isLogged={isLogged}
                handleAuth={handleAuth}
              />
              <Products />
            </>
          }
        />
        <Route
          exact
          path={"/products/:id"}
          element={
            <>
              <Navbar
                isLoginForm={false}
                isLogged={isLogged}
                handleAuth={handleAuth}
              />
              <ProductDetails />
            </>
          }
        />
        <Route exact path="/checkout" element={<PrivateRoute />}>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Navbar
                  isLoginForm={false}
                  isLogged={isLogged}
                  handleAuth={handleAuth}
                />
                <Checkout />
              </>
            }
          />
        </Route>
        <Route
          exact
          path="*"
          element={
            <>
              <Navbar
                isLoginForm={false}
                isLogged={isLogged}
                handleAuth={handleAuth}
              />
              <PageNotFound />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
