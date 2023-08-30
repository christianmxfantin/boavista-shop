import { cardCompanyByNameResponse } from "../../../../api/cardCompanies";
import {
  cardTypeResponse,
  createPaymentResponse,
} from "../../../../api/payments";
import { paymentTypeByNameResponse } from "../../../../api/paymentsType";
import { responseError, statusErrors } from "../../../../utils/toastErrors";

export const saveNewPayment = async (formValues, cardType, user) => {
  try {
    const finalNumber = formValues.cardNumber.slice(-4);

    const cardResponse = await cardCompanyByNameResponse({
      name: cardType.toLowerCase().trim(),
    });
    const cardCompanyId = cardResponse.data.id;

    //traer si es debito o credito desde Mercado Pago
    const card = {
      card_number: formValues.cardNumber,
      expiration_date: formValues.expirationDate,
      cvv: formValues.cardCVC,
    };
    const cardTypeRes = await cardTypeResponse(card);

    const paymentResponse = await paymentTypeByNameResponse({
      name: cardTypeRes.data.card_type.toLowerCase().trim(),
    });
    const paymentTypeId = paymentResponse.data.id;

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
