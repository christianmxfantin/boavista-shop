import { useTheme } from "@emotion/react";
import {
  ConfirmationDataContainer,
  DataTitleContainer,
  DataTitle,
  DataEdit,
  DataInfoContainer,
} from "./ConfirmationData.styles";
import { Icon as EditIcon } from "../../../ui/Icon";
import Billing from "../../Billing/Billing";
import { useState } from "react";

const ConfirmationData = ({ type, data }) => {
  const theme = useTheme();
  const [isEditVisible, setIsEditVisible] = useState(true);
  const [editConfirmationData, setEditConfirmationData] = useState(false);
  // console.log(data);
  // const dataGood = Object.values(data);

  const handleEdit = () => {
    setEditConfirmationData(true);
    setIsEditVisible(false);
  };

  return (
    <ConfirmationDataContainer>
      <DataTitleContainer>
        <DataTitle variant="h6">{type}</DataTitle>
        <DataEdit sx={{ visibility: isEditVisible ? "visible" : "hidden" }}>
          <EditIcon
            name="Edit-Data"
            size={30}
            color={theme.palette.primary[500]}
            onClick={handleEdit}
          />
        </DataEdit>
      </DataTitleContainer>
      <DataInfoContainer>
        {Object.keys(data)[0] === "names" ? (
          <Billing
            formType="confirmation"
            confirmationData={data}
            editConfirmationData={editConfirmationData}
            setEditConfirmationData={setEditConfirmationData}
            setIsEditVisible={setIsEditVisible}
          />
        ) : Object.keys(data)[0] === "shippingData" ? (
          <Billing
            formType="shipping-confirmation"
            confirmationData={data}
            editConfirmationData={editConfirmationData}
            setEditConfirmationData={setEditConfirmationData}
            setIsEditVisible={setIsEditVisible}
          />
        ) : (
          //buscar en la BD el ID y traer el title
          <div>Visa Terminada en 5432</div>
        )}
      </DataInfoContainer>
    </ConfirmationDataContainer>
  );
};

export default ConfirmationData;
