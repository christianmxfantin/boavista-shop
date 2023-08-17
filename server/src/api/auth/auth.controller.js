const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const crypto = require("crypto");

const db = require("../../db/models/index.js");
const { UsersErrors } = require("../users/users.errors.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const { createAndUpdateUser } = require("../users/users.validations.js");

const Roles = db.roles;
const Users = db.users;

//Create a Secret for JWT
const TOKEN_SECRET = crypto.randomBytes(128).toString("hex");

const register = async (req, res, next) => {
  try {
    const userData = await createAndUpdateUser(req, res, next, "register");
    console.log(userData);
    if (userData) {
      const savedUser = await Users.create(userData);

      // Create a Token
      const token = jwt.sign({ id: savedUser.id }, TOKEN_SECRET, {
        expiresIn: 3600, // 1 hour
      });

      //Send cookie with data
      res.cookie("token", token);

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

const login = async (req, res, next) => {
  try {
    const userData = await createAndUpdateUser(req, res, next, "login");
    if (userData) {
      //Compare the password
      const storedPassword = userData.storedPassword.toString();
      const passwordIsValid = await argon2.verify(
        storedPassword,
        userData.password
      );
      if (!passwordIsValid) {
        return res.status(401).json({
          message: UsersErrors.PASSWORD_INVALID,
        });
      }

      // Create a Token
      const token = jwt.sign({ id: userData.id }, TOKEN_SECRET, {
        expiresIn: 3600, // 1 hour
      });

      //Send cookie with data
      res.cookie("token", token);

      return res.status(200).json({
        id: userData.id,
        names: userData.names,
        surnames: userData.surnames,
        email: userData.email,
        roleId: userData.roleId,
      });
    }
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const googleAuth = async (req, res, next) => {
  try {
    // const response = await Users.findAll();
    // res.status(200).send(response);
    return res.status(200).send("Google is authenticated");
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const token = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res.status(401).json({
        message: UsersErrors.TOKEN_INVALID,
      });

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error)
        return res.status(401).json({
          message: error,
        });

      const userFound = await Users.findByPk(user.id);
      if (!userFound)
        return res.status(401).json({
          message: UsersErrors.USER_NOT_FOUND,
        });

      return res.status(200).json({
        id: userFound.id,
        email: userFound.email,
      });
    });
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  register,
  login,
  googleAuth,
  token,
};
