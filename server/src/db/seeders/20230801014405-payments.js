const { v4: uuidv4 } = require("uuid");

const db = require("../models/index.js");
const Users = db.users;
const PaymentsTypes = db.paymentsTypes;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await Users.findAll();
    const paymentsTypes = await PaymentsTypes.findAll();

    return queryInterface.bulkInsert("payments", [
      {
        id: uuidv4(),
        company_card: "Visa",
        final_number: "0072",
        paymentTypeId: paymentsTypes[0].id,
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        company_card: "MasterCard",
        final_number: "4442",
        paymentTypeId: paymentsTypes[1].id,
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        company_card: "Visa",
        final_number: "5454",
        paymentTypeId: paymentsTypes[0].id,
        userId: users[2].id,
      },
      {
        id: uuidv4(),
        company_card: "Visa",
        final_number: "9981",
        paymentTypeId: paymentsTypes[1].id,
        userId: users[2].id,
      },
    ]);
  },
};
