const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");

const Roles = db.roles;

const getRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    return res.status(200).json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;

    const existingRole = await Roles.findByPk(id);
    if (!existingRole) {
      return res.status(409).json({
        message: "Conflict: This role doesn't exist",
      });
    }

    return res.status(200).json(existingRole);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const createRole = async (req, res) => {
  try {
    const name = req.body.name.trim();

    // Check if role already exists (case-insensitive)
    const existingRole = await Roles.findOne({
      where: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        name.toLowerCase()
      ),
    });

    if (existingRole !== null) {
      return res.status(409).json({
        message: "Unauthorized: This role already exists",
      });
    }

    const newRole = await Roles.create(req.body);

    return res.status(201).json(newRole);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;

    const existingRole = await Roles.findByPk(id);
    if (!existingRole) {
      return res.status(409).json({
        message: "Conflict: This role doesn't exist",
      });
    }
    const updateRole = await existingRole.update(req.body);

    return res.status(200).json(updateRole);
  } catch (error) {
    return res.status(500).send({ message: error.message });
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
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
