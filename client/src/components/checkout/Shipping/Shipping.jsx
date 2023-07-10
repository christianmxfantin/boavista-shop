import { useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { ShippingPaymentContainer } from "./Shipping.styles";
import CardAddress from "../../layout/CardAddress/CardAddress";
import ButtonsContainer from "../../layout/ButtonsContainer/ButtonsContainer";

const Shipping = ({ formType, handleLeft, handleRight, setStepperData }) => {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSameAddress = () => {
    setValue("sameShippingAddress");
    setIsButtonDisabled(false);
  };

  const handleNewAddress = () => {
    setValue("newShippingAddress");
    setIsButtonDisabled(true);
  };

  return (
    <ShippingPaymentContainer>
      <FormControl defaultValue="">
        <RadioGroup
          sx={{
            marginBottom: theme.spacing(2),
            color: theme.palette.primary[500],
          }}
        >
          <FormControlLabel
            value="sameShippingAddress"
            control={
              <Radio name="sameShippingAddress" onChange={handleSameAddress} />
            }
            label={"Utilizar la misma dirección de Facturación"}
          />
          <FormControlLabel
            value="newShippingAddress"
            control={
              <Radio name="newShippingAddress" onChange={handleNewAddress} />
            }
            label={"Seleccionar una dirección nueva"}
          />
        </RadioGroup>
      </FormControl>
      {value === "newShippingAddress" && (
        <CardAddress
          formType={formType}
          itemType="address"
          isButtonDisabled={isButtonDisabled}
          setIsButtonDisabled={setIsButtonDisabled}
          setSelectedAddress={setSelectedAddress}
        />
      )}
      <ButtonsContainer
        formType={formType}
        leftName="Atrás"
        rightName="Continuar"
        disabled={isButtonDisabled}
        onClickLeft={handleLeft}
        onClickRight={() => {
          setStepperData((prevData) => ({
            ...prevData,
            shipping: {
              shippingData: value,
              idAddress: selectedAddress,
            },
          }));
          handleRight();
        }}
      />
    </ShippingPaymentContainer>
  );
};

export default Shipping;
