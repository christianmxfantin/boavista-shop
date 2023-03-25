import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Button } from "../../../components/ui/Button";
import {
  RegisterContainer,
  RegisterTitle,
  RegisterDataContainer,
  NameInput,
  SurnameInput,
  EmailInput,
  PasswordInput,
} from "./Register.styles";

const Register = () => {
  const nameInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let credentials = {
      name: e.target[0].value,
      surname: e.target[2].value,
      email: e.target[4].value,
      password: e.target[6].value,
      terms: e.target[8].checked,
    };
    console.log(credentials);

    navigate("/");
  };

  return (
    <main>
      <RegisterContainer
        component={"form"}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <RegisterTitle variant="h5">Completa tus datos</RegisterTitle>
        <RegisterDataContainer>
          <NameInput
            name="name"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Ingresa tu Nombre"
            required
            inputRef={nameInputRef}
          />
          <SurnameInput
            name="surname"
            type="text"
            variant="outlined"
            size="small"
            placeholder="Ingresa tu Apellido"
            required
          />
          <EmailInput
            name="email"
            type="email"
            variant="outlined"
            size="small"
            placeholder="Ingresa tu Email"
            required
          />
          <PasswordInput
            name="password"
            type="password"
            variant="outlined"
            size="small"
            placeholder="Ingresa tu Contraseña"
            required
          />
          <FormControlLabel
            control={<Checkbox required />}
            label="Acepto los Términos y Condiciones"
          />
        </RegisterDataContainer>
        <Button
          name="Continuar"
          type="submit"
          buttonStyle="primary"
          sx={{
            width: "376px",
            marginTop: "auto",
          }}
          // disabled
        />
      </RegisterContainer>
    </main>
  );
};

export default Register;
