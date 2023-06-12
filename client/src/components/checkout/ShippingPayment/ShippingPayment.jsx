import { useState, useEffect } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  ShippingContainer,
  ShippingPaymentContainer,
} from "./ShippingPayment.styles";
import PaymentDetails from "../Payment/PaymentDetails/PaymentDetails";
import Billing from "../Billing/Billing";

const ShippingPayment = ({ step, isButtonDisabled }) => {
  const theme = useTheme();
  const [visibleShipping, setVisibleShipping] = useState(false);
  const [typePayment, setTypePayment] = useState("myCards");
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null);
    isButtonDisabled(true);
  }, [step]);

  const handleRadioChange = (e) => {
    setValue(e.target.value);
  };

  const handleSameAddress = () => {
    setVisibleShipping(false);
    isButtonDisabled(false);
  };

  const handleNewAddress = () => {
    setVisibleShipping(true);
    isButtonDisabled(true);
  };

  const handleMyCards = () => {
    setTypePayment("myCards");
    isButtonDisabled(false);
  };

  const handleNewCard = () => {
    setTypePayment("newCard");
    isButtonDisabled(true);
  };

  return (
    <ShippingPaymentContainer>
      <RadioGroup
        value={value}
        onClick={handleRadioChange}
        sx={{
          marginBottom: theme.spacing(2),
          color: theme.palette.primary[500],
        }}
      >
        <FormControlLabel
          value="sameShippingAddress"
          control={
            <Radio
              onChange={step === "shipping" ? handleSameAddress : handleMyCards}
            />
          }
          label={
            step === "shipping"
              ? "Utilizar la misma dirección de Facturación"
              : "Mis tarjetas"
          }
        />
        <FormControlLabel
          value="newShippingAddress"
          control={
            <Radio
              onChange={step === "shipping" ? handleNewAddress : handleNewCard}
            />
          }
          label={
            step === "shipping"
              ? "Seleccionar una dirección nueva"
              : "Nueva tarjeta de débito o crédito"
          }
        />
      </RadioGroup>
      {value === null ? null : step === "shipping" ? (
        <ShippingContainer>
          <Billing formType="shipping" visibleShipping={visibleShipping} />
        </ShippingContainer>
      ) : (
        <PaymentDetails typeCard={typePayment} />
      )}
    </ShippingPaymentContainer>
  );
};

export default ShippingPayment;
