import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import { Icon } from "../../../components/ui/Icon";
import {
  PaymentSuccessfulContainer,
  PaymentData,
} from "./PaymentSuccessful.styles";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { cleanCart } from "../../../reducers/cart";

const PaymentSuccessful = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const handleBackToHome = () => {
    dispatch(cleanCart());
  };

  return (
    <PaymentSuccessfulContainer>
      <Icon
        name="Check-Payment"
        size={150}
        color={theme.palette.success[500]}
      />
      <PaymentData variant="h5">
        Su pago ha sido registrado con el Número de Orden:
        <br />
        <b>{state.orderID}</b>
        <br />
        Muchas gracias por confiar en nosotros
      </PaymentData>
      <Link to="/" onClick={handleBackToHome}>
        <Typography sx={{ marginTop: "60px" }}>
          Volver a la Página Principal
        </Typography>
      </Link>
    </PaymentSuccessfulContainer>
  );
};

export default PaymentSuccessful;
