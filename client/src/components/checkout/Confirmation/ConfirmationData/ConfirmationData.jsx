import { useEffect, useState } from "react";
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
import CardAddress from "../../../layout/CardAddress/CardAddress";

const ConfirmationData = ({ type, data }) => {
  const theme = useTheme();
  const [isEditVisible, setIsEditVisible] = useState(true);
  const [editConfirmationData, setEditConfirmationData] = useState(false);

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
        {Object.keys(data)[0] === "addressType" ? (
          <Billing
            formType="billing-confirmation"
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
          <CardAddress
            formType="payment-confirmation"
            itemType="card"
            confirmationData={data}
          />
        )}
      </DataInfoContainer>
    </ConfirmationDataContainer>
  );
};

export default ConfirmationData;
