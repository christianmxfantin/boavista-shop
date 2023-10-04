const db = require("../../db/models/index.js");
const cloudinary = require("../../utils/cloudinary.js");
const ErrorHandler = require("../../utils/errorHandler.js");
const { hashPassword } = require("../../utils/hashPassword.js");
const logger = require("../../utils/logger.js");
const { RolesErrors } = require("../roles/roles.errors");
const { UsersErrors } = require("./users.errors.js");

const Users = db.users;
const Roles = db.roles;

const createAndUpdateUser = async (req, res, next, type) => {
  try {
    let avatarURL, names, surnames, email, password, roleId;

    if (type !== "login") {
      ({ avatarURL, names, surnames, email, password, roleId } = req.body);
    } else {
      ({ email, password } = req.body);
    }

    //Check the password with RegExp before hash
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,18}$/;
    if (type !== "users-update") {
      if (!regexPassword.test(password)) {
        return res.status(400).json({
          message: UsersErrors.PASSWORD_INVALID,
        });
      }
    }

    //Check if email is already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (type === "login") {
      if (!existingEmail) {
        return res.status(400).json({
          message: UsersErrors.EMAIL_INVALID,
        });
      }
    }
    if (type !== "login" && type !== "users-update") {
      if (existingEmail) {
        return res.status(409).json({
          message: UsersErrors.EMAIL_ALREADY_EXISTS,
        });
      }
    }

    //Check if roleId exists in role table
    const existingRole = await Roles.findByPk(roleId);
    if (type !== "login") {
      if (!existingRole) {
        return res.status(404).json({
          message: RolesErrors.ROLE_NOT_FOUND,
        });
      }
    }

    //Check role name (ni user ni admin)
    if (type === "register") {
      if (existingRole.name.toLowerCase().trim() !== "web") {
        return res.status(404).json({
          message: UsersErrors.ROLE_ERROR,
        });
      }
    }

    //Check role name (ni web ni admin)
    if (type === "users-create") {
      if (existingRole.name.toLowerCase().trim() !== "user") {
        return res.status(404).json({
          message: UsersErrors.ROLE_ERROR,
        });
      }
    }

    //Provisional Image for new users
    const provisionalImage =
      "https://res.cloudinary.com/christianmxfantin/image/upload/v1694915142/boavista-shop/avatar/sxdnfsf6kajii72ws3e5.jpg";

    //Upload image and obtain the URL
    let imageURL;
    if (type !== "login") {
      if (avatarURL !== "https://res.cloudinary.com/image.jpg") {
        imageURL = await cloudinary.v2.uploader.upload(avatarURL, {
          folder: "boavista-shop/avatar",
        });
      }
    }

    //Hash the password and create the user
    const hashedPassword = await hashPassword(password);

    return type !== "login"
      ? {
          avatarURL:
            avatarURL === "https://res.cloudinary.com/image.jpg"
              ? provisionalImage
              : imageURL.url,
          names,
          surnames,
          email,
          password: type === "users-update" ? password : hashedPassword,
          roleId,
        }
      : {
          id: existingEmail.id,
          avatarURL: existingEmail.avatarURL,
          names: existingEmail.names,
          surnames: existingEmail.surnames,
          email: existingEmail.email,
          password,
          storedPassword: existingEmail.password,
          roleId: existingEmail.roleId,
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
