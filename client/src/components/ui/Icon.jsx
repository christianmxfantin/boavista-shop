import { SvgIcon } from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InfoIcon from "@mui/icons-material/Info";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import DoneIcon from "@mui/icons-material/Done";
import PlaceIcon from "@mui/icons-material/Place";

export const Icon = ({ name, color, size, onClick }) => {
  const icons = [
    {
      name: "Menu",
      img: (
        <SvgIcon
          aria-label="Menú"
          component={MenuIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Cart",
      img: (
        <SvgIcon
          aria-label="Carrito de Compras"
          component={ShoppingCartIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Address",
      img: (
        <SvgIcon
          aria-label="Dirección"
          component={StoreIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Email",
      img: (
        <SvgIcon
          aria-label="Email"
          component={EmailIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Whatsapp",
      img: (
        <SvgIcon
          aria-label="Whatsapp"
          component={WhatsAppIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Search",
      img: (
        <SvgIcon
          aria-label="Buscar"
          component={SearchIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Share",
      img: (
        <SvgIcon
          aria-label="Compartir"
          component={ShareIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Google",
      img: (
        <SvgIcon
          aria-label="Iniciar sesión con Google"
          component={GoogleIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Facebook",
      img: (
        <SvgIcon
          aria-label="Iniciar sesión con Facebook"
          component={FacebookIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Add",
      img: (
        <SvgIcon
          aria-label="Aumentar cantidad"
          component={AddIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Remove",
      img: (
        <SvgIcon
          aria-label="Quitar cantidad"
          component={RemoveIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Arrow-Previous",
      img: (
        <SvgIcon
          aria-label="Ir a la imágen anterior"
          component={ArrowBackIosNewIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Arrow-Next",
      img: (
        <SvgIcon
          aria-label="Ir a la imágen siguiente"
          component={ArrowForwardIosIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Delete-Data",
      img: (
        <SvgIcon
          aria-label="Borrar producto"
          component={DeleteForeverIcon}
          sx={{
            color: color,
            fontSize: size,
            "&:hover": { cursor: "pointer" },
          }}
          onClick={onClick}
        />
      ),
    },
    {
      name: "Check-Payment",
      img: (
        <SvgIcon
          aria-label="Pago aprobado"
          component={CheckCircleIcon}
          sx={{
            color: color,
            fontSize: size,
            marginBottom: "12px",
          }}
        />
      ),
    },
    {
      name: "Edit-Data",
      img: (
        <SvgIcon
          aria-label="Editar información"
          component={EditIcon}
          sx={{
            color: color,
            fontSize: size,
            "&:hover": { cursor: "pointer" },
          }}
          onClick={onClick}
        />
      ),
    },
    {
      name: "credit-card",
      img: (
        <SvgIcon
          aria-label="Logo de Tarjeta de Débito o Crédito"
          component={CreditCardIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Info",
      img: (
        <SvgIcon
          aria-label="Logo de Información"
          component={InfoIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Visibility",
      img: (
        <SvgIcon
          aria-label="Mostrar la contraseña"
          component={Visibility}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "Visibility-off",
      img: (
        <SvgIcon
          aria-label="No mostrar la contraseña"
          component={VisibilityOff}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "info-done",
      img: (
        <SvgIcon
          aria-label="La información se validó correctamente"
          component={DoneIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
    {
      name: "address-card",
      img: (
        <SvgIcon
          aria-label="Icono de Dirección"
          component={PlaceIcon}
          sx={{
            color: color,
            fontSize: size,
          }}
        />
      ),
    },
  ];

  let icon = icons.find((icon) => icon.name === name);

  return <>{!icon ? <SvgIcon component={BrokenImageIcon} /> : icon.img}</>;
};
