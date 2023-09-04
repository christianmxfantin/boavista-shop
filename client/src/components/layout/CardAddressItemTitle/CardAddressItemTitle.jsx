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
import { getCardCompanyByIdResponse } from "../../../api/cardCompanies";
import { ErrorsMessages } from "../../../utils/toastMessages";
import { toastColor } from "../../../utils/toastOptions";
import { getAddressTypeByIdResponse } from "../../../api/addressesTypes";

const CardAddressItemTitle = ({
  data,
  formType,
  itemType,
  setShowAddNew,
  setEditID,
  setEditBilling,
}) => {
  const theme = useTheme();
  const [addressType, setAddressType] = useState([]);
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
        if (itemType === "address") {
          const address = await getAddressTypeByIdResponse(data.addressTypeId);
          setAddressType(address.data.name);
        }
        if (itemType === "card") {
          const cardName = await getCardCompanyByIdResponse(data.cardCompanyId);
          setCardCompany(cardName.data.name);
        }
      } catch (error) {
        statusErrors(error);

        if (!error.response) {
          toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
          return;
        }
      }
    };
    getData();
  }, [itemType, data.addressTypeId, data.cardCompanyId]);

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
              {addressType}
            </ItemTitle>
            <ItemData variant="subtitle2">{data.address}</ItemData>
          </ItemTitleContainer>
        ) : (
          <ItemTitle
            sx={{
              marginLeft: formType !== "profile" ? 0 : theme.spacing(2),
            }}
          >
            {`${cardCompany} terminada en ${data.finalNumber}`}
          </ItemTitle>
        )}
        <ActionButtons
          database={{
            typeData: itemType === "address" ? "billings" : "cards",
            data,
          }}
          setShowAddNew={setShowAddNew}
          setEditID={setEditID}
          setEditBilling={setEditBilling}
        />
      </ItemComponentContainer>
      <ToastContainer />
    </>
  );
};

export default CardAddressItemTitle;
