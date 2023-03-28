import { useTheme } from "@emotion/react";
import { Button } from "../../ui/Button";
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
} from "./TableActions.styles";

const TableActions = ({
  data,
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

  const handleSaveButton = () => {
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
                ? theme.palette.primary[200]
                : theme.palette.error[500],
          }}
        >
          {actionType === "edit" ? "Editar" : "Advertencia"}
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
              {`Está a punto de borrar ${
                type === "users"
                  ? `al Usuario: ${selectedName}`
                  : `el producto: ${selectedName}`
              }. Esta acción no se puede deshacer.`}
            </TableDeleteParagraph>
          </TableDeleteContainer>
        )}
        <TableButtonsContainer component={"section"}>
          <Button
            name="Guardar"
            buttonStyle="success"
            sx={{
              width: "376px",
              marginRight: theme.spacing(2),
            }}
            onClick={handleSaveButton}
          />
          <Button
            name="Cancelar"
            buttonStyle="error"
            sx={{
              width: "376px",
            }}
            onClick={handleCancelButton}
          />
        </TableButtonsContainer>
      </TableActionsContainer>
    </TableActionsModal>
  );
};

export default TableActions;
