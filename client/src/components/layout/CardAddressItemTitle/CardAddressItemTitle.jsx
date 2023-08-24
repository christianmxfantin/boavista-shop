import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ItemComponentContainer,
  ItemData,
  ItemTitle,
  ItemTitleContainer,
} from "./CardAddressItemTitle.styles";
import ActionButtons from "../ActionButtons/ActionButtons";
import { getPaymentsTypesResponse } from "../../../api/paymentsType";
import { getCardCompaniesResponse } from "../../../api/cardCompanies";
import { ErrorsMessages } from "../../../utils/toastMessages";
import { toastColor } from "../../../utils/toastOptions";

const CardAddressItemTitle = ({ data, formType, itemType, setShowAddNew }) => {
  const theme = useTheme();
  const [paymentType, setPaymentType] = useState([]);
  const [cardCompany, setCardCompany] = useState([]);

  const statusErrors = (error) => {
    //client error
    if (error.response.status > 399 || error.response.status < 500) {
      toast.error(ErrorsMessages.CLIENT_STATUS, toastColor("error"));
      return;
    }
    //server error
    if (error.response.status > 499) {
      toast.error(ErrorsMessages.SERVER_STATUS, toastColor("error"));
      return;
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const type = await getPaymentsTypesResponse();
        setPaymentType(type.data);
        const name = await getCardCompaniesResponse();
        setCardCompany(name.data);
      } catch (error) {
        statusErrors(error);

        if (!error.response) {
          toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
          return;
        }
      }
    };
    getData();
  }, []);

  const typeCard = (paymentTypeId) => {
    const card = paymentType.find((data) => data.id === paymentTypeId);
    return card && card.name;
  };

  const cardName = (cardCompanyId) => {
    const card = cardCompany.find((data) => data.id === cardCompanyId);
    return card && card.name;
  };

  return (
    <>
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
            {`${cardName(data.cardCompanyId)} ${typeCard(
              data.paymentTypeId
            )} terminada en ${data.finalNumber}`}
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
      <ToastContainer />
    </>
  );
};

export default CardAddressItemTitle;
