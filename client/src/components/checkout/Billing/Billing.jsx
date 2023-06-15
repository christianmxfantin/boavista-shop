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
} from "./Billing.styles";
import AddressSearch from "../AddressSearch/AddressSearch";
import { useForm } from "react-hook-form";
import ButtonsContainer from "../../layout/ButtonsContainer/ButtonsContainer";
import { validations } from "../../../helpers/validations";
import { IconButton, InputAdornment, Tooltip } from "@mui/material";
import CardAddress from "../../layout/CardAddress/CardAddress";

const Billing = ({
  formType,
  visibleShipping,
  isButtonDisabled,
  onProfileEditChange,
}) => {
  const theme = useTheme();
  const nameInput = useRef();
  const [showMyAddress, setShowMyAddress] = useState(false);
  const [editCheckoutMode, setEditCheckoutMode] = useState(false);
  const [resetAddress, setResetAddress] = useState(false);

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
    }
  }, [formType]);

  const handleCheckoutEdit = () => {
    setEditCheckoutMode(true);
    isButtonDisabled(true);
    nameInput.current.focus();
  };

  const handleClickCancel = () => {
    if (formType === "profile") {
      reset();
    }
    setShowMyAddress(true);
    // onProfileEditChange(false);
    if (formType !== "profile") {
      setEditCheckoutMode(false);
      isButtonDisabled(false);
    }
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
    //save billing data

    if (formType === "profile") {
      setResetAddress(true);
    }

    handleClickCancel();
  };

  return (
    <section>
      {showMyAddress ? (
        <CardAddress formType={formType} itemType="address" />
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
                  : "30%",
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
                <AddressSearch
                  formType={formType}
                  disabled={!editCheckoutMode}
                  errors={errors}
                  control={control}
                  resetAddress={resetAddress}
                />
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
