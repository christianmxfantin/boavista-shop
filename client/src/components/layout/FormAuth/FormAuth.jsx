import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Button } from "../../ui/Button";
import { Icon } from "../../ui/Icon";
import Underline from "../../ui/Underline";
import {
  ButtonsContainer,
  EmailInput,
  FacebookButton,
  FormAuthContainer,
  FormAuthEmail,
  FormAuthName,
  FormAuthSocial,
  FormAuthSocialButtons,
  FormAuthTitle,
  GoogleButton,
  NameInput,
  PasswordInput,
  SurnameInput,
} from "./FormAuth.styles";

const FormAuth = ({ data }) => {
  const nameInputRef = useRef(null);
  useEffect(() => {
    if (data === "register") {
      nameInputRef.current.focus();
    }
  });

  const theme = useTheme();
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    console.log("Inicio con Google");
  };

  const handleFacebookAuth = () => {
    console.log("Inicio con Facebook");
  };

  const handleTopButton = () => {
    if (data === "login") {
      navigate("/");
    } else if (data === "register") {
      navigate("/");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data === "login") {
      let credentials = {
        email: e.target[2].value,
        password: e.target[4].value,
      };
      console.log(credentials);
    } else {
      let credentials = {
        name: e.target[0].value,
        surname: e.target[2].value,
        email: e.target[4].value,
        password: e.target[6].value,
        terms: e.target[8].checked,
      };
      console.log(credentials);
    }

    let role = "";
    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <main>
      <FormAuthContainer
        component={"form"}
        autoComplete="off"
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
              inputRef={nameInputRef}
            />
            <SurnameInput
              name="surname"
              type="text"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Apellido"
              required
            />
          </FormAuthName>
        )}
        {data !== "dashboard" && (
          <FormAuthEmail component={"section"}>
            <EmailInput
              name="email"
              type="email"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Email"
              required
            />
            <PasswordInput
              name="password"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Contraseña"
              required
            />
          </FormAuthEmail>
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
            onClick={handleTopButton}
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
