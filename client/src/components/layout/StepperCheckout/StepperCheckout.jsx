import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import {
  Stepper as StepperComponent,
  StepConnector,
  Step,
  StepLabel,
} from "@mui/material";

import Cart from "../../checkout/Cart/Cart";
import Billing from "../../checkout/Billing/Billing";
import Shipping from "../../checkout/Shipping/Shipping";
import Confirmation from "../../checkout/Confirmation/Confirmation/Confirmation";
import PaymentSuccessful from "../../checkout/Payment/PaymentSuccessful/PaymentSuccessful";
import Payment from "../../checkout/Payment/Payment/Payment";

import { cleanCart } from "../../../reducers/cart";

const StepperCheckout = () => {
  let stepperComponent;
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [stepperData, setStepperData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleLeft = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleRight = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleCancelPurchase = () => {
    dispatch(cleanCart());
    navigate("/");
  };

  const handlePayment = () => {
    //Pagar
    console.log("Pagar");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  switch (activeStep) {
    case 1:
      stepperComponent = (
        <Billing
          formType="billing"
          showBilling={true}
          handleLeft={handleLeft}
          handleRight={handleRight}
          setStepperData={setStepperData}
        />
      );
      break;
    case 2:
      stepperComponent = (
        <Shipping
          formType="shipping"
          handleLeft={handleLeft}
          handleRight={handleRight}
          setStepperData={setStepperData}
        />
      );
      break;
    case 3:
      stepperComponent = (
        <Payment
          formType="payment"
          handleLeft={handleLeft}
          handleRight={handleRight}
          setStepperData={setStepperData}
          isButtonDisabled={isButtonDisabled}
          setIsButtonDisabled={setIsButtonDisabled}
        />
      );
      break;
    case 4:
      stepperComponent = (
        <Confirmation
          formType="confirmation"
          confirmationData={stepperData}
          handleCancelPurchase={handleCancelPurchase}
          handlePayment={handlePayment}
        />
      );
      break;
    default:
      stepperComponent = (
        <Cart
          formType="cart"
          handleRight={handleRight}
          setStepperData={setStepperData}
        />
      );
  }

  console.log(stepperData);

  return (
    <>
      {activeStep === 5 ? (
        <PaymentSuccessful />
      ) : (
        <>
          <StepperComponent
            activeStep={activeStep}
            connector={<StepConnector />}
            sx={{ marginBottom: theme.spacing(3) }} //24px
          >
            <Step>
              <StepLabel>Carrito de Compras</StepLabel>
            </Step>
            <Step>
              <StepLabel>Facturación</StepLabel>
            </Step>
            <Step>
              <StepLabel>Envío</StepLabel>
            </Step>
            <Step>
              <StepLabel>Pago</StepLabel>
            </Step>
            <Step>
              <StepLabel>Confirmación</StepLabel>
            </Step>
          </StepperComponent>
          {stepperComponent}
        </>
      )}
    </>
  );
};

export default StepperCheckout;
