const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("card-companies", [
      {
        id: uuidv4(),
        name: "Visa",
      },
      {
        id: uuidv4(),
        name: "Mastercard",
      },
    ]);
  },
};
