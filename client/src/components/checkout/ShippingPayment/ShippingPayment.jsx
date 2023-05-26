import { useState, useEffect } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  ShippingPaymentContainer,
  ShippingData,
  Comments,
} from "./ShippingPayment.styles";
import AddressSearch from "../AddressSearch/AddressSearch";
import PaymentDetails from "../Payment/PaymentDetails/PaymentDetails";

const ShippingPayment = ({ step }) => {
  const theme = useTheme();
  const [visibleShipping, setVisibleShipping] = useState(false);
  const [typePayment, setTypePayment] = useState("myCards");
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null);
  }, [step]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSameAddress = () => {
    setVisibleShipping(false);
  };

  const handleNewAddress = () => {
    setVisibleShipping(true);
  };

  const handleOtherCard = () => {
    setTypePayment("myCards");
  };

  const handleNewCard = () => {
    setTypePayment("newCard");
  };

  return (
    <ShippingPaymentContainer>
      <RadioGroup
        value={value}
        onClick={handleChange}
        sx={{
          marginBottom: theme.spacing(2),
          color: theme.palette.primary[500],
        }}
      >
        <FormControlLabel
          value="sameShippingAddress"
          control={
            <Radio
              onChange={
                step === "shipping" ? handleSameAddress : handleOtherCard
              }
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
        <ShippingData>
          <AddressSearch visible={visibleShipping} />
          <Comments
            multiline
            maxRows={4}
            placeholder="Observaciones"
            sx={{ visibility: visibleShipping ? "visible" : "hidden" }}
          >
            Observaciones
          </Comments>
        </ShippingData>
      ) : (
        <>
          <PaymentDetails typeCard={typePayment} />
        </>
      )}
    </ShippingPaymentContainer>
  );
};

export default ShippingPayment;
