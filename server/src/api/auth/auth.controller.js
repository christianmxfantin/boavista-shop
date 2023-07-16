const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const Roles = require("../../db/models/Roles.js");
const Users = require("../../db/models/Users.js");

const singUp = async (req, res) => {
  try {
    const { names, surnames, email, password, role_id } = req.body;

    //Check if email is already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      res.status(409).json({
        message: "Unauthorized: This email is already exists",
      });
    }

    //Check if role_id exists in role table
    const existingRole = await Roles.findByPk(role_id);
    if (!existingRole) {
      res.status(409).json({
        message: "Conflict: This role doesn't exist",
      });
    }

    //Check the password isn't empty
    if (password === "") {
      res.status(401).json({
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

    //Create a Secret for JWT
    const secret = crypto.randomBytes(128).toString("hex");

    // Create a Token
    const token = jwt.sign({ id: savedUser.id }, secret, {
      expiresIn: 3600, // 1 hour
    });

    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const singIn = async (req, res) => {
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

module.exports = {
  singUp,
  singIn,
  googleAuth,
};
