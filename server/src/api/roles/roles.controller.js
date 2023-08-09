const { Sequelize } = require("sequelize");
const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { RolesErrors } = require("./roles.errors.js");

const Roles = db.roles;

const getRoles = async (req, res, next) => {
  try {
    const roles = await Roles.findAll();

    return res.status(200).json(roles);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getRoleById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingRole = await Roles.findByPk(id);
    if (!existingRole) {
      return res.status(404).json({
        message: RolesErrors.ROLE_NOT_FOUND,
      });
    }

    return res.status(200).json(existingRole);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
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
      return res.status(404).json({
        message: RolesErrors.ROLE_NOT_FOUND,
      });
    }

    const newRole = await Roles.create(req.body);

    return res.status(201).json(newRole);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateRole = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingRole = await Roles.findByPk(id);
    if (!existingRole) {
      return res.status(404).json({
        message: RolesErrors.ROLE_NOT_FOUND,
      });
    }
    const updateRole = await existingRole.update(req.body);

    return res.status(200).json(updateRole);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteRole = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingRole = await Roles.findByPk(id);
    if (!existingRole) {
      return res.status(404).json({
        message: RolesErrors.ROLE_NOT_FOUND,
      });
    }

    await Roles.destroy({
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
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
