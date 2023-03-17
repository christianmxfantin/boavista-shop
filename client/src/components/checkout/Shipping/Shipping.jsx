import { useState } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ShippingContainer, Comments } from "./Shipping.styles";
import AddressSearch from "../AddressSearch/AddressSearch";

const Shipping = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  const handleSameAddress = () => {
    setVisible(false);
  };

  const handleNewAddress = () => {
    setVisible(true);
  };

  return (
    <ShippingContainer>
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
      <AddressSearch visible={visible} />
      <Comments
        multiline
        maxRows={4}
        placeholder="Observaciones"
        sx={{ visibility: visible ? "visible" : "hidden" }}
      >
        Observaciones
      </Comments>
    </ShippingContainer>
  );
};

export default Shipping;
