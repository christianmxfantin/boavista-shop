import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  Tooltip,
} from "@mui/material";
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
  TableImageContainer,
} from "./TableActions.styles";
import useProducts from "../../../hooks/api/useProducts";
import { createAvatarResponse, deleteUserResponse } from "../../../api/users";
import { getAddressTypeByIdResponse } from "../../../api/addressesTypes";
import { getCardCompanyByIdResponse } from "../../../api/cardCompanies";
import useAddresses from "../../../hooks/api/useAddresses";
import usePayments from "../../../hooks/api/usePayments";
import useAuth from "../../../hooks/useAuth";
import { unsetUser } from "../../../reducers/auth";
import UploadImage from "../UploadImage/UploadImage";
import ImageSlider from "../ImageSlider/ImageSlider";
import { PatternValidations } from "../../../helpers/validations";
import { UsersErrors } from "../../../errors/users.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { Icon } from "../../ui/Icon";
import { ProductsErrors } from "../../../errors/products.errors";
import { createUsers } from "./TableActions.helpers";
import { SuccessMessages } from "../../../utils/toastMessages";
import { toastColor } from "../../../utils/toastOptions";

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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

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
    if (productImage) {
      setProductImage("");
    }
    reset();
    setShowModal(false);
  };

  const onSubmit = async (formValues) => {
    switch (typeData) {
      case "users":
        // console.log("crear usuario", formValues);
        try {
          const user = await createUsers(productImage, formValues);
          if (user) {
            toast.success(SuccessMessages.CHANGES_DONE, toastColor("success"));
          }
        } catch (error) {
          console.log(error);
        }
        break;

      case "products":
        console.log("crear producto", formValues);
        break;

      default:
    }

    switch (actionType) {
      case "edit-user":
        console.log("editar usuario", formValues);
        try {
          // const updatedProduct = {
          //   id: data.id,
          //   name: formValues.name.trim(),
          //   price: 500.0,
          //   stock: 1200,
          // };
          // await updateProduct(data.id, updatedProduct);
          //falta setear el update
        } catch (error) {
          console.log(error);
        }
        break;

      case "edit-product":
        console.log("editar producto", formValues);
        try {
          // const updatedProduct = {
          //   id: data.id,
          //   name: formValues.name.trim(),
          //   price: 500.0,
          //   stock: 1200,
          // };
          // await updateProduct(data.id, updatedProduct);
          //falta setear el update
        } catch (error) {
          console.log(error);
        }
        break;

      case "delete-product":
        try {
          // await deleteAddress(data.id, user.id);
          // setAddresses((prevAddresses) =>
          //   prevAddresses.filter((address) => address.id !== data.id)
          // );
        } catch (error) {
          console.error(error);
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
    <>
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
              <TableImageContainer>
                {(typeData === "users" || actionType === "edit-user") && (
                  <Tooltip
                    title={
                      (actionType === "edit-user" || productImage) &&
                      "Haz clic nuevamente para cambiar la imágen"
                    }
                  >
                    <Avatar
                      alt={"Imágen del Usuario"}
                      src={
                        actionType === "edit-user" && !productImage
                          ? data.avatarURL
                          : productImage
                      }
                      sx={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: !data.avatarURL
                          ? theme.palette.primary[300]
                          : actionType === "edit-user"
                          ? theme.palette.secondary.A100
                          : typeData === "users"
                          ? theme.palette.secondary[900]
                          : null,
                        color: theme.palette.secondary.A100,
                      }}
                      onClick={handleOpenDialog}
                    />
                  </Tooltip>
                )}
                {(typeData === "products" || actionType === "edit-product") && (
                  <ImageSlider
                    formType={typeData ? typeData : actionType}
                    productsImages={data.images}
                  />
                )}
                <UploadImage
                  openDialog={openDialog}
                  setOpenDialog={setOpenDialog}
                  formType="dashboard-users"
                  setProductImage={setProductImage}
                />
              </TableImageContainer>
              <TableInputContainer>
                {(typeData === "users" || actionType === "edit-user") && (
                  <>
                    <TableNamesInput
                      defaultValue={data.names}
                      name="names"
                      type="text"
                      variant="outlined"
                      size="small"
                      placeholder="Nombres del Usuario"
                      required
                      {...register("names", {
                        required: true,
                        pattern: PatternValidations.NAMES_AND_SURNAMES,
                      })}
                      error={!!errors.names}
                      helperText={
                        watch("names")
                          ? errors.names && UsersErrors.NAMES_INVALID
                          : errors.names && EmptyFieldError.EMPTY_ERROR
                      }
                    />
                    <TableSurnamesInput
                      defaultValue={data.surnames}
                      name="surnames"
                      type="text"
                      variant="outlined"
                      size="small"
                      placeholder="Apellidos del Usuario"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Tooltip title="En el mundo hay varias personas sin apellidos, por ese motivo no es un campo requerido. De igual modo, te sugerimos que completes este campo si lo tienes.">
                              <IconButton edge="end">
                                <Icon
                                  name="Info"
                                  color={theme.palette.primary[300]}
                                />
                              </IconButton>
                            </Tooltip>
                          </InputAdornment>
                        ),
                      }}
                      {...register("surnames", {
                        pattern: PatternValidations.NAMES_AND_SURNAMES,
                      })}
                      error={!!errors.surnames}
                      helperText={
                        errors.surnames && UsersErrors.SURNAMES_INVALID
                      }
                    />
                    <TableEmailInput
                      defaultValue={data.email}
                      name="email"
                      type="email"
                      variant="outlined"
                      size="small"
                      placeholder="Email del Usuario"
                      {...register("email", {
                        required: true,
                        pattern: PatternValidations.EMAIL,
                      })}
                      error={!!errors.email}
                      helperText={
                        watch("email")
                          ? errors.email && UsersErrors.EMAIL_INVALID
                          : errors.email && EmptyFieldError.EMPTY_ERROR
                      }
                    />
                  </>
                )}
                {(typeData === "products" || actionType === "edit-product") && (
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
                        pattern: PatternValidations.NAMES_AND_SURNAMES,
                      })}
                      error={!!errors.name}
                      helperText={
                        watch("name")
                          ? errors.name && ProductsErrors.NAME_INVALID
                          : errors.name && EmptyFieldError.EMPTY_ERROR
                      }
                    />
                    <TablePriceInput
                      defaultValue={data.price}
                      name="price"
                      type="text"
                      variant="outlined"
                      size="small"
                      placeholder="Precio Unitario"
                      required
                      {...register("price", {
                        required: true,
                        pattern: PatternValidations.DECIMALS,
                      })}
                      error={!!errors.price}
                      helperText={
                        watch("price")
                          ? errors.price && ProductsErrors.PRICE_INVALID
                          : errors.price && EmptyFieldError.EMPTY_ERROR
                      }
                    />
                    <TableStockInput
                      defaultValue={data.stock ? data.stock : null}
                      name="stock"
                      type="text"
                      variant="outlined"
                      size="small"
                      placeholder="Stock"
                      {...register("stock", {
                        pattern: PatternValidations.NUMBERS,
                      })}
                      error={!!errors.stock}
                      helperText={errors.stock && ProductsErrors.STOCK_INVALID}
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
                    : actionType === "edit-user" ||
                      actionType === "edit-product"
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
                    : actionType === "edit-user" ||
                      actionType === "edit-product"
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
      <ToastContainer />
    </>
  );
};

export default TableActions;
