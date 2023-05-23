import { useState } from "react";
import { Button } from "@mui/material";
import {
  AccountDataContainer,
  ChangeEmailInput,
  ConfirmPasswordInput,
  LastPasswordInput,
  NewPasswordInput,
} from "./AccountData.styles";
import { useForm } from "react-hook-form";

const AccountData = ({ data, editMode, onEditChange }) => {
  let database = {
    email: "josemirlukaku@gmail.com",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [changePassword, setChangePassword] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setChangePassword(true);
    onEditChange(true);
  };

  const onSubmit = (formValues) => {
    if (!changePassword) {
      //Change Email Form
      console.log("CHANGE EMAIL", formValues);
    } else {
      //Change Password Form
      console.log("CHANGE PASSWORD", formValues);
    }

    setChangePassword(false);
    onEditChange(false);
    reset();
  };

  return (
    <>
      <AccountDataContainer
        component={"form"}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        {!changePassword ? (
          <ChangeEmailInput
            name="newEmail"
            type="email"
            variant="outlined"
            size="small"
            placeholder={database.email}
            disabled={!editMode ? true : false}
            required
            {...register("newEmail", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            error={!!errors.newEmail}
            helperText={
              watch("newEmail")
                ? errors.newEmail && "Los datos ingresados son inválidos"
                : errors.newEmail && "El campo no puede estar vacío"
            }
          />
        ) : (
          <>
            <LastPasswordInput
              name="lastPassword"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Contraseña Anterior"
              required
              {...register("lastPassword", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
              error={!!errors.lastPassword}
              helperText={
                watch("lastPassword")
                  ? errors.lastPassword &&
                    "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula"
                  : errors.lastPassword && "El campo no puede estar vacío"
              }
            />
            <NewPasswordInput
              name="newPassword"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Escribe tu Nueva Contraseña"
              required
              {...register("newPassword", {
                required: true && "El campo no puede estar vacío",
                validate: (value) =>
                  value !== watch("lastPassword") ||
                  "La contraseña ingresada debe ser diferente a la contraseña anterior",
              })}
              error={!!errors.newPassword}
              helperText={errors.newPassword && errors.newPassword.message}
            />
            <ConfirmPasswordInput
              name="confirmPassword"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Repite la Nueva Contraseña"
              required
              {...register("confirmPassword", {
                required: true && "El campo no puede estar vacío",
                validate: (value) =>
                  value === watch("newPassword") ||
                  "La contraseña ingresada debe coincidir con la nueva contraseña",
              })}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword && errors.confirmPassword.message
              }
            />
          </>
        )}
        {editMode || changePassword ? (
          <Button variant="contained" type="submit">
            Guardar
          </Button>
        ) : !editMode || !changePassword ? (
          <Button variant="text" type="button" onClick={handleClick}>
            Cambiar Contraseña
          </Button>
        ) : null}
      </AccountDataContainer>
    </>
  );
};

export default AccountData;
