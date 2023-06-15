import { useState, useEffect, useRef } from "react";
import {
  AddressSearchContainer,
  StateSelect,
  CitySelect,
  StateSelectContainer,
  CitySelectContainer,
} from "./AddressSearch.styles";
import { FormHelperText, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

const AddressSearch = ({
  formType,
  disabled,
  errors,
  control,
  resetAddress,
}) => {
  const stateRef = useRef();
  const cityRef = useRef();
  const [provincias, setProvincias] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    if (resetAddress) {
      resetAddressFields();
    }

    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((response) => response.json())
      .then((data) => {
        const stateNames = data.provincias.map((provincia) => provincia.nombre);
        const stateNamesOrdered = stateNames.sort((a, b) => a.localeCompare(b));
        setProvincias(stateNamesOrdered);
      });
  }, [resetAddress]);

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

  const resetAddressFields = () => {
    stateRef.current.childNodes[0].textContent = "Selecciona tu Provincia";
    cityRef.current.childNodes[0].textContent = "Selecciona tu Localidad";
  };

  return (
    <AddressSearchContainer>
      <StateSelectContainer>
        <Controller
          name="state"
          control={control}
          rules={{ required: true }}
          defaultValue={1}
          render={({ field }) => (
            <>
              <StateSelect
                {...field}
                ref={stateRef}
                fullWidth
                disabled={formType === "billing" ? disabled : false}
                defaultValue={1}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  handleStateChange(e);
                }}
                error={!!errors.state}
              >
                <MenuItem disabled value={1}>
                  Selecciona tu Provincia
                </MenuItem>
                {provincias.map((provincia, index) => (
                  <MenuItem value={provincia} key={index}>
                    {provincia}
                  </MenuItem>
                ))}
              </StateSelect>
              {console.log(errors)}
              <FormHelperText error={!!errors.state}>
                {errors.state && field.value !== "Seleccione una Provincia"
                  ? "Debe seleccionar una Provincia para continuar"
                  : ""}
              </FormHelperText>
            </>
          )}
        />
      </StateSelectContainer>
      <CitySelectContainer>
        <Controller
          name="city"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <CitySelect
                {...field}
                ref={cityRef}
                fullWidth
                disabled={formType === "billing" ? disabled : false}
                defaultValue={1}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                error={!!errors.city}
              >
                <MenuItem disabled value={1}>
                  Selecciona tu Localidad
                </MenuItem>
                {departamentos.map((departamento, index) => (
                  <MenuItem value={departamento} key={index}>
                    {departamento}
                  </MenuItem>
                ))}
              </CitySelect>
              <FormHelperText error={!!errors.city}>
                {errors.city && field.value !== "Seleccione una Localidad"
                  ? "Debe seleccionar una Localidad para continuar"
                  : ""}
              </FormHelperText>
            </>
          )}
        />
      </CitySelectContainer>
    </AddressSearchContainer>
  );
};

export default AddressSearch;
