const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const Roles = require("../../db/models/Roles.js");
const Users = require("../../db/models/Users.js");

//Create a Secret for JWT
const TOKEN_SECRET = crypto.randomBytes(128).toString("hex");

const register = async (req, res) => {
  try {
    const { names, surnames, email, password, role_id } = req.body;

    //Check if email is already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({
        message: "Unauthorized: This email is already exists",
      });
    }

    //Check if role_id exists in role table
    const existingRole = await Roles.findByPk(role_id);
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
      role_id,
    };
    const savedUser = await Users.create(newUser);

    // Create a Token
    const token = jwt.sign({ id: savedUser.id }, TOKEN_SECRET, {
      expiresIn: 3600, // 1 hour
    });

    //Search the role and send cookie with data
    const role = { role: "Admin" };
    res.cookie("token", token);

    return res.status(201).json({
      id: savedUser.id,
      names: savedUser.names,
      surnames: savedUser.surnames,
      email: savedUser.email,
      role: role.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    // const response = await Users.findAll();
    // res.status(200).send(response);
    res.status(200).send("User logged");
  } catch (error) {
    res.status(500).send({ message: error.message });
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
