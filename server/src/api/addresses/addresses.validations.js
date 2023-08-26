const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const {
  AddressesTypesErrors,
} = require("../addressesTypes/addressesTypes.errors.js");
const { CitiesErrors } = require("../cities/cities.errors.js");
const { CountriesErrors } = require("../countries/countries.errors.js");
const { StatesErrors } = require("../states/states.errors.js");
const { AddressesErrors } = require("./addresses.errors.js");
const { UsersErrors } = require("../users/users.errors.js");

const Addresses = db.addresses;
const AddressesTypes = db.addressesTypes;
const Cities = db.cities;
const States = db.states;
const Countries = db.countries;
const Users = db.users;

const createAndUpdateAddress = async (req, res, next) => {
  try {
    const { address, addressTypeId, cityId, stateId, countryId, userId } =
      req.body;

    // Check if address type already exists (case-insensitive) for the same user
    const duplicateAddressType = await Addresses.findOne({
      where: {
        userId,
        addressTypeId,
      },
    });
    if (duplicateAddressType) {
      return res.status(409).json({
        message: AddressesTypesErrors.ADDRESS_TYPE_ALREADY_EXISTS,
      });
    }

    //Check if addressTypeId exists in address type table
    const existingAddressType = await AddressesTypes.findByPk(addressTypeId);
    if (!existingAddressType) {
      return res.status(404).json({
        message: AddressesTypesErrors.ADDRESS_TYPE_NOT_FOUND,
      });
    }

    //Check if cityId exists in cities table
    const existingCity = await Cities.findByPk(cityId);
    if (!existingCity) {
      return res.status(404).json({
        message: CitiesErrors.CITY_NOT_FOUND,
      });
    }

    //Check if stateId exists in states table
    const existingState = await States.findByPk(stateId);
    if (!existingState) {
      return res.status(404).json({
        message: StatesErrors.STATE_NOT_FOUND,
      });
    }

    //Check if countryId exists in countries table
    const existingCountry = await Countries.findByPk(countryId);
    if (!existingCountry) {
      return res.status(404).json({
        message: CountriesErrors.COUNTRY_NOT_FOUND,
      });
    }

    //Check if userId exists in users table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(404).json({
        message: UsersErrors.USER_NOT_FOUND,
      });
    }

    // Check if address already exists (case-insensitive) for the same user
    const existingAddress = await Addresses.findOne({
      where: {
        userId,
        [Sequelize.Op.and]: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("address")),
          address.toLowerCase()
        ),
      },
    });
    if (existingAddress) {
      return res.status(409).json({
        message: AddressesErrors.ADDRESS_ALREADY_EXISTS,
      });
    }

    return req.body;
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  createAndUpdateAddress,
};
