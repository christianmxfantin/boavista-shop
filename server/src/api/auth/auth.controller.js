const Users = require("../../db/models/Users.js");

const singIn = async (req, res) => {
  try {
    // const response = await Users.findAll();
    // res.status(200).send(response);
    res.status(200).send("User logged");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const singOut = async (req, res) => {
  try {
    // const response = await Users.findAll();
    // res.status(200).send(response);
    res.status(200).send("User is singout");
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
  singIn,
  singOut,
  googleAuth,
};
