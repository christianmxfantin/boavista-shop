import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import {
  ConfirmationContainer,
  ConfirmationButtonsContainer,
} from "./Confirmation.styles";
import ConfirmationData from "../ConfirmationData/ConfirmationData";

const Confirmation = ({ handleCancelPurchase, handlePayment }) => {
  const theme = useTheme();

  return (
    <ConfirmationContainer>
      <ConfirmationData type="Facturación" data="Don Emiliano Martínez" />
      <ConfirmationData type="Envío" data="Cangallo y La Costa" />
      <ConfirmationData type="Pago" data="La tarjeta del Mencho Medina Bello" />
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
