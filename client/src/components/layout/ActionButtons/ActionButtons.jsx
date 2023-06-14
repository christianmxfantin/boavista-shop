import { useState } from "react";
import { useTheme } from "@emotion/react";
import { ActionButtonsContainer } from "./ActionButtons.styles";
import TableActions from "../TableActions/TableActions";
import { Icon as EditIcon, Icon as DeleteIcon } from "../../ui/Icon";

const ActionButtons = ({ data, type }) => {
  const theme = useTheme();

  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleEdit = (name, price) => {
    //TIENE QUE ENVIAR EL ID CON LA DATA
    setActionType("edit");
    setSelectedName(name);
    setSelectedPrice(price);
    setShowModal(true);
  };

  const handleDelete = (data) => {
    //TIENE QUE ENVIAR SOLO EL ID PARA BORRAR
    if (type === "card") {
      setActionType("delete-payment");
      setSelectedName(data.id);
    } else {
      setActionType("delete");
      setSelectedName(data.id);
    }
    setShowModal(true);
  };

  return (
    <>
      <ActionButtonsContainer>
        {type !== "card" && (
          <EditIcon
            name="Edit-Data"
            size={30}
            color={theme.palette.primary[500]}
            sx={{ marginRight: theme.spacing(1) }}
            actionType="edit"
            onClick={() => handleEdit(data.name, data.price)}
          />
        )}
        <DeleteIcon
          name="Delete-Data"
          size={30}
          color={theme.palette.error[500]}
          actionType="delete"
          onClick={() => handleDelete(data)}
        />
      </ActionButtonsContainer>
      <TableActions
        type={type}
        showModal={showModal}
        setShowModal={setShowModal}
        actionType={actionType}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
    </>
  );
};

export default ActionButtons;
