import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { toast, ToastContainer } from "react-toastify";
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
import { getAddressesResponse } from "../../../api/addresses";
import { getPaymentsResponse } from "../../../api/payments";
import { ErrorsMessages } from "../../../utils/toastMessages";
import { toastColor } from "../../../utils/toastOptions";
import { useSelector } from "react-redux";
import EmptyData from "../EmptyData/EmptyData";

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
}) => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);
  const userID = user.id;

  const [data, setData] = useState([]);
  const [showAddNew, setShowAddNew] = useState(false);
  const [editBilling, setEditBilling] = useState(false);
  const [editID, setEditID] = useState();
  const [selectedValue, setSelectedValue] = useState(0);

  const statusErrors = (error) => {
    //client error
    if (error.response.status > 399 || error.response.status < 500) {
      toast.error(ErrorsMessages.CLIENT_STATUS, toastColor("error"));
      return;
    }
    //server error
    if (error.response.status > 499) {
      toast.error(ErrorsMessages.SERVER_STATUS, toastColor("error"));
      return;
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        if (itemType === "address") {
          const res = await getAddressesResponse();
          const addresses = res.data.filter(
            (address) => address.userId === userID
          );
          setData(addresses);
        }

        if (itemType === "card") {
          const res = await getPaymentsResponse();
          const cards = res.data.filter((card) => card.userId === userID);
          setData(cards);
        }
      } catch (error) {
        statusErrors(error);

        if (!error.response) {
          toast.error(ErrorsMessages.RESPONSE_ERROR, toastColor("error"));
          return;
        }
      }
    };
    getData();

    if (formType !== "profile") {
      setIsButtonDisabled(true);
    }
  }, [formType, itemType, setIsButtonDisabled, userID]);

  const getDataID = data.filter((data) => data.id === editID);

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
          addressData: getDataID[0],
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
        <CardAddressItemContainer>
          {data.length === 0 && (
            <EmptyData
              iconName={itemType}
              size={100}
              title={itemType === "address" ? "direcciones" : "tarjetas"}
            />
          )}
          {formType !== "profile" ? (
            <FormControl defaultValue="">
              <RadioGroup>
                {data.map((data) => (
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
                      />
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            <>
              {data.map((data) => (
                <CardAddressItem
                  key={data.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: theme.palette.primary[300],
                      color: theme.palette.secondary.A100,
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
          sx={{ width: "100%", marginTop: formType === "profile" && "16px" }}
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
