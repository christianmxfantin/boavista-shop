import { useEffect, useState } from "react";

const useProvincias = () => {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((response) => response.json())
      .then((data) => {
        const stateNames = data.provincias.map((provincia) => provincia.nombre);
        const stateNamesOrdered = stateNames.sort((a, b) => a.localeCompare(b));
        setProvincias(stateNamesOrdered);
      });
  }, []);

  return provincias;
};

export default useProvincias;
