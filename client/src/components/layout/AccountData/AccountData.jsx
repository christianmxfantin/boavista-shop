import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, IconButton, InputAdornment } from "@mui/material";
import {
  AccountDataContainer,
  ChangeEmailInput,
  ConfirmPasswordInput,
  LastPasswordInput,
  NewPasswordInput,
  ButtonContainer,
} from "./AccountData.styles";
import { useForm } from "react-hook-form";
import { Icon } from "../../ui/Icon";
import ButtonsContainer from "../ButtonsContainer/ButtonsContainer";

const AccountData = ({ formType }) => {
  let database = {
    email: "josemirlukaku@gmail.com",
  };

  const theme = useTheme();
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleClickChangeEmail = (e) => {
    e.preventDefault();
    setChangeEmail(true);
  };

  const handleClickChangePassword = (e) => {
    e.preventDefault();
    setChangePassword(true);
  };

  const handleClickCancel = () => {
    reset();
    if (changeEmail) {
      setChangeEmail(false);
    } else {
      setChangePassword(false);
    }
  };

  const onSubmit = (formValues) => {
    if (!changePassword) {
      //Change Email Form
      console.log("CHANGE EMAIL", formValues);
    } else {
      //Change Password Form
      console.log("CHANGE PASSWORD", formValues);
    }

    handleClickCancel();
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
            disabled={!changeEmail ? true : false}
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Icon
                          name="Visibility-off"
                          color={theme.palette.primary[300]}
                        />
                      ) : (
                        <Icon
                          name="Visibility"
                          color={theme.palette.primary[300]}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Icon
                          name="Visibility-off"
                          color={theme.palette.primary[300]}
                        />
                      ) : (
                        <Icon
                          name="Visibility"
                          color={theme.palette.primary[300]}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Icon
                          name="Visibility-off"
                          color={theme.palette.primary[300]}
                        />
                      ) : (
                        <Icon
                          name="Visibility"
                          color={theme.palette.primary[300]}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
        {changePassword || changeEmail ? (
          <ButtonsContainer formType={formType} onClick={handleClickCancel} />
        ) : (
          <ButtonContainer>
            <Button
              variant="text"
              type="button"
              onClick={handleClickChangeEmail}
              sx={{ width: "50%" }}
            >
              Cambiar Email
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={handleClickChangePassword}
              sx={{ width: "50%" }}
            >
              Cambiar Contraseña
            </Button>
          </ButtonContainer>
        )}
      </AccountDataContainer>
    </>
  );
};

export default AccountData;
