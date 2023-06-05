import { useState, useRef } from "react";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon, Icon } from "../../ui/Icon";
import {
  BillingContainer,
  TitleContainer,
  DataContainer,
  NameInput,
  SurnameInput,
  AddressInput,
  EmailInput,
  PhoneInput,
} from "./Billing.styles";
import AddressSearch from "../AddressSearch/AddressSearch";
import { useForm } from "react-hook-form";
import ButtonsContainer from "../../layout/ButtonsContainer/ButtonsContainer";
import { validations } from "../../../helpers/validations";
import { IconButton, InputAdornment, Tooltip } from "@mui/material";

const Billing = ({ isProfile, editMode, onEditChange, isButtonDisabled }) => {
  const theme = useTheme();
  const nameInput = useRef();
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleEdit = () => {
    setEdit(true);
    nameInput.current.focus();
  };

  const handleClickCancel = () => {
    reset();
    onEditChange(false);
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
    //save billing data

    handleClickCancel();
  };

  return (
    <section>
      <BillingContainer>
        {!isProfile && (
          <TitleContainer
            sx={{
              visibility: edit ? "hidden" : "visible",
            }}
          >
            <EditIcon
              name="Edit-Data"
              size={30}
              color={theme.palette.primary[500]}
              onClick={handleEdit}
            />
          </TitleContainer>
        )}
        <DataContainer
          component={"form"}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: !isProfile ? "30%" : "100%" }}
        >
          <NameInput
            name="names"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Ingresa tus Nombres"
            disabled={!edit && !editMode}
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
                      <Icon name="Info" color={theme.palette.primary[300]} />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
            disabled={!edit && !editMode}
            {...register("surnames", {
              pattern: validations.names.pattern,
            })}
            error={!!errors.surnames}
            helperText={errors.surnames && validations.names.errorDataNotValid}
          />
          <AddressInput
            name="address"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Ingresa tu Dirección"
            disabled={!edit && !editMode}
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
          />
          <AddressSearch
            disabled={!edit && !editMode}
            visible={true}
            errors={errors}
            control={control}
          />
          <EmailInput
            name="email"
            type="email"
            variant="outlined"
            size="small"
            placeholder="Ingresa tu Email"
            disabled={!edit && !editMode}
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
            disabled={!edit && !editMode}
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
          {editMode && <ButtonsContainer onClick={handleClickCancel} />}
          {edit && <ButtonsContainer isHidden={true} />}
        </DataContainer>
      </BillingContainer>
    </section>
  );
};

export default Billing;
