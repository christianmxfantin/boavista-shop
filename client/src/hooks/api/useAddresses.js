import { useCallback, useState } from "react";
import {
  createAddressResponse,
  deleteAddressResponse,
  getAddressByIdResponse,
  getAddressesResponse,
  updateAddressResponse,
} from "../../api/addresses";
import { responseError, statusErrors } from "../../utils/toastErrors";

const useAddresses = () => {
  const [addresses, setAddresses] = useState([]);

  const getAddresses = useCallback(async (userID) => {
    try {
      const res = await getAddressesResponse();
      const address = res.data.filter((address) => address.userId === userID);
      return address;
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  }, []);

  const getAddressById = async (id) => {
    try {
      const res = await getAddressByIdResponse(id);
      setAddresses(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const createAddress = async (address) => {
    try {
      const res = await createAddressResponse(address);
      setAddresses(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const updateAddress = async (id, address) => {
    try {
      const res = await updateAddressResponse(id, address);
      setAddresses(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const deleteAddress = async (id, userID) => {
    try {
      const address = await getAddresses(userID);
      const res = await deleteAddressResponse(id);
      if (res.status === 204) {
        const addressData = address.filter((address) => address.id !== id);
        setAddresses(addressData);
      }
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  return {
    addresses,
    setAddresses,
    getAddresses,
    getAddressById,
    createAddress,
    updateAddress,
    deleteAddress,
  };
};

export default useAddresses;
