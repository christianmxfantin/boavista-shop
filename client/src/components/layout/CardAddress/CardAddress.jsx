import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
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
  const [data, setData] = useState([]);
  const [showAddNew, setShowAddNew] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        if (itemType === "address") {
          const res = await getAddressesResponse();
          setData(res.data);
        }

        if (itemType === "card") {
          const res = await getPaymentsResponse();
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    if (formType !== "profile") {
      setIsButtonDisabled(true);
    }
  }, [formType, itemType, setIsButtonDisabled]);

  const handleChangeRadio = (id) => {
    setSelectedValue(id);
    setIsButtonDisabled(false);

    if (itemType === "address") {
      setSelectedAddress(id);
    } else {
      setSelectedCard(id);
    }
  };

  const handleClickButton = () => {
    setShowAddNew(true);
  };

  return showAddNew ? (
    itemType === "address" ? (
      <Billing
        formType={formType}
        setSelectedAddress={setSelectedAddress}
        isButtonDisabled={isButtonDisabled}
        setIsButtonDisabled={setIsButtonDisabled}
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
                />
              </CardAddressItem>
            ))}
          </>
        )}
      </CardAddressItemContainer>
      <Button
        variant={formType === "profile" ? "text" : "contained"}
        disabled={formType !== "profile" && !isButtonDisabled}
        onClick={handleClickButton}
        sx={{ width: "100%", marginTop: formType === "profile" && "16px" }}
      >
        {itemType === "address"
          ? "Agregar Nueva Dirección"
          : "Agregar Método de Pago"}
      </Button>
    </CardAddressContainer>
  );
};

export default CardAddress;
