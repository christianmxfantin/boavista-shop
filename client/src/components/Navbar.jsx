import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from "./Icon";
import Logo from "../images/logo.png";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const theme = useTheme();

  const [isLogged, setIsLogged] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: `${theme.palette.primary.main}` }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: `${theme.palette.tertiary.main}`,
              }}
              to="/"
            >
              <Container sx={{ width: 270, height: 60, paddingTop: "3px" }}>
                <img
                  src={Logo}
                  alt=""
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </Container>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: `${theme.palette.tertiary.main}` }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: `${theme.palette.primary.main}`,
                    }}
                    to="/products"
                  >
                    Productos
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: `${theme.palette.primary.main}`,
                    }}
                    to="/cart"
                  >
                    Carrito
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>

            {/* MENU DESKTOP   */}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: `${theme.palette.tertiary.main}`,
              }}
              to="/"
            >
              <Container sx={{ width: 270, height: 60, paddingTop: "3px" }}>
                <img
                  src={Logo}
                  alt=""
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </Container>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                display: "block",
                fontSize: "16px",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: `${theme.palette.tertiary.main}`,
                }}
                to="/products"
              >
                Productos
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  color: `${theme.palette.tertiary.main}`,
                }}
                to="/cart"
              >
                <Icon name="ShoppingCartIcon" />
              </Link>
            </Button>
          </Box>

          {isLogged ? (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: `${theme.palette.primary.main}`,
                      }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box>
              <Button
                sx={{
                  my: 2,
                  backgroundColor: `${theme.palette.primary.second}`,
                  color: `${theme.palette.tertiary.main}`,
                  display: "block",
                  fontSize: "16px",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: `${theme.palette.tertiary.main}`,
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
