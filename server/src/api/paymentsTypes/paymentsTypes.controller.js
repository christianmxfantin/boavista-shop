const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");

const PaymentsTypes = db.paymentsTypes;

const getPaymentsTypes = async (req, res) => {
  try {
    const paymentsTypes = await PaymentsTypes.findAll();
    return res.status(200).json(paymentsTypes);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getPaymentTypeById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingPaymentType = await PaymentsTypes.findByPk(id);
    if (!existingPaymentType) {
      return res.status(409).json({
        message: "Conflict: This payment type doesn't exist",
      });
    }

    return res.status(200).json(existingPaymentType);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createPaymentType = async (req, res) => {
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
        message: "Unauthorized: This payment type already exists",
      });
    }

    const newPaymentType = await PaymentsTypes.create(req.body);

    return res.status(201).json(newPaymentType);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updatePaymentType = async (req, res) => {
  try {
    const { id } = req.params;

    const existingPaymentType = await PaymentsTypes.findByPk(id);
    if (!existingPaymentType) {
      return res.status(409).json({
        message: "Conflict: This payment type doesn't exist",
      });
    }
    const updatePaymentType = await existingPaymentType.update(req.body);

    return res.status(200).json(updatePaymentType);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deletePaymentType = async (req, res) => {
  try {
    const { id } = req.params;
    await PaymentsTypes.destroy({
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
  getPaymentsTypes,
  getPaymentTypeById,
  createPaymentType,
  updatePaymentType,
  deletePaymentType,
};
