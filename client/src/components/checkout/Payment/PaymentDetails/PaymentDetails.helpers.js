import {
  cardCompanyByNameResponse,
  createCardCompanyResponse,
} from "../../../../api/cardCompanies";
import { createPaymentResponse } from "../../../../api/payments";
import {
  createPaymentTypeResponse,
  paymentTypeByNameResponse,
} from "../../../../api/paymentsType";
import { responseError, statusErrors } from "../../../../utils/toastErrors";

export const saveNewPayment = async (formValues, cardType, user) => {
  try {
    const finalNumber = formValues.cardNumber.slice(-4);

    const cardCompany = { name: cardType.toLowerCase().trim() };
    const cardResponse = await cardCompanyByNameResponse(cardCompany);

    //traer el id de CardCompany
    let cardCompanyId;
    if (
      cardResponse.data.message ===
      "El nombre de companía ingresado está disponible."
    ) {
      const cardCompanyResponse = await createCardCompanyResponse(cardCompany);
      cardCompanyId = cardCompanyResponse.data.id;
    } else {
      cardCompanyId = cardResponse.data.id;
    }

    const paymentType = {
      name: "Crédito",
    };
    const paymentResponse = await paymentTypeByNameResponse(paymentType);

    //traer el id de PaymentType
    let paymentTypeId;
    if (
      paymentResponse.data.message ===
      "El tipo de pago ingresado está disponible."
    ) {
      const paymentTypeResponse = await createPaymentTypeResponse(paymentType);
      paymentTypeId = paymentTypeResponse.data.id;
    } else {
      paymentTypeId = paymentResponse.data.id;
    }

    const newPayment = {
      finalNumber,
      cardCompanyId,
      paymentTypeId,
      userId: user.id,
    };

    await createPaymentResponse(newPayment);
  } catch (error) {
    console.log(error);
    statusErrors(error);
    responseError(error);
  }
};
