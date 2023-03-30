import { useTheme } from "@emotion/react";
import { Button } from "../../ui/Button";
import { Button as ButtonText } from "@mui/material";
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
  };

  const handleConfirmButton = () => {
    setShowModal(false);
  };

  return (
    <TableActionsModal open={showModal}>
      <TableActionsContainer>
        <TableActionsTitle
          variant="h4"
          sx={{
            backgroundColor:
              actionType === "edit"
                ? theme.palette.primary[300]
                : theme.palette.error[500],
          }}
        >
          {actionType === "edit"
            ? `Editar ${type === "users" ? "Usuario" : "Producto"}`
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
                type === "users" ? `al Usuario:` : `el producto:`
              }`}</TableDeleteLine1>
              <TableDeleteLine2>{selectedName}</TableDeleteLine2>
              <TableDeleteLine3>
                Esta acción no se puede deshacer.
              </TableDeleteLine3>
            </TableDeleteParagraph>
          </TableDeleteContainer>
        )}
        <TableButtonsContainer component={"section"}>
          <ButtonText
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
          </ButtonText>
          <Button
            name={actionType === "edit" ? "Guardar" : "Borrar"}
            buttonStyle={actionType === "edit" ? "success" : "error"}
            sx={{
              width: "376px",
            }}
            onClick={handleConfirmButton}
          />
        </TableButtonsContainer>
      </TableActionsContainer>
    </TableActionsModal>
  );
};

export default TableActions;
