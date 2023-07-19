/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, css } from "@emotion/react";
import {
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Icon } from "../../ui/Icon";
import Search from "../Search/Search";
import { Image } from "../../ui/Image";
import useAuth from "../../../hooks/useAuth";
import {
  LogoContainer,
  NavbarChica,
  NavbarContainer,
  SearchContainer,
} from "./Navbar.styles";

const Navbar = ({ isLoginForm }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const { total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [isHover, setIsHover] = useState(false);

  //CSS para Links de React Router
  const NavbarMenu = css({
    fontWeight: 500,
    textDecoration: "none",
    color: theme.palette.primary[500],
    "&:hover": {
      color: theme.palette.secondary[500],
    },
  });

  const NavbarLink = css({
    fontSize: "1.2rem",
    textDecoration: "none",
    color: theme.palette.secondary.A100,
    "&:hover": {
      color: theme.palette.secondary[500],
    },
  });

  const CartLink = css({
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    color: theme.palette.secondary.A100,
    "&:hover": {
      color: theme.palette.secondary[500],
    },
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
    marginRight: theme.spacing(2), //16px
    color: theme.palette.secondary.A100,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary[500],
    },
  });

  const handleLoginLink = () => {
    navigate("/login");
  };

  return (
    <NavbarContainer position="sticky">
      <Toolbar component={"nav"} sx={{ display: "flex" }}>
        <Link to="/">
          <LogoContainer>
            <Image
              name="Logo"
              style={{
                maxWidth: "100%",
              }}
            />
          </LogoContainer>
        </Link>
        {!isLoginForm && (
          <>
            <NavbarChica
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Icon name="Menu" color={theme.palette.secondary.A100} />
              <Menu open={false}>
                <Link css={NavbarMenu} to="/products">
                  <MenuItem>Productos</MenuItem>
                </Link>
                <Link css={NavbarMenu} to="/checkout">
                  <MenuItem>Carrito</MenuItem>
                </Link>
              </Menu>
            </NavbarChica>

            <Link css={NavbarLink} to="/products">
              <Typography variant="h6">PRODUCTOS</Typography>
            </Link>
            <Link
              css={CartLink}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              to="/checkout"
            >
              <Badge
                badgeContent={total}
                max={99}
                sx={{ marginLeft: theme.spacing(2) }}
              >
                <Icon name="Cart" size={30} />
              </Badge>
            </Link>
            <SearchContainer>
              <Search />
            </SearchContainer>
            {isAuth && (
              <Link css={LoginLink} to="/profile">
                <Box>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <Typography>{user.names}</Typography>
                  {/* Menu con links a Profile y a Logout */}
                </Box>
              </Link>
            )}
            <Typography
              variant="h6"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.secondary[500],
                },
              }}
              onClick={handleLoginLink}
            >
              INGRESA
            </Typography>
          </>
        )}
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;
