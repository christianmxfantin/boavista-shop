import { useState } from "react";
import {
  ConfirmationDataContainer,
  DataTitleContainer,
  DataTitle,
  DataInfoContainer,
} from "./ConfirmationData.styles";
import Billing from "../../Billing/Billing";
import CardAddress from "../../../layout/CardAddress/CardAddress";
import { Typography } from "@mui/material";

const ConfirmationData = ({ type, data, setStepperData }) => {
  const [isEditVisible, setIsEditVisible] = useState(true);
  const [editConfirmationData, setEditConfirmationData] = useState(false);

  const handleEdit = () => {
    setEditConfirmationData(true);
    setIsEditVisible(false);
  };

  return (
    <ConfirmationDataContainer>
      <DataTitleContainer>
        {type !== "Misma dirección" && (
          <DataTitle variant="h6">{type}</DataTitle>
        )}
      </DataTitleContainer>
      <DataInfoContainer>
        {type === "Misma dirección" ? (
          <Typography>{data}</Typography>
        ) : data.hasOwnProperty("addressType") ? (
          <Billing
            formType="billing-confirmation"
            confirmationData={data}
            setStepperData={setStepperData}
            editConfirmationData={editConfirmationData}
            setEditConfirmationData={setEditConfirmationData}
            setIsEditVisible={setIsEditVisible}
          />
        ) : data.hasOwnProperty("shippingData") ? (
          <Billing
            formType="shipping-confirmation"
            confirmationData={data}
            setStepperData={setStepperData}
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
