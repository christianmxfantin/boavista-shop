import { useTheme } from "@emotion/react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  DeleteIconContainer,
  DeleteOrder,
  OrderID,
  OrderItemContainer,
  OrderTitle,
} from "./OrderItem.styles";
import { Icon } from "../../ui/Icon";
import { useState } from "react";

const OrderItem = ({ order }) => {
  const { id, createdAt } = order;
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const dateSplit = createdAt.split("T")[0];
  const [año, mes, dia] = dateSplit.split("-");
  const formattedDate = `${dia}/${mes}/${año}`;

  const handleClickDelete = () => {
    setOpenDialog(true);
  };

  const handleCancelDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <OrderItemContainer>
        <OrderID>
          <Typography sx={{ fontWeight: "bold" }}>{id}</Typography>
        </OrderID>
        <OrderTitle>{`Orden realizada el ${formattedDate}`}</OrderTitle>
        <DeleteOrder>
          <DeleteIconContainer onClick={handleClickDelete}>
            <Icon
              name="Delete-Data"
              size={30}
              color={theme.palette.error[500]}
            />
          </DeleteIconContainer>
        </DeleteOrder>
      </OrderItemContainer>
      <Dialog open={openDialog}>
        <DialogTitle
          sx={{ textAlign: "center", color: theme.palette.error[500] }}
        >
          Cancelar Orden de Compra
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ color: theme.palette.primary[500] }}>
            {`Estas a punto de cancelar la Orden de Compra: ${id}`}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleCancelDialog}>Cancelar</Button>
          <Button onClick={handleSaveDialog}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderItem;
