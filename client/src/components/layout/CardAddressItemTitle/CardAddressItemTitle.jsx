import { useTheme } from "@emotion/react";
import {
  ItemComponentContainer,
  ItemData,
  ItemTitle,
  ItemTitleContainer,
} from "./CardAddressItemTitle.styles";
import ActionButtons from "../ActionButtons/ActionButtons";

const CardAddressItemTitle = ({ data, formType, itemType, setShowAddNew }) => {
  const theme = useTheme();

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
          {`${
            data.typeCard === "credit" ? "Visa Crédito" : "Visa Débito"
          } terminada en ${data.finalNumber}`}
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
