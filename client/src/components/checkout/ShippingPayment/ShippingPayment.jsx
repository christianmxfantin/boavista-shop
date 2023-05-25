import { useState, useEffect } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  ShippingPaymentContainer,
  ShippingData,
  Comments,
  PaymentData,
  PaymentDetailsOtherCard,
  PaymentDetailsNewCard,
} from "./ShippingPayment.styles";
import AddressSearch from "../AddressSearch/AddressSearch";
import PaymentDetails from "../Payment/PaymentDetails/PaymentDetails";

const ShippingPayment = ({ data }) => {
  const theme = useTheme();
  const [visibleShipping, setVisibleShipping] = useState(false);
  const [visiblePayment, setVisiblePayment] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null);
    setVisibleShipping(false);
    setVisiblePayment(false);
  }, [data]);

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
    setVisiblePayment("myCards");
  };

  const handleNewCard = () => {
    setVisiblePayment("newCard");
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
                data === "shipping" ? handleSameAddress : handleOtherCard
              }
            />
          }
          label={
            data === "shipping"
              ? "Utilizar la misma dirección de Facturación"
              : "Mis tarjetas"
          }
        />
        <FormControlLabel
          value="newShippingAddress"
          control={
            <Radio
              onChange={data === "shipping" ? handleNewAddress : handleNewCard}
            />
          }
          label={
            data === "shipping"
              ? "Seleccionar una dirección nueva"
              : "Nueva tarjeta de débito o crédito"
          }
        />
      </RadioGroup>
      {data === "shipping" ? (
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
        <PaymentDetails typeData={visiblePayment} />
      )}
    </ShippingPaymentContainer>
  );
};

export default ShippingPayment;
