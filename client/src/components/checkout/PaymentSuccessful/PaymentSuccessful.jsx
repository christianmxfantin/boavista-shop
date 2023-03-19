import { useTheme } from "@emotion/react";
import { Icon } from "../../ui/Icon";
import {
  PaymentSuccessfulContainer,
  PaymentData,
} from "./PaymentSuccessful.styles";

const PaymentSuccessful = () => {
  const theme = useTheme();

  return (
    <PaymentSuccessfulContainer>
      <Icon
        name="Check-Payment"
        size={150}
        color={theme.palette.success[500]}
      />
      <PaymentData variant="h5">
        Su pago ha sido registrado con el Número de Orden: <b>12345</b>
        <br />
        Muchas gracias por confiar en nosotros
      </PaymentData>
    </PaymentSuccessfulContainer>
  );
};

export default PaymentSuccessful;
