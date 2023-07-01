import { useTheme } from "@emotion/react";
import {
  ConfirmationDataContainer,
  DataTitleContainer,
  DataTitle,
  DataEdit,
  DataInfoContainer,
} from "./ConfirmationData.styles";
import { Icon as EditIcon } from "../../../ui/Icon";

const ConfirmationData = ({ type, data }) => {
  const theme = useTheme();
  const dataGood = Object.values(data);

  // console.log(dataGood);

  const handleEdit = () => {
    //Editar Información
    console.log("Editar Información");
  };

  return (
    <ConfirmationDataContainer>
      <DataTitleContainer>
        <DataTitle variant="h6">{type}</DataTitle>
        <DataEdit>
          <EditIcon
            name="Edit-Data"
            size={30}
            color={theme.palette.primary[500]}
            onClick={handleEdit}
          />
        </DataEdit>
      </DataTitleContainer>
      {dataGood.map((data) => (
        <DataInfoContainer>{data}</DataInfoContainer>
      ))}
    </ConfirmationDataContainer>
  );
};

export default ConfirmationData;
