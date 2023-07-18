/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, css } from "@emotion/react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container as ImageContainer,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Icon } from "../ui/Icon";
import Search from "./Search/Search";
import { Image } from "../ui/Image";

const Navbar = ({ isLoginForm, isLogged, handleAuth }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { total } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [isHover, setIsHover] = useState(false);

  const AppbarStyles = css({
    padding: theme.spacing(1), //8px;
    display: "flex",
    justifyContent: "space-between",
  });

  const ToolbarStyles = css({
    display: "flex",
  });

  const ImageContainerStyles = css({
    width: 270,
    height: 60,
    paddingTop: theme.spacing(0.5), //4px
    display: { xs: "none", md: "flex" },
  });

  const BadgeStyle = css({
    marginLeft: theme.spacing(2), //16px
  });

  const SearchStyle = css({
    marginLeft: "auto",
    marginRight: theme.spacing(2), //16px
  });

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

  const handleClic = () => {
    if (!isLogged) {
      navigate("/login");
    } else {
      //LOGOUT
      handleAuth(false);
      navigate("/");
    }
  };

  return (
    <AppBar position="sticky" css={AppbarStyles}>
      <Toolbar component={"nav"} css={ToolbarStyles}>
        <Link to="/">
          <ImageContainer css={ImageContainerStyles}>
            <Image
              name="Logo"
              style={{
                maxWidth: "100%",
              }}
            />
          </ImageContainer>
        </Link>
        {!isLoginForm && (
          <>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Icon name="Menu" color={theme.palette.secondary.A100} />
              <Menu open={false}>
                <Link css={NavbarMenu} to="/products">
                  <MenuItem>Productos</MenuItem>
                </Link>
                <Link css={NavbarMenu} to="/checkout">
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
              to="/checkout"
            >
              <Badge badgeContent={total} max={99} css={BadgeStyle}>
                <Icon name="Cart" size={30} />
              </Badge>
            </Link>
            <Box css={SearchStyle}>
              <Search />
            </Box>
            {isLogged && (
              <Link css={LoginLink} to="/profile">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              onClick={handleClic}
            >
              {!isLogged ? "INGRESA" : user.names}
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
