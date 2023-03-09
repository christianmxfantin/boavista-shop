import { CheckoutContainer } from "./CheckoutFull.styles";
import Stepper from "../../layout/Stepper/Stepper";

const CheckoutFull = () => {
  return (
    <CheckoutContainer component={"main"}>
      <Stepper />
    </CheckoutContainer>
  );
};

export default CheckoutFull;
