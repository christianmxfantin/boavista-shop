const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { AddressesErrors } = require("./addresses.errors.js");

const Addresses = db.addresses;
const Users = db.users;

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
        message: AddressesErrors.ADDRESS_NOT_FOUND,
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
    const { userId } = req.body;

    //Check if userId exists in users table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(409).json({
        message: "Conflict: The user doesn't exist",
      });
    }

    const newAddress = await Addresses.create(req.body);

    return res.status(201).send(newAddress);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateAddress = async (req, res, next) => {
  try {
    const { id } = req.params;

    //Check if address id exists
    const existingAddress = await Addresses.findByPk(id);
    if (!existingAddress) {
      return res.status(409).json({
        message: "Conflict: This address doesn't exist",
      });
    }
    const updateAddress = await existingAddress.update(req.body);

    return res.status(200).json(updateAddress);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Addresses.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
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
