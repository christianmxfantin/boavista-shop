import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

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
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar
                  login={false}
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
                <Navbar login={true} />
                <Login handleAuth={handleAuth} />
              </>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <>
                <Navbar login={true} />
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
                    login={false}
                    isLogged={isLogged}
                    handleAuth={handleAuth}
                  />
                  <List data="Usuarios" />
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
                    login={false}
                    isLogged={isLogged}
                    handleAuth={handleAuth}
                  />
                  <List data="Productos" />
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
                    login={false}
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
                    login={false}
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
                  login={false}
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
                  login={false}
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
                    login={false}
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
                  login={false}
                  isLogged={isLogged}
                  handleAuth={handleAuth}
                />
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
