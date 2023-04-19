import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Button } from "../../ui/Button";
import { Icon } from "../../ui/Icon";
import Underline from "../../ui/Underline";
import LoginData from "../LoginData/LoginData";
import {
  ButtonsContainer,
  FacebookButton,
  FormAuthContainer,
  FormAuthName,
  FormAuthSocial,
  FormAuthSocialButtons,
  FormAuthTitle,
  GoogleButton,
  NameInput,
  SurnameInput,
} from "./FormAuth.styles";
import { useForm } from "../../hooks/useForm";
import {
  validateLoginForm,
  validateRegisterForm,
} from "../../helpers/validationsForm";

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
  } else if (data === "login") {
    initialForm = {
      type: "login",
      email: "",
      password: "",
    };
  }

  const theme = useTheme();
  const navigate = useNavigate();

  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateLoginForm,
    validateRegisterForm
  );
  // const [errors, setErrors] = useState({});

  const handleGoogleAuth = () => {
    console.log("Inicio con Google");
  };

  const handleFacebookAuth = () => {
    console.log("Inicio con Facebook");
  };

  const handleTopButton = (e) => {
    e.preventDefault();

    if (data === "login") {
      //SE LOGUEA EL USUARIO
      let role = "";
      if (role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
        handleAuth(true);
        // setOpen(true);
      }
    } else if (data === "register") {
      //SE LOGUEA EL USUARIO DESPUES DE REGISTRARSE
      navigate("/");
      handleAuth(true);
    } else {
      navigate("/dashboard/users");
    }
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
        onSubmit={handleSubmit}
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
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              onBlur={handleBlur}
            />
            <SurnameInput
              name="surname"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Apellido"
              required
              value={form.surname}
              onChange={handleChange}
              error={!!errors.surname}
              helperText={errors.surname}
              onBlur={handleBlur}
            />
          </FormAuthName>
        )}
        {data !== "dashboard" && (
          <LoginData
            errors={errors}
            form={form}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        )}
        {data === "register" && (
          <FormControlLabel
            control={<Checkbox required />}
            label="Acepto los Términos y Condiciones"
          />
        )}
        <ButtonsContainer
          component={"section"}
          sx={{
            height: data === "dashboard" ? "350px" : "auto",
            justifyContent: data === "dashboard" ? "center" : "initial",
          }}
        >
          <Button
            name={data === "dashboard" ? "Usuarios" : "Continuar"}
            type={data !== "dashboard" && "submit"}
            buttonStyle="primary"
            sx={{
              width: "376px",
              marginBottom:
                data === "dashboard" ? theme.spacing(4) : theme.spacing(1),
              fontSize: data === "dashboard" && theme.spacing(3), //24px
            }}
            // onClick={handleTopButton}
          />
          <Button
            name={data === "dashboard" ? "Productos" : "Crear Cuenta"}
            buttonStyle={data === "dashboard" ? "primary" : "secondary"}
            sx={{
              width: "376px",
              display: data === "register" ? "none" : "flex",
              fontSize: data === "dashboard" && theme.spacing(3), //24px
            }}
            onClick={handleBottomButton}
          />
        </ButtonsContainer>
      </FormAuthContainer>
    </main>
  );
};

export default FormAuth;
