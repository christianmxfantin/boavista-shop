const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { DiscountsErrors } = require("./discounts.errors.js");

const Discounts = db.discounts;

const getDiscounts = async (req, res, next) => {
  try {
    const discounts = await Discounts.findAll();

    return res.status(200).json(discounts);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getDiscountById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingDiscount = await Discounts.findByPk(id);
    if (!existingDiscount) {
      return res.status(404).json({
        message: DiscountsErrors.DISCOUNT_NOT_FOUND,
      });
    }

    return res.status(200).json(existingDiscount);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createDiscount = async (req, res, next) => {
  try {
    const percentage = req.body.percentage;

    // Check if discount already exists
    const existingDiscount = await Discounts.findOne({
      where: { percentage },
    });
    if (existingDiscount !== null) {
      return res.status(409).json({
        message: DiscountsErrors.DISCOUNT_ALREADY_EXISTS,
      });
    }

    const newDiscount = await Discounts.create(req.body);

    return res.status(201).json(newDiscount);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateDiscount = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingDiscount = await Discounts.findByPk(id);
    if (!existingDiscount) {
      return res.status(404).json({
        message: DiscountsErrors.DISCOUNT_NOT_FOUND,
      });
    }
    const updateDiscount = await existingDiscount.update(req.body);

    return res.status(200).json(updateDiscount);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteDiscount = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingDiscount = await Discounts.findByPk(id);
    if (!existingDiscount) {
      return res.status(404).json({
        message: DiscountsErrors.DISCOUNT_NOT_FOUND,
      });
    }

    await Discounts.destroy({
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
  getDiscounts,
  getDiscountById,
  createDiscount,
  updateDiscount,
  deleteDiscount,
};
