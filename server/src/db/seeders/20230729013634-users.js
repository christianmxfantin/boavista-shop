const Roles = require("../models/Roles");
const Users = require("../models/Users");
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
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      try {
        const roles = await Roles.bulkInsert(
          [
            {
              name: "Admin",
            },
            {
              name: "User",
            },
            {
              name: "Web",
            },
          ],
          { transaction: t }
        );

        await Users.bulkInsert(
          [
            {
              id: uuidv4(),
              // imageURL: "",
              names: "Romina",
              surnames: "Echegazi",
              email: "rechegazi@boavista.com",
              password: generatePassword(),
              createdAt: new Date(),
              updatedAt: new Date(),
              roleId: roles[0].id, //admin
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
              roleId: roles[1].id, //user
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
              roleId: roles[2].id, //web
            },
          ],
          { transaction: t }
        );

        //Confirm the transaction
        await t.commit();
      } catch (error) {
        //Undo the transaction
        await t.rollback();
        throw error;
      }
    });
  },
};
