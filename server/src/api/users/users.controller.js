const db = require("../../db/models/index.js");
const { UsersErrors } = require("./users.errors.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { createAndUpdateUser } = require("./users.validations.js");

const Users = db.users;

const getUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll({
      attributes: { exclude: ["password"] },
    });

    return res.status(200).json(users);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return res.status(404).json({
        message: UsersErrors.USER_NOT_FOUND,
      });
    }

    return res.status(200).json(existingUser);
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};
const createUser = async (req, res, next) => {
  try {
    const userData = await createAndUpdateUser(req, res, next, "users-create");
    if (userData) {
      const savedUser = await Users.create(userData);

      return res.status(201).json({
        id: savedUser.id,
        names: savedUser.names,
        surnames: savedUser.surnames,
        email: savedUser.email,
        roleId: savedUser.roleId,
      });
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userData = await createAndUpdateUser(req, res, next, "users-update");
    if (userData) {
      console.log("DESPUES DEL CHECK: ", userData);

      //Check if user id exists
      const existingUser = await Users.findByPk(id);
      if (!existingUser) {
        return res.status(404).json({
          message: UsersErrors.USER_NOT_FOUND,
        });
      }

      const updatedUser = await existingUser.update(userData);
      return res.status(200).json({
        id: updatedUser.id,
        names: updatedUser.names,
        surnames: updatedUser.surnames,
        email: updatedUser.email,
        roleId: updatedUser.roleId,
      });
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return res.status(404).json({
        message: UsersErrors.USER_NOT_FOUND,
      });
    }

    await Users.destroy({
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
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
