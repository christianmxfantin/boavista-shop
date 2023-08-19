import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  ItemComponentContainer,
  ItemData,
  ItemTitle,
  ItemTitleContainer,
} from "./CardAddressItemTitle.styles";
import ActionButtons from "../ActionButtons/ActionButtons";
import { getPaymentsTypesResponse } from "../../../api/paymentsType";

const CardAddressItemTitle = ({ data, formType, itemType, setShowAddNew }) => {
  const theme = useTheme();
  const [paymentsType, setPaymentsType] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getPaymentsTypesResponse();
        setPaymentsType(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const typeCard = (paymentTypeId) => {
    console.log(paymentTypeId);
    const card = paymentsType.find((data) => data.id === paymentTypeId);
    return card.name;
  };

  return (
    <ItemComponentContainer>
      {itemType === "address" ? (
        <ItemTitleContainer>
          <ItemTitle
            sx={{
              marginLeft: theme.spacing(2),
            }}
          >
            {data.type}
          </ItemTitle>
          <ItemData variant="subtitle2">{data.address}</ItemData>
        </ItemTitleContainer>
      ) : (
        <ItemTitle
          sx={{
            marginLeft: formType !== "profile" ? 0 : theme.spacing(2),
          }}
        >
          {`${data.companyCard} ${typeCard(data.paymentTypeId)} terminada en ${
            data.finalNumber
          }`}
        </ItemTitle>
      )}
      <ActionButtons
        database={{
          typeData: itemType === "address" ? "billings" : "cards",
          data,
        }}
        setShowAddNew={setShowAddNew}
      />
    </ItemComponentContainer>
  );
};

export default CardAddressItemTitle;
