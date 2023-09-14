import {
  createAddressResponse,
  getAddressByIdResponse,
  getAddressesResponse,
} from "../../../api/addresses";
import {
  addressTypeByNameResponse,
  createAddressTypeResponse,
  getAddressTypeByIdResponse,
} from "../../../api/addressesTypes";
import {
  cityByNameResponse,
  createCityResponse,
  getCityByIdResponse,
} from "../../../api/cities";
import {
  countryByNameResponse,
  createCountryResponse,
} from "../../../api/countries";
import {
  createStateResponse,
  getStateByIdResponse,
  stateByNameResponse,
} from "../../../api/states";

export const getAddressTypeName = async (id) => {
  try {
    const res = await getAddressTypeByIdResponse(id);
    return res.data.name;
  } catch (error) {
    console.log(error);
  }
};

export const getCityName = async (id) => {
  try {
    const res = await getCityByIdResponse(id);
    return res.data.name;
  } catch (error) {
    console.log(error);
  }
};

export const getStateName = async (id) => {
  try {
    const res = await getStateByIdResponse(id);
    return res.data.name;
  } catch (error) {
    console.log(error);
  }
};

export const getAddressByUser = async (userID) => {
  try {
    const res = await getAddressesResponse();
    const address = res.data.filter((address) => address.userId === userID);
    return address[0];
  } catch (error) {
    console.log(error);
  }
};

export const getAddressById = async (id) => {
  try {
    const res = await getAddressByIdResponse(id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAddressData = async (formValues, user) => {
  try {
    //envio el tipo de direccion y el usuario para obtener el id
    const addressTypeName = {
      name: formValues.addressType.toLowerCase().trim(),
      userId: user.id,
    };
    const addressTypeNameResponse = await addressTypeByNameResponse(
      addressTypeName
    );

    let addressTypeId;
    if (
      addressTypeNameResponse.data.message ===
      "El tipo de dirección ingresado está disponible."
    ) {
      //si el tipo de direccion no existe, lo creo
      const addressTypeResponse = await createAddressTypeResponse(
        addressTypeName
      );
      addressTypeId = addressTypeResponse.data.id;
    } else {
      //si existe, guardo el id
      addressTypeId = addressTypeNameResponse.data.id;
    }

    let countryIdResponse;
    const country = await countryByNameResponse({
      name: "Argentina",
    });
    if (
      country.data.message === "El nombre de País ingresado está disponible."
    ) {
      const countryResponse = await createCountryResponse({
        name: formValues.country.trim(),
      });
      countryIdResponse = countryResponse.data.id;
    } else {
      //si existe, guardo el id
      countryIdResponse = country.data.id;
    }

    let stateIdResponse;
    const state = await stateByNameResponse({
      name: formValues.state.trim(),
    });
    if (
      state.data.message === "El nombre de Estado ingresado está disponible."
    ) {
      const stateResponse = await createStateResponse({
        name: formValues.state.trim(),
        countryId: countryIdResponse,
      });
      stateIdResponse = stateResponse.data.id;
    } else {
      //si existe, guardo el id
      stateIdResponse = state.data.id;
    }

    let cityIdResponse;
    const city = await cityByNameResponse({
      name: formValues.city.trim(),
    });
    if (
      city.data.message === "El nombre de Ciudad ingresado está disponible."
    ) {
      const cityResponse = await createCityResponse({
        name: formValues.city.trim(),
        countryId: countryIdResponse,
        stateId: stateIdResponse,
      });
      cityIdResponse = cityResponse.data.id;
    } else {
      //si existe, guardo el id
      cityIdResponse = city.data.id;
    }

    const countryId = countryIdResponse;
    const stateId = stateIdResponse;
    const cityId = cityIdResponse;

    const newAddress = {
      address: formValues.address.trim(),
      phone: formValues.phone.trim(),
      addressTypeId,
      cityId,
      stateId,
      countryId,
      userId: user.id,
    };

    return newAddress;
  } catch (error) {
    console.log(error);
  }
};
