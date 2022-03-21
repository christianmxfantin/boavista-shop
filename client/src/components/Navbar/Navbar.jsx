import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
//import Icon from "../Icon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "primary" }}>
        <Toolbar>
          <NavLink to="/">
            <Tab label="Logo" sx={{ color: "#fff" }} />
          </NavLink>

          <Tabs textColor="inherit">
            <NavLink to="/products" className="navbar-links">
              <Tab label="Productos" sx={{ marginLeft: "auto" }} />
            </NavLink>
            <NavLink to="/login">
              <Button variant="contained">Login</Button>
              <Button variant="contained">Sing up</Button>
            </NavLink>
            <NavLink to="/cart" className="navbar-links">
              {/* <Icon name="ShoppingCartIcon" /> */}
              <ShoppingCartIcon />
            </NavLink>
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
