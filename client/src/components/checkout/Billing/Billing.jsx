import { useState, useRef } from "react";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon } from "../../ui/Icon";
import {
  BillingContainer,
  TitleContainer,
  DataContainer,
  NameInput,
  SurnameInput,
  AddressInput,
  MailInput,
  PhoneInput,
} from "./Billing.styles";
import AddressSearch from "../AddressSearch/AddressSearch";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const Billing = ({ profile, editMode, onEditChange }) => {
  const theme = useTheme();
  const nameInput = useRef();
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleEdit = () => {
    setEdit(true);
    nameInput.current.focus();
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
    //save billing data
    onEditChange(false);
  };

  return (
    <section>
      <BillingContainer>
        {!profile && (
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
          sx={{ width: !profile ? "30%" : "100%" }}
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
              pattern: /^[\p{L} -]+$/u,
            })}
            error={!!errors.names}
            helperText={
              watch("names")
                ? errors.names && "Los datos ingresados son inválidos"
                : errors.names && "El campo no puede estar vacío"
            }
          />
          <SurnameInput
            name="surnames"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Ingresa tus Apellidos"
            disabled={!edit && !editMode}
            {...register("surnames", {
              pattern: /^[\p{L} -]+$/u,
            })}
            error={!!errors.surnames}
            helperText={errors.surnames && "Los datos ingresados son inválidos"}
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
              pattern: /^[\p{L}\d\s.,'#-]+$/u,
            })}
            error={!!errors.address}
            helperText={
              watch("address")
                ? errors.address &&
                  "La dirección solo puede contener caracteres alfanuméricos, comas, puntos, guiones medios (-), apóstrofes (') y el símbolo numeral (#)"
                : errors.address && "El campo no puede estar vacío"
            }
          />
          <AddressSearch disabled={!edit && !editMode} visible={true} />
          <MailInput
            name="mail"
            disabled={!edit && !editMode}
            placeholder="Mail"
          />
          <PhoneInput
            name="phone"
            disabled={!edit && !editMode}
            placeholder="Teléfono"
          />
          {editMode && (
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "70%", marginTop: theme.spacing(2) }}
            >
              Guardar
            </Button>
          )}
        </DataContainer>
      </BillingContainer>
    </section>
  );
};

export default Billing;
