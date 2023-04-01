import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import {
  LoginDataContainer,
  FirstInput,
  SecondInput,
  ThirdInput,
} from "./LoginData.styles";

const LoginData = ({ profile, edit }) => {
  let database = {
    email: "josemirlukaku@gmail.com",
  };
  console.log(edit);

  const theme = useTheme();
  const [editMode, setEditMode] = useState(edit);
  const [changePassword, setChangePassword] = useState(false);

  const handleChangePassword = () => {
    if (!editMode) {
      //save new email
      setEditMode(!editMode);
      console.log("guardar mail");
    } else if (!changePassword) {
      setChangePassword(true);
      console.log("ir a cambiar pass");
    } else {
      //save data of new password
      setChangePassword(false);
      console.log("guardar nuevas pass");
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
        disabled={!changePassword && !edit ? true : false}
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
          variant={changePassword || edit || editMode ? "contained" : "text"}
          type={changePassword && "submit"}
          onClick={handleChangePassword}
        >
          {(!changePassword && !edit) || !editMode
            ? "Cambiar Contraseña"
            : "Guardar"}
        </Button>
      )}
    </LoginDataContainer>
  );
};

export default LoginData;
