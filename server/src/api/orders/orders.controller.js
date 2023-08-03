const db = require("../../db/models/index.js");

const Orders = db.orders;
const Users = db.users;

const getOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingOrder = await Orders.findByPk(id);
    if (!existingOrder) {
      return res.status(409).json({
        message: "Conflict: This order doesn't exist",
      });
    }

    return res.status(200).json(existingOrder);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    //Check if userId exists in user table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(409).json({
        message: "Conflict: The user doesn't exist",
      });
    }

    const newOrder = await Orders.create(req.body);

    return res.status(201).send(newOrder);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const existingOrder = await Orders.findByPk(id);
    if (!existingOrder) {
      return res.status(409).json({
        message: "Conflict: This order doesn't exist",
      });
    }
    const updateOrder = await existingOrder.update(req.body);

    return res.status(200).json(updateOrder);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Orders.destroy({
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
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
