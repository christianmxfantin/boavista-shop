import { Button, Typography } from "@mui/material";
import {
  TableActionsModal,
  TableActionsContainer,
} from "./TableActions.styles";

const TableActions = ({ type, showModal, setShowModal, actionType }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <TableActionsModal open={showModal}>
      <TableActionsContainer>
        {actionType === "edit" && (
          <Typography variant="h5">Editar {type}</Typography>
        )}
        {actionType === "delete" && (
          <Typography variant="h5">Borrar {type}</Typography>
        )}
        <Button variant="contained" onClick={handleClose}>
          Cerrar
        </Button>
      </TableActionsContainer>
    </TableActionsModal>
  );
};

export default TableActions;
