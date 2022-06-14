import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { Icon } from "../../components/ui/Icon";
import Underline from "../../components/ui/Underline";

const LoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "400px",
  height: "400px",
  margin: `${theme.spacing(6.5)} auto`, //52px
  padding: theme.spacing(4), //32px
  borderRadius: theme.spacing(1.5), //12px,
  color: theme.palette.primary[500],
  backgroundColor: theme.palette.primary[50],
}));

const LoginTitle = styled(Typography)(() => ({
  fontWeight: 500,
}));

const SocialLogin = styled(Box)(() => ({
  display: "flex",
}));

const GoogleButton = styled(Button)(({ theme }) => ({
  width: "180px",
  marginRight: theme.spacing(2), //16px
  "&:hover": {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.secondary[500],
  },
}));

const FacebookButton = styled(Button)(({ theme }) => ({
  width: "180px",
  "&:hover": {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.secondary[500],
  },
}));

const EmailLogin = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const EmailInput = styled(TextField)(({ theme }) => ({
  width: "376px",
  marginBottom: theme.spacing(4), //32px
}));

const PasswordInput = styled(TextField)(({ theme }) => ({
  //styles
}));

const LoginButtons = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ContinueButton = styled(Button)(({ theme }) => ({
  width: "376px",
  marginBottom: theme.spacing(1), //8px
  "&:hover": {
    color: theme.palette.secondary[500],
  },
}));

const CreateAccountButton = styled(Button)(({ theme }) => ({
  width: "376px",
  "&:hover": {
    backgroundColor: theme.palette.secondary[500],
  },
}));

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
        <LoginButtons>
          <ContinueButton variant="contained">Continuar</ContinueButton>
          <CreateAccountButton>Crear Cuenta</CreateAccountButton>
        </LoginButtons>
      </LoginContainer>
    </>
  );
};

export default Login;
