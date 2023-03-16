import { useState, useEffect } from "react";
import {
  AddressSearchContainer,
  StateSelect,
  CitySelect,
} from "./AddressSearch.styles";
import { MenuItem } from "@mui/material";

const AddressSearch = ({ disabled, visible }) => {
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
        const cityNames = data.localidades.map((localidades) => {
          const name = localidades.nombre;
          const pronouns = ["los", "de"];
          const capitalized = name
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
        setDepartamentos(cityNamesOrdered);
      });
  };

  return (
    <AddressSearchContainer sx={{ visibility: visible ? "visible" : "hidden" }}>
      <StateSelect
        disabled={disabled}
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
      <CitySelect disabled={disabled} defaultValue={1}>
        <MenuItem disabled value={1}>
          Seleccione una Localidad
        </MenuItem>
        {departamentos.map((departamento, index) => (
          <MenuItem value={departamento} key={index}>
            {departamento}
          </MenuItem>
        ))}
      </CitySelect>
    </AddressSearchContainer>
  );
};

export default AddressSearch;
