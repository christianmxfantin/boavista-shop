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
import { getAddressTypeByIdResponse } from "../../../api/addressesTypes";
import { responseError, statusErrors } from "../../../utils/toastErrors";

const CardAddressItemTitle = ({
  data,
  formType,
  itemType,
  setShowAddNew,
  setEditID,
  setEditBilling,
  setAddresses,
}) => {
  const theme = useTheme();
  const [addressType, setAddressType] = useState([]);
  const [cardCompany, setCardCompany] = useState([]);

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
        responseError(error);
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
          formType={formType}
          database={{
            typeData: itemType === "address" ? "billings" : "cards",
            data,
          }}
          setShowAddNew={setShowAddNew}
          setEditID={setEditID}
          setEditBilling={setEditBilling}
          setAddresses={setAddresses}
        />
      </ItemComponentContainer>
      <ToastContainer />
    </>
  );
};

export default CardAddressItemTitle;
