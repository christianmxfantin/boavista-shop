const { v4: uuidv4 } = require("uuid");
const argon2 = require("argon2");
const crypto = require("crypto");

const db = require("../../db/models/index.js");
const Roles = db.roles;

//Helper for Hash the Password
const hashPassword = (password) => {
  const salt = crypto.randomBytes(32);
  const hashedPassword = argon2.hash(password, { salt });

  return hashedPassword;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = await Roles.findAll();

    return queryInterface.bulkInsert("users", [
      {
        id: uuidv4(),
        // imageURL: "",
        names: "Romina",
        surnames: "Echegazi",
        email: "rechegazi@boavista.com",
        password: await hashPassword("Carola2023"),
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: roles[0].dataValues.id, //admin
      },
      {
        id: uuidv4(),
        // imageURL: "",
        names: "Juan Ernesto",
        surnames: "García",
        email: "jgarcia@boavista.com",
        password: await hashPassword("Ernesto2023"),
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: roles[1].dataValues.id, //user
      },
      {
        id: uuidv4(),
        // imageURL: "",
        names: "Federico",
        surnames: "Del Solar",
        email: "fededelsolar@gmail.com",
        password: await hashPassword("Azul2024"),
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: roles[2].dataValues.id, //web
      },
    ]);
  },
};
