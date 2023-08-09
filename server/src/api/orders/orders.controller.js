const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { UsersErrors } = require("../users/users.errors.js");
const { OrdersErrors } = require("./orders.errors.js");

const Orders = db.orders;
const Users = db.users;

const getOrders = async (req, res, next) => {
  try {
    const orders = await Orders.findAll();

    return res.status(200).json(orders);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingOrder = await Orders.findByPk(id);
    if (!existingOrder) {
      return res.status(404).json({
        message: OrdersErrors.ORDER_NOT_FOUND,
      });
    }

    return res.status(200).json(existingOrder);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createOrder = async (req, res, next) => {
  try {
    const { userId } = req.body;

    //Check if userId exists in user table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(404).json({
        message: UsersErrors.USER_NOT_FOUND,
      });
    }

    const newOrder = await Orders.create(req.body);

    return res.status(201).send(newOrder);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingOrder = await Orders.findByPk(id);
    if (!existingOrder) {
      return res.status(404).json({
        message: OrdersErrors.ORDER_NOT_FOUND,
      });
    }
    const updateOrder = await existingOrder.update(req.body);

    return res.status(200).json(updateOrder);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingOrder = await Orders.findByPk(id);
    if (!existingOrder) {
      return res.status(404).json({
        message: OrdersErrors.ORDER_NOT_FOUND,
      });
    }

    await Orders.destroy({
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
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
