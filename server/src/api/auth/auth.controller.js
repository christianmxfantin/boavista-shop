const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const Roles = require("../../db/models/Roles.js");
const Users = require("../../db/models/Users.js");

//Create a Secret for JWT
const TOKEN_SECRET = crypto.randomBytes(128).toString("hex");

const register = async (req, res) => {
  try {
    const { names, surnames, email, password, roleId } = req.body;

    //Check if email is already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({
        message: "Unauthorized: This email is already exists",
      });
    }

    //Check if role_id exists in role table
    //It's only for users type web
    const existingRole = await Roles.findByPk(roleId);
    if (!existingRole) {
      return res.status(409).json({
        message: "Conflict: This role doesn't exist",
      });
    }

    //Check the password isn't empty
    if (password === "") {
      return res.status(401).json({
        message: "Unauthorized: This password is empty",
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check if user exists
    const userFound = await Users.findOne({ where: { email } });
    if (!userFound) {
      return res.status(401).json({
        message: "Unauthorized: This email doesn't exist",
      });
    }
    // const userFound = userSearch.users.dataValues;
    // console.log(userSearch.users);
    // console.log(userFound);

    //Check if role_id exists in role table
    const existingRole = await Roles.findByPk(userFound.roleId);
    if (!existingRole) {
      return res.status(409).json({
        message: "Conflict: This role doesn't exist",
      });
    }

    //Check the password isn't empty
    if (password === "") {
      return res.status(401).json({
        message: "Unauthorized: This password is empty",
      });
    }

    // console.log(req.body);
    // console.log(password, userFound.password);

    //Compare the password
    // bcrypt.compare(password, userFound.password, (err, result) => {
    //   if (err || !result) {
    //     return res.status(401).json({
    //       message: ["Unauthorized: The password is invalid"],
    //     });
    //   }
    // });

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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const googleAuth = async (req, res) => {
  try {
    // const response = await Users.findAll();
    // res.status(200).send(response);
    res.status(200).send("Google is authenticated");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const token = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res.status(401).json({
        message: "Unauthorized: The user is invalid",
      });

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error)
        return res.status(401).json({
          message: error,
        });

      const userFound = await Users.findByPk(user.id);
      if (!userFound)
        return res.status(401).json({
          message: "Unauthorized: The user is invalid",
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
