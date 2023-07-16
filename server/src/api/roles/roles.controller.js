const Roles = require("../../db/models/Roles.js");

const getRoles = async (req, res) => {
  try {
    const response = await Roles.findAll();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Roles.findByPk(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const createRole = async (req, res) => {
  try {
    const response = await Roles.create(req.body);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { names, surnames, email, password } = req.body;

    const response = await Roles.findByPk(id);
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

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    await Roles.destroy({
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
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
