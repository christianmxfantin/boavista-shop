import { useState, useRef, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Icon as EditIcon } from "../../ui/Icon";
import {
  BillingContainer,
  TitleContainer,
  DataContainer,
  NameInput,
  SurnameInput,
  AddressInput,
  StateSelect,
  CitySelect,
  PostalCodeInput,
  MailInput,
  PhoneInput,
} from "./Billing.styles";
import { MenuItem } from "@mui/material";

const Billing = () => {
  const theme = useTheme();
  const nameInput = useRef();
  const [edit, setEdit] = useState(false);
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((response) => response.json())
      .then((data) => {
        const nombresProvincias = data.provincias.map(
          (provincia) => provincia.nombre
        );
        const nombresProvinciasOrdenados = nombresProvincias.sort((a, b) =>
          a.localeCompare(b)
        );
        setProvincias(nombresProvinciasOrdenados);
      });
  }, []);

  const handleEdit = () => {
    setEdit(true);
    console.log(nameInput);
    nameInput.current.focus();
  };

  return (
    <BillingContainer>
      <TitleContainer>
        <EditIcon
          name="Edit-Data"
          size={30}
          color={theme.palette.primary[500]}
          onClick={handleEdit}
        />
      </TitleContainer>
      <DataContainer>
        <NameInput
          disabled={!edit}
          placeholder="Nombres"
          inputRef={nameInput}
        />
        <SurnameInput disabled={!edit} placeholder="Apellidos" />
        <AddressInput disabled={!edit} placeholder="Dirección" />
        {/* <div>
          <select id="provincia">
            {provincias.map((provincia) => (
              <option value={provincia} key={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </div> */}
        <StateSelect disabled={!edit} defaultValue={1}>
          <MenuItem value={1}>Seleccione una Provincia</MenuItem>
          {provincias.map((provincia) => (
            <MenuItem value={provincia} key={provincia}>
              {provincia}
            </MenuItem>
          ))}
        </StateSelect>
        <CitySelect disabled={!edit} defaultValue={1}>
          <MenuItem value={1}>Seleccione una Localidad</MenuItem>
        </CitySelect>
        <PostalCodeInput disabled={!edit} placeholder="Código Postal" />
        <MailInput disabled={!edit} placeholder="Mail" />
        <PhoneInput disabled={!edit} placeholder="Teléfono" />
      </DataContainer>
    </BillingContainer>
  );
};

export default Billing;
