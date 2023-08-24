const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { ApiErrors } = require("../api/api.errors.js");
const { AddressesErrors } = require("./addresses.errors.js");
const { createAndUpdateAddress } = require("./addresses.validations.js");

const Addresses = db.addresses;

const getAddresses = async (req, res, next) => {
  try {
    const addresses = await Addresses.findAll();

    return res.status(200).json(addresses);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getAddressById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingAddress = await Addresses.findByPk(id);
    if (!existingAddress) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    return res.status(200).json(existingAddress);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createAddress = async (req, res, next) => {
  try {
    const addressData = await createAndUpdateAddress(req, res, next);
    if (addressData) {
      const newAddress = await Addresses.create(addressData);
      return res.status(201).json(newAddress);
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateAddress = async (req, res, next) => {
  try {
    const { id } = req.params;

    const addressData = await createAndUpdateAddress(req, res, next);
    if (addressData) {
      //Check if address id exists
      const existingAddress = await Addresses.findByPk(id);
      if (!existingAddress) {
        return res.status(404).json({
          message: ApiErrors.ID_NOT_FOUND,
        });
      }
      const updateAddress = await existingAddress.update(addressData);

      return res.status(200).json(updateAddress);
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteAddress = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingAddress = await Addresses.findByPk(id);
    if (!existingAddress) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    await Addresses.destroy({
      where: {
        id,
      },
    });

    return res.sendStatus(204);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  getAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
};
