import { useState, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Button,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  ShippingPaymentContainer,
  ShippingButtonsContainer,
} from "./Shipping.styles";
import CardAddress from "../../layout/CardAddress/CardAddress";

const ShippingPayment = ({
  formType,
  isButtonDisabled,
  handleLeft,
  handleRight,
  setStepperData,
}) => {
  const theme = useTheme();
  const [value, setValue] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const { handleSubmit, control } = useForm();

  useEffect(() => {
    isButtonDisabled(true);
  }, [isButtonDisabled]);

  const handleSameAddress = () => {
    setValue(false);
    isButtonDisabled(false);
  };

  const handleNewAddress = () => {
    setValue(true);
    isButtonDisabled(true);
  };

  const onSubmit = (formValues) => {
    //save billing data
    setStepperData((prevData) => ({
      ...prevData,
      shipping: {
        shippingData: formValues.shippingData,
        idAddress: selectedAddress,
      },
    }));
    handleRight();
    // reset();
  };

  return (
    <ShippingPaymentContainer
      component={"form"}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl>
        <Controller
          name="shippingData"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup
              {...field}
              sx={{
                marginBottom: theme.spacing(2),
                color: theme.palette.primary[500],
              }}
            >
              <FormControlLabel
                value="sameShippingAddress"
                control={
                  <Radio
                    name="sameShippingAddress"
                    onChange={handleSameAddress}
                  />
                }
                label={"Utilizar la misma dirección de Facturación"}
              />
              <FormControlLabel
                value="newShippingAddress"
                control={
                  <Radio
                    name="newShippingAddress"
                    onChange={handleNewAddress}
                  />
                }
                label={"Seleccionar una dirección nueva"}
              />
            </RadioGroup>
          )}
        />
      </FormControl>
      {value && (
        <CardAddress
          formType={formType}
          itemType="address"
          isButtonDisabled={isButtonDisabled}
          selectedAddress={setSelectedAddress}
        />
      )}
      <ShippingButtonsContainer>
        <Button
          variant="contained"
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.secondary[500],
              color: theme.palette.primary[500],
            },
          }}
          onClick={handleLeft}
        >
          Atrás
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.secondary[500],
              color: theme.palette.primary[500],
            },
          }}
        >
          Continuar
        </Button>
      </ShippingButtonsContainer>
    </ShippingPaymentContainer>
  );
};

export default ShippingPayment;
