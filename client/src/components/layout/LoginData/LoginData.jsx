import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import {
  LoginDataContainer,
  FirstInput,
  SecondInput,
  ThirdInput,
} from "./LoginData.styles";
import { useForm } from "../../../hooks/useForm";

const LoginData = ({
  profile,
  editMode,
  onEditChange,
  formLogin,
  errorsLogin,
  handleBlurLogin,
  handleChangeLogin,
}) => {
  let database = {
    email: "josemirlukaku@gmail.com",
  };
  const theme = useTheme();
  const [changePassword, setChangePassword] = useState(false);

  let initialForm;
  if (!changePassword) {
    initialForm = {
      type: "change-email",
      "new-email": "",
    };
  } else {
    initialForm = {
      type: "change-password",
      "last-password": "",
      "new-password": "",
      "confirm-password": "",
    };
  }

  const { form, errors, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm);

  const handleSendData = () => {
    setChangePassword(false);
    onEditChange(false);
  };

  const handleClick = () => {
    setChangePassword(true);
    onEditChange(true);
  };

  console.log(form);
  return (
    <LoginDataContainer
      autoComplete={editMode || changePassword ? "off" : undefined}
      noValidate={editMode || changePassword ? true : false}
      component={editMode || changePassword ? "form" : undefined}
      onSubmit={(e) => handleSubmit(e, true, handleSendData)}
    >
      <FirstInput
        name={
          !profile ? "email" : !changePassword ? "new-email" : "last-password"
        }
        type={!changePassword ? "email" : "password"}
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
        disabled={
          !profile ? false : !editMode && !changePassword ? true : false
        }
        sx={{ width: !profile ? "376px" : "inherit" }}
        error={
          !profile
            ? !!errorsLogin.email
            : !changePassword
            ? !!errors["new-email"]
            : !!errors["last-password"]
        }
        helperText={
          !profile
            ? errorsLogin.email
            : !changePassword
            ? errors["new-email"]
            : errors["last-password"]
        }
        value={
          !profile
            ? formLogin.email
            : !changePassword
            ? form["new-email"]
            : form["last-password"]
        }
        onBlur={!profile ? handleBlurLogin : handleBlur}
        onChange={!profile ? handleChangeLogin : handleChange}
      />
      {/* {console.log(errors)} */}
      {(!profile || changePassword) && (
        <SecondInput
          name={!profile ? "password" : "new-password"}
          type="password"
          variant="outlined"
          size="small"
          placeholder={
            !changePassword
              ? "Ingresa tu Contraseña"
              : "Escribe tu Nueva Contraseña"
          }
          required
          sx={{
            width: !profile ? "376px" : "inherit",
            marginBottom: changePassword && theme.spacing(2),
          }}
          error={
            !changePassword ? !!errorsLogin.password : !!errors["new-password"]
          }
          helperText={
            !changePassword ? errorsLogin.password : errors["new-password"]
          }
          // value={!changePassword ? formLogin.password : form["new-password"]}
          onBlur={!profile ? handleBlurLogin : handleBlur}
          onChange={!profile ? handleChangeLogin : handleChange}
        />
      )}
      {changePassword && (
        <ThirdInput
          name="confirm-password"
          type="password"
          variant="outlined"
          size="small"
          placeholder="Repite la Nueva Contraseña"
          required
          error={!!errors["confirm-password"]}
          helperText={errors["confirm-password"]}
          // value={form["confirm-password"]}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      )}
      {/* Boton de Editar Usuario */}
      {editMode || changePassword ? (
        <Button variant="contained" type="submit">
          Guardar
        </Button>
      ) : (
        <Button variant="text" onClick={handleClick}>
          Cambiar Contraseña
        </Button>
      )}
    </LoginDataContainer>
  );
};

export default LoginData;
