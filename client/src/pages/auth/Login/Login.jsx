import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  LoginContainer,
  LoginTitle,
  SocialLogin,
  GoogleButton,
  FacebookButton,
  EmailLogin,
  EmailInput,
  PasswordInput,
  ButtonsContainer,
} from "./Login.styles";
import { Icon } from "../../../components/ui/Icon";
import Underline from "../../../components/ui/Underline";
import { Button } from "../../../components/ui/Button";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    console.log("Inicio con Google");
  };

  const handleFacebookAuth = () => {
    console.log("Inicio con Facebook");
  };

  const handleCreateAccount = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let credentials = {
      email: e.target[2].value,
      password: e.target[4].value,
    };
    console.log(credentials);

    let role = "";
    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <main>
      <LoginContainer
        component={"form"}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <LoginTitle variant="h5">Ingresa a tu cuenta a través de</LoginTitle>
        <SocialLogin component={"section"}>
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
        </SocialLogin>
        <Underline width={376} height={1} color={theme.palette.primary[500]} />
        <EmailLogin component={"section"}>
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
        </EmailLogin>
        <ButtonsContainer component={"section"}>
          <Button
            name="Continuar"
            type="submit"
            buttonStyle="primary"
            sx={{
              width: "376px",
              marginBottom: theme.spacing(1), //8px
            }}
          />
          <Button
            name="Crear Cuenta"
            buttonStyle="secondary"
            sx={{
              width: "376px",
            }}
            onClick={handleCreateAccount}
          />
        </ButtonsContainer>
      </LoginContainer>
    </main>
  );
};

export default Login;
