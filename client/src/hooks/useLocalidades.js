import { useEffect, useState } from "react";

const useLocalidades = ({ provincia }) => {
  const [localidades, setLocalidades] = useState([]);
  const maxResults = 5000;

  useEffect(() => {
    if (provincia) {
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
          setLocalidades(cityNamesOrdered);
        })
        .catch((error) => {
          console.error("Error al obtener los datos de la API:", error);
        });
    }
  }, [provincia]);

  return localidades;
};

export default useLocalidades;
