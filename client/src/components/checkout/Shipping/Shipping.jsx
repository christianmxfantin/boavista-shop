import { useState, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { ShippingPaymentContainer } from "./Shipping.styles";
import CardAddress from "../../layout/CardAddress/CardAddress";

const ShippingPayment = ({ formType, isButtonDisabled }) => {
  const theme = useTheme();
  const radioGroupRef = useRef(null);
  const [visibleShipping, setVisibleShipping] = useState(false);
  const [value, setValue] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    // setValue(null);
    isButtonDisabled(true);
  }, [setValue, isButtonDisabled]);

  const handleRadioChange = (e) => {
    setValue(true);
  };

  const handleSameAddress = () => {
    setValue(false);
    isButtonDisabled(false);
  };

  const handleNewAddress = () => {
    setValue(true);
    isButtonDisabled(true);
  };

  const onSubmit = (formValues) => {
    //enviar data
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
                control={<Radio onChange={handleSameAddress} />}
                label={"Utilizar la misma dirección de Facturación"}
              />
              <FormControlLabel
                value="newShippingAddress"
                control={<Radio onChange={handleNewAddress} />}
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
        />
      )}
    </ShippingPaymentContainer>
  );
};

export default ShippingPayment;
