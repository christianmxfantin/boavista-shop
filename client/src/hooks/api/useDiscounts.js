import { useState } from "react";
import { responseError, statusErrors } from "../../utils/toastErrors";
import {
  createDiscountResponse,
  deleteDiscountResponse,
  getDiscountByIdResponse,
  getDiscountsResponse,
  updateDiscountResponse,
} from "../../api/discounts";

const useDiscounts = () => {
  const [discounts, setDiscounts] = useState([]);

  const getDiscounts = async () => {
    try {
      const res = await getDiscountsResponse();
      setDiscounts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const getDiscountById = async (id) => {
    try {
      const res = await getDiscountByIdResponse(id);
      setDiscounts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const createDiscount = async (discount) => {
    try {
      const res = await createDiscountResponse(discount);
      setDiscounts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const updateDiscount = async (id, discount) => {
    try {
      const res = await updateDiscountResponse(id, discount);
      setDiscounts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const deleteDiscount = async (id) => {
    try {
      const res = await deleteDiscountResponse(id);
      setDiscounts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  return {
    discounts,
    setDiscounts,
    getDiscounts,
    getDiscountById,
    createDiscount,
    updateDiscount,
    deleteDiscount,
  };
};

export default useDiscounts;
