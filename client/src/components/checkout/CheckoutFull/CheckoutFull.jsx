import { CheckoutContainer } from "./CheckoutFull.styles";
import StepperCheckout from "../../layout/StepperCheckout/StepperCheckout";

const CheckoutFull = () => {
  return (
    <CheckoutContainer component={"main"}>
      <StepperCheckout />
    </CheckoutContainer>
  );
};

export default CheckoutFull;
