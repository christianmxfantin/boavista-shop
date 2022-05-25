/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme, css } from "@emotion/react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Icon } from "../ui/Icon";
import Search from "./Search";
import { Image } from "../ui/Image";

const Navbar = () => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const Appbar = css({
    padding: `${theme.spacing(1)}`, //8px;
  });

  const NavbarMenu = css({
    fontWeight: 500,
    textDecoration: "none",
    color: `${theme.palette.primary[500]}`,
    "&:hover": {
      color: `${theme.palette.secondary[500]}`,
    },
  });

  const NavbarLink = css({
    fontSize: "1.2rem",
    textDecoration: "none",
    color: `${theme.palette.secondary.A100}`,
    "&:hover": {
      color: `${theme.palette.secondary[500]}`,
    },
  });

  const CartLink = css({
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    color: !isHover
      ? theme.palette.secondary.A100
      : theme.palette.secondary[500],
    "& .MuiBadge-badge": {
      color: !isHover
        ? theme.palette.secondary.A100
        : theme.palette.secondary[500],
      backgroundColor: !isHover
        ? theme.palette.secondary[500]
        : theme.palette.secondary.A100,
    },
  });

  const LoginLink = css({
    color: `${theme.palette.secondary.A100}`,
    textDecoration: "none",
    "&:hover": {
      color: `${theme.palette.secondary[500]}`,
    },
  });

  return (
    <AppBar position="sticky" css={Appbar}>
      <Toolbar>
        <Link to="/">
          <Container
            sx={{
              width: 270,
              height: 60,
              paddingTop: `${theme.spacing(0.5)}`, //4px
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image
              name="Logo"
              style={{
                maxWidth: "100%",
              }}
            />
          </Container>
        </Link>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Icon name="Menu" color={theme.palette.secondary.A100} />
          <Menu>
            <Link css={NavbarMenu} to="/products">
              <MenuItem>Productos</MenuItem>
            </Link>
            <Link css={NavbarMenu} to="/cart">
              <MenuItem>Carrito</MenuItem>
            </Link>
          </Menu>
        </Box>

        <Link css={NavbarLink} to="/products">
          <Typography variant="h6">PRODUCTOS</Typography>
        </Link>
        <Link
          css={CartLink}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          to="/cart"
        >
          <Badge badgeContent={105} max={99}>
            <Icon name="Cart" size={30} />
          </Badge>
        </Link>
        <Box sx={{ marginRight: `${theme.spacing(1.5)}` }}>
          <Search />
        </Box>

        {isLogged ? (
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        ) : (
          <Link css={LoginLink} to="/login">
            <Typography variant="h6">LOGIN</Typography>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
