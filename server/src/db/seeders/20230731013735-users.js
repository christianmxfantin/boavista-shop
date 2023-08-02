const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

const db = require("../../db/models/index.js");
const Roles = db.roles;

const generatePassword = () => {
  // Crea un buffer con bytes aleatorios
  const buffer = crypto.randomBytes(18);

  // Convierte los bytes en una cadena hexadecimal
  const randomPassword = buffer.toString("hex");

  return randomPassword;
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
        password: generatePassword(),
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
        password: generatePassword(),
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
        password: generatePassword(),
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: roles[2].dataValues.id, //web
      },
    ]);
  },
};
