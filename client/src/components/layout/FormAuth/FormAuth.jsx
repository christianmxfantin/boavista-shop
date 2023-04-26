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
import { useForm } from "../../../hooks/useForm";
import { useState } from "react";

const FormAuth = ({ data, handleAuth }) => {
  let initialForm;
  if (data === "register") {
    initialForm = {
      type: "register",
      name: "",
      surname: "",
      email: "",
      password: "",
      terms: "",
    };
    // } else if (data === "login") {
  } else {
    initialForm = {
      type: "login",
      email: "",
      password: "",
    };
  }

  const theme = useTheme();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const { form, errors, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm);

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
    if (data === "login") {
      navigate("/register");
    } else {
      navigate("/dashboard/products");
    }
  };

  return (
    <main>
      <FormAuthContainer
        component={"form"}
        autoComplete="off"
        noValidate
        onSubmit={(e) => handleSubmit(e, handleAuth, isChecked, null)}
      >
        <FormAuthTitle variant={data !== "dashboard" ? "h5" : "h4"}>
          {data === "login"
            ? "Ingresa a tu cuenta a través de"
            : data === "register"
            ? "Completa tus datos"
            : "Panel de Administración"}
        </FormAuthTitle>
        {data === "login" && (
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
        {data === "register" && (
          <FormAuthName>
            <NameInput
              name="name"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Nombre"
              required
              error={!!errors.name}
              helperText={errors.name}
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <SurnameInput
              name="surname"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Apellido"
              required
              error={!!errors.surname}
              helperText={errors.surname}
              value={form.surname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormAuthName>
        )}
        {data !== "dashboard" && (
          <>
            <EmailInput
              name="email"
              type="email"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Email"
              required
              error={!!errors.email}
              helperText={errors.email}
              value={form.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <PasswordInput
              name="password"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Contraseña"
              required
              error={!!errors.password}
              helperText={errors.password}
              value={form.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </>
        )}
        {data === "register" && (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  required
                  checked={isChecked}
                  onChange={(e) => {
                    setIsChecked(e.target.checked);
                    console.log(isChecked);
                  }}
                />
              }
              label="Acepto los Términos y Condiciones"
            />
            <FormHelperText error={!!errors.terms}>
              {errors.terms}
            </FormHelperText>
          </>
        )}
        <ButtonsContainer
          component={"section"}
          sx={{
            height: data === "dashboard" ? "350px" : "auto",
            justifyContent: data === "dashboard" ? "center" : "initial",
          }}
        >
          {data !== "dashboard" ? (
            <>
              <Button
                name="Continuar"
                type="submit"
                buttonStyle="primary"
                sx={{
                  width: "376px",
                  marginBottom: theme.spacing(1),
                }}
              />
              {data === "login" && (
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
        {/* {data === "login" ? response && handleAuth(true) : null} */}
      </FormAuthContainer>
    </main>
  );
};

export default FormAuth;
