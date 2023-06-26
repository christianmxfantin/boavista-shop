import { useState, useRef, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon, Icon } from "../../ui/Icon";
import {
  BillingContainer,
  BillingTitleContainer,
  BillingTitle,
  DataContainer,
  NameInput,
  SurnameInput,
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
import { validations } from "../../../helpers/validations";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  Tooltip,
} from "@mui/material";
import CardAddress from "../../layout/CardAddress/CardAddress";

const Billing = ({ formType, isButtonDisabled }) => {
  const theme = useTheme();
  const nameInput = useRef();

  const [showMyAddress, setShowMyAddress] = useState(false);
  const [editCheckoutMode, setEditCheckoutMode] = useState(false);
  const [provincia, setProvincia] = useState("");

  const provincias = useProvincias();
  const localidades = useLocalidades({ provincia });

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (formType === "shipping") {
      setEditCheckoutMode(true);
      isButtonDisabled(true);
    }
  }, [formType, isButtonDisabled]);

  const handleCheckoutEdit = () => {
    setEditCheckoutMode(true);
    isButtonDisabled(true);
    nameInput.current.focus();
  };

  const handleClickCancel = () => {
    if (formType === "profile") {
      reset();
    }

    if (formType === "billing") {
      setShowMyAddress(false);
    } else {
      setShowMyAddress(true);
    }

    if (formType === "billing") {
      setEditCheckoutMode(false);
    }
  };

  // Para resetear los select
  // const stateRef = useRef();
  // const cityRef = useRef();
  // stateRef.current.childNodes[0].textContent = "Selecciona tu Provincia";
  // cityRef.current.childNodes[0].textContent = "Selecciona tu Localidad";

  const onSubmit = (formValues) => {
    console.log(formValues);
    //save billing data

    handleClickCancel();
    isButtonDisabled(false);
  };

  return (
    <section>
      {showMyAddress ? (
        <CardAddress
          formType={formType}
          itemType="address"
          isButtonDisabled={isButtonDisabled}
        />
      ) : (
        <BillingContainer>
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
              width:
                formType === "profile"
                  ? "100%"
                  : formType === "billing"
                  ? "40%"
                  : "100%",
            }}
          >
            {(formType === "billing" || formType === "profile") && (
              <>
                <NameInput
                  name="names"
                  type="text"
                  variant="outlined"
                  size="small"
                  placeholder="Ingresa tus Nombres"
                  disabled={formType === "billing" && !editCheckoutMode}
                  inputRef={nameInput}
                  required
                  {...register("names", {
                    required: true,
                    pattern: validations.names.pattern,
                  })}
                  error={!!errors.names}
                  helperText={
                    watch("names")
                      ? errors.names && validations.names.errorDataNotValid
                      : errors.names && validations.errorEmptyField
                  }
                />
                <SurnameInput
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
                  disabled={formType === "billing" && !editCheckoutMode}
                  {...register("surnames", {
                    pattern: validations.names.pattern,
                  })}
                  error={!!errors.surnames}
                  helperText={
                    errors.surnames && validations.names.errorDataNotValid
                  }
                />
              </>
            )}
            {(formType === "billing" ||
              formType === "shipping" ||
              formType === "profile") && (
              <>
                <AddressInput
                  name="address"
                  type="text"
                  variant="outlined"
                  size="small"
                  placeholder="Ingresa tu Dirección"
                  disabled={formType === "billing" && !editCheckoutMode}
                  required
                  {...register("address", {
                    required: true,
                    pattern: validations.address.pattern,
                  })}
                  error={!!errors.address}
                  helperText={
                    watch("address")
                      ? errors.address && validations.address.errorDataNotValid
                      : errors.address && validations.errorEmptyField
                  }
                />{" "}
                <StateSelectContainer>
                  <Controller
                    name="state"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={1}
                    render={({ field }) => (
                      <>
                        {console.log()}
                        <StateSelect
                          {...field}
                          fullWidth
                          disabled={formType === "billing" && !editCheckoutMode}
                          defaultValue={1}
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
                            ? "Debe seleccionar una Provincia para continuar"
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
                    rules={{ required: true }}
                    render={({ field }) => (
                      <>
                        <CitySelect
                          {...field}
                          fullWidth
                          disabled={formType === "billing" && !editCheckoutMode}
                          defaultValue={1}
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
                            ? "Debe seleccionar una Localidad para continuar"
                            : ""}
                        </FormHelperText>
                      </>
                    )}
                  />
                </CitySelectContainer>
              </>
            )}
            {formType === "shipping" && (
              <>
                <CommentsInput
                  multiline
                  rows={4}
                  name="comments"
                  placeholder="Observaciones"
                  InputProps={{
                    style: {
                      padding: 0,
                    },
                  }}
                  {...register("comments")}
                >
                  Observaciones
                </CommentsInput>
              </>
            )}
            {(formType === "billing" || formType === "profile") && (
              <>
                <EmailInput
                  name="email"
                  type="email"
                  variant="outlined"
                  size="small"
                  placeholder="Ingresa tu Email"
                  disabled={formType === "billing" && !editCheckoutMode}
                  required
                  {...register("email", {
                    required: true,
                    pattern: validations.mail.pattern,
                  })}
                  error={!!errors.email}
                  helperText={
                    watch("email")
                      ? errors.email && validations.mail.errorDataNotValid
                      : errors.email && validations.errorEmptyField
                  }
                />
                <PhoneInput
                  name="phone"
                  type="tel"
                  variant="outlined"
                  size="small"
                  placeholder="Ingrese su Teléfono"
                  disabled={formType === "billing" && !editCheckoutMode}
                  required
                  {...register("phone", {
                    required: true,
                    pattern: validations.phone.pattern,
                  })}
                  error={!!errors.phone}
                  helperText={
                    watch("phone")
                      ? errors.phone && validations.phone.errorDataNotValid
                      : errors.phone && validations.errorEmptyField
                  }
                />
              </>
            )}
            <ButtonsContainer
              formType={formType}
              edit={editCheckoutMode}
              onClick={handleClickCancel}
            />
          </DataContainer>
        </BillingContainer>
      )}
    </section>
  );
};

export default Billing;
