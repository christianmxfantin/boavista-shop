import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import { Button } from "../../ui/Button";
import { Icon } from "../../ui/Icon";
import Underline from "../../ui/Underline";
import {
  FacebookButton,
  FormAuthContainer,
  FormAuthName,
  FormAuthSocial,
  FormAuthSocialButtons,
  FormAuthTitle,
  GoogleButton,
  NameInput,
  SurnameInput,
  EmailInput,
  PasswordInput,
  ButtonsContainer,
} from "./FormAuth.styles";
import { Controller, useForm } from "react-hook-form";
import { validations } from "../../../helpers/validations";

const FormAuth = ({ formType, handleAuth }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleGoogleAuth = () => {
    console.log("Inicio con Google");
  };

  const handleFacebookAuth = () => {
    console.log("Inicio con Facebook");
  };

  const handleTopButton = () => {
    navigate("/dashboard/users");
  };

  const handleBottomButton = () => {
    if (formType === "login") {
      navigate("/register");
    } else {
      navigate("/dashboard/products");
    }
  };

  const onSubmit = (formValues) => {
    switch (formType) {
      case "login":
        //SE LOGUEA EL USUARIO
        console.log("LOGIN", formValues);

        let role = "";
        if (role === "admin") {
          navigate("/dashboard");
          handleAuth(true);
        } else {
          navigate("/");
          handleAuth(true);
        }
        break;

      case "register":
        //SE REGISTRA EL USUARIO Y SE LOGUEA
        console.log("REGISTER", formValues);

        navigate("/");
        handleAuth(true);
        break;

      default:
        console.log("Tipo de Formulario no reconocido");
    }

    reset();
  };

  return (
    <main>
      <FormAuthContainer
        component={"form"}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormAuthTitle variant={formType !== "dashboard" ? "h5" : "h4"}>
          {formType === "login"
            ? "Ingresa a tu cuenta a través de"
            : formType === "register"
            ? "Completa tus datos"
            : "Panel de Administración"}
        </FormAuthTitle>
        {formType === "login" && (
          <FormAuthSocial component={"section"}>
            <FormAuthSocialButtons>
              <GoogleButton
                variant="outlined"
                startIcon={<Icon name="Google" />}
                onClick={handleGoogleAuth}
              >
                Google
              </GoogleButton>
              <FacebookButton
                variant="outlined"
                startIcon={<Icon name="Facebook" />}
                onClick={handleFacebookAuth}
              >
                Facebook
              </FacebookButton>
            </FormAuthSocialButtons>
            <Underline
              width={376}
              height={1}
              color={theme.palette.primary[500]}
            />
          </FormAuthSocial>
        )}
        {formType === "register" && (
          <FormAuthName>
            <NameInput
              name="names"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tus Nombres"
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
              {...register("surnames", {
                pattern: validations.names.pattern,
              })}
              error={!!errors.surnames}
              helperText={errors.surnames && errors.names.errorDataNotValid}
            />
          </FormAuthName>
        )}
        {formType !== "dashboard" && (
          <>
            <EmailInput
              name="email"
              type="email"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Email"
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
            <PasswordInput
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Contraseña"
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
              {...register("password", {
                required: true,
                pattern: validations.password.pattern,
              })}
              error={!!errors.password}
              helperText={
                watch("password")
                  ? errors.password && validations.password.errorDataNotValid
                  : errors.password && validations.errorEmptyField
              }
            />
          </>
        )}
        {formType === "register" && (
          <>
            <Controller
              name="terms"
              control={control}
              rules={{ required: true }}
              render={({ field: props }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...props}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                  }
                  label="Acepto los Términos y Condiciones"
                />
              )}
            />
            <FormHelperText error={!!errors.terms}>
              {!!errors.terms && "Debe aceptar los términos para continuar"}
            </FormHelperText>
          </>
        )}
        <ButtonsContainer
          component={"section"}
          sx={{
            height: formType === "dashboard" ? "350px" : "auto",
            justifyContent: formType === "dashboard" ? "center" : "initial",
          }}
        >
          {formType !== "dashboard" ? (
            <>
              <Button
                name="Continuar"
                type="submit"
                buttonStyle="primary"
                sx={{
                  width: "376px",
                  marginBottom: theme.spacing(2),
                }}
              />
              {formType === "login" && (
                <Button
                  name="Crear Cuenta"
                  buttonStyle="secondary"
                  sx={{
                    width: "376px",
                  }}
                  onClick={handleBottomButton}
                />
              )}
            </>
          ) : (
            <>
              <Button
                name="Usuarios"
                buttonStyle="primary"
                sx={{
                  width: "376px",
                  marginBottom: theme.spacing(4),
                  fontSize: theme.spacing(3), //24px
                }}
                onClick={handleTopButton}
              />
              <Button
                name="Productos"
                buttonStyle="primary"
                sx={{
                  width: "376px",
                  fontSize: theme.spacing(3), //24px
                }}
                onClick={handleBottomButton}
              />
            </>
          )}
        </ButtonsContainer>
        {/* {formType === "login" ? response && handleAuth(true) : null} */}
      </FormAuthContainer>
    </main>
  );
};

export default FormAuth;
