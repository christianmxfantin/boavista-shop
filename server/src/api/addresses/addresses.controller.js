const db = require("../../db/models/index.js");

const Addresses = db.addresses;
const Users = db.users;

const getAddresses = async (req, res) => {
  try {
    const addresses = await Addresses.findAll();
    return res.status(200).json(addresses);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getAddressById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingAddress = await Addresses.findByPk(id);
    if (!existingAddress) {
      return res.status(409).json({
        message: "Conflict: This address doesn't exist",
      });
    }

    return res.status(200).json(existingAddress);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createAddress = async (req, res) => {
  try {
    const { userId } = req.body;

    //Check if userId exists in users table
    const existingUser = await Users.findByPk(userId);
    if (!existingUser) {
      return res.status(409).json({
        message: "Conflict: The user doesn't exist",
      });
    }

    const newAddress = await Addresses.create(req.body);

    return res.status(201).send(newAddress);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;

    //Check if address id exists
    const existingAddress = await Addresses.findByPk(id);
    if (!existingAddress) {
      return res.status(409).json({
        message: "Conflict: This address doesn't exist",
      });
    }
    const updateAddress = await existingAddress.update(req.body);

    return res.status(200).json(updateAddress);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    await Addresses.destroy({
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
  getAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
};
