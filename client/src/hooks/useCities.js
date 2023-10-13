import { useEffect, useState } from "react";

const useCities = ({ stateData }) => {
  const [cities, setCities] = useState([]);
  const maxResults = 5000;

  useEffect(() => {
    if (stateData) {
      fetch(
        `https://apis.datos.gob.ar/georef/api/localidades?provincia=${stateData}&max=${maxResults}`
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
          const cityNamesFiltered = cityNames.filter((name) => {
            return name.toUpperCase() !== "CIUDAD DE BUENOS AIRES";
          });
          const cityNamesOrdered = cityNamesFiltered.sort((a, b) =>
            a.localeCompare(b)
          );
          setCities(cityNamesOrdered);
        })
        .catch((error) => {
          console.error("Error al obtener los datos de la API:", error);
        });
    }
  }, [stateData]);

  return cities;
};

export default useCities;
