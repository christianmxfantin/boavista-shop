const db = require("../../db/models/index.js");

const Payments = db.payments;
const PaymentsTypes = db.paymentsTypes;
const Users = db.users;

const getPayments = async (req, res) => {
  try {
    const payments = await Payments.findAll();
    return res.status(200).json(payments);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingPayment = await Payments.findByPk(id);
    if (!existingPayment) {
      return res.status(409).json({
        message: "Conflict: This payment doesn't exist",
      });
    }

    return res.status(200).json(existingPayment);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createPayment = async (req, res) => {
  try {
    const { paymentTypeId, userId } = req.body;

    //Check if paymentTypeId exists in payments-types table
    const existingPaymentType = await PaymentsTypes.findByPk(paymentTypeId);
    if (!existingPaymentType) {
      return res.status(409).json({
        message: "Conflict: The payment type doesn't exist",
      });
    }

    //Check if userId exists in user table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(409).json({
        message: "Conflict: The user doesn't exist",
      });
    }

    const newPayment = await Payments.create(req.body);

    return res.status(201).send(newPayment);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const existingPayment = await Payments.findByPk(id);
    if (!existingPayment) {
      return res.status(409).json({
        message: "Conflict: This payment doesn't exist",
      });
    }
    const updatePayment = await existingPayment.update(req.body);

    return res.status(200).json(updatePayment);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    await Payments.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};
