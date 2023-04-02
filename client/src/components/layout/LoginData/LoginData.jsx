import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import {
  LoginDataContainer,
  FirstInput,
  SecondInput,
  ThirdInput,
} from "./LoginData.styles";

const LoginData = ({ profile, editMode, onEditChange }) => {
  let database = {
    email: "josemirlukaku@gmail.com",
  };

  const theme = useTheme();
  const [changePassword, setChangePassword] = useState(false);

  const handleClic = () => {
    if (editMode) {
      //save the username
      console.log("Editar usuario");
      setChangePassword(false);
      onEditChange(false);
    } else if (!changePassword) {
      setChangePassword(true);
      onEditChange(true);
    } else {
      //save data of new password
      setChangePassword(false);
      onEditChange(false);
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
        disabled={!editMode && !changePassword ? true : false}
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
          variant={editMode || changePassword ? "contained" : "text"}
          type={changePassword && "submit"}
          onClick={handleClic}
        >
          {editMode || changePassword ? "Guardar" : "Cambiar Contraseña"}
        </Button>
      )}
    </LoginDataContainer>
  );
};

export default LoginData;