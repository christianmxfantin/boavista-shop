const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");

const Discounts = db.discounts;

const getDiscounts = async (req, res) => {
  try {
    const discounts = await Discounts.findAll();
    return res.status(200).json(discounts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDiscountById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingDiscount = await Discounts.findByPk(id);
    if (!existingDiscount) {
      return res.status(409).json({
        message: "Conflict: This discount doesn't exist",
      });
    }

    return res.status(200).json(existingDiscount);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createDiscount = async (req, res) => {
  try {
    const percentage = req.body.percentage;

    // Check if discount already exists (case-insensitive)
    const existingDiscount = await Discounts.findOne({
      where: { percentage },
    });

    if (existingDiscount !== null) {
      return res.status(409).json({
        message: "Unauthorized: This discount already exists",
      });
    }

    const newDiscount = await Discounts.create(req.body);

    return res.status(201).json(newDiscount);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateDiscount = async (req, res) => {
  try {
    const { id } = req.params;

    const existingDiscount = await Discounts.findByPk(id);
    if (!existingDiscount) {
      return res.status(409).json({
        message: "Conflict: This discount doesn't exist",
      });
    }
    const updateDiscount = await existingDiscount.update(req.body);

    return res.status(200).json(updateDiscount);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deleteDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    await Discounts.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getDiscounts,
  getDiscountById,
  createDiscount,
  updateDiscount,
  deleteDiscount,
};
