import { useState } from "react";
import { useTheme } from "@emotion/react";
import { ActionButtonsContainer } from "./ActionButtons.styles";
import TableActions from "../TableActions/TableActions";
import { Icon as EditIcon, Icon as DeleteIcon } from "../../ui/Icon";

const ActionButtons = ({
  formType,
  database,
  setShowAddNew,
  setEditID,
  setEditBilling,
  setAddresses,
  updateData,
}) => {
  const { typeData, data } = database;

  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const handleEdit = (data) => {
    //TIENE QUE ENVIAR EL ID CON LA DATA
    switch (typeData) {
      case "billings":
        setEditID(data.id);
        setEditBilling(true);
        setShowAddNew(true);
        break;
      case "users":
        setSelectedData({ actionType: "edit-user", data });
        setShowModal(true);
        break;
      case "products":
        setSelectedData({ actionType: "edit-product", data });
        setShowModal(true);
        break;
      default:
    }
  };

  const handleDelete = (data) => {
    //TIENE QUE ENVIAR SOLO EL ID PARA BORRAR
    switch (typeData) {
      case "billings":
        setSelectedData({ actionType: "delete-billing", data });
        break;
      case "cards":
        setSelectedData({ actionType: "delete-payment", data });
        break;
      case "products":
        setSelectedData({ actionType: "delete-product", data });
        break;
      case "users":
        setSelectedData({ actionType: "delete-user", data });
        break;
      default:
      //coso
    }
    setShowModal(true);
  };

  return (
    <>
      <ActionButtonsContainer>
        {typeData !== "cards" &&
          typeData !== "products" &&
          formType !== "shipping" && (
            <EditIcon
              name="Edit-Data"
              size={30}
              color={theme.palette.primary[500]}
              sx={{ marginRight: theme.spacing(1) }}
              onClick={() => handleEdit(data)}
            />
          )}
        {formType !== "shipping" &&
          formType !== "payment" &&
          formType !== "payment-confirmation" && (
            <DeleteIcon
              name="Delete-Data"
              size={30}
              color={theme.palette.error[500]}
              onClick={() => handleDelete(data)}
            />
          )}
      </ActionButtonsContainer>
      <TableActions
        showModal={showModal}
        setShowModal={setShowModal}
        selectedData={selectedData}
        setAddresses={setAddresses}
        updateData={updateData}
      />
    </>
  );
};

export default ActionButtons;
