const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { PaymentsErrors } = require("./payments.errors.js");
const { createAndUpdatePayment } = require("./payments.validations.js");

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
    const paymentData = await createAndUpdatePayment(req, res, next);
    if (paymentData) {
      const newPayment = await Payments.create(paymentData);
      return res.status(201).send(newPayment);
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updatePayment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const paymentData = await createAndUpdatePayment(req, res, next);
    if (paymentData) {
      //Check if payment id exists
      const existingPayment = await Payments.findByPk(id);
      if (!existingPayment) {
        return res.status(404).json({
          message: PaymentsErrors.PAYMENT_NOT_FOUND,
        });
      }

      const updatePayment = await existingPayment.update(paymentData);
      return res.status(200).json(updatePayment);
    }
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
