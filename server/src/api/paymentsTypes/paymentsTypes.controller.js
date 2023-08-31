const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { PaymentsTypesErrors } = require("./paymentsTypes.errors.js");
const { ApiErrors } = require("../api/api.errors.js");

const PaymentsTypes = db.paymentsTypes;

const getPaymentsTypes = async (req, res, next) => {
  try {
    const paymentsTypes = await PaymentsTypes.findAll();

    return res.status(200).json(paymentsTypes);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getPaymentTypeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingPaymentType = await PaymentsTypes.findByPk(id);
    if (!existingPaymentType) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    return res.status(200).json(existingPaymentType);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const paymentTypeByName = async (req, res, next) => {
  try {
    const name = req.body.name.trim();

    const existingPaymentType = await PaymentsTypes.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        Sequelize.fn("LOWER", name)
      ),
    });
    if (!existingPaymentType) {
      return res.status(200).json({
        message: PaymentsTypesErrors.PAYMENT_TYPE_IS_AVAILABLE,
      });
    }

    return res.status(200).json(existingPaymentType);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const createPaymentType = async (req, res, next) => {
  try {
    const name = req.body.name.trim();

    // Check if payment type already exists (case-insensitive)
    const existingPaymentType = await PaymentsTypes.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });

    if (existingPaymentType !== null) {
      return res.status(409).json({
        message: PaymentsTypesErrors.PAYMENT_TYPE_ALREADY_EXISTS,
      });
    }

    const newPaymentType = await PaymentsTypes.create(req.body);

    return res.status(201).json(newPaymentType);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updatePaymentType = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingPaymentType = await PaymentsTypes.findByPk(id);
    if (!existingPaymentType) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }
    const updatePaymentType = await existingPaymentType.update(req.body);

    return res.status(200).json(updatePaymentType);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deletePaymentType = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingPaymentType = await PaymentsTypes.findByPk(id);
    if (!existingPaymentType) {
      return res.status(404).json({
        message: ApiErrors.ID_NOT_FOUND,
      });
    }

    await PaymentsTypes.destroy({
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
  getPaymentsTypes,
  getPaymentTypeById,
  paymentTypeByName,
  createPaymentType,
  updatePaymentType,
  deletePaymentType,
};
