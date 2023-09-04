import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
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
import useProducts from "../../../hooks/useProducts";
import { deletePaymentResponse } from "../../../api/payments";
import { deleteUserResponse } from "../../../api/users";
import { getAddressTypeByIdResponse } from "../../../api/addressesTypes";
import { getCardCompanyByIdResponse } from "../../../api/cardCompanies";
import useAddresses from "../../../hooks/api/useAddresses";

const TableActions = ({ showModal, setShowModal, selectedData }) => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);
  const { updateProduct } = useProducts();
  const { deleteAddress } = useAddresses();

  let actionType = "";
  let data = "";
  if (selectedData !== undefined) {
    ({ actionType, data } = selectedData);
  }

  const [addressType, setAddressType] = useState("");
  const [cardCompany, setCardCompany] = useState("");
  const { register, handleSubmit, reset } = useForm({ mode: "onBlur" });

  useEffect(() => {
    const getData = async () => {
      if (data) {
        try {
          if (actionType === "delete-billing") {
            const addressTypeResponse = await getAddressTypeByIdResponse(
              data.addressTypeId
            );
            setAddressType(addressTypeResponse.data.name);
          }

          if (actionType === "delete-payment") {
            const cardCompanyResponse = await getCardCompanyByIdResponse(
              data.cardCompanyId
            );
            setCardCompany(cardCompanyResponse.data.name);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getData();
  }, [actionType, data, selectedData]);

  const handleCancelButton = () => {
    reset();
    setShowModal(false);
  };

  const onSubmit = async (formValues) => {
    switch (actionType) {
      case "edit-product":
        try {
          const updatedProduct = {
            id: data.id,
            name: formValues.name.trim(),
            price: 500.0,
            stock: 1200,
          };

          await updateProduct(data.id, updatedProduct);
        } catch (error) {
          console.log(error);
        }
        break;

      case "delete-billing":
        // try {
        //   const res = await deleteAddressResponse(data.id);
        //   if (res.status === 204) {
        //     //actualizar listado de direcciones
        //     // getAddresses()
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
        deleteAddress(data.id, user.id);
        break;

      case "delete-payment":
        try {
          const res = await deletePaymentResponse(data.id);
          if (res.status === 204) {
            // window.location.reload();
            //actualizar el listado de direcciones
          }
        } catch (error) {
          console.log(error);
        }

        break;

      case "delete-account":
        try {
          const res = await deleteUserResponse(user.id);
          if (res.status === 204) {
            //hacer logout de user como esta en Navbar
            // window.location.reload();
            //actualizar el listado de direcciones
          }
        } catch (error) {
          console.log(error);
        }
        break;

      default:
    }

    setShowModal(false);
    reset();
  };

  return (
    <TableActionsModal open={showModal}>
      <TableActionsContainer
        component={"form"}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
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
            <TableImage>Imágen del Producto</TableImage>
            <TableInputContainer>
              {actionType === "edit-user" && (
                <>
                  <TableNameInput
                    placeholder="Nombre de Usuario"
                    value={data.name}
                  ></TableNameInput>
                  <TableNameInput />
                </>
              )}
              {actionType === "edit-product" && (
                <>
                  <TableNameInput
                    defaultValue={data.name}
                    name="name"
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder="Nombre del Producto"
                    required
                    {...register("name", {
                      required: true,
                      // pattern: validations.names.pattern,
                    })}
                    // error={!!errors.name}
                    // helperText={
                    //   watch("name")
                    //     ? errors.name && validations.names.errorDataNotValid
                    //     : errors.name && validations.errorEmptyField
                    // }
                  />
                  <TablePriceInput
                    placeholder="Precio Unitario"
                    defaultValue={data.price}
                  />
                </>
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
                  ? addressType
                  : actionType === "delete-payment"
                  ? `${cardCompany} terminada en ${data.finalNumber}`
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
            type="submit"
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
          >
            {actionType === "edit-product" ? "Guardar" : "Borrar"}
          </Button>
        </TableButtonsContainer>
      </TableActionsContainer>
    </TableActionsModal>
  );
};

export default TableActions;
