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
  ContinueButton,
  CreateAccountButton,
} from "./Login.styles";
import { Icon } from "../../../components/ui/Icon";
import Underline from "../../../components/ui/Underline";

const Login = () => {
  const theme = useTheme();

  return (
    <>
      <LoginContainer>
        <LoginTitle variant="h5">Ingresá a tu cuenta a través de</LoginTitle>
        <SocialLogin>
          <GoogleButton variant="outlined" startIcon={<Icon name="Google" />}>
            Google
          </GoogleButton>
          <FacebookButton
            variant="outlined"
            startIcon={<Icon name="Facebook" />}
          >
            Facebook
          </FacebookButton>
        </SocialLogin>
        <Underline width={376} height={1} color={theme.palette.primary[500]} />
        <EmailLogin>
          <EmailInput
            id="email"
            variant="outlined"
            size="small"
            placeholder="Ingrese su Email"
          />
          <PasswordInput
            id="password"
            variant="outlined"
            size="small"
            placeholder="Ingrese su Contraseña"
          />
        </EmailLogin>
        <ButtonsContainer>
          <ContinueButton variant="contained">Continuar</ContinueButton>
          <CreateAccountButton>Crear Cuenta</CreateAccountButton>
        </ButtonsContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
