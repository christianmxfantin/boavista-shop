import { useState } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  ShippingPaymentContainer,
  ShippingData,
  Comments,
  PaymentData,
  PaymentDetails,
} from "./ShippingPayment.styles";
import AddressSearch from "../AddressSearch/AddressSearch";

const ShippingPayment = ({ data }) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  const handleSameAddress = () => {
    setVisible(false);
  };

  const handleNewAddress = () => {
    setVisible(true);
  };

  return (
    <ShippingPaymentContainer>
      <RadioGroup sx={{ marginBottom: theme.spacing(2) }}>
        <FormControlLabel
          value="sameShippingAddress"
          control={<Radio onChange={handleSameAddress} />}
          label="Utilizar la misma dirección de Facturación"
        />
        <FormControlLabel
          value="newShippingAddress"
          control={<Radio onChange={handleNewAddress} />}
          label="Seleccionar una dirección nueva"
        />
      </RadioGroup>
      <ShippingData
        sx={{ visible: data === "shipping" ? "visible" : "hidden" }}
      >
        <AddressSearch visible={visible} />
        <Comments
          multiline
          maxRows={4}
          placeholder="Observaciones"
          sx={{ visibility: visible ? "visible" : "hidden" }}
        >
          Observaciones
        </Comments>
      </ShippingData>
      <PaymentData sx={{ visible: data === "payment" ? "visible" : "hidden" }}>
        <PaymentDetails></PaymentDetails>
      </PaymentData>
    </ShippingPaymentContainer>
  );
};

export default ShippingPayment;
