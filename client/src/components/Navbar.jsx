import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import "../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-links">
          Logo
        </NavLink>
        <NavLink to="/products" className="navbar-links">
          Productos
        </NavLink>
        <NavLink to="/login" className="navbar-links">
          Login
        </NavLink>
        <NavLink to="/cart" className="navbar-links">
          <Icon name="fa-solid fa-cart-shopping" />
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
