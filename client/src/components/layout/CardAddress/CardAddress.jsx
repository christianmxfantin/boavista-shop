import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  CardAddressContainer,
  CardAddressItem,
  CardAddressItemContainer,
  IconContainer,
} from "./CardAddress.styles";
import CardAddressItemTitle from "../CardAddressItemTitle/CardAddressItemTitle";
import Billing from "../../checkout/Billing/Billing";
import PaymentDetails from "../../checkout/Payment/PaymentDetails/PaymentDetails";
import { Icon } from "../../ui/Icon";
import EmptyData from "../EmptyData/EmptyData";
import { responseError, statusErrors } from "../../../utils/toastErrors";
import useAddresses from "../../../hooks/api/useAddresses";
import usePayments from "../../../hooks/api/usePayments";
import CardAddressSkeleton from "../../skeleton/CardAddressSkeleton/CardAddressSkeleton";

const CardAddress = ({
  formType,
  itemType,
  setSelectedAddress,
  setSelectedCard,
  handleLeft,
  handleRight,
  setStepperData,
  isButtonDisabled,
  setIsButtonDisabled,
  confirmationData,
}) => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);
  const userID = user.id;

  const { loadingAddresses, addresses, setAddresses, getAddresses } =
    useAddresses();
  const {
    loadingPayments,
    payments,
    setPayments,
    getPayments,
    getPaymentById,
  } = usePayments();

  const [showAddNew, setShowAddNew] = useState(false);
  const [editBilling, setEditBilling] = useState(false);
  const [editID, setEditID] = useState();
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        if (itemType === "address") {
          getAddresses(userID);
        }

        if (itemType === "card") {
          getPayments(userID);
        }

        if (formType === "payment-confirmation") {
          const paymentConfirmation = await getPaymentById(confirmationData.id);
          setPayments([paymentConfirmation]);
        }
      } catch (error) {
        statusErrors(error);
        responseError(error);
      }
    };
    getData();

    if (formType !== "profile" && formType !== "payment-confirmation") {
      setIsButtonDisabled(true);
    }
  }, [itemType, userID]);

  let getAddressID;
  if (itemType === "address") {
    getAddressID = addresses.filter((address) => address.id === editID);
  }

  const handleChangeRadio = (id) => {
    setSelectedValue(id);
    setIsButtonDisabled(false);

    if (itemType === "address") {
      setSelectedAddress(id);
    } else {
      setSelectedCard(id);
    }
  };

  const handleAddNewButton = () => {
    setShowAddNew(true);
  };

  return showAddNew ? (
    itemType === "address" ? (
      <Billing
        formType={formType}
        setSelectedAddress={setSelectedAddress}
        isButtonDisabled={isButtonDisabled}
        setIsButtonDisabled={setIsButtonDisabled}
        editProfileAddress={{
          editAddress: editBilling,
          editData: getAddressID[0],
        }}
      />
    ) : (
      <PaymentDetails
        formType={formType}
        handleLeft={handleLeft}
        handleRight={handleRight}
        setStepperData={setStepperData}
        setSelectedCard={setSelectedCard}
        isButtonDisabled={isButtonDisabled}
        setIsButtonDisabled={setIsButtonDisabled}
      />
    )
  ) : (
    <>
      <CardAddressContainer
        sx={{
          width:
            formType === "payment"
              ? "50%"
              : formType === "profile"
              ? "100%"
              : "inherit",
          marginTop: formType === "payment" && theme.spacing(2),
        }}
      >
        <CardAddressItemContainer
          sx={{
            maxHeight: "160px",
            overflowY: "auto",
          }}
        >
          {addresses.length === 0 &&
            payments.length === 0 &&
            (!loadingAddresses || !loadingPayments) && (
              <EmptyData
                iconName={itemType}
                size={50}
                title={itemType === "address" ? "direcciones" : "tarjetas"}
              />
            )}
          {loadingAddresses && loadingPayments ? (
            <CardAddressSkeleton />
          ) : formType !== "profile" && formType !== "payment-confirmation" ? (
            <FormControl defaultValue="">
              <RadioGroup>
                {addresses.map((data) => (
                  <FormControlLabel
                    key={data.id}
                    sx={{
                      margin: 0,
                      marginBottom: theme.spacing(1),
                      padding: theme.spacing(1),
                      borderRadius: theme.spacing(1),
                      "&:hover": {
                        backgroundColor: theme.palette.primary[300],
                        color: theme.palette.secondary.A100,
                      },
                    }}
                    value={data.id}
                    control={
                      <Radio
                        name={`id${data.id}`}
                        checked={selectedValue === data.id}
                        onChange={() => handleChangeRadio(data.id)}
                        value={data.id}
                        inputProps={{ "aria-label": `id${data.id}` }}
                      />
                    }
                    label={
                      <CardAddressItemTitle
                        data={data}
                        formType={formType}
                        itemType={itemType}
                        setShowAddNew={setShowAddNew}
                        setAddresses={setAddresses}
                      />
                    }
                  />
                ))}
                {payments.map((data) => (
                  <FormControlLabel
                    key={data.id}
                    sx={{
                      margin: 0,
                      marginBottom: theme.spacing(1),
                      padding: theme.spacing(1),
                      borderRadius: theme.spacing(1),
                      "&:hover": {
                        backgroundColor: theme.palette.primary[300],
                        color: theme.palette.secondary.A100,
                      },
                    }}
                    value={data.id}
                    control={
                      <Radio
                        name={`id${data.id}`}
                        checked={selectedValue === data.id}
                        onChange={() => handleChangeRadio(data.id)}
                        value={data.id}
                        inputProps={{ "aria-label": `id${data.id}` }}
                      />
                    }
                    label={
                      <CardAddressItemTitle
                        data={data}
                        formType={formType}
                        itemType={itemType}
                        setShowAddNew={setShowAddNew}
                        setAddresses={setAddresses}
                      />
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            <>
              {addresses.map((data) => (
                <CardAddressItem
                  disabled={formType === "payment-confirmation" && true}
                  key={data.id}
                  sx={{
                    "&:hover": {
                      backgroundColor:
                        formType !== "payment-confirmation" &&
                        theme.palette.primary[300],
                      color:
                        formType !== "payment-confirmation" &&
                        theme.palette.secondary.A100,
                    },
                  }}
                >
                  <IconContainer
                    sx={{ alignItems: itemType === "address" && "center" }}
                  >
                    <Icon
                      name={
                        itemType === "address" ? "address-card" : "credit-card"
                      }
                    />
                  </IconContainer>
                  <CardAddressItemTitle
                    data={data}
                    formType={formType}
                    itemType={itemType}
                    setShowAddNew={setShowAddNew}
                    setEditID={setEditID}
                    setEditBilling={setEditBilling}
                  />
                </CardAddressItem>
              ))}
              {payments.map((data) => (
                <CardAddressItem
                  disabled={formType === "payment-confirmation" && true}
                  key={data.id}
                  sx={{
                    "&:hover": {
                      backgroundColor:
                        formType !== "payment-confirmation" &&
                        theme.palette.primary[300],
                      color:
                        formType !== "payment-confirmation" &&
                        theme.palette.secondary.A100,
                    },
                  }}
                >
                  <IconContainer
                    sx={{ alignItems: itemType === "address" && "center" }}
                  >
                    <Icon
                      name={
                        itemType === "address" ? "address-card" : "credit-card"
                      }
                    />
                  </IconContainer>
                  <CardAddressItemTitle
                    data={data}
                    formType={formType}
                    itemType={itemType}
                    setShowAddNew={setShowAddNew}
                    setEditID={setEditID}
                    setEditBilling={setEditBilling}
                  />
                </CardAddressItem>
              ))}
            </>
          )}
        </CardAddressItemContainer>
        <Button
          variant={formType === "profile" ? "text" : "contained"}
          disabled={formType !== "profile" && !isButtonDisabled}
          onClick={handleAddNewButton}
          sx={{
            width: "100%",
            marginTop: formType === "profile" && "16px",
            display: formType === "payment-confirmation" && "none",
          }}
        >
          {itemType === "address"
            ? "Agregar Nueva Dirección"
            : "Agregar Método de Pago"}
        </Button>
      </CardAddressContainer>
      <ToastContainer />
    </>
  );
};

export default CardAddress;
