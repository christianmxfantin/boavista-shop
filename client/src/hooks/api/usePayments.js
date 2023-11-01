import { useState } from "react";
import {
  createPaymentResponse,
  deletePaymentResponse,
  getPaymentByIdResponse,
  getPaymentsResponse,
  updatePaymentResponse,
} from "../../api/payments";
import { responseError, statusErrors } from "../../utils/toastErrors";

const usePayments = () => {
  const [payments, setPayments] = useState([]);
  const [loadingPayments, setLoadingPayments] = useState(true);

  const getPayments = async (userID) => {
    try {
      const res = await getPaymentsResponse();
      const payment = res.data.filter((payment) => payment.userId === userID);
      setPayments(payment);
    } catch (error) {
      statusErrors(error);
      responseError(error);
    } finally {
      setLoadingPayments(false);
    }
  };

  const getPaymentById = async (id) => {
    try {
      const res = await getPaymentByIdResponse(id);
      return res.data;
    } catch (error) {
      statusErrors(error);
      responseError(error);
    }
  };

  const createPayment = async (payment) => {
    try {
      const res = await createPaymentResponse(payment);
      setPayments(res.data);
    } catch (error) {
      statusErrors(error);
      responseError(error);
    }
  };

  const updatePayment = async (id, payment) => {
    try {
      const res = await updatePaymentResponse(id, payment);
      setPayments(res.data);
    } catch (error) {
      statusErrors(error);
      responseError(error);
    }
  };

  const deletePayment = async (id, userID) => {
    try {
      const allPayments = await getPaymentsResponse(userID);
      const payment = allPayments.data.filter(
        (payment) => payment.userId === userID
      );

      const res = await deletePaymentResponse(id);
      if (res.status === 204) {
        const paymentData = payment.filter((payment) => payment.id !== id);
        setPayments(paymentData);
      }
    } catch (error) {
      statusErrors(error);
      responseError(error);
    }
  };

  return {
    payments,
    loadingPayments,
    setPayments,
    getPayments,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment,
  };
};

export default usePayments;
