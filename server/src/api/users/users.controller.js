const Users = require("../../db/models/Users.js");

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: { exclude: ["password"] },
    });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return res.status(409).json({
        message: "Conflict: This role doesn't exist",
      });
    }

    return res.status(200).json(existingUser);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const response = await Users.create(req.body);
    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return res.status(409).json({
        message: "Conflict: This user doesn't exist",
      });
    }
    const updateUser = await existingUser.update(req.body);

    return res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({
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
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
