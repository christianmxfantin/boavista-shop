import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon as EditIcon } from "../../ui/Icon";
import {
  BillingContainer,
  BillingTitleContainer,
  BillingTitle,
  DataContainer,
  CheckoutContainer,
  AddressTypeInput,
  AddressInput,
  CommentsInput,
  PhoneInput,
  StateSelectContainer,
  StateSelect,
  CitySelectContainer,
  CitySelect,
} from "./Billing.styles";
import useProvincias from "../../../hooks/useProvincias";
import useLocalidades from "../../../hooks/useLocalidades";
import { Controller, useForm } from "react-hook-form";
import ButtonsContainer from "../../layout/ButtonsContainer/ButtonsContainer";
import { PatternValidations } from "../../../helpers/validations";
import { FormHelperText, MenuItem } from "@mui/material";
import CardAddress from "../../layout/CardAddress/CardAddress";
import { UsersErrors } from "../../../errors/users.errors";
import { EmptyFieldError } from "../../../errors/emptyField.errors";
import { AddressesErrors } from "../../../errors/addresses.errors";
import { SuccessMessages } from "../../../utils/toastMessages";
import { toastColor } from "../../../utils/toastOptions";
import {
  conflictError,
  responseError,
  statusErrors,
} from "../../../utils/toastErrors";
import {
  createAddressData,
  getAddressById,
  getAddressByUser,
  getAddressTypeName,
  getCityName,
  getStateName,
} from "./Billing.helpers";
import useAddresses from "../../../hooks/api/useAddresses";

const Billing = ({
  formType,
  handleLeft,
  handleRight,
  setStepperData,
  setSelectedAddress,
  isButtonDisabled,
  setIsButtonDisabled,
  confirmationData,
  editConfirmationData,
  setEditConfirmationData,
  setIsEditVisible,
  editProfileAddress,
}) => {
  let editAddress;
  let editData;
  if (formType === "profile") {
    ({ editAddress, editData } = editProfileAddress);
  }

  const theme = useTheme();
  const { createAddress, updateAddress } = useAddresses();
  const { user } = useSelector((state) => state.auth);

  const [billingData, setBillingData] = useState({});
  const [showMyAddress, setShowMyAddress] = useState(false);
  const [editCheckoutMode, setEditCheckoutMode] = useState(false);
  const [provincia, setProvincia] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");

  const provincias = useProvincias();
  const localidades = useLocalidades({ provincia });

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        let myBilling = {};
        if (formType === "billing") {
          const myBillingData = await getAddressByUser(user.id);
          const addressType = await getAddressTypeName(
            myBillingData.addressTypeId
          );

          const state = await getStateName(myBillingData.stateId);
          const city = await getCityName(myBillingData.cityId);

          myBilling = {
            id: myBillingData.id,
            addressType,
            address: myBillingData.address,
            state,
            city,
            phone: myBillingData.phone,
          };
        }

        if (confirmationData) {
          myBilling = {
            addressType: confirmationData.addressType,
            address: confirmationData.address,
            state: confirmationData.state,
            city: confirmationData.city,
            email: confirmationData.email,
            phone: confirmationData.phone,
          };
        }

        if (formType === "shipping-confirmation") {
          const myBillingData = await getAddressById(
            confirmationData.addressId
          );
          const addressType = await getAddressTypeName(
            myBillingData.addressTypeId
          );

          const state = await getStateName(myBillingData.stateId);
          const city = await getCityName(myBillingData.cityId);

          myBilling = {
            addressType,
            address: myBillingData.address,
            state,
            city,
            phone: myBillingData.phone,
          };
        }

        if (editAddress) {
          const myBillingData = editData;
          const addressType = await getAddressTypeName(
            myBillingData.addressTypeId
          );

          const state = await getStateName(myBillingData.stateId);
          const city = await getCityName(myBillingData.cityId);

          myBilling = {
            addressType,
            address: myBillingData.address,
            state,
            city,
            phone: myBillingData.phone,
          };
        }

        setBillingData(myBilling);
      } catch (error) {
        console.log(error);
        statusErrors(error);
        responseError(error);
      }
    };
    getData();
  }, [formType, confirmationData, editAddress, editData]);

  useEffect(() => {
    if (formType === "shipping") {
      setEditCheckoutMode(true);
    }
  }, [formType]);

  useEffect(() => {
    reset({
      addressType: billingData.addressType,
      address: billingData.address,
      state: billingData.state,
      city: billingData.city,
      phone: billingData.phone,
    });
  }, [billingData, reset]);

  const handleCheckoutEdit = () => {
    setEditCheckoutMode(true);
  };

  const handleCancel = () => {
    if (formType === "profile") {
      setShowMyAddress(true);
      reset();
    }

    if (Object.keys(errors).length === 0) {
      if (formType === "billing") {
        setShowMyAddress(false);
      } else if (formType === "profile" || formType === "shipping") {
        setShowMyAddress(true);
      }

      if (formType === "billing") {
        setEditCheckoutMode(false);
      }
    }
  };

  const handleCancelConfirmation = () => {
    if (Object.keys(errors).length === 0) {
      setEditConfirmationData(false);
      setIsEditVisible(true);
    }
  };

  // Para resetear los select
  // const stateRef = useRef();
  // const cityRef = useRef();
  // stateRef.current.childNodes[0].textContent = "Selecciona tu Provincia";
  // cityRef.current.childNodes[0].textContent = "Selecciona tu Localidad";

  const onSubmit = async (formValues) => {
    if (
      (formType === "profile" && !editAddress) ||
      (formType === "shipping" && !showMyAddress)
    ) {
      try {
        const newAddress = await createAddressData(formValues, user, "create");
        const response = await createAddress(newAddress);
        if (response) {
          toast.success(SuccessMessages.CHANGES_DONE, toastColor("success"));
        }
      } catch (error) {
        console.log(error);
        conflictError(error);
        statusErrors(error);
        responseError(error);
        reset();
      }
    }

    if (formType === "profile" && editAddress) {
      try {
        const addressData = await createAddressData(formValues, user, {
          id: editData.addressTypeId,
          name: billingData.addressType,
        });
        const response = await updateAddress(editData.id, addressData);
        if (response) {
          toast.success(SuccessMessages.CHANGES_DONE, toastColor("success"));
        }
      } catch (error) {
        console.log(error);
        conflictError(error);
        statusErrors(error);
        responseError(error);
        reset();
      }
    }

    if (formType === "billing") {
      setStepperData((prevData) => ({
        ...prevData,
        billing: { id: billingData.id, ...formValues, edit: editCheckoutMode },
      }));
      handleRight();
    }

    if (formType === "billing-confirmation") {
      setStepperData((prevData) => {
        const newData = { ...prevData };
        const billingID = prevData.billing.id;
        delete newData.billing;

        return {
          ...newData,
          billing: { id: billingID, ...formValues, edit: true },
        };
      });
      handleCancelConfirmation();
    }

    if (formType === "shipping-confirmation") {
      setStepperData((prevData) => {
        const newData = { ...prevData };
        const shippingID = prevData.shipping.addressId;
        delete newData.shipping;

        return {
          ...newData,
          shipping: { addressId: shippingID, ...formValues, edit: true },
        };
      });
      handleCancelConfirmation();
    }

    handleCancel();
  };

  return (
    <section>
      {showMyAddress ? (
        <CardAddress
          formType={formType}
          itemType="address"
          setSelectedAddress={setSelectedAddress}
          isButtonDisabled={isButtonDisabled}
          setIsButtonDisabled={setIsButtonDisabled}
        />
      ) : (
        <BillingContainer sx={{ height: formType === "billing" && "70vh" }}>
          {formType === "billing" && (
            <BillingTitleContainer
              onClick={handleCheckoutEdit}
              sx={{
                visibility: editCheckoutMode ? "hidden" : "visible",
              }}
            >
              <BillingTitle>Cambiar datos</BillingTitle>
              <EditIcon
                name="Edit-Data"
                size={30}
                color={theme.palette.primary[500]}
              />
            </BillingTitleContainer>
          )}
          <DataContainer
            component={"form"}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              width: "100%",
              height: formType === "billing" && "70vh",
              alignItems: "center",
            }}
          >
            <CheckoutContainer
              sx={{
                width: formType === "billing" ? "40%" : "100%",
              }}
            >
              {(formType === "billing" ||
                formType === "shipping" ||
                formType === "profile" ||
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation") && (
                <>
                  <AddressTypeInput
                    name="addressType"
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder="Ingresa un Tipo de Dirección. Ej: Casa, Trabajo, etc."
                    disabled={
                      (formType === "billing" && !editCheckoutMode) ||
                      (formType === "billing-confirmation" &&
                        !editConfirmationData) ||
                      (formType === "shipping-confirmation" &&
                        !editConfirmationData)
                    }
                    required
                    {...register("addressType", {
                      required: true,
                      pattern: PatternValidations.NAMES_AND_SURNAMES,
                    })}
                    error={!!errors.addressType}
                    helperText={
                      watch("addressType")
                        ? errors.addressType && UsersErrors.NAMES_INVALID
                        : errors.addressType && EmptyFieldError.EMPTY_ERROR
                    }
                  />
                  <AddressInput
                    name="address"
                    type="text"
                    variant="outlined"
                    size="small"
                    placeholder="Ingresa tu Dirección"
                    disabled={
                      (formType === "billing" && !editCheckoutMode) ||
                      (formType === "billing-confirmation" &&
                        !editConfirmationData) ||
                      (formType === "shipping-confirmation" &&
                        !editConfirmationData)
                    }
                    required
                    {...register("address", {
                      required: true,
                      pattern: PatternValidations.ADDRESS,
                    })}
                    error={!!errors.address}
                    helperText={
                      watch("address")
                        ? errors.address && AddressesErrors.ADDRESS_INVALID
                        : errors.address && EmptyFieldError.EMPTY_ERROR
                    }
                  />{" "}
                  <StateSelectContainer>
                    <Controller
                      name="state"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { name, value, onChange } }) => (
                        <>
                          <StateSelect
                            name={name}
                            fullWidth
                            disabled={
                              (formType === "billing" && !editCheckoutMode) ||
                              (formType === "billing-confirmation" &&
                                !editConfirmationData) ||
                              (formType === "shipping-confirmation" &&
                                !editConfirmationData)
                            }
                            defaultValue={
                              formType === "billing" ||
                              (formType === "profile" && !editAddress)
                                ? 1
                                : stateName
                            }
                            onChange={(e) => {
                              onChange(e.target.value);
                              setProvincia(e.target.value);
                            }}
                            error={!!errors.state}
                          >
                            <MenuItem disabled value={1}>
                              Selecciona tu Provincia
                            </MenuItem>
                            {provincias.map((provincia, index) => (
                              <MenuItem value={provincia} key={index}>
                                {provincia}
                              </MenuItem>
                            ))}
                          </StateSelect>
                          <FormHelperText error={!!errors.state}>
                            {errors.state &&
                            value !== "Seleccione una Provincia"
                              ? AddressesErrors.STATE_INVALID
                              : ""}
                          </FormHelperText>
                        </>
                      )}
                    />
                  </StateSelectContainer>
                  <CitySelectContainer>
                    <Controller
                      name="city"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { name, value, onChange } }) => (
                        <>
                          <CitySelect
                            name={name}
                            fullWidth
                            disabled={
                              (formType === "billing" && !editCheckoutMode) ||
                              (formType === "billing-confirmation" &&
                                !editConfirmationData) ||
                              (formType === "shipping-confirmation" &&
                                !editConfirmationData)
                            }
                            defaultValue={
                              formType === "billing" ||
                              (formType === "profile" && !editAddress)
                                ? 1
                                : cityName
                            }
                            required
                            onChange={(e) => {
                              onChange(e.target.value);
                            }}
                            error={!!errors.city}
                          >
                            <MenuItem disabled value={1}>
                              Selecciona tu Localidad
                            </MenuItem>
                            {localidades.map((departamento, index) => (
                              <MenuItem value={departamento} key={index}>
                                {departamento}
                              </MenuItem>
                            ))}
                          </CitySelect>
                          <FormHelperText error={!!errors.city}>
                            {errors.city && value !== "Seleccione una Localidad"
                              ? AddressesErrors.CITY_INVALID
                              : ""}
                          </FormHelperText>
                        </>
                      )}
                    />
                  </CitySelectContainer>
                </>
              )}
              {(formType === "shipping" ||
                formType === "shipping-confirmation") && (
                <>
                  <CommentsInput
                    name="comments"
                    multiline
                    rows={4}
                    placeholder="Observaciones"
                    disabled={
                      formType === "shipping-confirmation" &&
                      !editConfirmationData
                    }
                    InputProps={{
                      style: {
                        padding: 0,
                      },
                      inputProps: {
                        maxLength: 200,
                      },
                    }}
                    {...register("comments", {
                      pattern: PatternValidations.COMMENTS,
                    })}
                    error={!!errors.email}
                    helperText={
                      watch("email")
                        ? errors.email && AddressesErrors.COMMENTS_INVALID
                        : errors.email && EmptyFieldError.EMPTY_ERROR
                    }
                  >
                    Observaciones
                  </CommentsInput>
                </>
              )}
              {(formType === "billing" ||
                formType === "shipping" ||
                formType === "profile" ||
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation") && (
                <PhoneInput
                  name="phone"
                  type="tel"
                  variant="outlined"
                  size="small"
                  placeholder="Ingrese su Teléfono"
                  disabled={
                    (formType === "billing" && !editCheckoutMode) ||
                    (formType === "billing-confirmation" &&
                      !editConfirmationData) ||
                    (formType === "shipping-confirmation" &&
                      !editConfirmationData)
                  }
                  required
                  {...register("phone", {
                    required: true,
                    pattern: PatternValidations.PHONE,
                  })}
                  error={!!errors.phone}
                  helperText={
                    watch("phone")
                      ? errors.phone && AddressesErrors.PHONE_INVALID
                      : errors.phone && EmptyFieldError.EMPTY_ERROR
                  }
                />
              )}
            </CheckoutContainer>
            <ButtonsContainer
              formType={formType === "shipping" ? "billing-shipping" : formType}
              leftName={
                formType === "profile" ||
                formType === "shipping" ||
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation"
                  ? "Cancelar"
                  : "Atrás"
              }
              rightName={
                formType === "profile" ||
                formType === "shipping" ||
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation"
                  ? "Guardar"
                  : "Continuar"
              }
              edit={editConfirmationData}
              onClickLeft={
                formType === "billing-confirmation" ||
                formType === "shipping-confirmation"
                  ? handleCancelConfirmation
                  : formType === "profile" || formType === "shipping"
                  ? handleCancel
                  : handleLeft
              }
            />
          </DataContainer>
        </BillingContainer>
      )}
      <ToastContainer />
    </section>
  );
};

export default Billing;
