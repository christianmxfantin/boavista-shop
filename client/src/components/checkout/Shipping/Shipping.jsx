import { useState, useEffect } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { ShippingPaymentContainer } from "./Shipping.styles";
import CardAddress from "../../layout/CardAddress/CardAddress";

const ShippingPayment = ({ isButtonDisabled }) => {
  const theme = useTheme();
  const [visibleShipping, setVisibleShipping] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null);
    isButtonDisabled(true);
  }, []);

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

  return (
    <ShippingPaymentContainer>
      <FormControl>
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
            control={<Radio onChange={handleSameAddress} />}
            label={"Utilizar la misma dirección de Facturación"}
          />
          <FormControlLabel
            value="newShippingAddress"
            control={<Radio onChange={handleNewAddress} />}
            label={"Seleccionar una dirección nueva"}
          />
        </RadioGroup>
      </FormControl>
      {value === null
        ? null
        : visibleShipping && (
            <CardAddress formType="shipping" itemType="address" />
          )}
    </ShippingPaymentContainer>
  );
};

export default ShippingPayment;
