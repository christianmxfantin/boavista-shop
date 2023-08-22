const { v4: uuidv4 } = require("uuid");

const db = require("../models/index.js");
const CardCompanies = db.cardCompanies;
const PaymentsTypes = db.paymentsTypes;
const Users = db.users;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cardCompanies = await CardCompanies.findAll();
    const paymentsTypes = await PaymentsTypes.findAll();
    const users = await Users.findAll();

    return queryInterface.bulkInsert("payments", [
      {
        id: uuidv4(),
        finalNumber: "0072",
        cardCompanyId: cardCompanies[0].id,
        paymentTypeId: paymentsTypes[0].id,
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        finalNumber: "4442",
        cardCompanyId: cardCompanies[1].id,
        paymentTypeId: paymentsTypes[1].id,
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        finalNumber: "5454",
        cardCompanyId: cardCompanies[0].id,
        paymentTypeId: paymentsTypes[0].id,
        userId: users[2].id,
      },
      {
        id: uuidv4(),
        finalNumber: "9981",
        cardCompanyId: cardCompanies[0].id,
        paymentTypeId: paymentsTypes[1].id,
        userId: users[2].id,
      },
    ]);
  },
};
