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
import { Typography } from "@mui/material";

const ConfirmationData = ({ type, data, setStepperData }) => {
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
        {type !== "Misma dirección" && (
          <DataTitle variant="h6">{type}</DataTitle>
        )}
        {(data.hasOwnProperty("addressType") ||
          data.hasOwnProperty("shippingData")) && (
          <DataEdit sx={{ visibility: isEditVisible ? "visible" : "hidden" }}>
            <EditIcon
              name="Edit-Data"
              size={30}
              color={theme.palette.primary[500]}
              onClick={handleEdit}
            />
          </DataEdit>
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
