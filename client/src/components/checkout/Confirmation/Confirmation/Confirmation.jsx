import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import {
  ConfirmationContainer,
  ConfirmationButtonsContainer,
} from "./Confirmation.styles";
import ConfirmationData from "../ConfirmationData/ConfirmationData";

const Confirmation = ({
  confirmationData,
  handleCancelPurchase,
  handlePayment,
}) => {
  const theme = useTheme();

  // console.log(confirmationData);
  const { billing, shipping, payment } = confirmationData;

  return (
    <ConfirmationContainer>
      <ConfirmationData type="Facturación" data={billing} />
      <ConfirmationData type="Envío" data={shipping} />
      <ConfirmationData type="Pago" data={payment} />
      <ConfirmationButtonsContainer>
        <Button
          variant="text"
          sx={{
            marginRight: "8px",
          }}
          onClick={handleCancelPurchase}
        >
          Cancelar Compra
        </Button>
        <Button
          variant="contained"
          onClick={handlePayment}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.secondary[500],
              color: theme.palette.primary[500],
            },
          }}
        >
          Pagar
        </Button>
      </ConfirmationButtonsContainer>
    </ConfirmationContainer>
  );
};

export default Confirmation;
