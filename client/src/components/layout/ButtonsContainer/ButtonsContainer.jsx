import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ButtonContainer } from "./ButtonsContainer.styles";

const ButtonsContainer = ({
  formType,
  leftName,
  rightName,
  disabled,
  edit,
  onClickLeft,
  onClickRight,
}) => {
  const theme = useTheme();

  return (
    <ButtonContainer
      sx={{
        visibility:
          (formType === "billing-confirmation" ||
            formType === "shipping-confirmation") &&
          edit
            ? "visible"
            : (formType === "billing-confirmation" ||
                formType === "shipping-confirmation") &&
              !edit
            ? "hidden"
            : "inherit",
        width: "100%",
        display: "flex",
        justifyContent:
          formType === "cart" ||
          formType === "billing" ||
          formType === "shipping" ||
          formType === "payment"
            ? "space-between"
            : formType === "confirmation" ||
              formType === "billing-confirmation" ||
              formType === "shipping-confirmation" ||
              formType === "payment-stepper"
            ? "center"
            : "inherit",
        marginTop: formType === "profile" ? theme.spacing(2) : "auto",
        marginRight: formType === "confirmation" && "8px",
      }}
    >
      <Button
        variant={
          formType === "profile" ||
          formType === "billing-shipping" ||
          formType === "payment-stepper" ||
          formType === "confirmation" ||
          formType === "billing-confirmation" ||
          formType === "shipping-confirmation"
            ? "text"
            : "contained"
        }
        onClick={onClickLeft}
        sx={{
          width: formType === "profile" ? "100%" : "auto",
          marginRight: theme.spacing(1),
          "&:hover": {
            backgroundColor:
              formType !== "profile" &&
              formType !== "billing-shipping" &&
              formType !== "payment-stepper" &&
              formType !== "confirmation" &&
              formType !== "billing-confirmation" &&
              formType !== "shipping-confirmation" &&
              theme.palette.secondary[500],
            color:
              formType !== "profile" &&
              formType !== "billing-shipping" &&
              formType !== "payment-stepper" &&
              formType !== "confirmation" &&
              formType !== "billing-confirmation" &&
              formType !== "shipping-confirmation" &&
              theme.palette.primary[500],
          },
        }}
      >
        {leftName}
      </Button>
      <Button
        type={formType !== "cart" && "submit"}
        variant="contained"
        disabled={disabled}
        onClick={onClickRight}
        sx={{
          width: formType === "profile" ? "100%" : "auto",
          "&:hover": {
            backgroundColor:
              formType !== "profile" &&
              formType !== "billing-shipping" &&
              formType !== "payment-stepper" &&
              formType !== "confirmation" &&
              formType !== "billing-confirmation" &&
              formType !== "shipping-confirmation" &&
              theme.palette.secondary[500],
            color:
              formType !== "profile" &&
              formType !== "billing-shipping" &&
              formType !== "payment-stepper" &&
              formType !== "confirmation" &&
              formType !== "billing-confirmation" &&
              formType !== "shipping-confirmation" &&
              theme.palette.primary[500],
          },
        }}
      >
        {rightName}
      </Button>
    </ButtonContainer>
  );
};

export default ButtonsContainer;
