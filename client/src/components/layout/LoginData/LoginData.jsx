import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import {
  LoginDataContainer,
  FirstInput,
  SecondInput,
  ThirdInput,
} from "./LoginData.styles";
import { useForm } from "../../hooks/useForm";

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

  let initialForm;
  if (profile) {
    initialForm = {
      type: "change-password",
      lastPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  }

  const theme = useTheme();
  const [changePassword, setChangePassword] = useState(false);
  const { form, errors, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm);

  const handleClick = (e) => {
    if (editMode) {
      //save the username
      console.log("Editar usuario");
      setChangePassword(false);
      onEditChange(false);
    } else if (!changePassword) {
      //open the form for change password
      setChangePassword(true);
      onEditChange(true);
    } else {
      //save data of new password
      setChangePassword(false);
      onEditChange(false);
    }
  };

  return (
    <LoginDataContainer
      component={changePassword ? "form" : undefined}
      onSubmit={changePassword ? (e) => handleSubmit(e, true) : undefined}
    >
      <FirstInput
        name={!changePassword ? "email" : "last-password"}
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
            ? errorsLogin.email
            : !changePassword
            ? !!errors.email
            : !!errors.password
        }
        helperText={
          !profile
            ? errorsLogin.email
            : !changePassword
            ? errors.email
            : errors.password
        }
        value={
          !profile
            ? formLogin.email
            : !changePassword
            ? form.email
            : form.password
        }
        onBlur={!profile ? handleBlurLogin : handleBlur}
        onChange={!profile ? handleChangeLogin : handleChange}
      />
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
          error={!changePassword ? !!errorsLogin.password : !!errors.password}
          helperText={!changePassword ? errorsLogin.password : errors.password}
          value={!changePassword ? formLogin.password : form.password}
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
          error={!!errors.password}
          helperText={errors.password}
          value={form.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      )}
      {profile && (
        <Button
          variant={editMode || changePassword ? "contained" : "text"}
          type={changePassword ? "submit" : undefined}
          onClick={handleClick}
        >
          {editMode || changePassword ? "Guardar" : "Cambiar Contraseña"}
        </Button>
      )}
    </LoginDataContainer>
  );
};

export default LoginData;
