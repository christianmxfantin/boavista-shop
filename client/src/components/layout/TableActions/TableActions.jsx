import { useTheme } from "@emotion/react";
// import { Button } from "../../ui/Button";
import { Button } from "@mui/material";
import {
  TableActionsModal,
  TableActionsContainer,
  TableActionsTitle,
  TableEditContainer,
  TableImage,
  TableInputContainer,
  TableNameInput,
  TablePriceInput,
  TableButtonsContainer,
  TableDeleteContainer,
  TableDeleteParagraph,
  TableDeleteLine1,
  TableDeleteLine2,
  TableDeleteLine3,
} from "./TableActions.styles";

const TableActions = ({
  type,
  showModal,
  setShowModal,
  actionType,
  selectedName,
  setSelectedName,
  selectedPrice,
  setSelectedPrice,
}) => {
  const theme = useTheme();

  const handleCancelButton = () => {
    setShowModal(false);
    console.log("Cancel");
  };

  const handleConfirmButton = () => {
    setShowModal(false);
    console.log("Confirm");
  };

  return (
    <TableActionsModal open={showModal}>
      <TableActionsContainer>
        <TableActionsTitle
          variant="h4"
          sx={{
            backgroundColor:
              actionType === "edit" && actionType === "edit-payment"
                ? theme.palette.primary[300]
                : theme.palette.error[500],
          }}
        >
          {actionType === "edit" && actionType === "edit-payment"
            ? `Editar ${
                type === "edit-payment"
                  ? "Tarjeta"
                  : type === "users"
                  ? "Usuario"
                  : "Producto"
              }`
            : "Advertencia"}
        </TableActionsTitle>
        {actionType === "edit" ? (
          <TableEditContainer>
            <TableImage>Avatar</TableImage>
            <TableInputContainer>
              <TableNameInput
                placeholder={`Nombre ${
                  type === "users" ? "de Usuario" : "del Producto"
                }`}
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
              ></TableNameInput>
              {type === "products" && (
                <TablePriceInput
                  placeholder="Precio Unitario"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                />
              )}
            </TableInputContainer>
          </TableEditContainer>
        ) : (
          <TableDeleteContainer>
            <TableDeleteParagraph>
              <TableDeleteLine1>{`Está a punto de borrar ${
                actionType === "delete-account"
                  ? "su cuenta de usuario."
                  : actionType === "delete-payment"
                  ? "la siguiente tarjeta:"
                  : type === "users"
                  ? `al usuario:`
                  : `el producto:`
              }`}</TableDeleteLine1>
              <TableDeleteLine2>{selectedName}</TableDeleteLine2>
              <TableDeleteLine3>
                Esta acción no se puede deshacer.
              </TableDeleteLine3>
            </TableDeleteParagraph>
          </TableDeleteContainer>
        )}
        <TableButtonsContainer component={"section"}>
          <Button
            variant="text"
            sx={{
              width: "376px",
              color:
                actionType === "edit"
                  ? theme.palette.primary[500]
                  : theme.palette.error[500],
              marginRight: theme.spacing(2),
            }}
            onClick={handleCancelButton}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "376px",
              backgroundColor:
                actionType === "edit"
                  ? theme.palette.success[500]
                  : theme.palette.error[500],
              "&:hover": {
                backgroundColor:
                  actionType === "edit"
                    ? theme.palette.success[300]
                    : theme.palette.error[300],
                color:
                  actionType === "edit"
                    ? theme.palette.success[700]
                    : theme.palette.error[700],
              },
            }}
            onClick={handleConfirmButton}
          >
            {actionType === "edit" ? "Guardar" : "Borrar"}
          </Button>
        </TableButtonsContainer>
      </TableActionsContainer>
    </TableActionsModal>
  );
};

export default TableActions;
