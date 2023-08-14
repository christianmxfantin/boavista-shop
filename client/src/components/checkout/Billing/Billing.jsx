import { useState, useRef, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon, Icon } from "../../ui/Icon";
import {
  BillingContainer,
  BillingTitleContainer,
  BillingTitle,
  DataContainer,
  CheckoutContainer,
  NamesInput,
  SurnamesInput,
  AddressInput,
  CommentsInput,
  EmailInput,
  PhoneInput,
  StateSelectContainer,
  StateSelect,
  CitySelectContainer,
  CitySelect,
} from "./Billing.styles";
import useProvincias from "../../../hooks/useProvincias";
import useLocalidades from "../../../hooks/useLocalidades";
import { Controller, useForm } from "react-hook-form";
import ButtonsContainer from "../../layout/ButtonsContainer/ButtonsContainer";
import { PatternValidations } from "../../../helpers/validations";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  Tooltip,
} from "@mui/material";
import CardAddress from "../../layout/CardAddress/CardAddress";
import { UsersErrors } from "../../../errors/users.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { AddressesErrors } from "../../../errors/addresses.errors";

const Billing = ({
  formType,
  handleLeft,
  handleRight,
  setStepperData,
  setSelectedAddress,
  isButtonDisabled,
  setIsButtonDisabled,
  confirmationData,
  editConfirmationData,
  setEditConfirmationData,
  setIsEditVisible,
}) => {
  const theme = useTheme();
  const nameInput = useRef();

  const [showMyAddress, setShowMyAddress] = useState(false);
  const [editCheckoutMode, setEditCheckoutMode] = useState(false);
  const [provincia, setProvincia] = useState("");

  const provincias = useProvincias();
  const localidades = useLocalidades({ provincia });

  //API Fake
  let api = true;
  let myBilling = {};
  if (api && formType === "billing") {
    //cargar data de API
    myBilling = {
      id: 1,
      names: "Lionel Andrés",
      surnames: "Messi",
      address: "Lampilagucho 563",
      // state: "Santa Fe",
      // city: "Rosario",
      email: "elliodelagente@gmail.com",
      phone: "5555 3477",
    };
  } else if (confirmationData) {
    myBilling = {
      id: 1,
      names: confirmationData.names,
      surnames: confirmationData.surnames,
      address: confirmationData.address,
      // state: confirmationData.state,
      // city: confirmationData.city,
      email: confirmationData.email,
      phone: confirmationData.phone,
    };
  } else {
    myBilling = {
      id: 1,
      names: "",
      surnames: "",
      address: "",
      state: "",
      city: "",
      email: "",
      phone: "",
    };
  }

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      names: myBilling.names,
      surnames: myBilling.surnames,
      address: myBilling.address,
      // state: myBilling.state,
      // city: myBilling.city,
      email: myBilling.email,
      phone: myBilling.phone,
    },
  });

  useEffect(() => {
    if (!api) {
      setEditCheckoutMode(true);
    }

    if (formType === "shipping") {
      setEditCheckoutMode(true);
    }
  }, [api, formType]);

  const handleCheckoutEdit = () => {
    setEditCheckoutMode(true);
    nameInput.current.focus();
  };

  const handleCancel = () => {
    if (Object.keys(errors).length === 0) {
      if (formType === "profile") {
        reset();
      }

      if (formType === "billing") {
        setShowMyAddress(false);
      } else if (formType === "profile" || formType === "shipping") {
        setShowMyAddress(true);
      }

      if (formType === "billing") {
        setEditCheckoutMode(false);
      }
    }
  };

  const handleCancelConfirmation = () => {
    if (Object.keys(errors).length === 0) {
      setEditConfirmationData(false);
      setIsEditVisible(true);
    }
  };

  // Para resetear los select
  // const stateRef = useRef();
  // const cityRef = useRef();
  // stateRef.current.childNodes[0].textContent = "Selecciona tu Provincia";
  // cityRef.current.childNodes[0].textContent = "Selecciona tu Localidad";

  const onSubmit = (formValues) => {
    console.log(formValues);

    if (formType === "billing") {
      //save billing data
      setStepperData((prevData) => ({ ...prevData, billing: formValues }));
      handleRight();
    }

    if (formType === "shipping" && !showMyAddress) {
      //save new address
    }

    if (
      formType === "billing-confirmation" ||
      formType === "shipping-confirmation"
    ) {
      //save billing and shipping data confirmation
      handleCancelConfirmation();
    }

    handleCancel();
  };

  return (
    <section>
      {showMyAddress ? (
        <CardAddress
          formType={formType}
          itemType="address"
          setSelectedAddress={setSelectedAddress}
          isButtonDisabled={isButtonDisabled}
          setIsButtonDisabled={setIsButtonDisabled}
        />
      ) : (
        <BillingContainer sx={{ height: formType === "billing" && "70vh" }}>
          {formType === "billing" && (
            <BillingTitleContainer
              onClick={handleCheckoutEdit}
              sx={{
                visibility: editCheckoutMode ? "hidden" : "visible",
              }}
            >
              <BillingTitle>Cambiar datos</BillingTitle>
              <EditIcon
                name="Edit-Data"
                size={30}
                color={theme.palette.primary[500]}
              />
            </BillingTitleContainer>
          )}
          <DataContainer
            component={"form"}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              width: "100%",
              height: formType === "billing" && "70vh",
              alignItems: "center",
            }}
          >
            <CheckoutContainer
              sx={{
                width: formType === "billing" ? "40%" : "100%",
              }}
            >
              {(formType === "billing" ||
                formType === "profile" ||
                formType === "billing-confirmation") && (
                <>
                  <NamesInput
                    name="names"
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder="Ingresa tus Nombres"
                    disabled={
                      (formType === "billing" && !editCheckoutMode) ||
                      (formType === "billing-confirmation" &&
                        !editConfirmationData)
                    }
                    inputRef={nameInput}
                    required
                    {...register("names", {
                      required: true,
                      pattern: PatternValidations.NAMES_AND_SURNAMES,
                    })}
                    error={!!errors.names}
                    helperText={
                      watch("names")
                        ? errors.names && UsersErrors.NAMES_INVALID
                        : errors.names && EmptyFieldError.EMPTY_ERROR
                    }
                  />
                  <SurnamesInput
                    name="surnames"
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder="Ingresa tus Apellidos"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Tooltip title="En el mundo hay varias personas sin apellidos, por ese motivo no es un campo requerido. De igual modo, te sugerimos que completes este campo si lo tienes.">
                            <IconButton edge="end">
                              <Icon
                                name="Info"
                                color={theme.palette.primary[300]}
                              />
                            </IconButton>
                          </Tooltip>
                        </InputAdornment>
                      ),
                    }}
                    disabled={
                      (formType === "billing" && !editCheckoutMode) ||
                      (formType === "billing-confirmation" &&
                        !editConfirmationData)
                    }
                    {...register("surnames", {
                      pattern: PatternValidations.NAMES_AND_SURNAMES,
                    })}
                    error={!!errors.surnames}
                    helperText={errors.surnames && UsersErrors.SURNAMES_INVALID}
                  />
                </>
              )}
              {(formType === "billing" ||
                formType === "shipping" ||
                formType === "profile" ||
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation") && (
                <>
                  <AddressInput
                    name="address"
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder="Ingresa tu Dirección"
                    disabled={
                      (formType === "billing" && !editCheckoutMode) ||
                      (formType === "billing-confirmation" &&
                        !editConfirmationData) ||
                      (formType === "shipping-confirmation" &&
                        !editConfirmationData)
                    }
                    required
                    {...register("address", {
                      required: true,
                      pattern: PatternValidations.ADDRESS,
                    })}
                    error={!!errors.address}
                    helperText={
                      watch("address")
                        ? errors.address && AddressesErrors.ADDRESS_INVALID
                        : errors.address && EmptyFieldError.EMPTY_ERROR
                    }
                  />{" "}
                  <StateSelectContainer>
                    <Controller
                      name="state"
                      control={control}
                      rules={{ required: true }}
                      defaultValue={formType === "billing" && 1}
                      render={({ field }) => (
                        <>
                          <StateSelect
                            {...field}
                            fullWidth
                            disabled={
                              (formType === "billing" && !editCheckoutMode) ||
                              (formType === "billing-confirmation" &&
                                !editConfirmationData) ||
                              (formType === "shipping-confirmation" &&
                                !editConfirmationData)
                            }
                            onChange={(e) => {
                              field.onChange(e.target.value);
                              setProvincia(e.target.value);
                            }}
                            error={!!errors.state}
                          >
                            <MenuItem disabled value={1}>
                              Selecciona tu Provincia
                            </MenuItem>
                            {provincias.map((provincia, index) => (
                              <MenuItem value={provincia} key={index}>
                                {provincia}
                              </MenuItem>
                            ))}
                          </StateSelect>
                          <FormHelperText error={!!errors.state}>
                            {errors.state &&
                            field.value !== "Seleccione una Provincia"
                              ? AddressesErrors.STATE_INVALID
                              : ""}
                          </FormHelperText>
                        </>
                      )}
                    />
                  </StateSelectContainer>
                  <CitySelectContainer>
                    <Controller
                      name="city"
                      control={control}
                      defaultValue={formType === "billing" && 1}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <>
                          <CitySelect
                            {...field}
                            fullWidth
                            disabled={
                              (formType === "billing" && !editCheckoutMode) ||
                              (formType === "billing-confirmation" &&
                                !editConfirmationData) ||
                              (formType === "shipping-confirmation" &&
                                !editConfirmationData)
                            }
                            onChange={(e) => {
                              field.onChange(e.target.value);
                            }}
                            error={!!errors.city}
                          >
                            <MenuItem disabled value={1}>
                              Selecciona tu Localidad
                            </MenuItem>
                            {localidades.map((departamento, index) => (
                              <MenuItem value={departamento} key={index}>
                                {departamento}
                              </MenuItem>
                            ))}
                          </CitySelect>
                          <FormHelperText error={!!errors.city}>
                            {errors.city &&
                            field.value !== "Seleccione una Localidad"
                              ? AddressesErrors.CITY_INVALID
                              : ""}
                          </FormHelperText>
                        </>
                      )}
                    />
                  </CitySelectContainer>
                </>
              )}
              {(formType === "shipping" ||
                formType === "shipping-confirmation") && (
                <>
                  <CommentsInput
                    name="comments"
                    multiline
                    rows={4}
                    placeholder="Observaciones"
                    disabled={
                      formType === "shipping-confirmation" &&
                      !editConfirmationData
                    }
                    InputProps={{
                      style: {
                        padding: 0,
                      },
                      inputProps: {
                        maxLength: 200,
                      },
                    }}
                    {...register("comments", {
                      pattern: PatternValidations.COMMENTS,
                    })}
                    error={!!errors.email}
                    helperText={
                      watch("email")
                        ? errors.email && AddressesErrors.COMMENTS_INVALID
                        : errors.email && EmptyFieldError.EMPTY_ERROR
                    }
                  >
                    Observaciones
                  </CommentsInput>
                </>
              )}
              {(formType === "billing" ||
                formType === "profile" ||
                formType === "billing-confirmation") && (
                <>
                  <EmailInput
                    name="email"
                    type="email"
                    variant="outlined"
                    size="small"
                    placeholder="Ingresa tu Email"
                    disabled={
                      (formType === "billing" && !editCheckoutMode) ||
                      (formType === "billing-confirmation" &&
                        !editConfirmationData)
                    }
                    required
                    {...register("email", {
                      required: true,
                      pattern: PatternValidations.EMAIL,
                    })}
                    error={!!errors.email}
                    helperText={
                      watch("email")
                        ? errors.email && UsersErrors.EMAIL_INVALID
                        : errors.email && EmptyFieldError.EMPTY_ERROR
                    }
                  />
                  <PhoneInput
                    name="phone"
                    type="tel"
                    variant="outlined"
                    size="small"
                    placeholder="Ingrese su Teléfono"
                    disabled={
                      (formType === "billing" && !editCheckoutMode) ||
                      (formType === "billing-confirmation" &&
                        !editConfirmationData)
                    }
                    required
                    {...register("phone", {
                      required: true,
                      pattern: PatternValidations.PHONE,
                    })}
                    error={!!errors.phone}
                    helperText={
                      watch("phone")
                        ? errors.phone && AddressesErrors.PHONE_INVALID
                        : errors.phone && EmptyFieldError.EMPTY_ERROR
                    }
                  />
                </>
              )}
            </CheckoutContainer>
            <ButtonsContainer
              formType={formType === "shipping" ? "billing-shipping" : formType}
              leftName={
                formType === "profile" ||
                formType === "shipping" ||
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation"
                  ? "Cancelar"
                  : "Atrás"
              }
              rightName={
                formType === "profile" ||
                formType === "shipping" ||
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation"
                  ? "Guardar"
                  : "Continuar"
              }
              edit={editConfirmationData}
              onClickLeft={
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation"
                  ? handleCancelConfirmation
                  : formType === "profile" || formType === "shipping"
                  ? handleCancel
                  : handleLeft
              }
            />
          </DataContainer>
        </BillingContainer>
      )}
    </section>
  );
};

export default Billing;
