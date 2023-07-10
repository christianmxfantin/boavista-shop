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

const TableActions = ({ showModal, setShowModal, selectedData }) => {
  const { actionType, data } = selectedData;
  console.log("en table: ", selectedData);

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
              actionType === "edit-product"
                ? theme.palette.primary[300]
                : theme.palette.error[500],
          }}
        >
          {actionType === "edit-product" ? "Editar Producto" : "Advertencia"}
        </TableActionsTitle>
        {actionType === "edit-product" ? (
          <TableEditContainer>
            <TableImage>Avatar</TableImage>
            <TableInputContainer>
              <TableNameInput
                placeholder={`Nombre ${
                  actionType === "edit-product" ? "del Producto" : "de Usuario"
                }`}
                value={data.name}
                // onChange={(e) => setSelectedData(e.target.value)}
              ></TableNameInput>
              {actionType === "edit-products" && (
                <TablePriceInput
                  placeholder="Precio Unitario"
                  value={data.price}
                  // onChange={(e) => setSelectedPrice(e.target.value)}
                />
              )}
            </TableInputContainer>
          </TableEditContainer>
        ) : (
          <TableDeleteContainer>
            <TableDeleteParagraph>
              <TableDeleteLine1>{`Está por borrar ${
                actionType === "delete-billing"
                  ? "la siguiente dirección:"
                  : actionType === "delete-payment"
                  ? "la siguiente tarjeta:"
                  : actionType === "delete-product"
                  ? "el siguiente producto:"
                  : actionType === "delete-user"
                  ? "el siguiente usuario:"
                  : "su cuenta de usuario."
              }`}</TableDeleteLine1>
              <TableDeleteLine2>
                {actionType === "delete-billing"
                  ? data.type
                  : actionType === "delete-payment"
                  ? `Visa débito terminada en ${data.finalNumber}`
                  : actionType === "delete-product"
                  ? data.name
                  : actionType === "delete-user"
                  ? data.name
                  : data}
              </TableDeleteLine2>
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
