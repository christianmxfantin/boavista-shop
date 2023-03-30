import {
  LoginDataContainer,
  EmailInput,
  PasswordInput,
} from "./LoginData.styles";

const LoginData = ({ profile }) => {
  return (
    <LoginDataContainer component={"section"}>
      <EmailInput
        name="email"
        type="email"
        variant="outlined"
        size="small"
        placeholder="Ingresa tu Email"
        required
        sx={{ width: !profile ? "376px" : "inherit" }}
      />
      <PasswordInput
        name="password"
        type="password"
        variant="outlined"
        size="small"
        placeholder="Ingresa tu Contraseña"
        required
      />
    </LoginDataContainer>
  );
};

export default LoginData;
