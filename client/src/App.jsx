import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import ForgetPassword from "./components/layout/ForgetPassword/ForgetPassword";

import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Profile from "./pages/auth/Profile/Profile";
import Home from "./pages/Home";
import Products from "./pages/products/Products/Products";
import ProductDetails from "./pages/products/ProductDetails/ProductDetails";
import Checkout from "./pages/checkout/Checkout";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import AuthRoute from "./components/auth/AuthRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import List from "./pages/admin/List/List";
import PaymentSuccessful from "./pages/checkout/PaymentSuccessful/PaymentSuccessful";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar isLoginForm={false} />
              <Home />
            </>
          }
        />
        <Route element={<AuthRoute />}>
          <Route
            exact
            path="/login"
            element={
              <>
                <Navbar isLoginForm={true} />
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <>
                <Navbar isLoginForm={true} />
                <Register />
              </>
            }
          />
          <Route
            exact
            path="/auth/change-password"
            element={
              <>
                <Navbar isLoginForm={true} />
                <ForgetPassword />
              </>
            }
          />
        </Route>
        <Route exact path="/dashboard/users" element={<PrivateRoute />}>
          <Route
            exact
            path="/dashboard/users"
            element={
              <>
                <Navbar isLoginForm={false} />
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
                <Navbar isLoginForm={false} />
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
                <Navbar isLoginForm={false} />
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
                <Navbar isLoginForm={false} />
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
              <Navbar isLoginForm={false} />
              <Products />
            </>
          }
        />
        <Route
          exact
          path={"/products/:id"}
          element={
            <>
              <Navbar isLoginForm={false} />
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
                <Navbar isLoginForm={false} />
                <Checkout />
              </>
            }
          />
        </Route>
        <Route exact path="/payment-successful" element={<PrivateRoute />}>
          <Route
            exact
            path="/payment-successful"
            element={<PaymentSuccessful />}
          />
        </Route>
        <Route
          exact
          path="*"
          element={
            <>
              <Navbar isLoginForm={false} />
              <PageNotFound />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
