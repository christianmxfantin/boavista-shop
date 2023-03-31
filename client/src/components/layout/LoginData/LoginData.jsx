import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import {
  LoginDataContainer,
  FirstInput,
  SecondInput,
  ThirdInput,
} from "./LoginData.styles";

const LoginData = ({ profile }) => {
  let database = {
    email: "josemirlukaku@gmail.com",
  };

  const theme = useTheme();
  const [changePassword, setChangePassword] = useState(false);

  const handleChangePassword = () => {
    if (!changePassword) {
      setChangePassword(true);
    } else {
      //save data
      setChangePassword(false);
    }
  };

  return (
    <LoginDataContainer component={"section"}>
      <FirstInput
        name="email"
        type="email"
        variant="outlined"
        size="small"
        placeholder={
          !profile
            ? "Ingresa tu Email"
            : !changePassword
            ? `${database.email}`
            : "Ingresa tu Contraseña Anterior"
        }
        required
        disabled={!changePassword ? true : false}
        sx={{ width: !profile ? "376px" : "inherit" }}
      />
      {changePassword && (
        <SecondInput
          name="email"
          type="email"
          variant="outlined"
          size="small"
          placeholder={
            !changePassword ? "Ingresa tu Email" : "Escribe tu Nueva Contraseña"
          }
          required
          // disabled={true}
          sx={{
            width: !profile ? "376px" : "inherit",
            marginBottom: changePassword && theme.spacing(2),
          }}
        />
      )}
      {(!profile || changePassword) && (
        <ThirdInput
          name="password"
          type="password"
          variant="outlined"
          size="small"
          placeholder="Repite la Nueva Contraseña"
          required
        />
      )}
      {profile && (
        <Button
          variant="text"
          type={changePassword && "submit"}
          onClick={handleChangePassword}
        >
          {!changePassword ? "Cambiar Contraseña" : "Guardar"}
        </Button>
      )}
    </LoginDataContainer>
  );
};

export default LoginData;
