const Users = require("../../db/models/Users.js");

const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: { exclude: ["password"] },
    });

    // res.status(200).send(response);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Users.findByPk(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const response = await Users.create(req.body);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { names, surnames, email, password } = req.body;

    const response = await Users.findByPk(id);
    response.names = names;
    response.surnames = surnames;
    response.email = email;
    response.password = password;

    await response.save(req.body);
    res.status(200).send(response);
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
