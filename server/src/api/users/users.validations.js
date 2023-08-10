const db = require("../../db/models/index.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const { hashPassword } = require("../../utils/hashPassword.js");
const logger = require("../../utils/logger.js");
const { RolesErrors } = require("../roles/roles.errors");
const { UsersErrors } = require("./users.errors.js");

const Users = db.users;
const Roles = db.roles;

const createAndUpdateUser = async (req, res, next) => {
  try {
    const { names, surnames, email, password, roleId } = req.body;

    //Check the password with RegExp before hash
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,18}$/;
    if (!regexPassword.test(password)) {
      return res.status(400).json({
        message: UsersErrors.PASSWORD_INVALID,
      });
    }

    //Check if roleId exists in role table
    const existingRole = await Roles.findByPk(roleId);
    if (!existingRole) {
      return res.status(404).json({
        message: RolesErrors.ROLE_NOT_FOUND,
      });
    }

    //Check if role name be different of Web or Admin
    if (existingRole.name !== "User") {
      return res.status(404).json({
        message: UsersErrors.ROLE_ERROR,
      });
    }

    //Check if email is already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({
        message: UsersErrors.EMAIL_ALREADY_EXISTS,
      });
    }

    //Hash the password and create the user
    const hashedPassword = await hashPassword(password);
    return {
      names,
      surnames,
      email,
      password: hashedPassword,
      roleId,
    };
  } catch (err) {
    const error = new ErrorHandler(err.message, err.statusCode);
    logger.error(err);
    next(error);
  }
};

module.exports = {
  createAndUpdateUser,
};
