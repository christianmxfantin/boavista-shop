import { ConfirmationContainer } from "./Confirmation.styles";
import ConfirmationData from "./ConfirmationData/ConfirmationData";

const Confirmation = () => {
  return (
    <ConfirmationContainer>
      <ConfirmationData data="Facturar a nombre de Don Emiliano Martínez" />
      <ConfirmationData data="Enviar los útiles escolares a Cangallo y La Costa" />
      <ConfirmationData data="Paga con la tarjeta del Mencho Medina Bello" />
    </ConfirmationContainer>
  );
};

export default Confirmation;
