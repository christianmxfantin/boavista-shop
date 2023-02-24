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

  return (
    <LoginContainer component={"main"}>
      <LoginTitle variant="h5">Ingresá a tu cuenta a través de</LoginTitle>
      <SocialLogin component={"section"}>
        <GoogleButton variant="outlined" startIcon={<Icon name="Google" />}>
          Google
        </GoogleButton>
        <FacebookButton variant="outlined" startIcon={<Icon name="Facebook" />}>
          Facebook
        </FacebookButton>
      </SocialLogin>
      <Underline width={376} height={1} color={theme.palette.primary[500]} />
      <EmailLogin component={"section"}>
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
      <ButtonsContainer component={"section"}>
        <Button
          name="Continuar"
          variant="contained"
          sx={{
            width: "376px",
            marginBottom: theme.spacing(1), //8px
            "&:hover": {
              color: theme.palette.secondary[500],
            },
          }}
        />
        <Button
          name="Crear Cuenta"
          sx={{
            width: "376px",
            "&:hover": {
              backgroundColor: theme.palette.secondary[500],
            },
          }}
        />
      </ButtonsContainer>
    </LoginContainer>
  );
};

export default Login;
