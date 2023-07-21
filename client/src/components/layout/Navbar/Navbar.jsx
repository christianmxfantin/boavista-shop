/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, css } from "@emotion/react";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Icon } from "../../ui/Icon";
import Search from "../Search/Search";
import { Image } from "../../ui/Image";
import useAuth from "../../../hooks/useAuth";
import {
  LogoContainer,
  NavbarContainer,
  NavbarMenuContainer,
  SearchContainer,
} from "./Navbar.styles";
import TestImage from "../../../images/product2.jpg";
import Toast from "../Toast/Toast";

const Navbar = ({ isLoginForm }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { isAuth, logout } = useAuth();
  const { total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [isHover, setIsHover] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginLink = () => {
    navigate("/login");
  };

  const handleProfileLink = () => {
    setAnchorElUser(null);
    navigate("/profile");
  };

  const handleLogoutLink = () => {
    setAnchorElUser(null);
    logout();
    navigate("/");
    setIsToastVisible(true);
  };

  return (
    <>
      <NavbarContainer position="sticky">
        <Toolbar component={"nav"} sx={{ display: "flex" }}>
          <Link to="/">
            <LogoContainer sx={{ display: { xs: "none", md: "flex" } }}>
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
              <NavbarMenuContainer
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <IconButton
                  size="large"
                  aria-controls="menu-navbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <Icon name="Menu" color={theme.palette.secondary.A100} />
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
                  <Link css={NavbarMenu} to="/products">
                    <MenuItem>Productos</MenuItem>
                  </Link>
                  <Link css={NavbarMenu} to="/checkout">
                    <MenuItem>Carrito</MenuItem>
                  </Link>
                </Menu>
              </NavbarMenuContainer>
              <Link to="/">
                <LogoContainer
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  <Image
                    name="Logo"
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </LogoContainer>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link
                  css={NavbarLink}
                  to="/products"
                  onClick={handleCloseNavMenu}
                >
                  <Typography variant="h6">PRODUCTOS</Typography>
                </Link>
                <Link
                  css={CartLink}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  to="/checkout"
                  onClick={handleCloseNavMenu}
                >
                  <Badge
                    badgeContent={total}
                    max={99}
                    sx={{ marginLeft: theme.spacing(2) }}
                  >
                    <Icon name="Cart" size={30} />
                  </Badge>
                </Link>
              </Box>
              <SearchContainer>
                <Search />
              </SearchContainer>
              <Box sx={{ flexGrow: 0 }}>
                {/* {console.log(isAuth)} */}
                {!isAuth ? (
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
                ) : (
                  <Tooltip title="Abrir Menú">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={user.names} src={TestImage} />
                    </IconButton>
                  </Tooltip>
                )}
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
                  <MenuItem onClick={handleProfileLink}>
                    <Typography textAlign="center">Perfil</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogoutLink}>
                    <Typography textAlign="center">Salir</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </NavbarContainer>
      <Toast
        isToastVisible={isToastVisible}
        setIsToastVisible={setIsToastVisible}
        message="La sesión se ha cerrado correctamente"
      />
    </>
  );
};

export default Navbar;
