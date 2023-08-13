import { useState } from "react";
import { useTheme } from "@emotion/react";
import { ActionButtonsContainer } from "./ActionButtons.styles";
import TableActions from "../TableActions/TableActions";
import { Icon as EditIcon, Icon as DeleteIcon } from "../../ui/Icon";

const ActionButtons = ({ database, setShowAddNew }) => {
  const { typeData, data } = database;

  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const handleEdit = (data) => {
    //TIENE QUE ENVIAR EL ID CON LA DATA
    switch (typeData) {
      case "billings":
        setShowAddNew(true);
        break;
      case "cards":
        setShowAddNew(true);
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
      case "accounts":
        setSelectedData({ actionType: "delete-account", data });
        break;
      default:
      //coso
    }
    setShowModal(true);
  };

  return (
    <>
      <ActionButtonsContainer>
        <EditIcon
          name="Edit-Data"
          size={30}
          color={theme.palette.primary[500]}
          sx={{ marginRight: theme.spacing(1) }}
          onClick={() => handleEdit(data)}
        />
        <DeleteIcon
          name="Delete-Data"
          size={30}
          color={theme.palette.error[500]}
          onClick={() => handleDelete(data)}
        />
      </ActionButtonsContainer>
      <TableActions
        showModal={showModal}
        setShowModal={setShowModal}
        selectedData={selectedData}
      />
    </>
  );
};

export default ActionButtons;
