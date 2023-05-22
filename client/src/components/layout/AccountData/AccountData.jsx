import { useState } from "react";
import { Button } from "@mui/material";
import {
  AccountDataContainer,
  ChangeEmailInput,
  ConfirmPasswordInput,
  LastPasswordInput,
  NewPasswordInput,
} from "./AccountData.styles";

const AccountData = ({ data, editMode, onEditChange }) => {
  let database = {
    email: "josemirlukaku@gmail.com",
  };

  // const [initialForm, setInitialForm] = useState("change-email");

  // console.log(initialForm);
  // let changeForm;
  // if (initialForm === "change-email") {
  //   changeForm = {
  //     type: "change-email",
  //     "new-email": "",
  //   };
  // } else if (initialForm === "change-password") {
  //   changeForm = {
  //     type: "change-password",
  //     "last-password": "",
  //     "new-password": "",
  //     "confirm-password": "",
  //   };
  // }
  // console.log(initialForm);

  const [changePassword, setChangePassword] = useState(false);

  const handleSendData = () => {
    setChangePassword(false);
    onEditChange(false);
    setInitialForm("change-email");
  };

  const handleClick = () => {
    setChangePassword(true);
    onEditChange(true);
    setInitialForm("change-password");
  };

  // console.log(form);

  return (
    <>
      <AccountDataContainer
        autoComplete="off"
        noValidate
        component={"form"}
        // onSubmit={(e) => handleSubmit(e, true, false, handleSendData)}
      >
        {!changePassword ? (
          <ChangeEmailInput
            name="new-email"
            type="email"
            variant="outlined"
            size="small"
            placeholder={database.email}
            required
            disabled={!editMode ? true : false}
            error={!!errors["new-email"]}
            helperText={errors["new-email"]}
            value={form["new-email"]}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ) : (
          <>
            <LastPasswordInput
              name="last-password"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Ingresa tu Contraseña Anterior"
              required
              error={!!errors["last-password"]}
              helperText={errors["last-password"]}
              value={form["last-password"]}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <NewPasswordInput
              name="new-password"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Escribe tu Nueva Contraseña"
              required
              error={!!errors["new-password"]}
              helperText={errors["new-password"]}
              value={form["new-password"]}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <ConfirmPasswordInput
              name="confirm-password"
              type="password"
              variant="outlined"
              size="small"
              placeholder="Repite la Nueva Contraseña"
              required
              error={!!errors["confirm-password"]}
              helperText={errors["confirm-password"]}
              value={form["confirm-password"]}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </>
        )}
        {editMode || changePassword ? (
          <Button variant="contained" type="submit">
            Guardar
          </Button>
        ) : !editMode || !changePassword ? (
          <Button variant="text" onClick={handleClick}>
            Cambiar Contraseña
          </Button>
        ) : null}
      </AccountDataContainer>
    </>
  );
};

export default AccountData;
