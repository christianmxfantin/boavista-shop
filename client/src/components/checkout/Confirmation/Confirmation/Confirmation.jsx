import { ConfirmationContainer } from "./Confirmation.styles";
import ConfirmationData from "../ConfirmationData/ConfirmationData";

const Confirmation = () => {
  return (
    <ConfirmationContainer>
      <ConfirmationData type="Facturación" data="Don Emiliano Martínez" />
      <ConfirmationData type="Envío" data="Cangallo y La Costa" />
      <ConfirmationData type="Pago" data="La tarjeta del Mencho Medina Bello" />
    </ConfirmationContainer>
  );
};

export default Confirmation;
