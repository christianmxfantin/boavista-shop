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
  // const [changeSelect, setChangeSelect] = useState(false);

  const [provincias, setProvincias] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((response) => response.json())
      .then((data) => {
        const stateNames = data.provincias.map((provincia) => provincia.nombre);
        const stateNamesOrdered = stateNames.sort((a, b) => a.localeCompare(b));
        setProvincias(stateNamesOrdered);
      });
  }, []);

  const handleStateChange = (e) => {
    const provincia = e.target.value;
    const maxResults = 5000;
    fetch(
      `https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&max=${maxResults}`
    )
      .then((response) => response.json())
      .then((data) => {
        // const totalResults = data.metadata.total;
        console.log(data);
        const cityNames = data.localidades.map((localidades) => {
          const nombre = localidades.nombre;
          const pronouns = ["los", "de"];
          const capitalized = nombre
            .split(" ")
            .map((word) =>
              pronouns.includes(word.toLowerCase())
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");
          return capitalized;
        });
        const cityNamesFiltered = cityNames.filter((nombre) => {
          return nombre.toUpperCase() !== "CIUDAD DE BUENOS AIRES";
        });
        const cityNamesOrdered = cityNamesFiltered.sort((a, b) =>
          a.localeCompare(b)
        );
        console.log(cityNamesOrdered);
        setDepartamentos(cityNamesOrdered);
      });
  };

  const handleEdit = () => {
    setEdit(true);
    // console.log(nameInput);
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
        <StateSelect
          disabled={!edit}
          defaultValue={1}
          onChange={handleStateChange}
        >
          <MenuItem disabled value={1}>
            Seleccione una Provincia
          </MenuItem>
          {provincias.map((provincia, index) => (
            <MenuItem value={provincia} key={index}>
              {provincia}
            </MenuItem>
          ))}
        </StateSelect>
        <CitySelect disabled={!edit} defaultValue={1}>
          <MenuItem disabled value={1}>
            Seleccione una Localidad
          </MenuItem>
          {departamentos.map((departamento, index) => (
            <MenuItem value={departamento} key={index}>
              {departamento}
            </MenuItem>
          ))}
        </CitySelect>
        <PostalCodeInput disabled={!edit} placeholder="Código Postal" />
        <MailInput disabled={!edit} placeholder="Mail" />
        <PhoneInput disabled={!edit} placeholder="Teléfono" />
      </DataContainer>
    </BillingContainer>
  );
};

export default Billing;
