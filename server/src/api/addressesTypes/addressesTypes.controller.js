const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { AddressesTypesErrors } = require("./addressesTypes.errors.js");

const AddressesTypes = db.addressesTypes;

const getAddressesTypes = async (req, res, next) => {
  try {
    const addressesTypes = await AddressesTypes.findAll();

    return res.status(200).json(addressesTypes);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getAddressTypeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingAddressType = await AddressesTypes.findByPk(id);
    if (!existingAddressType) {
      return res.status(404).json({
        message: AddressesTypesErrors.ADDRESS_TYPE_NOT_FOUND,
      });
    }

    return res.status(200).json(existingAddressType);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createAddressType = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const name = req.body.name.trim();

    // Check if address type already exists (case-insensitive)
    const existingAddressType = await AddressesTypes.findOne({
      where: {
        userId,
        [Sequelize.Op.and]: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("name")),
          name.toLowerCase()
        ),
      },
    });
    if (existingAddressType) {
      return res.status(409).json({
        message: AddressesTypesErrors.ADDRESS_TYPE_ALREADY_EXISTS,
      });
    }

    const newAddressType = await AddressesTypes.create(req.body);

    return res.status(201).json(newAddressType);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateAddressType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const name = req.body.name.trim();

    const existingAddressType = await AddressesTypes.findByPk(id);
    if (!existingAddressType) {
      return res.status(404).json({
        message: AddressesTypesErrors.ADDRESS_TYPE_NOT_FOUND,
      });
    }

    // Check if address type already exists (case-insensitive)
    const existingAddressName = await AddressesTypes.findOne({
      where: {
        userId,
        [Sequelize.Op.and]: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("name")),
          name.toLowerCase()
        ),
      },
    });
    if (existingAddressName) {
      return res.status(409).json({
        message: AddressesTypesErrors.ADDRESS_TYPE_ALREADY_EXISTS,
      });
    }

    const updateAddressType = await existingAddressType.update(req.body);

    return res.status(200).json(updateAddressType);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteAddressType = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingAddressType = await AddressesTypes.findByPk(id);
    if (!existingAddressType) {
      return res.status(404).json({
        message: AddressesTypesErrors.ADDRESS_TYPE_NOT_FOUND,
      });
    }

    await AddressesTypes.destroy({
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
  getAddressesTypes,
  getAddressTypeById,
  createAddressType,
  updateAddressType,
  deleteAddressType,
};
