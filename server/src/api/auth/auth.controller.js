const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const crypto = require("crypto");

const db = require("../../db/models/index.js");
const { UserErrors } = require("../users/users.errors.js");
const { RolesErrors } = require("../roles/roles.errors.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const logger = require("../../utils/logger.js");
const {
  namesValidate,
  surnamesValidate,
  emailValidate,
  passwordValidate,
} = require("../users/users.validations.js");
const { hashPassword } = require("../../utils/hashPassword.js");

const Roles = db.roles;
const Users = db.users;

//Create a Secret for JWT
const TOKEN_SECRET = crypto.randomBytes(128).toString("hex");

const register = async (req, res, next) => {
  try {
    const { names, surnames, email, password, roleId } = req.body;

    //Check if email is already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({
        message: UserErrors.EMAIL_ALREADY_EXISTS,
      });
    }

    //Check if roleId exists in role table
    const existingRole = await Roles.findByPk(roleId);
    if (!existingRole) {
      return res.status(409).json({
        message: RolesErrors.ROLE_NOT_FOUND,
      });
    }

    //Check quantity of password characters
    if (password.length < 8 || password.length > 18) {
      return res.status(401).json({
        message: UserErrors.PASSWORD_LENGTH,
      });
    }

    //Validate data with regex
    const namesValidated = namesValidate(names);
    if (!namesValidated) {
      return res.status(401).json({
        message: UserErrors.NAMES_INVALID,
      });
    }
    if (surnames.length !== 0) {
      const surnamesValidated = surnamesValidate(surnames);
      if (!surnamesValidated) {
        return res.status(401).json({
          message: UserErrors.SURNAMES_INVALID,
        });
      }
    }
    const emailValidated = emailValidate(email);
    if (!emailValidated) {
      return res.status(401).json({
        message: UserErrors.EMAIL_INVALID,
      });
    }
    const passwordValidated = passwordValidate(password);
    if (!passwordValidated) {
      return res.status(401).json({
        message: UserErrors.PASSWORD_INVALID,
      });
    }

    //Hash the password and create the user
    const hashedPassword = await hashPassword(password);
    const newUser = {
      names,
      surnames,
      email,
      password: hashedPassword,
      roleId,
    };
    const savedUser = await Users.create(newUser);

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
      role: "Web",
    });
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Check if user exists
    const userFound = await Users.findOne({ where: { email } });
    if (!userFound) {
      return res.status(401).json({
        message: UserErrors.EMAIL_INVALID,
      });
    }

    //Check if roleId exists in role table
    const existingRole = await Roles.findByPk(userFound.roleId);
    if (!existingRole) {
      return res.status(409).json({
        message: RolesErrors.ROLE_NOT_FOUND,
      });
    }

    //Check quantity of password characters
    if (password.length < 8 || password.length > 18) {
      return res.status(401).json({
        message: UserErrors.PASSWORD_LENGTH,
      });
    }

    //Validate data with regex
    const emailValidated = emailValidate(email);
    if (!emailValidated) {
      return res.status(401).json({
        message: UserErrors.EMAIL_INVALID,
      });
    }
    const passwordValidated = passwordValidate(password);
    if (!passwordValidated) {
      return res.status(401).json({
        message: UserErrors.PASSWORD_INVALID,
      });
    }

    //Compare the password
    const storedPassword = userFound.password.toString();
    const passwordIsValid = await argon2.verify(storedPassword, password);
    if (!passwordIsValid) {
      return res.status(401).json({
        message: UserErrors.PASSWORD_INVALID,
      });
    }

    // Create a Token
    const token = jwt.sign({ id: userFound.id }, TOKEN_SECRET, {
      expiresIn: 3600, // 1 hour
    });

    //Send cookie with data
    res.cookie("token", token);

    return res.status(201).json({
      id: userFound.id,
      names: userFound.names,
      surnames: userFound.surnames,
      email: userFound.email,
      role: existingRole.name,
    });
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

const token = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res.status(401).json({
        message: UserErrors.TOKEN_INVALID,
      });

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error)
        return res.status(401).json({
          message: error,
        });

      const userFound = await Users.findByPk(user.id);
      if (!userFound)
        return res.status(401).json({
          message: UserErrors.USER_NOT_FOUND,
        });

      return res.status(200).json({
        id: userFound.id,
        email: userFound.email,
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  googleAuth,
  token,
};
