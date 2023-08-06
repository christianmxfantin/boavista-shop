const bcrypt = require("bcryptjs");
const db = require("../../db/models/index.js");
const { RolesErrors } = require("../roles/roles.errors.js");
const { UserErrors } = require("./users.errors.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");

const Users = db.users;
const Roles = db.roles;

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
        message: UserErrors.USER_NOT_FOUND,
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
    const { names, surnames, email, password, roleId } = req.body;

    const regexName = /^[\p{L} -]+$/u;
    if (!regexName.test(names)) {
      return res.status(401).json({
        message: UserErrors.NAMES_INVALID,
      });
    }

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!regexEmail.test(email)) {
      return res.status(401).json({
        message: UserErrors.EMAIL_INVALID,
      });
    }

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regexPassword.test(password)) {
      return res.status(401).json({
        message: UserErrors.PASSWORD_INVALID,
      });
    }

    //Check if roleId exists in role table
    const existingRole = await Roles.findByPk(roleId);
    if (!existingRole) {
      return res.status(404).json({
        message: RolesErrors.ROLE_NOT_FOUND,
      });
    }

    //Check if email is already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({
        message: UserErrors.EMAIL_ALREADY_EXISTS,
      });
    }

    //Hash the password and create the user
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      names,
      surnames,
      email,
      password: hashedPassword,
      roleId,
    };
    const savedUser = await Users.create(newUser);

    return res.status(201).json({
      id: savedUser.id,
      names: savedUser.names,
      surnames: savedUser.surnames,
      email: savedUser.email,
      role: "User",
    });
  } catch (err) {
    const error = new ErrorHandler(err);
    logger.error(err);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingUser = await Users.findByPk(id);
    if (!existingUser) {
      return res.status(404).json({
        message: UserErrors.USER_NOT_FOUND,
      });
    }
    const updateUser = await existingUser.update(req.body);

    return res.status(200).json(updateUser);
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
        message: UserErrors.USER_NOT_FOUND,
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
