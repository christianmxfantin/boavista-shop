const Roles = require("../models/Roles");
const Users = require("../models/Users");
const Addresses = require("../models/Addresses");
const Payments = require("../models/Payments");
const PaymentsType = require("../models/PaymentsType");
// const { v4: uuidv4 } = require("uuid");
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

        const users = await Users.bulkInsert(
          [
            {
              // id: uuidv4(),
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

        await Addresses.bulkInsert(
          [
            {
              type: "Casa",
              address: "Lavalleja 2232 5to Piso Depto 40",
              state: "Ciudad Autónoma de Buenos Aires",
              city: "Coghlan",
              country: "Argentina",
              phone: "(11) 4444-4589",
              userId: users[1].id,
            },
            {
              type: "Trabajo",
              address: "Azucena Villaflor 34",
              state: "Ciudad Autónoma de Buenos Aires",
              city: "Puerto Madero",
              country: "Argentina",
              phone: "(11) 4444-4589",
              userId: users[1].id,
            },
            {
              type: "Casa",
              address: "Av Mitre 4540",
              state: "Buenos Aires",
              city: "Avellaneda",
              country: "Argentina",
              phone: "(11) 3322-8765",
              userId: users[2].id,
            },
            {
              type: "Local",
              address: "Calle 5 N° 1340",
              state: "Buenos Aires",
              city: "La Plata",
              country: "Argentina",
              phone: "(0221) 45-3489",
              userId: users[2].id,
            },
          ],
          { transaction: t }
        );

        const paymentsType = await PaymentsType.bulkInsert(
          [
            {
              name: "Débito",
            },
            {
              name: "Crédito",
            },
          ],
          { transaction: t }
        );

        await Payments.bulkInsert(
          [
            {
              company_card: "Visa",
              final_number: "0072",
              paymentsTypeId: paymentsType[0].id,
              userId: users[1].id,
            },
            {
              company_card: "MasterCard",
              final_number: "4442",
              paymentsTypeId: paymentsType[1].id,
              userId: users[1].id,
            },
            {
              company_card: "Visa",
              final_number: "5454",
              paymentsTypeId: paymentsType[0].id,
              userId: users[2].id,
            },
            {
              company_card: "Visa",
              final_number: "9981",
              paymentsTypeId: paymentsType[1].id,
              userId: users[2].id,
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
