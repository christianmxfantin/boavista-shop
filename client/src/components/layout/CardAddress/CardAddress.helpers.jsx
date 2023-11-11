import { getAddressTypeByIdResponse } from "../../../api/addressesTypes";
import { getCityByIdResponse } from "../../../api/cities";
import { getStateByIdResponse } from "../../../api/states";
import { responseError, statusErrors } from "../../../utils/toastErrors";

export const getAddressTypeName = async (id) => {
  try {
    const res = await getAddressTypeByIdResponse(id);
    return res.data.name;
  } catch (error) {
    statusErrors(error);
    responseError(error);
  }
};

export const getCityName = async (id) => {
  try {
    const res = await getCityByIdResponse(id);
    return res.data.name;
  } catch (error) {
    statusErrors(error);
    responseError(error);
  }
};

export const getStateName = async (id) => {
  try {
    const res = await getStateByIdResponse(id);
    return res.data.name;
  } catch (error) {
    statusErrors(error);
    responseError(error);
  }
};
