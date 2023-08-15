const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const {
  PaymentsTypesErrors,
} = require("../paymentsTypes/paymentsTypes.errors.js");
const { UsersErrors } = require("../users/users.errors.js");
const { PaymentsErrors } = require("./payments.errors.js");

const Payments = db.payments;
const PaymentsTypes = db.paymentsTypes;
const Users = db.users;

const getPayments = async (req, res, next) => {
  try {
    const payments = await Payments.findAll();

    return res.status(200).json(payments);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getPaymentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingPayment = await Payments.findByPk(id);
    if (!existingPayment) {
      return res.status(404).json({
        message: PaymentsErrors.PAYMENT_NOT_FOUND,
      });
    }

    return res.status(200).json(existingPayment);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createPayment = async (req, res, next) => {
  try {
    const { paymentTypeId, userId } = req.body;

    //Check if paymentTypeId exists in payments-types table
    const existingPaymentType = await PaymentsTypes.findByPk(paymentTypeId);
    if (!existingPaymentType) {
      return res.status(404).json({
        message: PaymentsTypesErrors.PAYMENT_TYPE_NOT_FOUND,
      });
    }

    //Check if userId exists in user table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(404).json({
        message: UsersErrors.USER_NOT_FOUND,
      });
    }

    const newPayment = await Payments.create(req.body);

    return res.status(201).send(newPayment);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updatePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { paymentTypeId, userId } = req.body;

    const existingPayment = await Payments.findByPk(id);
    if (!existingPayment) {
      return res.status(404).json({
        message: PaymentsErrors.PAYMENT_NOT_FOUND,
      });
    }

    //Check if paymentTypeId exists in payments-types table
    const existingPaymentType = await PaymentsTypes.findByPk(paymentTypeId);
    if (!existingPaymentType) {
      return res.status(404).json({
        message: PaymentsTypesErrors.PAYMENT_TYPE_NOT_FOUND,
      });
    }

    //Check if userId exists in user table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(404).json({
        message: UsersErrors.USER_NOT_FOUND,
      });
    }

    const updatePayment = await existingPayment.update(req.body);

    return res.status(200).json(updatePayment);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deletePayment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingPayment = await Payments.findByPk(id);
    if (!existingPayment) {
      return res.status(404).json({
        message: PaymentsErrors.PAYMENT_NOT_FOUND,
      });
    }

    await Payments.destroy({
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
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};
