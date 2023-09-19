import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { Avatar, Button, Tooltip } from "@mui/material";
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
  TableStockInput,
  TableNamesInput,
  TableSurnamesInput,
  TableEmailInput,
} from "./TableActions.styles";
import useProducts from "../../../hooks/api/useProducts";
import { deleteUserResponse } from "../../../api/users";
import { getAddressTypeByIdResponse } from "../../../api/addressesTypes";
import { getCardCompanyByIdResponse } from "../../../api/cardCompanies";
import useAddresses from "../../../hooks/api/useAddresses";
import usePayments from "../../../hooks/api/usePayments";
import useAuth from "../../../hooks/useAuth";
import { unsetUser } from "../../../reducers/auth";
import UploadImage from "../UploadImage/UploadImage";

const TableActions = ({ showModal, setShowModal, selectedData, typeData }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { updateProduct } = useProducts();
  const { setAddresses, deleteAddress } = useAddresses();
  const { setPayments, deletePayment } = usePayments();
  const { logout } = useAuth();

  let actionType = "";
  let data = "";
  if (selectedData !== undefined) {
    ({ actionType, data } = selectedData);
  }

  const [addressType, setAddressType] = useState("");
  const [cardCompany, setCardCompany] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [productImage, setProductImage] = useState("");
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

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

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
        try {
          await deleteAddress(data.id, user.id);
          setAddresses((prevAddresses) =>
            prevAddresses.filter((address) => address.id !== data.id)
          );
        } catch (error) {
          console.error(error);
        }
        break;

      case "delete-payment":
        try {
          await deletePayment(data.id, user.id);
          setPayments((prevPayments) =>
            prevPayments.filter((payment) => payment.id !== data.id)
          );
        } catch (error) {
          console.error(error);
        }
        break;

      case "delete-account":
        try {
          const res = await deleteUserResponse(user.id);
          if (res.status === 204) {
            dispatch(unsetUser());
            logout();
            navigate("/", { replace: true });
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
            color:
              (typeData === "users" || typeData === "products") &&
              theme.palette.secondary[50],
            backgroundColor:
              typeData === "users" || typeData === "products"
                ? theme.palette.secondary[900]
                : actionType === "edit-user" || actionType === "edit-product"
                ? theme.palette.primary[300]
                : theme.palette.error[500],
          }}
        >
          {typeData === "users"
            ? "Agregar Usuario"
            : typeData === "products"
            ? "Agregar Producto"
            : actionType === "edit-user"
            ? "Editar Usuario"
            : actionType === "edit-product"
            ? "Editar Producto"
            : "Advertencia"}
        </TableActionsTitle>
        {typeData === "users" ||
        actionType === "edit-user" ||
        typeData === "products" ||
        actionType === "edit-product" ? (
          <TableEditContainer>
            <Tooltip
              title={
                productImage && "Haz clic nuevamente para añadir más imágenes"
              }
            >
              <TableImage
                sx={{
                  backgroundColor:
                    typeData === "users" || typeData === "products"
                      ? theme.palette.secondary[900]
                      : theme.palette.primary[300],
                  color: theme.palette.secondary.A100,
                }}
                onClick={handleOpenDialog}
              >
                {actionType === "edit-user" && (
                  // <Avatar
                  //   alt="Avatar del Usuario"
                  //   src={data.avatarURL}
                  //   sx={{
                  //     width: "150px",
                  //     height: "150px",
                  //   }}
                  // />
                  <img src={data.avatarURL} alt="Imágen del Usuario" />
                )}
                {productImage ? (
                  <>
                    <img
                      src={productImage}
                      alt={`Imágen del ${
                        actionType === "edit-user" ? "Usuario" : "Producto"
                      }`}
                    />
                  </>
                ) : (
                  <p>Haz clic aquí para añadir una imágen</p>
                )}
              </TableImage>
            </Tooltip>
            <UploadImage
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
              formType="product"
              setProductImage={setProductImage}
            />
            <TableInputContainer>
              {(typeData === "users" || actionType === "edit-user") && (
                <>
                  <TableNamesInput
                    placeholder="Nombres del Usuario"
                    defaultValue={data.names}
                  />
                  <TableSurnamesInput
                    placeholder="Apellidos del Usuario"
                    defaultValue={data.surnames}
                  />
                  <TableEmailInput
                    placeholder="Email del Usuario"
                    defaultValue={data.email}
                  />
                </>
              )}
              {(typeData === "products" || actionType === "edit-product") && (
                <>
                  <TableNameInput
                    defaultValue={
                      actionType === "edit-user" ? data.names : data.name
                    }
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
                    defaultValue={actionType && data.price}
                  />
                  <TableStockInput
                    placeholder="Stock"
                    defaultValue={actionType && data.stock}
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
                  ? `${data.names} ${data.surnames}`
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
                typeData === "users" || typeData === "products"
                  ? theme.palette.secondary[900]
                  : actionType === "edit-user" || actionType === "edit-product"
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
                typeData === "users" || typeData === "products"
                  ? theme.palette.secondary[900]
                  : actionType === "edit-user" || actionType === "edit-product"
                  ? theme.palette.primary[500]
                  : theme.palette.error[500],
              "&:hover": {
                backgroundColor:
                  typeData === "users" || typeData === "products"
                    ? theme.palette.secondary[100]
                    : actionType === "edit-user" ||
                      actionType === "edit-product"
                    ? theme.palette.primary[300]
                    : theme.palette.error[300],
                color:
                  typeData === "users" || typeData === "products"
                    ? theme.palette.secondary[700]
                    : actionType === "edit-user" ||
                      actionType === "edit-product"
                    ? theme.palette.primary[700]
                    : theme.palette.error[700],
              },
            }}
          >
            {typeData === "users" ||
            typeData === "products" ||
            actionType === "edit-user" ||
            actionType === "edit-product"
              ? "Guardar"
              : "Borrar"}
          </Button>
        </TableButtonsContainer>
      </TableActionsContainer>
    </TableActionsModal>
  );
};

export default TableActions;
