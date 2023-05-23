import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
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

const FormAuth = ({ formType, handleAuth }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

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
              name="name"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Nombre"
              required
              {...register("name", {
                required: true,
                pattern: /^[a-zA-Z]{2,}$/,
              })}
              error={!!errors.name}
              helperText={
                watch("name")
                  ? errors.name && "Los datos ingresados son inválidos"
                  : errors.name && "El campo no puede estar vacío"
              }
            />
            <SurnameInput
              name="surname"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Apellido"
              required
              {...register("surname", {
                required: true,
                pattern: /^[a-zA-Z]{2,}$/,
              })}
              error={!!errors.surname}
              helperText={
                watch("surname")
                  ? errors.surname && "Los datos ingresados son inválidos"
                  : errors.surname && "El campo no puede estar vacío"
              }
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
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              error={!!errors.email}
              helperText={
                watch("email")
                  ? errors.email && "Los datos ingresados son inválidos"
                  : errors.email && "El campo no puede estar vacío"
              }
            />
            <PasswordInput
              name="password"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Contraseña"
              required
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
              error={!!errors.password}
              helperText={
                watch("password")
                  ? errors.password &&
                    "El campo debe contener al menos 8 caracteres, incluyendo al menos un número, una letra minúscula y una letra mayúscula"
                  : errors.password && "El campo no puede estar vacío"
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
