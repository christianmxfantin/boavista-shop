const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

const generatePassword = () => {
  // Crea un buffer con bytes aleatorios
  const buffer = crypto.randomBytes(18);

  // Convierte los bytes en una cadena hexadecimal
  const randomPassword = buffer.toString("hex");

  return randomPassword;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
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
        roleId: "45b5890a-16a6-4fa5-ad2e-e441d86f8fe5", //admin
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
        roleId: "f8e963ef-14d6-4194-9d6f-0a7905f3ac76", //user
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
        roleId: "a61337e6-545a-447a-88da-a651c96f9b20", //web
      },
    ]);
  },
};
